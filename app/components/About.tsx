import { profile } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    icon: "🚀",
    title: "Performance first",
    text: "Optimizing queries, response times and resource usage from the very first commit.",
  },
  {
    icon: "🧩",
    title: "Clean architecture",
    text: "Modular code with clear separation of concerns — easy to maintain and scale across a team.",
  },
  {
    icon: "🎯",
    title: "Business-driven",
    text: "Code that serves business goals, not just technical showmanship.",
  },
  {
    icon: "📚",
    title: "Always learning",
    text: "Keeping up with new technologies and judging when they're worth adopting.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="01 — About"
          title="A little about me"
          description="Good products are built on solid engineering and real empathy for the people using them."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {profile.bio.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-foreground-muted sm:text-lg"
              >
                {p}
              </p>
            ))}

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent transition-colors hover:text-highlight"
              >
                Let's work together →
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="glass card-glow rounded-2xl p-6"
              >
                <div className="mb-3 text-3xl">{h.icon}</div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-muted">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
