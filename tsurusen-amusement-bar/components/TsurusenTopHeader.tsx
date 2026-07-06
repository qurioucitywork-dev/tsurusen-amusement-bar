"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  CircleHelp,
  FileText,
  Gift,
  Home,
  MapPin,
  Menu,
  Mic2,
  Tag,
  Utensils,
  Wine,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState, type CSSProperties } from "react";

type HeaderItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  group?: "menu";
  paths?: string[];
};

const headerNavItems: HeaderItem[] = [
  { label: "HOME", href: "/", icon: Home, paths: ["/"] },
  { label: "PRICE", href: "/pricing", icon: Tag, group: "menu", paths: ["/pricing", "/system"] },
  { label: "DRINK MENU", href: "/drink-menu", icon: Wine, group: "menu", paths: ["/drink-menu", "/drink"] },
  { label: "FOOD MENU", href: "/food-menu", icon: Utensils, group: "menu", paths: ["/food-menu", "/food"] },
  { label: "ACCESS", href: "/access", icon: MapPin, paths: ["/access"] },
  { label: "BLOG", href: "/blog", icon: FileText, paths: ["/blog", "/news", "/news-room"] },
  { label: "CAMPAIGN", href: "/campaigns", icon: Gift, paths: ["/campaign", "/campaigns"] },
  { label: "ENTERTAINMENT", href: "/entertainment", icon: Mic2, paths: ["/entertainment", "/play"] },
  { label: "EVENTS", href: "/events", icon: CalendarDays, paths: ["/events", "/event"] },
  { label: "FAQ", href: "/faq", icon: CircleHelp, paths: ["/faq"] },
];

