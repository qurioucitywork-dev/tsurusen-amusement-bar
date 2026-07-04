import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const display = Be_Vietnam_Pro({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
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
    <html lang="ja" className={`${display.variable} h-full antialiased`}>
      <body className="min-h-full bg-obsidian text-ink">
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
