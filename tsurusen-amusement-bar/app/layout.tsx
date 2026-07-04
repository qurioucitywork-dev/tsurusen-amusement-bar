import type { Metadata } from "next";
import { Bebas_Neue, Be_Vietnam_Pro, Noto_Sans_JP, Oswald } from "next/font/google";
import "./globals.css";

const display = Be_Vietnam_Pro({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ENTERTAINMENT | TSURUSEN",
    template: "%s | TSURUSEN",
  },
  description: "TSURUSENのエンターテインメントページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${display.variable} ${bebas.variable} ${oswald.variable} ${notoSansJp.variable} h-full antialiased`}>
      <body className="min-h-full bg-obsidian text-ink">
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
