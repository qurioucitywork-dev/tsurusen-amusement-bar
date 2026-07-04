"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type MobileMenuNavItem = {
  label: string;
  ja: string;
  href: string;
};

type MobileMenuProps = {
  conceptLine: string;
  nav: MobileMenuNavItem[];
  lineUrl: string;
  phone: string;
  reservationUrl: string;
};

export function MobileMenu({ conceptLine, nav, lineUrl, phone, reservationUrl }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const Icon = open ? X : Menu;

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="メニューを開閉"
        onClick={() => setOpen((current) => !current)}
        className="grid h-12 w-12 place-items-center rounded-full border border-line bg-graphite/90 text-ink"
      >
        <Icon size={22} aria-hidden="true" />
      </button>
      {open ? (
        <div id="mobile-menu" className="fixed inset-0 top-[76px] z-40 overflow-y-auto bg-obsidian px-4 py-5 md:px-8">
          <div className="mb-4 border border-line bg-graphite p-4">
            <p className="font-display text-xs font-black text-amber">NO. TSU-2026</p>
            <p className="mt-2 text-sm font-bold leading-7 text-mist">{conceptLine}</p>
          </div>
          <nav className="grid gap-2 md:grid-cols-2" aria-label="スマートフォンナビゲーション">
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-16 items-center justify-between border border-line px-4 py-3 ${
                  index % 3 === 0 ? "bg-cyan text-graphite" : index % 3 === 1 ? "bg-coral text-white" : "bg-amber text-graphite"
                }`}
              >
                <span className="font-display text-xl font-black">{item.label}</span>
                <span className="text-xs font-black">{item.ja}</span>
              </Link>
            ))}
          </nav>
          <div className="mt-5 grid gap-2">
            <Link href={reservationUrl} onClick={() => setOpen(false)} className="button-primary w-full">
              WEB予約
            </Link>
            <a href={lineUrl} className="button-secondary w-full">
              LINE予約
            </a>
            <a href={`tel:${phone}`} className="button-secondary w-full">
              電話予約
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
