/* eslint-disable @next/next/no-img-element */
import { ArrowRight, CalendarDays, Camera, ChevronUp, Grid2X2, Mail, MessageCircle, Phone, PlayCircle, Search } from "lucide-react";

const designWidth = 881;
const designHeight = 1786;
const assetBase = "/assets/tsurusen-blog/png";

type PixelTextBlock = {
  as: "h1" | "h2" | "p";
  text: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

const slices = [
  { src: `${assetBase}/section-01-hero.png`, top: 0, height: 272 },
  { src: `${assetBase}/section-02-editor-pick.png`, top: 272, height: 216 },
  { src: `${assetBase}/section-03-category-tabs.png`, top: 488, height: 40 },
  { src: `${assetBase}/section-04-featured-trending.png`, top: 528, height: 288 },
  { src: `${assetBase}/section-05-latest-articles.png`, top: 816, height: 194 },
  { src: `${assetBase}/section-06-search-topics.png`, top: 1010, height: 146 },
  { src: `${assetBase}/section-07-series-instagram.png`, top: 1156, height: 140 },
  { src: `${assetBase}/section-08-video-lisa.png`, top: 1296, height: 140 },
  { src: `${assetBase}/section-09-customer-reviews.png`, top: 1436, height: 112 },
  { src: `${assetBase}/section-10-newsletter-author.png`, top: 1548, height: 116 },
  { src: `${assetBase}/section-11-cta.png`, top: 1664, height: 122 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 154, top: 14, width: 30, height: 25 },
  { label: "ABOUT", href: "/#about", left: 186, top: 14, width: 40, height: 25 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 228, top: 14, width: 86, height: 25 },
  { label: "FOOD MENU", href: "/food-menu", left: 320, top: 14, width: 64, height: 25 },
  { label: "DRINK MENU", href: "/drink-menu", left: 390, top: 14, width: 72, height: 25 },
  { label: "ENTERTAINMENT", href: "/play", left: 464, top: 14, width: 90, height: 25 },
  { label: "SCENES", href: "/#scene", left: 557, top: 14, width: 47, height: 25 },
  { label: "PRIVATE PARTY", href: "/#scene", left: 607, top: 14, width: 83, height: 25 },
  { label: "EVENTS", href: "/events", left: 694, top: 14, width: 49, height: 25 },
  { label: "REVIEWS", href: "/#reviews", left: 746, top: 14, width: 54, height: 25 },
  { label: "SOCIAL HUB", href: "/#gallery", left: 647, top: 36, width: 66, height: 1 },
  { label: "BLOG", href: "/blog", left: 724, top: 14, width: 44, height: 25 },
  { label: "ACCESS", href: "/access", left: 769, top: 14, width: 45, height: 25 },
  { label: "RESERVE", href: "/reservation", left: 811, top: 8, width: 60, height: 38 },
];

const anchorTargets = [
  { id: "editors-pick", top: 272 },
  { id: "articles", top: 528 },
  { id: "latest", top: 816 },
  { id: "search", top: 1010 },
  { id: "topics", top: 1010 },
  { id: "series", top: 1156 },
  { id: "instagram", top: 1156 },
  { id: "videos", top: 1296 },
  { id: "reviews", top: 1436 },
  { id: "newsletter", top: 1548 },
  { id: "authors", top: 1548 },
  { id: "reserve", top: 1664 },
];

const categoryButtons = [
  { label: "All articles", href: "/blog#articles", left: 43, top: 489, width: 66, height: 29 },
  { label: "Darts articles", href: "/blog#darts", left: 118, top: 489, width: 65, height: 29 },
  { label: "Karaoke articles", href: "/blog#karaoke", left: 193, top: 489, width: 70, height: 29 },
  { label: "Food articles", href: "/blog#food", left: 271, top: 489, width: 65, height: 29 },
  { label: "Drink articles", href: "/blog#drink", left: 345, top: 489, width: 65, height: 29 },
  { label: "Event articles", href: "/blog#event", left: 419, top: 489, width: 65, height: 29 },
  { label: "Kabukicho articles", href: "/blog#kabukicho", left: 493, top: 489, width: 85, height: 29 },
  { label: "Guide articles", href: "/blog#guide", left: 587, top: 489, width: 65, height: 29 },
  { label: "Party articles", href: "/blog#party", left: 660, top: 489, width: 63, height: 29 },
  { label: "News articles", href: "/blog#news", left: 731, top: 489, width: 62, height: 29 },
  { label: "Article grid", href: "/blog#articles", left: 806, top: 489, width: 28, height: 29 },
];

const hitLinks = [
  { label: "Logo", href: "/", left: 14, top: 7, width: 120, height: 34 },
  { label: "Editor's pick read more", href: "/blog/kabukicho-night-guide", left: 480, top: 443, width: 117, height: 28 },
  { label: "Featured guide", href: "/blog/kabukicho-night-guide", left: 43, top: 529, width: 260, height: 275 },
  { label: "Cocktail guide", href: "/blog/original-cocktail", left: 320, top: 529, width: 289, height: 136 },
  { label: "Kabukicho guide", href: "/blog/kabukicho-spots", left: 320, top: 672, width: 289, height: 132 },
  { label: "Trending article one", href: "/blog/trending-01", left: 620, top: 558, width: 210, height: 42 },
  { label: "Trending article two", href: "/blog/trending-02", left: 620, top: 604, width: 210, height: 42 },
  { label: "Trending article three", href: "/blog/trending-03", left: 620, top: 648, width: 210, height: 42 },
  { label: "Trending article four", href: "/blog/trending-04", left: 620, top: 694, width: 210, height: 42 },
  { label: "Trending article five", href: "/blog/trending-05", left: 620, top: 738, width: 210, height: 42 },
  { label: "Trending article six", href: "/blog/trending-06", left: 620, top: 782, width: 210, height: 42 },
  { label: "Latest view all", href: "/blog#latest", left: 553, top: 824, width: 51, height: 20 },
  { label: "Latest article one", href: "/blog/summer-dj-night-report", left: 52, top: 844, width: 179, height: 147 },
  { label: "Latest article two", href: "/blog/new-food-menu", left: 242, top: 844, width: 179, height: 147 },
  { label: "Latest article three", href: "/blog/business-hours-update", left: 432, top: 844, width: 170, height: 147 },
  { label: "Keyword now open", href: "/blog#popular-keywords", left: 55, top: 1086, width: 44, height: 24 },
  { label: "Keyword darts", href: "/blog#darts", left: 106, top: 1086, width: 44, height: 24 },
  { label: "Keyword girls", href: "/blog#party", left: 157, top: 1086, width: 44, height: 24 },
  { label: "Topic Kabukicho", href: "/blog#kabukicho", left: 334, top: 1054, width: 52, height: 72 },
  { label: "Topic Darts", href: "/blog#darts", left: 397, top: 1054, width: 52, height: 72 },
  { label: "Topic Karaoke", href: "/blog#karaoke", left: 461, top: 1054, width: 52, height: 72 },
  { label: "Topic Girls party", href: "/blog#party", left: 526, top: 1054, width: 52, height: 72 },
  { label: "Topic Birthday", href: "/blog#event", left: 590, top: 1054, width: 52, height: 72 },
  { label: "Topic Private party", href: "/blog#party", left: 654, top: 1054, width: 52, height: 72 },
  { label: "Topic second party", href: "/blog#party", left: 717, top: 1054, width: 52, height: 72 },
  { label: "Topic sightseeing", href: "/blog#guide", left: 781, top: 1054, width: 52, height: 72 },
  { label: "Series guide", href: "/blog/series/kabukicho-guide", left: 52, top: 1197, width: 126, height: 65 },
  { label: "Series darts", href: "/blog/series/darts", left: 190, top: 1197, width: 133, height: 65 },
  { label: "Series cocktail", href: "/blog/series/cocktail", left: 335, top: 1197, width: 170, height: 65 },
  { label: "Instagram view all", href: "https://www.instagram.com/", left: 778, top: 1171, width: 50, height: 20 },
  { label: "Instagram pick one", href: "https://www.instagram.com/", left: 533, top: 1195, width: 68, height: 78 },
  { label: "Instagram pick two", href: "https://www.instagram.com/", left: 608, top: 1195, width: 68, height: 78 },
  { label: "Instagram pick three", href: "https://www.instagram.com/", left: 683, top: 1195, width: 68, height: 78 },
  { label: "Instagram pick four", href: "https://www.instagram.com/", left: 758, top: 1195, width: 68, height: 78 },
  { label: "Video story one", href: "/blog#video-dj-night", left: 52, top: 1329, width: 131, height: 90 },
  { label: "Video story two", href: "/blog#video-darts", left: 199, top: 1329, width: 131, height: 90 },
  { label: "Video story three", href: "/blog#video-birthday", left: 345, top: 1329, width: 131, height: 90 },
  { label: "Video story four", href: "/blog#video-karaoke", left: 492, top: 1329, width: 110, height: 90 },
  { label: "Lisa view all", href: "/blog#lisa", left: 778, top: 1310, width: 50, height: 20 },
  { label: "Review one", href: "/blog#reviews", left: 54, top: 1476, width: 125, height: 58 },
  { label: "Review two", href: "/blog#reviews", left: 198, top: 1476, width: 125, height: 58 },
  { label: "Review three", href: "/blog#reviews", left: 341, top: 1476, width: 127, height: 58 },
  { label: "Review four", href: "/blog#reviews", left: 487, top: 1476, width: 126, height: 58 },
  { label: "Review five", href: "/blog#reviews", left: 632, top: 1476, width: 126, height: 58 },
  { label: "Newsletter submit", href: "/blog#newsletter", left: 195, top: 1596, width: 96, height: 31 },
  { label: "Line subscribe", href: "https://line.me/R/ti/p/@tsurusen", left: 56, top: 1640, width: 89, height: 18 },
  { label: "Instagram follow", href: "https://www.instagram.com/", left: 165, top: 1640, width: 113, height: 18 },
  { label: "Author Yuka", href: "/blog#author-yuka", left: 381, top: 1587, width: 91, height: 60 },
  { label: "Author Taku", href: "/blog#author-taku", left: 489, top: 1587, width: 88, height: 60 },
  { label: "Author Miho", href: "/blog#author-miho", left: 594, top: 1587, width: 88, height: 60 },
  { label: "Author Kenji", href: "/blog#author-kenji", left: 699, top: 1587, width: 86, height: 60 },
  { label: "Street view previous", href: "/blog#reserve", left: 16, top: 1718, width: 24, height: 30 },
  { label: "Street view next", href: "/blog#reserve", left: 292, top: 1718, width: 24, height: 30 },
  { label: "CTA web reserve", href: "/reservation", left: 336, top: 1746, width: 136, height: 38 },
  { label: "CTA line reserve", href: "https://line.me/R/ti/p/@tsurusen", left: 482, top: 1746, width: 136, height: 38 },
  { label: "CTA phone", href: "tel:03-XXXX-XXXX", left: 630, top: 1746, width: 134, height: 38 },
  { label: "Floating web reserve", href: "/reservation", left: 810, top: 1359, width: 64, height: 76 },
  { label: "Floating line reserve", href: "https://line.me/R/ti/p/@tsurusen", left: 810, top: 1439, width: 64, height: 74 },
  { label: "Floating phone", href: "tel:03-XXXX-XXXX", left: 810, top: 1518, width: 64, height: 74 },
  { label: "Floating search", href: "/blog#search", left: 810, top: 1598, width: 64, height: 73 },
  { label: "Back to top", href: "#top", left: 815, top: 1679, width: 55, height: 56 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "h1", text: "THE\nJOURNAL", left: 88, top: 66, width: 176, height: 118 },
  { as: "p", text: "Stories.\nGuides.\nInspiration.", left: 88, top: 196, width: 92, height: 57 },
  { as: "h2", text: "EDITOR'S PICK", left: 481, top: 286, width: 111, height: 21 },
  { as: "h2", text: "歌舞伎町の夜をもっと楽しむ、\n大人の遊び方ガイド", left: 481, top: 335, width: 260, height: 60 },
  { as: "h2", text: "TRENDING", left: 633, top: 543, width: 101, height: 28 },
  { as: "h2", text: "LATEST ARTICLES", left: 55, top: 824, width: 146, height: 28 },
  { as: "h2", text: "SEARCH ARTICLES", left: 55, top: 1027, width: 152, height: 28 },
  { as: "h2", text: "TOPICS", left: 330, top: 1027, width: 70, height: 28 },
  { as: "h2", text: "FEATURED SERIES", left: 55, top: 1171, width: 150, height: 28 },
  { as: "h2", text: "INSTAGRAM PICKS", left: 534, top: 1171, width: 154, height: 28 },
  { as: "h2", text: "VIDEO STORIES", left: 55, top: 1310, width: 134, height: 28 },
  { as: "h2", text: "CUSTOMER REVIEWS", left: 55, top: 1450, width: 166, height: 28 },
  { as: "h2", text: "NEWSLETTER", left: 55, top: 1564, width: 120, height: 28 },
  { as: "h2", text: "AUTHOR", left: 326, top: 1564, width: 78, height: 28 },
  { as: "h2", text: "YOUR NIGHT STARTS HERE", left: 336, top: 1691, width: 292, height: 47 },
];

const iconLayer = [
  { icon: Grid2X2, left: 810, top: 496, size: 18 },
  { icon: ArrowRight, left: 560, top: 446, size: 16 },
  { icon: Search, left: 277, top: 1056, size: 15 },
  { icon: PlayCircle, left: 107, top: 1343, size: 30 },
  { icon: PlayCircle, left: 254, top: 1343, size: 30 },
  { icon: PlayCircle, left: 400, top: 1343, size: 30 },
  { icon: PlayCircle, left: 548, top: 1343, size: 30 },
  { icon: Mail, left: 60, top: 1641, size: 12 },
  { icon: Camera, left: 166, top: 1641, size: 12 },
  { icon: CalendarDays, left: 832, top: 1385, size: 22 },
  { icon: MessageCircle, left: 832, top: 1465, size: 22 },
  { icon: Phone, left: 832, top: 1544, size: 22 },
  { icon: Search, left: 832, top: 1623, size: 22 },
  { icon: ChevronUp, left: 832, top: 1698, size: 18 },
];

const runtimeCss = `
body:has(.tsurusen-blog-pixel-page) > header,
body:has(.tsurusen-blog-pixel-page) > footer,
body:has(.tsurusen-blog-pixel-page) > .mobile-sticky-cta,
body:has(.tsurusen-blog-pixel-page) > .skip-link {
  display: none;
}

body:has(.tsurusen-blog-pixel-page) main {
  padding-bottom: 0;
}

.tsurusen-blog-pixel-page {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #050505;
}

.tsurusen-blog-pixel-stage {
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  aspect-ratio: 881 / 1786;
  min-height: 1px;
  overflow: hidden;
  background: #050505;
}

.tsurusen-blog-pixel-stage .pixel-input {
  position: absolute;
  z-index: 4;
  border: 0;
  outline: 0;
  background: rgba(5, 5, 5, 0);
  color: transparent;
  caret-color: rgba(216, 177, 90, 0.9);
  font-size: 16px;
  font-family: var(--font-manrope), var(--font-zen), sans-serif;
}

.tsurusen-blog-pixel-stage .pixel-input:focus-visible {
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

export function TsurusenBlogPixelPage() {
  return (
    <div className="tsurusen-blog-pixel-page" id="top">
      <style>{runtimeCss}</style>
      <div className="tsurusen-blog-pixel-stage" aria-label="TSURUSEN BLOG">
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
          style={{ left: xPct(55), top: yPct(1596), width: xPct(140), height: yPct(31) }}
        />
        <input
          className="pixel-input"
          aria-label="Article keyword"
          type="search"
          autoComplete="off"
          style={{ left: xPct(55), top: yPct(1052), width: xPct(239), height: yPct(29) }}
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
