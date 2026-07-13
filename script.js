<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
<style>
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  ::-webkit-scrollbar{width:10px;}
  ::-webkit-scrollbar-thumb{background:#c9d3ea;border-radius:8px;border:2px solid transparent;background-clip:content-box;}
  .ph{line-height:1;display:inline-block;}
  @keyframes nx-fade{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}
  @keyframes nx-pulse{0%,100%{opacity:1;}50%{opacity:.4;}}
  input[type=range]{-webkit-appearance:none;appearance:none;height:6px;border-radius:4px;background:#E6ECF7;outline:none;}
  input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px;border-radius:50%;background:#2563FF;cursor:pointer;box-shadow:0 2px 8px rgba(37,99,255,0.4);border:3px solid #fff;}
  input[type=range]::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#2563FF;cursor:pointer;border:3px solid #fff;box-shadow:0 2px 8px rgba(37,99,255,0.4);}
</style>
</helmet>

<div style="min-height:100vh; width:100%; font-family:'Inter',system-ui,-apple-system,sans-serif; color:#0B1437; background:#FFFFFF; -webkit-font-smoothing:antialiased;">

  <!-- HEADER: shared GONJ nav -->
  <header style="position:sticky; top:0; z-index:400; padding:16px 24px 0;">
    <dc-import name="GonjNav" hint-size="100%,64px"></dc-import>
  </header>

  <!-- HERO -->
  <section style="position:relative; padding:56px 24px 30px; overflow:hidden;">
    <div style="position:absolute; inset:0; background:radial-gradient(900px 460px at 50% -10%, rgba(91,140,255,0.14), transparent 60%); pointer-events:none;"></div>
    <div style="position:relative; z-index:2; max-width:1180px; margin:0 auto; display:grid; grid-template-columns:1.05fr 1fr; gap:52px; align-items:center;">
      <div>
        <div style="display:inline-flex; align-items:center; gap:9px; font-size:12.5px; font-weight:700; letter-spacing:.6px; color:#6d5ee0; background:rgba(122,92,255,0.1); border:1px solid rgba(122,92,255,0.22); padding:7px 14px; border-radius:30px; margin-bottom:24px;"><span style="width:7px; height:7px; border-radius:50%; background:#7A5CFF; animation:nx-pulse 1.6s infinite;"></span>NETZWERK-INSTALLATION</div>
        <h1 style="font-size:clamp(34px,5vw,50px); line-height:1.08; font-weight:800; letter-spacing:-1.2px; margin:0 0 20px;">Strukturierte Verkabelung für<br><span style="background:linear-gradient(95deg,#2563FF 0%,#7A5CFF 55%,#21D4FD 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent;">Zuhause &amp; Unternehmen.</span></h1>
        <p style="font-size:16.5px; line-height:1.65; color:#45506E; max-width:500px; margin:0 0 32px;">Netzwerkdosen, LAN- und Glasfaserkabel, Patchpanels, WLAN-Ausleuchtung — sauber verlegt, fachgerecht terminiert und dokumentiert. Für private Haushalte genauso wie für Büros und Gewerbe.</p>
        <div style="display:flex; gap:14px; margin-bottom:40px; flex-wrap:wrap;">
          <button onClick="{{ goCalc }}" style="display:flex; align-items:center; gap:9px; background:#2563FF; color:#fff; border:none; border-radius:11px; padding:15px 26px; font-family:inherit; font-size:15px; font-weight:700; cursor:pointer; box-shadow:0 8px 22px rgba(37,99,255,0.3);" style-hover="background:#1b54e6;transform:translateY(-2px)"><i class="ph ph-calculator" style="font-size:18px;"></i> Bedarf berechnen</button>
          <button onClick="{{ goContact }}" style="display:flex; align-items:center; gap:9px; background:#fff; color:#0B1437; border:1px solid #E6ECF7; border-radius:11px; padding:15px 24px; font-family:inherit; font-size:15px; font-weight:700; cursor:pointer;" style-hover="border-color:#2563FF;color:#2563FF"><i class="ph ph-calendar-check" style="font-size:18px;"></i> Termin vereinbaren</button>
        </div>
        <div style="display:flex; gap:38px;">
          <sc-for list="{{ heroStats }}" as="s" hint-placeholder-count="3">
            <div><div style="font-size:26px; font-weight:800; color:#0B1437;">{{ s.value }}</div><div style="font-size:12.5px; color:#6B7794;">{{ s.label }}</div></div>
          </sc-for>
        </div>
      </div>

      <!-- real photo placeholder -->
      <div style="position:relative; height:420px; border-radius:20px; overflow:hidden; box-shadow:0 30px 80px rgba(20,40,110,0.16);">
        <x-import component-from-global-scope="image-slot" from="./image-slot.js" id="hero-kabel" shape="rect" placeholder="Foto: Kabelverlegung / Serverschrank" style="width:100%;height:100%;" hint-size="100%,420px"></x-import>
      </div>
    </div>
  </section>

  <!-- ZUHAUSE / UNTERNEHMEN TABS -->
  <section id="leistungen" style="max-width:1180px; margin:0 auto; padding:56px 24px 24px;">
    <div style="text-align:center; margin-bottom:34px;">
      <div style="font-size:12.5px; font-weight:700; letter-spacing:1.4px; text-transform:uppercase; color:#2563FF; margin-bottom:12px;">Für jeden Bedarf</div>
      <h2 style="font-size:38px; font-weight:800; letter-spacing:-.8px; margin:0 0 12px;">Ob Wohnung oder Bürogebäude</h2>
      <p style="font-size:16px; color:#45506E; max-width:600px; margin:0 auto; line-height:1.6;">Wir passen Technik und Ausführung an die Größe und Nutzung Ihres Objekts an.</p>
    </div>

    <div style="display:flex; justify-content:center; gap:10px; margin-bottom:34px;">
      <sc-for list="{{ audienceTabs }}" as="t" hint-placeholder-count="2">
        <span onClick="{{ t.onClick }}" style="{{ t.style }}">{{ t.label }}</span>
      </sc-for>
    </div>

    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:22px;">
      <sc-for list="{{ audienceCards }}" as="s" hint-placeholder-count="3">
        <div style="background:#fff; border:1px solid #E6ECF7; border-radius:18px; padding:26px; animation:nx-fade .35s ease both; transition:.2s;" style-hover="box-shadow:0 18px 50px rgba(20,40,110,0.12);border-color:transparent;transform:translateY(-3px)">
          <div style="width:54px; height:54px; border-radius:14px; background:linear-gradient(120deg,#2563FF 0%,#7A5CFF 55%,#21D4FD 100%); display:flex; align-items:center; justify-content:center; margin-bottom:18px; box-shadow:0 10px 24px rgba(37,99,255,0.28);"><i class="ph ph-{{ s.icon }}" style="font-size:26px; color:#fff;"></i></div>
          <div style="font-size:18px; font-weight:700; margin-bottom:9px;">{{ s.title }}</div>
          <p style="font-size:14px; color:#45506E; line-height:1.6; margin:0 0 16px;">{{ s.desc }}</p>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <sc-for list="{{ s.points }}" as="pt" hint-placeholder-count="3">
              <div style="display:flex; align-items:center; gap:9px; font-size:13.5px;"><i class="ph ph-check" style="font-size:15px; color:#2563FF;"></i><span style="color:#3A4359;">{{ pt }}</span></div>
            </sc-for>
          </div>
        </div>
      </sc-for>
    </div>
  </section>

  <!-- FOTO-GALERIE (echte Bilder) -->
  <section style="max-width:1180px; margin:0 auto; padding:56px 24px 24px;">
    <div style="text-align:center; margin-bottom:34px;">
      <div style="font-size:12.5px; font-weight:700; letter-spacing:1.4px; text-transform:uppercase; color:#7A5CFF; margin-bottom:12px;">Aus unseren Projekten</div>
      <h2 style="font-size:32px; font-weight:800; letter-spacing:-.7px; margin:0;">Installationen, die wir umgesetzt haben</h2>
    </div>
    <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px;">
      <sc-for list="{{ galleryIds }}" as="g" hint-placeholder-count="4">
        <div style="position:relative; height:190px; border-radius:16px; overflow:hidden; border:1px solid #E6ECF7;">
          <x-import component-from-global-scope="image-slot" from="./image-slot.js" id="{{ g.id }}" shape="rect" placeholder="{{ g.label }}" style="width:100%;height:100%;" hint-size="100%,190px"></x-import>
        </div>
      </sc-for>
    </div>
  </section>

  <!-- KABELTYPEN -->
  <section style="max-width:1180px; margin:0 auto; padding:56px 24px 24px;">
    <div style="background:linear-gradient(165deg,#0B1437,#16245E); border-radius:22px; padding:44px; color:#fff;">
      <div style="text-align:center; margin-bottom:34px;">
        <div style="font-size:12.5px; font-weight:700; letter-spacing:1.4px; text-transform:uppercase; color:#8FB3FF; margin-bottom:12px;">Material &amp; Technik</div>
        <h2 style="font-size:30px; font-weight:800; letter-spacing:-.6px; margin:0;">Welches Kabel für welchen Zweck</h2>
      </div>
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:16px;">
        <sc-for list="{{ cableTypes }}" as="c" hint-placeholder-count="4">
          <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:15px; padding:20px;">
            <div style="display:flex; align-items:center; gap:11px; margin-bottom:12px;"><div style="width:38px; height:38px; border-radius:10px; background:{{ c.tint }}; display:flex; align-items:center; justify-content:center;"><i class="ph ph-{{ c.icon }}" style="font-size:19px; color:{{ c.color }};"></i></div><div style="font-size:15px; font-weight:700;">{{ c.name }}</div></div>
            <div style="font-family:'IBM Plex Mono',monospace; font-size:12px; color:#8FB3FF; margin-bottom:10px;">{{ c.speed }}</div>
            <p style="font-size:13px; line-height:1.55; color:#A7B0C6; margin:0;">{{ c.desc }}</p>
          </div>
        </sc-for>
      </div>
    </div>
  </section>

  <!-- BEDARFSRECHNER -->
  <section id="rechner" style="max-width:1180px; margin:0 auto; padding:64px 24px 24px;">
    <div style="text-align:center; margin-bottom:34px;">
      <div style="font-size:12.5px; font-weight:700; letter-spacing:1.4px; text-transform:uppercase; color:#2563FF; margin-bottom:12px;">Unverbindlich &amp; schnell</div>
      <h2 style="font-size:34px; font-weight:800; letter-spacing:-.7px; margin:0 0 10px;">Ihren Bedarf grob berechnen</h2>
      <p style="font-size:15.5px; color:#45506E; max-width:560px; margin:0 auto; line-height:1.6;">Ein erster Richtwert für Netzwerkdosen, Kabellänge und Zeitaufwand — die genaue Planung erfolgt vor Ort.</p>
    </div>

    <div style="background:#fff; border:1px solid #E6ECF7; border-radius:20px; padding:36px; display:grid; grid-template-columns:1fr 1fr; gap:44px; box-shadow:0 18px 50px rgba(20,40,110,0.08);">
      <div style="display:flex; flex-direction:column; gap:26px;">
        <div style="display:flex; gap:10px;">
          <sc-for list="{{ objectTypeOpts }}" as="o" hint-placeholder-count="2">
            <span onClick="{{ o.onClick }}" style="{{ o.style }}">{{ o.label }}</span>
          </sc-for>
        </div>
        <div>
          <div style="display:flex; justify-content:space-between; margin-bottom:9px;"><label style="font-size:14px; font-weight:700; color:#0B1437;">Räume / Büros mit Netzwerkdose</label><span style="font-family:'IBM Plex Mono',monospace; font-size:14px; font-weight:700; color:#2563FF;">{{ rooms }}</span></div>
          <input type="range" min="1" max="30" value="{{ rooms }}" onInput="{{ onRoomsChange }}" style="width:100%;" />
        </div>
        <div>
          <div style="display:flex; justify-content:space-between; margin-bottom:9px;"><label style="font-size:14px; font-weight:700; color:#0B1437;">Netzwerkdosen pro Raum</label><span style="font-family:'IBM Plex Mono',monospace; font-size:14px; font-weight:700; color:#2563FF;">{{ perRoom }}</span></div>
          <input type="range" min="1" max="4" value="{{ perRoom }}" onInput="{{ onPerRoomChange }}" style="width:100%;" />
        </div>
        <div>
          <div style="display:flex; justify-content:space-between; margin-bottom:9px;"><label style="font-size:14px; font-weight:700; color:#0B1437;">Durchschnittliche Kabelstrecke</label><span style="font-family:'IBM Plex Mono',monospace; font-size:14px; font-weight:700; color:#2563FF;">{{ distance }} m</span></div>
          <input type="range" min="5" max="40" value="{{ distance }}" onInput="{{ onDistanceChange }}" style="width:100%;" />
        </div>
        <div style="display:flex; align-items:center; gap:10px; padding-top:4px;">
          <div onClick="{{ toggleWifi }}" style="{{ wifiToggleStyle }}"><div style="{{ wifiKnobStyle }}"></div></div>
          <span style="font-size:14px; font-weight:600; color:#3A4359;">WLAN-Access-Points ergänzen</span>
        </div>
      </div>

      <div style="background:#F5F8FF; border:1px solid #E6ECF7; border-radius:16px; padding:26px; display:flex; flex-direction:column; gap:16px;">
        <div style="font-size:13px; font-weight:700; letter-spacing:.5px; text-transform:uppercase; color:#6B7794;">Ihr Richtwert</div>
        <sc-for list="{{ calcResults }}" as="r" hint-placeholder-count="4">
          <div style="display:flex; align-items:center; gap:14px; background:#fff; border:1px solid #E6ECF7; border-radius:13px; padding:14px 16px;">
            <div style="width:40px; height:40px; flex-shrink:0; border-radius:11px; background:{{ r.tint }}; display:flex; align-items:center; justify-content:center;"><i class="ph ph-{{ r.icon }}" style="font-size:19px; color:{{ r.color }};"></i></div>
            <div style="flex:1;"><div style="font-size:12.5px; color:#45506E;">{{ r.label }}</div><div style="font-family:'IBM Plex Mono',monospace; font-size:19px; font-weight:800; color:#0B1437;">{{ r.value }}</div></div>
          </div>
        </sc-for>
        <div style="margin-top:auto; padding-top:8px;">
          <button onClick="{{ goContact }}" style="width:100%; display:flex; align-items:center; justify-content:center; gap:9px; background:#2563FF; color:#fff; border:none; border-radius:11px; padding:14px; font-family:inherit; font-size:14.5px; font-weight:700; cursor:pointer;" style-hover="background:#1b54e6"><i class="ph ph-clipboard-text" style="font-size:17px;"></i> Verbindliches Angebot anfragen</button>
          <div style="font-size:11.5px; color:#6B7794; text-align:center; margin-top:10px;">Richtwert, keine verbindliche Kalkulation.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ABLAUF -->
  <section id="ablauf" style="max-width:1180px; margin:0 auto; padding:64px 24px 24px;">
    <div style="text-align:center; margin-bottom:36px;">
      <div style="font-size:12.5px; font-weight:700; letter-spacing:1.4px; text-transform:uppercase; color:#2563FF; margin-bottom:12px;">So läuft die Installation ab</div>
      <h2 style="font-size:34px; font-weight:800; letter-spacing:-.7px; margin:0;">Von der Begehung bis zur Abnahme</h2>
    </div>
    <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:16px;">
      <sc-for list="{{ processSteps }}" as="p" hint-placeholder-count="5">
        <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:22px 18px; position:relative;">
          <div style="font-family:'IBM Plex Mono',monospace; font-size:12px; font-weight:700; color:#2563FF; margin-bottom:10px;">{{ p.num }}</div>
          <div style="width:44px; height:44px; border-radius:12px; background:linear-gradient(120deg,#2563FF,#7A5CFF); display:flex; align-items:center; justify-content:center; margin-bottom:14px;"><i class="ph ph-{{ p.icon }}" style="font-size:22px; color:#fff;"></i></div>
          <div style="font-size:15px; font-weight:700; margin-bottom:6px;">{{ p.title }}</div>
          <div style="font-size:13px; color:#45506E; line-height:1.5;">{{ p.desc }}</div>
        </div>
      </sc-for>
    </div>
  </section>

  <!-- PAKETE -->
  <section id="pakete" style="max-width:1180px; margin:0 auto; padding:64px 24px 24px;">
    <div style="text-align:center; margin-bottom:36px;">
      <div style="font-size:12.5px; font-weight:700; letter-spacing:1.4px; text-transform:uppercase; color:#7A5CFF; margin-bottom:12px;">Pakete</div>
      <h2 style="font-size:34px; font-weight:800; letter-spacing:-.7px; margin:0;">Passend für jede Objektgröße</h2>
    </div>
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:22px;">
      <sc-for list="{{ packages }}" as="pk" hint-placeholder-count="3">
        <div style="{{ pk.cardStyle }}">
          <sc-if value="{{ pk.highlight }}" hint-placeholder-val="{{ false }}">
            <div style="position:absolute; top:-13px; left:50%; transform:translateX(-50%); background:linear-gradient(120deg,#2563FF,#21D4FD); color:#fff; font-size:11.5px; font-weight:800; letter-spacing:.4px; padding:6px 16px; border-radius:20px;">BELIEBT</div>
          </sc-if>
          <div style="font-size:13px; font-weight:700; letter-spacing:.5px; text-transform:uppercase; color:{{ pk.accentSoft }};">{{ pk.name }}</div>
          <div style="font-size:14px; color:{{ pk.subColor }}; margin:6px 0 18px;">{{ pk.subtitle }}</div>
          <div style="font-size:34px; font-weight:800; color:{{ pk.textColor }}; margin-bottom:4px;">{{ pk.price }}</div>
          <div style="font-size:12.5px; color:{{ pk.subColor }}; margin-bottom:22px;">{{ pk.priceNote }}</div>
          <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:24px;">
            <sc-for list="{{ pk.features }}" as="f" hint-placeholder-count="5">
              <div style="display:flex; align-items:center; gap:9px; font-size:13.5px; color:{{ pk.textColor }};"><i class="ph ph-check-circle-fill" style="font-size:16px; color:{{ pk.accent }};"></i>{{ f }}</div>
            </sc-for>
          </div>
          <button onClick="{{ goContact }}" style="{{ pk.btnStyle }}">Anfragen</button>
        </div>
      </sc-for>
    </div>
  </section>

  <!-- CTA -->
  <section id="kontakt" style="max-width:1180px; margin:0 auto; padding:24px 24px 80px;">
    <div style="background:linear-gradient(120deg,#2563FF 0%,#7A5CFF 55%,#21D4FD 100%); border-radius:22px; padding:56px; text-align:center; color:#fff;">
      <h2 style="font-size:34px; font-weight:800; letter-spacing:-.7px; margin:0 0 14px;">Wir kommen vorbei und schauen uns alles an</h2>
      <p style="font-size:17px; color:rgba(255,255,255,0.92); max-width:560px; margin:0 auto 30px; line-height:1.6;">Kostenlose Vor-Ort-Begehung für Ihre Wohnung, Ihr Haus oder Bürogebäude — mit unverbindlichem Angebot innerhalb weniger Tage.</p>
      <div style="display:flex; gap:14px; justify-content:center; flex-wrap:wrap;">
        <button style="display:flex; align-items:center; gap:9px; background:#fff; color:#0B1437; border:none; border-radius:11px; padding:15px 28px; font-family:inherit; font-size:15px; font-weight:700; cursor:pointer;" style-hover="background:#EEF2FB"><i class="ph ph-phone-call" style="font-size:18px;"></i> +49 30 1234 5678</button>
        <button style="display:flex; align-items:center; gap:9px; background:rgba(255,255,255,0.16); color:#fff; border:1px solid rgba(255,255,255,0.35); border-radius:11px; padding:15px 28px; font-family:inherit; font-size:15px; font-weight:700; cursor:pointer;" style-hover="background:rgba(255,255,255,0.26)"><i class="ph ph-envelope-simple" style="font-size:18px;"></i> kontakt@gonj.de</button>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <dc-import name="GonjFooter" hint-size="100%,320px"></dc-import>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;$preview&quot;:{&quot;width&quot;:1280,&quot;height&quot;:960}}">
class Component extends DCLogic {
  state = { audience: 'Unternehmen', objType: 'Wohnung', rooms: 8, perRoom: 2, distance: 18, wifi: true };

  go = (id) => () => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' }); };
  setAudience = (a) => () => this.setState({ audience: a });
  setObjType = (o) => () => this.setState({ objType: o, rooms: o === 'Wohnung' ? 8 : 20 });
  onRoomsChange = (e) => this.setState({ rooms: parseInt(e.target.value, 10) });
  onPerRoomChange = (e) => this.setState({ perRoom: parseInt(e.target.value, 10) });
  onDistanceChange = (e) => this.setState({ distance: parseInt(e.target.value, 10) });
  toggleWifi = () => this.setState(s => ({ wifi: !s.wifi }));

  renderVals() {
    const audienceData = {
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
    const audienceTabs = ['Zuhause', 'Unternehmen'].map(a => ({ label: a, onClick: this.setAudience(a), style: { fontSize: '14px', fontWeight: 700, cursor: 'pointer', padding: '10px 22px', borderRadius: '24px', transition: 'all .15s', background: this.state.audience === a ? '#2563FF' : '#fff', color: this.state.audience === a ? '#fff' : '#45506E', border: this.state.audience === a ? '1px solid #2563FF' : '1px solid #E6ECF7' } }));
    const audienceCards = audienceData[this.state.audience];

    const galleryIds = [
      { id: 'gal-1', label: 'Foto: Patchpanel / Serverschrank' },
      { id: 'gal-2', label: 'Foto: Kabelkanal-Verlegung' },
      { id: 'gal-3', label: 'Foto: Netzwerkdose fertig montiert' },
      { id: 'gal-4', label: 'Foto: WLAN-Access-Point Installation' },
    ];

    const cableTypes = [
      { name: 'Cat6', speed: 'bis 1 Gbit/s · 250 MHz', icon: 'plugs-connected', color: '#7C9BFF', tint: 'rgba(124,155,255,0.15)', desc: 'Solider Standard für Arbeitsplätze und Privathaushalte — gutes Preis-Leistungs-Verhältnis.' },
      { name: 'Cat6a', speed: 'bis 10 Gbit/s · 500 MHz', icon: 'lightning', color: '#21D4FD', tint: 'rgba(33,212,253,0.15)', desc: 'Zukunftssicher für höhere Bandbreiten — empfohlen für neue Installationen.' },
      { name: 'Glasfaser (LWL)', speed: 'bis 10+ Gbit/s · lange Strecken', icon: 'wave-sine', color: '#9F7CFF', tint: 'rgba(159,124,255,0.15)', desc: 'Für Gebäudeverbindungen, Serverräume und Strecken über 90 Meter.' },
      { name: 'WLAN Access Points', speed: 'WiFi 6 · Mesh-fähig', icon: 'wifi-high', color: '#3DD68C', tint: 'rgba(61,214,140,0.15)', desc: 'Ergänzend zur Verkabelung für lückenlose Funkabdeckung in jedem Raum.' },
    ];

    const rooms = this.state.rooms, perRoom = this.state.perRoom, distance = this.state.distance;
    const points = rooms * perRoom;
    const cableMeters = Math.round(points * distance * 1.15);
    const days = Math.max(1, Math.ceil(points / (this.state.objType === 'Wohnung' ? 6 : 10)));
    const priceLow = points * 85 + (this.state.wifi ? rooms * 15 : 0);
    const priceHigh = points * 130 + (this.state.wifi ? rooms * 25 : 0);
    const fmt = (n) => new Intl.NumberFormat('de-DE').format(n);

    const objectTypeOpts = ['Wohnung', 'Büro'].map(o => ({ label: o, onClick: this.setObjType(o), style: { fontSize: '13.5px', fontWeight: 700, cursor: 'pointer', padding: '9px 18px', borderRadius: '10px', background: this.state.objType === o ? '#0B1437' : '#F5F8FF', color: this.state.objType === o ? '#fff' : '#45506E', border: this.state.objType === o ? '1px solid #0B1437' : '1px solid #E6ECF7' } }));

    const calcResults = [
      { icon: 'plugs-connected', label: 'Netzwerkdosen gesamt', value: points + ' Stück', color: '#2563FF', tint: '#E6ECFB' },
      { icon: 'ruler', label: 'Geschätzte Kabellänge', value: fmt(cableMeters) + ' m', color: '#21D4FD', tint: '#E2F6FE' },
      { icon: 'clock', label: 'Geschätzte Bauzeit', value: days + (days === 1 ? ' Tag' : ' Tage'), color: '#7A5CFF', tint: '#EFEBFE' },
      { icon: 'currency-eur', label: 'Richtwert Investition', value: fmt(priceLow) + ' – ' + fmt(priceHigh) + ' €', color: '#12B76A', tint: '#E6F7EF' },
    ];

    const wifiToggleStyle = { width: '46px', height: '26px', borderRadius: '13px', background: this.state.wifi ? '#2563FF' : '#D7DEEA', cursor: 'pointer', position: 'relative', transition: 'background .18s' };
    const wifiKnobStyle = { position: 'absolute', top: '3px', left: this.state.wifi ? '23px' : '3px', width: '20px', height: '20px', borderRadius: '50%', background: '#fff', transition: 'left .18s', boxShadow: '0 1px 3px rgba(0,0,0,0.25)' };

    const processSteps = [
      { num: '01', title: 'Vor-Ort-Begehung', desc: 'Wir sichten die Räume und besprechen Ihre Anforderungen.', icon: 'magnifying-glass' },
      { num: '02', title: 'Verkabelungsplan', desc: 'Dosenpositionen, Kabelwege und Verteiler werden festgelegt.', icon: 'blueprint' },
      { num: '03', title: 'Material & Termin', desc: 'Kabel, Dosen und Technik werden beschafft und der Termin fixiert.', icon: 'package' },
      { num: '04', title: 'Verlegung & Montage', desc: 'Fachgerechte Verlegung, Terminierung und Beschriftung vor Ort.', icon: 'wrench' },
      { num: '05', title: 'Test & Abnahme', desc: 'Messung jeder Leitung, Funktionsprüfung und Übergabedokumentation.', icon: 'check-circle' },
    ];

    const packages = [
      { name: 'Basis', subtitle: 'Für kleine Wohnungen', price: 'ab 890 €', priceNote: 'bis 5 Netzwerkdosen', highlight: false, accent: '#2563FF', accentSoft: '#2563FF', textColor: '#0B1437', subColor: '#45506E',
        features: ['Bis zu 5 Netzwerkdosen', 'Cat6-Verkabelung', 'Kleiner Verteilerschrank', 'Funktionsprüfung & Abnahme'],
        cardStyle: { position: 'relative', background: '#fff', border: '1px solid #E6ECF7', borderRadius: '18px', padding: '30px 26px' },
        btnStyle: 'width:100%; background:#0B1437; color:#fff; border:none; border-radius:11px; padding:13px; font-family:inherit; font-size:14.5px; font-weight:700; cursor:pointer;' },
      { name: 'Business', subtitle: 'Für Büros & Praxen', price: 'ab 2.400 €', priceNote: 'bis 20 Netzwerkdosen', highlight: true, accent: '#21D4FD', accentSoft: '#21D4FD', textColor: '#fff', subColor: '#A7B0C6',
        features: ['Bis zu 20 Netzwerkdosen', 'Cat6a-Verkabelung', 'Serverschrank & Patchpanel', 'WLAN-Access-Points', 'Vollständige Dokumentation'],
        cardStyle: { position: 'relative', background: 'linear-gradient(165deg,#0B1437,#16245E)', border: '1px solid #1B2440', borderRadius: '18px', padding: '30px 26px', boxShadow: '0 16px 40px rgba(14,20,38,0.28)' },
        btnStyle: 'width:100%; background:linear-gradient(120deg,#2563FF,#21D4FD); color:#fff; border:none; border-radius:11px; padding:13px; font-family:inherit; font-size:14.5px; font-weight:700; cursor:pointer;' },
      { name: 'Enterprise', subtitle: 'Für Gewerbe & Standorte', price: 'Individuell', priceNote: 'nach Aufmaß', highlight: false, accent: '#2563FF', accentSoft: '#2563FF', textColor: '#0B1437', subColor: '#45506E',
        features: ['Unbegrenzte Netzwerkdosen', 'Glasfaser & Cat6a', 'Mehrere Standorte möglich', 'Wartungsvertrag optional'],
        cardStyle: { position: 'relative', background: '#fff', border: '1px solid #E6ECF7', borderRadius: '18px', padding: '30px 26px' },
        btnStyle: 'width:100%; background:#0B1437; color:#fff; border:none; border-radius:11px; padding:13px; font-family:inherit; font-size:14.5px; font-weight:700; cursor:pointer;' },
    ];

    return {
      navLinks: [
        { label: 'Leistungen', onClick: this.go('leistungen') },
        { label: 'Bedarfsrechner', onClick: this.go('rechner') },
        { label: 'Ablauf', onClick: this.go('ablauf') },
        { label: 'Pakete', onClick: this.go('pakete') },
      ],
      goContact: this.go('kontakt'), goCalc: this.go('rechner'),
      heroStats: [
        { value: '1.800+', label: 'Verlegte Dosen p.a.' },
        { value: '100 %', label: 'Gemessen & dokumentiert' },
        { value: '2–5', label: 'Tage Bauzeit üblich' },
      ],
      galleryIds,
      audienceTabs, audienceCards, cableTypes,
      rooms, perRoom, distance, onRoomsChange: this.onRoomsChange, onPerRoomChange: this.onPerRoomChange, onDistanceChange: this.onDistanceChange,
      objectTypeOpts, calcResults, toggleWifi: this.toggleWifi, wifiToggleStyle, wifiKnobStyle,
      processSteps, packages,
    };
  }
}
</script>
</body>
</html>
