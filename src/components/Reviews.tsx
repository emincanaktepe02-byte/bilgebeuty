"use client";
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Ayşe K.",
    rating: 5,
    date: "2 hafta önce",
    service: "Lazer Epilasyon",
    text: "Bilge Beauty'de lazer epilasyon tedavisi aldım ve sonuçtan çok memnunum. Personel son derece profesyonel ve sıcakkanlı. Cihazlar son teknoloji ve uygulama ağrısız oldu. Kesinlikle tavsiye ederim!",
    avatar: "A",
  },
  {
    name: "Selin M.",
    rating: 5,
    date: "1 ay önce",
    service: "Hydrafacial",
    text: "Hydrafacial tedavisinden sonra cildinm pırıl pırıl oldu. Uzman hanım cilt analizini çok detaylı yaptı ve kişiselleştirilmiş bir bakım protokolü oluşturdu. Çok memnunum, düzenli gelmeye devam edeceğim.",
    avatar: "S",
  },
  {
    name: "Fatma Ö.",
    rating: 5,
    date: "3 hafta önce",
    service: "Cilt Gençleştirme",
    text: "RF ile cilt gençleştirme tedavisine başladım. İlk seanstan itibaren fark ettim, cildim çok daha sıkı ve genç görünüyor. Ekip son derece bilgili ve güler yüzlü. Mekan da çok temiz ve konforlu.",
    avatar: "F",
  },
  {
    name: "Zeynep T.",
    rating: 5,
    date: "2 ay önce",
    service: "Bölgesel İncelme",
    text: "Kavitasyon ve RF kombinasyonu ile bölgesel incelme seanslarına başladım. 6 seans sonunda gerçekten görünür fark oluştu. Ekip çok profesyonel, randevularımda hiç sorun yaşamadım.",
    avatar: "Z",
  },
  {
    name: "Merve A.",
    rating: 5,
    date: "5 hafta önce",
    service: "Cilt Yenileme",
    text: "Cilt yenileme tedavisi için geldim. Cildim çok daha aydınlık ve pürüzsüz oldu. Uzmanlar her adımı açıkladı ve tedavi süresince rahat hissettim. Fiyat-performans açısından da mükemmel.",
    avatar: "M",
  },
  {
    name: "Elif Y.",
    rating: 5,
    date: "1 ay önce",
    service: "Deri Çatlak Tedavisi",
    text: "PRP tedavisinden sonra çatlak izlerim belirgin şekilde azaldı. Ekip çok deneyimli ve güven verici. Temiz ortam, kaliteli ürünler. Sonuçtan çok memnunum, kesinlikle tavsiye ederim!",
    avatar: "E",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "var(--gold)" : "none"}
          stroke={i < rating ? "var(--gold)" : "var(--gray-light)"}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
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
    <section
      id="reviews"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
          >
            Müşteri Yorumları
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
            Müşterilerimiz Ne Diyor?
          </h2>
          <div className="divider-gold mx-auto mb-6" style={{ width: 70 }} />

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <StarRating rating={5} />
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: "var(--gold)",
                }}
              >
                5.0
              </span>
            </div>
            <span style={{ color: "var(--gray)", fontSize: "0.85rem" }}>
              Google'da 120+ değerlendirme
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`,
                background: "var(--cream)",
                border: "1px solid rgba(201,169,110,0.1)",
                borderRadius: "4px",
                padding: "1.8rem",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "3rem",
                  color: "var(--gold-light)",
                  lineHeight: 0.8,
                  marginBottom: "0.8rem",
                  opacity: 0.8,
                }}
              >
                "
              </div>

              <p
                className="mb-5 leading-relaxed"
                style={{
                  color: "var(--charcoal-light)",
                  fontSize: "0.85rem",
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}
              >
                {review.text}
              </p>

              {/* Service tag */}
              <span
                className="inline-block px-3 py-1 mb-4 text-xs"
                style={{
                  background: "rgba(201,169,110,0.1)",
                  color: "var(--gold-dark)",
                  borderRadius: "2px",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                }}
              >
                {review.service}
              </span>

              {/* Divider */}
              <div className="divider-gold mb-4" />

              {/* Reviewer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{
                      background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                      color: "white",
                    }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--charcoal)" }}
                    >
                      {review.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--gray)", fontSize: "0.7rem" }}
                    >
                      {review.date}
                    </p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Bilge+Beauty/@38.227668,27.9788499,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 text-xs tracking-[0.16em] uppercase transition-all duration-300 hover:opacity-80"
            style={{
              border: "1px solid rgba(201,169,110,0.4)",
              color: "var(--gold-dark)",
              textDecoration: "none",
              borderRadius: "2px",
              letterSpacing: "0.16em",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="var(--gold)" />
            </svg>
            Google'da Tüm Yorumları Gör
          </a>
        </div>
      </div>
    </section>
  );
}
