import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "../public/assets/poppins-400.ttf", weight: "400" },
    { path: "../public/assets/poppins-500.ttf", weight: "500 700" },
  ],
  variable: "--font-body",
  display: "swap",
});

const manrope = localFont({
  src: [
    { path: "../public/assets/manrope-600.ttf", weight: "400 600" },
    { path: "../public/assets/manrope-800.ttf", weight: "700 900" },
  ],
  variable: "--font-display",
  display: "swap",
});

const archivo = localFont({
  src: "../public/assets/archivo-black.ttf",
  weight: "400",
  variable: "--font-hero",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Felix Controls Limited | Engineering Better Buildings",
  description:
    "Felix Controls Limited. Building management, automation, fire safety and integrated engineering solutions in Bangladesh since 2010.",
  icons: { icon: "/assets/felix-logo-transparent.png" },
};

export const viewport: Viewport = { themeColor: "#186636" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${poppins.variable} ${manrope.variable} ${archivo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
