<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Netzwerk-Installation — F1 IT Solutions</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
<style>
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  .ph{line-height:1;display:inline-block;}
  a{color:#2563FF;}
  a:hover{color:#1b54e6;}
  @keyframes nx-fade{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}
  @keyframes nx-pulse{0%,100%{opacity:1;}50%{opacity:.4;}}
  input[type=range]{-webkit-appearance:none;appearance:none;height:6px;border-radius:4px;background:#E6ECF7;outline:none;width:100%;}
  input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:#2563FF;cursor:pointer;box-shadow:0 2px 8px rgba(37,99,255,0.4);border:3px solid #fff;}
  input[type=range]::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#2563FF;cursor:pointer;border:3px solid #fff;box-shadow:0 2px 8px rgba(37,99,255,0.4);}
  .nx-tab{font-size:14px;font-weight:700;cursor:pointer;padding:10px 22px;border-radius:24px;transition:all .15s;background:#fff;color:#45506E;border:1px solid #E6ECF7;}
  .nx-tab.active{background:#2563FF;color:#fff;border-color:#2563FF;}
  .nx-obj{font-size:13.5px;font-weight:700;cursor:pointer;padding:9px 18px;border-radius:10px;background:#F5F8FF;color:#45506E;border:1px solid #E6ECF7;}
  .nx-obj.active{background:#0B1437;color:#fff;border-color:#0B1437;}
</style>
<link rel="icon" type="image/png" href="favicon.png">
</head>
<body>
<div style="min-height:100vh;width:100%;font-family:'Inter',system-ui,-apple-system,sans-serif;color:#0B1437;background:#FFFFFF;-webkit-font-smoothing:antialiased;">

  <header style="position:sticky;top:0;z-index:400;padding:16px 24px 0;"><div id="gonj-nav"></div></header>

  <section style="position:relative;padding:56px 24px 30px;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(900px 460px at 50% -10%, rgba(91,140,255,0.14), transparent 60%);pointer-events:none;"></div>
    <div style="position:relative;z-index:2;max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1.05fr 1fr;gap:52px;align-items:center;">
      <div>
        <div style="display:inline-flex;align-items:center;gap:9px;font-size:12.5px;font-weight:700;letter-spacing:.6px;color:#6d5ee0;background:rgba(122,92,255,0.1);border:1px solid rgba(122,92,255,0.22);padding:7px 14px;border-radius:30px;margin-bottom:24px;"><span style="width:7px;height:7px;border-radius:50%;background:#7A5CFF;animation:nx-pulse 1.6s infinite;"></span>NETZWERK-INSTALLATION</div>
        <h1 style="font-size:clamp(34px,5vw,50px);line-height:1.08;font-weight:800;letter-spacing:-1.2px;margin:0 0 20px;">Strukturierte Verkabelung für<br><span style="background:linear-gradient(95deg,#2563FF 0%,#7A5CFF 55%,#21D4FD 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;">Zuhause &amp; Unternehmen.</span></h1>
        <p style="font-size:16.5px;line-height:1.65;color:#45506E;max-width:500px;margin:0 0 32px;">Netzwerkdosen, LAN- und Glasfaserkabel, Patchpanels, WLAN-Ausleuchtung — sauber verlegt, fachgerecht terminiert und dokumentiert. Für private Haushalte genauso wie für Büros und Gewerbe.</p>
        <div style="display:flex;gap:14px;margin-bottom:40px;flex-wrap:wrap;">
          <a href="#rechner" style="display:flex;align-items:center;gap:9px;background:#2563FF;color:#fff;text-decoration:none;border-radius:11px;padding:15px 26px;font-size:15px;font-weight:700;box-shadow:0 8px 22px rgba(37,99,255,0.3);"><i class="ph ph-calculator" style="font-size:18px;"></i> Bedarf berechnen</a>
          <a href="#kontakt" style="display:flex;align-items:center;gap:9px;background:#fff;color:#0B1437;text-decoration:none;border:1px solid #E6ECF7;border-radius:11px;padding:15px 24px;font-size:15px;font-weight:700;"><i class="ph ph-calendar-check" style="font-size:18px;"></i> Termin vereinbaren</a>
        </div>
        <div style="display:flex;gap:38px;">
          <div><div style="font-size:26px;font-weight:800;color:#0B1437;">1.800+</div><div style="font-size:12.5px;color:#6B7794;">Verlegte Dosen p.a.</div></div>
          <div><div style="font-size:26px;font-weight:800;color:#0B1437;">100 %</div><div style="font-size:12.5px;color:#6B7794;">Gemessen & dokumentiert</div></div>
          <div><div style="font-size:26px;font-weight:800;color:#0B1437;">2–5</div><div style="font-size:12.5px;color:#6B7794;">Tage Bauzeit üblich</div></div>
        </div>
      </div>
      <div style="position:relative;height:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 80px rgba(20,40,110,0.16);">
        <image-slot id="hero-kabel" shape="rect" placeholder="Foto: Kabelverlegung / Serverschrank" style="width:100%;height:100%;"></image-slot>
      </div>
    </div>
  </section>

  <section id="leistungen" style="max-width:1180px;margin:0 auto;padding:56px 24px 24px;">
    <div style="text-align:center;margin-bottom:34px;">
      <div style="font-size:12.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#2563FF;margin-bottom:12px;">Für jeden Bedarf</div>
      <h2 style="font-size:38px;font-weight:800;letter-spacing:-.8px;margin:0 0 12px;">Ob Wohnung oder Bürogebäude</h2>
      <p style="font-size:16px;color:#45506E;max-width:600px;margin:0 auto;line-height:1.6;">Wir passen Technik und Ausführung an die Größe und Nutzung Ihres Objekts an.</p>
    </div>
    <div style="display:flex;justify-content:center;gap:10px;margin-bottom:34px;" id="nx-audience-tabs"></div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px;" id="nx-audience-cards"></div>
  </section>

  <section style="max-width:1180px;margin:0 auto;padding:56px 24px 24px;">
    <div style="text-align:center;margin-bottom:34px;">
      <div style="font-size:12.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#7A5CFF;margin-bottom:12px;">Aus unseren Projekten</div>
      <h2 style="font-size:32px;font-weight:800;letter-spacing:-.7px;margin:0;">Installationen, die wir umgesetzt haben</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
      <div style="position:relative;height:190px;border-radius:16px;overflow:hidden;border:1px solid #E6ECF7;"><image-slot id="gal-1" shape="rect" placeholder="Foto: Patchpanel / Serverschrank" style="width:100%;height:100%;"></image-slot></div>
      <div style="position:relative;height:190px;border-radius:16px;overflow:hidden;border:1px solid #E6ECF7;"><image-slot id="gal-2" shape="rect" placeholder="Foto: Kabelkanal-Verlegung" style="width:100%;height:100%;"></image-slot></div>
      <div style="position:relative;height:190px;border-radius:16px;overflow:hidden;border:1px solid #E6ECF7;"><image-slot id="gal-3" shape="rect" placeholder="Foto: Netzwerkdose fertig montiert" style="width:100%;height:100%;"></image-slot></div>
      <div style="position:relative;height:190px;border-radius:16px;overflow:hidden;border:1px solid #E6ECF7;"><image-slot id="gal-4" shape="rect" placeholder="Foto: WLAN-Access-Point Installation" style="width:100%;height:100%;"></image-slot></div>
    </div>
  </section>

  <section style="max-width:1180px;margin:0 auto;padding:56px 24px 24px;">
    <div style="background:linear-gradient(165deg,#0B1437,#16245E);border-radius:22px;padding:44px;color:#fff;">
      <div style="text-align:center;margin-bottom:34px;">
        <div style="font-size:12.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#8FB3FF;margin-bottom:12px;">Material &amp; Technik</div>
        <h2 style="font-size:30px;font-weight:800;letter-spacing:-.6px;margin:0;">Welches Kabel für welchen Zweck</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
        <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:15px;padding:20px;"><div style="display:flex;align-items:center;gap:11px;margin-bottom:12px;"><div style="width:38px;height:38px;border-radius:10px;background:rgba(124,155,255,0.15);display:flex;align-items:center;justify-content:center;"><i class="ph ph-plugs-connected" style="font-size:19px;color:#7C9BFF;"></i></div><div style="font-size:15px;font-weight:700;">Cat6</div></div><div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#8FB3FF;margin-bottom:10px;">bis 1 Gbit/s · 250 MHz</div><p style="font-size:13px;line-height:1.55;color:#A7B0C6;margin:0;">Solider Standard für Arbeitsplätze und Privathaushalte — gutes Preis-Leistungs-Verhältnis.</p></div>
        <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:15px;padding:20px;"><div style="display:flex;align-items:center;gap:11px;margin-bottom:12px;"><div style="width:38px;height:38px;border-radius:10px;background:rgba(33,212,253,0.15);display:flex;align-items:center;justify-content:center;"><i class="ph ph-lightning" style="font-size:19px;color:#21D4FD;"></i></div><div style="font-size:15px;font-weight:700;">Cat6a</div></div><div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#8FB3FF;margin-bottom:10px;">bis 10 Gbit/s · 500 MHz</div><p style="font-size:13px;line-height:1.55;color:#A7B0C6;margin:0;">Zukunftssicher für höhere Bandbreiten — empfohlen für neue Installationen.</p></div>
        <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:15px;padding:20px;"><div style="display:flex;align-items:center;gap:11px;margin-bottom:12px;"><div style="width:38px;height:38px;border-radius:10px;background:rgba(159,124,255,0.15);display:flex;align-items:center;justify-content:center;"><i class="ph ph-wave-sine" style="font-size:19px;color:#9F7CFF;"></i></div><div style="font-size:15px;font-weight:700;">Glasfaser (LWL)</div></div><div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#8FB3FF;margin-bottom:10px;">bis 10+ Gbit/s · lange Strecken</div><p style="font-size:13px;line-height:1.55;color:#A7B0C6;margin:0;">Für Gebäudeverbindungen, Serverräume und Strecken über 90 Meter.</p></div>
        <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:15px;padding:20px;"><div style="display:flex;align-items:center;gap:11px;margin-bottom:12px;"><div style="width:38px;height:38px;border-radius:10px;background:rgba(61,214,140,0.15);display:flex;align-items:center;justify-content:center;"><i class="ph ph-wifi-high" style="font-size:19px;color:#3DD68C;"></i></div><div style="font-size:15px;font-weight:700;">WLAN Access Points</div></div><div style="font-family:'IBM Plex Mono',monospace;font-size:12px;color:#8FB3FF;margin-bottom:10px;">WiFi 6 · Mesh-fähig</div><p style="font-size:13px;line-height:1.55;color:#A7B0C6;margin:0;">Ergänzend zur Verkabelung für lückenlose Funkabdeckung in jedem Raum.</p></div>
      </div>
    </div>
  </section>

  <section id="rechner" style="max-width:1180px;margin:0 auto;padding:64px 24px 24px;">
    <div style="text-align:center;margin-bottom:34px;">
      <div style="font-size:12.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#2563FF;margin-bottom:12px;">Unverbindlich &amp; schnell</div>
      <h2 style="font-size:34px;font-weight:800;letter-spacing:-.7px;margin:0 0 10px;">Ihren Bedarf grob berechnen</h2>
      <p style="font-size:15.5px;color:#45506E;max-width:560px;margin:0 auto;line-height:1.6;">Ein erster Richtwert für Netzwerkdosen, Kabellänge und Zeitaufwand — die genaue Planung erfolgt vor Ort.</p>
    </div>
    <div style="background:#fff;border:1px solid #E6ECF7;border-radius:20px;padding:36px;display:grid;grid-template-columns:1fr 1fr;gap:44px;box-shadow:0 18px 50px rgba(20,40,110,0.08);">
      <div style="display:flex;flex-direction:column;gap:26px;">
        <div style="display:flex;gap:10px;" id="nx-objtype"></div>
        <div>
          <div style="display:flex;justify-content:space-between;margin-bottom:9px;"><label style="font-size:14px;font-weight:700;color:#0B1437;">Räume / Büros mit Netzwerkdose</label><span id="nx-rooms-val" style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:700;color:#2563FF;"></span></div>
          <input type="range" id="nx-rooms" min="1" max="30" value="8" />
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;margin-bottom:9px;"><label style="font-size:14px;font-weight:700;color:#0B1437;">Netzwerkdosen pro Raum</label><span id="nx-perroom-val" style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:700;color:#2563FF;"></span></div>
          <input type="range" id="nx-perroom" min="1" max="4" value="2" />
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;margin-bottom:9px;"><label style="font-size:14px;font-weight:700;color:#0B1437;">Durchschnittliche Kabelstrecke</label><span id="nx-dist-val" style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:700;color:#2563FF;"></span></div>
          <input type="range" id="nx-dist" min="5" max="40" value="18" />
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding-top:4px;">
          <div id="nx-wifi-toggle" style="width:46px;height:26px;border-radius:13px;cursor:pointer;position:relative;transition:background .18s;"><div id="nx-wifi-knob" style="position:absolute;top:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:left .18s;box-shadow:0 1px 3px rgba(0,0,0,0.25);"></div></div>
          <span style="font-size:14px;font-weight:600;color:#3A4359;">WLAN-Access-Points ergänzen</span>
        </div>
      </div>
      <div style="background:#F5F8FF;border:1px solid #E6ECF7;border-radius:16px;padding:26px;display:flex;flex-direction:column;gap:16px;">
        <div style="font-size:13px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:#6B7794;">Ihr Richtwert</div>
        <div id="nx-results"></div>
        <div style="margin-top:auto;padding-top:8px;">
          <a href="#kontakt" style="width:100%;display:flex;align-items:center;justify-content:center;gap:9px;background:#2563FF;color:#fff;text-decoration:none;border-radius:11px;padding:14px;font-size:14.5px;font-weight:700;"><i class="ph ph-clipboard-text" style="font-size:17px;"></i> Verbindliches Angebot anfragen</a>
          <div style="font-size:11.5px;color:#6B7794;text-align:center;margin-top:10px;">Richtwert, keine verbindliche Kalkulation.</div>
        </div>
      </div>
    </div>
  </section>

  <section id="ablauf" style="max-width:1180px;margin:0 auto;padding:64px 24px 24px;">
    <div style="text-align:center;margin-bottom:36px;">
      <div style="font-size:12.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#2563FF;margin-bottom:12px;">So läuft die Installation ab</div>
      <h2 style="font-size:34px;font-weight:800;letter-spacing:-.7px;margin:0;">Von der Begehung bis zur Abnahme</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:16px;">
      <div style="background:#fff;border:1px solid #E6ECF7;border-radius:16px;padding:22px 18px;"><div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#2563FF;margin-bottom:10px;">01</div><div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(120deg,#2563FF,#7A5CFF);display:flex;align-items:center;justify-content:center;margin-bottom:14px;"><i class="ph ph-magnifying-glass" style="font-size:22px;color:#fff;"></i></div><div style="font-size:15px;font-weight:700;margin-bottom:6px;">Vor-Ort-Begehung</div><div style="font-size:13px;color:#45506E;line-height:1.5;">Wir sichten die Räume und besprechen Ihre Anforderungen.</div></div>
      <div style="background:#fff;border:1px solid #E6ECF7;border-radius:16px;padding:22px 18px;"><div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#2563FF;margin-bottom:10px;">02</div><div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(120deg,#2563FF,#7A5CFF);display:flex;align-items:center;justify-content:center;margin-bottom:14px;"><i class="ph ph-blueprint" style="font-size:22px;color:#fff;"></i></div><div style="font-size:15px;font-weight:700;margin-bottom:6px;">Verkabelungsplan</div><div style="font-size:13px;color:#45506E;line-height:1.5;">Dosenpositionen, Kabelwege und Verteiler werden festgelegt.</div></div>
      <div style="background:#fff;border:1px solid #E6ECF7;border-radius:16px;padding:22px 18px;"><div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#2563FF;margin-bottom:10px;">03</div><div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(120deg,#2563FF,#7A5CFF);display:flex;align-items:center;justify-content:center;margin-bottom:14px;"><i class="ph ph-package" style="font-size:22px;color:#fff;"></i></div><div style="font-size:15px;font-weight:700;margin-bottom:6px;">Material & Termin</div><div style="font-size:13px;color:#45506E;line-height:1.5;">Kabel, Dosen und Technik werden beschafft und der Termin fixiert.</div></div>
      <div style="background:#fff;border:1px solid #E6ECF7;border-radius:16px;padding:22px 18px;"><div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#2563FF;margin-bottom:10px;">04</div><div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(120deg,#2563FF,#7A5CFF);display:flex;align-items:center;justify-content:center;margin-bottom:14px;"><i class="ph ph-wrench" style="font-size:22px;color:#fff;"></i></div><div style="font-size:15px;font-weight:700;margin-bottom:6px;">Verlegung & Montage</div><div style="font-size:13px;color:#45506E;line-height:1.5;">Fachgerechte Verlegung, Terminierung und Beschriftung vor Ort.</div></div>
      <div style="background:#fff;border:1px solid #E6ECF7;border-radius:16px;padding:22px 18px;"><div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#2563FF;margin-bottom:10px;">05</div><div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(120deg,#2563FF,#7A5CFF);display:flex;align-items:center;justify-content:center;margin-bottom:14px;"><i class="ph ph-check-circle" style="font-size:22px;color:#fff;"></i></div><div style="font-size:15px;font-weight:700;margin-bottom:6px;">Test & Abnahme</div><div style="font-size:13px;color:#45506E;line-height:1.5;">Messung jeder Leitung, Funktionsprüfung und Übergabedokumentation.</div></div>
    </div>
  </section>

  <section id="pakete" style="max-width:1180px;margin:0 auto;padding:64px 24px 24px;">
    <div style="text-align:center;margin-bottom:36px;">
      <div style="font-size:12.5px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#7A5CFF;margin-bottom:12px;">Pakete</div>
      <h2 style="font-size:34px;font-weight:800;letter-spacing:-.7px;margin:0;">Passend für jede Objektgröße</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px;">
      <div style="position:relative;background:#fff;border:1px solid #E6ECF7;border-radius:18px;padding:30px 26px;">
        <div style="font-size:13px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:#2563FF;">Basis</div><div style="font-size:14px;color:#45506E;margin:6px 0 18px;">Für kleine Wohnungen</div>
        <div style="font-size:34px;font-weight:800;color:#0B1437;margin-bottom:4px;">ab 890 €</div><div style="font-size:12.5px;color:#45506E;margin-bottom:22px;">bis 5 Netzwerkdosen</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#0B1437;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#2563FF;"></i>Bis zu 5 Netzwerkdosen</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#0B1437;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#2563FF;"></i>Cat6-Verkabelung</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#0B1437;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#2563FF;"></i>Kleiner Verteilerschrank</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#0B1437;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#2563FF;"></i>Funktionsprüfung & Abnahme</div>
        </div>
        <a href="#kontakt" style="display:block;text-align:center;width:100%;background:#0B1437;color:#fff;text-decoration:none;border-radius:11px;padding:13px;font-size:14.5px;font-weight:700;">Anfragen</a>
      </div>
      <div style="position:relative;background:linear-gradient(165deg,#0B1437,#16245E);border:1px solid #1B2440;border-radius:18px;padding:30px 26px;box-shadow:0 16px 40px rgba(14,20,38,0.28);">
        <div style="position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:linear-gradient(120deg,#2563FF,#21D4FD);color:#fff;font-size:11.5px;font-weight:800;letter-spacing:.4px;padding:6px 16px;border-radius:20px;">BELIEBT</div>
        <div style="font-size:13px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:#21D4FD;">Business</div><div style="font-size:14px;color:#A7B0C6;margin:6px 0 18px;">Für Büros & Praxen</div>
        <div style="font-size:34px;font-weight:800;color:#fff;margin-bottom:4px;">ab 2.400 €</div><div style="font-size:12.5px;color:#A7B0C6;margin-bottom:22px;">bis 20 Netzwerkdosen</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#fff;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#21D4FD;"></i>Bis zu 20 Netzwerkdosen</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#fff;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#21D4FD;"></i>Cat6a-Verkabelung</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#fff;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#21D4FD;"></i>Serverschrank & Patchpanel</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#fff;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#21D4FD;"></i>WLAN-Access-Points</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#fff;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#21D4FD;"></i>Vollständige Dokumentation</div>
        </div>
        <a href="#kontakt" style="display:block;text-align:center;width:100%;background:linear-gradient(120deg,#2563FF,#21D4FD);color:#fff;text-decoration:none;border-radius:11px;padding:13px;font-size:14.5px;font-weight:700;">Anfragen</a>
      </div>
      <div style="position:relative;background:#fff;border:1px solid #E6ECF7;border-radius:18px;padding:30px 26px;">
        <div style="font-size:13px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:#2563FF;">Enterprise</div><div style="font-size:14px;color:#45506E;margin:6px 0 18px;">Für Gewerbe & Standorte</div>
        <div style="font-size:34px;font-weight:800;color:#0B1437;margin-bottom:4px;">Individuell</div><div style="font-size:12.5px;color:#45506E;margin-bottom:22px;">nach Aufmaß</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px;">
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#0B1437;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#2563FF;"></i>Unbegrenzte Netzwerkdosen</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#0B1437;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#2563FF;"></i>Glasfaser & Cat6a</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#0B1437;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#2563FF;"></i>Mehrere Standorte möglich</div>
          <div style="display:flex;align-items:center;gap:9px;font-size:13.5px;color:#0B1437;"><i class="ph ph-check-circle-fill" style="font-size:16px;color:#2563FF;"></i>Wartungsvertrag optional</div>
        </div>
        <a href="#kontakt" style="display:block;text-align:center;width:100%;background:#0B1437;color:#fff;text-decoration:none;border-radius:11px;padding:13px;font-size:14.5px;font-weight:700;">Anfragen</a>
      </div>
    </div>
  </section>

  <section id="kontakt" style="max-width:1180px;margin:0 auto;padding:24px 24px 80px;">
    <div style="background:linear-gradient(120deg,#2563FF 0%,#7A5CFF 55%,#21D4FD 100%);border-radius:22px;padding:56px;text-align:center;color:#fff;">
      <h2 style="font-size:34px;font-weight:800;letter-spacing:-.7px;margin:0 0 14px;">Wir kommen vorbei und schauen uns alles an</h2>
      <p style="font-size:17px;color:rgba(255,255,255,0.92);max-width:560px;margin:0 auto 30px;line-height:1.6;">Kostenlose Vor-Ort-Begehung für Ihre Wohnung, Ihr Haus oder Bürogebäude — mit unverbindlichem Angebot innerhalb weniger Tage.</p>
      <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
        <span style="display:flex;align-items:center;gap:9px;background:#fff;color:#0B1437;border-radius:11px;padding:15px 28px;font-size:15px;font-weight:700;"><i class="ph ph-phone-call" style="font-size:18px;"></i> +49 30 1234 5678</span>
        <span style="display:flex;align-items:center;gap:9px;background:rgba(255,255,255,0.16);color:#fff;border:1px solid rgba(255,255,255,0.35);border-radius:11px;padding:15px 28px;font-size:15px;font-weight:700;"><i class="ph ph-envelope-simple" style="font-size:18px;"></i> kontakt@gonj.de</span>
      </div>
    </div>
  </section>

  <div id="gonj-footer"></div>
</div>
<script src="image-slot.js"></script>
<script src="gonj-shared.js"></script>
<script>
renderGonjNav('gonj-nav');renderGonjFooter('gonj-footer');

var AUDIENCE_DATA = {
  'Zuhause': [
    { icon: 'house-line', title: 'Einfamilienhaus & Wohnung', desc: 'Schnelles, stabiles Netzwerk in jedem Zimmer — für Homeoffice, Streaming und Smart Home.', points: ['LAN-Dosen in jedem Raum', 'WLAN ohne Funklöcher', 'Saubere Kabelführung'] },
    { icon: 'television', title: 'Smart Home & Multimedia', desc: 'Verkabelung für TV, Lautsprecher, Kameras und Steuerungen — durchdacht geplant.', points: ['TV- & Soundanschlüsse', 'Kamera- & Alarmanlagen', 'Zentrale Verteilung im Schrank'] },
    { icon: 'wrench', title: 'Nachrüstung im Bestand', desc: 'Auch ohne Vorverkabelung möglich — mit minimalem Aufwand und wenig Schmutz.', points: ['Kabelkanäle & Unterputz', 'Bohrarbeiten inklusive', 'Terminfindung nach Ihrem Alltag'] },
  ],
  'Unternehmen': [
    { icon: 'buildings', title: 'Büro- & Gewerbeflächen', desc: 'Strukturierte Verkabelung nach Norm — für Arbeitsplätze, Meetingräume und Empfang.', points: ['Patchpanels & Serverschrank', 'Beschriftung & Dokumentation', 'Erweiterbar für Wachstum'] },
    { icon: 'factory', title: 'Gewerbe & Produktion', desc: 'Robuste Verkabelung für Hallen, Werkstätten und Lager — auch über größere Distanzen.', points: ['Glasfaser für lange Strecken', 'Staub- und stoßgeschützt', 'Netzwerktechnik für raue Umgebungen'] },
    { icon: 'buildings-two', title: 'Mehrere Standorte', desc: 'Einheitliches Konzept über mehrere Filialen oder Etagen hinweg — zentral geplant.', points: ['Standort-übergreifendes Konzept', 'Standardisierte Dokumentation', 'Zentrale Ansprechperson'] },
  ],
};
var audience = 'Unternehmen';
function renderAudience() {
  document.getElementById('nx-audience-tabs').innerHTML = ['Zuhause', 'Unternehmen'].map(function (a) {
    return '<span class="nx-tab' + (audience === a ? ' active' : '') + '" data-a="' + a + '">' + a + '</span>';
  }).join('');
  Array.prototype.forEach.call(document.querySelectorAll('#nx-audience-tabs .nx-tab'), function (el) { el.onclick = function () { audience = el.getAttribute('data-a'); renderAudience(); }; });
  document.getElementById('nx-audience-cards').innerHTML = AUDIENCE_DATA[audience].map(function (s) {
    return '<div style="background:#fff;border:1px solid #E6ECF7;border-radius:18px;padding:26px;animation:nx-fade .35s ease both;"><div style="width:54px;height:54px;border-radius:14px;background:linear-gradient(120deg,#2563FF 0%,#7A5CFF 55%,#21D4FD 100%);display:flex;align-items:center;justify-content:center;margin-bottom:18px;box-shadow:0 10px 24px rgba(37,99,255,0.28);"><i class="ph ph-' + s.icon + '" style="font-size:26px;color:#fff;"></i></div><div style="font-size:18px;font-weight:700;margin-bottom:9px;">' + s.title + '</div><p style="font-size:14px;color:#45506E;line-height:1.6;margin:0 0 16px;">' + s.desc + '</p><div style="display:flex;flex-direction:column;gap:8px;">' +
      s.points.map(function (pt) { return '<div style="display:flex;align-items:center;gap:9px;font-size:13.5px;"><i class="ph ph-check" style="font-size:15px;color:#2563FF;"></i><span style="color:#3A4359;">' + pt + '</span></div>'; }).join('') +
      '</div></div>';
  }).join('');
}
renderAudience();

var objType = 'Wohnung', wifi = true;
function fmt(n) { return new Intl.NumberFormat('de-DE').format(n); }
function renderCalc() {
  document.getElementById('nx-objtype').innerHTML = ['Wohnung', 'Büro'].map(function (o) {
    return '<span class="nx-obj' + (objType === o ? ' active' : '') + '" data-o="' + o + '">' + o + '</span>';
  }).join('');
  Array.prototype.forEach.call(document.querySelectorAll('#nx-objtype .nx-obj'), function (el) { el.onclick = function () { objType = el.getAttribute('data-o'); if (objType === 'Büro') document.getElementById('nx-rooms').value = 20; else document.getElementById('nx-rooms').value = 8; renderCalc(); }; });

  var rooms = parseInt(document.getElementById('nx-rooms').value, 10);
  var perRoom = parseInt(document.getElementById('nx-perroom').value, 10);
  var distance = parseInt(document.getElementById('nx-dist').value, 10);
  document.getElementById('nx-rooms-val').textContent = rooms;
  document.getElementById('nx-perroom-val').textContent = perRoom;
  document.getElementById('nx-dist-val').textContent = distance + ' m';
  document.getElementById('nx-wifi-toggle').style.background = wifi ? '#2563FF' : '#D7DEEA';
  document.getElementById('nx-wifi-knob').style.left = wifi ? '23px' : '3px';

  var points = rooms * perRoom;
  var cableMeters = Math.round(points * distance * 1.15);
  var days = Math.max(1, Math.ceil(points / (objType === 'Wohnung' ? 6 : 10)));
  var priceLow = points * 85 + (wifi ? rooms * 15 : 0);
  var priceHigh = points * 130 + (wifi ? rooms * 25 : 0);
  var results = [
    { icon: 'plugs-connected', label: 'Netzwerkdosen gesamt', value: points + ' Stück', color: '#2563FF', tint: '#E6ECFB' },
    { icon: 'ruler', label: 'Geschätzte Kabellänge', value: fmt(cableMeters) + ' m', color: '#21D4FD', tint: '#E2F6FE' },
    { icon: 'clock', label: 'Geschätzte Bauzeit', value: days + (days === 1 ? ' Tag' : ' Tage'), color: '#7A5CFF', tint: '#EFEBFE' },
    { icon: 'currency-eur', label: 'Richtwert Investition', value: fmt(priceLow) + ' – ' + fmt(priceHigh) + ' €', color: '#12B76A', tint: '#E6F7EF' },
  ];
  document.getElementById('nx-results').innerHTML = results.map(function (r) {
    return '<div style="display:flex;align-items:center;gap:14px;background:#fff;border:1px solid #E6ECF7;border-radius:13px;padding:14px 16px;"><div style="width:40px;height:40px;flex-shrink:0;border-radius:11px;background:' + r.tint + ';display:flex;align-items:center;justify-content:center;"><i class="ph ph-' + r.icon + '" style="font-size:19px;color:' + r.color + ';"></i></div><div style="flex:1;"><div style="font-size:12.5px;color:#45506E;">' + r.label + '</div><div style="font-family:\'IBM Plex Mono\',monospace;font-size:19px;font-weight:800;color:#0B1437;">' + r.value + '</div></div></div>';
  }).join('');
}
document.getElementById('nx-rooms').oninput = renderCalc;
document.getElementById('nx-perroom').oninput = renderCalc;
document.getElementById('nx-dist').oninput = renderCalc;
document.getElementById('nx-wifi-toggle').onclick = function () { wifi = !wifi; renderCalc(); };
renderCalc();
</script>
</body>
</html>
