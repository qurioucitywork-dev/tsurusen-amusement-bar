/* eslint-disable @next/next/no-img-element */
import {
  CalendarDays,
  Camera,
  CircleCheck,
  CircleDot,
  Dice5,
  GlassWater,
  MapPinned,
  MessageCircle,
  MicVocal,
  Phone,
  Target,
  Trophy,
  UsersRound,
  Wine,
} from "lucide-react";

const assetBase = "/assets/tsurusen-entertainment/png";
const designWidth = 863;
const designHeight = 1822;

const slices = [
  { src: `${assetBase}/section-01-hero.png`, top: 0, height: 258 },
  { src: `${assetBase}/section-02-experience.png`, top: 258, height: 196 },
  { src: `${assetBase}/section-03-entertainment-menu.png`, top: 454, height: 164 },
  { src: `${assetBase}/section-04-darts-experience.png`, top: 618, height: 151 },
  { src: `${assetBase}/section-05-karaoke-experience.png`, top: 769, height: 158 },
  { src: `${assetBase}/section-06-board-game-lounge.png`, top: 927, height: 179 },
  { src: `${assetBase}/section-07-space-gallery-floor-guide.png`, top: 1106, height: 158 },
  { src: `${assetBase}/section-08-capacity-perfect-for.png`, top: 1264, height: 146 },
  { src: `${assetBase}/section-09-timeline.png`, top: 1410, height: 120 },
  { src: `${assetBase}/section-10-night-moments.png`, top: 1530, height: 156 },
  { src: `${assetBase}/section-11-cta.png`, top: 1686, height: 136 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 199, top: 14, width: 31, height: 25 },
  { label: "ABOUT", href: "/about", left: 238, top: 14, width: 45, height: 25 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 283, top: 14, width: 84, height: 25 },
  { label: "FOOD MENU", href: "/food-menu", left: 391, top: 14, width: 69, height: 25 },
  { label: "DRINK MENU", href: "/drink-menu", left: 465, top: 14, width: 72, height: 25 },
  { label: "ENTERTAINMENT", href: "/play", left: 537, top: 14, width: 82, height: 25 },
  { label: "SCENE", href: "/party", left: 625, top: 14, width: 43, height: 25 },
  { label: "GALLERY", href: "/sns", left: 674, top: 14, width: 52, height: 25 },
  { label: "ACCESS", href: "/access", left: 729, top: 14, width: 52, height: 25 },
  { label: "RESERVE", href: "/reservation", left: 783, top: 10, width: 55, height: 32 },
];

const hitLinks = [
  { label: "ダーツ", href: "/play#darts", left: 44, top: 489, width: 187, height: 109 },
  { label: "カラオケ", href: "/play#karaoke", left: 240, top: 489, width: 187, height: 109 },
  { label: "ボードゲーム", href: "/play#board-game", left: 436, top: 489, width: 187, height: 109 },
  { label: "ラウンジ", href: "/space", left: 631, top: 489, width: 188, height: 109 },
  { label: "合コン", href: "/party#group-date", left: 300, top: 1298, width: 88, height: 100 },
  { label: "女子会", href: "/party#girls-party", left: 393, top: 1298, width: 87, height: 100 },
  { label: "誕生日", href: "/party#birthday", left: 486, top: 1298, width: 87, height: 100 },
  { label: "貸切パーティー", href: "/party#private", left: 579, top: 1298, width: 87, height: 100 },
  { label: "二次会", href: "/party#after-party", left: 672, top: 1298, width: 87, height: 100 },
  { label: "海外旅行者", href: "/party#visitor", left: 765, top: 1298, width: 55, height: 100 },
  { label: "WEB予約", href: "/reservation", left: 794, top: 1549, width: 63, height: 64 },
  { label: "LINE予約", href: "https://line.me/R/ti/p/@tsurusen", left: 794, top: 1620, width: 63, height: 64 },
  { label: "電話予約", href: "tel:03-XXXX-XXXX", left: 794, top: 1691, width: 63, height: 64 },
  { label: "CTA WEB予約", href: "/reservation", left: 243, top: 1782, width: 120, height: 33 },
  { label: "CTA LINE予約", href: "https://line.me/R/ti/p/@tsurusen", left: 373, top: 1782, width: 120, height: 33 },
  { label: "CTA 電話予約", href: "tel:03-XXXX-XXXX", left: 503, top: 1782, width: 120, height: 33 },
];