const topHeaderCss = `
.tsurusen-top-header {
  --gold: #efc874;
  --gold-soft: rgba(239, 200, 116, 0.72);
  --paper: #fff8ea;
  position: relative;
  z-index: 80;
  width: 100%;
  min-height: clamp(98px, 8.7vw, 150px);
  overflow: visible;
  border-bottom: 1px solid rgba(239, 200, 116, 0.34);
  background:
    radial-gradient(circle at 28% 0%, rgba(239, 200, 116, 0.15), transparent 18%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.91) 68%, rgba(0, 0, 0, 0.42)),
    url("/assets/tsurusen-home/webp/section-01-hero-textless-ai.webp") center 9% / cover no-repeat,
    #050504;
  color: var(--paper);
  font-family: var(--font-oswald), var(--font-bebas), "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern";
}

.tsurusen-top-header,
.tsurusen-top-header * {
  box-sizing: border-box;
}

.tsurusen-top-header__shell {
  display: flex;
  width: 100%;
  max-width: 1500px;
  min-height: inherit;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: clamp(10px, 1.05vw, 20px);
  padding: clamp(14px, 1.35vw, 26px) clamp(24px, 2.35vw, 48px) clamp(10px, 0.9vw, 18px);
}

.tsurusen-top-header__brand,
.tsurusen-top-header__nav-item,
.tsurusen-top-header__toggle {
  min-width: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

.tsurusen-top-header__brand {
  display: grid;
  flex: 0 0 clamp(300px, 22vw, 430px);
  min-height: clamp(72px, 6.2vw, 112px);
  grid-template-columns: clamp(56px, 5vw, 88px) minmax(0, 1fr);
  column-gap: clamp(15px, 1.35vw, 26px);
  align-items: center;
  color: var(--gold);
}

.tsurusen-top-header__mark {
  position: relative;
  display: block;
  width: clamp(52px, 4.55vw, 82px);
  height: clamp(52px, 4.55vw, 82px);
  border: 2px solid rgba(255, 239, 189, 0.88);
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%, rgba(239, 200, 116, 0.18), transparent 58%),
    rgba(8, 8, 7, 0.2);
  box-shadow:
    0 0 clamp(16px, 1.5vw, 28px) rgba(239, 200, 116, 0.42),
    inset 0 0 clamp(9px, 0.8vw, 16px) rgba(239, 200, 116, 0.14);
}

.tsurusen-top-header__mark::before,
.tsurusen-top-header__mark::after {
  position: absolute;
  left: 50%;
  top: 43%;
  width: 46%;
  height: 24%;
  border-top: 2px solid rgba(255, 239, 189, 0.9);
  border-radius: 50% 50% 0 0;
  content: "";
}

.tsurusen-top-header__mark::before {
  transform: translate(-88%, -50%) rotate(24deg);
}

.tsurusen-top-header__mark::after {
  transform: translate(-12%, -50%) rotate(-24deg);
}

.tsurusen-top-header__stem {
  position: absolute;
  left: 50%;
  top: 36%;
  width: 2px;
  height: 45%;
  background: rgba(255, 239, 189, 0.92);
  transform: translateX(-50%);
}

.tsurusen-top-header__copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.tsurusen-top-header__kicker,
.tsurusen-top-header__name,
.tsurusen-top-header__label,
.tsurusen-top-header__sub {
  display: block;
  max-width: 100%;
  overflow: hidden;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
  text-shadow:
    0 0 clamp(7px, 0.65vw, 12px) rgba(239, 200, 116, 0.32),
    0 2px 6px rgba(0, 0, 0, 0.94);
}

.tsurusen-top-header__kicker {
  font-size: clamp(12px, 0.95vw, 19px);
  letter-spacing: 0.18em;
  line-height: 1.35;
}

.tsurusen-top-header__name {
  margin-top: clamp(8px, 0.65vw, 13px);
  font-size: clamp(32px, 2.55vw, 50px);
  letter-spacing: 0.06em;
  line-height: 1.18;
}

.tsurusen-top-header__desktop-nav {
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(5px, 0.65vw, 14px);
}

.tsurusen-top-header__menu-group {
  display: grid;
  flex: 0 0 clamp(260px, 24vw, 390px);
  height: clamp(76px, 7.1vw, 130px);
  grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1.15fr) 1px minmax(0, 1.1fr);
  align-items: center;
  overflow: hidden;
  border: 1px solid rgba(216, 180, 106, 0.5);
  border-radius: clamp(14px, 1.4vw, 26px);
  background:
    linear-gradient(180deg, rgba(255, 247, 220, 0.04), rgba(255, 247, 220, 0)),
    rgba(7, 6, 5, 0.34);
  box-shadow:
    inset 0 0 clamp(12px, 1vw, 20px) rgba(239, 200, 116, 0.035),
    0 0 clamp(14px, 1.15vw, 24px) rgba(216, 180, 106, 0.09);
}

.tsurusen-top-header__divider {
  display: block;
  width: 100%;
  height: 52%;
  background: linear-gradient(180deg, transparent, rgba(216, 180, 106, 0.42), transparent);
}

.tsurusen-top-header__nav-item {
  position: relative;
  display: flex;
  flex: 0 0 calc(var(--nav-basis, 72) * 0.88px);
  width: calc(var(--nav-basis, 72) * 0.88px);
  min-width: clamp(48px, 4vw, 72px);
  height: clamp(76px, 7.1vw, 130px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(10px, 0.75vw, 14px) clamp(3px, 0.5vw, 9px);
  text-align: center;
  transition:
    color 250ms ease,
    filter 250ms ease,
    transform 250ms ease,
    background 250ms ease,
    box-shadow 250ms ease;
}

.tsurusen-top-header__menu-group .tsurusen-top-header__nav-item {
  width: 100%;
  min-width: 0;
  height: 100%;
  flex: 1 1 auto;
}

.tsurusen-top-header__nav-item svg {
  width: clamp(28px, 2.3vw, 44px);
  height: clamp(28px, 2.3vw, 44px);
  flex: 0 0 auto;
  color: var(--gold);
  stroke-width: 1.65;
  filter:
    drop-shadow(0 0 8px rgba(239, 200, 116, 0.44))
    drop-shadow(0 2px 5px rgba(0, 0, 0, 0.9));
}

.tsurusen-top-header__label {
  margin-top: clamp(10px, 0.85vw, 16px);
  color: var(--paper);
  font-size: calc(var(--header-font-size, 16) * 0.74px);
  letter-spacing: 0.06em;
  line-height: 1.34;
}

.tsurusen-top-header__sub {
  margin-top: clamp(4px, 0.4vw, 8px);
  color: rgba(255, 248, 234, 0.78);
  font-size: 9px;
  letter-spacing: 0.04em;
  line-height: 1.25;
}

.tsurusen-top-header__nav-item[data-active="true"] {
  color: var(--gold);
  background:
    radial-gradient(circle at 50% 24%, rgba(239, 200, 116, 0.28), transparent 46%),
    linear-gradient(180deg, rgba(239, 200, 116, 0.16), rgba(239, 200, 116, 0.055));
  box-shadow:
    inset 0 0 clamp(24px, 2.2vw, 42px) rgba(239, 200, 116, 0.12),
    0 0 clamp(16px, 1.5vw, 30px) rgba(239, 200, 116, 0.2);
}

.tsurusen-top-header__nav-item[data-active="true"] svg,
.tsurusen-top-header__nav-item[data-active="true"] .tsurusen-top-header__label {
  color: var(--gold);
  text-shadow:
    0 0 12px rgba(239, 200, 116, 0.52),
    0 2px 6px rgba(0, 0, 0, 0.96);
}

.tsurusen-top-header__nav-item[data-active="true"]::after {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: max(3px, 0.22vw);
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, #efc874 14%, #fff0ae 50%, #efc874 86%, transparent);
  box-shadow: 0 0 12px rgba(239, 200, 116, 0.55);
  content: "";
  transform: translateX(-50%);
}

.tsurusen-top-header__nav-item:hover {
  transform: translateY(-1px);
  filter: drop-shadow(0 0 clamp(8px, 0.8vw, 16px) rgba(239, 200, 116, 0.34));
}

.tsurusen-top-header__toggle,
.tsurusen-top-header__mobile-panel {
  display: none;
}

@media (max-width: 1320px) {
  .tsurusen-top-header__brand {
    flex-basis: clamp(250px, 21vw, 320px);
  }

  .tsurusen-top-header__desktop-nav {
    gap: 4px;
  }

  .tsurusen-top-header__nav-item {
    min-width: 44px;
  }
}

@media (max-width: 1100px) {
  .tsurusen-top-header__brand {
    flex-basis: 230px;
    grid-template-columns: 50px minmax(0, 1fr);
  }

  .tsurusen-top-header__mark {
    width: 48px;
    height: 48px;
  }

  .tsurusen-top-header__kicker {
    font-size: 10px;
  }

  .tsurusen-top-header__name {
    font-size: 27px;
  }

  .tsurusen-top-header__menu-group {
    flex-basis: 270px;
  }

  .tsurusen-top-header__label {
    font-size: calc(var(--header-font-size, 14) * 0.66px);
  }
}

@media (max-width: 900px) {
  .tsurusen-top-header {
    min-height: 74px;
  }

  .tsurusen-top-header__shell {
    padding: 10px 14px;
  }

  .tsurusen-top-header__brand {
    flex: 0 1 min(72vw, 230px);
    min-height: 50px;
    grid-template-columns: 44px minmax(0, 1fr);
    column-gap: 12px;
  }

  .tsurusen-top-header__mark {
    width: 38px;
    height: 38px;
    border-width: 1px;
  }

  .tsurusen-top-header__kicker {
    font-size: 9px;
    letter-spacing: 2.2px;
  }

  .tsurusen-top-header__name {
    margin-top: 6px;
    font-size: 24px;
    letter-spacing: 5px;
  }

  .tsurusen-top-header__desktop-nav {
    display: none;
  }

  .tsurusen-top-header__toggle {
    display: inline-flex;
    width: 46px;
    height: 46px;
    margin-left: auto;
    flex: 0 0 46px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(216, 180, 106, 0.76);
    border-radius: 14px;
    color: var(--gold);
    background: rgba(5, 5, 4, 0.58);
    box-shadow:
      0 0 14px rgba(216, 180, 106, 0.16),
      inset 0 0 12px rgba(239, 200, 116, 0.04);
  }

  .tsurusen-top-header__toggle svg {
    width: 24px;
    height: 24px;
  }

  .tsurusen-top-header__mobile-panel[data-open="true"] {
    position: absolute;
    left: 12px;
    right: 12px;
    top: calc(100% + 8px);
    z-index: 100;
    display: grid;
    max-height: calc(100dvh - 92px);
    gap: 6px;
    overflow-y: auto;
    border: 1px solid rgba(216, 180, 106, 0.72);
    border-radius: 18px;
    padding: 10px;
    background:
      linear-gradient(180deg, rgba(255, 247, 220, 0.055), rgba(255, 247, 220, 0)),
      rgba(4, 4, 4, 0.96);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.7),
      0 0 18px rgba(216, 180, 106, 0.14);
  }

  .tsurusen-top-header__mobile-panel .tsurusen-top-header__nav-item {
    width: 100%;
    min-height: 46px;
    height: auto;
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: flex-start;
    gap: 12px;
    overflow: hidden;
    border-radius: 12px;
    padding: 8px 12px;
    text-align: left;
  }

  .tsurusen-top-header__mobile-panel .tsurusen-top-header__nav-item svg {
    width: 22px;
    height: 22px;
  }

  .tsurusen-top-header__mobile-panel .tsurusen-top-header__label {
    margin-top: 0;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: left;
  }

  .tsurusen-top-header__mobile-panel .tsurusen-top-header__sub {
    width: auto;
    margin-top: 0;
    margin-left: auto;
    flex: 0 0 auto;
    font-size: 11px;
    letter-spacing: 0.4px;
  }

  .tsurusen-top-header__mobile-panel .tsurusen-top-header__nav-item[data-active="true"]::after {
    left: 44px;
    bottom: 5px;
    width: 46px;
    transform: none;
  }

  .tsurusen-top-header__mobile-group {
    display: grid;
    gap: 4px;
    overflow: hidden;
    border: 1px solid rgba(216, 180, 106, 0.68);
    border-radius: 14px;
    padding: 5px;
    background: rgba(9, 8, 6, 0.56);
  }
}
`;

