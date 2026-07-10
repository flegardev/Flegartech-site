import Image from "next/image";

type BrandLogoProps = {
  preload?: boolean;
  size?: "header" | "hero" | "footer";
};

const sizes = {
  header: {
    width: 188,
    height: 45,
    className: "h-10 w-auto max-w-[13rem]",
  },
  hero: {
    width: 360,
    height: 86,
    className: "h-auto w-full max-w-[23rem]",
  },
  footer: {
    width: 210,
    height: 50,
    className: "h-11 w-auto max-w-[14rem]",
  },
};

export function BrandLogo({ preload = false, size = "header" }: BrandLogoProps) {
  const config = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt="FlegarTech logo"
      width={config.width}
      height={config.height}
      preload={preload}
      className={`${config.className} object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.22)]`}
    />
  );
}
