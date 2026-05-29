import { useEffect, useState } from "react";

const DOLLARS = Array.from({ length: 28 });
const LETTERS = "CAPTURA DIGITAL".split("");

export function IntroOverlay() {
  const [phase, setPhase] = useState<"running" | "out" | "done">("running");

  useEffect(() => {
    try {
      if (sessionStorage.getItem("intro-played") === "1") {
        setPhase("done");
        return;
      }
      sessionStorage.setItem("intro-played", "1");
    } catch {}

    const t1 = setTimeout(() => setPhase("out"), 3000);
    const t2 = setTimeout(() => setPhase("done"), 3800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-black transition-opacity duration-700 ${
        phase === "out" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Data-center grid floor */}
      <div className="absolute inset-0 intro-grid" />

      {/* Scanning light beams */}
      <div className="absolute inset-0 intro-scan-1" />
      <div className="absolute inset-0 intro-scan-2" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.25_0.18_85_/_0.45),transparent_60%)]" />

      {/* Falling dollars - left and right columns */}
      {DOLLARS.map((_, i) => {
        const side = i % 2 === 0 ? "left" : "right";
        const pos = (i * 7) % 45;
        const delay = (i % 10) * 0.18;
        const duration = 1.6 + ((i * 13) % 9) / 10;
        const size = 18 + ((i * 11) % 22);
        return (
          <span
            key={i}
            className="absolute font-bold select-none intro-dollar"
            style={{
              [side]: `${pos}%`,
              top: "-10%",
              fontSize: `${size}px`,
              color: "oklch(0.85 0.17 145)",
              textShadow: "0 0 12px oklch(0.85 0.2 145 / 0.8)",
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          >
            $
          </span>
        );
      })}

      {/* Center stack: letters + tagline */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl flex flex-wrap justify-center gap-x-1">
          {LETTERS.map((ch, i) => (
            <span
              key={i}
              className="intro-letter inline-block"
              style={{
                animationDelay: `${0.2 + i * 0.06}s`,
                background: "linear-gradient(135deg, oklch(0.95 0.17 95), oklch(0.75 0.2 60))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                transformOrigin: `${(i % 4) * 25}% ${i % 2 === 0 ? -50 : 150}%`,
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>
        <p
          className="mt-5 text-sm sm:text-base uppercase tracking-[0.4em] text-primary/90 intro-tagline"
          style={{ animationDelay: "1.6s" }}
        >
          Tecnología que <span className="text-white">vende</span>
        </p>

        {/* Pulse ring */}
        <div className="mt-8 size-3 rounded-full bg-primary intro-pulse" />
      </div>

      {/* Top/bottom scanlines */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent intro-bar-top" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent intro-bar-bottom" />
    </div>
  );
}
