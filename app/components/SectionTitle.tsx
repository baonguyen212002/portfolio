type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent ${align === "center" ? "" : ""}`}
      >
        <span className="h-1 w-1 rounded-full bg-accent" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-foreground-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
