type BrandLogoProps = {
  size?: "header" | "footer";
  inverted?: boolean;
};

export function BrandLogo({ size = "header", inverted = false }: BrandLogoProps) {
  const foreground = inverted ? "text-white" : "text-black";
  const muted = inverted ? "text-white/70" : "text-black/65";

  return (
    <span className={`inline-flex items-center ${size === "footer" ? "gap-5" : "gap-3.5"}`}>
      <span
        aria-hidden="true"
        className={`font-brand grid shrink-0 place-items-center border ${
          size === "footer" ? "h-16 w-16 text-[2.7rem]" : "h-11 w-11 text-[1.95rem]"
        } ${inverted ? "border-white/35" : "border-black/20"} ${foreground}`}
      >
        F
      </span>
      <span className="min-w-0">
        <span
          className={`font-brand block leading-none tracking-[-0.03em] ${
            size === "footer" ? "text-3xl" : "text-[1.35rem]"
          } ${foreground}`}
        >
          FlegarDev
        </span>
        <span className={`my-1.5 block h-px w-full ${inverted ? "bg-white/45" : "bg-black/35"}`} />
        <span className={`block whitespace-nowrap text-[0.52rem] font-semibold uppercase tracking-[0.23em] ${muted}`}>
          Software · IT · Fullstack
        </span>
      </span>
    </span>
  );
}
