/* eslint-disable @next/next/no-img-element */
import { CalendarDays, Camera, MessageCircle, Phone, PlayCircle, Star, Users } from "lucide-react";

const designWidth = 864;
const designHeight = 1821;
const assetBase = "/assets/tsurusen-events/png";

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
  { src: `${assetBase}/section-02-featured-event.png`, top: 300, height: 260 },
  { src: `${assetBase}/section-03-upcoming-events.png`, top: 560, height: 237 },
  { src: `${assetBase}/section-04-calendar-categories.png`, top: 797, height: 180 },
  { src: `${assetBase}/section-05-gallery-moments.png`, top: 977, height: 235 },
  { src: `${assetBase}/section-06-past-events.png`, top: 1212, height: 167 },
  { src: `${assetBase}/section-07-community-reviews.png`, top: 1379, height: 170 },
  { src: `${assetBase}/section-08-host-sns-faq.png`, top: 1549, height: 171 },
  { src: `${assetBase}/section-09-cta.png`, top: 1720, height: 101 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 162, top: 14, width: 30, height: 25 },
  { label: "ABOUT", href: "/#about", left: 199, top: 14, width: 40, height: 25 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 244, top: 14, width: 78, height: 25 },
  { label: "FOOD MENU", href: "/food-menu", left: 326, top: 14, width: 61, height: 25 },
  { label: "DRINK MENU", href: "/drink-menu", left: 391, top: 14, width: 69, height: 25 },
  { label: "ENTERTAINMENT", href: "/play", left: 465, top: 14, width: 86, height: 25 },
  { label: "SCENES", href: "/#scene", left: 555, top: 14, width: 43, height: 25 },
  { label: "PRIVATE PARTY", href: "/private-party", left: 604, top: 14, width: 84, height: 25 },
  { label: "EVENTS", href: "/events", left: 644, top: 14, width: 48, height: 25 },
  { label: "ACCESS", href: "/access", left: 694, top: 14, width: 45, height: 25 },
  { label: "RESERVE", href: "/reservation", left: 787, top: 10, width: 56, height: 31 },
];

