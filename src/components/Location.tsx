"use client";

export default function Location() {
  return (
    <section id="location" className="section-wrap" style={{ background: "var(--cream)" }}>
      <div className="section-inner">

        {/* Centered header */}
        <div className="section-header">
          <p className="section-eyebrow">
            <span style={{ height: "1px", width: "28px", background: "var(--gold-light)", display: "inline-block" }} />
            Bizi Bulun
            <span style={{ height: "1px", width: "28px", background: "var(--gold-light)", display: "inline-block" }} />
          </p>
          <h2 className="section-title">Konum & İletişim</h2>
          <div className="divider-gold" style={{ width: "72px", margin: "0 auto" }} />
        </div>

        {/* Two-column: info + map */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(1.5rem, 4vw, 3rem)", alignItems: "start" }}>

          {/* Left: info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>

            {/* Contact card */}
            <div className="glass-card" style={{ borderRadius: "4px", padding: "2rem 2rem" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.55rem", fontWeight: 600, color: "var(--charcoal)", marginTop: 0, marginBottom: "1.6rem" }}>İletişim Bilgileri</h3>

              {[
                { icon: "☎", label: "Telefon", value: "0534 417 83 70", href: "tel:05344178370" },
                { icon: "◈", label: "Konum", value: "İzmir, Türkiye", href: "https://www.google.com/maps/place/Bilge+Beauty/@38.227668,27.9788499,17z" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.4rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "1.1rem", minWidth: "1.4rem", textAlign: "center", marginTop: "0.1rem" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontSize: "0.64rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gray)", fontWeight: 600, margin: "0 0 0.25rem" }}>{item.label}</p>
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ color: "var(--charcoal)", textDecoration: "none", fontSize: "0.95rem", fontWeight: 500 }}>
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              {/* Instagram button */}
              <a
                href="https://www.instagram.com/bilge_beautyy/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.7rem",
                  padding: "0.9rem 1.4rem",
                  background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "50px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  boxShadow: "0 6px 24px rgba(220,39,67,0.3)",
                  marginTop: "0.5rem",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="3" />
                </svg>
                @bilge_beautyy — Takip Et
              </a>
            </div>

            {/* Hours card */}
            <div className="glass-card" style={{ borderRadius: "4px", padding: "2rem 2rem" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.55rem", fontWeight: 600, color: "var(--charcoal)", marginTop: 0, marginBottom: "1.2rem" }}>Çalışma Saatleri</h3>
              {[
                { days: "Pazartesi — Cuma", hours: "09:00 — 19:00" },
                { days: "Cumartesi", hours: "09:00 — 17:00" },
                { days: "Pazar", hours: "Kapalı" },
              ].map((row) => (
                <div key={row.days} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid rgba(201,169,110,0.1)" }}>
                  <span style={{ fontSize: "0.88rem", color: "var(--charcoal-light)", fontWeight: 400 }}>{row.days}</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 600, color: row.hours === "Kapalı" ? "var(--gray)" : "var(--gold-dark)" }}>{row.hours}</span>
                </div>
              ))}
              <a
                href="#appointment"
                style={{ display: "block", textAlign: "center", padding: "0.9rem", marginTop: "1.2rem", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)", color: "white", textDecoration: "none", borderRadius: "2px" }}
              >
                Randevu Al
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div style={{ overflow: "hidden", borderRadius: "4px", border: "1px solid rgba(201,169,110,0.15)", boxShadow: "0 10px 40px rgba(26,26,26,0.07)", height: "clamp(360px, 50vw, 560px)" }}>
            <iframe
              title="Bilge Beauty Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.0!2d27.9814248!3d38.2276638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b8e3576179b9d7%3A0xc287c28ec33e5f06!2sBilge%20Beauty!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
