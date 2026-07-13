<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<footer style="background:#0B1437; color:#C2CDF0; padding:60px 24px 28px; font-family:'Inter',system-ui,-apple-system,sans-serif;">
  <div style="max-width:1180px; margin:0 auto; display:grid; grid-template-columns:1.3fr 2fr; gap:40px; padding-bottom:40px; border-bottom:1px solid rgba(255,255,255,0.1);">
    <div>
      <img src="uploads/f1-logo-transparent2.png" alt="F1" style="height:40px; width:auto; display:block; margin-bottom:16px;">
      <h4 style="color:#fff; font-size:18px; margin:0 0 14px;">IT Solutions &amp; Digitale Transformation</h4>
      <p style="font-size:14px; color:#8C9BCE; max-width:360px; line-height:1.7; margin:0;">Ihr IT-Dienstleister für kleine und mittelständische Unternehmen in Berlin — Website, Software, Server, Cloud, Support und KI.</p>
    </div>
    <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:24px;">
      <div>
        <h5 style="color:#fff; font-size:14px; margin:0 0 14px; letter-spacing:.5px;">Leistungen</h5>
        <a href="Website-Web.dc.html" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Website &amp; Web</a>
        <a href="ERP-CRM.dc.html" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Software (ERP/CRM)</a>
        <a href="IT-Infrastruktur.dc.html" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Server &amp; Infrastruktur</a>
        <a href="Netzwerk-Installation.dc.html" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Netzwerk-Installation</a>
      </div>
      <div>
        <h5 style="color:#fff; font-size:14px; margin:0 0 14px; letter-spacing:.5px;">Mehr</h5>
        <a href="IT-Support.dc.html" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">IT Support</a>
        <a href="Cloud-KI.dc.html" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Cloud &amp; KI</a>
        <a href="index.html#warum" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Warum wir</a>
      </div>
      <div>
        <h5 style="color:#fff; font-size:14px; margin:0 0 14px; letter-spacing:.5px;">Unternehmen</h5>
        <a href="index.html#warum" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Warum wir</a>
        <a href="index.html#kontakt" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Kontakt</a>
        <a href="#" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Impressum</a>
        <a href="#" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Datenschutz</a>
      </div>
      <div>
        <h5 style="color:#fff; font-size:14px; margin:0 0 14px; letter-spacing:.5px;">Kontakt</h5>
        <a href="tel:+4930000000" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">030 000 000</a>
        <a href="mailto:info@firma.de" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">info@firma.de</a>
        <a href="#" style="display:block; font-size:14px; color:#8C9BCE; margin-bottom:10px; text-decoration:none;">Berlin, Deutschland</a>
      </div>
    </div>
  </div>
  <div style="max-width:1180px; margin:26px auto 0; display:flex; justify-content:space-between; align-items:center; font-size:13px; color:#7E8CBB; flex-wrap:wrap; gap:10px;">
    <span>© {{ year }} [Firmenname]. Alle Rechte vorbehalten.</span>
    <span><a href="#" style="color:#8C9BCE; margin-left:16px; text-decoration:none;">LinkedIn</a><a href="#" style="color:#8C9BCE; margin-left:16px; text-decoration:none;">X</a></span>
  </div>
</footer>

</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;$preview&quot;:{&quot;width&quot;:1180,&quot;height&quot;:320}}">
class Component extends DCLogic {
  renderVals() {
    return { year: new Date().getFullYear() };
  }
}
</script>
</body>
</html>
