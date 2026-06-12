"use client";
import { useState } from "react";

const services = [
  "Lazer Epilasyon",
  "Hydrafacial",
  "Cilt Yenileme",
  "Cilt Gençleştirme",
  "Bölgesel İncelme & Sıkılaşma",
  "Deri Çatlak Tedavisi",
  "Diğer / Bilgi Almak İstiyorum",
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00",
  "14:00", "15:00", "16:00", "17:00", "18:00",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  note: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function Appointment() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", email: "", service: "", date: "", time: "", note: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", note: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(250,248,245,0.8)",
    border: "1px solid rgba(201,169,110,0.2)",
    borderRadius: "2px",
    padding: "0.9rem 1.1rem",
    fontSize: "0.85rem",
    color: "var(--charcoal)",
    outline: "none",
    transition: "border-color 0.25s",
    fontFamily: "var(--font-dm-sans), system-ui",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.68rem",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--gray)",
    marginBottom: "0.45rem",
    fontWeight: 500,
  };

  return (
    <section
      id="appointment"
      className="py-28 px-6"
      style={{
        background:
          "linear-gradient(170deg, var(--cream) 0%, var(--cream-dark) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
          >
            Ön Görüşme
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
            Randevu Alın
          </h2>
          <div className="divider-gold mx-auto mb-5" style={{ width: 70 }} />
          <p
            style={{
              color: "var(--gray)",
              fontSize: "0.88rem",
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            Ücretsiz ön görüşme ile kişisel bakım planınızı birlikte oluşturalım.
            <br />
            En kısa sürede sizinle iletişime geçeceğiz.
          </p>
        </div>

        {/* Form Card */}
        <div
          className="glass-card p-8 md:p-12"
          style={{ borderRadius: "4px", boxShadow: "0 20px 60px rgba(26,26,26,0.08)" }}
        >
          {status === "success" ? (
            <div className="text-center py-10">
              <div
                className="text-5xl mb-6"
                style={{ color: "var(--gold)", fontFamily: "serif" }}
              >
                ✦
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "2rem",
                  color: "var(--charcoal)",
                  marginBottom: "0.8rem",
                }}
              >
                Randevunuz Alındı
              </h3>
              <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                Talebiniz başarıyla iletildi. En kısa sürede{" "}
                <strong style={{ color: "var(--gold)" }}>0534 417 83 70</strong>{" "}
                numarasından sizi arayacağız.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 px-8 py-3 text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-75"
                style={{
                  background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "2px",
                  cursor: "pointer",
                  letterSpacing: "0.18em",
                }}
              >
                Yeni Randevu
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div
                className="grid gap-5"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
              >
                {/* Name */}
                <div>
                  <label style={labelStyle}>Ad Soyad *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Adınız Soyadınız"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Telefon *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="05XX XXX XX XX"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>E-posta</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ornek@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                  />
                </div>

                {/* Service */}
                <div>
                  <label style={labelStyle}>Hizmet *</label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                  >
                    <option value="">Hizmet Seçin</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label style={labelStyle}>Tarih *</label>
                  <input
                    required
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                  />
                </div>

                {/* Time */}
                <div>
                  <label style={labelStyle}>Saat Tercihi</label>
                  <select
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                  >
                    <option value="">Saat Seçin</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Note */}
              <div className="mt-5">
                <label style={labelStyle}>Notunuz</label>
                <textarea
                  name="note"
                  value={form.note}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Cilt tipiniz veya özel durumunuz hakkında bilgi verebilirsiniz..."
                  style={{
                    ...inputStyle,
                    resize: "none",
                    lineHeight: 1.7,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p
                  className="mt-4 text-sm text-center"
                  style={{ color: "#e05a5a" }}
                >
                  Bir hata oluştu. Lütfen{" "}
                  <a href="tel:05344178370" style={{ color: "var(--gold)" }}>
                    0534 417 83 70
                  </a>{" "}
                  numarasını arayın.
                </p>
              )}

              {/* Submit */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p
                  className="text-xs"
                  style={{ color: "var(--gray)", letterSpacing: "0.04em" }}
                >
                  * Zorunlu alanlar. Bilgileriniz gizli tutulur.
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-85 disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "2px",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    boxShadow: "0 8px 30px rgba(201,169,110,0.35)",
                    letterSpacing: "0.2em",
                    fontWeight: 500,
                    minWidth: "200px",
                  }}
                >
                  {status === "loading" ? "Gönderiliyor..." : "Randevu Talebi Gönder"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Direct contact */}
        <div className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="tel:05344178370"
            className="flex items-center gap-3 transition-opacity hover:opacity-75"
            style={{ color: "var(--charcoal)", textDecoration: "none", fontSize: "0.88rem" }}
          >
            <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>☎</span>
            0534 417 83 70
          </a>
          <span style={{ color: "var(--gray-light)" }}>|</span>
          <a
            href="https://www.instagram.com/bilge_beautyy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-75"
            style={{ color: "var(--charcoal)", textDecoration: "none", fontSize: "0.88rem" }}
          >
            <span style={{ color: "var(--gold)", fontSize: "1.1rem" }}>◈</span>
            @bilge_beautyy
          </a>
        </div>
      </div>
    </section>
  );
}
