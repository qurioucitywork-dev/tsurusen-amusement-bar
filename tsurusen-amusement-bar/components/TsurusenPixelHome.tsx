/* eslint-disable @next/next/no-img-element */
import { CalendarDays, Camera, MessageCircle, Phone } from "lucide-react";

const designWidth = 864;
const designHeight = 1821;
const assetBase = "/assets/tsurusen-home/png";
type PixelTextBlock = { as: "h1" | "h2" | "p"; text: string; left: number; top: number; width: number; height: number };

const slices = [
  { src: `${assetBase}/section-01-hero.png`, top: 0, height: 361 },
  { src: `${assetBase}/section-02-about.png`, top: 361, height: 231 },
  { src: `${assetBase}/section-03-feature.png`, top: 592, height: 183 },
  { src: `${assetBase}/section-04-price-entertainment.png`, top: 775, height: 256 },
  { src: `${assetBase}/section-05-scene.png`, top: 1031, height: 150 },
  { src: `${assetBase}/section-06-instagram-reviews.png`, top: 1181, height: 237 },
  { src: `${assetBase}/section-07-event-access-faq.png`, top: 1418, height: 203 },
  { src: `${assetBase}/section-08-cta-footer.png`, top: 1621, height: 200 },
];

const navLinks = [
  { label: "ABOUT", href: "/#about", left: 398, top: 17, width: 42, height: 24 },
  { label: "FEATURE", href: "/#feature", left: 454, top: 17, width: 52, height: 24 },
  { label: "PRICE", href: "/pricing", left: 526, top: 17, width: 43, height: 24 },
  { label: "ENTERTAINMENT", href: "/play", left: 587, top: 17, width: 78, height: 24 },
  { label: "SCENE", href: "/#scene", left: 681, top: 17, width: 44, height: 24 },
  { label: "GALLERY", href: "/#gallery", left: 742, top: 17, width: 48, height: 24 },
  { label: "RESERVE", href: "/reservation", left: 789, top: 10, width: 59, height: 29 },
];

const hitLinks = [
  { label: "WEB予約", href: "/reservation", left: 145, top: 311, width: 140, height: 38 },
  { label: "電話予約", href: "tel:03-XXXX-XXXX", left: 296, top: 311, width: 141, height: 38 },
  { label: "LINE予約", href: "https://line.me/R/ti/p/@tsurusen", left: 446, top: 311, width: 140, height: 38 },
  { label: "Instagram", href: "https://www.instagram.com/", left: 617, top: 313, width: 92, height: 34 },
  { label: "About more", href: "/#about", left: 126, top: 550, width: 72, height: 27 },
  { label: "Price more", href: "/pricing", left: 124, top: 989, width: 216, height: 28 },
  { label: "女子会", href: "/#scene", left: 28, top: 1060, width: 126, height: 109 },
  { label: "誕生日", href: "/#scene", left: 163, top: 1060, width: 126, height: 109 },
  { label: "貸切パーティー", href: "/#scene", left: 299, top: 1060, width: 126, height: 109 },
  { label: "二次会", href: "/#scene", left: 433, top: 1060, width: 126, height: 109 },
  { label: "合コン", href: "/#scene", left: 568, top: 1060, width: 126, height: 109 },
  { label: "デート", href: "/#scene", left: 704, top: 1060, width: 126, height: 109 },
  { label: "Instagram follow", href: "https://www.instagram.com/", left: 96, top: 1379, width: 249, height: 26 },
  { label: "Google reviews", href: "/#reviews", left: 509, top: 1376, width: 202, height: 27 },
  { label: "Event more", href: "/#event", left: 70, top: 1587, width: 207, height: 25 },
  { label: "FAQ more", href: "/#faq", left: 616, top: 1587, width: 203, height: 25 },
  { label: "CTA WEB予約", href: "/reservation", left: 217, top: 1725, width: 129, height: 34 },
  { label: "CTA LINE予約", href: "https://line.me/R/ti/p/@tsurusen", left: 356, top: 1725, width: 139, height: 34 },
  { label: "CTA 電話予約", href: "tel:03-XXXX-XXXX", left: 510, top: 1725, width: 139, height: 34 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "h1", text: "PLAY\nDRINK\nENJOY", left: 349, top: 70, width: 167, height: 175 },
  { as: "p", text: "歌舞伎町最大級\nダーツ＆カラオケバー", left: 320, top: 256, width: 228, height: 47 },
  { as: "h2", text: "ABOUT\nTSURUSEN", left: 126, top: 382, width: 232, height: 88 },
  { as: "h2", text: "FEATURE", left: 405, top: 603, width: 84, height: 24 },
  { as: "h2", text: "PRICE SYSTEM", left: 69, top: 793, width: 140, height: 25 },
  { as: "h2", text: "ENTERTAINMENT", left: 433, top: 793, width: 147, height: 25 },
  { as: "h2", text: "SCENE", left: 28, top: 1038, width: 70, height: 25 },
  { as: "h2", text: "INSTAGRAM", left: 28, top: 1197, width: 118, height: 25 },
  { as: "h2", text: "GOOGLE REVIEWS", left: 394, top: 1197, width: 170, height: 25 },
  { as: "h2", text: "EVENT", left: 27, top: 1428, width: 76, height: 25 },
  { as: "h2", text: "ACCESS", left: 358, top: 1428, width: 83, height: 25 },
  { as: "h2", text: "FAQ", left: 615, top: 1428, width: 45, height: 25 },
  { as: "h2", text: "LET'S PLAY TONIGHT.", left: 230, top: 1646, width: 421, height: 57 },
];

const iconLayer = [
  { icon: Camera, left: 622, top: 321, size: 16 },
  { icon: CalendarDays, left: 799, top: 1803, size: 14 },
  { icon: MessageCircle, left: 823, top: 1803, size: 14 },
  { icon: Phone, left: 844, top: 1803, size: 14 },
];

const runtimeCss = `
.tsurusen-pixel-home {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #090807;
}

.tsurusen-pixel-stage {
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  aspect-ratio: 864 / 1821;
  min-height: 1px;
  overflow: hidden;
  background: #090807;
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

export function TsurusenPixelHome() {
  return (
    <div className="tsurusen-pixel-home" id="top">
      <style>{runtimeCss}</style>
      <div className="tsurusen-pixel-stage" aria-label="TSURUSEN HOME">
        {slices.map((slice) => (
          <img key={slice.src} src={slice.src} alt="" aria-hidden="true" className="pixel-slice" draggable={false} style={{ top: yPct(slice.top), height: yPct(slice.height) }} />
        ))}
        {textBlocks.map((block) => (
          <PixelText key={`${block.text}-${block.top}`} {...block} />
        ))}
        {navLinks.map((link) => (
          <HitLink key={link.label} {...link} />
        ))}
        {hitLinks.map((link) => (
          <HitLink key={`${link.label}-${link.top}`} {...link} />
        ))}
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
