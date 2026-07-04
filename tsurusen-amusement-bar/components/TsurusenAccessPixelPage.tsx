/* eslint-disable @next/next/no-img-element */
import {
  Building2,
  CalendarDays,
  Car,
  ChevronUp,
  Clock,
  Footprints,
  HelpCircle,
  Languages,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Train,
} from "lucide-react";

const designWidth = 864;
const designHeight = 1821;
const assetBase = "/assets/tsurusen-access/png";

type PixelTextBlock = {
  as: "h1" | "h2" | "p";
  text: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

const slices = [
  { src: `${assetBase}/section-01-hero.png`, top: 0, height: 282 },
  { src: `${assetBase}/section-02-location-map.png`, top: 282, height: 307 },
  { src: `${assetBase}/section-03-quick-info.png`, top: 589, height: 93 },
  { src: `${assetBase}/section-04-route-guide.png`, top: 682, height: 216 },
  { src: `${assetBase}/section-05-photo-navigation.png`, top: 898, height: 149 },
  { src: `${assetBase}/section-06-map-transport.png`, top: 1047, height: 216 },
  { src: `${assetBase}/section-07-nearby-spots.png`, top: 1263, height: 155 },
  { src: `${assetBase}/section-08-guest-parking-faq.png`, top: 1418, height: 209 },
  { src: `${assetBase}/section-09-street-cta.png`, top: 1627, height: 194 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 150, top: 14, width: 30, height: 25 },
  { label: "ABOUT", href: "/#about", left: 184, top: 14, width: 41, height: 25 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 228, top: 14, width: 82, height: 25 },
  { label: "FOOD MENU", href: "/food-menu", left: 312, top: 14, width: 64, height: 25 },
  { label: "DRINK MENU", href: "/drink-menu", left: 378, top: 14, width: 70, height: 25 },
  { label: "ENTERTAINMENT", href: "/play", left: 452, top: 14, width: 88, height: 25 },
  { label: "SCENES", href: "/#scene", left: 543, top: 14, width: 45, height: 25 },
  { label: "PRIVATE PARTY", href: "/private-party", left: 592, top: 14, width: 85, height: 25 },
  { label: "EVENTS", href: "/events", left: 680, top: 14, width: 49, height: 25 },
  { label: "CAMPAIGNS", href: "/campaigns", left: 731, top: 14, width: 67, height: 25 },
  { label: "REVIEWS", href: "/reviews", left: 590, top: 35, width: 55, height: 1 },
  { label: "SOCIAL HUB", href: "/social", left: 653, top: 35, width: 66, height: 1 },
  { label: "NEWS", href: "/news", left: 721, top: 35, width: 39, height: 1 },
  { label: "BLOG", href: "/blog", left: 761, top: 35, width: 36, height: 1 },
  { label: "ACCESS", href: "/access", left: 775, top: 14, width: 47, height: 25 },
  { label: "RESERVE", href: "/reservation", left: 807, top: 10, width: 42, height: 31 },
];

const hitLinks = [
  { label: "Logo", href: "/", left: 18, top: 14, width: 104, height: 23 },
  { label: "Main access map", href: "https://maps.google.com/?q=Kabukicho+Shinjuku", left: 286, top: 282, width: 510, height: 291 },
  { label: "Open Google Maps", href: "https://maps.google.com/?q=Kabukicho+Shinjuku", left: 80, top: 535, width: 174, height: 29 },
  { label: "Nearest station", href: "/access#station", left: 78, top: 608, width: 171, height: 63 },
  { label: "Walking route", href: "/access#route", left: 257, top: 608, width: 171, height: 63 },
  { label: "Business hours", href: "/access#hours", left: 437, top: 608, width: 171, height: 63 },
  { label: "Regular holiday", href: "/access#holiday", left: 616, top: 608, width: 171, height: 63 },
  { label: "Route step one", href: "/access#route-01", left: 83, top: 721, width: 119, height: 144 },
  { label: "Route step two", href: "/access#route-02", left: 271, top: 721, width: 119, height: 144 },
  { label: "Route step three", href: "/access#route-03", left: 458, top: 721, width: 134, height: 144 },
  { label: "Route step four", href: "/access#route-04", left: 627, top: 721, width: 150, height: 144 },
  { label: "Photo navigation one", href: "/access#photo-01", left: 78, top: 932, width: 79, height: 82 },
  { label: "Photo navigation two", href: "/access#photo-02", left: 164, top: 932, width: 80, height: 82 },
  { label: "Photo navigation three", href: "/access#photo-03", left: 250, top: 932, width: 80, height: 82 },
  { label: "Photo navigation four", href: "/access#photo-04", left: 336, top: 932, width: 80, height: 82 },
  { label: "Photo navigation five", href: "/access#photo-05", left: 423, top: 932, width: 91, height: 82 },
  { label: "Photo navigation six", href: "/access#photo-06", left: 522, top: 932, width: 82, height: 82 },
  { label: "Photo navigation seven", href: "/access#photo-07", left: 611, top: 932, width: 82, height: 82 },
  { label: "Photo navigation eight", href: "/access#photo-08", left: 704, top: 932, width: 83, height: 82 },
  { label: "Illustrated map", href: "/access#map", left: 68, top: 1059, width: 359, height: 201 },
  { label: "JR route", href: "/access#jr", left: 438, top: 1090, width: 358, height: 26 },
  { label: "Seibu Shinjuku route", href: "/access#seibu", left: 438, top: 1118, width: 358, height: 26 },
  { label: "Subway route", href: "/access#subway", left: 438, top: 1147, width: 358, height: 26 },
  { label: "Taxi route", href: "/access#taxi", left: 438, top: 1175, width: 358, height: 26 },
  { label: "Walking route detail", href: "/access#walk", left: 438, top: 1204, width: 358, height: 26 },
  { label: "Power information", href: "/access#battery", left: 438, top: 1232, width: 358, height: 26 },
  { label: "Nearby Kabukicho ichiban-gai", href: "/access#nearby-01", left: 80, top: 1304, width: 109, height: 99 },
  { label: "Nearby TOHO cinemas", href: "/access#nearby-02", left: 197, top: 1304, width: 109, height: 99 },
  { label: "Nearby Godzilla Head", href: "/access#nearby-03", left: 315, top: 1304, width: 109, height: 99 },
  { label: "Nearby Don Quijote", href: "/access#nearby-04", left: 434, top: 1304, width: 110, height: 99 },
  { label: "Nearby Prince Hotel", href: "/access#nearby-05", left: 556, top: 1304, width: 110, height: 99 },
  { label: "Nearby Omoide Yokocho", href: "/access#nearby-06", left: 676, top: 1304, width: 110, height: 99 },
  { label: "English mail", href: "mailto:info@example.com", left: 81, top: 1535, width: 61, height: 25 },
  { label: "English phone", href: "tel:03-1234-5678", left: 151, top: 1535, width: 51, height: 25 },
  { label: "English chat", href: "https://line.me/R/ti/p/@tsurusen", left: 209, top: 1535, width: 45, height: 25 },
  { label: "International Google Maps", href: "https://maps.google.com/?q=Kabukicho+Shinjuku", left: 80, top: 1569, width: 80, height: 38 },
  { label: "Translation support", href: "/access#translation", left: 165, top: 1569, width: 79, height: 38 },
  { label: "Parking detail", href: "/access#parking", left: 344, top: 1585, width: 181, height: 29 },
  { label: "FAQ one", href: "/faq#lost", left: 565, top: 1462, width: 221, height: 27 },
  { label: "FAQ two", href: "/faq#by-car", left: 565, top: 1491, width: 221, height: 27 },
  { label: "FAQ three", href: "/faq#taxi", left: 565, top: 1520, width: 221, height: 27 },
  { label: "FAQ four", href: "/faq#parking", left: 565, top: 1549, width: 221, height: 27 },
  { label: "FAQ five", href: "/faq#landmark", left: 565, top: 1578, width: 221, height: 27 },
  { label: "Street view previous", href: "/access#street-view", left: 80, top: 1710, width: 24, height: 30 },
  { label: "Street view next", href: "/access#street-view", left: 371, top: 1710, width: 24, height: 30 },
  { label: "Street view main", href: "/access#street-view", left: 78, top: 1664, width: 304, height: 94 },
  { label: "Floating Google Maps", href: "https://maps.google.com/?q=Kabukicho+Shinjuku", left: 795, top: 1510, width: 62, height: 72 },
  { label: "Floating web reserve", href: "/reservation", left: 795, top: 1584, width: 62, height: 72 },
  { label: "Floating line reserve", href: "https://line.me/R/ti/p/@tsurusen", left: 795, top: 1660, width: 62, height: 70 },
  { label: "Floating phone", href: "tel:03-1234-5678", left: 795, top: 1733, width: 62, height: 72 },
  { label: "Back to top", href: "#top", left: 816, top: 1786, width: 34, height: 34 },
  { label: "CTA web reserve", href: "/reservation", left: 425, top: 1782, width: 102, height: 34 },
  { label: "CTA line reserve", href: "https://line.me/R/ti/p/@tsurusen", left: 538, top: 1782, width: 102, height: 34 },
  { label: "CTA phone", href: "tel:03-1234-5678", left: 650, top: 1782, width: 97, height: 34 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "h1", text: "FIND YOUR WAY\nTO TSURUCHI", left: 94, top: 59, width: 318, height: 95 },
  { as: "p", text: "Located in the Heart\nof Kabukicho.", left: 94, top: 168, width: 170, height: 48 },
  { as: "h2", text: "LOCATION OVERVIEW", left: 80, top: 293, width: 137, height: 22 },
  { as: "h2", text: "TSURUSEN", left: 82, top: 326, width: 122, height: 34 },
  { as: "h2", text: "QUICK INFORMATION", left: 80, top: 597, width: 162, height: 22 },
  { as: "h2", text: "ROUTE GUIDE", left: 80, top: 704, width: 112, height: 22 },
  { as: "h2", text: "PHOTO NAVIGATION", left: 80, top: 916, width: 159, height: 22 },
  { as: "h2", text: "ILLUSTRATED MAP", left: 80, top: 1066, width: 147, height: 22 },
  { as: "h2", text: "TRANSPORTATION", left: 450, top: 1066, width: 144, height: 22 },
  { as: "h2", text: "NEARBY SPOTS", left: 80, top: 1282, width: 128, height: 22 },
  { as: "h2", text: "FOR INTERNATIONAL GUESTS", left: 80, top: 1438, width: 222, height: 22 },
  { as: "h2", text: "PARKING", left: 340, top: 1438, width: 77, height: 22 },
  { as: "h2", text: "FAQ", left: 568, top: 1438, width: 46, height: 22 },
  { as: "h2", text: "STREET VIEW", left: 80, top: 1648, width: 111, height: 22 },
  { as: "h2", text: "YOUR\nNIGHT\nSTARTS\nHERE", left: 426, top: 1644, width: 130, height: 112 },
];

const iconLayer = [
  { icon: MapPin, left: 88, top: 365, size: 15 },
  { icon: Clock, left: 88, top: 421, size: 15 },
  { icon: Phone, left: 88, top: 463, size: 15 },
  { icon: Train, left: 88, top: 493, size: 16 },
  { icon: MapPin, left: 223, top: 546, size: 15 },
  { icon: Train, left: 117, top: 629, size: 27 },
  { icon: Footprints, left: 297, top: 628, size: 27 },
  { icon: Clock, left: 478, top: 628, size: 27 },
  { icon: CalendarDays, left: 658, top: 628, size: 27 },
  { icon: Train, left: 456, top: 1094, size: 17 },
  { icon: Train, left: 456, top: 1123, size: 17 },
  { icon: Train, left: 456, top: 1151, size: 17 },
  { icon: Car, left: 456, top: 1179, size: 17 },
  { icon: Footprints, left: 456, top: 1207, size: 17 },
  { icon: MapPin, left: 456, top: 1236, size: 17 },
  { icon: Mail, left: 102, top: 1577, size: 19 },
  { icon: Languages, left: 188, top: 1577, size: 19 },
  { icon: HelpCircle, left: 770, top: 1467, size: 12 },
  { icon: MapPin, left: 823, top: 1533, size: 20 },
  { icon: CalendarDays, left: 823, top: 1608, size: 20 },
  { icon: MessageCircle, left: 823, top: 1685, size: 20 },
  { icon: Phone, left: 823, top: 1758, size: 20 },
  { icon: ChevronUp, left: 826, top: 1797, size: 14 },
  { icon: Building2, left: 583, top: 1660, size: 18 },
  { icon: Map, left: 748, top: 301, size: 18 },
  { icon: Navigation, left: 228, top: 1267, size: 17 },
];

const runtimeCss = `
body:has(.tsurusen-access-pixel-page) > header,
body:has(.tsurusen-access-pixel-page) > footer,
body:has(.tsurusen-access-pixel-page) > .mobile-sticky-cta,
body:has(.tsurusen-access-pixel-page) > .skip-link {
  display: none;
}

body:has(.tsurusen-access-pixel-page) main {
  padding-bottom: 0;
}

.tsurusen-access-pixel-page {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #060606;
}

.tsurusen-access-pixel-stage {
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  aspect-ratio: 864 / 1821;
  min-height: 1px;
  overflow: hidden;
  background: #060606;
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

export function TsurusenAccessPixelPage() {
  return (
    <div className="tsurusen-access-pixel-page" id="top">
      <style>{runtimeCss}</style>
      <div className="tsurusen-access-pixel-stage" aria-label="TSURUSEN ACCESS">
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
