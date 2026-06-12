"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "5000+", label: "Mutlu Müşteri" },
  { value: "8+", label: "Yıllık Deneyim" },
  { value: "15+", label: "Uzman Ekip" },
  { value: "98%", label: "Memnuniyet Oranı" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid gap-16 items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          {/* Left: Visual panel */}
          <div
            className="relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* Main card */}
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "4px",
                height: "520px",
                background: "linear-gradient(135deg, #f5ede0 0%, #e8d8c0 50%, #ddc8a0 100%)",
              }}
            >
              {/* Luxury abstract layers */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 30% 40%, rgba(201,169,110,0.35) 0%, transparent 60%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 70% 65%, rgba(232,180,160,0.25) 0%, transparent 55%)",
                }}
              />
              {/* Center monogram */}
              <div
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="text-center"
                  style={{
                    color: "rgba(160,120,64,0.25)",
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "13rem",
                    fontWeight: 300,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    userSelect: "none",
                  }}
                >
                  BB
                </div>
              </div>
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "200px",
                  height: "200px",
                  background: "linear-gradient(135deg, transparent 0%, rgba(201,169,110,0.12) 100%)",
                  borderTop: "1px solid rgba(201,169,110,0.2)",
                  borderLeft: "1px solid rgba(201,169,110,0.2)",
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-6 glass-card p-5 shadow-xl"
              style={{ borderRadius: "4px", minWidth: "180px" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "2.8rem",
                  fontWeight: 600,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                5000+
              </p>
              <p
                className="text-xs tracking-wider uppercase mt-1"
                style={{ color: "var(--gray)", letterSpacing: "0.12em" }}
              >
                Mutlu Müşteri
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s",
            }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
            >
              Bilge Beauty Hakkında
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                fontWeight: 400,
                color: "var(--charcoal)",
                lineHeight: 1.12,
                marginBottom: "1.5rem",
              }}
            >
              Güzelliğinizin
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold-dark)" }}>
                Bilimsel Dokunuşu
              </em>
            </h2>

            <div className="divider-gold mb-6" style={{ width: 60 }} />

            <p
              className="leading-relaxed mb-6"
              style={{
                color: "var(--charcoal-light)",
                fontSize: "0.92rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Bilge Beauty, 8 yılı aşkın deneyimiyle İzmir'in en güvenilen güzellik ve
              cilt bakım merkezlerinden biri olarak hizmet vermektedir. Sertifikalı
              uzman ekibimizle, her müşterimize kişiselleştirilmiş tedavi protokolleri
              hazırlıyoruz.
            </p>
            <p
              className="leading-relaxed mb-10"
              style={{
                color: "var(--charcoal-light)",
                fontSize: "0.92rem",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Tıbbi estetik standartlarında, FDA onaylı cihazlar ve kanıtlanmış
              protokollerle sunduğumuz hizmetler; güvenlik, etkinlik ve konfor
              üçlüsünü bir araya getiriyor.
            </p>

            {/* Stats grid */}
            <div
              className="grid grid-cols-2 gap-6 mb-10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "2.2rem",
                      fontWeight: 600,
                      color: "var(--gold)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs tracking-wider mt-1"
                    style={{ color: "var(--gray)", letterSpacing: "0.1em" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div
              className="flex flex-wrap gap-3"
            >
              {["FDA Onaylı Cihazlar", "ISO Sertifikalı", "Tıbbi Estetik Lisanslı"].map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 text-xs tracking-wider"
                  style={{
                    border: "1px solid rgba(201,169,110,0.3)",
                    color: "var(--gold-dark)",
                    borderRadius: "2px",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  ✓ {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
