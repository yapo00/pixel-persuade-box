import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, MessageCircle, Phone, Sparkles, TrendingUp, Zap } from "lucide-react";
import logo from "@/assets/logo.webp";
import { SocialButton } from "@/components/SocialButton";
import { Carousel } from "@/components/Carousel";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Landing Page Bio | Convierte visitas en ventas" },
      {
        name: "description",
        content:
          "Landing Page Bio profesional para Bolivia. Centraliza tus redes sociales, genera ventas y entrega información clara a tus clientes.",
      },
    ],
  }),
});

// EDITAR AQUÍ: enlaces de redes sociales
const SOCIALS = {
  facebook: "https://facebook.com/tu-pagina",
  whatsapp: "https://wa.me/59179883768",
  instagram: "https://instagram.com/tu-cuenta",
  tiktok: "https://tiktok.com/@tu-cuenta",
};

// EDITAR AQUÍ: las 7 imágenes del carrusel (reemplaza las URLs)
const CAROUSEL_IMAGES = [
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80", alt: "Proyecto 1" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80", alt: "Proyecto 2" },
  { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80", alt: "Proyecto 3" },
  { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80", alt: "Proyecto 4" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80", alt: "Proyecto 5" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80", alt: "Proyecto 6" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80", alt: "Proyecto 7" },
];

const WHATSAPP_NUMBER = "+591 79883768";
const WHATSAPP_LINK = "https://wa.me/59179883768?text=Hola%2C%20quiero%20información%20sobre%20la%20Landing%20Page%20Bio";
const ADDRESS = "Calle Ingavi #253 entre Velasco y Colón, Santa Cruz — Bolivia";

function Index() {
  return (
    <main className="min-h-screen text-foreground overflow-hidden">
      {/* HERO */}
      <section className="relative px-5 pt-12 pb-10 max-w-xl mx-auto">
        <div className="flex justify-center mb-6 animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-glow" style={{ ['--glow-color' as string]: 'var(--gold)' }} />
            <img
              src={logo}
              alt="Logo"
              className="relative size-28 rounded-full object-cover border-2 border-primary/50 shadow-[var(--shadow-glow)]"
            />
          </div>
        </div>

        <div className="text-center space-y-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary">
            <Sparkles className="size-3" /> Landing Page Bio
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span
              className="bg-clip-text text-transparent animate-shimmer"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, oklch(0.9 0.16 95), oklch(0.98 0 0), oklch(0.75 0.2 60), oklch(0.9 0.16 95))",
                backgroundSize: "200% 100%",
              }}
            >
              Vendemos Landing Page Bio
            </span>
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
            Especializadas en <span className="text-primary font-medium">generar ventas</span> y entregar
            información clara a tus clientes desde un solo enlace.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-card border border-border">
              <Zap className="size-3 text-primary" /> Alta conversión
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-card border border-border">
              <TrendingUp className="size-3 text-primary" /> Más ventas
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-card border border-border">
              <Sparkles className="size-3 text-primary" /> Diseño premium
            </span>
          </div>
        </div>
      </section>

      {/* SOCIAL BUTTONS */}
      <section className="px-5 max-w-xl mx-auto space-y-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <SocialButton
          href={SOCIALS.facebook}
          variant="facebook"
          label="Facebook"
          handle="@tu-pagina"
          detail="Novedades, promociones y testimonios de nuestros clientes."
          icon={<Facebook className="size-7" />}
        />
        <SocialButton
          href={SOCIALS.whatsapp}
          variant="whatsapp"
          label="WhatsApp"
          handle="+591 79883768"
          detail="Atención directa, cotizaciones y soporte personalizado."
          icon={<MessageCircle className="size-7" />}
        />
        <SocialButton
          href={SOCIALS.instagram}
          variant="instagram"
          label="Instagram"
          handle="@tu-cuenta"
          detail="Portafolio visual, diseños recientes y reels detrás de cámara."
          icon={<Instagram className="size-7" />}
        />
        <SocialButton
          href={SOCIALS.tiktok}
          variant="tiktok"
          label="TikTok"
          handle="@tu-cuenta"
          detail="Tips virales, tutoriales y resultados reales de nuestras landings."
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-7">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.49a8.16 8.16 0 0 0 4.77 1.52V6.56a4.85 4.85 0 0 1-1.84-.13Z" />
            </svg>
          }
        />
      </section>

      {/* CAROUSEL */}
      <section className="px-5 max-w-xl mx-auto mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-bold">Nuestro trabajo</h2>
          <span className="text-xs text-muted-foreground">7 proyectos</span>
        </div>
        <Carousel images={CAROUSEL_IMAGES} />
      </section>

      {/* MARQUEE */}
      <section className="mt-12 py-4 border-y border-border bg-card/40 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 items-center text-primary/80 font-semibold tracking-widest text-sm uppercase">
              <span>★ Más Ventas</span>
              <span>★ Diseño Premium</span>
              <span>★ Resultados Reales</span>
              <span>★ Landing Bio Pro</span>
              <span>★ Bolivia 🇧🇴</span>
              <span>★ Conversión +</span>
            </div>
          ))}
        </div>
      </section>

      {/* HELP / CONTACT */}
      <section className="px-5 max-w-xl mx-auto mt-12 space-y-4">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative overflow-hidden rounded-3xl border border-[var(--whatsapp)]/40 bg-gradient-to-br from-[var(--whatsapp)]/15 to-transparent p-6 transition hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="size-14 rounded-2xl bg-[var(--whatsapp)]/20 flex items-center justify-center text-[var(--whatsapp)] animate-float">
              <Phone className="size-7" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--whatsapp)]">Ayuda & Asistencia</p>
              <p className="font-bold text-lg">{WHATSAPP_NUMBER}</p>
              <p className="text-sm text-muted-foreground">Escríbenos por WhatsApp — Bolivia 🇧🇴</p>
            </div>
          </div>
        </a>

        <div className="rounded-3xl border border-border bg-card p-6 flex items-start gap-4">
          <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <MapPin className="size-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Nuestra dirección</p>
            <p className="font-medium mt-1">{ADDRESS}</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 py-8 px-5 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} — Landing Page Bio · Hecho con ♥ en Santa Cruz, Bolivia</p>
      </footer>
    </main>
  );
}