const textBlocks = [
  { as: "h1", text: "PLAY\nTOGETHER", left: 305, top: 57, width: 260, height: 135 },
  { as: "p", text: "Drink. Sing. Throw. Repeat.", left: 356, top: 199, width: 170, height: 22 },
  { as: "h2", text: "EXPERIENCE", left: 472, top: 289, width: 115, height: 24 },
  { as: "p", text: "ここはただのバーではありません。\n遊びとお酒が融合した\n大人の遊び場。", left: 472, top: 321, width: 290, height: 78 },
  { as: "h2", text: "ENTERTAINMENT MENU", left: 359, top: 462, width: 180, height: 25 },
  { as: "h2", text: "DARTS EXPERIENCE", left: 319, top: 635, width: 156, height: 25 },
  { as: "h2", text: "KARAOKE EXPERIENCE", left: 49, top: 789, width: 176, height: 25 },
  { as: "h2", text: "BOARD GAME LOUNGE", left: 49, top: 947, width: 170, height: 25 },
  { as: "h2", text: "SPACE GALLERY", left: 49, top: 1127, width: 145, height: 25 },
  { as: "h2", text: "FLOOR GUIDE", left: 444, top: 1127, width: 122, height: 25 },
  { as: "h2", text: "CAPACITY", left: 49, top: 1283, width: 100, height: 25 },
  { as: "h2", text: "PERFECT FOR", left: 299, top: 1283, width: 122, height: 25 },
  { as: "h2", text: "ENTERTAINMENT TIMELINE", left: 327, top: 1424, width: 210, height: 25 },
  { as: "h2", text: "NIGHT MOMENTS", left: 382, top: 1544, width: 132, height: 25 },
  { as: "h2", text: "LET'S PLAY\nTONIGHT", left: 287, top: 1699, width: 294, height: 75 },
];

const iconLayer = [
  { icon: Camera, left: 30, top: 17, size: 18 },
  { icon: Target, left: 128, top: 505, size: 32 },
  { icon: MicVocal, left: 335, top: 506, size: 32 },
  { icon: Dice5, left: 519, top: 506, size: 32 },
  { icon: Wine, left: 721, top: 506, size: 32 },
  { icon: Target, left: 219, top: 1450, size: 34 },
  { icon: MicVocal, left: 343, top: 1450, size: 34 },
  { icon: Dice5, left: 495, top: 1450, size: 34 },
  { icon: GlassWater, left: 648, top: 1450, size: 34 },
  { icon: Camera, left: 774, top: 1450, size: 34 },
  { icon: CalendarDays, left: 808, top: 1568, size: 22 },
  { icon: MessageCircle, left: 808, top: 1641, size: 22 },
  { icon: Phone, left: 808, top: 1712, size: 22 },
  { icon: MapPinned, left: 734, top: 1132, size: 14 },
  { icon: UsersRound, left: 736, top: 1299, size: 14 },
  { icon: Trophy, left: 759, top: 1299, size: 14 },
  { icon: CircleDot, left: 69, top: 1450, size: 34 },
];

const checkMarks = [
  { left: 319, top: 699 },
  { left: 319, top: 719 },
  { left: 319, top: 739 },
  { left: 49, top: 859 },
  { left: 49, top: 878 },
  { left: 49, top: 898 },
  { left: 179, top: 1318 },
  { left: 179, top: 1341 },
  { left: 179, top: 1366 },
  { left: 179, top: 1390 },
];

const xPct = (value: number) => `${(value / designWidth) * 100}%`;
const yPct = (value: number) => `${(value / designHeight) * 100}%`;

const entertainmentRuntimeCss = `
body:has(.tsurusen-entertainment-pixel-page) > header,
body:has(.tsurusen-entertainment-pixel-page) > footer,
body:has(.tsurusen-entertainment-pixel-page) > .mobile-sticky-cta,
body:has(.tsurusen-entertainment-pixel-page) > .skip-link {
  display: none;
}

body:has(.tsurusen-entertainment-pixel-page) main {
  padding-bottom: 0;
}

.tsurusen-entertainment-pixel-page {
  position: relative;
  width: 100vw;
  overflow-x: hidden;
  background: #090807;
}

.tsurusen-entertainment-pixel-stage {
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  aspect-ratio: 863 / 1822;
  min-height: 1px;
  overflow: hidden;
  background: #090807;
}
`;

function HitLink({
  href,
  label,
  left,
  top,
  width,
  height,
}: {
  href: string;
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
}) {
  return (
    <a
      className="pixel-hit"
      href={href}
      aria-label={label}
      style={{ left: xPct(left), top: yPct(top), width: xPct(width), height: yPct(height) }}
    >
      <span>{label}</span>
    </a>
  );
}

function PixelText({
  as,
  text,
  left,
  top,
  width,
  height,
}: {
  as: string;
  text: string;
  left: number;
  top: number;
  width: number;
  height: number;
}) {
  const Tag = as as "h1" | "h2" | "p";

  return (
    <Tag
      className="pixel-text"
      style={{ left: xPct(left), top: yPct(top), width: xPct(width), height: yPct(height) }}
    >
      {text}
    </Tag>
  );
}

export function TsurusenEntertainmentPixelPage() {
  return (
    <div className="tsurusen-entertainment-pixel-page" id="top">
      <style>{entertainmentRuntimeCss}</style>
      <div className="tsurusen-entertainment-pixel-stage" aria-label="TSURUSEN ENTERTAINMENT">
        {slices.map((slice) => (
          <img
            key={slice.src}
            src={slice.src}
            alt=""
            aria-hidden="true"
            className="pixel-slice"
            draggable={false}
            style={{ top: yPct(slice.top), height: yPct(slice.height) }}
          />
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
            return (
              <Icon
                key={`${item.left}-${item.top}`}
                size={item.size}
                strokeWidth={1.6}
                style={{ left: xPct(item.left), top: yPct(item.top) }}
              />
            );
          })}
          {checkMarks.map((item) => (
            <CircleCheck
              key={`${item.left}-${item.top}`}
              size={10}
              strokeWidth={1.8}
              style={{ left: xPct(item.left), top: yPct(item.top) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
