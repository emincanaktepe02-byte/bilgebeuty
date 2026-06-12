"use client";
import { useEffect, useRef, useState } from "react";

const reviews = [
  { name: "Ayşe K.", rating: 5, date: "2 hafta önce", service: "Lazer Epilasyon", text: "Bilge Beauty'de lazer epilasyon tedavisi aldım ve sonuçtan çok memnunum. Personel son derece profesyonel, cihazlar son teknoloji ve uygulama tamamen ağrısız oldu. Kesinlikle tavsiye ederim!", avatar: "A" },
  { name: "Selin M.", rating: 5, date: "1 ay önce", service: "Hydrafacial", text: "Hydrafacial tedavisinden sonra cildim pırıl pırıl oldu. Uzman hanım cilt analizini çok detaylı yaptı ve kişiselleştirilmiş bir bakım protokolü oluşturdu. Düzenli gelmeye devam edeceğim.", avatar: "S" },
  { name: "Fatma Ö.", rating: 5, date: "3 hafta önce", service: "Cilt Gençleştirme", text: "RF ile cilt gençleştirme tedavisine başladım, ilk seanstan itibaren fark ettim. Cildim çok daha sıkı ve genç görünüyor. Ekip son derece bilgili ve mekan çok temiz.", avatar: "F" },
  { name: "Zeynep T.", rating: 5, date: "2 ay önce", service: "Bölgesel İncelme", text: "Kavitasyon ve RF kombinasyonu ile 6 seans sonunda gerçekten görünür fark oluştu. Ekip çok profesyonel, randevularımda hiçbir sorun yaşamadım.", avatar: "Z" },
  { name: "Merve A.", rating: 5, date: "5 hafta önce", service: "Cilt Yenileme", text: "Cilt yenileme tedavisi için geldim, cildim çok daha aydınlık ve pürüzsüz oldu. Uzmanlar her adımı açıkladı ve tedavi süresince rahat hissettim.", avatar: "M" },
  { name: "Elif Y.", rating: 5, date: "1 ay önce", service: "Deri Çatlak Tedavisi", text: "PRP tedavisinden sonra çatlak izlerim belirgin şekilde azaldı. Ekip çok deneyimli ve güven verici. Temiz ortam, kaliteli ürünler. Sonuçtan çok memnunum!", avatar: "E" },
];

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < n ? "var(--gold)" : "none"} stroke={i < n ? "var(--gold)" : "var(--gray-light)"} strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="reviews" ref={ref} className="section-wrap" style={{ background: "var(--white)" }}>
      <div className="section-inner">

        {/* Centered header */}
        <div className="section-header">
          <p className="section-eyebrow">
            <span style={{ height: "1px", width: "28px", background: "var(--gold-light)", display: "inline-block" }} />
            Müşteri Yorumları
            <span style={{ height: "1px", width: "28px", background: "var(--gold-light)", display: "inline-block" }} />
          </p>
          <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
          <div className="divider-gold" style={{ width: "72px", margin: "0 auto 1.4rem" }} />

          {/* Overall rating badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "0.7rem 1.6rem", background: "var(--cream)", border: "1px solid rgba(201,169,110,0.18)", borderRadius: "50px" }}>
            <Stars n={5} />
            <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 600, color: "var(--gold)", lineHeight: 1 }}>5.0</span>
            <span style={{ fontSize: "0.78rem", color: "var(--gray)", fontWeight: 300 }}>Google&apos;da 120+ değerlendirme</span>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.2rem" }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.65s ease ${i * 0.07}s, transform 0.65s ease ${i * 0.07}s`,
                background: "var(--cream)",
                border: "1px solid rgba(201,169,110,0.1)",
                borderRadius: "4px",
                padding: "1.8rem 1.8rem 1.6rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Quote */}
              <div style={{ fontFamily: "Georgia, serif", fontSize: "2.8rem", color: "var(--gold-light)", lineHeight: 0.75, marginBottom: "0.8rem", opacity: 0.85 }}>"</div>

              {/* Text */}
              <p style={{ color: "var(--charcoal-light)", fontSize: "0.84rem", lineHeight: 1.85, fontWeight: 300, marginBottom: "1.2rem", flexGrow: 1 }}>
                {r.text}
              </p>

              {/* Service tag */}
              <span style={{ display: "inline-block", padding: "0.25rem 0.8rem", background: "rgba(201,169,110,0.1)", color: "var(--gold-dark)", fontSize: "0.65rem", letterSpacing: "0.08em", borderRadius: "2px", fontWeight: 600, marginBottom: "1rem", alignSelf: "flex-start" }}>
                {r.service}
              </span>

              <div className="divider-gold" style={{ marginBottom: "1rem" }} />

              {/* Reviewer row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.85rem", fontWeight: 600, flexShrink: 0 }}>
                    {r.avatar}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--charcoal)", margin: 0, lineHeight: 1.2 }}>{r.name}</p>
                    <p style={{ fontSize: "0.68rem", color: "var(--gray)", margin: 0 }}>{r.date}</p>
                  </div>
                </div>
                <Stars n={r.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a
            href="https://www.google.com/maps/place/Bilge+Beauty/@38.227668,27.9788499,17z"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.85rem 2rem", fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold-dark)", textDecoration: "none", border: "1px solid rgba(201,169,110,0.35)", borderRadius: "2px", fontWeight: 600 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="var(--gold)" /></svg>
            Google&apos;da Tüm Yorumları Gör
          </a>
        </div>
      </div>
    </section>
  );
}
