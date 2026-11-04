import Image from "next/image";
import type { CSSProperties } from "react";
import logoAssets from "@/lib/company-logos.json";

type LogoAsset = {
  file: string;
  width: number;
  height: number;
  bounds: number[];
};

export function CompanyLogo({
  name,
  alt,
  width,
  height,
}: {
  name: string;
  alt: string;
  width: number;
  height: number;
}) {
  const logo = (logoAssets as Record<string, LogoAsset>)[name];
  const [left, top, visibleWidth, visibleHeight] = logo.bounds;
  const scale = Math.min(width * 0.94 / visibleWidth, height * 0.88 / visibleHeight);

  return (
    <span
      className="company-logo relative block shrink-0 overflow-hidden w-[var(--logo-width)] max-w-full"
      style={{
        "--logo-width": `${width}px`,
        aspectRatio: `${width} / ${height}`,
      } as CSSProperties}
    >
      <Image
        src={logo.file}
        alt={alt}
        width={logo.width}
        height={logo.height}
        className="absolute max-w-none!"
        style={{
          width: `${logo.width * scale / width * 100}%`,
          height: `${logo.height * scale / height * 100}%`,
          left: `${((width - visibleWidth * scale) / 2 - left * scale) / width * 100}%`,
          top: `${((height - visibleHeight * scale) / 2 - top * scale) / height * 100}%`,
        }}
        unoptimized
      />
    </span>
  );
}
