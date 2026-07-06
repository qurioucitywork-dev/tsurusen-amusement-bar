/* eslint-disable @next/next/no-img-element */
import { ArrowRight, CalendarDays, Camera, Grid2X2, Mail, MessageCircle, PlayCircle } from "lucide-react";
import { TsurusenTopHeader } from "./TsurusenTopHeader";

const designWidth = 864;
const designHeight = 1821;
const assetBase = "/assets/tsurusen-news/png";

type PixelTextBlock = {
  as: "h1" | "h2" | "p";
  text: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

const slices = [
  { src: `${assetBase}/section-01-hero.png`, top: 0, height: 300 },
  { src: `${assetBase}/section-02-featured-story.png`, top: 300, height: 320 },
  { src: `${assetBase}/section-03-category-tabs.png`, top: 620, height: 43 },
  { src: `${assetBase}/section-04-latest-news.png`, top: 663, height: 289 },
  { src: `${assetBase}/section-05-breaking-news.png`, top: 952, height: 64 },
  { src: `${assetBase}/section-06-update-campaign-instagram.png`, top: 1016, height: 261 },
  { src: `${assetBase}/section-07-video-news.png`, top: 1277, height: 178 },
  { src: `${assetBase}/section-08-editor-archive-newsletter.png`, top: 1455, height: 179 },
  { src: `${assetBase}/section-09-cta.png`, top: 1634, height: 187 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 143, top: 14, width: 28, height: 25 },
  { label: "ABOUT", href: "/#about", left: 174, top: 14, width: 38, height: 25 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 212, top: 14, width: 82, height: 25 },
  { label: "FOOD MENU", href: "/food-menu", left: 300, top: 14, width: 62, height: 25 },
  { label: "DRINK MENU", href: "/drink-menu", left: 366, top: 14, width: 70, height: 25 },
  { label: "ENTERTAINMENT", href: "/entertainment", left: 443, top: 14, width: 86, height: 25 },
  { label: "SCENES", href: "/#scene", left: 537, top: 14, width: 48, height: 25 },
  { label: "PRIVATE PARTY", href: "/private-party", left: 591, top: 14, width: 84, height: 25 },
  { label: "EVENTS", href: "/events", left: 681, top: 14, width: 48, height: 25 },
  { label: "CAMPAIGNS", href: "/campaigns", left: 730, top: 14, width: 67, height: 25 },
  { label: "REVIEWS", href: "/reviews", left: 608, top: 36, width: 54, height: 1 },
  { label: "SOCIAL HUB", href: "/social", left: 670, top: 36, width: 66, height: 1 },
  { label: "NEWS", href: "/news", left: 737, top: 36, width: 39, height: 1 },
  { label: "ACCESS", href: "/access", left: 777, top: 14, width: 42, height: 25 },
  { label: "RESERVE", href: "/reservation", left: 806, top: 10, width: 43, height: 31 },
];

const anchorTargets = [
  { id: "featured", top: 300 },
  { id: "latest", top: 663 },
  { id: "events", top: 663 },
  { id: "campaign", top: 663 },
  { id: "store", top: 663 },
  { id: "media", top: 663 },
  { id: "press", top: 663 },
  { id: "update", top: 663 },
  { id: "breaking", top: 952 },
  { id: "videos", top: 1277 },
  { id: "video-dj-night", top: 1277 },
  { id: "video-darts", top: 1277 },
  { id: "video-birthday", top: 1277 },
  { id: "video-karaoke", top: 1277 },
  { id: "video-cocktails", top: 1277 },
  { id: "editor", top: 1455 },
  { id: "archive", top: 1455 },
  { id: "newsletter", top: 1455 },
  { id: "reserve", top: 1634 },
];

const categoryButtons = [
  { label: "ALL", href: "/news#latest", left: 126, top: 622, width: 66, height: 29 },
  { label: "EVENT", href: "/news#events", left: 202, top: 622, width: 67, height: 29 },
  { label: "CAMPAIGN", href: "/news#campaign", left: 277, top: 622, width: 68, height: 29 },
  { label: "STORE", href: "/news#store", left: 352, top: 622, width: 67, height: 29 },
  { label: "MEDIA", href: "/news#media", left: 428, top: 622, width: 67, height: 29 },
  { label: "BLOG", href: "/news#latest", left: 503, top: 622, width: 67, height: 29 },
  { label: "PRESS", href: "/news#press", left: 578, top: 622, width: 67, height: 29 },
  { label: "UPDATE", href: "/news#update", left: 653, top: 622, width: 67, height: 29 },
  { label: "GRID", href: "/news#latest", left: 786, top: 622, width: 28, height: 29 },
];

const hitLinks = [
  { label: "Logo", href: "/", left: 18, top: 13, width: 108, height: 24 },
  { label: "Featured previous", href: "/news#featured", left: 29, top: 443, width: 26, height: 26 },
  { label: "Featured next", href: "/news#featured", left: 811, top: 443, width: 26, height: 26 },
  { label: "Featured story", href: "/news#featured", left: 51, top: 313, width: 762, height: 284 },
  { label: "Featured read more", href: "/news/tsurusen-summer-festival-2024", left: 521, top: 546, width: 139, height: 35 },
  { label: "Latest news one", href: "/news/party-evolution", left: 64, top: 706, width: 236, height: 219 },
  { label: "Latest news two", href: "/news/new-cocktail-menu", left: 315, top: 706, width: 236, height: 219 },
  { label: "Latest news three", href: "/news/darts-machine-update", left: 565, top: 706, width: 236, height: 219 },
  { label: "Breaking news detail", href: "/news/heijitsu-nomihodai-plan", left: 646, top: 970, width: 148, height: 28 },
  { label: "Event updates view all", href: "/events", left: 235, top: 1037, width: 43, height: 18 },
  { label: "Campaign news view all", href: "/campaigns", left: 487, top: 1037, width: 43, height: 18 },
  { label: "Instagram picks view all", href: "https://www.instagram.com/", left: 762, top: 1037, width: 43, height: 18 },
  { label: "Darts tournament", href: "/events/darts-tournament-2024", left: 64, top: 1063, width: 214, height: 54 },
  { label: "Karaoke night", href: "/events/karaoke-night", left: 64, top: 1124, width: 214, height: 54 },
  { label: "Summer DJ party", href: "/events/summer-dj-party", left: 64, top: 1185, width: 214, height: 54 },
  { label: "First visit coupon", href: "/campaigns/first-visit-coupon", left: 315, top: 1063, width: 212, height: 54 },
  { label: "Ladies campaign", href: "/campaigns/ladies", left: 315, top: 1124, width: 212, height: 54 },
  { label: "Birthday benefit", href: "/campaigns/birthday", left: 315, top: 1185, width: 212, height: 54 },
  { label: "Instagram pick one", href: "https://www.instagram.com/", left: 565, top: 1067, width: 74, height: 86 },
  { label: "Instagram pick two", href: "https://www.instagram.com/", left: 646, top: 1067, width: 74, height: 86 },
  { label: "Instagram pick three", href: "https://www.instagram.com/", left: 728, top: 1067, width: 74, height: 86 },
  { label: "Instagram pick four", href: "https://www.instagram.com/", left: 565, top: 1160, width: 74, height: 86 },
  { label: "Instagram pick five", href: "https://www.instagram.com/", left: 646, top: 1160, width: 74, height: 86 },
  { label: "Instagram pick six", href: "https://www.instagram.com/", left: 728, top: 1160, width: 74, height: 86 },
  { label: "Video view all", href: "/news#videos", left: 763, top: 1300, width: 43, height: 18 },
  { label: "DJ night highlights video", href: "/news#video-dj-night", left: 63, top: 1324, width: 136, height: 111 },
  { label: "Darts tournament video", href: "/news#video-darts", left: 212, top: 1324, width: 136, height: 111 },
  { label: "Birthday surprise video", href: "/news#video-birthday", left: 361, top: 1324, width: 136, height: 111 },
  { label: "Karaoke party video", href: "/news#video-karaoke", left: 510, top: 1324, width: 136, height: 111 },
  { label: "Summer cocktails video", href: "/news#video-cocktails", left: 659, top: 1324, width: 136, height: 111 },
  { label: "Editor's choice", href: "/news/editors-choice", left: 64, top: 1501, width: 281, height: 100 },
  { label: "Archive", href: "/news#archive", left: 382, top: 1503, width: 176, height: 95 },
  { label: "Newsletter subscribe", href: "/news#newsletter", left: 751, top: 1525, width: 55, height: 30 },
  { label: "Line subscribe", href: "https://line.me/R/ti/p/@tsurusen", left: 604, top: 1584, width: 84, height: 25 },
  { label: "Instagram follow", href: "https://www.instagram.com/", left: 702, top: 1584, width: 104, height: 25 },
  { label: "Floating web reserve", href: "/reservation", left: 794, top: 1547, width: 63, height: 67 },
  { label: "Floating line reserve", href: "https://line.me/R/ti/p/@tsurusen", left: 794, top: 1620, width: 63, height: 66 },
  { label: "Floating instagram", href: "https://www.instagram.com/", left: 794, top: 1693, width: 63, height: 67 },
  { label: "CTA web reserve", href: "/reservation", left: 191, top: 1775, width: 145, height: 36 },
  { label: "CTA line reserve", href: "https://line.me/R/ti/p/@tsurusen", left: 349, top: 1775, width: 146, height: 36 },
  { label: "CTA instagram follow", href: "https://www.instagram.com/", left: 508, top: 1775, width: 160, height: 36 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "h1", text: "NEWS\nROOM", left: 110, top: 70, width: 230, height: 132 },
  { as: "p", text: "Every Update\nBuilds\nThe Story.", left: 110, top: 221, width: 130, height: 66 },
  { as: "h2", text: "TSURUSEN SUMMER\nFESTIVAL 2024", left: 520, top: 387, width: 240, height: 62 },
  { as: "h2", text: "LATEST NEWS", left: 64, top: 678, width: 132, height: 30 },
  { as: "h2", text: "BREAKING NEWS", left: 69, top: 972, width: 138, height: 26 },
  { as: "h2", text: "EVENT UPDATES", left: 64, top: 1035, width: 130, height: 28 },
  { as: "h2", text: "CAMPAIGN NEWS", left: 315, top: 1035, width: 145, height: 28 },
  { as: "h2", text: "INSTAGRAM PICKS", left: 565, top: 1035, width: 150, height: 28 },
  { as: "h2", text: "VIDEO NEWS", left: 64, top: 1296, width: 118, height: 28 },
  { as: "h2", text: "EDITOR'S CHOICE", left: 64, top: 1478, width: 146, height: 28 },
  { as: "h2", text: "ARCHIVE", left: 382, top: 1478, width: 86, height: 28 },
  { as: "h2", text: "NEWSLETTER", left: 596, top: 1478, width: 120, height: 28 },
  { as: "h2", text: "DISCOVER\nWHAT'S NEXT", left: 287, top: 1662, width: 300, height: 78 },
];

const iconLayer = [
  { icon: Grid2X2, left: 791, top: 629, size: 16 },
  { icon: ArrowRight, left: 778, top: 977, size: 17 },
  { icon: PlayCircle, left: 124, top: 1347, size: 34 },
  { icon: PlayCircle, left: 272, top: 1347, size: 34 },
  { icon: PlayCircle, left: 421, top: 1347, size: 34 },
  { icon: PlayCircle, left: 571, top: 1347, size: 34 },
  { icon: PlayCircle, left: 720, top: 1347, size: 34 },
  { icon: Mail, left: 610, top: 1534, size: 13 },
  { icon: CalendarDays, left: 817, top: 1573, size: 22 },
  { icon: MessageCircle, left: 818, top: 1646, size: 22 },
  { icon: Camera, left: 818, top: 1719, size: 22 },
];

const runtimeCss = `
body:has(.tsurusen-news-pixel-page) > header,
body:has(.tsurusen-news-pixel-page) > footer,
body:has(.tsurusen-news-pixel-page) > .mobile-sticky-cta,
body:has(.tsurusen-news-pixel-page) > .skip-link {
  display: none;
}

body:has(.tsurusen-news-pixel-page) main {
  padding-bottom: 0;
}

.tsurusen-news-pixel-page {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #070606;
}

.tsurusen-news-pixel-stage {
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  aspect-ratio: 864 / 1821;
  min-height: 1px;
  overflow: hidden;
  background: #070606;
}

.tsurusen-news-pixel-stage::before {
  position: absolute;
  inset: 0 0 auto;
  z-index: 3;
  height: 3.35%;
  background: #050505;
  content: "";
  pointer-events: none;
}

.tsurusen-news-pixel-stage .pixel-input {
  position: absolute;
  z-index: 4;
  border: 0;
  outline: 0;
  background: rgba(7, 6, 6, 0);
  color: transparent;
  caret-color: transparent;
  font-size: 16px;
  font-family: var(--font-manrope), var(--font-zen), sans-serif;
}

.tsurusen-news-pixel-stage .pixel-input:focus-visible {
  outline: 2px solid rgba(227, 181, 88, 0.96);
  outline-offset: 2px;
}
`;

const xPct = (value: number) => `${(value / designWidth) * 100}%`;
const yPct = (value: number) => `${(value / designHeight) * 100}%`;

function HitLink({ href, label, left, top, width, height }: { href: string; label: string; left: number; top: number; width: number; height: number }) {
  return (
    <a className="pixel-hit" href={href} aria-label={label} style={{ left: xPct(left), top: yPct(top), width: xPct(width), height: yPct(height) }}>
      <span>{label}</span>
    </a>
  );
}

function PixelText({ as, text, left, top, width, height }: PixelTextBlock) {
  const Tag = as;
  return (
    <Tag className="pixel-text" style={{ left: xPct(left), top: yPct(top), width: xPct(width), height: yPct(height) }}>
      {text}
    </Tag>
  );
}

export function TsurusenNewsPixelPage() {
  return (
    <div className="tsurusen-news-pixel-page" id="top">
      <style>{runtimeCss}</style>
      <TsurusenTopHeader active="BLOG" />
      <div className="tsurusen-news-pixel-stage" aria-label="TSURUSEN NEWS ROOM">
        {slices.map((slice) => (
          <img key={slice.src} src={slice.src} alt="" aria-hidden="true" className="pixel-slice" draggable={false} style={{ top: yPct(slice.top), height: yPct(slice.height) }} />
        ))}
        {textBlocks.map((block) => (
          <PixelText key={`${block.text}-${block.top}`} {...block} />
        ))}
        {anchorTargets.map((anchor) => (
          <span key={anchor.id} id={anchor.id} className="pixel-anchor" style={{ top: yPct(anchor.top) }} />
        ))}
        {navLinks.map((link) => (
          <HitLink key={link.label} {...link} />
        ))}
        {categoryButtons.map((link) => (
          <HitLink key={link.label} {...link} />
        ))}
        {hitLinks.map((link) => (
          <HitLink key={`${link.label}-${link.top}`} {...link} />
        ))}
        <input
          className="pixel-input"
          aria-label="Newsletter email address"
          type="email"
          autoComplete="email"
          style={{ left: xPct(610), top: yPct(1527), width: xPct(137), height: yPct(30) }}
        />
        <div className="pixel-icon-layer" aria-hidden="true">
          {iconLayer.map((item) => {
            const Icon = item.icon;
            return <Icon key={`${item.left}-${item.top}`} size={item.size} strokeWidth={1.6} style={{ left: xPct(item.left), top: yPct(item.top) }} />;
          })}
        </div>
      </div>
    </div>
  );
}
