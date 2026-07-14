# F1 IT Solutions

Statische Mehrseiten-Website für einen IT-Dienstleister (Berlin). Reines HTML/CSS/JavaScript, kein Build-Schritt, keine Abhängigkeiten außer Google Fonts und Phosphor Icons (CDN).

## Seiten
- `index.html` — Startseite
- `Website-Web.html`, `ERP-CRM.html`, `IT-Infrastruktur.html`, `Cloud-KI.html`, `IT-Support.html` — Leistungsseiten
- `Netzwerk-Installation.html` — Leistungsdetail mit Bedarfsrechner
- `LUMEN-Online-Shop.html` — Beispiel-Onlineshop (Referenzprojekt)
- `DialPilot.html` — Beispiel-CRM/Dialer-Plattform (Referenzprojekt)
- `PflegePilot.html` — Beispiel-ERP/Pflege-Dispositions-Plattform (Referenzprojekt)

## Gemeinsame Dateien
- `gonj-shared.js` — Navigation, Terminbuchungs-Formular und Footer (auf jeder Seite eingebunden)
- `image-slot.js` — Drag-&-Drop-Bildplatzhalter-Komponente
- `styles.css`, `script.js` — Styles/Logik der Startseite
- `uploads/` — Bilder, Logo, Videos

## Deployment
Kein Build nötig. Repo-Root direkt auf Vercel importieren (Framework Preset: "Other"), oder auf jedem statischen Hoster (GitHub Pages etc.) veröffentlichen.

## Hinweis zu favicon
`favicon.png` wird per `<link rel="icon">` eingebunden (PNG statt .ico — von allen modernen Browsern identisch unterstützt).
