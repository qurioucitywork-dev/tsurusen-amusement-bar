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

const designWidth = 863;
const designHeight = 1822;
const assetBase = "/assets/tsurusen-access/png";

type PixelTextBlock = {
  as: "h1" | "h2" | "p";
  text: string;
  left: number;
  top: number;
  width: number;
  height: number;
  size: number;
  lineHeight?: number;
  tracking?: number;
  weight?: number;
  variant?: "hero" | "serif" | "gold" | "body" | "button" | "label" | "tiny" | "white";
  align?: "left" | "center" | "right";
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
  { src: `${assetBase}/section-09-street-cta.png`, top: 1627, height: 195 },
];

const navLinks = [
  { label: "TOP", href: "/", left: 190, top: 14, width: 35, height: 27 },
  { label: "ABOUT", href: "/#about", left: 230, top: 14, width: 48, height: 27 },
  { label: "PRICE & SYSTEM", href: "/pricing", left: 282, top: 14, width: 91, height: 27 },
  { label: "FOOD MENU", href: "/food-menu", left: 384, top: 14, width: 72, height: 27 },
  { label: "DRINK MENU", href: "/drink-menu", left: 462, top: 14, width: 78, height: 27 },
  { label: "ENTERTAINMENT", href: "/play", left: 546, top: 14, width: 98, height: 27 },
  { label: "SCENE", href: "/#scene", left: 648, top: 14, width: 43, height: 27 },
  { label: "GALLERY", href: "/#gallery", left: 694, top: 14, width: 45, height: 27 },
  { label: "ACCESS", href: "/access", left: 742, top: 14, width: 43, height: 27 },
  { label: "RESERVE", href: "/reservation", left: 787, top: 9, width: 62, height: 40 },
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
  { as: "p", text: "AMUSEMENT BAR\nTSURUSEN", left: 67, top: 16, width: 92, height: 29, size: 10, lineHeight: 1.45, tracking: 2.2, weight: 800, variant: "gold" },
  { as: "p", text: "TOP", left: 191, top: 23, width: 28, height: 16, size: 11, tracking: 1.1, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "ABOUT", left: 230, top: 23, width: 44, height: 16, size: 11, tracking: 1.1, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "PRICE & SYSTEM", left: 280, top: 23, width: 92, height: 16, size: 10, tracking: 1.0, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "FOOD MENU", left: 384, top: 23, width: 72, height: 16, size: 10.5, tracking: 1.0, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "DRINK MENU", left: 462, top: 23, width: 78, height: 16, size: 10.5, tracking: 1.0, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "ENTERTAINMENT", left: 546, top: 23, width: 98, height: 16, size: 9.8, tracking: 0.9, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "SCENE", left: 649, top: 23, width: 42, height: 16, size: 10.5, tracking: 1.0, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "GALLERY", left: 694, top: 23, width: 48, height: 16, size: 10.5, tracking: 1.0, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "ACCESS", left: 744, top: 23, width: 43, height: 16, size: 10.5, tracking: 1.0, weight: 900, variant: "gold", align: "center" },
  { as: "p", text: "RESERVE", left: 794, top: 22, width: 45, height: 16, size: 9.8, tracking: 1.0, weight: 800, variant: "white", align: "center" },

  { as: "h1", text: "FIND YOUR WAY\nTO TSURUCHI", left: 29, top: 70, width: 392, height: 95, size: 45, lineHeight: 1.0, tracking: -0.5, weight: 500, variant: "hero" },
  { as: "p", text: "Located in the Heart\nof Kabukicho.", left: 29, top: 177, width: 229, height: 57, size: 22, lineHeight: 1.25, tracking: 0, weight: 500, variant: "gold" },
  { as: "p", text: "SCROLL", left: 31, top: 282, width: 46, height: 13, size: 7, tracking: 1.4, weight: 800, variant: "white", align: "center" },

  { as: "h2", text: "LOCATION OVERVIEW", left: 43, top: 296, width: 150, height: 19, size: 11, tracking: 1.2, weight: 800, variant: "gold" },
  { as: "p", text: "ダーツ＆カラオケ アミューズメントバー 鶴千", left: 43, top: 316, width: 190, height: 16, size: 8.5, lineHeight: 1.3, tracking: 0.3, weight: 600, variant: "white" },
  { as: "h2", text: "TSURUSEN", left: 43, top: 331, width: 145, height: 33, size: 26, lineHeight: 1, tracking: 0.2, weight: 400, variant: "serif" },
  { as: "p", text: "〒160-0021\n東京都新宿区歌舞伎町1-2-3\nレモンビル B2F", left: 72, top: 374, width: 168, height: 44, size: 10, lineHeight: 1.45, tracking: 0.2, weight: 600, variant: "body" },
  { as: "p", text: "営業時間　18:00 - 5:00\n年中無休", left: 72, top: 431, width: 168, height: 32, size: 10, lineHeight: 1.45, tracking: 0.2, weight: 600, variant: "body" },
  { as: "p", text: "電話番号　03-1234-5678", left: 72, top: 474, width: 168, height: 17, size: 10, lineHeight: 1.4, tracking: 0.2, weight: 600, variant: "body" },
  { as: "p", text: "最寄駅　JR新宿駅 東口 徒歩5分\n　　　　西武新宿駅 徒歩3分", left: 72, top: 504, width: 178, height: 34, size: 10, lineHeight: 1.45, tracking: 0.2, weight: 600, variant: "body" },
  { as: "p", text: "Google Mapsで開く", left: 81, top: 549, width: 122, height: 14, size: 10, tracking: 0.4, weight: 800, variant: "button", align: "center" },

  { as: "h2", text: "QUICK INFORMATION", left: 42, top: 600, width: 160, height: 18, size: 11, tracking: 1.1, weight: 800, variant: "gold" },
  { as: "p", text: "最寄駅\n新宿駅 東口\n徒歩5分", left: 116, top: 615, width: 84, height: 43, size: 13, lineHeight: 1.35, tracking: 0.2, weight: 700, variant: "white", align: "center" },
  { as: "p", text: "アクセス\n西武新宿駅\n徒歩3分", left: 290, top: 615, width: 88, height: 43, size: 13, lineHeight: 1.35, tracking: 0.2, weight: 700, variant: "white", align: "center" },
  { as: "p", text: "営業時間\n18:00 - 5:00\n(L.O. 4:30)", left: 488, top: 615, width: 89, height: 43, size: 13, lineHeight: 1.35, tracking: 0.2, weight: 700, variant: "white", align: "center" },
  { as: "p", text: "定休日\n年中無休", left: 704, top: 615, width: 78, height: 43, size: 14, lineHeight: 1.45, tracking: 0.2, weight: 800, variant: "white", align: "center" },

  { as: "h2", text: "ROUTE GUIDE", left: 42, top: 704, width: 120, height: 18, size: 11, tracking: 1.2, weight: 800, variant: "gold" },
  { as: "p", text: "1\n新宿駅 東口\n東口を出て広場へ進みます。", left: 50, top: 724, width: 158, height: 40, size: 11, lineHeight: 1.3, tracking: 0.2, weight: 700, variant: "white", align: "center" },
  { as: "p", text: "2\n歌舞伎町一番街\nアーチをくぐって直進します。", left: 250, top: 724, width: 158, height: 40, size: 11, lineHeight: 1.3, tracking: 0.2, weight: 700, variant: "white", align: "center" },
  { as: "p", text: "3\nピックレモンビル\n右手に見えるビルが目印。", left: 451, top: 724, width: 158, height: 40, size: 11, lineHeight: 1.3, tracking: 0.2, weight: 700, variant: "white", align: "center" },
  { as: "p", text: "4\n地下2階 鶴千\n階段またはエレベーターでB2Fへ。", left: 652, top: 724, width: 160, height: 40, size: 11, lineHeight: 1.3, tracking: 0.2, weight: 700, variant: "white", align: "center" },
  { as: "p", text: "徒歩5分", left: 102, top: 850, width: 70, height: 16, size: 12, tracking: 0.5, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "徒歩3分", left: 302, top: 850, width: 70, height: 16, size: 12, tracking: 0.5, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "徒歩1分", left: 502, top: 850, width: 70, height: 16, size: 12, tracking: 0.5, weight: 800, variant: "white", align: "center" },
  { as: "p", text: "到着！", left: 704, top: 850, width: 70, height: 16, size: 12, tracking: 0.5, weight: 800, variant: "white", align: "center" },

  { as: "h2", text: "PHOTO NAVIGATION", left: 42, top: 918, width: 160, height: 18, size: 11, tracking: 1.2, weight: 800, variant: "gold" },
  { as: "p", text: "新宿駅 東口\n東口改札を出ます", left: 42, top: 1010, width: 80, height: 30, size: 8.2, lineHeight: 1.45, weight: 600, variant: "white", align: "center" },
  { as: "p", text: "横断歩道を渡る\n信号を渡って直進", left: 129, top: 1010, width: 80, height: 30, size: 8.2, lineHeight: 1.45, weight: 600, variant: "white", align: "center" },
  { as: "p", text: "歌舞伎町の街並\n大きな看板が目印", left: 216, top: 1010, width: 80, height: 30, size: 8.2, lineHeight: 1.45, weight: 600, variant: "white", align: "center" },
  { as: "p", text: "歌舞伎町一番街\nアーチをくぐります", left: 303, top: 1010, width: 80, height: 30, size: 8.2, lineHeight: 1.45, weight: 600, variant: "white", align: "center" },
  { as: "p", text: "ピックレモンビル\n右手のビルへ", left: 390, top: 1010, width: 80, height: 30, size: 8.2, lineHeight: 1.45, weight: 600, variant: "white", align: "center" },
  { as: "p", text: "ビル入口\nこちらの入口から", left: 478, top: 1010, width: 80, height: 30, size: 8.2, lineHeight: 1.45, weight: 600, variant: "white", align: "center" },
  { as: "p", text: "地下2階へ\n階段またはEVでB2Fへ", left: 565, top: 1010, width: 80, height: 30, size: 8.2, lineHeight: 1.45, weight: 600, variant: "white", align: "center" },
  { as: "p", text: "鶴千 店舗入口\n到着です！", left: 654, top: 1010, width: 80, height: 30, size: 8.2, lineHeight: 1.45, weight: 600, variant: "white", align: "center" },

  { as: "h2", text: "ILLUSTRATED MAP", left: 42, top: 1067, width: 150, height: 18, size: 11, tracking: 1.2, weight: 800, variant: "gold" },
  { as: "h2", text: "TRANSPORTATION", left: 448, top: 1067, width: 145, height: 18, size: 11, tracking: 1.2, weight: 800, variant: "gold" },
  { as: "p", text: "JR　　　　　新宿駅 東口 徒歩5分\n西武新宿線　西武新宿駅 徒歩3分\n地下鉄　　　新宿三丁目駅 徒歩7分\nタクシー　　新宿駅から約700円（約5分）\n徒歩　　　　新宿駅から約5分\n駐車場情報　近隣の駐車場は公式サイトをご確認ください", left: 491, top: 1091, width: 300, height: 160, size: 10, lineHeight: 1.85, tracking: 0.2, weight: 600, variant: "body" },

  { as: "h2", text: "NEARBY SPOTS", left: 42, top: 1283, width: 130, height: 18, size: 11, tracking: 1.2, weight: 800, variant: "gold" },
  { as: "p", text: "歌舞伎町一番街\n徒歩2分", left: 52, top: 1372, width: 100, height: 28, size: 9.2, lineHeight: 1.45, weight: 700, variant: "white" },
  { as: "p", text: "TOHOシネマズ新宿\n徒歩3分", left: 180, top: 1372, width: 100, height: 28, size: 9.2, lineHeight: 1.45, weight: 700, variant: "white" },
  { as: "p", text: "ゴジラヘッド\n徒歩4分", left: 309, top: 1372, width: 100, height: 28, size: 9.2, lineHeight: 1.45, weight: 700, variant: "white" },
  { as: "p", text: "ドン・キホーテ新宿店\n徒歩5分", left: 438, top: 1372, width: 100, height: 28, size: 9.2, lineHeight: 1.45, weight: 700, variant: "white" },
  { as: "p", text: "新宿プリンスホテル\n徒歩6分", left: 567, top: 1372, width: 100, height: 28, size: 9.2, lineHeight: 1.45, weight: 700, variant: "white" },
  { as: "p", text: "思い出横丁\n徒歩7分", left: 696, top: 1372, width: 100, height: 28, size: 9.2, lineHeight: 1.45, weight: 700, variant: "white" },

  { as: "h2", text: "FOR INTERNATIONAL GUESTS", left: 42, top: 1440, width: 220, height: 18, size: 10.5, tracking: 1.0, weight: 800, variant: "gold" },
  { as: "p", text: "We welcome guests\nfrom around the world.", left: 43, top: 1469, width: 160, height: 38, size: 14, lineHeight: 1.28, weight: 800, variant: "white" },
  { as: "p", text: "英語・中国語・韓国語・メニュー対応。\nスタッフが丁寧にご案内します。", left: 43, top: 1512, width: 190, height: 30, size: 8.5, lineHeight: 1.55, weight: 600, variant: "body" },
  { as: "p", text: "ENGLISH　中文　한국어", left: 51, top: 1540, width: 180, height: 16, size: 8.6, tracking: 0.4, weight: 800, variant: "gold" },
  { as: "p", text: "Google Maps", left: 74, top: 1598, width: 72, height: 14, size: 7.5, weight: 700, variant: "white", align: "center" },
  { as: "p", text: "Translation", left: 170, top: 1598, width: 72, height: 14, size: 7.5, weight: 700, variant: "white", align: "center" },

  { as: "h2", text: "PARKING", left: 340, top: 1440, width: 80, height: 18, size: 11, tracking: 1.2, weight: 800, variant: "gold" },
  { as: "p", text: "タイムズ歌舞伎町第5　徒歩3分　20分/300円\n歌舞伎町パーキング　徒歩5分　30分/400円", left: 403, top: 1476, width: 133, height: 79, size: 8.7, lineHeight: 1.65, weight: 600, variant: "body" },
  { as: "p", text: "もっと見る", left: 424, top: 1596, width: 62, height: 14, size: 9.2, tracking: 0.8, weight: 800, variant: "button", align: "center" },

  { as: "h2", text: "FAQ", left: 568, top: 1440, width: 42, height: 18, size: 11, tracking: 1.2, weight: 800, variant: "gold" },
  { as: "p", text: "道に迷った場合は？\n喫煙席はありますか？\nタクシーの料金は？\n駐車場はありますか？\n団体は何名まで？\n外国人でも利用できますか？", left: 580, top: 1462, width: 175, height: 145, size: 9.8, lineHeight: 2.35, weight: 700, variant: "body" },

  { as: "h2", text: "STREET VIEW", left: 42, top: 1648, width: 112, height: 18, size: 11, tracking: 1.2, weight: 800, variant: "gold" },
  { as: "h2", text: "YOUR\nNIGHT\nSTARTS\nHERE", left: 426, top: 1644, width: 130, height: 112, size: 30, lineHeight: 0.95, tracking: -0.4, weight: 500, variant: "serif" },
  { as: "p", text: "最高の夜を、ここから。", left: 426, top: 1760, width: 160, height: 20, size: 13, tracking: 0.8, weight: 700, variant: "gold" },
  { as: "p", text: "WEB予約", left: 450, top: 1792, width: 55, height: 13, size: 8.5, weight: 800, variant: "button", align: "center" },
  { as: "p", text: "LINE予約", left: 563, top: 1792, width: 55, height: 13, size: 8.5, weight: 800, variant: "button", align: "center" },
  { as: "p", text: "電話予約", left: 673, top: 1792, width: 55, height: 13, size: 8.5, weight: 800, variant: "button", align: "center" },
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
  aspect-ratio: 863 / 1822;
  min-height: 1px;
  overflow: hidden;
  background: #060606;
}

