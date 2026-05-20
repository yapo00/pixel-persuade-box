import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: { src: string; alt: string }[];
}

export function Carousel({ images }: Props) {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 4500);
    return () => clearInterval(t);
  }, [total]);

  const go = (n: number) => setIdx((i) => (i + n + total) % total);

  return (
    <div className="relative w-full">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-glow)]">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <img src={img.src} alt={img.alt} className="size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        ))}

        <button
          onClick={() => go(-1)}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/60 backdrop-blur border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-background/60 backdrop-blur border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
        >
          <ChevronRight className="size-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Foto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-primary" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
