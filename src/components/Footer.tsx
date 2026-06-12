"use client";
export default function Footer() {
  const links = [
    { label: "Ana Sayfa", href: "#home" },
    { label: "Hizmetler", href: "#services" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Yorumlar", href: "#reviews" },
    { label: "İletişim", href: "#location" },
    { label: "Randevu Al", href: "#appointment" },
  ];

  const services = ["Lazer Epilasyon", "Hydrafacial", "Cilt Yenileme", "Cilt Gençleştirme", "Bölgesel İncelme", "Deri Çatlak Tedavisi"];

  const c = "rgba(255,255,255,0.55)";
  const cHover = "rgba(255,255,255,0.9)";
  const linkStyle: React.CSSProperties = { color: c, textDecoration: "none", fontSize: "0.83rem", lineHeight: 1.9, display: "block", transition: "color 0.2s" };

  return (
    <footer style={{ background: "var(--charcoal)", padding: "4.5rem 0 2.5rem", width: "100%" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem)" }}>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: "1.2rem" }}>
              <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", letterSpacing: "0.22em", fontWeight: 300, color: "white" }}>BILGE BEAUTY</span>
            </div>
            <p style={{ fontSize: "0.82rem", color: c, lineHeight: 1.85, margin: 0 }}>
              İzmir&apos;in en prestijli güzellik ve cilt bakım merkezi. Bilim, zarafet ve kişisel bakımın buluştuğu adres.
            </p>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: "0.66rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", fontWeight: 600, marginBottom: "1.2rem" }}>Hizmetler</p>
            {services.map((s) => (
              <a key={s} href="#services" style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = cHover)} onMouseLeave={(e) => (e.currentTarget.style.color = c)}>{s}</a>
            ))}
          </div>

          {/* Links */}
          <div>
            <p style={{ fontSize: "0.66rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", fontWeight: 600, marginBottom: "1.2rem" }}>Bağlantılar</p>
            {links.map((l) => (
              <a key={l.href} href={l.href} style={linkStyle} onMouseEnter={(e) => (e.currentTarget.style.color = cHover)} onMouseLeave={(e) => (e.currentTarget.style.color = c)}>{l.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "0.66rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", fontWeight: 600, marginBottom: "1.2rem" }}>İletişim</p>
            <a href="tel:05344178370" style={{ ...linkStyle, display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }} onMouseEnter={(e) => (e.currentTarget.style.color = cHover)} onMouseLeave={(e) => (e.currentTarget.style.color = c)}>
              <span style={{ color: "var(--gold)", width: "1rem", textAlign: "center" }}>☎</span> 0534 417 83 70
            </a>
            <a href="https://www.instagram.com/bilge_beautyy/" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, display: "flex", alignItems: "center", gap: "0.6rem" }} onMouseEnter={(e) => (e.currentTarget.style.color = cHover)} onMouseLeave={(e) => (e.currentTarget.style.color = c)}>
              <span style={{ color: "var(--gold)", width: "1rem", textAlign: "center" }}>◈</span> @bilge_beautyy
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", paddingTop: "1.8rem" }}>
          <p style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.3)", margin: 0 }}>© 2024 Bilge Beauty. Tüm hakları saklıdır.</p>
          <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", margin: 0, display: "flex", alignItems: "center", gap: "0.3rem" }}>
            Made with <span style={{ color: "var(--gold)" }}>✦</span> in İzmir
          </p>
        </div>
      </div>
    </footer>
  );
}
