import Image from "next/image";

type BrandLogoProps = {
  preload?: boolean;
  size?: "header" | "hero" | "footer";
};

export function BrandLogo({ preload = false, size = "header" }: BrandLogoProps) {
  if (size === "hero") {
    return (
      <Image
        src="/brand/tini-flegar-banner-dark.png"
        alt="Tini Flegar — Software · IT · Fullstack"
        width={1200}
        height={675}
        preload={preload}
        sizes="(max-width: 640px) 90vw, 32rem"
        className="h-auto w-full rounded-sm object-contain"
      />
    );
  }

  return (
    <span className="flex items-center gap-3">
      <Image
        src="/brand/tini-flegar-profile-dark.png"
        alt=""
        width={768}
        height={768}
        preload={preload}
        sizes={size === "footer" ? "44px" : "40px"}
        className={`${size === "footer" ? "h-11 w-11" : "h-10 w-10"} rounded-full border border-white/15 object-cover`}
      />
      <span className="min-w-0 leading-none">
        <span className="font-brand block truncate text-xl font-semibold tracking-tight text-white">
          Tini Flegar
        </span>
        <span className="mt-1 block truncate text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Full-Stack Developer
        </span>
      </span>
    </span>
  );
}
