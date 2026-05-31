import { skills } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="02 — Tech stack"
          title="Tools I work with daily"
          description="The main technologies I've used across production projects."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category) => (
            <div
              key={category.title}
              className="glass card-glow group rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-cyan/20 text-2xl">
                  {category.icon}
                </span>
                <h3 className="font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border/60 bg-surface/40 px-2.5 py-1 font-mono text-xs text-foreground-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
