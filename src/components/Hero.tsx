"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    "/videos/hero-video-1.mp4",
    "/videos/hero-video-2.mp4",
    "/videos/hero-video-3.mp4",
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    const handleEnded = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("ended", handleEnded);
    };
  }, [currentVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => {});
  }, [currentVideo]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Luxury CSS Orb Background (always rendered as base layer) ── */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, #1a0d00 0%, #0d0a08 40%, #050403 100%)",
        }}
      >
        {/* Large pearl orb */}
        <div
          style={{
            position: "absolute",
            width: "65vmax",
            height: "65vmax",
            top: "-20%",
            left: "-15%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 35% 40%, rgba(240,216,154,0.18) 0%, rgba(201,169,110,0.08) 40%, transparent 70%)",
            animation: "float-orb-1 18s ease-in-out infinite",
            filter: "blur(40px)",
          }}
        />
        {/* Gold essence orb */}
        <div
          style={{
            position: "absolute",
            width: "55vmax",
            height: "55vmax",
            top: "10%",
            right: "-20%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 60% 45%, rgba(201,169,110,0.22) 0%, rgba(160,120,64,0.1) 45%, transparent 70%)",
            animation: "float-orb-2 22s ease-in-out infinite",
            filter: "blur(50px)",
          }}
        />
        {/* Rose pearl orb */}
        <div
          style={{
            position: "absolute",
            width: "45vmax",
            height: "45vmax",
            bottom: "-10%",
            left: "20%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 55%, rgba(232,180,160,0.14) 0%, rgba(200,144,122,0.07) 50%, transparent 70%)",
            animation: "float-orb-3 26s ease-in-out infinite",
            filter: "blur(45px)",
          }}
        />
        {/* Accent glass orb */}
        <div
          style={{
            position: "absolute",
            width: "30vmax",
            height: "30vmax",
            bottom: "20%",
            right: "10%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.06) 0%, rgba(201,169,110,0.05) 50%, transparent 70%)",
            animation: "float-orb-4 30s ease-in-out infinite",
            filter: "blur(30px)",
          }}
        />
        {/* Fine grain overlay for depth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E\")",
            opacity: 0.4,
          }}
        />
      </div>

      {/* ── Video Layer (fades in when loaded) ── */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: videoLoaded ? 1 : 0 }}
      >
        <video
          ref={videoRef}
          src={videos[currentVideo]}
          className="absolute w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          style={{ objectPosition: "center center" }}
        />
        {/* Vignette mask over video */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.75) 100%)
            `,
          }}
        />
      </div>

      {/* ── Inward masking: fade edges to site background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(250,248,245,0) 0%,
              rgba(250,248,245,0) 60%,
              rgba(250,248,245,0.3) 80%,
              rgba(250,248,245,0.85) 93%,
              rgba(250,248,245,1) 100%
            )
          `,
        }}
      />

      {/* ── Hero Content ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "100svh", paddingTop: "80px" }}
      >
        {/* Eyebrow tag */}
        <div
          className="animate-fade-up mb-6 inline-flex items-center gap-3"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="divider-gold" style={{ width: 40 }} />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "rgba(201,169,110,0.9)", letterSpacing: "0.3em" }}
          >
            Lüks Güzellik Deneyimi
          </span>
          <span className="divider-gold" style={{ width: 40 }} />
        </div>

        {/* Main heading */}
        <h1
          className="animate-fade-up delay-200"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontWeight: 300,
            letterSpacing: "0.06em",
            lineHeight: 0.95,
            color: "white",
            marginBottom: "0.2em",
          }}
        >
          Bilge
        </h1>
        <h1
          className="animate-fade-up delay-300"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            fontWeight: 300,
            letterSpacing: "0.06em",
            lineHeight: 0.95,
            marginBottom: "1.2rem",
          }}
        >
          <span className="text-gold-shimmer">Beauty</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up delay-400 max-w-md"
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
            letterSpacing: "0.08em",
            lineHeight: 1.8,
            fontWeight: 300,
            marginBottom: "2.5rem",
          }}
        >
          Cilt sağlığı ve güzelliğiniz için bilimsel yaklaşım,
          <br />
          zamansız zarafet ve kişiselleştirilmiş bakım.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-up delay-500 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#appointment"
            className="group relative px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-400 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
              color: "white",
              textDecoration: "none",
              borderRadius: "2px",
              boxShadow: "0 8px 32px rgba(201,169,110,0.45)",
              letterSpacing: "0.2em",
              fontWeight: 500,
            }}
          >
            <span className="relative z-10">Ücretsiz Ön Görüşme</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 100%)" }}
            />
          </a>
          <a
            href="#services"
            className="px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
            style={{
              color: "rgba(255,255,255,0.85)",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "2px",
              letterSpacing: "0.2em",
            }}
          >
            Hizmetlerimiz
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in delay-800 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div
            className="w-px h-12 origin-top"
            style={{
              background: "linear-gradient(to bottom, rgba(201,169,110,0.8), transparent)",
              animation: "fade-up 1.5s ease-in-out infinite alternate",
            }}
          />
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem" }}
          >
            Keşfet
          </span>
        </div>
      </div>
    </section>
  );
}
