"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "lazer",
    icon: "✦",
    title: "Lazer Epilasyon",
    subtitle: "Kalıcı Tüy Arındırma",
    desc: "En son teknoloji lazer sistemleriyle, her cilt tipine uygun hassas ve kalıcı epilasyon. Kliniğimizde sertifikalı uzmanlar tarafından uygulanır.",
    tags: ["Tüm Bölgeler", "Sertifikalı Uzman", "Ağrısız"],
    color: "#C9A96E",
  },
  {
    id: "hydrafacial",
    icon: "◈",
    title: "Hydrafacial",
    subtitle: "Derin Nem & Arındırma",
    desc: "HydraFacial ile 4 adımlı temizleme, peeling, ekstraksiyon ve nem serumu uygulaması. Anında parlaklık ve uzun süreli nem dengesi.",
    tags: ["30 Dakika", "Anında Sonuç", "Tüm Ciltler"],
    color: "#A8C5DA",
  },
  {
    id: "yenileme",
    icon: "◇",
    title: "Cilt Yenileme",
    subtitle: "Hücresel Yenilenme",
    desc: "Kimyasal peeling ve mikrodermabrazyon kombinasyonu ile ölü hücreleri arındırın, doku kalitesini iyileştirin ve cilt tonunu eşitleyin.",
    tags: ["Leke Giderme", "Doku İyileştirme", "Parlaklık"],
    color: "#D4B8E0",
  },
  {
    id: "genclestime",
    icon: "❋",
    title: "Cilt Gençleştirme",
    subtitle: "Anti-Aging Tedavi",
    desc: "RF ve ultrasound teknolojileri ile kolajen üretimini uyarın. Kırışıklıkları azaltın, sıkılığı artırın ve genç görünüme kavuşun.",
    tags: ["Kolajen Uyarım", "RF Teknoloji", "Sıkılaştırma"],
    color: "#E8B4A0",
  },
  {
    id: "incelme",
    icon: "◉",
    title: "Bölgesel İncelme & Sıkılaşma",
    subtitle: "Vücut Şekillendirme",
    desc: "Kavitasyon, RF ve lenf drenajı kombinasyonu ile yağ hücrelerini parçalayın, cilt sarkmasını önleyin ve vücudunuzu şekillendirin.",
    tags: ["Kavitasyon", "RF Terapi", "Vücut Şekillendirme"],
    color: "#B8D4C8",
  },
  {
    id: "catlak",
    icon: "⬡",
    title: "Deri Çatlak Tedavisi",
    subtitle: "Çatlak & İz Onarımı",
    desc: "PRP ve mikroneedling kombinasyonu ile çatlak izlerini minimize edin. Kollajen yenilenmesi ile deri bütünlüğünü ve elastikiyeti kazandırın.",
    tags: ["PRP Tedavi", "Microneedling", "Kolajen"],
    color: "#F0D89A",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s`,
        background: "rgba(255,255,255,0.6)",
        border: "1px solid rgba(201,169,110,0.12)",
        borderRadius: "4px",
        padding: "2.5rem 2rem",
        cursor: "default",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Hover fill */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, ${service.color}0D 0%, transparent 70%)`,
        }}
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(to right, ${service.color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ color: service.color, fontFamily: "serif" }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <p
        className="text-xs tracking-widest uppercase mb-1"
        style={{ color: "var(--gray)", letterSpacing: "0.15em" }}
      >
        {service.subtitle}
      </p>
      <h3
        className="text-xl mb-3"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontWeight: 600,
          color: "var(--charcoal)",
          fontSize: "1.35rem",
        }}
      >
        {service.title}
      </h3>

      {/* Divider */}
      <div
        className="mb-4"
        style={{
          height: "1px",
          width: "40px",
          background: `linear-gradient(to right, ${service.color}, transparent)`,
        }}
      />

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: "var(--charcoal-light)", fontSize: "0.85rem", lineHeight: 1.8 }}
      >
        {service.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1"
            style={{
              background: `${service.color}14`,
              color: service.color,
              borderRadius: "2px",
              fontSize: "0.68rem",
              letterSpacing: "0.08em",
              fontWeight: 500,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div
        className="absolute bottom-5 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
        style={{ color: service.color, fontSize: "1.2rem" }}
      >
        →
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
          >
            Uzman Tedaviler
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 400,
              color: "var(--charcoal)",
              lineHeight: 1.1,
              marginBottom: "1.2rem",
            }}
          >
            Premium Hizmetlerimiz
          </h2>
          <div className="divider-gold mx-auto mb-6" style={{ width: 80 }} />
          <p
            className="max-w-lg mx-auto"
            style={{
              color: "var(--gray)",
              fontSize: "0.9rem",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            Bilim ve estetiği birleştiren, kişiye özel protokollerle tasarlanmış
            premium güzellik ve cilt bakım hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#appointment"
            className="inline-flex items-center gap-3 px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-85"
            style={{
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
              color: "white",
              textDecoration: "none",
              borderRadius: "2px",
              boxShadow: "0 8px 30px rgba(201,169,110,0.35)",
              letterSpacing: "0.18em",
              fontWeight: 500,
            }}
          >
            Randevu Al
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
