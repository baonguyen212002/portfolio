import { profile, socials } from "../data/portfolio";
import { SocialIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-cyan font-mono text-background">
            S
          </span>
          <span className="font-mono text-sm text-foreground-muted">
            © {year} {profile.name}. Crafted with Next.js & Tailwind.
          </span>
        </div>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-foreground-dim transition-colors hover:text-accent"
            >
              <SocialIcon name={s.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
