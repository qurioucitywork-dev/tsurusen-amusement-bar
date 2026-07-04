/* eslint-disable @next/next/no-img-element */
import { CalendarDays, MessageCircle, Phone } from "lucide-react";

const designWidth = 864;
const designHeight = 1821;
const assetBase = "/assets/tsurusen-system/png";
type PixelTextBlock = { as: "h1" | "h2" | "p"; text: string; left: number; top: number; width: number; height: number };

const slices = [
  { src: `${assetBase}/section-01-hero.png`, top: 0, height: 356 },
  { src: `${assetBase}/section-02-price-cards.png`, top: 356, height: 428 },
  { src: `${assetBase}/section-03-included.png`, top: 784, height: 179 },
  { src: `${assetBase}/section-04-flow.png`, top: 963, height: 173 },
  { src: `${assetBase}/section-05-payment-comparison.png`, top: 1136, height: 194 },
  { src: `${assetBase}/section-06-recommended-plans.png`, top: 1330, height: 208 },
  { src: `${assetBase}/section-07-faq.png`, top: 1538, height: 131 },
  { src: `${assetBase}/section-08-cta.png`, top: 1669, height: 152 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 31, top: 92, width: 69, height: 24 },
  { label: "ABOUT", href: "/#about", left: 31, top: 117, width: 69, height: 24 },
  { label: "FEATURE", href: "/#feature", left: 31, top: 143, width: 86, height: 24 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 31, top: 169, width: 105, height: 27 },
  { label: "ENTERTAINMENT", href: "/play", left: 31, top: 198, width: 105, height: 24 },
  { label: "SCENE", href: "/#scene", left: 31, top: 224, width: 69, height: 24 },
  { label: "GALLERY", href: "/#gallery", left: 31, top: 250, width: 80, height: 24 },
  { label: "EVENT", href: "/#event", left: 31, top: 276, width: 69, height: 24 },
  { label: "ACCESS", href: "/access", left: 31, top: 302, width: 76, height: 24 },
  { label: "FAQ", href: "/#faq", left: 31, top: 328, width: 69, height: 24 },
  { label: "RESERVE", href: "/reservation", left: 22, top: 367, width: 80, height: 35 },
];

const anchorTargets = [
  { id: "price", top: 356 },
  { id: "included", top: 784 },
  { id: "flow", top: 963 },
  { id: "payment", top: 1136 },
  { id: "plans", top: 1330 },
  { id: "faq", top: 1538 },
  { id: "reserve", top: 1669 },
];

const hitLinks = [
  { label: "MEN予約", href: "/reservation", left: 149, top: 698, width: 245, height: 39 },
  { label: "WOMEN予約", href: "/reservation", left: 495, top: 698, width: 244, height: 39 },
  { label: "仕事帰り", href: "/#scene", left: 113, top: 1362, width: 214, height: 164 },
  { label: "女子会", href: "/#scene", left: 340, top: 1362, width: 214, height: 164 },
  { label: "二次会", href: "/#scene", left: 567, top: 1362, width: 214, height: 164 },
  { label: "FAQ 1", href: "/#faq", left: 112, top: 1576, width: 319, height: 75 },
  { label: "FAQ 2", href: "/#faq", left: 439, top: 1576, width: 319, height: 75 },
  { label: "WEB予約", href: "/reservation", left: 799, top: 1504, width: 60, height: 67 },
  { label: "LINE予約", href: "https://line.me/R/ti/p/@tsurusen", left: 799, top: 1580, width: 60, height: 67 },
  { label: "電話予約", href: "tel:03-XXXX-XXXX", left: 799, top: 1657, width: 60, height: 67 },
  { label: "CTA WEB予約", href: "/reservation", left: 232, top: 1770, width: 124, height: 36 },
  { label: "CTA LINE予約", href: "https://line.me/R/ti/p/@tsurusen", left: 369, top: 1770, width: 123, height: 36 },
  { label: "CTA 電話予約", href: "tel:03-XXXX-XXXX", left: 506, top: 1770, width: 124, height: 36 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "h1", text: "PRICE\nSYSTEM", left: 344, top: 54, width: 253, height: 151 },
  { as: "p", text: "Simple Pricing. Unlimited Fun.", left: 292, top: 216, width: 281, height: 32 },
  { as: "h2", text: "料金はとてもシンプルです。", left: 323, top: 378, width: 224, height: 30 },
  { as: "h2", text: "MEN", left: 174, top: 475, width: 60, height: 34 },
  { as: "h2", text: "WOMEN", left: 520, top: 475, width: 88, height: 34 },
  { as: "h2", text: "WHAT'S INCLUDED", left: 120, top: 786, width: 201, height: 28 },
  { as: "h2", text: "FLOW", left: 120, top: 976, width: 71, height: 29 },
  { as: "h2", text: "PAYMENT", left: 120, top: 1142, width: 105, height: 29 },
  { as: "h2", text: "COMPARISON", left: 444, top: 1142, width: 133, height: 29 },
  { as: "h2", text: "RECOMMENDED PLANS", left: 120, top: 1334, width: 221, height: 29 },
  { as: "h2", text: "FAQ", left: 112, top: 1542, width: 48, height: 29 },
  { as: "h2", text: "READY TO PLAY?", left: 285, top: 1704, width: 299, height: 55 },
];

const iconLayer = [
  { icon: CalendarDays, left: 819, top: 1525, size: 22 },
  { icon: MessageCircle, left: 819, top: 1602, size: 22 },
  { icon: Phone, left: 819, top: 1679, size: 22 },
];

const runtimeCss = `
.tsurusen-system-pixel-page {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #090807;
}

.tsurusen-system-pixel-stage {
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

export function TsurusenSystemPixelPage() {
  return (
    <div className="tsurusen-system-pixel-page" id="top">
      <style>{runtimeCss}</style>
      <div className="tsurusen-system-pixel-stage" aria-label="TSURUSEN PRICE SYSTEM">
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
