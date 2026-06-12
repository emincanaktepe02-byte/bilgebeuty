"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "100+", label: "Mutlu Müşteri" },
  { value: "8+", label: "Yıllık Deneyim" },
  { value: "98%", label: "Memnuniyet" },
];

const features = [
  { icon: "⬡", text: "FDA onaylı, medikal sınıf profesyonel cihazlar" },
  { icon: "◇", text: "Kanıtlanmış klinik protokollerle güvenli uygulamalar" },
  { icon: "✦", text: "Her cilt tipine özel kişiselleştirilmiş tedavi planları" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-wrap" style={{ background: "var(--white)" }}>
      <div className="section-inner">

        {/* Centered header */}
        <div
          className="section-header"
          style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(28px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          <p className="section-eyebrow">
            <span style={{ height: "1px", width: "28px", background: "var(--gold-light)", display: "inline-block" }} />
            Bilge Beauty Hakkında
            <span style={{ height: "1px", width: "28px", background: "var(--gold-light)", display: "inline-block" }} />
          </p>
          <h2 className="section-title">
            Güzelliğinizin{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-dark)" }}>Bilimsel Dokunuşu</em>
          </h2>
          <div className="divider-gold" style={{ width: "72px", margin: "0 auto 1.4rem" }} />
          <p className="section-subtitle">
            8 yılı aşkın deneyimle İzmir&apos;in en güvenilen güzellik ve cilt bakım merkeziyiz.
          </p>
        </div>

        {/* Two-column: visual card + content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "center",
          }}
        >
          {/* Left: decorative panel */}
          <div
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s",
              position: "relative",
            }}
          >
            <div
              style={{
                borderRadius: "4px",
                height: "clamp(380px, 45vw, 540px)",
                background: "linear-gradient(140deg, #f5ede0 0%, #e8d8c0 55%, #ddc8a0 100%)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 40%, rgba(201,169,110,0.35) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 72% 65%, rgba(232,180,160,0.22) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(7rem, 18vw, 13rem)", fontWeight: 300, color: "rgba(160,120,64,0.22)", lineHeight: 1, letterSpacing: "-0.04em", userSelect: "none" }}>BB</span>
              </div>
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "180px", height: "180px", background: "linear-gradient(135deg, transparent 0%, rgba(201,169,110,0.1) 100%)", borderTop: "1px solid rgba(201,169,110,0.18)", borderLeft: "1px solid rgba(201,169,110,0.18)" }} />
            </div>

            {/* Floating badge */}
            <div
              className="glass-card"
              style={{ position: "absolute", bottom: "-1.5rem", right: "-1.5rem", padding: "1.2rem 1.6rem", borderRadius: "4px", boxShadow: "0 12px 40px rgba(26,26,26,0.1)", minWidth: "160px" }}
            >
              <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.6rem", fontWeight: 600, color: "var(--gold)", lineHeight: 1, marginBottom: "0.3rem" }}>100+</p>
              <p style={{ fontSize: "0.66rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gray)", fontWeight: 600 }}>Mutlu Müşteri</p>
            </div>
          </div>

          {/* Right: text content */}
          <div
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.28s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.28s",
            }}
          >
            <p style={{ color: "var(--charcoal-light)", fontSize: "0.92rem", lineHeight: 1.9, fontWeight: 300, marginBottom: "1.8rem" }}>
              Bilge Beauty, 8 yılı aşkın deneyimiyle İzmir&apos;in en güvenilen güzellik ve cilt bakım merkezlerinden biri olarak hizmet vermektedir. Her müşterimize kişiselleştirilmiş tedavi protokolleri hazırlıyoruz.
            </p>

            {/* Features */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <span style={{ color: "var(--gold)", fontSize: "1rem", marginTop: "0.15rem", minWidth: "1.2rem", fontWeight: 700 }}>{f.icon}</span>
                  <p style={{ color: "var(--charcoal)", fontSize: "0.88rem", lineHeight: 1.8, margin: 0 }}>{f.text}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(201,169,110,0.03) 100%)", border: "1px solid rgba(201,169,110,0.22)", borderLeft: "3px solid var(--gold)", borderRadius: "3px", padding: "1.3rem 1.5rem", marginBottom: "2rem" }}>
              <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontStyle: "italic", color: "var(--charcoal)", lineHeight: 1.65, margin: 0 }}>
                &ldquo;Müşteri sağlığı ve memnuniyeti bizim temel misyonumuzdur.&rdquo;
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "2rem" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.2rem", fontWeight: 600, color: "var(--gold)", lineHeight: 1, margin: "0 0 0.3rem" }}>{s.value}</p>
                  <p style={{ fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray)", margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Certs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {["FDA Onaylı", "ISO Sertifikalı", "Tıbbi Estetik Lisanslı"].map((c) => (
                <span key={c} style={{ padding: "0.4rem 1rem", fontSize: "0.68rem", letterSpacing: "0.1em", border: "1px solid rgba(201,169,110,0.3)", color: "var(--gold-dark)", borderRadius: "2px", fontWeight: 600 }}>✓ {c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
