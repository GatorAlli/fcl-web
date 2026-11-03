import "./tokens.css";
import "./site.css";
import "./about-data.css";
import "./restored-studio.css";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { StudioShell } from "@/components/site/studio-shell";

const manrope = localFont({
  src: [
    { path: "../public/assets/manrope-variable.ttf", weight: "400" },
    { path: "../public/assets/manrope-variable.ttf", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
});
const poppins = localFont({
  src: [
    { path: "../public/assets/poppins-400.ttf", weight: "400" },
    { path: "../public/assets/poppins-700.ttf", weight: "700" },
  ],
  variable: "--font-reading",
  display: "swap",
});
const archivo = localFont({
  src: "../public/assets/archivo-black.ttf",
  weight: "400",
  variable: "--font-impact",
  display: "swap",
});
const plexMono = localFont({
  src: "../public/assets/ibm-plex-mono-400.ttf",
  weight: "400",
  variable: "--font-data",
  display: "swap",
});
const publicSans = localFont({
  src: "../public/assets/public-sans-variable.ttf",
  weight: "100 900",
  variable: "--font-contact-ui",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: process.env.FCL_PUBLIC_URL
    ? new URL(process.env.FCL_PUBLIC_URL)
    : undefined,
  robots:
    process.env.FCL_STATIC_EXPORT === "1"
      ? { index: false, follow: true }
      : undefined,
  title: "Felix Controls Limited | Engineering Better Buildings",
  description:
    "Felix Controls Limited. Building management, automation, fire safety and integrated engineering solutions in Bangladesh since 2010.",
  icons: { icon: "/assets/felix-logo-web.png" },
};

export const viewport: Viewport = { themeColor: "#155430" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${poppins.variable} ${archivo.variable} ${plexMono.variable} ${publicSans.variable}`}
    >
      <body>
        <StudioShell>{children}</StudioShell>
      </body>
    </html>
  );
}
