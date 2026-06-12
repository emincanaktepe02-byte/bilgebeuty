"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  { id: "lazer", icon: "✦", title: "Lazer Epilasyon", subtitle: "Kalıcı Tüy Arındırma", desc: "En son teknoloji lazer sistemleriyle her cilt tipine uygun, hassas ve kalıcı epilasyon. Sertifikalı uzmanlar tarafından uygulanır.", tags: ["Tüm Bölgeler", "Sertifikalı Uzman", "Ağrısız"], color: "#C9A96E" },
  { id: "hydrafacial", icon: "◈", title: "Hydrafacial", subtitle: "Derin Nem & Arındırma", desc: "4 adımlı temizleme, peeling, ekstraksiyon ve nem serumu uygulaması. Anında parlaklık ve uzun süreli nem dengesi.", tags: ["30 Dakika", "Anında Sonuç", "Tüm Ciltler"], color: "#A8C5DA" },
  { id: "yenileme", icon: "◇", title: "Cilt Yenileme", subtitle: "Hücresel Yenilenme", desc: "Kimyasal peeling ve mikrodermabrazyon kombinasyonu ile ölü hücreleri arındırın, doku kalitesini iyileştirin.", tags: ["Leke Giderme", "Doku İyileştirme", "Parlaklık"], color: "#D4B8E0" },
  { id: "genclestime", icon: "❋", title: "Cilt Gençleştirme", subtitle: "Anti-Aging Tedavi", desc: "RF ve ultrasound teknolojileriyle kolajen üretimini uyarın, kırışıklıkları azaltın ve sıkı genç görünüme kavuşun.", tags: ["Kolajen Uyarım", "RF Teknoloji", "Sıkılaştırma"], color: "#E8B4A0" },
  { id: "incelme", icon: "◉", title: "Bölgesel İncelme & Sıkılaşma", subtitle: "Vücut Şekillendirme", desc: "Kavitasyon, RF ve lenf drenajı kombinasyonu ile yağ hücrelerini parçalayın ve vücudunuzu şekillendirin.", tags: ["Kavitasyon", "RF Terapi", "Şekillendirme"], color: "#B8D4C8" },
  { id: "catlak", icon: "⬡", title: "Deri Çatlak Tedavisi", subtitle: "Çatlak & İz Onarımı", desc: "PRP ve microneedling kombinasyonu ile çatlak izlerini minimize edin, deri bütünlüğünü ve elastikiyeti kazandırın.", tags: ["PRP Tedavi", "Microneedling", "Kolajen"], color: "#F0D89A" },
];

function Card({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s`,
        background: "rgba(255,255,255,0.65)",
        border: "1px solid rgba(201,169,110,0.12)",
        borderRadius: "4px",
        padding: "2.8rem 2.2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "default",
        backdropFilter: "blur(10px)",
        position: "relative",
        overflow: "hidden",
      }}
      className="group"
    >
      {/* Top accent on hover */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", height: "2px", width: "0%", background: `linear-gradient(to right, transparent, ${service.color}, transparent)`, transition: "width 0.5s ease" }} className="group-hover:w-full" />

      {/* Icon */}
      <div style={{ fontSize: "2rem", color: service.color, marginBottom: "1.2rem", transition: "transform 0.3s" }} className="group-hover:scale-110">
        {service.icon}
      </div>

      {/* Subtitle */}
      <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gray)", marginBottom: "0.5rem", fontWeight: 600 }}>
        {service.subtitle}
      </p>

      {/* Title */}
      <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.45rem", fontWeight: 600, color: "var(--charcoal)", marginBottom: "1rem", marginTop: 0, lineHeight: 1.15 }}>
        {service.title}
      </h3>

      {/* Accent bar */}
      <div style={{ height: "1px", width: "40px", background: `linear-gradient(to right, transparent, ${service.color}, transparent)`, marginBottom: "1.1rem" }} />

      {/* Description */}
      <p style={{ color: "var(--charcoal-light)", fontSize: "0.85rem", lineHeight: 1.85, fontWeight: 300, marginBottom: "1.4rem", flexGrow: 1 }}>
        {service.desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
        {service.tags.map((t) => (
          <span key={t} style={{ background: `${service.color}15`, color: service.color, fontSize: "0.65rem", letterSpacing: "0.08em", padding: "0.3rem 0.8rem", borderRadius: "2px", fontWeight: 600 }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-wrap" style={{ background: "var(--cream)" }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <p className="section-eyebrow">
            <span style={{ height: "1px", width: "28px", background: "var(--gold-light)", display: "inline-block" }} />
            Uzman Tedaviler
            <span style={{ height: "1px", width: "28px", background: "var(--gold-light)", display: "inline-block" }} />
          </p>
          <h2 className="section-title">Premium Hizmetlerimiz</h2>
          <div className="divider-gold" style={{ width: "72px", margin: "0 auto 1.4rem" }} />
          <p className="section-subtitle">
            Bilim ve estetiği birleştiren, kişiye özel protokollerle tasarlanmış premium güzellik ve cilt bakım hizmetleri.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.25rem" }}>
          {services.map((s, i) => <Card key={s.id} service={s} index={i} />)}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <a href="#appointment" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "1rem 2.8rem", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)", color: "white", textDecoration: "none", borderRadius: "2px", boxShadow: "0 8px 28px rgba(201,169,110,0.35)" }}>
            Randevu Al <span style={{ fontSize: "0.9rem" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
