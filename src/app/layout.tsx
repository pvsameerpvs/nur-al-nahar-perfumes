import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import SiteShell from "@/components/site-shell";

const sans = localFont({
  src: "../fonts/Inter-Variable.woff2",
  variable: "--font-sans",
  display: "swap",
});

const serif = localFont({
  src: "../fonts/PlayfairDisplay-Variable.woff2",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: { default: "NUR AL NAHAR Perfumes L.L.C", template: "%s — NUR AL NAHAR" },
  description:
    "Next-generation perfume house in Dubai. Arabic × French fragrance fusion. Quality over hype. Designed for Dubai lifestyle.",
  openGraph: {
    title: "NUR AL NAHAR Perfumes L.L.C",
    description:
      "Next-generation perfume house in Dubai. Arabic × French fragrance fusion. Quality over hype.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} dark`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
