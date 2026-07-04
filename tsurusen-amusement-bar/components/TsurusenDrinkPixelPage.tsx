/* eslint-disable @next/next/no-img-element */
import { CalendarDays, CircleDot, GlassWater, MessageCircle, Phone, Wine } from "lucide-react";

const designWidth = 864;
const designHeight = 1821;
const assetBase = "/assets/tsurusen-drink/png";
type PixelTextBlock = { as: "h1" | "h2" | "p"; text: string; left: number; top: number; width: number; height: number };

const slices = [
  { src: `${assetBase}/section-01-hero.png`, top: 0, height: 303 },
  { src: `${assetBase}/section-02-concept.png`, top: 303, height: 179 },
  { src: `${assetBase}/section-03-all-you-can-drink.png`, top: 482, height: 168 },
  { src: `${assetBase}/section-04-beer-menu.png`, top: 650, height: 260 },
  { src: `${assetBase}/section-05-signature-cocktail.png`, top: 910, height: 192 },
  { src: `${assetBase}/section-06-champagne-whisky.png`, top: 1102, height: 123 },
  { src: `${assetBase}/section-07-whisky-carousel.png`, top: 1225, height: 133 },
  { src: `${assetBase}/section-08-pairing.png`, top: 1358, height: 157 },
  { src: `${assetBase}/section-09-social-favorites-night.png`, top: 1515, height: 190 },
  { src: `${assetBase}/section-10-cta.png`, top: 1705, height: 116 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 219, top: 15, width: 32, height: 25 },
  { label: "ABOUT", href: "/#about", left: 258, top: 15, width: 44, height: 25 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 302, top: 15, width: 82, height: 25 },
  { label: "FOOD MENU", href: "/food-menu", left: 385, top: 15, width: 68, height: 25 },
  { label: "DRINK MENU", href: "/drink-menu", left: 454, top: 15, width: 75, height: 25 },
  { label: "ENTERTAINMENT", href: "/play", left: 530, top: 15, width: 88, height: 25 },
  { label: "SCENE", href: "/#scene", left: 621, top: 15, width: 44, height: 25 },
  { label: "GALLERY", href: "/#gallery", left: 671, top: 15, width: 53, height: 25 },
  { label: "ACCESS", href: "/access", left: 731, top: 15, width: 53, height: 25 },
  { label: "RESERVE", href: "/reservation", left: 794, top: 10, width: 54, height: 31 },
];

const categoryButtons = [
  { label: "BEER", href: "/drink-menu#beer", left: 49, top: 665, width: 93, height: 26 },
  { label: "HIGHBALL", href: "/drink-menu#highball", left: 146, top: 665, width: 92, height: 26 },
  { label: "COCKTAIL", href: "/drink-menu#cocktail", left: 242, top: 665, width: 92, height: 26 },
  { label: "SOUR", href: "/drink-menu#sour", left: 338, top: 665, width: 92, height: 26 },
  { label: "WINE", href: "/drink-menu#wine", left: 434, top: 665, width: 92, height: 26 },
  { label: "SHOCHU", href: "/drink-menu#shochu", left: 530, top: 665, width: 92, height: 26 },
  { label: "WHISKY", href: "/drink-menu#whisky", left: 626, top: 665, width: 92, height: 26 },
  { label: "SOFT DRINK", href: "/drink-menu#soft-drink", left: 722, top: 665, width: 96, height: 26 },
];