function itemMetrics(label: string) {
  const basisByLabel: Record<string, number> = {
    HOME: 80,
    ACCESS: 90,
    BLOG: 70,
    CAMPAIGN: 120,
    ENTERTAINMENT: 150,
    EVENTS: 86,
    FAQ: 60,
    PRICE: 92,
    "DRINK MENU": 132,
    "FOOD MENU": 126,
  };

  return {
    basis: basisByLabel[label] ?? 76,
    labelSize: label.length > 12 ? 18 : label.length > 8 ? 19.5 : 21,
  };
}

function pathIsActive(pathname: string, item: HeaderItem, active?: string) {
  if (active) {
    return active.toUpperCase() === item.label;
  }

  if (item.paths?.some((path) => (path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`)))) {
    return true;
  }

  return false;
}

export function TsurusenTopHeader({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const groupedItems = headerNavItems.filter((item) => item.group === "menu");
  const standaloneItems = headerNavItems.filter((item) => item.group !== "menu");

  const renderNavItem = (item: HeaderItem, isMobile = false) => {
    const Icon = item.icon;
    const { basis, labelSize } = itemMetrics(item.label);
    const isActive = pathIsActive(pathname, item, active);

    return (
      <Link
        key={item.label}
        href={item.href}
        className="tsurusen-top-header__nav-item"
        data-active={isActive ? "true" : undefined}
        onClick={() => setMenuOpen(false)}
        style={isMobile ? undefined : ({ "--nav-basis": basis, "--header-font-size": labelSize } as CSSProperties)}
        aria-label={item.label}
      >
        <Icon aria-hidden="true" />
        <span className="tsurusen-top-header__label">{item.label}</span>
      </Link>
    );
  };

  return (
    <header className="tsurusen-top-header" aria-label="Site header">
      <style>{topHeaderCss}</style>
      <div className="tsurusen-top-header__shell">
        <Link href="/" className="tsurusen-top-header__brand" aria-label="TSURUSEN home">
          <span className="tsurusen-top-header__mark" aria-hidden="true">
            <span className="tsurusen-top-header__stem" />
          </span>
          <span className="tsurusen-top-header__copy">
            <span className="tsurusen-top-header__kicker">AMUSEMENT BAR</span>
            <span className="tsurusen-top-header__name">TSURUSEN</span>
          </span>
        </Link>

        <nav className="tsurusen-top-header__desktop-nav" aria-label="Header menu">
          {renderNavItem(standaloneItems[0])}
          <div className="tsurusen-top-header__menu-group" aria-label="Price, drink menu and food menu">
            {groupedItems.map((item, index) => [
              index > 0 ? <span key={`${item.label}-divider`} className="tsurusen-top-header__divider" aria-hidden="true" /> : null,
              renderNavItem(item),
            ])}
          </div>
          {standaloneItems.slice(1).map((item) => renderNavItem(item))}
        </nav>

        <button
          type="button"
          className="tsurusen-top-header__toggle"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          aria-controls="tsurusen-top-header-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X strokeWidth={1.8} aria-hidden="true" /> : <Menu strokeWidth={1.8} aria-hidden="true" />}
        </button>

        <nav
          id="tsurusen-top-header-mobile-menu"
          className="tsurusen-top-header__mobile-panel"
          data-open={menuOpen ? "true" : undefined}
          aria-label="Mobile header menu"
        >
          {renderNavItem(standaloneItems[0], true)}
          <div className="tsurusen-top-header__mobile-group" aria-label="Price, drink menu and food menu">
            {groupedItems.map((item) => renderNavItem(item, true))}
          </div>
          {standaloneItems.slice(1).map((item) => renderNavItem(item, true))}
        </nav>
      </div>
    </header>
  );
}
