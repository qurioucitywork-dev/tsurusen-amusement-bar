/* eslint-disable @next/next/no-img-element */
import { CalendarDays, Camera, Gift, MessageCircle, Phone, Star, Users } from "lucide-react";

const designWidth = 864;
const designHeight = 1821;
const assetBase = "/assets/tsurusen-campaign/png";

type PixelTextBlock = {
  as: "h1" | "h2" | "p";
  text: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

const slices = [
  { src: `${assetBase}/section-01-hero.png`, top: 0, height: 352 },
  { src: `${assetBase}/section-02-golden-night.png`, top: 352, height: 261 },
  { src: `${assetBase}/section-03-coupons.png`, top: 613, height: 221 },
  { src: `${assetBase}/section-04-season-campaign.png`, top: 834, height: 160 },
  { src: `${assetBase}/section-05-member-howto.png`, top: 994, height: 201 },
  { src: `${assetBase}/section-06-recommended-limited.png`, top: 1195, height: 165 },
  { src: `${assetBase}/section-07-sns-reviews.png`, top: 1360, height: 199 },
  { src: `${assetBase}/section-08-faq.png`, top: 1559, height: 145 },
  { src: `${assetBase}/section-09-cta.png`, top: 1704, height: 117 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 158, top: 14, width: 29, height: 26 },
  { label: "ABOUT", href: "/#about", left: 193, top: 14, width: 40, height: 26 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 238, top: 14, width: 77, height: 26 },
  { label: "FOOD MENU", href: "/food-menu", left: 318, top: 14, width: 61, height: 26 },
  { label: "DRINK MENU", href: "/drink-menu", left: 383, top: 14, width: 70, height: 26 },
  { label: "ENTERTAINMENT", href: "/play", left: 441, top: 14, width: 86, height: 26 },
  { label: "SCENES", href: "/#scene", left: 531, top: 14, width: 44, height: 26 },
  { label: "PRIVATE PARTY", href: "/private-party", left: 579, top: 14, width: 84, height: 26 },
  { label: "EVENTS", href: "/events", left: 666, top: 14, width: 45, height: 26 },
  { label: "CAMPAIGNS", href: "/campaigns", left: 714, top: 14, width: 66, height: 26 },
  { label: "ACCESS", href: "/access", left: 782, top: 14, width: 24, height: 26 },
  { label: "RESERVE", href: "/reservation", left: 806, top: 10, width: 43, height: 31 },
];

const hitLinks = [
  { label: "Logo", href: "/", left: 18, top: 14, width: 105, height: 23 },
  { label: "Use coupon", href: "/campaigns#coupons", left: 55, top: 294, width: 145, height: 43 },
  { label: "Web reserve", href: "/reservation", left: 210, top: 294, width: 116, height: 43 },
  { label: "Line reserve", href: "https://line.me/R/ti/p/@tsurusen", left: 337, top: 294, width: 117, height: 43 },
  { label: "Golden night offer", href: "/campaigns#golden-night", left: 45, top: 358, width: 775, height: 248 },
  { label: "Get golden night offer", href: "/campaigns#coupon-get", left: 499, top: 548, width: 224, height: 43 },
  { label: "Coupon first visit", href: "/campaigns#coupon-01", left: 58, top: 645, width: 108, height: 172 },
  { label: "Coupon charge free", href: "/campaigns#coupon-02", left: 184, top: 645, width: 107, height: 172 },
  { label: "Coupon champagne", href: "/campaigns#coupon-03", left: 309, top: 645, width: 107, height: 172 },
  { label: "Coupon birthday", href: "/campaigns#coupon-04", left: 435, top: 645, width: 107, height: 172 },
  { label: "Coupon ladies", href: "/campaigns#coupon-05", left: 560, top: 645, width: 107, height: 172 },
  { label: "Coupon group", href: "/campaigns#coupon-06", left: 686, top: 645, width: 107, height: 172 },
  { label: "Season previous", href: "/campaigns#season", left: 48, top: 906, width: 20, height: 25 },
  { label: "Spring party", href: "/campaigns#spring-party", left: 64, top: 858, width: 115, height: 113 },
  { label: "Golden week", href: "/campaigns#golden-week", left: 187, top: 858, width: 115, height: 113 },
  { label: "Summer festival", href: "/campaigns#summer-festival", left: 310, top: 858, width: 115, height: 113 },
  { label: "Halloween night", href: "/campaigns#halloween-night", left: 433, top: 858, width: 115, height: 113 },
  { label: "Christmas party", href: "/campaigns#christmas-party", left: 557, top: 858, width: 115, height: 113 },
  { label: "New year party", href: "/campaigns#new-year-party", left: 680, top: 858, width: 115, height: 113 },
  { label: "Season next", href: "/campaigns#season", left: 811, top: 906, width: 20, height: 25 },
  { label: "Member benefits", href: "/campaigns#member-benefits", left: 45, top: 996, width: 338, height: 192 },
  { label: "How to use", href: "/campaigns#how-to-use", left: 390, top: 996, width: 430, height: 192 },
  { label: "Recommended first visit", href: "/campaigns#first-visit", left: 64, top: 1241, width: 69, height: 94 },
  { label: "Recommended girls party", href: "/campaigns#girls-party", left: 140, top: 1241, width: 69, height: 94 },
  { label: "Recommended birthday", href: "/campaigns#birthday", left: 216, top: 1241, width: 69, height: 94 },
  { label: "Recommended after party", href: "/campaigns#after-party", left: 292, top: 1241, width: 69, height: 94 },
  { label: "Recommended rental party", href: "/campaigns#party", left: 368, top: 1241, width: 69, height: 94 },
  { label: "Limited today", href: "/campaigns#today-only", left: 527, top: 1242, width: 65, height: 95 },
  { label: "Limited this week", href: "/campaigns#this-week", left: 608, top: 1242, width: 65, height: 95 },
  { label: "Limited this month", href: "/campaigns#this-month", left: 690, top: 1242, width: 65, height: 95 },
  { label: "Limited quantity", href: "/campaigns#limited-quantity", left: 772, top: 1242, width: 38, height: 95 },
  { label: "Instagram campaign", href: "https://www.instagram.com/", left: 62, top: 1412, width: 88, height: 125 },
  { label: "TikTok campaign", href: "https://www.tiktok.com/", left: 159, top: 1412, width: 88, height: 125 },
  { label: "Review campaign", href: "/reviews", left: 256, top: 1412, width: 101, height: 125 },
  { label: "Guest review one", href: "/reviews#review-01", left: 407, top: 1407, width: 87, height: 130 },
  { label: "Guest review two", href: "/reviews#review-02", left: 511, top: 1407, width: 87, height: 130 },
  { label: "Guest review three", href: "/reviews#review-03", left: 614, top: 1407, width: 87, height: 130 },
  { label: "Guest review four", href: "/reviews#review-04", left: 718, top: 1407, width: 87, height: 130 },
  { label: "FAQ one", href: "/faq#campaign-use", left: 55, top: 1592, width: 355, height: 25 },
  { label: "FAQ two", href: "/faq#other-coupons", left: 55, top: 1620, width: 355, height: 25 },
  { label: "FAQ three", href: "/faq#reservation", left: 55, top: 1649, width: 355, height: 25 },
  { label: "FAQ four", href: "/faq#expire", left: 55, top: 1677, width: 355, height: 25 },
  { label: "FAQ five", href: "/faq#names", left: 429, top: 1592, width: 355, height: 25 },
  { label: "FAQ six", href: "/faq#cancel", left: 429, top: 1620, width: 355, height: 25 },
  { label: "FAQ seven", href: "/faq#weekend", left: 429, top: 1649, width: 355, height: 25 },
  { label: "FAQ eight", href: "/faq#first-time", left: 429, top: 1677, width: 355, height: 25 },
  { label: "Floating coupon", href: "/campaigns#coupons", left: 794, top: 1547, width: 63, height: 68 },
  { label: "Floating line", href: "https://line.me/R/ti/p/@tsurusen", left: 794, top: 1620, width: 63, height: 67 },
  { label: "Floating phone", href: "tel:03-XXXX-XXXX", left: 794, top: 1692, width: 63, height: 68 },
  { label: "CTA coupon", href: "/campaigns#coupons", left: 184, top: 1782, width: 123, height: 37 },
  { label: "CTA web reserve", href: "/reservation", left: 326, top: 1782, width: 109, height: 37 },
  { label: "CTA line reserve", href: "https://line.me/R/ti/p/@tsurusen", left: 448, top: 1782, width: 109, height: 37 },
  { label: "CTA phone reserve", href: "tel:03-XXXX-XXXX", left: 570, top: 1782, width: 118, height: 37 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "h1", text: "SPECIAL\nOFFERS", left: 119, top: 67, width: 242, height: 146 },
  { as: "p", text: "Tonight Is Better\nWith A Reward.", left: 153, top: 229, width: 210, height: 49 },
  { as: "h2", text: "GOLDEN NIGHT\nSPECIAL CAMPAIGN", left: 75, top: 410, width: 320, height: 78 },
  { as: "h2", text: "COUPONS", left: 54, top: 624, width: 92, height: 28 },
  { as: "h2", text: "SEASON CAMPAIGN", left: 54, top: 842, width: 176, height: 28 },
  { as: "h2", text: "MEMBER BENEFITS", left: 54, top: 1013, width: 166, height: 28 },
  { as: "h2", text: "HOW TO USE", left: 402, top: 1013, width: 115, height: 28 },
  { as: "h2", text: "RECOMMENDED FOR", left: 54, top: 1218, width: 175, height: 28 },
  { as: "h2", text: "LIMITED OFFERS", left: 512, top: 1218, width: 156, height: 28 },
  { as: "h2", text: "SNS CAMPAIGN", left: 54, top: 1377, width: 142, height: 28 },
  { as: "h2", text: "GUEST REVIEWS", left: 397, top: 1377, width: 151, height: 28 },
  { as: "h2", text: "FAQ", left: 54, top: 1575, width: 45, height: 28 },
  { as: "h2", text: "DON'T MISS TONIGHT", left: 218, top: 1724, width: 430, height: 55 },
];

const iconLayer = [
  { icon: Gift, left: 79, top: 306, size: 22 },
  { icon: CalendarDays, left: 71, top: 533, size: 18 },
  { icon: Camera, left: 145, top: 533, size: 18 },
  { icon: Star, left: 328, top: 533, size: 18 },
  { icon: Users, left: 684, top: 1267, size: 22 },
  { icon: Camera, left: 104, top: 1491, size: 26 },
  { icon: Star, left: 312, top: 1491, size: 26 },
  { icon: CalendarDays, left: 817, top: 1574, size: 22 },
  { icon: MessageCircle, left: 818, top: 1646, size: 22 },
  { icon: Phone, left: 818, top: 1718, size: 22 },
];

const runtimeCss = `
body:has(.tsurusen-campaign-pixel-page) > header,
body:has(.tsurusen-campaign-pixel-page) > footer,
body:has(.tsurusen-campaign-pixel-page) > .mobile-sticky-cta,
body:has(.tsurusen-campaign-pixel-page) > .skip-link {
  display: none;
}

body:has(.tsurusen-campaign-pixel-page) main {
  padding-bottom: 0;
}

.tsurusen-campaign-pixel-page {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #090808;
}

.tsurusen-campaign-pixel-stage {
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  aspect-ratio: 864 / 1821;
  min-height: 1px;
  overflow: hidden;
  background: #090808;
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

export function TsurusenCampaignPixelPage() {
  return (
    <div className="tsurusen-campaign-pixel-page" id="top">
      <style>{runtimeCss}</style>
      <div className="tsurusen-campaign-pixel-stage" aria-label="TSURUSEN CAMPAIGNS">
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
