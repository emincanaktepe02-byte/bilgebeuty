"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ["/videos/hero-video-1.mp4", "/videos/hero-video-2.mp4", "/videos/hero-video-3.mp4"];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onCanPlay = () => setVideoLoaded(true);
    const onEnded = () => setCurrentVideo((p) => (p + 1) % videos.length);
    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("ended", onEnded);
    return () => { video.removeEventListener("canplay", onCanPlay); video.removeEventListener("ended", onEnded); };
  }, [currentVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [currentVideo]);

  return (
    <section id="home" style={{ position: "relative", width: "100%", minHeight: "100svh", overflow: "hidden" }}>

      {/* ── Dark base + luxury orbs ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 25% 55%, #1c0f02 0%, #0d0a08 45%, #050403 100%)" }}>
        <div style={{ position: "absolute", width: "65vmax", height: "65vmax", top: "-18%", left: "-12%", borderRadius: "50%", background: "radial-gradient(circle at 35% 40%, rgba(240,216,154,0.18) 0%, rgba(201,169,110,0.08) 40%, transparent 70%)", animation: "float-orb-1 18s ease-in-out infinite", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", width: "55vmax", height: "55vmax", top: "8%", right: "-18%", borderRadius: "50%", background: "radial-gradient(circle at 60% 45%, rgba(201,169,110,0.22) 0%, rgba(160,120,64,0.1) 45%, transparent 70%)", animation: "float-orb-2 22s ease-in-out infinite", filter: "blur(50px)" }} />
        <div style={{ position: "absolute", width: "45vmax", height: "45vmax", bottom: "-8%", left: "22%", borderRadius: "50%", background: "radial-gradient(circle at 50% 55%, rgba(232,180,160,0.14) 0%, rgba(200,144,122,0.07) 50%, transparent 70%)", animation: "float-orb-3 26s ease-in-out infinite", filter: "blur(45px)" }} />
        <div style={{ position: "absolute", width: "30vmax", height: "30vmax", bottom: "22%", right: "12%", borderRadius: "50%", background: "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.06) 0%, rgba(201,169,110,0.05) 50%, transparent 70%)", animation: "float-orb-4 30s ease-in-out infinite", filter: "blur(30px)" }} />
      </div>

      {/* ── Video layer ── */}
      <div style={{ position: "absolute", inset: 0, opacity: videoLoaded ? 1 : 0, transition: "opacity 1.2s ease" }}>
        <video ref={videoRef} src={videos[currentVideo]} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} muted playsInline preload="auto" />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 25%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.7) 100%)" }} />
      </div>

      {/* ── Bottom fade to site bg ── */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to bottom, rgba(250,248,245,0) 0%, rgba(250,248,245,0) 62%, rgba(250,248,245,0.25) 78%, rgba(250,248,245,0.82) 92%, rgba(250,248,245,1) 100%)" }} />

      {/* ── Centered content ── */}
      <div style={{ position: "relative", zIndex: 10, minHeight: "100svh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "100px 1.5rem 6rem" }}>

        {/* Eyebrow */}
        <div className="animate-fade-up" style={{ display: "inline-flex", alignItems: "center", gap: "0.9rem", marginBottom: "1.8rem", animationDelay: "0.2s" }}>
          <span style={{ height: "1px", width: "36px", background: "linear-gradient(to right, transparent, rgba(201,169,110,0.8))" }} />
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(201,169,110,0.88)", fontWeight: 600 }}>Lüks Güzellik Deneyimi</span>
          <span style={{ height: "1px", width: "36px", background: "linear-gradient(to left, transparent, rgba(201,169,110,0.8))" }} />
        </div>

        {/* Main title */}
        <h1 className="animate-fade-up delay-200" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(5rem, 15vw, 12rem)", fontWeight: 300, letterSpacing: "0.04em", lineHeight: 0.92, color: "white", margin: "0 0 0.05em", textShadow: "0 0 100px rgba(255,255,255,0.15)" }}>
          Bilge
        </h1>
        <h1 className="animate-fade-up delay-300" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(5rem, 15vw, 12rem)", fontWeight: 300, letterSpacing: "0.04em", lineHeight: 0.92, margin: "0 0 2rem" }}>
          <span className="text-gold-shimmer">Beauty</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up delay-400" style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.82rem, 1.6vw, 1rem)", letterSpacing: "0.07em", lineHeight: 1.9, fontWeight: 300, maxWidth: "420px", marginBottom: "3rem" }}>
          Cilt sağlığı ve güzelliğiniz için bilimsel yaklaşım,<br />zamansız zarafet ve kişiselleştirilmiş bakım.
        </p>

        {/* CTA */}
        <div className="animate-fade-up delay-500" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <a href="#appointment" style={{ padding: "1rem 2.5rem", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600, background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)", color: "white", textDecoration: "none", borderRadius: "2px", boxShadow: "0 8px 32px rgba(201,169,110,0.45)", transition: "opacity 0.3s" }}>
            Ücretsiz Ön Görüşme
          </a>
          <a href="#services" style={{ padding: "1rem 2.5rem", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.82)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.28)", borderRadius: "2px", transition: "opacity 0.3s" }}>
            Hizmetlerimiz
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-800" style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(201,169,110,0.75), transparent)" }} />
          <span style={{ fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Keşfet</span>
        </div>
      </div>
    </section>
  );
}
