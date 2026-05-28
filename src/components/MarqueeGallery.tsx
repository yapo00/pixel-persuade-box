interface Props {
  images: { src: string; alt: string }[];
  reverse?: boolean;
  speed?: number; // seconds
}

export function MarqueeGallery({ images, reverse = false, speed = 35 }: Props) {
  const loop = [...images, ...images];
  return (
    <div className="relative overflow-hidden">
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((img, i) => (
          <div
            key={i}
            className="relative shrink-0 w-64 aspect-[9/16] rounded-2xl overflow-hidden border border-primary/20 shadow-[var(--shadow-glow)] group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
