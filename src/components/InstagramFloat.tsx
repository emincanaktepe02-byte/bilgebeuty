"use client";
import { useState, useEffect } from "react";

export default function InstagramFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://www.instagram.com/bilge_beautyy/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram'da Takip Et"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: hovered ? "0.85rem 1.4rem" : "0.85rem",
        background: hovered
          ? "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
          : "rgba(26,26,26,0.85)",
        backdropFilter: "blur(12px)",
        borderRadius: "50px",
        textDecoration: "none",
        boxShadow: hovered
          ? "0 8px 32px rgba(220,39,67,0.4)"
          : "0 8px 32px rgba(0,0,0,0.25)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      {/* Instagram SVG Icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>

      {/* Label — expands on hover */}
      <span
        style={{
          color: "white",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          maxWidth: hovered ? "140px" : "0px",
          overflow: "hidden",
          transition: "max-width 0.35s cubic-bezier(0.22,1,0.36,1)",
          display: "inline-block",
        }}
      >
        @bilge_beautyy
      </span>
    </a>
  );
}
