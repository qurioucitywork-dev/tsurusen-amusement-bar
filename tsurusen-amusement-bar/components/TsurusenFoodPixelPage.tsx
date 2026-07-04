/* eslint-disable @next/next/no-img-element */
import { CalendarDays, MessageCircle, Phone, Star, Utensils, Wine } from "lucide-react";

const designWidth = 864;
const designHeight = 1821;
const assetBase = "/assets/tsurusen-food/png";
type PixelTextBlock = { as: "h1" | "h2" | "p"; text: string; left: number; top: number; width: number; height: number };

const slices = [
  { src: `${assetBase}/section-01-hero.png`, top: 0, height: 300 },
  { src: `${assetBase}/section-02-concept.png`, top: 300, height: 188 },
  { src: `${assetBase}/section-03-popular-menu.png`, top: 488, height: 228 },
  { src: `${assetBase}/section-04-food-list.png`, top: 716, height: 334 },
  { src: `${assetBase}/section-05-chef-pairing.png`, top: 1050, height: 232 },
  { src: `${assetBase}/section-06-gallery.png`, top: 1282, height: 115 },
  { src: `${assetBase}/section-07-customer-favorites.png`, top: 1397, height: 140 },
  { src: `${assetBase}/section-08-late-night-food.png`, top: 1537, height: 128 },
  { src: `${assetBase}/section-09-cta.png`, top: 1665, height: 156 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 258, top: 15, width: 31, height: 25 },
  { label: "ABOUT", href: "/#about", left: 297, top: 15, width: 44, height: 25 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 341, top: 15, width: 82, height: 25 },
  { label: "FOOD MENU", href: "/food-menu", left: 424, top: 15, width: 68, height: 25 },
  { label: "DRINK MENU", href: "/drink-menu", left: 493, top: 15, width: 75, height: 25 },
  { label: "ENTERTAINMENT", href: "/play", left: 569, top: 15, width: 88, height: 25 },
  { label: "SCENE", href: "/#scene", left: 660, top: 15, width: 44, height: 25 },
  { label: "GALLERY", href: "/#gallery", left: 710, top: 15, width: 53, height: 25 },
  { label: "ACCESS", href: "/access", left: 770, top: 15, width: 53, height: 25 },
  { label: "RESERVE", href: "/reservation", left: 785, top: 10, width: 63, height: 31 },
];

const anchorTargets = [
  { id: "concept", top: 300 },
  { id: "popular", top: 488 },
  { id: "recommend", top: 716 },
  { id: "snack", top: 716 },
  { id: "fried", top: 716 },
  { id: "meat", top: 716 },
  { id: "rice", top: 716 },
  { id: "dessert", top: 716 },
  { id: "list", top: 716 },
  { id: "chef", top: 1050 },
  { id: "pairing", top: 1050 },
  { id: "gallery", top: 1282 },
  { id: "favorites", top: 1397 },
  { id: "late-night", top: 1537 },
  { id: "reserve", top: 1665 },
];

const categoryButtons = [
  { label: "おすすめ", href: "/food-menu#recommend", left: 47, top: 723, width: 137, height: 25 },
  { label: "おつまみ", href: "/food-menu#snack", left: 187, top: 723, width: 137, height: 25 },
  { label: "揚げ物", href: "/food-menu#fried", left: 327, top: 723, width: 137, height: 25 },
  { label: "肉料理", href: "/food-menu#meat", left: 467, top: 723, width: 137, height: 25 },
  { label: "ご飯", href: "/food-menu#rice", left: 607, top: 723, width: 107, height: 25 },
  { label: "デザート", href: "/food-menu#dessert", left: 716, top: 723, width: 104, height: 25 },
];

