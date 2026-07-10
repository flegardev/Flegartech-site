export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="reveal mb-12 max-w-3xl">
      <p className="mb-3 text-sm font-semibold text-[#8ac897]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
    </div>
  );
}
