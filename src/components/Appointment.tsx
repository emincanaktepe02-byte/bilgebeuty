"use client";
import { useState } from "react";

const services = ["Lazer Epilasyon", "Hydrafacial", "Cilt Yenileme", "Cilt Gençleştirme", "Bölgesel İncelme & Sıkılaşma", "Deri Çatlak Tedavisi", "Diğer / Bilgi Almak İstiyorum"];
const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

type FormState = { name: string; phone: string; email: string; service: string; date: string; time: string; note: string };
type Status = "idle" | "loading" | "success" | "error";

const input: React.CSSProperties = {
  width: "100%",
  background: "rgba(250,248,245,0.85)",
  border: "1px solid rgba(201,169,110,0.2)",
  borderRadius: "3px",
  padding: "0.9rem 1.1rem",
  fontSize: "0.88rem",
  color: "var(--charcoal)",
  outline: "none",
  transition: "border-color 0.25s",
  fontFamily: "var(--font-dm-sans), system-ui",
};

const label: React.CSSProperties = {
  display: "block",
  fontSize: "0.66rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--gray)",
  marginBottom: "0.45rem",
  fontWeight: 600,
};

export default function Appointment() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", service: "", date: "", time: "", note: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/appointment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", note: "" });
    } catch { setStatus("error"); }
  };

  const focusOn = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = "var(--gold)");
  const focusOff = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = "rgba(201,169,110,0.2)");

  return (
    <section id="appointment" className="section-wrap" style={{ background: "linear-gradient(170deg, var(--cream) 0%, var(--cream-dark) 100%)" }}>
      <div className="section-inner">

        {/* Centered header */}
        <div className="section-header">
          <p className="section-eyebrow">
            <span style={{ height: "1px", width: "28px", background: "var(--gold-light)", display: "inline-block" }} />
            Ön Görüşme
            <span style={{ height: "1px", width: "28px", background: "var(--gold-light)", display: "inline-block" }} />
          </p>
          <h2 className="section-title">Randevu Alın</h2>
          <div className="divider-gold" style={{ width: "72px", margin: "0 auto 1.4rem" }} />
          <p className="section-subtitle">
            Ücretsiz ön görüşme ile kişisel bakım planınızı birlikte oluşturalım.<br />
            En kısa sürede sizinle iletişime geçeceğiz.
          </p>
        </div>

        {/* Form card — max-width centered */}
        <div
          className="glass-card"
          style={{ maxWidth: "760px", margin: "0 auto", borderRadius: "4px", padding: "clamp(2rem, 5vw, 3.5rem)", boxShadow: "0 20px 60px rgba(26,26,26,0.07)" }}
        >
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div style={{ fontSize: "3rem", color: "var(--gold)", marginBottom: "1.2rem" }}>✦</div>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.2rem", fontWeight: 600, color: "var(--charcoal)", marginBottom: "0.8rem", marginTop: 0 }}>Randevunuz Alındı</h3>
              <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                Talebiniz iletildi. En kısa sürede{" "}
                <strong style={{ color: "var(--gold)" }}>0534 417 83 70</strong>{" "}
                numarasından arayacağız.
              </p>
              <button onClick={() => setStatus("idle")} style={{ padding: "0.9rem 2.2rem", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)", color: "white", border: "none", borderRadius: "2px", cursor: "pointer" }}>
                Yeni Randevu
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1.2rem" }}>
                <div><label style={label}>Ad Soyad *</label><input required type="text" name="name" value={form.name} onChange={onChange} placeholder="Adınız Soyadınız" style={input} onFocus={focusOn} onBlur={focusOff} /></div>
                <div><label style={label}>Telefon *</label><input required type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="05XX XXX XX XX" style={input} onFocus={focusOn} onBlur={focusOff} /></div>
                <div><label style={label}>E-posta</label><input type="email" name="email" value={form.email} onChange={onChange} placeholder="ornek@email.com" style={input} onFocus={focusOn} onBlur={focusOff} /></div>
                <div>
                  <label style={label}>Hizmet *</label>
                  <select required name="service" value={form.service} onChange={onChange} style={{ ...input, cursor: "pointer" }} onFocus={focusOn} onBlur={focusOff}>
                    <option value="">Hizmet Seçin</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div><label style={label}>Tarih *</label><input required type="date" name="date" value={form.date} onChange={onChange} min={new Date().toISOString().split("T")[0]} style={input} onFocus={focusOn} onBlur={focusOff} /></div>
                <div>
                  <label style={label}>Saat Tercihi</label>
                  <select name="time" value={form.time} onChange={onChange} style={{ ...input, cursor: "pointer" }} onFocus={focusOn} onBlur={focusOff}>
                    <option value="">Saat Seçin</option>
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ marginTop: "1.2rem" }}>
                <label style={label}>Notunuz</label>
                <textarea name="note" value={form.note} onChange={onChange} rows={3} placeholder="Cilt tipiniz veya özel durumunuz hakkında bilgi verebilirsiniz..." style={{ ...input, resize: "none", lineHeight: 1.7 }} onFocus={focusOn} onBlur={focusOff} />
              </div>

              {status === "error" && (
                <p style={{ color: "#e05a5a", fontSize: "0.85rem", textAlign: "center", marginTop: "1rem" }}>
                  Bir hata oluştu. Lütfen <a href="tel:05344178370" style={{ color: "var(--gold)" }}>0534 417 83 70</a> numarasını arayın.
                </p>
              )}

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{ padding: "1.1rem 3rem", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)", color: "white", border: "none", borderRadius: "2px", cursor: status === "loading" ? "not-allowed" : "pointer", boxShadow: "0 8px 28px rgba(201,169,110,0.35)", opacity: status === "loading" ? 0.6 : 1, minWidth: "240px" }}
                >
                  {status === "loading" ? "Gönderiliyor..." : "Randevu Talebi Gönder"}
                </button>
                <p style={{ fontSize: "0.72rem", color: "var(--gray)", letterSpacing: "0.04em" }}>* Zorunlu alanlar. Bilgileriniz gizli tutulur.</p>
              </div>
            </form>
          )}
        </div>

        {/* Direct contact row */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "0.5rem 2rem", marginTop: "2.5rem" }}>
          <a href="tel:05344178370" style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--charcoal)", textDecoration: "none", fontSize: "0.88rem" }}>
            <span style={{ color: "var(--gold)" }}>☎</span> 0534 417 83 70
          </a>
          <span style={{ color: "var(--gray-light)", fontSize: "0.8rem" }}>|</span>
          <a href="https://www.instagram.com/bilge_beautyy/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--charcoal)", textDecoration: "none", fontSize: "0.88rem" }}>
            <span style={{ color: "var(--gold)" }}>◈</span> @bilge_beautyy
          </a>
        </div>
      </div>
    </section>
  );
}