const hitLinks = [
  { label: "生ビール", href: "/drink-menu#beer", left: 49, top: 703, width: 251, height: 88 },
  { label: "シャンディガフ", href: "/drink-menu#beer", left: 306, top: 703, width: 253, height: 88 },
  { label: "コロナ", href: "/drink-menu#beer", left: 565, top: 703, width: 253, height: 88 },
  { label: "ハイネケン", href: "/drink-menu#beer", left: 49, top: 795, width: 251, height: 88 },
  { label: "ギネス", href: "/drink-menu#beer", left: 306, top: 795, width: 253, height: 88 },
  { label: "ブルームーン", href: "/drink-menu#beer", left: 565, top: 795, width: 253, height: 88 },
  { label: "ビール一覧", href: "/drink-menu#beer", left: 330, top: 890, width: 204, height: 18 },
  { label: "Champagne more", href: "/drink-menu#champagne", left: 62, top: 1194, width: 68, height: 21 },
  { label: "Whisky collection more", href: "/drink-menu#whisky", left: 656, top: 1194, width: 68, height: 21 },
  { label: "Yamazaki 12Y", href: "/drink-menu#whisky", left: 49, top: 1231, width: 188, height: 95 },
  { label: "Macallan 12Y", href: "/drink-menu#whisky", left: 241, top: 1231, width: 190, height: 95 },
  { label: "Bowmore 12Y", href: "/drink-menu#whisky", left: 435, top: 1231, width: 190, height: 95 },
  { label: "Jack Daniel's", href: "/drink-menu#whisky", left: 628, top: 1231, width: 190, height: 95 },
  { label: "ウイスキー一覧", href: "/drink-menu#whisky", left: 330, top: 1338, width: 205, height: 20 },
  { label: "ローストビーフ", href: "/drink-menu#pairing", left: 49, top: 1391, width: 221, height: 81 },
  { label: "ガーリックシュリンプ", href: "/drink-menu#pairing", left: 292, top: 1391, width: 240, height: 81 },
  { label: "チーズ盛り合わせ", href: "/drink-menu#pairing", left: 558, top: 1391, width: 236, height: 81 },
  { label: "Instagram drinks", href: "https://www.instagram.com/", left: 49, top: 1677, width: 182, height: 22 },
  { label: "Customer favorites", href: "/drink-menu#favorites", left: 356, top: 1677, width: 155, height: 22 },
  { label: "Night experience", href: "/play", left: 650, top: 1677, width: 138, height: 22 },
  { label: "WEB予約", href: "/reservation", left: 794, top: 1553, width: 64, height: 65 },
  { label: "LINE予約", href: "https://line.me/R/ti/p/@tsurusen", left: 794, top: 1624, width: 64, height: 65 },
  { label: "電話予約", href: "tel:03-XXXX-XXXX", left: 794, top: 1694, width: 64, height: 65 },
  { label: "CTA WEB予約", href: "/reservation", left: 210, top: 1785, width: 133, height: 34 },
  { label: "CTA LINE予約", href: "https://line.me/R/ti/p/@tsurusen", left: 353, top: 1785, width: 133, height: 34 },
  { label: "CTA 電話予約", href: "tel:03-XXXX-XXXX", left: 496, top: 1785, width: 133, height: 34 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "h1", text: "DRINK\nMENU", left: 347, top: 58, width: 168, height: 127 },
  { as: "p", text: "Every Glass\nCreates\nA Great Night.", left: 394, top: 202, width: 112, height: 48 },
  { as: "h2", text: "CONCEPT", left: 83, top: 339, width: 97, height: 25 },
  { as: "p", text: "飲み放題でも妥協しない。\n定番からカクテルまで\n豊富なラインナップをご用意。", left: 83, top: 377, width: 222, height: 62 },
  { as: "h2", text: "ALL YOU CAN DRINK", left: 325, top: 500, width: 219, height: 31 },
  { as: "h2", text: "飲み放題", left: 336, top: 558, width: 193, height: 44 },
  { as: "h2", text: "SIGNATURE COCKTAIL", left: 69, top: 925, width: 222, height: 27 },
  { as: "h2", text: "鶴千オリジナルカクテル", left: 69, top: 957, width: 190, height: 25 },
  { as: "h2", text: "CHAMPAGNE", left: 63, top: 1120, width: 132, height: 27 },
  { as: "h2", text: "WHISKY\nCOLLECTION", left: 640, top: 1120, width: 133, height: 56 },
  { as: "h2", text: "PAIRING", left: 69, top: 1374, width: 92, height: 27 },
  { as: "h2", text: "INSTAGRAM DRINKS", left: 53, top: 1535, width: 184, height: 27 },
  { as: "h2", text: "CUSTOMER FAVORITES", left: 284, top: 1535, width: 205, height: 27 },
  { as: "h2", text: "NIGHT EXPERIENCE", left: 612, top: 1535, width: 183, height: 27 },
  { as: "h2", text: "RAISE YOUR GLASS.\nPLAY ALL NIGHT.", left: 255, top: 1724, width: 355, height: 72 },
];

const iconLayer = [
  { icon: GlassWater, left: 90, top: 550, size: 32 },
  { icon: GlassWater, left: 171, top: 550, size: 32 },
  { icon: CircleDot, left: 252, top: 550, size: 32 },
  { icon: GlassWater, left: 572, top: 550, size: 32 },
  { icon: Wine, left: 632, top: 550, size: 32 },
  { icon: GlassWater, left: 692, top: 550, size: 32 },
  { icon: GlassWater, left: 758, top: 550, size: 32 },
  { icon: CalendarDays, left: 819, top: 1575, size: 22 },
  { icon: MessageCircle, left: 819, top: 1646, size: 22 },
  { icon: Phone, left: 819, top: 1716, size: 22 },
];

const runtimeCss = `
.tsurusen-drink-pixel-page {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #090807;
}

.tsurusen-drink-pixel-stage {
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

export function TsurusenDrinkPixelPage() {
  return (
    <div className="tsurusen-drink-pixel-page" id="top">
      <style>{runtimeCss}</style>
      <div className="tsurusen-drink-pixel-stage" aria-label="TSURUSEN DRINK MENU">
        {slices.map((slice) => (
          <img key={slice.src} src={slice.src} alt="" aria-hidden="true" className="pixel-slice" draggable={false} style={{ top: yPct(slice.top), height: yPct(slice.height) }} />
        ))}
        {textBlocks.map((block) => (
          <PixelText key={`${block.text}-${block.top}`} {...block} />
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
