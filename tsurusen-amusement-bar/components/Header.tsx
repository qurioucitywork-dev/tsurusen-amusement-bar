import Link from "next/link";
import { CalendarClock, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-obsidian/88 backdrop-blur-xl">
      <div className="site-container flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" className="group flex min-h-12 min-w-0 flex-col justify-center" aria-label={`${siteConfig.name} トップへ`}>
          <span className="block font-display text-2xl font-black leading-none text-ink md:text-3xl">
            TSURUSEN
          </span>
          <span className="block text-[10px] font-black text-cyan">
            KABUKICHO PLAY BAR
          </span>
        </Link>
        <nav className="hidden items-center gap-4 xl:flex" aria-label="グローバルナビゲーション">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 min-w-11 items-center justify-center font-display text-xs font-black uppercase text-ink hover:text-amber"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <a href={`tel:${siteConfig.phone}`} className="button-secondary min-h-11 px-4">
            <Phone size={15} aria-hidden="true" />
            TEL
          </a>
          <Link href={siteConfig.reservationUrl} className="button-primary min-h-11 px-4">
            <CalendarClock size={15} aria-hidden="true" />
            WEB予約
          </Link>
        </div>
        <div className="ml-auto hidden md:block xl:hidden">
          <Link href={siteConfig.reservationUrl} className="button-primary min-h-11 px-4">
            <CalendarClock size={15} aria-hidden="true" />
            予約
          </Link>
        </div>
        <MobileMenu
          conceptLine={siteConfig.conceptLine}
          nav={siteConfig.nav}
          lineUrl={siteConfig.lineUrl}
          phone={siteConfig.phone}
          reservationUrl={siteConfig.reservationUrl}
        />
      </div>
    </header>
  );
}