const hitLinks = [
  { label: "ローストビーフ", href: "/food-menu#popular", left: 45, top: 532, width: 121, height: 166 },
  { label: "濃厚チーズフォンデュ", href: "/food-menu#popular", left: 176, top: 532, width: 120, height: 166 },
  { label: "特製唐揚げ", href: "/food-menu#popular", left: 306, top: 532, width: 121, height: 166 },
  { label: "ガーリックシュリンプ", href: "/food-menu#popular", left: 437, top: 532, width: 120, height: 166 },
  { label: "生ハム盛り合わせ", href: "/food-menu#popular", left: 568, top: 532, width: 120, height: 166 },
  { label: "マルゲリータピザ", href: "/food-menu#popular", left: 698, top: 532, width: 120, height: 166 },
  { label: "アボカドとサーモンのタルタル", href: "/food-menu#list", left: 44, top: 765, width: 254, height: 88 },
  { label: "炙り卵共子", href: "/food-menu#list", left: 304, top: 765, width: 254, height: 88 },
  { label: "フライドポテト", href: "/food-menu#list", left: 564, top: 765, width: 256, height: 88 },
  { label: "ヤンニョムチキン", href: "/food-menu#list", left: 44, top: 859, width: 254, height: 89 },
  { label: "牛ハラミのステーキ", href: "/food-menu#list", left: 304, top: 859, width: 254, height: 89 },
  { label: "焼きチーズカレー", href: "/food-menu#list", left: 564, top: 859, width: 256, height: 89 },
  { label: "シーザーサラダ", href: "/food-menu#list", left: 44, top: 954, width: 254, height: 89 },
  { label: "チキン南蛮", href: "/food-menu#list", left: 304, top: 954, width: 254, height: 89 },
  { label: "ガーリックライス", href: "/food-menu#list", left: 564, top: 954, width: 256, height: 89 },
  { label: "Chef recommendation", href: "/food-menu#chef", left: 21, top: 1051, width: 391, height: 225 },
  { label: "Pairing", href: "/food-menu#pairing", left: 432, top: 1051, width: 412, height: 225 },
  { label: "Gallery 1", href: "/food-menu#gallery", left: 42, top: 1310, width: 149, height: 74 },
  { label: "Gallery 2", href: "/food-menu#gallery", left: 199, top: 1310, width: 149, height: 74 },
  { label: "Gallery 3", href: "/food-menu#gallery", left: 356, top: 1310, width: 149, height: 74 },
  { label: "Gallery 4", href: "/food-menu#gallery", left: 513, top: 1310, width: 149, height: 74 },
  { label: "Gallery 5", href: "/food-menu#gallery", left: 670, top: 1310, width: 149, height: 74 },
  { label: "Favorite 1", href: "/food-menu#favorites", left: 42, top: 1426, width: 149, height: 99 },
  { label: "Favorite 2", href: "/food-menu#favorites", left: 199, top: 1426, width: 149, height: 99 },
  { label: "Favorite 3", href: "/food-menu#favorites", left: 356, top: 1426, width: 149, height: 99 },
  { label: "Favorite 4", href: "/food-menu#favorites", left: 513, top: 1426, width: 149, height: 99 },
  { label: "Favorite 5", href: "/food-menu#favorites", left: 670, top: 1426, width: 149, height: 99 },
  { label: "焼きおにぎり", href: "/food-menu#late-night", left: 53, top: 1570, width: 185, height: 88 },
  { label: "明太子クリームパスタ", href: "/food-menu#late-night", left: 243, top: 1570, width: 186, height: 88 },
  { label: "牛すじ煮込み", href: "/food-menu#late-night", left: 434, top: 1570, width: 186, height: 88 },
  { label: "ピリ辛キムチチャーハン", href: "/food-menu#late-night", left: 625, top: 1570, width: 186, height: 88 },
  { label: "WEB予約", href: "/reservation", left: 794, top: 1580, width: 64, height: 65 },
  { label: "LINE予約", href: "https://line.me/R/ti/p/@tsurusen", left: 794, top: 1651, width: 64, height: 65 },
  { label: "電話予約", href: "tel:03-XXXX-XXXX", left: 794, top: 1722, width: 64, height: 65 },
  { label: "CTA WEB予約", href: "/reservation", left: 252, top: 1784, width: 115, height: 33 },
  { label: "CTA LINE予約", href: "https://line.me/R/ti/p/@tsurusen", left: 377, top: 1784, width: 115, height: 33 },
  { label: "CTA 電話予約", href: "tel:03-XXXX-XXXX", left: 502, top: 1784, width: 115, height: 33 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "h1", text: "FOOD\nMENU", left: 336, top: 63, width: 164, height: 125 },
  { as: "p", text: "Fresh.\nDelicious.\nPerfect with Drinks.", left: 337, top: 203, width: 142, height: 51 },
  { as: "h2", text: "CONCEPT", left: 114, top: 326, width: 93, height: 25 },
  { as: "p", text: "料理にも妥協しない。\n遊びながら、食事も楽しめる。", left: 114, top: 355, width: 233, height: 52 },
  { as: "h2", text: "POPULAR MENU", left: 43, top: 505, width: 142, height: 28 },
  { as: "h2", text: "CHEF RECOMMENDATION", left: 39, top: 1066, width: 222, height: 28 },
  { as: "h2", text: "黒毛和牛のグリル", left: 39, top: 1145, width: 165, height: 28 },
  { as: "h2", text: "PAIRING", left: 452, top: 1066, width: 92, height: 28 },
  { as: "h2", text: "GALLERY", left: 41, top: 1292, width: 90, height: 28 },
  { as: "h2", text: "CUSTOMER FAVORITES", left: 41, top: 1407, width: 210, height: 28 },
  { as: "h2", text: "LATE NIGHT FOOD", left: 42, top: 1553, width: 172, height: 28 },
  { as: "h2", text: "GOOD FOOD\nGOOD NIGHT", left: 306, top: 1694, width: 252, height: 94 },
];

const iconLayer = [
  { icon: Utensils, left: 557, top: 1072, size: 18 },
  { icon: Wine, left: 704, top: 1117, size: 28 },
  { icon: Wine, left: 704, top: 1208, size: 28 },
  { icon: Star, left: 173, top: 1246, size: 10 },
  { icon: CalendarDays, left: 819, top: 1602, size: 22 },
  { icon: MessageCircle, left: 819, top: 1673, size: 22 },
  { icon: Phone, left: 819, top: 1744, size: 22 },
];

const runtimeCss = `
.tsurusen-food-pixel-page {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #090807;
}

.tsurusen-food-pixel-stage {
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

export function TsurusenFoodPixelPage() {
  return (
    <div className="tsurusen-food-pixel-page" id="top">
      <style>{runtimeCss}</style>
      <div className="tsurusen-food-pixel-stage" aria-label="TSURUSEN FOOD MENU">
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
