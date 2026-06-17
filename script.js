/* ===================== INIT ===================== */
document.addEventListener("DOMContentLoaded", () => {
  // sticky nav shadow
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // dropdown mega-menu (3x3 apps button)
  const appsBtn = document.getElementById("appsBtn");
  const navMenu = document.getElementById("navMenu");
  if (appsBtn && navMenu) {
    const setOpen = (open) => {
      navMenu.classList.toggle("open", open);
      appsBtn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    appsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setOpen(!navMenu.classList.contains("open"));
    });
    navMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => setOpen(false))
    );
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !appsBtn.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

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
    let ticking = false;
    const update = () => {
      ticking = false;
      // progress of the list through the viewport line; only one description is
      // open at a time, so the list height stays ~constant -> stable selection.
      const rect = list.getBoundingClientRect();
      const lineY = window.innerHeight * 0.42;
      const p = (lineY - rect.top) / rect.height;
      let idx = Math.floor(p * items.length);
      if (idx < 0) idx = 0;
      if (idx > items.length - 1) idx = items.length - 1;
      setActive(idx);
    };
    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
    items.forEach((it, i) => it.addEventListener("click", () => setActive(i)));
  }

  // integrations graphic — draggable tiles with connectors that stay attached
  (function () {
    const integ = document.querySelector(".integ");
    if (!integ) return;
    const svg = integ.querySelector(".integ-net");
    const gBase = svg.querySelector(".net-lines");
    const gFlow = svg.querySelector(".net-flow");
    const core = integ.querySelector(".core");
    const tiles = Array.prototype.slice.call(integ.querySelectorAll(".itile"));
    const ns = "http://www.w3.org/2000/svg";
    const VBW = 1560, VBH = 560;
    const bases = [], flows = [];
    tiles.forEach(() => {
      const b = document.createElementNS(ns, "path"); b.setAttribute("class", "nl-base"); gBase.appendChild(b); bases.push(b);
      const f = document.createElementNS(ns, "path"); f.setAttribute("class", "nl-flow"); gFlow.appendChild(f); flows.push(f);
    });
    const edges = () => {
      const ir = integ.getBoundingClientRect(), cr = core.getBoundingClientRect();
      return {
        l: (cr.left - ir.left) / ir.width * VBW,
        r: (cr.right - ir.left) / ir.width * VBW,
        t: (cr.top - ir.top) / ir.height * VBH,
        b: (cr.bottom - ir.top) / ir.height * VBH
      };
    };
    const dFor = (tile, e) => {
      const cx = parseFloat(tile.style.left) / 100 * VBW;
      const cy = parseFloat(tile.style.top) / 100 * VBH;
      const ex = tile.dataset.side === "l" ? e.l : e.r;
      const ey = e.t + parseFloat(tile.dataset.ef) * (e.b - e.t);
      const mx = (cx + ex) / 2;
      return "M" + cx.toFixed(0) + "," + cy.toFixed(0) +
        " C" + mx.toFixed(0) + "," + cy.toFixed(0) + " " + mx.toFixed(0) + "," + ey.toFixed(0) +
        " " + ex.toFixed(0) + "," + ey.toFixed(0);
    };
    const update = () => {
      const e = edges();
      tiles.forEach((tile, i) => { const d = dFor(tile, e); bases[i].setAttribute("d", d); flows[i].setAttribute("d", d); });
    };
    update();
    window.addEventListener("resize", update);

    // drag tiles
    let active = null;
    tiles.forEach((tile) => {
      tile.addEventListener("pointerdown", (ev) => {
        ev.preventDefault();
        active = tile;
        try { tile.setPointerCapture(ev.pointerId); } catch (e) {}
        tile.classList.add("dragging");
      });
      tile.addEventListener("pointermove", (ev) => {
        if (active !== tile) return;
        const ir = integ.getBoundingClientRect();
        let x = (ev.clientX - ir.left) / ir.width * 100;
        let y = (ev.clientY - ir.top) / ir.height * 100;
        x = Math.max(4, Math.min(96, x));
        y = Math.max(6, Math.min(94, y));
        tile.style.left = x.toFixed(1) + "%";
        tile.style.top = y.toFixed(1) + "%";
        update();
      });
      const end = () => { if (active === tile) { active = null; tile.classList.remove("dragging"); } };
      tile.addEventListener("pointerup", end);
      tile.addEventListener("pointercancel", end);
    });
  })();

  // interactive particle wordmark — "Driktech"
  const drik = document.getElementById("drik");
  if (drik && drik.getContext) {
    const ctx = drik.getContext("2d");
    const TEXT = "GONJ";
    const DEPTH = 6;       // 3D extrusion layers
    const EX = 0.9, EY = 1.15; // extrusion offset per layer (down-right)
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, particles = [];
    const mouse = { x: -9999, y: -9999 };

    const build = () => {
      const rect = drik.getBoundingClientRect();
      W = rect.width; H = rect.height;
      if (!W || !H) return;
      drik.width = W * DPR; drik.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const fontSize = Math.min(H * 0.82, (W * 0.94) / (TEXT.length * 0.62));
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "800 " + fontSize + "px Inter, system-ui, sans-serif";
      ctx.fillText(TEXT, W / 2, H / 2 + 2);
      const data = ctx.getImageData(0, 0, drik.width, drik.height).data;
      ctx.clearRect(0, 0, W, H);
      particles = [];
      const gap = 4; // device-pixel sampling step (smaller = denser)
      for (let y = 0; y < drik.height; y += gap) {
        for (let x = 0; x < drik.width; x += gap) {
          if (data[(y * drik.width + x) * 4 + 3] > 130) {
            const hx = x / DPR, hy = y / DPR;
            particles.push({
              hx: hx, hy: hy,
              x: reduce ? hx : Math.random() * W,
              y: reduce ? hy : Math.random() * H,
              vx: 0, vy: 0
            });
          }
        }
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      const R = 34;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < R * R) {
          const d = Math.sqrt(d2) || 1;
          const f = (R - d) / R;
          p.vx += (dx / d) * f * 3.2;
          p.vy += (dy / d) * f * 3.2;
        }
        p.vx += (p.hx - p.x) * 0.055;
        p.vy += (p.hy - p.y) * 0.055;
        p.vx *= 0.85; p.vy *= 0.85;
        p.x += p.vx; p.y += p.vy;
        // 3D extrusion: dark depth so white letters pop on the purple node
        for (let k = DEPTH; k >= 1; k--) {
          const a = 0.5 * (1 - (k / DEPTH) * 0.7);
          ctx.fillStyle = "rgba(26, 18, 70, " + a.toFixed(2) + ")";
          ctx.fillRect(p.x + EX * k, p.y + EY * k, 2, 2);
        }
        // front face — white
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(p.x, p.y, 2.2, 2.2);
      }
      requestAnimationFrame(tick);
    };

    const onMove = (cx, cy) => {
      const r = drik.getBoundingClientRect();
      mouse.x = cx - r.left; mouse.y = cy - r.top;
    };
    drik.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
    drik.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });
    drik.addEventListener("touchmove", (e) => {
      if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    drik.addEventListener("touchend", () => { mouse.x = -9999; mouse.y = -9999; });

    let rt;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(build, 200); });

    build();
    requestAnimationFrame(tick);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(build);
    window.addEventListener("load", build);
  }

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
