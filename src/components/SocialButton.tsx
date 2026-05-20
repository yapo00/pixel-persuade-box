import { ReactNode } from "react";

type Variant = "facebook" | "whatsapp" | "instagram" | "tiktok";

interface Props {
  href: string;
  variant: Variant;
  label: string;
  handle: string;
  detail: string;
  icon: ReactNode;
}

const styles: Record<Variant, string> = {
  facebook:
    "bg-[var(--facebook)]/10 border-[var(--facebook)]/40 hover:bg-[var(--facebook)]/20 hover:shadow-[0_0_40px_-8px_var(--facebook)]",
  whatsapp:
    "bg-[var(--whatsapp)]/10 border-[var(--whatsapp)]/40 hover:bg-[var(--whatsapp)]/20 hover:shadow-[0_0_40px_-8px_var(--whatsapp)]",
  instagram:
    "bg-gradient-to-br from-[var(--instagram-from)]/10 via-[var(--instagram-via)]/10 to-[var(--instagram-to)]/10 border-[var(--instagram-via)]/40 hover:from-[var(--instagram-from)]/20 hover:via-[var(--instagram-via)]/20 hover:to-[var(--instagram-to)]/20 hover:shadow-[0_0_40px_-8px_var(--instagram-via)]",
  tiktok:
    "bg-gradient-to-br from-[var(--tiktok-cyan)]/10 to-[var(--tiktok-pink)]/10 border-white/20 hover:from-[var(--tiktok-cyan)]/20 hover:to-[var(--tiktok-pink)]/20 hover:shadow-[0_0_40px_-8px_var(--tiktok-pink)]",
};

const iconColor: Record<Variant, string> = {
  facebook: "text-[var(--facebook)]",
  whatsapp: "text-[var(--whatsapp)]",
  instagram: "text-[var(--instagram-via)]",
  tiktok: "text-[var(--tiktok-cyan)]",
};

export function SocialButton({ href, variant, label, handle, detail, icon }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-2xl border backdrop-blur-sm p-5 flex items-center gap-4 transition-all duration-500 hover:-translate-y-1 ${styles[variant]}`}
    >
      <div
        className={`shrink-0 size-14 rounded-xl bg-background/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${iconColor[variant]}`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="font-semibold text-foreground">{label}</p>
          <span className="text-xs text-muted-foreground">{handle}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{detail}</p>
      </div>
      <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}
