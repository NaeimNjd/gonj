/* ===================== INIT ===================== */
document.addEventListener("DOMContentLoaded", () => {
  // sticky nav shadow
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // hero category dropdowns
  const hcats = Array.prototype.slice.call(document.querySelectorAll(".hcat"));
  const closeHcats = () => hcats.forEach((c) => {
    c.classList.remove("open");
    const b = c.querySelector(".hcat-btn");
    if (b) b.setAttribute("aria-expanded", "false");
  });
  hcats.forEach((cat) => {
    const btn = cat.querySelector(".hcat-btn");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !cat.classList.contains("open");
      closeHcats();
      cat.classList.toggle("open", willOpen);
      btn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
    cat.querySelectorAll(".hcat-drop a").forEach((a) =>
      a.addEventListener("click", closeHcats)
    );
  });
  document.addEventListener("click", (e) => {
    if (!hcats.some((c) => c.contains(e.target))) closeHcats();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeHcats(); });

  // scroll-driven feature switcher (Unsere Leistungen)
  const lz = document.getElementById("lz");
  if (lz) {
    const list = lz.querySelector(".lz-list");
    const items = Array.prototype.slice.call(lz.querySelectorAll(".lz-item"));
    const visuals = Array.prototype.slice.call(lz.querySelectorAll(".lz-visual"));
    let current = -1;
    const setActive = (idx) => {
      if (idx === current) return;
      current = idx;
      items.forEach((it, i) => {
        it.classList.toggle("active", i === idx);
        it.setAttribute("aria-expanded", i === idx ? "true" : "false");
      });
      visuals.forEach((v, i) => v.classList.toggle("active", i === idx));
    };
    setActive(0);
    items.forEach((it, i) => it.addEventListener("click", () => setActive(i)));
  }

  // (integrations tile graphic removed — logo-only hero now)

  // (old particle-wordmark canvas removed — replaced by uploaded F1 chip logo)

  // ===================== ANFRAGE / TERMIN MODAL =====================
  const modal = document.getElementById("quoteModal");
  if (modal) {
    const $ = (id) => document.getElementById(id);
    const stepEls = {};
    modal.querySelectorAll(".qm-step").forEach((s) => { stepEls[s.dataset.step] = s; });
    const prog = $("qmProg"), sub = $("qmSub"), errEl = $("qmErr");
    const backBtn = $("qmBack"), nextBtn = $("qmNext"), serviceSel = $("qservice");
    const SERVICE_LABELS = {
      website: "Website-Erstellung", erp: "ERP-System", crm: "CRM-System",
      server: "Server & Infrastruktur", cloud: "Cloud Migration",
      support: "IT-Support", ki: "KI & Automatisierung", other: "Sonstiges"
    };
    let flow = [], idx = 0, done = false, selectedTier = null, selectedDate = null;

    // build time options 09:00–17:00
    const timeSel = $("qTime");
    for (let h = 9; h <= 17; h++) {
      ["00", "30"].forEach((m) => {
        if (h === 17 && m === "30") return;
        const o = document.createElement("option");
        o.textContent = (h < 10 ? "0" + h : h) + ":" + m;
        timeSel.appendChild(o);
      });
    }

    // tier selection
    modal.querySelectorAll(".qm-tier").forEach((t) => {
      t.addEventListener("click", () => {
        modal.querySelectorAll(".qm-tier").forEach((x) => x.classList.remove("sel"));
        t.classList.add("sel");
        selectedTier = { name: t.dataset.tier, price: t.dataset.price };
      });
    });

    // calendar
    const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    let calCursor = new Date(); calCursor.setDate(1);
    const renderCal = () => {
      const y = calCursor.getFullYear(), m = calCursor.getMonth();
      $("qCalLabel").textContent = MONTHS[m] + " " + y;
      const grid = $("qCalGrid"); grid.innerHTML = "";
      const offset = (new Date(y, m, 1).getDay() + 6) % 7; // Mon=0
      for (let i = 0; i < offset; i++) { const p = document.createElement("span"); p.className = "pad"; grid.appendChild(p); }
      const days = new Date(y, m + 1, 0).getDate();
      const today = new Date(); today.setHours(0, 0, 0, 0);
      for (let d = 1; d <= days; d++) {
        const dt = new Date(y, m, d);
        const b = document.createElement("button"); b.type = "button"; b.textContent = d;
        if (dt < today || dt.getDay() === 0) b.disabled = true; // past & Sundays
        if (selectedDate && dt.toDateString() === selectedDate.toDateString()) b.classList.add("sel");
        b.addEventListener("click", () => { selectedDate = dt; renderCal(); });
        grid.appendChild(b);
      }
    };
    $("qCalPrev").addEventListener("click", () => { calCursor.setMonth(calCursor.getMonth() - 1); renderCal(); });
    $("qCalNext").addEventListener("click", () => { calCursor.setMonth(calCursor.getMonth() + 1); renderCal(); });

    const fmtDate = (d) => d ? ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear() : "";

    const computeFlow = () => {
      const branch = serviceSel.value === "website" ? "web" : "appt";
      flow = ["service", branch, "contact", "summary"];
    };

    const setError = (msg) => { errEl.textContent = msg || ""; };

    const show = () => {
      Object.values(stepEls).forEach((s) => s.classList.remove("active"));
      const key = done ? "done" : flow[idx];
      stepEls[key].classList.add("active");
      setError("");
      const pct = done ? 100 : (idx / (flow.length - 1)) * 100;
      prog.style.width = pct + "%";
      backBtn.style.visibility = (!done && idx > 0) ? "visible" : "hidden";
      nextBtn.textContent = done ? "Schließen" : (key === "summary" ? "Anfrage senden" : "Weiter");
      const subs = {
        service: "Erzählen Sie uns kurz, worum es geht.",
        web: "Ein paar Fragen zu Ihrer Website.",
        appt: "Wählen Sie Ihren Wunschtermin.",
        contact: "Wie können wir Sie erreichen?",
        summary: "Bitte prüfen Sie Ihre Angaben.",
        done: "Anfrage abgeschlossen."
      };
      sub.textContent = subs[key] || "";
      if (key === "appt" && !$("qCalGrid").children.length) renderCal();
      if (key === "summary") buildSummary();
    };

    const buildSummary = () => {
      const rows = [];
      const svc = SERVICE_LABELS[serviceSel.value] || "—";
      rows.push(["Leistung", svc]);
      if (serviceSel.value === "website") {
        rows.push(["Zweck", $("qWebPurpose").value || "—"]);
        rows.push(["Bereits Website", $("qWebHad").value]);
        rows.push(["Google-Profil", $("qWebGoogle").value]);
        if ($("qWebContent").value.trim()) rows.push(["Besonderes", $("qWebContent").value.trim()]);
        if (selectedTier) rows.push(["Paket", selectedTier.name]);
      } else {
        rows.push(["Termin", fmtDate(selectedDate) + " um " + timeSel.value]);
        if ($("qApptNote").value.trim()) rows.push(["Notiz", $("qApptNote").value.trim()]);
      }
      rows.push(["Name", $("qName").value.trim()]);
      rows.push(["E-Mail", $("qEmail").value.trim()]);
      rows.push(["Telefon", $("qPhone").value.trim()]);
      let html = rows.map((r) => '<div class="row"><span>' + r[0] + '</span><b>' + (r[1] || "—") + "</b></div>").join("");
      if (serviceSel.value === "website" && selectedTier) {
        html += '<div class="row total"><span>Preis (Richtwert)</span><b>' + selectedTier.price + "</b></div>";
      }
      $("qSummary").innerHTML = html;
    };

    const validate = (key) => {
      if (key === "service" && !serviceSel.value) return "Bitte wählen Sie eine Leistung.";
      if (key === "web") {
        if (!$("qWebPurpose").value) return "Bitte wählen Sie den Zweck der Website.";
        if (!selectedTier) return "Bitte wählen Sie ein Paket.";
      }
      if (key === "appt" && !selectedDate) return "Bitte wählen Sie ein Datum.";
      if (key === "contact") {
        if (!$("qName").value.trim()) return "Bitte geben Sie Ihren Namen an.";
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test($("qEmail").value)) return "Bitte geben Sie eine gültige E-Mail an.";
        if (!$("qPhone").value.trim()) return "Bitte geben Sie Ihre Telefonnummer an.";
      }
      return null;
    };

    const sendMail = () => {
      const svc = SERVICE_LABELS[serviceSel.value] || "Anfrage";
      const lines = ["Leistung: " + svc];
      if (serviceSel.value === "website") {
        lines.push("Zweck: " + $("qWebPurpose").value);
        lines.push("Bereits Website: " + $("qWebHad").value);
        lines.push("Google-Profil: " + $("qWebGoogle").value);
        if ($("qWebContent").value.trim()) lines.push("Besonderes: " + $("qWebContent").value.trim());
        if (selectedTier) lines.push("Paket: " + selectedTier.name + " (" + selectedTier.price + ")");
      } else {
        lines.push("Wunschtermin: " + fmtDate(selectedDate) + " um " + timeSel.value);
        if ($("qApptNote").value.trim()) lines.push("Notiz: " + $("qApptNote").value.trim());
      }
      lines.push("", "Name: " + $("qName").value.trim(), "E-Mail: " + $("qEmail").value.trim(), "Telefon: " + $("qPhone").value.trim());
      const url = "mailto:info@firma.de?subject=" + encodeURIComponent("Anfrage: " + svc) + "&body=" + encodeURIComponent(lines.join("\n"));
      try { window.location.href = url; } catch (e) {}
    };

    const open = (preService) => {
      done = false; selectedTier = null; selectedDate = null; idx = 0;
      serviceSel.value = preService || "";
      modal.querySelectorAll(".qm-tier").forEach((x) => x.classList.remove("sel"));
      computeFlow();
      show();
      modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    nextBtn.addEventListener("click", () => {
      if (done) { close(); return; }
      const key = flow[idx];
      const err = validate(key);
      if (err) { setError(err); return; }
      if (key === "service") computeFlow();
      if (key === "summary") { sendMail(); done = true; show(); return; }
      idx++; show();
    });
    backBtn.addEventListener("click", () => { if (idx > 0) { idx--; show(); } });

    modal.querySelectorAll("[data-qm-close]").forEach((el) => el.addEventListener("click", close));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open")) close(); });
    document.querySelectorAll(".js-quote").forEach((el) => {
      el.addEventListener("click", (e) => { e.preventDefault(); open(el.getAttribute("data-service")); });
    });
  }

  // current year in footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // subtle reveal on scroll — only opt into hiding if we can guarantee reveal
  const reveal = document.querySelectorAll(".diff, .feat, .tech-chip");
  const showAll = () => reveal.forEach((el) => el.classList.add("in"));
  if ("IntersectionObserver" in window && reveal.length) {
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    reveal.forEach((el) => io.observe(el));
    // safety net: never leave content hidden
    setTimeout(showAll, 1500);
  }
});

