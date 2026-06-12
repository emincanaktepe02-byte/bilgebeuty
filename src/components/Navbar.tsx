"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Ana Sayfa", href: "#home" },
  { label: "Hizmetler", href: "#services" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Yorumlar", href: "#reviews" },
  { label: "İletişim", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease",
        background: scrolled ? "rgba(250,248,245,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.14)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(26,26,26,0.05)" : "none",
      }}
    >
      {/* Inner row — matches section-inner width & padding */}
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 5vw, 3rem)",
          height: "76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", fontWeight: 400, letterSpacing: "0.22em", color: scrolled ? "var(--charcoal)" : "white", textShadow: scrolled ? "none" : "0 2px 20px rgba(0,0,0,0.3)", transition: "color 0.4s" }}>
            BILGE BEAUTY
          </span>
        </a>

        {/* Desktop nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: "2.2rem", listStyle: "none", margin: 0, padding: 0 }} className="hidden-mobile">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{ fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: scrolled ? "var(--charcoal)" : "rgba(255,255,255,0.88)", textDecoration: "none", fontWeight: 500, transition: "opacity 0.25s", textShadow: scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.25)" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.55")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#appointment" style={{ padding: "0.6rem 1.5rem", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)", color: "white", textDecoration: "none", borderRadius: "2px", boxShadow: "0 4px 14px rgba(201,169,110,0.35)" }}>
              Randevu Al
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menü"
          style={{ display: "none", flexDirection: "column", gap: "5px", padding: "0.5rem", background: "none", border: "none", cursor: "pointer" }}
          className="show-mobile"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", height: "1px", width: "22px", background: scrolled ? "var(--charcoal)" : "white", transition: "transform 0.3s, opacity 0.3s", transform: open && i === 0 ? "translateY(6px) rotate(45deg)" : open && i === 1 ? "scaleX(0)" : open && i === 2 ? "translateY(-6px) rotate(-45deg)" : "none", opacity: open && i === 1 ? 0 : 1 }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{ overflow: "hidden", maxHeight: open ? "400px" : "0", transition: "max-height 0.45s ease", background: "rgba(250,248,245,0.97)", backdropFilter: "blur(20px)" }} className="show-mobile">
        <ul style={{ listStyle: "none", margin: 0, padding: "0.5rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "0.7rem 0", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--charcoal)", textDecoration: "none", fontWeight: 500 }}>
                {l.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: "0.5rem" }}>
            <a href="#appointment" onClick={() => setOpen(false)} style={{ display: "inline-block", padding: "0.7rem 1.6rem", fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)", color: "white", textDecoration: "none", borderRadius: "2px" }}>
              Randevu Al
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