.tsurusen-access-pixel-page .pixel-text {
  z-index: 4;
  display: block;
  color: transparent;
  font-family: "Noto Sans JP", "Yu Gothic", "Yu Gothic UI", "Meiryo", system-ui, sans-serif;
  font-feature-settings: "kern";
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: none;
}

.tsurusen-access-pixel-page .access-text-hero,
.tsurusen-access-pixel-page .access-text-serif {
  font-family: "Playfair Display", "Times New Roman", "Noto Serif JP", serif;
}

.tsurusen-access-pixel-page .access-text-gold,
.tsurusen-access-pixel-page .access-text-button {
  color: transparent;
  text-shadow: none;
}

.tsurusen-access-pixel-page .access-text-body {
  color: transparent;
}

.tsurusen-access-pixel-page .access-text-white {
  color: transparent;
}

.tsurusen-access-pixel-page .pixel-icon-layer {
  z-index: 4;
  color: transparent;
  filter: none;
}
`;

const xPct = (value: number) => `${(value / designWidth) * 100}%`;
const yPct = (value: number) => `${(value / designHeight) * 100}%`;
const vwScale = (value: number) => `calc(100vw * ${value / designWidth})`;

function HitLink({ href, label, left, top, width, height }: { href: string; label: string; left: number; top: number; width: number; height: number }) {
  return (
    <a className="pixel-hit" href={href} aria-label={label} style={{ left: xPct(left), top: yPct(top), width: xPct(width), height: yPct(height) }}>
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
  size,
  lineHeight = 1,
  tracking = 0,
  weight = 700,
  variant = "body",
  align = "left",
}: PixelTextBlock) {
  const Tag = as;
  return (
    <Tag
      className={`pixel-text access-text-${variant}`}
      style={{
        left: xPct(left),
        top: yPct(top),
        width: xPct(width),
        height: yPct(height),
        fontSize: vwScale(size),
        lineHeight,
        letterSpacing: tracking ? vwScale(tracking) : 0,
        fontWeight: weight,
        textAlign: align,
      }}
    >
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
