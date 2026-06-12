export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--charcoal)",
        color: "rgba(255,255,255,0.6)",
        padding: "4rem 1.5rem 2.5rem",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div
          className="grid gap-12 pb-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                }}
              >
                <span className="text-white text-xs font-semibold">B</span>
              </div>
              <span
                className="text-white text-lg tracking-widest"
                style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.2em", fontWeight: 300 }}
              >
                BILGE BEAUTY
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ fontSize: "0.83rem", lineHeight: 1.8 }}>
              İzmir'in en prestijli güzellik ve cilt bakım merkezi.
              Bilim, zarafet ve kişisel bakımın buluştuğu adres.
            </p>
          </div>

          {/* Services */}
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-5 text-white"
              style={{ letterSpacing: "0.2em" }}
            >
              Hizmetler
            </p>
            <ul className="space-y-2.5">
              {[
                "Lazer Epilasyon",
                "Hydrafacial",
                "Cilt Yenileme",
                "Cilt Gençleştirme",
                "Bölgesel İncelme",
                "Deri Çatlak Tedavisi",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.83rem" }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-5 text-white"
              style={{ letterSpacing: "0.2em" }}
            >
              Bağlantılar
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Ana Sayfa", href: "#home" },
                { label: "Hakkımızda", href: "#about" },
                { label: "Yorumlar", href: "#reviews" },
                { label: "Konum", href: "#location" },
                { label: "Randevu Al", href: "#appointment" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.83rem" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase mb-5 text-white"
              style={{ letterSpacing: "0.2em" }}
            >
              İletişim
            </p>
            <div className="space-y-3">
              <a
                href="tel:05344178370"
                className="flex items-center gap-3 transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.83rem" }}
              >
                <span style={{ color: "var(--gold)" }}>☎</span>
                0534 417 83 70
              </a>
              <a
                href="https://www.instagram.com/bilge_beautyy/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.83rem" }}
              >
                <span style={{ color: "var(--gold)" }}>◈</span>
                @bilge_beautyy
              </a>
              <a
                href="https://www.google.com/maps/place/Bilge+Beauty/@38.227668,27.9788499,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "0.83rem" }}
              >
                <span style={{ color: "var(--gold)" }}>◉</span>
                Google Maps'te Görüntüle
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>
            © 2024 Bilge Beauty. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1" style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
            <span>Made with</span>
            <span style={{ color: "var(--gold)", fontSize: "0.8rem" }}>✦</span>
            <span>in İzmir</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