const hitLinks = [
  { label: "Logo", href: "/", left: 18, top: 14, width: 105, height: 23 },
  { label: "Event list", href: "/events#upcoming", left: 234, top: 222, width: 121, height: 40 },
  { label: "Join reserve", href: "/reservation", left: 363, top: 222, width: 121, height: 40 },
  { label: "Event calendar", href: "/events#calendar", left: 493, top: 222, width: 124, height: 40 },
  { label: "Featured event", href: "/events#featured", left: 45, top: 300, width: 755, height: 250 },
  { label: "Join DJ night", href: "/reservation", left: 64, top: 505, width: 112, height: 33 },
  { label: "Saturday DJ night", href: "/events/saturday-dj-night", left: 51, top: 597, width: 113, height: 188 },
  { label: "Darts tournament", href: "/events/darts-tournament", left: 174, top: 597, width: 115, height: 188 },
  { label: "Karaoke battle", href: "/events/karaoke-battle", left: 298, top: 597, width: 115, height: 188 },
  { label: "Ladies night", href: "/events/ladies-night", left: 421, top: 597, width: 115, height: 188 },
  { label: "Birthday party", href: "/events/birthday-party", left: 545, top: 597, width: 115, height: 188 },
  { label: "International night", href: "/events/international-night", left: 668, top: 597, width: 115, height: 188 },
  { label: "Upcoming view all", href: "/events#upcoming", left: 389, top: 580, width: 46, height: 18 },
  { label: "Calendar", href: "/events#calendar", left: 29, top: 797, width: 224, height: 174 },
  { label: "Category previous", href: "/events#categories", left: 272, top: 876, width: 18, height: 26 },
  { label: "DJ night category", href: "/events#dj-night", left: 283, top: 828, width: 87, height: 128 },
  { label: "Darts category", href: "/events#darts", left: 378, top: 828, width: 87, height: 128 },
  { label: "Karaoke category", href: "/events#karaoke", left: 473, top: 828, width: 87, height: 128 },
  { label: "Birthday category", href: "/events#birthday", left: 568, top: 828, width: 87, height: 128 },
  { label: "Season category", href: "/events#season", left: 663, top: 828, width: 87, height: 128 },
  { label: "Private category", href: "/events#private", left: 758, top: 828, width: 64, height: 128 },
  { label: "Category next", href: "/events#categories", left: 825, top: 876, width: 16, height: 26 },
  { label: "Gallery all", href: "/events#gallery", left: 158, top: 989, width: 39, height: 20 },
  { label: "Gallery party", href: "/events#gallery-party", left: 204, top: 989, width: 43, height: 20 },
  { label: "Gallery darts", href: "/events#gallery-darts", left: 253, top: 989, width: 43, height: 20 },
  { label: "Gallery karaoke", href: "/events#gallery-karaoke", left: 302, top: 989, width: 43, height: 20 },
  { label: "Gallery DJ", href: "/events#gallery-dj", left: 351, top: 989, width: 33, height: 20 },
  { label: "Event gallery", href: "/events#gallery", left: 34, top: 1015, width: 347, height: 181 },
  { label: "Moments view all", href: "/events#moments", left: 766, top: 993, width: 44, height: 20 },
  { label: "DJ night video", href: "/events#video-dj-night", left: 414, top: 1015, width: 77, height: 169 },
  { label: "Darts tournament video", href: "/events#video-darts", left: 501, top: 1015, width: 77, height: 169 },
  { label: "Karaoke stage video", href: "/events#video-karaoke", left: 588, top: 1015, width: 77, height: 169 },
  { label: "Birthday surprise video", href: "/events#video-birthday", left: 675, top: 1015, width: 77, height: 169 },
  { label: "Crowd moments video", href: "/events#video-crowd", left: 762, top: 1015, width: 62, height: 169 },
  { label: "Past previous", href: "/events#past", left: 39, top: 1295, width: 18, height: 26 },
  { label: "Golden week party", href: "/events/past/golden-week-party", left: 64, top: 1240, width: 112, height: 109 },
  { label: "Sakura party", href: "/events/past/sakura-party", left: 188, top: 1240, width: 112, height: 109 },
  { label: "White day event", href: "/events/past/white-day-event", left: 312, top: 1240, width: 112, height: 109 },
  { label: "Valentine party", href: "/events/past/valentine-party", left: 437, top: 1240, width: 111, height: 109 },
  { label: "New year party", href: "/events/past/new-year-party", left: 560, top: 1240, width: 112, height: 109 },
  { label: "Christmas party", href: "/events/past/christmas-party", left: 684, top: 1240, width: 112, height: 109 },
  { label: "Past next", href: "/events#past", left: 811, top: 1295, width: 18, height: 26 },
  { label: "Community join", href: "/reservation", left: 49, top: 1493, width: 132, height: 35 },
  { label: "Guest voice one", href: "/reviews#event-voice-01", left: 382, top: 1412, width: 76, height: 117 },
  { label: "Guest voice two", href: "/reviews#event-voice-02", left: 477, top: 1412, width: 76, height: 117 },
  { label: "Guest voice three", href: "/reviews#event-voice-03", left: 572, top: 1412, width: 76, height: 117 },
  { label: "Guest voice four", href: "/reviews#event-voice-04", left: 691, top: 1412, width: 80, height: 117 },
  { label: "Host view all", href: "/recruit", left: 289, top: 1574, width: 31, height: 17 },
  { label: "DJ Kenta", href: "/staff#dj-kenta", left: 48, top: 1591, width: 63, height: 111 },
  { label: "MC Lisa", href: "/staff#mc-lisa", left: 120, top: 1591, width: 63, height: 111 },
  { label: "Bartender Hiro", href: "/staff#hiro", left: 191, top: 1591, width: 63, height: 111 },
  { label: "Planner Aoi", href: "/staff#aoi", left: 263, top: 1591, width: 54, height: 111 },
  { label: "Instagram", href: "https://www.instagram.com/", left: 358, top: 1593, width: 63, height: 109 },
  { label: "TikTok", href: "https://www.tiktok.com/", left: 431, top: 1593, width: 63, height: 109 },
  { label: "YouTube", href: "https://www.youtube.com/", left: 504, top: 1593, width: 53, height: 109 },
  { label: "FAQ one", href: "/faq#event-reservation", left: 588, top: 1591, width: 225, height: 23 },
  { label: "FAQ two", href: "/faq#event-join", left: 588, top: 1619, width: 225, height: 23 },
  { label: "FAQ three", href: "/faq#event-seat", left: 588, top: 1647, width: 225, height: 23 },
  { label: "FAQ four", href: "/faq#event-cancel", left: 588, top: 1675, width: 225, height: 23 },
  { label: "FAQ five", href: "/faq#event-age", left: 588, top: 1703, width: 225, height: 17 },
  { label: "Floating event reserve", href: "/reservation", left: 788, top: 1433, width: 70, height: 72 },
  { label: "Floating line reserve", href: "https://line.me/R/ti/p/@tsurusen", left: 788, top: 1508, width: 70, height: 72 },
  { label: "Floating phone reserve", href: "tel:03-XXXX-XXXX", left: 788, top: 1584, width: 70, height: 73 },
  { label: "CTA event reserve", href: "/reservation", left: 197, top: 1783, width: 111, height: 36 },
  { label: "CTA web reserve", href: "/reservation", left: 316, top: 1783, width: 111, height: 36 },
  { label: "CTA line reserve", href: "https://line.me/R/ti/p/@tsurusen", left: 435, top: 1783, width: 111, height: 36 },
  { label: "CTA phone reserve", href: "tel:03-XXXX-XXXX", left: 554, top: 1783, width: 133, height: 36 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "h1", text: "EVENTS", left: 303, top: 68, width: 255, height: 74 },
  { as: "p", text: "Every Night\nHas Something New", left: 318, top: 146, width: 224, height: 60 },
  { as: "h2", text: "FEATURED EVENT", left: 65, top: 310, width: 151, height: 28 },
  { as: "h2", text: "TSURUSEN\nDJ Night", left: 223, top: 352, width: 235, height: 92 },
  { as: "h2", text: "UPCOMING EVENTS", left: 54, top: 578, width: 170, height: 28 },
  { as: "h2", text: "EVENT CALENDAR", left: 39, top: 809, width: 145, height: 28 },
  { as: "h2", text: "EVENT CATEGORIES", left: 282, top: 809, width: 170, height: 28 },
  { as: "h2", text: "EVENT GALLERY", left: 39, top: 989, width: 145, height: 28 },
  { as: "h2", text: "EVENT MOMENTS", left: 416, top: 989, width: 150, height: 28 },
  { as: "h2", text: "PAST EVENTS", left: 55, top: 1224, width: 130, height: 28 },
  { as: "h2", text: "MEET NEW FRIENDS.\nPLAY TOGETHER.\nDRINK TOGETHER.", left: 45, top: 1414, width: 220, height: 76 },
  { as: "h2", text: "GUEST VOICES", left: 368, top: 1394, width: 130, height: 28 },
  { as: "h2", text: "HOST TEAM", left: 39, top: 1565, width: 96, height: 28 },
  { as: "h2", text: "SNS", left: 350, top: 1565, width: 45, height: 28 },
  { as: "h2", text: "FAQ", left: 589, top: 1565, width: 45, height: 28 },
  { as: "h2", text: "JOIN THE NEXT EVENT", left: 252, top: 1736, width: 400, height: 52 },
];

