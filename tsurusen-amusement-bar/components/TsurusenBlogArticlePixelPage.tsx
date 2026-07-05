/* eslint-disable @next/next/no-img-element */
import { ArrowRight, CalendarDays, Camera, ChevronUp, Copy, Heart, Link as LinkIcon, MapPin, MessageCircle, Phone, Search, Share2, Users } from "lucide-react";

const designWidth = 1024;
const designHeight = 1536;
const assetBase = "/assets/tsurusen-blog-article/png";

type PixelTextBlock = {
  as: "h1" | "h2" | "p";
  text: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

const slices = [
  { src: `${assetBase}/section-01-hero.png`, top: 0, height: 319 },
  { src: `${assetBase}/section-02-meta-intro.png`, top: 319, height: 262 },
  { src: `${assetBase}/section-03-content-cards.png`, top: 581, height: 355 },
  { src: `${assetBase}/section-04-points-share.png`, top: 936, height: 332 },
  { src: `${assetBase}/section-05-related-sidebar.png`, top: 1268, height: 268 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 186, top: 14, width: 30, height: 25 },
  { label: "ABOUT", href: "/#about", left: 222, top: 14, width: 40, height: 25 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 269, top: 14, width: 99, height: 25 },
  { label: "FOOD MENU", href: "/food-menu", left: 378, top: 14, width: 75, height: 25 },
  { label: "DRINK MENU", href: "/drink-menu", left: 463, top: 14, width: 77, height: 25 },
  { label: "ENTERTAINMENT", href: "/play", left: 550, top: 14, width: 104, height: 25 },
  { label: "SCENES", href: "/#scene", left: 658, top: 14, width: 55, height: 25 },
  { label: "PRIVATE PARTY", href: "/#scene", left: 717, top: 14, width: 93, height: 25 },
  { label: "EVENTS", href: "/events", left: 813, top: 14, width: 57, height: 25 },
  { label: "CAMPAIGNS", href: "/campaigns", left: 873, top: 14, width: 81, height: 25 },
  { label: "REVIEWS", href: "/#reviews", left: 802, top: 36, width: 64, height: 1 },
  { label: "SOCIAL HUB", href: "/#gallery", left: 867, top: 36, width: 74, height: 1 },
  { label: "BLOG", href: "/blog", left: 876, top: 14, width: 48, height: 25 },
  { label: "RESERVE", href: "/reservation", left: 954, top: 8, width: 62, height: 36 },
];

const anchorTargets = [
  { id: "article", top: 319 },
  { id: "guide", top: 581 },
  { id: "share", top: 1215 },
  { id: "related", top: 1287 },
  { id: "newsletter", top: 1319 },
];

const hitLinks = [
  { label: "Logo", href: "/", left: 14, top: 8, width: 130, height: 35 },
  { label: "Back to blog", href: "/blog", left: 52, top: 338, width: 62, height: 18 },
  { label: "Instagram share", href: "https://www.instagram.com/", left: 550, top: 374, width: 30, height: 30 },
  { label: "X share", href: "https://x.com/intent/tweet", left: 586, top: 374, width: 30, height: 30 },
  { label: "Facebook share", href: "https://www.facebook.com/sharer/sharer.php", left: 624, top: 374, width: 30, height: 30 },
  { label: "Line share", href: "https://line.me/R/msg/text/?TSURUSEN", left: 662, top: 374, width: 30, height: 30 },
  { label: "Like article", href: "/blog/kabukicho-night-guide#article", left: 700, top: 374, width: 30, height: 30 },
  { label: "Table of contents one", href: "#article", left: 768, top: 374, width: 183, height: 21 },
  { label: "Table of contents two", href: "#guide", left: 768, top: 400, width: 183, height: 21 },
  { label: "Table of contents three", href: "#guide", left: 768, top: 426, width: 183, height: 21 },
  { label: "Store information", href: "/access", left: 770, top: 746, width: 192, height: 28 },
  { label: "Reserve your night", href: "/reservation", left: 774, top: 870, width: 186, height: 38 },
  { label: "Popular article one", href: "/blog/darts-beginner-guide", left: 772, top: 966, width: 186, height: 38 },
  { label: "Popular article two", href: "/blog/drink-guide", left: 772, top: 1010, width: 186, height: 38 },
  { label: "Popular article three", href: "/blog/karaoke-night", left: 772, top: 1054, width: 186, height: 38 },
  { label: "Popular article four", href: "/blog/birthday-surprise", left: 772, top: 1098, width: 186, height: 38 },
  { label: "Popular article five", href: "/blog/second-party", left: 772, top: 1142, width: 186, height: 38 },
  { label: "Author more", href: "/blog#authors", left: 788, top: 1282, width: 106, height: 22 },
  { label: "Newsletter email", href: "#newsletter", left: 772, top: 1384, width: 188, height: 32 },
  { label: "Newsletter submit", href: "#newsletter", left: 772, top: 1428, width: 188, height: 38 },
  { label: "Share Instagram", href: "https://www.instagram.com/", left: 52, top: 1215, width: 126, height: 46 },
  { label: "Share X", href: "https://x.com/intent/tweet", left: 189, top: 1215, width: 130, height: 46 },
  { label: "Share Facebook", href: "https://www.facebook.com/sharer/sharer.php", left: 331, top: 1215, width: 120, height: 46 },
  { label: "Share Line", href: "https://line.me/R/msg/text/?TSURUSEN", left: 460, top: 1215, width: 101, height: 46 },
  { label: "Copy link", href: "#share", left: 572, top: 1215, width: 136, height: 46 },
  { label: "Related article one", href: "/blog/summer-dj-night-report", left: 52, top: 1304, width: 159, height: 107 },
  { label: "Related article two", href: "/blog/kabukicho-gourmet", left: 221, top: 1304, width: 159, height: 107 },
  { label: "Related article three", href: "/blog/original-cocktail", left: 390, top: 1304, width: 159, height: 107 },
  { label: "Related article four", href: "/blog/second-party-guide", left: 559, top: 1304, width: 162, height: 107 },
  { label: "Read more articles", href: "/blog", left: 294, top: 1476, width: 218, height: 50 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "h1", text: "KABUKICHO\nNIGHT GUIDE", left: 152, top: 113, width: 345, height: 99 },
  { as: "p", text: "歌舞伎町の夜をもっと楽しむ、大人の遊び方ガイド", left: 153, top: 229, width: 382, height: 26 },
  { as: "h2", text: "歌舞伎町は、夜のエンターテインメントシティ。", left: 65, top: 440, width: 407, height: 32 },
  { as: "h2", text: "鶴千で楽しむ、大人の夜の過ごし方", left: 65, top: 680, width: 359, height: 33 },
  { as: "h2", text: "大人が楽しめる理由", left: 505, top: 953, width: 210, height: 32 },
  { as: "h2", text: "SHARE THIS ARTICLE", left: 52, top: 1196, width: 182, height: 27 },
  { as: "h2", text: "RELATED ARTICLES", left: 52, top: 1287, width: 166, height: 27 },
  { as: "h2", text: "TABLE OF CONTENTS", left: 769, top: 347, width: 160, height: 25 },
  { as: "h2", text: "RELATED INFO", left: 769, top: 507, width: 118, height: 25 },
  { as: "h2", text: "RESERVE YOUR NIGHT", left: 773, top: 816, width: 184, height: 35 },
  { as: "h2", text: "POPULAR ARTICLES", left: 769, top: 943, width: 158, height: 25 },
  { as: "h2", text: "ABOUT THE AUTHOR", left: 769, top: 1194, width: 158, height: 25 },
  { as: "h2", text: "NEWSLETTER", left: 769, top: 1333, width: 116, height: 25 },
];

const iconLayer = [
  { icon: Share2, left: 507, top: 385, size: 12 },
  { icon: Camera, left: 559, top: 381, size: 16 },
  { icon: Share2, left: 633, top: 381, size: 16 },
  { icon: MessageCircle, left: 671, top: 381, size: 16 },
  { icon: Heart, left: 709, top: 381, size: 16 },
  { icon: ArrowRight, left: 936, top: 881, size: 16 },
  { icon: MapPin, left: 131, top: 1129, size: 34 },
  { icon: Users, left: 321, top: 1129, size: 34 },
  { icon: CalendarDays, left: 526, top: 1129, size: 34 },
  { icon: Camera, left: 83, top: 1229, size: 17 },
  { icon: Share2, left: 368, top: 1229, size: 17 },
  { icon: MessageCircle, left: 493, top: 1229, size: 17 },
  { icon: LinkIcon, left: 613, top: 1229, size: 17 },
  { icon: Copy, left: 872, top: 1439, size: 11 },
  { icon: Search, left: 942, top: 1396, size: 12 },
  { icon: Phone, left: 940, top: 725, size: 12 },
  { icon: Camera, left: 938, top: 1457, size: 12 },
  { icon: ChevronUp, left: 942, top: 1514, size: 14 },
];

const runtimeCss = `
body:has(.tsurusen-blog-article-pixel-page) > header,
body:has(.tsurusen-blog-article-pixel-page) > footer,
body:has(.tsurusen-blog-article-pixel-page) > .mobile-sticky-cta,
body:has(.tsurusen-blog-article-pixel-page) > .skip-link {
  display: none;
}

body:has(.tsurusen-blog-article-pixel-page) main {
  padding-bottom: 0;
}

.tsurusen-blog-article-pixel-page {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #050505;
}

.tsurusen-blog-article-pixel-stage {
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  aspect-ratio: 1024 / 1536;
  min-height: 1px;
  overflow: hidden;
  background: #050505;
}

.tsurusen-blog-article-pixel-stage .pixel-input {
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

.tsurusen-blog-article-pixel-stage .pixel-input:focus-visible {
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

export function TsurusenBlogArticlePixelPage() {
  return (
    <div className="tsurusen-blog-article-pixel-page" id="top">
      <style>{runtimeCss}</style>
      <div className="tsurusen-blog-article-pixel-stage" aria-label="TSURUSEN BLOG ARTICLE">
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
        {hitLinks.map((link) => (
          <HitLink key={`${link.label}-${link.top}`} {...link} />
        ))}
        <input
          className="pixel-input"
          aria-label="Newsletter email address"
          type="email"
          autoComplete="email"
          style={{ left: xPct(772), top: yPct(1384), width: xPct(188), height: yPct(32) }}
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
