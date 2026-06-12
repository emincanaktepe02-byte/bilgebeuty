"use client";
import Image from "next/image";
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
    <section id="about" ref={ref} className="section-wrap" style={{ position: "relative", background: "var(--white)" }}>

      {/* Background image — visible, light cream wash */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <Image
          src="/images/about-bg.jpeg"
          alt=""
          fill
          sizes="100vw"
          quality={90}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Light cream overlay so text stays readable but image is clearly visible */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(250,248,245,0.62)" }} />
      </div>

      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
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

        {/* Text content — centered, generous max-width */}
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s",
          }}
        >
          <p style={{ color: "var(--charcoal-light)", fontSize: "0.95rem", lineHeight: 1.9, fontWeight: 300, marginBottom: "2rem", textAlign: "center" }}>
            Bilge Beauty, 8 yılı aşkın deneyimiyle İzmir&apos;in en güvenilen güzellik ve cilt bakım merkezlerinden biri olarak hizmet vermektedir. Her müşterimize kişiselleştirilmiş tedavi protokolleri hazırlıyoruz.
          </p>

          {/* Features */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2.2rem" }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: "rgba(250,248,245,0.55)", backdropFilter: "blur(6px)", border: "1px solid rgba(201,169,110,0.18)", borderRadius: "4px", padding: "1rem 1.2rem" }}>
                <span style={{ color: "var(--gold)", fontSize: "1rem", marginTop: "0.15rem", minWidth: "1.2rem", fontWeight: 700 }}>{f.icon}</span>
                <p style={{ color: "var(--charcoal)", fontSize: "0.86rem", lineHeight: 1.8, margin: 0 }}>{f.text}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div style={{ background: "rgba(250,248,245,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(201,169,110,0.22)", borderLeft: "3px solid var(--gold)", borderRadius: "3px", padding: "1.4rem 1.8rem", marginBottom: "2.2rem" }}>
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", fontStyle: "italic", color: "var(--charcoal)", lineHeight: 1.65, margin: 0, textAlign: "center" }}>
              &ldquo;Müşteri sağlığı ve memnuniyeti bizim temel misyonumuzdur.&rdquo;
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "2.2rem" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: "rgba(250,248,245,0.55)", backdropFilter: "blur(6px)", border: "1px solid rgba(201,169,110,0.14)", borderRadius: "4px", padding: "1.4rem 1rem" }}>
                <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.4rem", fontWeight: 600, color: "var(--gold)", lineHeight: 1, margin: "0 0 0.4rem" }}>{s.value}</p>
                <p style={{ fontSize: "0.66rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray)", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Certs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center" }}>
            {["FDA Onaylı", "ISO Sertifikalı", "Tıbbi Estetik Lisanslı"].map((c) => (
              <span key={c} style={{ padding: "0.4rem 1rem", fontSize: "0.68rem", letterSpacing: "0.1em", border: "1px solid rgba(201,169,110,0.3)", color: "var(--gold-dark)", borderRadius: "2px", fontWeight: 600, background: "rgba(250,248,245,0.55)", backdropFilter: "blur(4px)" }}>✓ {c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
