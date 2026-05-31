import { profile, socials } from "../data/portfolio";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  LocationIcon,
  SocialIcon,
} from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-cyan/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 font-mono text-xs text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              Sẵn sàng nhận dự án mới
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-foreground-muted text-2xl sm:text-3xl mb-3 font-normal">
                Xin chào, mình là
              </span>
              <span className="text-gradient">{profile.name}</span>
              <span className="inline-block w-1 h-12 sm:h-14 lg:h-16 ml-1 bg-accent translate-y-1 animate-blink" />
            </h1>

            <h2 className="mb-6 font-mono text-lg text-foreground-muted sm:text-xl">
              &gt; {profile.role}
            </h2>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-4 text-sm text-foreground-dim">
              <div className="flex items-center gap-2">
                <LocationIcon className="h-4 w-4 text-accent" />
                {profile.location}
              </div>
              <span className="h-1 w-1 rounded-full bg-foreground-dim" />
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-accent transition-colors"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-cyan px-6 py-3 font-medium text-background shadow-[0_8px_30px_-8px_rgba(56,189,248,0.6)] transition-all hover:shadow-[0_12px_40px_-8px_rgba(56,189,248,0.8)] hover:-translate-y-0.5"
              >
                Xem dự án
                <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3 font-medium text-foreground transition-all hover:border-accent/50 hover:bg-surface"
              >
                <DownloadIcon className="h-4 w-4" />
                Liên hệ
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/50 text-foreground-muted transition-all hover:-translate-y-1 hover:border-accent/50 hover:bg-surface hover:text-accent"
                >
                  <SocialIcon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 animate-pulse-glow rounded-3xl bg-gradient-to-br from-accent/30 via-cyan/20 to-accent-strong/30 blur-2xl" />
              <div className="glass relative h-full w-full rounded-3xl p-6 animate-float">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>
                  <span className="font-mono text-xs text-foreground-dim">
                    ~/shino/profile.ts
                  </span>
                </div>
                <pre className="font-mono text-[13px] leading-relaxed text-foreground-muted">
                  <span className="text-foreground-dim">1</span>
                  {"  "}
                  <span className="text-accent">const</span>{" "}
                  <span className="text-highlight">developer</span>{" "}
                  <span className="text-foreground">=</span>{" "}
                  <span className="text-foreground">{"{"}</span>
                  {"\n"}
                  <span className="text-foreground-dim">2</span>
                  {"    "}
                  <span className="text-cyan">name</span>
                  <span className="text-foreground">:</span>{" "}
                  <span className="text-green-300">&quot;Shino&quot;</span>
                  <span className="text-foreground">,</span>
                  {"\n"}
                  <span className="text-foreground-dim">3</span>
                  {"    "}
                  <span className="text-cyan">role</span>
                  <span className="text-foreground">:</span>{" "}
                  <span className="text-green-300">&quot;Backend&quot;</span>
                  <span className="text-foreground">,</span>
                  {"\n"}
                  <span className="text-foreground-dim">4</span>
                  {"    "}
                  <span className="text-cyan">stack</span>
                  <span className="text-foreground">:</span>{" "}
                  <span className="text-foreground">[</span>
                  {"\n"}
                  <span className="text-foreground-dim">5</span>
                  {"      "}
                  <span className="text-green-300">&quot;Laravel&quot;</span>
                  <span className="text-foreground">,</span>{" "}
                  <span className="text-green-300">&quot;PHP&quot;</span>
                  <span className="text-foreground">,</span>
                  {"\n"}
                  <span className="text-foreground-dim">6</span>
                  {"      "}
                  <span className="text-green-300">&quot;MySQL&quot;</span>
                  <span className="text-foreground">,</span>{" "}
                  <span className="text-green-300">&quot;Nginx&quot;</span>
                  {"\n"}
                  <span className="text-foreground-dim">7</span>
                  {"    "}
                  <span className="text-foreground">],</span>
                  {"\n"}
                  <span className="text-foreground-dim">8</span>
                  {"    "}
                  <span className="text-cyan">available</span>
                  <span className="text-foreground">:</span>{" "}
                  <span className="text-orange-300">true</span>
                  <span className="text-foreground">,</span>
                  {"\n"}
                  <span className="text-foreground-dim">9</span>
                  {"  "}
                  <span className="text-foreground">{"}"}</span>
                  {"\n"}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {profile.stats.map((s) => (
            <div
              key={s.label}
              className="glass card-glow rounded-2xl p-5 text-center"
            >
              <div className="text-gradient text-3xl font-bold sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-foreground-dim sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
