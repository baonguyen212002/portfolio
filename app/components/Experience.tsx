import { experiences } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="04 — Hành trình"
          title="Kinh nghiệm làm việc"
          description="Những vị trí đã đi qua và những bài học rút ra từ thực chiến."
        />

        <div className="relative">
          <div
            className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:left-4"
            aria-hidden
          />

          <ol className="space-y-10">
            {experiences.map((exp) => (
              <li key={`${exp.role}-${exp.period}`} className="relative pl-12 sm:pl-16">
                <span
                  className="absolute left-0 top-1.5 grid h-7 w-7 place-items-center rounded-full border border-accent/40 bg-background sm:h-9 sm:w-9"
                  aria-hidden
                >
                  <span className="h-3 w-3 rounded-full bg-gradient-to-br from-accent to-cyan shadow-[0_0_12px_2px_rgba(56,189,248,0.6)]" />
                </span>

                <div className="glass rounded-2xl p-6">
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="text-sm text-accent">
                        @ {exp.company}
                        <span className="ml-2 text-foreground-dim">
                          · {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="rounded-full border border-border bg-surface/50 px-3 py-1 font-mono text-xs text-foreground-muted">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mb-4 space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed text-foreground-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border/60 bg-surface/40 px-2 py-0.5 font-mono text-[11px] text-foreground-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
