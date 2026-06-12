"use client";

export default function Location() {
  return (
    <section
      id="location"
      className="py-28 px-6"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
          >
            Bizi Bulun
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Konum & İletişim
          </h2>
          <div className="divider-gold mx-auto" style={{ width: 70 }} />
        </div>

        <div
          className="grid gap-10 items-start"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {/* Contact Info */}
          <div>
            <div
              className="glass-card p-8 mb-6"
              style={{ borderRadius: "4px" }}
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.6rem",
                  fontWeight: 500,
                  color: "var(--charcoal)",
                }}
              >
                İletişim Bilgileri
              </h3>

              {[
                {
                  icon: "☎",
                  label: "Telefon",
                  value: "0534 417 83 70",
                  href: "tel:05344178370",
                },
                {
                  icon: "✦",
                  label: "Instagram",
                  value: "@bilge_beautyy",
                  href: "https://www.instagram.com/bilge_beautyy/",
                },
                {
                  icon: "◈",
                  label: "Konum",
                  value: "İzmir, Türkiye",
                  href: "https://www.google.com/maps/place/Bilge+Beauty/@38.227668,27.9788499,17z",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 mb-6 last:mb-0"
                >
                  <span
                    className="text-lg mt-0.5"
                    style={{ color: "var(--gold)", minWidth: "1.5rem", textAlign: "center" }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p
                      className="text-xs tracking-wider uppercase mb-1"
                      style={{ color: "var(--gray)", letterSpacing: "0.12em", fontSize: "0.68rem" }}
                    >
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="transition-opacity hover:opacity-70"
                      style={{
                        color: "var(--charcoal)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: 400,
                      }}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Opening hours */}
            <div
              className="glass-card p-8"
              style={{ borderRadius: "4px" }}
            >
              <h3
                className="mb-5"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--charcoal)",
                }}
              >
                Çalışma Saatleri
              </h3>
              {[
                { days: "Pazartesi — Cuma", hours: "09:00 — 19:00" },
                { days: "Cumartesi", hours: "09:00 — 17:00" },
                { days: "Pazar", hours: "Kapalı" },
              ].map((row) => (
                <div
                  key={row.days}
                  className="flex justify-between items-center py-2.5"
                  style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}
                >
                  <span
                    className="text-sm"
                    style={{ color: "var(--charcoal-light)", fontWeight: 300 }}
                  >
                    {row.days}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: row.hours === "Kapalı" ? "var(--gray)" : "var(--gold-dark)",
                    }}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}

              <a
                href="#appointment"
                className="mt-6 block text-center py-3.5 text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-85"
                style={{
                  background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "2px",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                }}
              >
                Randevu Al
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div
            className="overflow-hidden"
            style={{
              borderRadius: "4px",
              border: "1px solid rgba(201,169,110,0.15)",
              boxShadow: "0 10px 40px rgba(26,26,26,0.07)",
              height: "520px",
            }}
          >
            <iframe
              title="Bilge Beauty Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.0!2d27.9814248!3d38.2276638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b8e3576179b9d7%3A0xc287c28ec33e5f06!2sBilge%20Beauty!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
