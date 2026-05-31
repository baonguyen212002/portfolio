import { projects } from "../data/portfolio";
import { ArrowUpRightIcon, ExternalLinkIcon, GithubIcon } from "./Icons";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="03 — Projects"
          title="Things I've built"
          description="A selection of projects — from commercial products to internal systems."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`glass card-glow group relative overflow-hidden rounded-2xl ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              } ${index === 0 ? "lg:row-span-1" : ""}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-accent-soft to-surface-elevated">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="absolute inset-0 grid place-items-center text-7xl">
                  <span className="transition-transform duration-500 group-hover:scale-110">
                    {project.image}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute right-3 top-3 rounded-full border border-cyan/40 bg-cyan/20 px-3 py-1 font-mono text-xs text-highlight backdrop-blur">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <div className="flex shrink-0 gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-foreground-dim transition-colors hover:text-accent"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Demo"
                        className="text-foreground-dim transition-colors hover:text-accent"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-foreground-muted">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border/60 bg-surface/40 px-2 py-0.5 font-mono text-[11px] text-foreground-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/baonguyen212002"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3 font-medium text-foreground transition-all hover:border-accent/50 hover:bg-surface"
          >
            See more on GitHub
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}