const iconLayer = [
  { icon: CalendarDays, left: 239, top: 235, size: 18 },
  { icon: Users, left: 590, top: 765, size: 12 },
  { icon: PlayCircle, left: 439, top: 1084, size: 27 },
  { icon: PlayCircle, left: 525, top: 1084, size: 27 },
  { icon: PlayCircle, left: 612, top: 1084, size: 27 },
  { icon: PlayCircle, left: 699, top: 1084, size: 27 },
  { icon: PlayCircle, left: 787, top: 1084, size: 27 },
  { icon: Star, left: 384, top: 1418, size: 11 },
  { icon: Camera, left: 374, top: 1625, size: 24 },
  { icon: CalendarDays, left: 817, top: 1460, size: 22 },
  { icon: MessageCircle, left: 817, top: 1535, size: 22 },
  { icon: Phone, left: 817, top: 1611, size: 22 },
];

const runtimeCss = `
body:has(.tsurusen-events-pixel-page) > header,
body:has(.tsurusen-events-pixel-page) > footer,
body:has(.tsurusen-events-pixel-page) > .mobile-sticky-cta,
body:has(.tsurusen-events-pixel-page) > .skip-link {
  display: none;
}

body:has(.tsurusen-events-pixel-page) main {
  padding-bottom: 0;
}

.tsurusen-events-pixel-page {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #080708;
}

.tsurusen-events-pixel-stage {
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  aspect-ratio: 864 / 1821;
  min-height: 1px;
  overflow: hidden;
  background: #080708;
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

export function TsurusenEventsPixelPage() {
  return (
    <div className="tsurusen-events-pixel-page" id="top">
      <style>{runtimeCss}</style>
      <div className="tsurusen-events-pixel-stage" aria-label="TSURUSEN EVENTS">
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
