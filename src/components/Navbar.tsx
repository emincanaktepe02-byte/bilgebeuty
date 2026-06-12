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
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(250, 248, 245, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201, 169, 110, 0.15)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(26, 26, 26, 0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          style={{ textDecoration: "none" }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
              boxShadow: "0 2px 12px rgba(201, 169, 110, 0.4)",
            }}
          >
            <span className="text-white text-xs font-semibold tracking-wider">B</span>
          </div>
          <span
            className="text-xl tracking-widest font-medium"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: scrolled ? "var(--charcoal)" : "white",
              letterSpacing: "0.2em",
              textShadow: scrolled ? "none" : "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            BILGE BEAUTY
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-70"
                style={{
                  color: scrolled ? "var(--charcoal)" : "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  fontSize: "0.72rem",
                  textShadow: scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.25)",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#appointment"
              className="px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                color: "white",
                textDecoration: "none",
                borderRadius: "2px",
                letterSpacing: "0.14em",
                boxShadow: "0 4px 15px rgba(201, 169, 110, 0.35)",
                fontWeight: 500,
              }}
            >
              Randevu Al
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px w-6 transition-all duration-300"
              style={{
                background: scrolled ? "var(--charcoal)" : "white",
                transform:
                  open && i === 0
                    ? "translateY(7px) rotate(45deg)"
                    : open && i === 1
                    ? "scaleX(0)"
                    : open && i === 2
                    ? "translateY(-7px) rotate(-45deg)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: open ? "400px" : "0",
          background: "rgba(250, 248, 245, 0.97)",
          backdropFilter: "blur(20px)",
        }}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-sm tracking-widest uppercase"
                style={{
                  color: "var(--charcoal)",
                  textDecoration: "none",
                  letterSpacing: "0.14em",
                  fontSize: "0.75rem",
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#appointment"
              className="inline-block px-6 py-3 text-xs tracking-widest uppercase"
              style={{
                background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                color: "white",
                textDecoration: "none",
                borderRadius: "2px",
                letterSpacing: "0.14em",
              }}
              onClick={() => setOpen(false)}
            >
              Randevu Al
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
