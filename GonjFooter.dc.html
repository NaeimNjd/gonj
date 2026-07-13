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
  ::-webkit-scrollbar{width:10px;height:10px;}
  ::-webkit-scrollbar-thumb{background:#c8c9da;border-radius:8px;border:2px solid transparent;background-clip:content-box;}
  ::-webkit-scrollbar-track{background:transparent;}
  .ph{line-height:1;display:inline-block;}
  @keyframes dp-fade{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
  @keyframes dp-ring{0%{box-shadow:0 0 0 0 rgba(31,164,99,0.45);}70%{box-shadow:0 0 0 16px rgba(31,164,99,0);}100%{box-shadow:0 0 0 0 rgba(31,164,99,0);}}
  @keyframes dp-blink{0%,100%{opacity:1;}50%{opacity:.3;}}
  input::placeholder,textarea::placeholder{color:#A0A2C0;}
</style>
</helmet>

<div style="display:flex; flex-direction:column; height:100vh; width:100%; font-family:'Inter',system-ui,-apple-system,sans-serif;">
  <div style="flex-shrink:0; padding:10px 16px 0; background:#EDEEF6;">
    <dc-import name="GonjNav" hint-size="100%,64px"></dc-import>
  </div>
  <div style="display:flex; flex:1; min-height:0; width:100%; overflow:hidden; color:#0B1437; background:#F5F8FF; -webkit-font-smoothing:antialiased;">

  <!-- ============ SIDEBAR ============ -->
  <aside style="width:{{ sidebarW }}; flex-shrink:0; background:linear-gradient(180deg,#0B1437 0%,#16245E 100%); display:flex; flex-direction:column; transition:width .2s;">
    <div style="display:flex; align-items:center; gap:12px; padding:22px 20px 20px; height:78px;">
      <div style="width:38px; height:38px; flex-shrink:0; border-radius:11px; background:linear-gradient(120deg,#2563FF,#7A5CFF,#21D4FD); display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(37,99,255,0.35);">
        <i class="ph ph-phone-outgoing" style="font-size:20px; color:#fff;"></i>
      </div>
      <sc-if value="{{ showLabels }}" hint-placeholder-val="{{ true }}">
        <div>
          <div style="font-size:17px; font-weight:800; color:#fff; letter-spacing:-.3px;">DialPilot</div>
          <div style="font-size:10.5px; font-weight:600; color:#7E89A3; letter-spacing:.8px; text-transform:uppercase;">Outbound &amp; Recruiting</div>
        </div>
      </sc-if>
    </div>

    <nav style="flex:1; overflow-y:auto; padding:6px 0 14px;">
      <sc-for list="{{ navGroups }}" as="grp" hint-placeholder-count="5">
        <div style="margin:14px 0 2px;">
          <sc-if value="{{ showLabels }}" hint-placeholder-val="{{ true }}">
            <div style="padding:6px 24px; font-size:10.5px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; color:#4A5A85;">{{ grp.group }}</div>
          </sc-if>
          <sc-for list="{{ grp.items }}" as="item" hint-placeholder-count="3">
            <div onClick="{{ item.onClick }}" style="{{ item.style }}" style-hover="background:rgba(255,255,255,0.05)">
              <i class="ph ph-{{ item.icon }}" style="font-size:19px; flex-shrink:0;"></i>
              <sc-if value="{{ showLabels }}" hint-placeholder-val="{{ true }}">
                <span style="flex:1; white-space:nowrap;">{{ item.label }}</span>
              </sc-if>
              <sc-if value="{{ item.badge }}" hint-placeholder-val="{{ false }}">
                <span style="background:#2563FF; color:#fff; font-size:11px; font-weight:700; min-width:19px; height:19px; padding:0 5px; border-radius:10px; display:flex; align-items:center; justify-content:center;">{{ item.badge }}</span>
              </sc-if>
            </div>
          </sc-for>
        </div>
      </sc-for>
    </nav>

    <div style="padding:14px 16px; border-top:1px solid rgba(255,255,255,0.07); display:flex; align-items:center; gap:11px;">
      <div style="position:relative; flex-shrink:0;">
        <div style="width:36px; height:36px; border-radius:50%; background:#2C3A70; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:13px; color:#C7CEDF;">RM</div>
        <span style="position:absolute; bottom:0; right:0; width:11px; height:11px; border-radius:50%; background:#12B76A; border:2px solid #15172E;"></span>
      </div>
      <sc-if value="{{ showLabels }}" hint-placeholder-val="{{ true }}">
        <div style="flex:1; min-width:0;">
          <div style="font-size:13.5px; font-weight:700; color:#EAEEF6; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Robert Maier</div>
          <div style="font-size:11.5px; color:#7E89A3;">Teamleitung Vertrieb</div>
        </div>
      </sc-if>
    </div>
  </aside>

  <!-- ============ MAIN ============ -->
  <div style="flex:1; min-width:0; display:flex; flex-direction:column; overflow:hidden;">

    <!-- TOPBAR -->
    <header style="height:78px; flex-shrink:0; background:#fff; border-bottom:1px solid #E6ECF7; display:flex; align-items:center; gap:20px; padding:0 30px;">
      <div style="flex:1; min-width:0;">
        <div style="font-size:21px; font-weight:800; letter-spacing:-.4px; color:#0B1437; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ title }}</div>
        <div style="font-size:13px; color:#45506E; margin-top:1px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ subtitle }}</div>
      </div>
      <div style="display:flex; align-items:center; gap:9px; background:#F5F8FF; border:1px solid #E6ECF7; border-radius:11px; padding:9px 14px; width:280px; flex-shrink:1; min-width:140px;">
        <i class="ph ph-magnifying-glass" style="font-size:17px; color:#9A9CC0;"></i>
        <input placeholder="Kontakt, Nummer oder Firma suchen …" style="border:none; background:transparent; outline:none; font-family:inherit; font-size:13.5px; color:#0B1437; width:100%;" />
      </div>
      <button onClick="{{ goDialer }}" style="display:flex; align-items:center; gap:8px; background:#12B76A; color:#fff; border:none; border-radius:11px; padding:11px 18px; font-family:inherit; font-size:14px; font-weight:700; cursor:pointer; box-shadow:0 4px 12px rgba(31,164,99,0.3);" style-hover="background:#0A8A4F">
        <i class="ph ph-phone-call" style="font-size:16px;"></i> Anruf starten
      </button>
      <div style="display:flex; align-items:center; gap:8px; background:#F5F8FF; border:1px solid #E6ECF7; border-radius:11px; padding:8px 13px;">
        <span style="width:9px; height:9px; border-radius:50%; background:#12B76A;"></span>
        <span style="font-size:13px; font-weight:600; color:#45506E;">Verfügbar</span>
      </div>
    </header>

    <!-- CONTENT -->
    <main style="flex:1; overflow-y:auto; padding:28px 30px 48px;">

      <!-- ===== ÜBERSICHT ===== -->
      <sc-if value="{{ isDashboard }}" hint-placeholder-val="{{ true }}">
        <div style="animation:dp-fade .3s ease both;">
          <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-bottom:18px;">
            <sc-for list="{{ kpis }}" as="k" hint-placeholder-count="4">
              <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:20px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;">
                  <div style="width:42px; height:42px; border-radius:12px; background:{{ k.tint }}; display:flex; align-items:center; justify-content:center;"><i class="ph ph-{{ k.icon }}" style="font-size:21px; color:{{ k.color }};"></i></div>
                  <span style="font-size:12px; font-weight:700; color:#12B76A; background:#E7F7EF; padding:4px 9px; border-radius:8px;">{{ k.delta }}</span>
                </div>
                <div style="font-size:28px; font-weight:800; letter-spacing:-.6px; color:#0B1437;">{{ k.value }}</div>
                <div style="font-size:13px; color:#45506E; margin-top:2px;">{{ k.label }}</div>
              </div>
            </sc-for>
          </div>

          <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:18px; margin-bottom:18px;">
            <!-- call volume -->
            <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:22px 24px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                <div><div style="font-size:15.5px; font-weight:700; color:#0B1437;">Anrufvolumen heute</div><div style="font-size:12.5px; color:#45506E;">Ausgehende Anrufe pro Stunde</div></div>
                <div style="font-family:'IBM Plex Mono',monospace; font-size:13px; font-weight:600; color:#2563FF;">Spitze · 11–12 Uhr</div>
              </div>
              <div style="display:flex; align-items:flex-end; gap:10px; height:170px; padding-top:18px;">
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;"><div style="width:100%; max-width:30px; height:46px; background:linear-gradient(180deg,#7A5CFF,#2563FF); border-radius:6px 6px 3px 3px;"></div><span style="font-size:11px; font-weight:600; color:#8A93A7;">08</span></div>
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;"><div style="width:100%; max-width:30px; height:84px; background:linear-gradient(180deg,#7A5CFF,#2563FF); border-radius:6px 6px 3px 3px;"></div><span style="font-size:11px; font-weight:600; color:#8A93A7;">09</span></div>
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;"><div style="width:100%; max-width:30px; height:118px; background:linear-gradient(180deg,#7A5CFF,#2563FF); border-radius:6px 6px 3px 3px;"></div><span style="font-size:11px; font-weight:600; color:#8A93A7;">10</span></div>
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;"><div style="width:100%; max-width:30px; height:146px; background:linear-gradient(180deg,#7A5CFF,#2563FF); border-radius:6px 6px 3px 3px;"></div><span style="font-size:11px; font-weight:600; color:#8A93A7;">11</span></div>
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;"><div style="width:100%; max-width:30px; height:96px; background:#DADCF2; border-radius:6px 6px 3px 3px;"></div><span style="font-size:11px; font-weight:600; color:#8A93A7;">12</span></div>
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;"><div style="width:100%; max-width:30px; height:108px; background:linear-gradient(180deg,#7A5CFF,#2563FF); border-radius:6px 6px 3px 3px;"></div><span style="font-size:11px; font-weight:600; color:#8A93A7;">13</span></div>
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;"><div style="width:100%; max-width:30px; height:130px; background:linear-gradient(180deg,#7A5CFF,#2563FF); border-radius:6px 6px 3px 3px;"></div><span style="font-size:11px; font-weight:600; color:#8A93A7;">14</span></div>
                <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:8px;"><div style="width:100%; max-width:30px; height:72px; background:#DADCF2; border-radius:6px 6px 3px 3px;"></div><span style="font-size:11px; font-weight:600; color:#8A93A7;">15</span></div>
              </div>
            </div>
            <!-- funnel -->
            <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:22px 24px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
              <div style="font-size:15.5px; font-weight:700; color:#0B1437;">Conversion-Funnel</div>
              <div style="font-size:12.5px; color:#45506E; margin-bottom:18px;">Diese Woche</div>
              <div style="display:flex; flex-direction:column; gap:13px;">
                <sc-for list="{{ funnel }}" as="f" hint-placeholder-count="5">
                  <div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;"><span style="font-size:13px; font-weight:600; color:#45506E;">{{ f.label }}</span><span style="font-family:'IBM Plex Mono',monospace; font-size:12.5px; font-weight:600; color:#0B1437;">{{ f.value }}</span></div>
                    <div style="height:10px; border-radius:6px; background:#EEF2FF; overflow:hidden;"><div style="height:100%; width:{{ f.pct }}; background:{{ f.color }}; border-radius:6px;"></div></div>
                  </div>
                </sc-for>
              </div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1.1fr; gap:18px;">
            <!-- leaderboard -->
            <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:20px 22px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;"><div style="font-size:15.5px; font-weight:700; color:#0B1437;">Top-Agenten heute</div><span onClick="{{ goAgents }}" style="font-size:13px; font-weight:600; color:#2563FF; cursor:pointer;">Team ansehen</span></div>
              <sc-for list="{{ topAgents }}" as="a" hint-placeholder-count="4">
                <div style="display:flex; align-items:center; gap:13px; padding:11px 0; border-bottom:1px solid #EEF2FF;">
                  <div style="width:40px; height:40px; flex-shrink:0; border-radius:11px; background:{{ a.color }}; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; color:#fff;">{{ a.initials }}</div>
                  <div style="flex:1; min-width:0;"><div style="font-size:14px; font-weight:700; color:#0B1437;">{{ a.name }}</div><div style="font-size:12px; color:#45506E;">{{ a.calls }} Anrufe · {{ a.conv }} Conversion</div></div>
                  <div style="font-family:'IBM Plex Mono',monospace; font-size:14px; font-weight:700; color:#12B76A;">{{ a.termine }}</div>
                </div>
              </sc-for>
            </div>
            <!-- recent outcomes -->
            <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:20px 22px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
              <div style="font-size:15.5px; font-weight:700; color:#0B1437; margin-bottom:14px;">Letzte Gesprächsergebnisse</div>
              <div style="display:flex; flex-direction:column; gap:11px;">
                <sc-for list="{{ recentOutcomes }}" as="o" hint-placeholder-count="4">
                  <div style="display:flex; align-items:center; gap:13px;">
                    <div style="width:34px; height:34px; flex-shrink:0; border-radius:10px; background:{{ o.tint }}; display:flex; align-items:center; justify-content:center;"><i class="ph ph-{{ o.icon }}" style="font-size:17px; color:{{ o.color }};"></i></div>
                    <div style="flex:1; min-width:0;"><div style="font-size:13.5px; font-weight:600; color:#0B1437;">{{ o.lead }}</div><div style="font-size:12px; color:#45506E;">{{ o.outcome }} · {{ o.agent }}</div></div>
                    <span style="font-size:11.5px; color:#8A93A7; white-space:nowrap;">{{ o.time }}</span>
                  </div>
                </sc-for>
              </div>
            </div>
          </div>
        </div>
      </sc-if>

      <!-- ===== DIALER ===== -->
      <sc-if value="{{ isDialer }}" hint-placeholder-val="{{ false }}">
        <div style="animation:dp-fade .3s ease both; display:grid; grid-template-columns:1fr 380px; gap:18px; align-items:start;">

          <!-- CALL WORKSPACE -->
          <div style="display:flex; flex-direction:column; gap:18px;">
            <!-- today chips -->
            <div style="display:flex; gap:12px;">
              <sc-for list="{{ todayChips }}" as="c" hint-placeholder-count="4">
                <div style="flex:1; background:#fff; border:1px solid #E6ECF7; border-radius:13px; padding:13px 16px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
                  <div style="font-family:'IBM Plex Mono',monospace; font-size:22px; font-weight:700; color:{{ c.color }};">{{ c.value }}</div>
                  <div style="font-size:12px; color:#45506E;">{{ c.label }}</div>
                </div>
              </sc-for>
            </div>

            <!-- call card -->
            <div style="background:#fff; border:1px solid #E6ECF7; border-radius:18px; padding:30px; box-shadow:0 2px 10px rgba(26,29,58,0.05); text-align:center;">
              <div style="display:inline-flex; align-items:center; gap:8px; padding:6px 14px; border-radius:20px; background:{{ callStatusTint }}; margin-bottom:22px;">
                <span style="width:8px; height:8px; border-radius:50%; background:{{ callStatusColor }}; {{ callDotAnim }}"></span>
                <span style="font-size:12.5px; font-weight:700; color:{{ callStatusColor }};">{{ callStatusLabel }}</span>
              </div>

              <div style="width:96px; height:96px; margin:0 auto 18px; border-radius:50%; background:{{ currentLead.color }}; display:flex; align-items:center; justify-content:center; font-size:32px; font-weight:800; color:#fff; {{ avatarAnim }}">{{ currentLead.initials }}</div>

              <div style="font-size:24px; font-weight:800; color:#0B1437; letter-spacing:-.4px;">{{ currentLead.name }}</div>
              <div style="font-family:'IBM Plex Mono',monospace; font-size:18px; font-weight:600; color:#2563FF; margin-top:4px;">{{ currentLead.phone }}</div>
              <div style="font-size:13.5px; color:#45506E; margin-top:6px;">{{ currentLead.company }} · {{ currentLead.location }}</div>
              <div style="display:inline-block; margin-top:10px; font-size:11.5px; font-weight:700; color:#7A5CFF; background:#F0ECFE; padding:5px 12px; border-radius:8px;">{{ currentLead.campaign }}</div>

              <div style="font-family:'IBM Plex Mono',monospace; font-size:30px; font-weight:700; color:#0B1437; margin:22px 0 6px; letter-spacing:1px;">{{ callTimer }}</div>

              <!-- softphone controls -->
              <div style="display:flex; align-items:center; justify-content:center; gap:14px; margin-top:14px;">
                <sc-if value="{{ isIdle }}" hint-placeholder-val="{{ true }}">
                  <button onClick="{{ startCall }}" style="display:flex; align-items:center; gap:10px; background:#12B76A; color:#fff; border:none; border-radius:30px; padding:15px 34px; font-family:inherit; font-size:16px; font-weight:700; cursor:pointer; box-shadow:0 6px 16px rgba(31,164,99,0.34);" style-hover="background:#0A8A4F"><i class="ph ph-phone-call" style="font-size:20px;"></i> Anrufen</button>
                </sc-if>
                <sc-if value="{{ inCall }}" hint-placeholder-val="{{ false }}">
                  <button onClick="{{ toggleMute }}" style="{{ muteStyle }}" style-hover="background:#EEF2FF"><i class="ph ph-{{ muteIcon }}" style="font-size:21px;"></i></button>
                  <button onClick="{{ hangup }}" style="display:flex; align-items:center; justify-content:center; width:64px; height:64px; background:#F04438; color:#fff; border:none; border-radius:50%; cursor:pointer; box-shadow:0 6px 16px rgba(217,83,79,0.34);" style-hover="background:#D6392F"><i class="ph ph-phone-x" style="font-size:26px;"></i></button>
                  <button onClick="{{ toggleHold }}" style="{{ holdStyle }}" style-hover="background:#EEF2FF"><i class="ph ph-{{ holdIcon }}" style="font-size:21px;"></i></button>
                </sc-if>
              </div>
            </div>

            <!-- dispositions -->
            <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:20px 22px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
              <div style="font-size:14.5px; font-weight:700; color:#0B1437; margin-bottom:14px;">Gesprächsergebnis erfassen</div>
              <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:11px;">
                <sc-for list="{{ dispositions }}" as="d" hint-placeholder-count="6">
                  <button onClick="{{ d.onClick }}" style="display:flex; align-items:center; gap:10px; padding:13px 15px; border:1.5px solid {{ d.border }}; background:{{ d.tint }}; border-radius:12px; cursor:pointer; font-family:inherit; text-align:left;" style-hover="filter:brightness(0.97)">
                    <i class="ph ph-{{ d.icon }}" style="font-size:19px; color:{{ d.color }}; flex-shrink:0;"></i>
                    <span style="font-size:13px; font-weight:700; color:#0B1437;">{{ d.label }}</span>
                  </button>
                </sc-for>
              </div>
            </div>
          </div>

          <!-- RIGHT RAIL -->
          <div style="display:flex; flex-direction:column; gap:18px;">
            <!-- customer form -->
            <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:20px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
              <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;"><div style="width:32px; height:32px; border-radius:9px; background:#E6ECFB; display:flex; align-items:center; justify-content:center;"><i class="ph ph-user-circle-gear" style="font-size:18px; color:#2563FF;"></i></div><div style="font-size:14.5px; font-weight:700; color:#0B1437;">Kundendaten erfassen</div></div>
              <div style="font-size:12px; color:#45506E; margin-bottom:16px;">Während des Gesprächs ausfüllen</div>
              <div style="display:flex; flex-direction:column; gap:12px;">
                <sc-for list="{{ formFields }}" as="f" hint-placeholder-count="5">
                  <div>
                    <label style="font-size:11.5px; font-weight:600; color:#45506E; display:block; margin-bottom:5px;">{{ f.label }}</label>
                    <input value="{{ f.value }}" onInput="{{ f.onInput }}" placeholder="{{ f.placeholder }}" style="width:100%; padding:10px 12px; border:1px solid #E2E3F0; border-radius:10px; font-family:inherit; font-size:13px; color:#0B1437; outline:none; background:#FAFBFF;" style-focus="border-color:#2563FF;background:#fff" />
                  </div>
                </sc-for>
                <div>
                  <label style="font-size:11.5px; font-weight:600; color:#45506E; display:block; margin-bottom:5px;">Notizen</label>
                  <textarea value="{{ notesValue }}" onInput="{{ onNotesInput }}" placeholder="Gesprächsnotizen …" rows="2" style="width:100%; padding:10px 12px; border:1px solid #E2E3F0; border-radius:10px; font-family:inherit; font-size:13px; color:#0B1437; outline:none; background:#FAFBFF; resize:vertical;" style-focus="border-color:#2563FF;background:#fff"></textarea>
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between; padding-top:2px;"><span style="font-size:12px; color:#45506E;">Status</span><span style="font-size:11.5px; font-weight:700; color:{{ currentLead.statusColor }}; background:{{ currentLead.statusTint }}; padding:5px 11px; border-radius:8px;">{{ currentLead.status }}</span></div>
              </div>
            </div>

            <!-- queue -->
            <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:18px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:14px;"><div style="font-size:14.5px; font-weight:700; color:#0B1437;">Warteschlange</div><span style="font-size:12px; font-weight:600; color:#2563FF; background:#E6ECFB; padding:4px 10px; border-radius:8px;">{{ queueCount }} offen</span></div>
              <div style="display:flex; flex-direction:column; gap:8px;">
                <sc-for list="{{ queueItems }}" as="q" hint-placeholder-count="6">
                  <div onClick="{{ q.onSelect }}" style="{{ q.style }}">
                    <div style="width:32px; height:32px; flex-shrink:0; border-radius:9px; background:{{ q.color }}; display:flex; align-items:center; justify-content:center; font-size:11.5px; font-weight:700; color:#fff;">{{ q.initials }}</div>
                    <div style="flex:1; min-width:0;"><div style="font-size:13px; font-weight:700; color:#0B1437; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ q.name }}</div><div style="font-family:'IBM Plex Mono',monospace; font-size:11px; color:#45506E;">{{ q.phone }}</div></div>
                    <sc-if value="{{ q.isCurrent }}" hint-placeholder-val="{{ false }}"><i class="ph ph-caret-right" style="font-size:15px; color:#2563FF;"></i></sc-if>
                  </div>
                </sc-for>
              </div>
            </div>
          </div>
        </div>
      </sc-if>

      <!-- ===== KONTAKTE ===== -->
      <sc-if value="{{ isContacts }}" hint-placeholder-val="{{ false }}">
        <div style="animation:dp-fade .3s ease both; background:#fff; border:1px solid #E6ECF7; border-radius:16px; box-shadow:0 1px 2px rgba(26,29,58,0.04); overflow:hidden;">
          <div style="padding:16px 22px; border-bottom:1px solid #E6ECF7; display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <sc-for list="{{ contactTabs }}" as="t" hint-placeholder-count="4"><span style="{{ t.style }}">{{ t.label }}</span></sc-for>
            <div style="flex:1;"></div>
            <button style="display:flex; align-items:center; gap:7px; background:#2563FF; color:#fff; border:none; border-radius:10px; padding:9px 15px; font-family:inherit; font-size:13.5px; font-weight:700; cursor:pointer;" style-hover="background:#1B54E6"><i class="ph ph-upload-simple"></i> Liste importieren</button>
          </div>
          <div style="display:grid; grid-template-columns:1.6fr 1.1fr 1.3fr 1fr 0.9fr; gap:14px; padding:11px 22px; background:#F5F8FF; font-size:11.5px; font-weight:700; letter-spacing:.4px; text-transform:uppercase; color:#6B7794;">
            <div>Kontakt</div><div>Telefon</div><div>Firma / Position</div><div>Kampagne</div><div style="text-align:right;">Status</div>
          </div>
          <sc-for list="{{ contacts }}" as="c" hint-placeholder-count="8">
            <div style="display:grid; grid-template-columns:1.6fr 1.1fr 1.3fr 1fr 0.9fr; gap:14px; align-items:center; padding:13px 22px; border-bottom:1px solid #F5F8FF;" style-hover="background:#FAFBFF">
              <div style="display:flex; align-items:center; gap:12px; min-width:0;">
                <div style="width:38px; height:38px; flex-shrink:0; border-radius:10px; background:{{ c.color }}; display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:700; color:#fff;">{{ c.initials }}</div>
                <div style="min-width:0;"><div style="font-size:13.5px; font-weight:700; color:#0B1437; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ c.name }}</div><div style="font-size:11.5px; color:#45506E; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ c.location }}</div></div>
              </div>
              <div style="font-family:'IBM Plex Mono',monospace; font-size:12.5px; color:#45506E; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ c.phone }}</div>
              <div style="font-size:12.5px; color:#45506E; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ c.company }}</div>
              <div style="font-size:12px; color:#45506E; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ c.campaign }}</div>
              <div style="text-align:right;"><span style="font-size:11.5px; font-weight:700; color:{{ c.statusColor }}; background:{{ c.statusTint }}; padding:5px 10px; border-radius:8px; white-space:nowrap;">{{ c.status }}</span></div>
            </div>
          </sc-for>
        </div>
      </sc-if>

      <!-- ===== KAMPAGNEN ===== -->
      <sc-if value="{{ isCampaigns }}" hint-placeholder-val="{{ false }}">
        <div style="animation:dp-fade .3s ease both; display:grid; grid-template-columns:repeat(2,1fr); gap:18px;">
          <sc-for list="{{ campaigns }}" as="c" hint-placeholder-count="4">
            <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:22px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
              <div style="display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:16px;">
                <div style="display:flex; align-items:center; gap:13px;">
                  <div style="width:46px; height:46px; border-radius:13px; background:{{ c.tint }}; display:flex; align-items:center; justify-content:center;"><i class="ph ph-{{ c.icon }}" style="font-size:23px; color:{{ c.color }};"></i></div>
                  <div><div style="font-size:16px; font-weight:700; color:#0B1437;">{{ c.name }}</div><div style="font-size:12.5px; color:#45506E;">{{ c.type }}</div></div>
                </div>
                <span style="font-size:11.5px; font-weight:700; color:{{ c.stColor }}; background:{{ c.stTint }}; padding:5px 11px; border-radius:8px;">{{ c.statusLabel }}</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:7px;"><span style="font-size:12.5px; color:#45506E;">Fortschritt</span><span style="font-family:'IBM Plex Mono',monospace; font-size:12.5px; font-weight:600; color:#0B1437;">{{ c.done }} / {{ c.total }}</span></div>
              <div style="height:9px; border-radius:6px; background:#EEF2FF; overflow:hidden; margin-bottom:18px;"><div style="height:100%; width:{{ c.pct }}; background:{{ c.color }}; border-radius:6px;"></div></div>
              <div style="display:flex; gap:22px;">
                <div><div style="font-size:11px; color:#6B7794; text-transform:uppercase; letter-spacing:.4px; font-weight:700;">Termine</div><div style="font-size:18px; font-weight:800; color:#12B76A;">{{ c.termine }}</div></div>
                <div><div style="font-size:11px; color:#6B7794; text-transform:uppercase; letter-spacing:.4px; font-weight:700;">Conversion</div><div style="font-size:18px; font-weight:800; color:#2563FF;">{{ c.conv }}</div></div>
                <div><div style="font-size:11px; color:#6B7794; text-transform:uppercase; letter-spacing:.4px; font-weight:700;">Agenten</div><div style="font-size:18px; font-weight:800; color:#0B1437;">{{ c.agentCount }}</div></div>
              </div>
            </div>
          </sc-for>
        </div>
      </sc-if>

      <!-- ===== TERMINE ===== -->
      <sc-if value="{{ isAppts }}" hint-placeholder-val="{{ false }}">
        <div style="animation:dp-fade .3s ease both; max-width:860px; background:#fff; border:1px solid #E6ECF7; border-radius:16px; box-shadow:0 1px 2px rgba(26,29,58,0.04); overflow:hidden;">
          <div style="padding:18px 24px; border-bottom:1px solid #E6ECF7; display:flex; align-items:center; justify-content:space-between;"><div style="font-size:15.5px; font-weight:700; color:#0B1437;">Vereinbarte Termine</div><span style="font-size:13px; font-weight:600; color:#2563FF;">Diese Woche · 12</span></div>
          <sc-for list="{{ appointments }}" as="a" hint-placeholder-count="5">
            <div style="display:flex; align-items:center; gap:16px; padding:16px 24px; border-bottom:1px solid #F5F8FF;" style-hover="background:#FAFBFF">
              <div style="text-align:center; width:62px; flex-shrink:0; background:{{ a.tint }}; border-radius:12px; padding:9px 0;"><div style="font-size:18px; font-weight:800; color:{{ a.color }}; line-height:1;">{{ a.day }}</div><div style="font-size:11px; font-weight:600; color:{{ a.color }};">{{ a.month }}</div></div>
              <div style="flex:1; min-width:0;"><div style="font-size:14.5px; font-weight:700; color:#0B1437;">{{ a.lead }}</div><div style="font-size:12.5px; color:#45506E;">{{ a.type }} · {{ a.agent }}</div></div>
              <div style="font-family:'IBM Plex Mono',monospace; font-size:14px; font-weight:600; color:#2563FF;">{{ a.time }}</div>
              <span style="font-size:11.5px; font-weight:700; color:{{ a.stColor }}; background:{{ a.stTint }}; padding:5px 11px; border-radius:8px;">{{ a.stLabel }}</span>
            </div>
          </sc-for>
        </div>
      </sc-if>

      <!-- ===== BERICHTE ===== -->
      <sc-if value="{{ isReports }}" hint-placeholder-val="{{ false }}">
        <div style="animation:dp-fade .3s ease both; background:#fff; border:1px solid #E6ECF7; border-radius:16px; box-shadow:0 1px 2px rgba(26,29,58,0.04); overflow:hidden;">
          <div style="padding:18px 24px; border-bottom:1px solid #E6ECF7;"><div style="font-size:15.5px; font-weight:700; color:#0B1437;">Agenten-Leistung · diese Woche</div><div style="font-size:12.5px; color:#45506E;">Anrufe, Erreichbarkeit und vereinbarte Termine</div></div>
          <div style="display:grid; grid-template-columns:1.4fr 0.8fr 0.8fr 0.8fr 1.4fr; gap:14px; padding:11px 24px; background:#F5F8FF; font-size:11.5px; font-weight:700; letter-spacing:.4px; text-transform:uppercase; color:#6B7794;"><div>Agent</div><div>Anrufe</div><div>Erreicht</div><div>Termine</div><div>Conversion</div></div>
          <sc-for list="{{ reportRows }}" as="r" hint-placeholder-count="5">
            <div style="display:grid; grid-template-columns:1.4fr 0.8fr 0.8fr 0.8fr 1.4fr; gap:14px; align-items:center; padding:14px 24px; border-bottom:1px solid #F5F8FF;">
              <div style="display:flex; align-items:center; gap:12px; min-width:0;"><div style="width:36px; height:36px; flex-shrink:0; border-radius:10px; background:{{ r.color }}; display:flex; align-items:center; justify-content:center; font-size:12.5px; font-weight:700; color:#fff;">{{ r.initials }}</div><div style="font-size:13.5px; font-weight:700; color:#0B1437; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{ r.name }}</div></div>
              <div style="font-family:'IBM Plex Mono',monospace; font-size:13px; color:#45506E;">{{ r.calls }}</div>
              <div style="font-family:'IBM Plex Mono',monospace; font-size:13px; color:#45506E;">{{ r.reached }}</div>
              <div style="font-family:'IBM Plex Mono',monospace; font-size:13px; font-weight:700; color:#12B76A;">{{ r.termine }}</div>
              <div style="display:flex; align-items:center; gap:10px;"><div style="flex:1; height:8px; border-radius:5px; background:#EEF2FF; overflow:hidden;"><div style="height:100%; width:{{ r.pct }}; background:linear-gradient(90deg,#7A5CFF,#2563FF); border-radius:5px;"></div></div><span style="font-size:12px; font-weight:600; color:#45506E; width:38px;">{{ r.pct }}</span></div>
            </div>
          </sc-for>
        </div>
      </sc-if>

      <!-- ===== AGENTEN ===== -->
      <sc-if value="{{ isAgents }}" hint-placeholder-val="{{ false }}">
        <div style="animation:dp-fade .3s ease both; display:grid; grid-template-columns:repeat(3,1fr); gap:18px;">
          <sc-for list="{{ agents }}" as="a" hint-placeholder-count="6">
            <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:20px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
              <div style="display:flex; align-items:center; gap:13px; margin-bottom:16px;">
                <div style="position:relative;"><div style="width:48px; height:48px; border-radius:13px; background:{{ a.color }}; display:flex; align-items:center; justify-content:center; font-size:16px; font-weight:700; color:#fff;">{{ a.initials }}</div><span style="position:absolute; bottom:-2px; right:-2px; width:14px; height:14px; border-radius:50%; background:{{ a.statusColor }}; border:2.5px solid #fff;"></span></div>
                <div style="flex:1; min-width:0;"><div style="font-size:15px; font-weight:700; color:#0B1437;">{{ a.name }}</div><div style="font-size:12px; color:#45506E;">{{ a.role }}</div></div>
              </div>
              <div style="display:inline-flex; align-items:center; gap:7px; font-size:12px; font-weight:700; color:{{ a.statusColor }}; background:{{ a.statusTint }}; padding:6px 12px; border-radius:9px; margin-bottom:16px;"><span style="width:7px; height:7px; border-radius:50%; background:{{ a.statusColor }};"></span>{{ a.status }}</div>
              <div style="display:flex; gap:20px;">
                <div><div style="font-family:'IBM Plex Mono',monospace; font-size:19px; font-weight:700; color:#0B1437;">{{ a.calls }}</div><div style="font-size:11px; color:#6B7794;">Anrufe</div></div>
                <div><div style="font-family:'IBM Plex Mono',monospace; font-size:19px; font-weight:700; color:#12B76A;">{{ a.termine }}</div><div style="font-size:11px; color:#6B7794;">Termine</div></div>
                <div><div style="font-family:'IBM Plex Mono',monospace; font-size:19px; font-weight:700; color:#2563FF;">{{ a.conv }}</div><div style="font-size:11px; color:#6B7794;">Conversion</div></div>
              </div>
            </div>
          </sc-for>
        </div>
      </sc-if>

      <!-- ===== SKRIPTE ===== -->
      <sc-if value="{{ isScripts }}" hint-placeholder-val="{{ false }}">
        <div style="animation:dp-fade .3s ease both; display:grid; grid-template-columns:240px 1fr; gap:18px; align-items:start;">
          <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:14px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
            <div style="font-size:12px; font-weight:700; color:#6B7794; text-transform:uppercase; letter-spacing:.5px; padding:6px 8px 10px;">Gesprächsleitfäden</div>
            <sc-for list="{{ scriptList }}" as="s" hint-placeholder-count="3">
              <div onClick="{{ s.onSelect }}" style="{{ s.style }}">
                <i class="ph ph-{{ s.icon }}" style="font-size:18px; color:{{ s.iconColor }};"></i>
                <span style="font-size:13.5px; font-weight:600;">{{ s.name }}</span>
              </div>
            </sc-for>
          </div>
          <div style="background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:26px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
            <div style="font-size:18px; font-weight:800; color:#0B1437; margin-bottom:2px;">{{ activeScript.name }}</div>
            <div style="font-size:13px; color:#45506E; margin-bottom:22px;">{{ activeScript.subtitle }}</div>
            <div style="display:flex; flex-direction:column; gap:16px;">
              <sc-for list="{{ activeScript.sections }}" as="sec" hint-placeholder-count="4">
                <div style="border-left:3px solid #2563FF; padding:2px 0 2px 16px;">
                  <div style="font-size:11.5px; font-weight:700; color:#2563FF; text-transform:uppercase; letter-spacing:.6px; margin-bottom:5px;">{{ sec.tag }}</div>
                  <div style="font-size:14.5px; color:#0B1437; line-height:1.55;">{{ sec.text }}</div>
                </div>
              </sc-for>
            </div>
          </div>
        </div>
      </sc-if>

      <!-- ===== EINSTELLUNGEN ===== -->
      <sc-if value="{{ isSettings }}" hint-placeholder-val="{{ false }}">
        <div style="animation:dp-fade .3s ease both; max-width:680px; background:#fff; border:1px solid #E6ECF7; border-radius:16px; padding:26px; box-shadow:0 1px 2px rgba(26,29,58,0.04);">
          <div style="font-size:16px; font-weight:700; color:#0B1437; margin-bottom:4px;">Systemeinstellungen</div>
          <div style="font-size:13px; color:#45506E; margin-bottom:22px;">Dialer- und Team-Konfiguration</div>
          <sc-for list="{{ settingsRows }}" as="s" hint-placeholder-count="5">
            <div style="display:flex; align-items:center; gap:14px; padding:16px 0; border-bottom:1px solid #F5F8FF;">
              <div style="width:40px; height:40px; border-radius:11px; background:#E6ECFB; display:flex; align-items:center; justify-content:center;"><i class="ph ph-{{ s.icon }}" style="font-size:19px; color:#2563FF;"></i></div>
              <div style="flex:1;"><div style="font-size:14px; font-weight:700; color:#0B1437;">{{ s.title }}</div><div style="font-size:12.5px; color:#45506E;">{{ s.desc }}</div></div>
              <div style="font-size:13px; font-weight:600; color:#45506E; background:#F5F8FF; padding:8px 14px; border-radius:9px;">{{ s.value }}</div>
            </div>
          </sc-for>
        </div>
      </sc-if>

    </main>
  </div>

  <!-- TOAST -->
  <sc-if value="{{ toast }}" hint-placeholder-val="{{ false }}">
    <div style="position:fixed; bottom:28px; left:50%; transform:translateX(-50%); background:#0B1437; color:#fff; padding:14px 22px; border-radius:13px; font-size:14px; font-weight:600; display:flex; align-items:center; gap:11px; box-shadow:0 12px 32px rgba(0,0,0,0.28); animation:dp-fade .25s ease both; z-index:100;">
      <i class="ph ph-{{ toastIcon }}" style="font-size:20px; color:{{ toastColor }};"></i>{{ toast }}
    </div>
  </sc-if>

  </div>
</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;$preview&quot;:{&quot;width&quot;:&quot;100%&quot;,&quot;height&quot;:&quot;100%&quot;},&quot;autoAdvance&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:false,&quot;tsType&quot;:&quot;boolean&quot;},&quot;sidebarCollapsed&quot;:{&quot;editor&quot;:&quot;boolean&quot;,&quot;default&quot;:false,&quot;tsType&quot;:&quot;boolean&quot;}}">
class Component extends DCLogic {
  leads = [
    { id:'l1', name:'Andreas Vogel', phone:'+49 151 2847 6610', company:'Vogel Elektrotechnik GmbH', location:'München', email:'a.vogel@vogel-elektro.de', campaign:'B2B Marketing · Handwerk', initials:'AV', color:'#2563FF', status:'Neu' },
    { id:'l2', name:'Birgit Sommer', phone:'+49 170 9923 145', company:'Pflegefachkraft · sucht Stelle', location:'Köln', email:'b.sommer@web.de', campaign:'Pflege-Recruiting Q2', initials:'BS', color:'#7A5CFF', status:'Rückruf' },
    { id:'l3', name:'Henrik Lund', phone:'+49 160 5512 089', company:'Lund Logistik', location:'Hamburg', email:'', campaign:'Versicherung Outbound', initials:'HL', color:'#1FA39C', status:'Neu' },
    { id:'l4', name:'Carla Moreau', phone:'+49 152 7781 332', company:'Frontend-Entwicklerin', location:'Berlin', email:'c.moreau@gmail.com', campaign:'Stellenvermittlung IT', initials:'CM', color:'#D9774F', status:'In Bearbeitung' },
    { id:'l5', name:'Stefan Berger', phone:'+49 171 3349 920', company:'Berger Sanitär & Heizung', location:'Stuttgart', email:'', campaign:'B2B Marketing · Handwerk', initials:'SB', color:'#2563FF', status:'Neu' },
    { id:'l6', name:'Aleksandra Nowak', phone:'+49 159 0042 718', company:'Altenpflegerin · sucht Stelle', location:'Düsseldorf', email:'a.nowak@outlook.com', campaign:'Pflege-Recruiting Q2', initials:'AN', color:'#C84B8C', status:'Qualifiziert' },
    { id:'l7', name:'Thomas Richter', phone:'+49 162 8890 451', company:'Richter Consulting', location:'Frankfurt', email:'', campaign:'Versicherung Outbound', initials:'TR', color:'#12B76A', status:'Neu' },
    { id:'l8', name:'Marie Dubois', phone:'+49 176 2218 663', company:'DevOps-Engineer', location:'Leipzig', email:'', campaign:'Stellenvermittlung IT', initials:'MD', color:'#7A5CFF', status:'Rückruf' },
    { id:'l9', name:'Paul Hoffmann', phone:'+49 151 6634 207', company:'Hoffmann Dachbau', location:'Bremen', email:'', campaign:'B2B Marketing · Handwerk', initials:'PH', color:'#C8902B', status:'Neu' },
  ];
  statusStyle = {
    'Neu': ['#2563FF', '#E6ECFB'], 'In Bearbeitung': ['#2563FF', '#E6ECFB'], 'Rückruf': ['#F0913A', '#FEF1E4'],
    'Qualifiziert': ['#12B76A', '#E7F7EF'], 'Termin vereinbart': ['#12B76A', '#E7F7EF'], 'Kein Interesse': ['#6B7794', '#F5F8FF'], 'Nicht erreicht': ['#F04438', '#FDEBEA'],
  };

  state = {
    view: 'dialer',
    callState: 'idle', callSeconds: 0,
    currentIndex: 0,
    muted: false, held: false,
    edits: {},
    today: { anrufe: 47, erreicht: 31, termine: 8, rueckruf: 6 },
    toast: null, toastIcon: 'check-circle-fill', toastColor: '#34D399',
    activeScript: 's1',
    contactTab: 'Alle',
  };

  go = (v) => () => this.setState({ view: v });

  _fmt(s) { const m = Math.floor(s / 60); const r = s % 60; return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r; }
  _flash(msg, icon, color) { this.setState({ toast: msg, toastIcon: icon || 'check-circle', toastColor: color || '#34D399' }); clearTimeout(this._tt); this._tt = setTimeout(() => this.setState({ toast: null }), 3000); }

  startCall = () => {
    if (this.state.callState !== 'idle') return;
    this.setState({ callState: 'ringing', callSeconds: 0, muted: false, held: false });
    clearTimeout(this._rt); clearInterval(this._timer);
    this._rt = setTimeout(() => {
      this.setState({ callState: 'connected' });
      this._timer = setInterval(() => this.setState(s => ({ callSeconds: s.callSeconds + 1 })), 1000);
    }, 1400);
  };
  hangup = () => { clearTimeout(this._rt); clearInterval(this._timer); this.setState({ callState: 'idle', callSeconds: 0, held: false }); };
  toggleMute = () => this.setState(s => ({ muted: !s.muted }));
  toggleHold = () => this.setState(s => ({ held: !s.held }));

  _advance() { this.setState(s => ({ currentIndex: (s.currentIndex + 1) % this.leads.length })); }

  endCall = (outcomeKey, statusLabel, icon, color) => () => {
    clearTimeout(this._rt); clearInterval(this._timer);
    const lead = this.leads[this.state.currentIndex];
    this.setState(s => {
      const edits = { ...s.edits, [lead.id]: { ...(s.edits[lead.id] || {}), status: statusLabel } };
      const today = { ...s.today };
      today.anrufe += 1;
      if (outcomeKey === 'termin') { today.termine += 1; today.erreicht += 1; }
      else if (outcomeKey === 'interesse' || outcomeKey === 'kein') { today.erreicht += 1; }
      else if (outcomeKey === 'rueckruf') { today.rueckruf += 1; today.erreicht += 1; }
      return { edits, today, callState: 'idle', callSeconds: 0, held: false, currentIndex: (s.currentIndex + 1) % this.leads.length };
    });
    this._flash('Ergebnis gespeichert: ' + statusLabel, icon, color);
    if (this.props.autoAdvance === true) { clearTimeout(this._aa); this._aa = setTimeout(this.startCall, 900); }
  };

  selectQueue = (idx) => () => { clearTimeout(this._rt); clearInterval(this._timer); this.setState({ currentIndex: idx, callState: 'idle', callSeconds: 0 }); };
  makeEdit = (id, key) => (e) => { const val = e.target.value; this.setState(s => ({ edits: { ...s.edits, [id]: { ...(s.edits[id] || {}), [key]: val } } })); };
  selectScript = (id) => () => this.setState({ activeScript: id });
  setTab = (t) => () => this.setState({ contactTab: t });

  componentWillUnmount() { clearTimeout(this._rt); clearInterval(this._timer); clearTimeout(this._tt); clearTimeout(this._aa); }

  _merged(lead) { return { ...lead, ...(this.state.edits[lead.id] || {}) }; }

  renderVals() {
    const v = this.state.view;
    const collapsed = this.props.sidebarCollapsed === true;
    const showLabels = !collapsed;

    const navStyle = (id) => {
      const active = v === id;
      return { display: 'flex', alignItems: 'center', gap: collapsed ? '0' : '13px', justifyContent: collapsed ? 'center' : 'flex-start', padding: collapsed ? '12px 0' : '10px 16px', margin: '1px 12px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', fontWeight: active ? 700 : 500, color: active ? '#FFFFFF' : '#8A8DB8', background: active ? 'rgba(124,140,255,0.16)' : 'transparent', boxShadow: active ? 'inset 3px 0 0 #7A5CFF' : 'none', transition: 'all .15s' };
    };
    const mk = (id, label, icon, badge) => ({ id, label, icon, badge: badge || null, style: navStyle(id), onClick: this.go(id) });
    const navGroups = [
      { group: 'Verwaltung', items: [mk('dashboard','Übersicht','squares-four'), mk('dialer','Anrufen','phone-outgoing', this.leads.length), mk('contacts','Kontakte','address-book'), mk('campaigns','Kampagnen','megaphone')] },
      { group: 'Planung', items: [mk('appts','Termine','calendar-check', 12)] },
      { group: 'Auswertung', items: [mk('reports','Berichte','chart-line-up')] },
      { group: 'Team', items: [mk('agents','Agenten','headset'), mk('scripts','Skripte','chat-text')] },
      { group: 'System', items: [mk('settings','Einstellungen','gear-six')] },
    ];
    const titles = {
      dashboard: ['Übersicht', 'Live-Überblick über Anrufe, Kampagnen und Conversion'],
      dialer: ['Anruf-Workspace', 'Kontakte anrufen, erfassen und Ergebnis dokumentieren'],
      contacts: ['Kontakte', 'Alle Nummern, Leads und Kandidaten'],
      campaigns: ['Kampagnen', 'Anruflisten & Fortschritt'],
      appts: ['Termine', 'Aus Gesprächen vereinbarte Termine'],
      reports: ['Berichte', 'Leistungsauswertung des Teams'],
      agents: ['Agenten', 'Team-Status in Echtzeit'],
      scripts: ['Skripte', 'Gesprächsleitfäden für Agenten'],
      settings: ['Einstellungen', 'Dialer- und Team-Konfiguration'],
    };
    const t = titles[v] || ['', ''];
    const td = this.state.today;

    // dialer
    const cs = this.state.callState;
    const isIdle = cs === 'idle', isRinging = cs === 'ringing', isConnected = cs === 'connected';
    const inCall = isRinging || isConnected;
    const callStatusLabel = isConnected ? (this.state.held ? 'Gehalten' : 'Verbunden') : isRinging ? 'Wird angerufen …' : 'Bereit zum Anruf';
    const callStatusColor = isConnected ? '#12B76A' : isRinging ? '#F0913A' : '#6B7794';
    const callStatusTint = isConnected ? '#E7F7EF' : isRinging ? '#FEF1E4' : '#F5F8FF';
    const callDotAnim = inCall ? 'animation:dp-blink 1s infinite;' : '';
    const avatarAnim = isRinging ? 'animation:dp-ring 1.4s infinite;' : '';
    const currentLeadRaw = this.leads[this.state.currentIndex];
    const m = this._merged(currentLeadRaw);
    const st = this.statusStyle[m.status] || ['#6B7794', '#F5F8FF'];
    const currentLead = { ...m, statusColor: st[0], statusTint: st[1] };

    const formFields = [
      { label: 'Name', key: 'name', value: m.name || '', placeholder: 'Vor- und Nachname' },
      { label: 'Telefon', key: 'phone', value: m.phone || '', placeholder: '+49 …' },
      { label: 'E-Mail', key: 'email', value: m.email || '', placeholder: 'name@firma.de' },
      { label: 'Firma / Position', key: 'company', value: m.company || '', placeholder: 'Firma oder Beruf' },
      { label: 'Ort', key: 'location', value: m.location || '', placeholder: 'Stadt' },
    ].map(f => ({ ...f, onInput: this.makeEdit(currentLeadRaw.id, f.key) }));
    const notesValue = m.notes || '';

    const dispositions = [
      { key: 'termin', label: 'Termin vereinbart', icon: 'calendar-check', color: '#12B76A', tint: '#E7F7EF', border: '#B4EBCE' },
      { key: 'interesse', label: 'Interesse', icon: 'thumbs-up', color: '#2563FF', tint: '#E6ECFB', border: '#C7D9FF' },
      { key: 'rueckruf', label: 'Rückruf', icon: 'arrow-counter-clockwise', color: '#F0913A', tint: '#FEF1E4', border: '#F7D8B0' },
      { key: 'kein', label: 'Kein Interesse', icon: 'hand-palm', color: '#6B7794', tint: '#F5F8FF', border: '#E6ECF7' },
      { key: 'nicht', label: 'Nicht erreicht', icon: 'phone-x', color: '#F04438', tint: '#FDEBEA', border: '#F9CFCD' },
      { key: 'mailbox', label: 'Mailbox', icon: 'voicemail', color: '#7A5CFF', tint: '#F0ECFE', border: '#D9CDFF' },
    ].map(d => ({ ...d, onClick: this.endCall(d.key, d.key === 'termin' ? 'Termin vereinbart' : d.key === 'interesse' ? 'Qualifiziert' : d.key === 'rueckruf' ? 'Rückruf' : d.key === 'kein' ? 'Kein Interesse' : d.key === 'nicht' ? 'Nicht erreicht' : 'Rückruf', d.icon, d.color) }));

    const queueItems = this.leads.map((l, i) => {
      const ml = this._merged(l); const isCurrent = i === this.state.currentIndex;
      return { ...ml, isCurrent, onSelect: this.selectQueue(i), style: { display: 'flex', alignItems: 'center', gap: '11px', padding: '9px 11px', borderRadius: '11px', cursor: 'pointer', background: isCurrent ? '#E6ECFB' : '#FAFBFF', border: isCurrent ? '1px solid #C7D2FF' : '1px solid #E6ECF7' } };
    });

    const muteStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', background: this.state.muted ? '#E6ECFB' : '#F5F8FF', color: this.state.muted ? '#2563FF' : '#45506E', border: '1px solid #E2E3F0', borderRadius: '50%', cursor: 'pointer' };
    const holdStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', background: this.state.held ? '#FEF1E4' : '#F5F8FF', color: this.state.held ? '#F0913A' : '#45506E', border: '1px solid #E2E3F0', borderRadius: '50%', cursor: 'pointer' };

    const todayChips = [
      { label: 'Anrufe heute', value: td.anrufe, color: '#2563FF' },
      { label: 'Erreicht', value: td.erreicht, color: '#12B76A' },
      { label: 'Termine', value: td.termine, color: '#7A5CFF' },
      { label: 'Rückrufe', value: td.rueckruf, color: '#F0913A' },
    ];

    // dashboard
    const kpis = [
      { label: 'Anrufe heute', value: String(td.anrufe), icon: 'phone-outgoing', color: '#2563FF', tint: '#E6ECFB', delta: '+12' },
      { label: 'Erreichungsquote', value: (td.anrufe ? Math.round(td.erreicht / td.anrufe * 100) : 0) + '%', icon: 'phone-incoming', color: '#12B76A', tint: '#E7F7EF', delta: '+4%' },
      { label: 'Termine vereinbart', value: String(td.termine), icon: 'calendar-check', color: '#7A5CFF', tint: '#F0ECFE', delta: '+3' },
      { label: 'Aktive Kampagnen', value: '4', icon: 'megaphone', color: '#D9774F', tint: '#FBEEE7', delta: '+1' },
    ];
    const funnel = [
      { label: 'Angerufen', value: '1.240', pct: '100%', color: '#2563FF' },
      { label: 'Erreicht', value: '820', pct: '66%', color: '#5C6BDB' },
      { label: 'Interesse', value: '410', pct: '33%', color: '#7A5CFF' },
      { label: 'Termin', value: '180', pct: '15%', color: '#7A5CFF' },
      { label: 'Abschluss', value: '96', pct: '8%', color: '#12B76A' },
    ];
    const agentsBase = [
      { name: 'Julia Wagner', role: 'Senior Agentin', initials: 'JW', color: '#2563FF', status: 'Im Gespräch', calls: 38, termine: 9, conv: '24%' },
      { name: 'Mehmet Yilmaz', role: 'Recruiter', initials: 'MY', color: '#7A5CFF', status: 'Verfügbar', calls: 31, termine: 7, conv: '23%' },
      { name: 'Sandra Klein', role: 'Agentin', initials: 'SK', color: '#1FA39C', status: 'Im Gespräch', calls: 29, termine: 6, conv: '21%' },
      { name: 'Lukas Bauer', role: 'Agent', initials: 'LB', color: '#D9774F', status: 'Pause', calls: 22, termine: 4, conv: '18%' },
      { name: 'Nora Fischer', role: 'Recruiterin', initials: 'NF', color: '#C84B8C', status: 'Verfügbar', calls: 26, termine: 5, conv: '19%' },
      { name: 'Daniel Krause', role: 'Agent', initials: 'DK', color: '#12B76A', status: 'Offline', calls: 0, termine: 0, conv: '–' },
    ];
    const statusStyleA = { 'Im Gespräch': ['#12B76A', '#E7F7EF'], 'Verfügbar': ['#2563FF', '#E6ECFB'], 'Pause': ['#F0913A', '#FEF1E4'], 'Offline': ['#6B7794', '#F5F8FF'] };
    const agents = agentsBase.map(a => ({ ...a, statusColor: statusStyleA[a.status][0], statusTint: statusStyleA[a.status][1] }));
    const topAgents = [...agentsBase].sort((a, b) => b.termine - a.termine).slice(0, 4);
    const recentOutcomes = [
      { lead: 'Andreas Vogel', outcome: 'Termin vereinbart', agent: 'Julia W.', icon: 'calendar-check', color: '#12B76A', tint: '#E7F7EF', time: 'vor 2 Min' },
      { lead: 'Carla Moreau', outcome: 'Interesse', agent: 'Mehmet Y.', icon: 'thumbs-up', color: '#2563FF', tint: '#E6ECFB', time: 'vor 8 Min' },
      { lead: 'Henrik Lund', outcome: 'Rückruf vereinbart', agent: 'Sandra K.', icon: 'arrow-counter-clockwise', color: '#F0913A', tint: '#FEF1E4', time: 'vor 15 Min' },
      { lead: 'Stefan Berger', outcome: 'Nicht erreicht', agent: 'Nora F.', icon: 'phone-x', color: '#F04438', tint: '#FDEBEA', time: 'vor 21 Min' },
    ];

    // contacts
    const tabs = ['Alle', 'Neu', 'In Bearbeitung', 'Rückruf', 'Qualifiziert'];
    const contactTabs = tabs.map(label => ({ label, style: { fontSize: '13px', fontWeight: 700, cursor: 'pointer', padding: '7px 14px', borderRadius: '9px', background: this.state.contactTab === label ? '#2563FF' : '#F5F8FF', color: this.state.contactTab === label ? '#fff' : '#45506E' }, onClick: this.setTab(label) }));
    const allContacts = this.leads.map(l => { const ml = this._merged(l); const s2 = this.statusStyle[ml.status] || ['#6B7794', '#F5F8FF']; return { ...ml, statusColor: s2[0], statusTint: s2[1] }; });
    const contacts = this.state.contactTab === 'Alle' ? allContacts : allContacts.filter(c => c.status === this.state.contactTab);

    // campaigns
    const campaigns = [
      { name: 'Pflege-Recruiting Q2', type: 'Kandidaten-Akquise', icon: 'first-aid-kit', color: '#12B76A', tint: '#E7F7EF', done: 184, total: 320, termine: 42, conv: '23%', agentCount: 3, statusLabel: 'Aktiv', stColor: '#12B76A', stTint: '#E7F7EF' },
      { name: 'B2B Marketing · Handwerk', type: 'Outbound Vertrieb', icon: 'megaphone', color: '#2563FF', tint: '#E6ECFB', done: 96, total: 250, termine: 28, conv: '29%', agentCount: 2, statusLabel: 'Aktiv', stColor: '#12B76A', stTint: '#E7F7EF' },
      { name: 'Stellenvermittlung IT', type: 'Kandidaten-Akquise', icon: 'code', color: '#7A5CFF', tint: '#F0ECFE', done: 210, total: 240, termine: 51, conv: '24%', agentCount: 2, statusLabel: 'Endphase', stColor: '#F0913A', stTint: '#FEF1E4' },
      { name: 'Versicherung Outbound', type: 'Outbound Vertrieb', icon: 'shield-check', color: '#D9774F', tint: '#FBEEE7', done: 0, total: 180, termine: 0, conv: '–', agentCount: 1, statusLabel: 'Geplant', stColor: '#6B7794', stTint: '#F5F8FF' },
    ].map(c => ({ ...c, pct: Math.round(c.done / c.total * 100) + '%' }));

    // appointments
    const appointments = [
      { day: '25', month: 'Jun', lead: 'Andreas Vogel · Vogel Elektrotechnik', type: 'Erstgespräch B2B', agent: 'Julia Wagner', time: '10:30', tint: '#E6ECFB', color: '#2563FF', stLabel: 'Bestätigt', stColor: '#12B76A', stTint: '#E7F7EF' },
      { day: '25', month: 'Jun', lead: 'Aleksandra Nowak · Pflege', type: 'Vorstellungsgespräch', agent: 'Mehmet Yilmaz', time: '14:00', tint: '#F0ECFE', color: '#7A5CFF', stLabel: 'Bestätigt', stColor: '#12B76A', stTint: '#E7F7EF' },
      { day: '26', month: 'Jun', lead: 'Carla Moreau · IT', type: 'Tech-Interview', agent: 'Mehmet Yilmaz', time: '09:15', tint: '#E7F7EF', color: '#12B76A', stLabel: 'Offen', stColor: '#F0913A', stTint: '#FEF1E4' },
      { day: '26', month: 'Jun', lead: 'Stefan Berger · Sanitär', type: 'Angebotsgespräch', agent: 'Sandra Klein', time: '11:45', tint: '#FBEEE7', color: '#D9774F', stLabel: 'Bestätigt', stColor: '#12B76A', stTint: '#E7F7EF' },
      { day: '27', month: 'Jun', lead: 'Thomas Richter · Consulting', type: 'Bedarfsanalyse', agent: 'Nora Fischer', time: '16:00', tint: '#E6ECFB', color: '#2563FF', stLabel: 'Offen', stColor: '#F0913A', stTint: '#FEF1E4' },
    ];

    // reports
    const reportRows = agentsBase.filter(a => a.calls > 0).map(a => ({ ...a, reached: Math.round(a.calls * 0.65), pct: a.conv }));

    // scripts
    const scriptsData = [
      { id: 's1', name: 'Pflege-Recruiting', icon: 'first-aid-kit', subtitle: 'Erstansprache von Pflegekräften', sections: [
        { tag: 'Begrüßung', text: 'Guten Tag, mein Name ist [Name] von [Firma]. Wir vermitteln Pflegekräfte an attraktive Einrichtungen — haben Sie zwei Minuten?' },
        { tag: 'Bedarf', text: 'Sind Sie aktuell offen für eine neue Position? Was ist Ihnen wichtig: Schichtmodell, Standort oder Gehalt?' },
        { tag: 'Einwand', text: '„Ich bin zufrieden." → Verständlich. Viele unserer Kandidaten waren das auch — bis sie gesehen haben, was möglich ist. Darf ich Ihnen unverbindlich zwei Optionen zeigen?' },
        { tag: 'Abschluss', text: 'Super! Ich schlage ein kurzes Kennenlerngespräch vor. Passt Ihnen Donnerstag 14 Uhr oder lieber Freitag vormittags?' },
      ] },
      { id: 's2', name: 'B2B Vertrieb', icon: 'megaphone', subtitle: 'Outbound an Handwerksbetriebe', sections: [
        { tag: 'Begrüßung', text: 'Guten Tag Herr/Frau [Name], [Name] von [Firma]. Wir helfen Handwerksbetrieben, mehr qualifizierte Anfragen zu gewinnen.' },
        { tag: 'Qualifizierung', text: 'Wie gewinnen Sie aktuell neue Kunden? Würden mehr Anfragen für Sie überhaupt Sinn ergeben?' },
        { tag: 'Nutzen', text: 'Unsere Kunden steigern ihre Anfragen im Schnitt um 30 % — ohne Mehraufwand für Sie.' },
        { tag: 'Abschluss', text: 'Ich zeige Ihnen das gern in 15 Minuten. Wann passt es besser — Anfang oder Ende der Woche?' },
      ] },
      { id: 's3', name: 'Versicherung', icon: 'shield-check', subtitle: 'Bedarfsanalyse Vorsorge', sections: [
        { tag: 'Begrüßung', text: 'Guten Tag, [Name] von [Firma]. Wir bieten eine kostenlose Vorsorge-Analyse an.' },
        { tag: 'Bedarf', text: 'Wann haben Sie Ihre Absicherung zuletzt geprüft? Hat sich Ihre Lebenssituation seitdem verändert?' },
        { tag: 'Abschluss', text: 'Ein Berater kann das unverbindlich prüfen. Wann erreichen wir Sie am besten?' },
      ] },
    ];
    const activeScript = scriptsData.find(s => s.id === this.state.activeScript) || scriptsData[0];
    const scriptList = scriptsData.map(s => ({ ...s, onSelect: this.selectScript(s.id), iconColor: this.state.activeScript === s.id ? '#2563FF' : '#8A93A7', style: { display: 'flex', alignItems: 'center', gap: '11px', padding: '11px 12px', borderRadius: '10px', cursor: 'pointer', color: this.state.activeScript === s.id ? '#0B1437' : '#45506E', background: this.state.activeScript === s.id ? '#E6ECFB' : 'transparent' } }));

    const settingsRows = [
      { icon: 'phone-outgoing', title: 'Dialer-Modus', desc: 'Vorschau / Power / Predictive', value: 'Power' },
      { icon: 'translate', title: 'Sprache', desc: 'Sprache der Oberfläche', value: 'Deutsch' },
      { icon: 'clock', title: 'Anrufzeiten', desc: 'Erlaubtes Zeitfenster (DSGVO)', value: '08–20 Uhr' },
      { icon: 'phone-disconnect', title: 'Wahlwiederholung', desc: 'Versuche bei „Nicht erreicht"', value: '3×' },
      { icon: 'shield-check', title: 'DSGVO-Einwilligung', desc: 'Pflichtfeld vor Erfassung', value: 'Aktiv' },
    ];

    return {
      sidebarW: collapsed ? '76px' : '256px', showLabels, navGroups,
      title: t[0], subtitle: t[1],
      goDialer: this.go('dialer'), goAgents: this.go('agents'),
      isDashboard: v === 'dashboard', isDialer: v === 'dialer', isContacts: v === 'contacts', isCampaigns: v === 'campaigns', isAppts: v === 'appts', isReports: v === 'reports', isAgents: v === 'agents', isScripts: v === 'scripts', isSettings: v === 'settings',
      // dialer
      isIdle, inCall, callStatusLabel, callStatusColor, callStatusTint, callDotAnim, avatarAnim,
      callTimer: this._fmt(this.state.callSeconds), currentLead,
      startCall: this.startCall, hangup: this.hangup, toggleMute: this.toggleMute, toggleHold: this.toggleHold,
      muteStyle, holdStyle, muteIcon: this.state.muted ? 'microphone-slash' : 'microphone', holdIcon: this.state.held ? 'play' : 'pause',
      formFields, notesValue, onNotesInput: this.makeEdit(currentLeadRaw.id, 'notes'),
      dispositions, queueItems, queueCount: this.leads.length, todayChips,
      // dashboard
      kpis, funnel, topAgents, recentOutcomes,
      // contacts
      contactTabs, contacts,
      // campaigns
      campaigns,
      // appts
      appointments,
      // reports
      reportRows,
      // agents
      agents,
      // scripts
      scriptList, activeScript,
      settingsRows,
      toast: this.state.toast, toastIcon: this.state.toastIcon, toastColor: this.state.toastColor,
    };
  }
}
</script>
</body>
</html>
