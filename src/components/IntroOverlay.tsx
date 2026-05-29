import { useEffect, useState } from "react";

const DOLLARS = Array.from({ length: 28 });
const RAIN_DOLLARS = Array.from({ length: 22 });
const WORDS = ["CAPTURA", "DIGITAL"];

const INTRO_MS = 4000;
const FADE_MS = 800;

export function IntroOverlay() {
  const [phase, setPhase] = useState<"running" | "out" | "done">("running");
  const [rainOpacity, setRainOpacity] = useState(1);
  const [rainMounted, setRainMounted] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("intro-played") === "1") {
        setPhase("done");
        return;
      }
      sessionStorage.setItem("intro-played", "1");
    } catch {}

    const t1 = setTimeout(() => setPhase("out"), INTRO_MS);
    const t2 = setTimeout(() => setPhase("done"), INTRO_MS + FADE_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Rain fades out as user scrolls down
  useEffect(() => {
    if (phase !== "done") return;
    const onScroll = () => {
      const y = window.scrollY;
      const fadeStart = 60;
      const fadeEnd = 320;
      const op = 1 - Math.min(1, Math.max(0, (y - fadeStart) / (fadeEnd - fadeStart)));
      setRainOpacity(op);
      if (op <= 0.02) {
        setRainMounted(false);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [phase]);

  return (
    <>
      {/* Persistent falling dollars after intro (fades on scroll) */}
      {rainMounted && (
        <div
          className="fixed inset-0 z-40 pointer-events-none overflow-hidden transition-opacity duration-500"
          style={{ opacity: phase === "done" ? rainOpacity : 0 }}
          aria-hidden="true"
        >
          {RAIN_DOLLARS.map((_, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            const pos = (i * 9) % 45;
            const delay = (i % 8) * 0.35;
            const duration = 3.2 + ((i * 13) % 12) / 10;
            const size = 16 + ((i * 11) % 20);
            return (
              <span
                key={i}
                className="absolute font-bold select-none intro-dollar"
                style={{
                  [side]: `${pos}%`,
                  top: "-10%",
                  fontSize: `${size}px`,
                  color: "oklch(0.85 0.17 145)",
                  textShadow: "0 0 12px oklch(0.85 0.2 145 / 0.7)",
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              >
                $
              </span>
            );
          })}
        </div>
      )}

      {phase !== "done" && (
        <div
          className={`fixed inset-0 z-[9999] overflow-hidden bg-black transition-opacity duration-700 ${
            phase === "out" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 intro-grid" />
          <div className="absolute inset-0 intro-scan-1" />
          <div className="absolute inset-0 intro-scan-2" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.25_0.18_85_/_0.45),transparent_60%)]" />

          {DOLLARS.map((_, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            const pos = (i * 7) % 45;
            const delay = (i % 10) * 0.18;
            const duration = 1.8 + ((i * 13) % 9) / 10;
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

          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
            <h1 className="font-extrabold tracking-tight text-3xl sm:text-6xl md:text-7xl flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
              {WORDS.map((word, wi) => {
                const offset = wi === 0 ? 0 : WORDS[0].length;
                return (
                  <span key={wi} className="inline-flex whitespace-nowrap">
                    {word.split("").map((ch, i) => {
                      const globalIdx = offset + i;
                      return (
                        <span
                          key={i}
                          className="intro-letter inline-block"
                          style={{
                            animationDelay: `${1.6 + globalIdx * 0.09}s`,
                            background: "linear-gradient(135deg, oklch(0.95 0.17 95), oklch(0.75 0.2 60))",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                            transformOrigin: `${(globalIdx % 4) * 25}% ${globalIdx % 2 === 0 ? -50 : 150}%`,
                          }}
                        >
                          {ch}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </h1>
            <p
              className="mt-5 text-sm sm:text-base uppercase tracking-[0.4em] text-primary/90 intro-tagline"
              style={{ animationDelay: "3s" }}
            >
              Tecnología que <span className="text-white">vende</span>
            </p>

            <div className="mt-8 size-3 rounded-full bg-primary intro-pulse" />
          </div>

          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent intro-bar-top" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent intro-bar-bottom" />
        </div>
      )}
    </>
  );
}