/* ===================== hero logo video: remove near-white background live ===================== */
(function () {
  const video = document.getElementById("f1LogoSrc");
  const canvas = document.getElementById("f1LogoCanvas");
  if (!video || !canvas) return;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const RENDER_W = 620; // internal render resolution (perf); CSS scales it up crisply
  let RENDER_H = 320;
  let raf = null;

  const setup = () => {
    const ratio = video.videoHeight && video.videoWidth ? video.videoHeight / video.videoWidth : 0.52;
    RENDER_H = Math.round(RENDER_W * ratio);
    canvas.width = RENDER_W;
    canvas.height = RENDER_H;
  };

  const THRESH_HI = 206;  // >= this luminance -> fully transparent (page-white background)
  const THRESH_LO = 198;  // between LO and HI -> narrow feather band (anti-alias only)

  const draw = () => {
    if (video.readyState >= 2) {
      ctx.drawImage(video, 0, 0, RENDER_W, RENDER_H);
      const frame = ctx.getImageData(0, 0, RENDER_W, RENDER_H);
      const d = frame.data;
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2];
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        if (lum >= THRESH_HI) {
          d[i + 3] = 0;
        } else if (lum > THRESH_LO) {
          const fade = 1 - (lum - THRESH_LO) / (THRESH_HI - THRESH_LO);
          d[i + 3] = Math.round(d[i + 3] * fade);
        }
      }
      ctx.putImageData(frame, 0, 0);
    }
    raf = requestAnimationFrame(draw);
  };

  const tryPlay = () => { video.play().catch(() => {}); };
  video.addEventListener("loadedmetadata", () => {
    setup();
    tryPlay();
    if (!raf) draw();
  });
  if (video.readyState >= 1) { setup(); tryPlay(); draw(); }
  document.addEventListener("click", tryPlay, { once: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = null; }
    else if (!raf) draw();
  });
})();
