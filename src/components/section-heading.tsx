type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeading({ number, eyebrow, title, description, inverted = false }: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-7 border-t border-current/20 pt-5 lg:mb-16 lg:grid-cols-[0.32fr_1fr]">
      <div className={`eyebrow ${inverted ? "text-white/65" : "text-black/65"}`}>
        {number} / {eyebrow}
      </div>
      <div>
        <h2 className="font-brand max-w-4xl text-4xl leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
          {title}
        </h2>
        {description ? (
          <p className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${inverted ? "text-white/70" : "text-black/65"}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
