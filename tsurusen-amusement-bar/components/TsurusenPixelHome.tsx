"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, type CSSProperties } from "react";
import {
  Aperture,
  CalendarDays,
  Camera,
  CircleHelp,
  Clock,
  Dices,
  FileText,
  GlassWater,
  Gift,
  Home,
  MapPin,
  Menu,
  Mic2,
  MoonStar,
  Phone,
  Plus,
  Star,
  Tag,
  Target,
  Trophy,
  Utensils,
  UsersRound,
  Wine,
  X,
} from "lucide-react";

const designWidth = 864;
const designHeight = 1821;
const assetBase = "/assets/tsurusen-home/png";

const textlessSlices = [
  { src: `${assetBase}/section-01-hero-textless-ai.png`, top: 0, height: 361 },
  { src: `${assetBase}/section-02-about-textless-ai.png`, top: 361, height: 231 },
  { src: `${assetBase}/section-03-feature-textless-ai.png`, top: 592, height: 183 },
  { src: `${assetBase}/section-04-price-entertainment-textless-ai.png`, top: 775, height: 256 },
  { src: `${assetBase}/section-05-scene-textless-ai.png`, top: 1031, height: 150 },
  { src: `${assetBase}/section-06-instagram-reviews-textless-ai.png`, top: 1181, height: 237 },
  { src: `${assetBase}/section-07-event-access-faq-textless-ai.png`, top: 1418, height: 203 },
  { src: `${assetBase}/section-08-cta-footer-textless-ai.png`, top: 1621, height: 200 },
];

type PixelStyle = CSSProperties & Record<`--${string}`, string | number>;
type PixelTextBlock = {
  as: "h1" | "h2" | "h3" | "p" | "span";
  text: string;
  left: number;
  top: number;
  width: number;
  height: number;
  size: number;
  lineHeight?: number;
  tracking?: number;
  tone?: "ink" | "gold" | "muted" | "white" | "blue" | "pink";
  variant?: "hero" | "section" | "label" | "body" | "small" | "price" | "subtitle";
  align?: "left" | "center" | "right";
};
type PixelLink = {
  label: string;
  href: string;
  left: number;
  top: number;
  width: number;
  height: number;
};
type PixelButton = PixelLink & {
  sub?: string;
  tone?: "gold" | "blue" | "green" | "dark";
  icon?: typeof Camera;
  secondaryIcon?: typeof Camera;
  row?: "hero";
  framed?: boolean;
  compact?: boolean;
  cleanFill?: boolean;
};
type HeaderNavItem = {
  label: string;
  href: string;
  icon: typeof Camera;
  sub?: string;
  active?: boolean;
  group?: "menu";
};
type HeroAction = {
  label: string;
  sub: string;
  href: string;
  tone: "gold" | "blue" | "green" | "dark";
  icon?: typeof Camera;
  secondaryIcon?: typeof Camera;
};

const headerNavItems: HeaderNavItem[] = [
  { label: "HOME", href: "/", icon: Home, active: true },
  { label: "PRICE", href: "/pricing", icon: Tag, group: "menu" },
  { label: "DRINK MENU", href: "/drink-menu", icon: Wine, group: "menu" },
  { label: "FOOD MENU", href: "/food-menu", icon: Utensils, group: "menu" },
  { label: "ACCESS", href: "/access", icon: MapPin },
  { label: "BLOG", href: "/news", icon: FileText, sub: "記事" },
  { label: "CAMPAIGN", href: "/campaigns", icon: Gift },
  { label: "ENTERTAINMENT", href: "/play", icon: Mic2 },
  { label: "EVENTS", href: "/events", icon: CalendarDays },
  { label: "FAQ", href: "/#faq", icon: CircleHelp },
];

const heroActions: HeroAction[] = [
  { label: "WEB予約", sub: "RESERVE", href: "/reservation", tone: "gold" },
  { label: "電話予約", sub: "CALL", href: "tel:03-XXXX-XXXX", tone: "blue" },
  { label: "LINE予約", sub: "LINE", href: "https://line.me/R/ti/p/@tsurusen", tone: "green" },
  { label: "Instagram", sub: "FOLLOW", href: "https://www.instagram.com/", tone: "dark", icon: Camera },
];

const anchorTargets = [
  { id: "about", top: 361 },
  { id: "feature", top: 592 },
  { id: "price", top: 775 },
  { id: "play", top: 775 },
  { id: "scene", top: 1031 },
  { id: "gallery", top: 1181 },
  { id: "reviews", top: 1181 },
  { id: "event", top: 1418 },
  { id: "access", top: 1418 },
  { id: "faq", top: 1418 },
  { id: "reserve", top: 1621 },
];

const actionButtons: PixelButton[] = [
  { label: "WEB予約", sub: "RESERVE", href: "/reservation", left: 21, top: 300, width: 186, height: 60, tone: "gold", row: "hero", framed: true, cleanFill: true },
  { label: "電話予約", sub: "CALL", href: "tel:03-XXXX-XXXX", left: 226, top: 300, width: 189, height: 60, tone: "blue", row: "hero", framed: true, cleanFill: true },
  { label: "LINE予約", sub: "LINE", href: "https://line.me/R/ti/p/@tsurusen", left: 431, top: 300, width: 186, height: 60, tone: "green", row: "hero", framed: true, cleanFill: true },
  { label: "Instagram", sub: "FOLLOW", href: "https://www.instagram.com/", left: 637, top: 300, width: 205, height: 60, tone: "dark", icon: Aperture, secondaryIcon: Camera, row: "hero", framed: true, compact: true, cleanFill: true },
  { label: "VIEW MORE", href: "/#about", left: 126, top: 550, width: 72, height: 27, tone: "dark" },
  { label: "詳しく見る", sub: "VIEW MORE", href: "/pricing", left: 124, top: 984, width: 216, height: 28, tone: "dark" },
  { label: "もっと見る", sub: "VIEW MORE", href: "/#reviews", left: 508, top: 1379, width: 202, height: 27, tone: "dark" },
  { label: "イベント一覧を見る", sub: "VIEW MORE", href: "/#event", left: 70, top: 1581, width: 207, height: 25, tone: "dark" },
  { label: "すべてのFAQを見る", sub: "VIEW MORE", href: "/#faq", left: 616, top: 1585, width: 203, height: 25, tone: "dark" },
  { label: "WEB予約", sub: "RESERVE", href: "/reservation", left: 217, top: 1725, width: 129, height: 34, tone: "gold" },
  { label: "LINE予約", sub: "LINE", href: "https://line.me/R/ti/p/@tsurusen", left: 356, top: 1725, width: 139, height: 34, tone: "green" },
  { label: "電話予約", sub: "CALL", href: "tel:03-XXXX-XXXX", left: 510, top: 1725, width: 139, height: 34, tone: "blue" },
];

const hitLinks: PixelLink[] = [
  { label: "Logo", href: "/", left: 26, top: 15, width: 122, height: 32 },
  { label: "女子会", href: "/#scene", left: 28, top: 1060, width: 126, height: 109 },
  { label: "誕生日", href: "/#scene", left: 163, top: 1060, width: 126, height: 109 },
  { label: "貸切パーティー", href: "/#scene", left: 299, top: 1060, width: 126, height: 109 },
  { label: "二次会", href: "/#scene", left: 433, top: 1060, width: 126, height: 109 },
  { label: "合コン", href: "/#scene", left: 568, top: 1060, width: 126, height: 109 },
  { label: "デート", href: "/#scene", left: 704, top: 1060, width: 126, height: 109 },
  { label: "Instagram follow", href: "https://www.instagram.com/", left: 96, top: 1379, width: 249, height: 26 },
  { label: "Google reviews", href: "/#reviews", left: 509, top: 1376, width: 202, height: 27 },
];

const textBlocks: PixelTextBlock[] = [
  { as: "span", text: "AMUSEMENT BAR", left: 58, top: 17, width: 76, height: 8, size: 4.6, tracking: 1, variant: "small", tone: "gold" },
  { as: "span", text: "TSURUSEN", left: 58, top: 26, width: 98, height: 19, size: 15.5, tracking: 2.8, variant: "label", tone: "gold" },
  { as: "h1", text: "PLAY\nDRINK\nENJOY", left: 347, top: 67, width: 170, height: 177, size: 55, lineHeight: 0.96, tracking: 1.5, variant: "hero", tone: "white", align: "center" },
  { as: "p", text: "歌舞伎町最大級\nダーツ＆カラオケバー", left: 282, top: 241, width: 300, height: 58, size: 22.5, lineHeight: 1.24, tracking: 4.2, variant: "subtitle", tone: "ink", align: "center" },
  { as: "h2", text: "ABOUT", left: 126, top: 382, width: 104, height: 36, size: 33, tracking: 2.5, variant: "section", tone: "gold" },
  { as: "h2", text: "TSURUSEN", left: 126, top: 418, width: 232, height: 54, size: 48, lineHeight: 0.9, tracking: 4, variant: "hero", tone: "white" },
  {
    as: "p",
    text: "非日常を味わえる歌舞伎町のアミューズメントバー。\nダーツ、カラオケ、飲み放題を楽しみながら、\n仲間との夜を特別な時間に変えていきます。",
    left: 126,
    top: 487,
    width: 310,
    height: 54,
    size: 8.5,
    lineHeight: 1.72,
    tracking: 1.2,
    variant: "body",
    tone: "muted",
  },
  { as: "h2", text: "PRICE SYSTEM", left: 69, top: 793, width: 140, height: 25, size: 22, tracking: 1, variant: "section", tone: "gold" },
  { as: "h3", text: "MEN", left: 87, top: 834, width: 42, height: 24, size: 16, tracking: 1.6, variant: "section", tone: "blue" },
  { as: "h3", text: "WOMEN", left: 256, top: 834, width: 72, height: 24, size: 16, tracking: 1.6, variant: "section", tone: "pink" },
  { as: "p", text: "¥3,000 / 1hour", left: 85, top: 880, width: 142, height: 24, size: 16.4, tracking: 0, variant: "price", tone: "ink" },
  { as: "p", text: "延長　¥2,000 / 30min", left: 87, top: 924, width: 140, height: 14, size: 8.6, tracking: 0.35, variant: "body", tone: "muted" },
  { as: "p", text: "¥1,500 / 1hour", left: 254, top: 880, width: 142, height: 24, size: 16.4, tracking: 0, variant: "price", tone: "ink" },
  { as: "p", text: "延長　¥1,000 / 30min", left: 256, top: 924, width: 140, height: 14, size: 8.6, tracking: 0.35, variant: "body", tone: "muted" },
  { as: "span", text: "飲み放題", left: 99, top: 962, width: 58, height: 12, size: 8.6, tracking: 0.55, variant: "label", tone: "ink" },
  { as: "span", text: "ダーツ無料", left: 190, top: 962, width: 68, height: 12, size: 8.6, tracking: 0.55, variant: "label", tone: "ink" },
  { as: "span", text: "カラオケ無料", left: 286, top: 962, width: 78, height: 12, size: 8.6, tracking: 0.55, variant: "label", tone: "ink" },
  { as: "h2", text: "ENTERTAINMENT", left: 433, top: 793, width: 174, height: 25, size: 20.5, tracking: 0.65, variant: "section", tone: "gold" },
  { as: "h3", text: "ダーツ", left: 592, top: 832, width: 60, height: 19, size: 15, tracking: 1.5, variant: "label", tone: "gold" },
  { as: "p", text: "最新機種を完備。初心者から上級者まで\nみんなで盛り上がれる人気コンテンツ。", left: 592, top: 858, width: 188, height: 34, size: 7.1, lineHeight: 1.5, tracking: 0.45, variant: "body", tone: "muted" },
  { as: "h3", text: "カラオケ", left: 592, top: 903, width: 72, height: 19, size: 15, tracking: 1.5, variant: "label", tone: "gold" },
  { as: "p", text: "最新カラオケ機種を導入。\n大迫力の音響で熱唱しよう。", left: 592, top: 928, width: 188, height: 34, size: 7.1, lineHeight: 1.5, tracking: 0.45, variant: "body", tone: "muted" },
  { as: "h3", text: "ボードゲーム", left: 592, top: 972, width: 100, height: 18, size: 14, tracking: 1.4, variant: "label", tone: "gold" },
  { as: "p", text: "定番から話題のゲームまで多数取り揃え。\n飲みながらワイワイ楽しめる。", left: 592, top: 994, width: 188, height: 28, size: 6.4, lineHeight: 1.45, tracking: 0.25, variant: "body", tone: "muted" },
  { as: "h2", text: "SCENE", left: 28, top: 1038, width: 70, height: 25, size: 23, tracking: 1.2, variant: "section", tone: "gold" },
  { as: "span", text: "女子会", left: 50, top: 1129, width: 58, height: 16, size: 10.6, tracking: 0.8, variant: "label", tone: "ink", align: "center" },
  { as: "span", text: "誕生日", left: 186, top: 1129, width: 58, height: 16, size: 10.6, tracking: 0.8, variant: "label", tone: "ink", align: "center" },
  { as: "span", text: "貸切パーティー", left: 312, top: 1129, width: 90, height: 16, size: 10.6, tracking: 0.8, variant: "label", tone: "ink", align: "center" },
  { as: "span", text: "二次会", left: 459, top: 1129, width: 58, height: 16, size: 10.6, tracking: 0.8, variant: "label", tone: "ink", align: "center" },
  { as: "span", text: "合コン", left: 592, top: 1129, width: 58, height: 16, size: 10.6, tracking: 0.8, variant: "label", tone: "ink", align: "center" },
  { as: "span", text: "デート", left: 728, top: 1129, width: 58, height: 16, size: 10.6, tracking: 0.8, variant: "label", tone: "ink", align: "center" },
  { as: "h2", text: "INSTAGRAM", left: 28, top: 1197, width: 118, height: 25, size: 23, tracking: 1.2, variant: "section", tone: "gold" },
  { as: "span", text: "@TSURUSEN_OFFICIAL", left: 140, top: 1384, width: 105, height: 14, size: 7.4, tracking: 0.9, variant: "label", tone: "ink", align: "center" },
  { as: "h2", text: "GOOGLE REVIEWS", left: 394, top: 1197, width: 176, height: 25, size: 23, tracking: 1.2, variant: "section", tone: "gold" },
  { as: "span", text: "4.8（312件のレビュー）", left: 655, top: 1211, width: 120, height: 16, size: 8, tracking: 0.3, variant: "small", tone: "ink" },
  { as: "h2", text: "EVENT", left: 27, top: 1428, width: 76, height: 25, size: 23, tracking: 1.2, variant: "section", tone: "gold" },
  { as: "h3", text: "DARTS TOURNAMENT\nダーツ大会", left: 38, top: 1525, width: 82, height: 30, size: 9, lineHeight: 1.2, tracking: 0.5, variant: "label", tone: "ink" },
  { as: "h3", text: "DJ NIGHT\nDJ NIGHT", left: 149, top: 1525, width: 82, height: 30, size: 9, lineHeight: 1.2, tracking: 0.5, variant: "label", tone: "ink" },
  { as: "h3", text: "BIRTHDAY特典", left: 258, top: 1528, width: 74, height: 18, size: 9.5, tracking: 0.4, variant: "label", tone: "ink" },
  { as: "h2", text: "ACCESS", left: 358, top: 1428, width: 83, height: 25, size: 23, tracking: 1.2, variant: "section", tone: "gold" },
  {
    as: "p",
    text: "〒160-0021\n東京都新宿区歌舞伎町1-XX-XX\n鶴千ビル5F\n\n03-XXXX-XXXX\n\n18:00 - 05:00（L.O. 04:30）\n年中無休",
    left: 478,
    top: 1460,
    width: 126,
    height: 118,
    size: 7.2,
    lineHeight: 1.75,
    tracking: 0.2,
    variant: "body",
    tone: "muted",
  },
  { as: "h2", text: "FAQ", left: 615, top: 1428, width: 45, height: 25, size: 23, tracking: 1.2, variant: "section", tone: "gold" },
  { as: "span", text: "予約は必要ですか？", left: 630, top: 1457, width: 140, height: 14, size: 8.2, tracking: 0.4, variant: "body", tone: "ink" },
  { as: "span", text: "貸切は何名から可能ですか？", left: 630, top: 1489, width: 150, height: 14, size: 8.2, tracking: 0.4, variant: "body", tone: "ink" },
  { as: "span", text: "飲み放題の内容を教えてください", left: 630, top: 1521, width: 160, height: 14, size: 8.2, tracking: 0.4, variant: "body", tone: "ink" },
  { as: "span", text: "支払い方法は？", left: 630, top: 1553, width: 110, height: 14, size: 8.2, tracking: 0.4, variant: "body", tone: "ink" },
  { as: "span", text: "持ち込みはできますか？", left: 630, top: 1575, width: 130, height: 14, size: 8.2, tracking: 0.4, variant: "body", tone: "ink" },
  { as: "h2", text: "LET'S PLAY TONIGHT.", left: 230, top: 1646, width: 421, height: 57, size: 43, lineHeight: 1, tracking: 1.8, variant: "hero", tone: "gold", align: "center" },
  { as: "p", text: "今夜はTSURUSENで最高の時間を。", left: 322, top: 1682, width: 226, height: 12, size: 8, lineHeight: 1.1, tracking: 0.8, variant: "subtitle", tone: "ink", align: "center" },
  { as: "span", text: "けんたろう", left: 438, top: 1255, width: 72, height: 11, size: 7, tracking: 0.15, variant: "body", tone: "ink" },
  { as: "span", text: "2週間前", left: 438, top: 1268, width: 62, height: 9, size: 5.8, tracking: 0.15, variant: "body", tone: "muted" },
  { as: "p", text: "店内の雰囲気が最高！\nスタッフも親切でまた来ます！", left: 418, top: 1300, width: 104, height: 29, size: 6.4, lineHeight: 1.45, tracking: 0.25, variant: "body", tone: "ink" },
  { as: "span", text: "★★★★★", left: 428, top: 1342, width: 62, height: 10, size: 7.2, tracking: 1.25, variant: "small", tone: "gold" },
  { as: "span", text: "Mika", left: 604, top: 1255, width: 52, height: 11, size: 7, tracking: 0.15, variant: "body", tone: "ink" },
  { as: "span", text: "1ヶ月前", left: 604, top: 1268, width: 58, height: 9, size: 5.8, tracking: 0.15, variant: "body", tone: "muted" },
  { as: "p", text: "女子会で利用しました！\n飲み放題でコスパ最高です♪", left: 584, top: 1300, width: 112, height: 29, size: 6.4, lineHeight: 1.45, tracking: 0.25, variant: "body", tone: "ink" },
  { as: "span", text: "★★★★★", left: 594, top: 1342, width: 62, height: 10, size: 7.2, tracking: 1.25, variant: "small", tone: "gold" },
  { as: "span", text: "James", left: 770, top: 1255, width: 60, height: 11, size: 7, tracking: 0.15, variant: "body", tone: "ink" },
  { as: "span", text: "1ヶ月前", left: 770, top: 1268, width: 58, height: 9, size: 5.8, tracking: 0.15, variant: "body", tone: "muted" },
  { as: "p", text: "Great place! Good drinks,\ngood music, good people!", left: 750, top: 1300, width: 112, height: 29, size: 6.3, lineHeight: 1.4, tracking: 0.05, variant: "body", tone: "ink" },
  { as: "span", text: "★★★★★", left: 760, top: 1342, width: 62, height: 10, size: 7.2, tracking: 1.25, variant: "small", tone: "gold" },
  { as: "p", text: "2024.06.15 SAT\n20:00 START", left: 38, top: 1557, width: 82, height: 22, size: 6.3, lineHeight: 1.35, tracking: 0.25, variant: "body", tone: "ink" },
  { as: "p", text: "2024.06.22 SAT\n22:00 START", left: 149, top: 1557, width: 82, height: 22, size: 6.3, lineHeight: 1.35, tracking: 0.25, variant: "body", tone: "ink" },
  { as: "p", text: "誕生日の方は特典あり！\n詳しくはスタッフまで", left: 258, top: 1555, width: 82, height: 24, size: 6.2, lineHeight: 1.4, tracking: 0.15, variant: "body", tone: "ink" },
  { as: "span", text: "AMUSEMENT BAR", left: 68, top: 1770, width: 76, height: 9, size: 4.3, tracking: 0.85, variant: "small", tone: "gold" },
  { as: "span", text: "TSURUSEN", left: 68, top: 1780, width: 88, height: 16, size: 12.5, tracking: 2.2, variant: "label", tone: "gold" },
  { as: "p", text: "INFORMATION\nABOUT\nFEATURE\nPRICE", left: 224, top: 1772, width: 64, height: 42, size: 5.4, lineHeight: 1.65, tracking: 0.3, variant: "small", tone: "muted" },
  { as: "p", text: "SCENE\nGALLERY\nEVENT\nACCESS", left: 307, top: 1772, width: 60, height: 42, size: 5.4, lineHeight: 1.65, tracking: 0.3, variant: "small", tone: "muted" },
  { as: "p", text: "FOLLOW US\nInstagram\nLINE", left: 472, top: 1772, width: 66, height: 36, size: 5.4, lineHeight: 1.65, tracking: 0.3, variant: "small", tone: "muted" },
  { as: "p", text: "ADDRESS\n東京都新宿区歌舞伎町1-XX-XX\n鶴千ビル5F\n03-XXXX-XXXX", left: 562, top: 1772, width: 112, height: 42, size: 5.2, lineHeight: 1.55, tracking: 0.2, variant: "small", tone: "muted" },
  { as: "p", text: "OPENING HOURS\n18:00 - 05:00（L.O. 04:30）\n年中無休", left: 711, top: 1772, width: 104, height: 36, size: 5.2, lineHeight: 1.65, tracking: 0.2, variant: "small", tone: "muted" },
  { as: "span", text: "© 2024 TSURUSEN. All Rights Reserved.", left: 402, top: 1810, width: 118, height: 9, size: 4.5, tracking: 0.1, variant: "body", tone: "muted", align: "center" },
];

const featureItems = [
  { icon: GlassWater, label: "飲み放題", sub: "月曜日〜日曜日まで\n好きなだけ飲み放題", left: 107, top: 704 },
  { icon: Target, label: "ダーツ", sub: "最新ダーツ機種完備\nダーツ無料で遊び放題", left: 236, top: 704 },
  { icon: Mic2, label: "カラオケ", sub: "最新カラオケ完備\n歌い放題", left: 365, top: 704 },
  { icon: UsersRound, label: "貸切100名", sub: "最大100名様までOK\n貸切パーティーに最適", left: 494, top: 704 },
  { icon: MoonStar, label: "朝まで営業", sub: "朝5時まで営業\n終電を逃しても安心", left: 623, top: 704 },
  { icon: Wine, label: "女子会歓迎", sub: "女子会プランあり\n女性に嬉しい特典多数", left: 752, top: 704 },
];

const featureCardInner = {
  top: 632,
  width: 122,
  height: 126,
};

const priceCards = [
  {
    title: "MEN",
    price: "¥3,000 / 1hour",
    extension: "延長　¥2,000 / 30min",
    tone: "blue",
    left: 68,
    perks: [
      { icon: GlassWater, label: "飲み放題" },
      { icon: Target, label: "ダーツ無料" },
    ],
  },
  {
    title: "WOMEN",
    price: "¥1,500 / 1hour",
    extension: "延長　¥1,000 / 30min",
    tone: "pink",
    left: 234,
    perks: [{ icon: Mic2, label: "カラオケ無料" }],
  },
];

const entertainmentItems = [
  {
    icon: Target,
    title: "ダーツ",
    body: "最新機種を完備。初心者から上級者まで\nみんなで盛り上がれる人気コンテンツ。",
    top: 823,
  },
  {
    icon: Mic2,
    title: "カラオケ",
    body: "最新カラオケ機種を導入。\n大迫力の音響で熱唱しよう。",
    top: 883,
  },
  {
    icon: Dices,
    title: "ボードゲーム",
    body: "定番から話題のゲームまで多数取り揃え。\n飲みながらワイワイ楽しめる。",
    top: 943,
  },
];

const eventCards = [
  {
    title: "DARTS TOURNAMENT",
    subtitle: "ダーツ大会",
    date: "2024.06.15 SAT",
    time: "20:00 START",
    crop: { x: 26, y: 5, width: 94, height: 67 },
  },
  {
    title: "DJ NIGHT",
    subtitle: "DJ NIGHT",
    date: "2024.06.22 SAT",
    time: "22:00 START",
    crop: { x: 128, y: 5, width: 94, height: 67 },
  },
  {
    title: "BIRTHDAY特典",
    subtitle: "",
    date: "誕生日の方は特典あり！",
    time: "詳しくはスタッフまで",
    crop: { x: 230, y: 5, width: 94, height: 67 },
  },
];

const accessRows = [
  {
    icon: MapPin,
    text: "〒160-0021\n東京都新宿区歌舞伎町1-XX-XX 鶴千ビル5F",
  },
  {
    icon: Phone,
    text: "03-XXXX-XXXX",
  },
  {
    icon: Clock,
    text: "18:00 - 05:00（L.O. 04:30）",
  },
  {
    icon: CalendarDays,
    text: "年中無休",
  },
];

const faqItems = ["予約は必要ですか？", "貸切は何名から可能ですか？", "飲み放題の内容を教えてください", "支払い方法は？", "持ち込みはできますか？"];

const footerIcons = [
  { icon: Trophy, left: 412, top: 1240, size: 13 },
];

type CtaFooterItem = {
  text: string;
  href?: string;
  icon?: typeof Aperture;
};

type CtaFooterColumn = {
  kind: "information" | "scene" | "follow" | "address" | "hours";
  title: string;
  left: number;
  top: number;
  width: number;
  height: number;
  items: CtaFooterItem[];
};

const ctaFooterButtons = [
  { label: "WEB予約", sub: "RESERVE", href: "/reservation", left: 188, top: 74, width: 150, height: 40, tone: "gold" as const },
  { label: "LINE予約", sub: "LINE", href: "https://line.me/R/ti/p/@tsurusen", left: 352, top: 74, width: 150, height: 40, tone: "green" as const },
  { label: "電話予約", sub: "CALL", href: "tel:03-XXXX-XXXX", left: 516, top: 74, width: 150, height: 40, tone: "blue" as const },
];

const ctaFooterColumns: CtaFooterColumn[] = [
  {
    kind: "information",
    title: "INFORMATION",
    left: 205,
    top: 119,
    width: 84,
    height: 56,
    items: [
      { text: "ABOUT", href: "/#about" },
      { text: "FEATURE", href: "/#feature" },
      { text: "PRICE", href: "/pricing" },
    ],
  },
  {
    kind: "scene",
    title: "SCENE",
    left: 330,
    top: 119,
    width: 78,
    height: 56,
    items: [
      { text: "GALLERY", href: "/#gallery" },
      { text: "EVENT", href: "/#event" },
      { text: "ACCESS", href: "/#access" },
    ],
  },
  {
    kind: "follow",
    title: "FOLLOW US",
    left: 446,
    top: 119,
    width: 102,
    height: 56,
    items: [
      { text: "INSTAGRAM", href: "https://www.instagram.com/", icon: Aperture },
      { text: "LINE", href: "https://line.me/R/ti/p/@tsurusen" },
    ],
  },
  {
    kind: "address",
    title: "ADDRESS",
    left: 560,
    top: 119,
    width: 135,
    height: 56,
    items: [{ text: "東京都新宿区歌舞伎町1-XX-XX" }, { text: "鶴千ビル5F" }, { text: "03-XXXX-XXXX" }],
  },
  {
    kind: "hours",
    title: "OPENING HOURS",
    left: 710,
    top: 119,
    width: 128,
    height: 56,
    items: [{ text: "18:00 - 05:00（L.O. 04:30）" }, { text: "年中無休" }],
  },
];

const runtimeCss = `
body:has(.tsurusen-pixel-home) {
  min-width: 0 !important;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-x: clip;
}

.tsurusen-pixel-home {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-x: clip;
  contain: paint;
  background: #090807;
  color: #f6f0e6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  font-feature-settings: "kern";
}

.tsurusen-pixel-home *,
.tsurusen-pixel-home *::before,
.tsurusen-pixel-home *::after {
  box-sizing: border-box;
}

.tsurusen-pixel-stage {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 864 / 1821;
  min-height: 1px;
  overflow: hidden;
  overflow: clip;
  contain: paint;
  background: #090807;
  isolation: isolate;
}

.pixel-page-image {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
}

.pixel-page-image-desktop {
  display: none;
}

.pixel-slice-image {
  position: absolute;
  left: 0;
  z-index: 0;
  display: block;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
}

.pixel-main-header {
  position: absolute;
  z-index: 18;
  overflow: hidden;
  background:
    radial-gradient(circle at 46% 55%, rgba(239, 200, 116, 0.11), transparent 19%),
    radial-gradient(circle at 32% 18%, rgba(42, 134, 255, 0.08), transparent 20%),
    linear-gradient(90deg, rgba(3, 3, 3, 0.98), rgba(9, 8, 6, 0.86) 32%, rgba(4, 4, 4, 0.94) 72%, rgba(3, 3, 3, 0.98));
  box-shadow:
    inset 0 calc(10 * 0.1157407407vw) calc(18 * 0.1157407407vw) rgba(0, 0, 0, 0.72),
    inset 0 calc(-10 * 0.1157407407vw) calc(16 * 0.1157407407vw) rgba(0, 0, 0, 0.72),
    0 calc(2 * 0.1157407407vw) 0 rgba(239, 200, 116, 0.38),
    0 calc(5 * 0.1157407407vw) calc(12 * 0.1157407407vw) rgba(0, 0, 0, 0.76);
  pointer-events: none;
}

.pixel-main-header::before {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.36), transparent 18%, rgba(0, 0, 0, 0.2) 63%, rgba(0, 0, 0, 0.42)),
    linear-gradient(180deg, rgba(255, 247, 234, 0.04), rgba(255, 247, 234, 0) 24%, rgba(0, 0, 0, 0.16));
  content: "";
}

.pixel-main-header::after {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: max(1px, calc(1 * 0.1157407407vw));
  background: linear-gradient(90deg, transparent, rgba(239, 200, 116, 0.76) 22%, rgba(239, 200, 116, 0.44) 58%, transparent);
  box-shadow: 0 calc(2 * 0.1157407407vw) calc(8 * 0.1157407407vw) rgba(239, 200, 116, 0.24);
  content: "";
}

.pixel-header-brand,
.pixel-header-nav-item,
.pixel-header-nav-cluster {
  position: absolute;
  z-index: 2;
}

.pixel-header-brand {
  display: grid;
  min-width: 0;
  grid-template-columns: calc(44 * 0.1157407407vw) minmax(0, 1fr);
  column-gap: calc(13 * 0.1157407407vw);
  align-items: center;
  border: 0;
  background: transparent;
  color: #efc874;
  cursor: pointer;
  font: inherit;
  padding: 0;
  text-decoration: none;
  pointer-events: auto;
}

.pixel-header-logo-mark {
  position: relative;
  display: block;
  width: calc(36 * 0.1157407407vw);
  height: calc(36 * 0.1157407407vw);
  justify-self: center;
  border: max(1px, calc(1.4 * 0.1157407407vw)) solid rgba(255, 239, 189, 0.88);
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%, rgba(239, 200, 116, 0.18), transparent 58%),
    rgba(8, 8, 7, 0.2);
  box-shadow:
    0 0 calc(10 * 0.1157407407vw) rgba(239, 200, 116, 0.42),
    inset 0 0 calc(7 * 0.1157407407vw) rgba(239, 200, 116, 0.14);
}

.pixel-header-logo-mark::before,
.pixel-header-logo-mark::after {
  position: absolute;
  left: 50%;
  top: 43%;
  width: 46%;
  height: 24%;
  border-top: max(1px, calc(1.25 * 0.1157407407vw)) solid rgba(255, 239, 189, 0.9);
  border-radius: 50% 50% 0 0;
  content: "";
}

.pixel-header-logo-mark::before {
  transform: translate(-88%, -50%) rotate(24deg);
}

.pixel-header-logo-mark::after {
  transform: translate(-12%, -50%) rotate(-24deg);
}

.pixel-header-logo-stem {
  position: absolute;
  left: 50%;
  top: 36%;
  width: max(1px, calc(1.1 * 0.1157407407vw));
  height: 45%;
  background: rgba(255, 239, 189, 0.92);
  transform: translateX(-50%);
}

.pixel-header-brand-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.pixel-header-brand-kicker,
.pixel-header-brand-name {
  display: block;
  max-width: 100%;
  overflow: hidden;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
  text-shadow:
    0 0 calc(7 * 0.1157407407vw) rgba(239, 200, 116, 0.32),
    0 calc(2 * 0.1157407407vw) calc(6 * 0.1157407407vw) rgba(0, 0, 0, 0.94);
}

.pixel-header-brand-kicker {
  font-size: calc(8 * 0.1157407407vw);
  letter-spacing: calc(2.2 * 0.1157407407vw);
}

.pixel-header-brand-name {
  margin-top: calc(7 * 0.1157407407vw);
  font-size: calc(21 * 0.1157407407vw);
  letter-spacing: calc(5.1 * 0.1157407407vw);
}

.pixel-header-nav-cluster {
  border: max(1px, calc(1 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.76);
  border-radius: calc(12 * 0.1157407407vw);
  background: rgba(7, 6, 5, 0.2);
  box-shadow:
    inset 0 0 calc(12 * 0.1157407407vw) rgba(239, 200, 116, 0.04),
    0 0 calc(12 * 0.1157407407vw) rgba(216, 180, 106, 0.1);
  pointer-events: none;
}

.pixel-header-nav-item {
  display: flex;
  min-width: 0;
  height: calc(66 * 0.1157407407vw);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: visible;
  border: 0;
  background: transparent;
  color: #fff8ea;
  cursor: pointer;
  font: inherit;
  padding: 0;
  text-align: center;
  text-decoration: none;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
}

.pixel-header-nav-item svg {
  display: block;
  width: calc(19 * 0.1157407407vw);
  height: calc(19 * 0.1157407407vw);
  margin-top: calc(10 * 0.1157407407vw);
  color: #efc874;
  filter:
    drop-shadow(0 0 calc(5 * 0.1157407407vw) rgba(239, 200, 116, 0.5))
    drop-shadow(0 calc(2 * 0.1157407407vw) calc(4 * 0.1157407407vw) rgba(0, 0, 0, 0.8));
}

.pixel-header-nav-item[data-active="true"] svg,
.pixel-header-nav-item[data-active="true"] .pixel-header-nav-label {
  color: #efc874;
}

.pixel-header-nav-label,
.pixel-header-nav-sub {
  display: block;
  max-width: 100%;
  overflow: hidden;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
  text-shadow:
    0 0 calc(5 * 0.1157407407vw) rgba(255, 247, 234, 0.18),
    0 calc(2 * 0.1157407407vw) calc(5 * 0.1157407407vw) rgba(0, 0, 0, 0.96);
}

.pixel-header-nav-label {
  margin-top: calc(11 * 0.1157407407vw);
  font-size: calc(var(--header-font-size, 9.5) * 0.1157407407vw);
  letter-spacing: calc(var(--header-tracking, 0.9) * 0.1157407407vw);
}

.pixel-header-nav-sub {
  margin-top: calc(6 * 0.1157407407vw);
  color: rgba(255, 248, 234, 0.82);
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(6 * 0.1157407407vw);
  letter-spacing: calc(0.35 * 0.1157407407vw);
  line-height: 1.25;
}

.pixel-header-nav-item[data-active="true"]::after {
  position: absolute;
  left: 50%;
  bottom: calc(3 * 0.1157407407vw);
  width: calc(46 * 0.1157407407vw);
  height: max(2px, calc(1.8 * 0.1157407407vw));
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, #efc874 14%, #fff0ae 50%, #efc874 86%, transparent);
  box-shadow: 0 0 calc(7 * 0.1157407407vw) rgba(239, 200, 116, 0.5);
  content: "";
  transform: translateX(-50%);
}

.pixel-main-header {
  --header-label-scale: 1;
  --header-nav-scale: 1;
  overflow: visible;
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.94), rgba(6, 5, 4, 0.78) 30%, rgba(3, 3, 3, 0.86) 72%, rgba(0, 0, 0, 0.96)),
    linear-gradient(180deg, rgba(255, 245, 213, 0.05), rgba(255, 245, 213, 0) 32%, rgba(0, 0, 0, 0.5)),
    url("/assets/tsurusen-home/png/section-01-hero-textless-ai.png") center 10% / cover no-repeat,
    #050504;
}

.pixel-header-shell {
  position: relative;
  z-index: 2;
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 0;
  align-items: center;
  gap: calc(10 * 0.1157407407vw);
  padding: calc(10 * 0.1157407407vw) calc(12 * 0.1157407407vw) calc(9 * 0.1157407407vw) calc(18 * 0.1157407407vw);
  pointer-events: auto;
}

.pixel-main-header .pixel-header-brand,
.pixel-main-header .pixel-header-nav-item,
.pixel-header-mobile-toggle {
  position: relative;
  z-index: 2;
  min-width: 0;
  border: 0;
  background: transparent;
  font: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

.pixel-main-header .pixel-header-brand {
  display: grid;
  flex: 0 0 calc(202 * 0.1157407407vw);
  min-height: calc(58 * 0.1157407407vw);
  grid-template-columns: calc(44 * 0.1157407407vw) minmax(0, 1fr);
  column-gap: calc(14 * 0.1157407407vw);
  align-items: center;
  color: #efc874;
}

.pixel-main-header .pixel-header-logo-mark {
  width: calc(39 * 0.1157407407vw);
  height: calc(39 * 0.1157407407vw);
}

.pixel-main-header .pixel-header-brand-kicker {
  font-size: calc(8.2 * 0.1157407407vw);
  letter-spacing: calc(2.45 * 0.1157407407vw);
}

.pixel-main-header .pixel-header-brand-name {
  margin-top: calc(7 * 0.1157407407vw);
  font-size: calc(22 * 0.1157407407vw);
  letter-spacing: calc(5.55 * 0.1157407407vw);
}

.pixel-header-desktop-nav {
  position: relative;
  z-index: 2;
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  align-items: center;
  justify-content: flex-end;
  gap: calc(4 * 0.1157407407vw);
  height: 100%;
}

.pixel-header-menu-group {
  display: grid;
  flex: 0 0 calc(219 * 0.1157407407vw);
  height: calc(59 * 0.1157407407vw);
  grid-template-columns: minmax(0, 1fr) max(1px, calc(0.7 * 0.1157407407vw)) minmax(0, 1fr) max(1px, calc(0.7 * 0.1157407407vw)) minmax(0, 1fr);
  align-items: center;
  overflow: hidden;
  border: max(1px, calc(1 * 0.1157407407vw)) solid rgba(216, 180, 106, 0.78);
  border-radius: calc(14 * 0.1157407407vw);
  background:
    linear-gradient(180deg, rgba(255, 247, 220, 0.04), rgba(255, 247, 220, 0)),
    rgba(7, 6, 5, 0.34);
  box-shadow:
    inset 0 0 calc(14 * 0.1157407407vw) rgba(239, 200, 116, 0.045),
    0 0 calc(12 * 0.1157407407vw) rgba(216, 180, 106, 0.12);
}

.pixel-header-menu-divider {
  display: block;
  width: 100%;
  height: 52%;
  background: linear-gradient(180deg, transparent, rgba(216, 180, 106, 0.42), transparent);
}

.pixel-main-header .pixel-header-nav-item {
  display: flex;
  flex: 0 0 calc(var(--nav-basis, 50) * var(--header-nav-scale) * 0.1157407407vw);
  width: calc(var(--nav-basis, 50) * var(--header-nav-scale) * 0.1157407407vw);
  height: calc(59 * 0.1157407407vw);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: calc(5 * 0.1157407407vw) calc(2 * 0.1157407407vw) calc(7 * 0.1157407407vw);
  color: #fff8ea;
  text-align: center;
}

.pixel-header-menu-group .pixel-header-nav-item {
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  padding-inline: calc(4 * 0.1157407407vw);
}

.pixel-main-header .pixel-header-nav-item svg {
  width: calc(18.5 * 0.1157407407vw);
  height: calc(18.5 * 0.1157407407vw);
  margin-top: 0;
  flex: 0 0 auto;
  color: #efc874;
  stroke-width: 1.65;
}

.pixel-main-header .pixel-header-nav-label {
  width: 100%;
  margin-top: calc(7 * 0.1157407407vw);
  overflow: hidden;
  color: #fff8ea;
  font-size: calc(var(--header-font-size, 8.3) * var(--header-label-scale) * 0.1157407407vw);
  letter-spacing: calc(var(--header-tracking, 0.72) * 0.1157407407vw);
  text-overflow: clip;
}

.pixel-main-header .pixel-header-nav-sub {
  width: 100%;
  margin-top: calc(4 * 0.1157407407vw);
  overflow: hidden;
  font-size: calc(6.2 * var(--header-label-scale) * 0.1157407407vw);
  letter-spacing: calc(0.35 * 0.1157407407vw);
  text-overflow: clip;
}

.pixel-main-header .pixel-header-nav-item[data-active="true"] svg,
.pixel-main-header .pixel-header-nav-item[data-active="true"] .pixel-header-nav-label {
  color: #efc874;
  text-shadow:
    0 0 calc(7 * 0.1157407407vw) rgba(239, 200, 116, 0.45),
    0 calc(2 * 0.1157407407vw) calc(5 * 0.1157407407vw) rgba(0, 0, 0, 0.96);
}

.pixel-main-header .pixel-header-nav-item[data-active="true"]::after {
  bottom: calc(-3 * 0.1157407407vw);
  width: calc(48 * 0.1157407407vw);
  height: max(2px, calc(1.6 * 0.1157407407vw));
}

.pixel-header-mobile-toggle,
.pixel-header-mobile-panel {
  display: none;
}

@media (min-width: 768px) and (max-width: 900px) {
  .pixel-main-header {
    --header-label-scale: 0.92;
    --header-nav-scale: 0.91;
  }

  .pixel-header-shell {
    gap: calc(6 * 0.1157407407vw);
    padding: calc(9 * 0.1157407407vw) calc(9 * 0.1157407407vw) calc(8 * 0.1157407407vw) calc(14 * 0.1157407407vw);
  }

  .pixel-main-header .pixel-header-brand {
    flex-basis: calc(188 * 0.1157407407vw);
    grid-template-columns: calc(40 * 0.1157407407vw) minmax(0, 1fr);
    column-gap: calc(10 * 0.1157407407vw);
  }

  .pixel-main-header .pixel-header-brand-name {
    font-size: calc(20 * 0.1157407407vw);
    letter-spacing: calc(4.6 * 0.1157407407vw);
  }

  .pixel-header-menu-group {
    flex-basis: calc(207 * 0.1157407407vw);
  }

  .pixel-main-header .pixel-header-nav-item svg {
    width: calc(17 * 0.1157407407vw);
    height: calc(17 * 0.1157407407vw);
  }
}

@media (max-width: 767px) {
  .pixel-main-header {
    min-height: 72px;
  }

  .pixel-header-shell {
    padding: 10px 14px;
  }

  .pixel-main-header .pixel-header-brand {
    flex-basis: min(72vw, 230px);
    min-height: 50px;
    grid-template-columns: 44px minmax(0, 1fr);
    column-gap: 12px;
  }

  .pixel-main-header .pixel-header-logo-mark {
    width: 38px;
    height: 38px;
  }

  .pixel-main-header .pixel-header-brand-kicker {
    font-size: 9px;
    letter-spacing: 2.2px;
  }

  .pixel-main-header .pixel-header-brand-name {
    margin-top: 6px;
    font-size: 24px;
    letter-spacing: 5px;
  }

  .pixel-header-desktop-nav {
    display: none;
  }

  .pixel-header-mobile-toggle {
    display: inline-flex;
    width: 46px;
    height: 46px;
    margin-left: auto;
    flex: 0 0 46px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(216, 180, 106, 0.76);
    border-radius: 14px;
    color: #efc874;
    background: rgba(5, 5, 4, 0.58);
    box-shadow:
      0 0 14px rgba(216, 180, 106, 0.16),
      inset 0 0 12px rgba(239, 200, 116, 0.04);
  }

  .pixel-header-mobile-toggle svg {
    width: 24px;
    height: 24px;
  }

  .pixel-header-mobile-panel[data-open="true"] {
    position: absolute;
    left: 12px;
    right: 12px;
    top: calc(100% + 8px);
    z-index: 20;
    display: grid;
    max-height: calc(100dvh - 92px);
    gap: 6px;
    overflow-y: auto;
    border: 1px solid rgba(216, 180, 106, 0.72);
    border-radius: 18px;
    padding: 10px;
    background:
      linear-gradient(180deg, rgba(255, 247, 220, 0.055), rgba(255, 247, 220, 0)),
      rgba(4, 4, 4, 0.96);
    box-shadow:
      0 14px 30px rgba(0, 0, 0, 0.7),
      0 0 18px rgba(216, 180, 106, 0.14);
    pointer-events: auto;
  }

  .pixel-header-mobile-panel .pixel-header-nav-item {
    width: 100%;
    min-height: 46px;
    height: auto;
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: flex-start;
    gap: 12px;
    overflow: hidden;
    border-radius: 12px;
    padding: 8px 12px;
    text-align: left;
  }

  .pixel-header-mobile-panel .pixel-header-nav-item svg {
    width: 22px;
    height: 22px;
  }

  .pixel-header-mobile-panel .pixel-header-nav-label {
    margin-top: 0;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: left;
  }

  .pixel-header-mobile-panel .pixel-header-nav-sub {
    width: auto;
    margin-top: 0;
    margin-left: auto;
    flex: 0 0 auto;
    font-size: 11px;
    letter-spacing: 0.4px;
  }

  .pixel-header-mobile-panel .pixel-header-nav-item[data-active="true"]::after {
    left: 44px;
    bottom: 5px;
    width: 46px;
    transform: none;
  }

  .pixel-header-mobile-group {
    display: grid;
    gap: 4px;
    overflow: hidden;
    border: 1px solid rgba(216, 180, 106, 0.68);
    border-radius: 14px;
    padding: 5px;
    background: rgba(9, 8, 6, 0.56);
  }
}

.pixel-lux-hero {
  position: relative;
  z-index: 12;
  display: grid;
  width: 100%;
  height: 19.8243%;
  min-height: clamp(430px, 41.8vw, 820px);
  grid-template-rows: auto minmax(0, 1fr);
  overflow: visible;
  color: #fff8ea;
  pointer-events: none;
}

.pixel-lux-hero::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.88) 100%),
    radial-gradient(circle at 50% 51%, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.7) 58%, rgba(0, 0, 0, 0.95) 100%);
  content: "";
  pointer-events: none;
}

.pixel-lux-hero .pixel-main-header {
  --header-label-scale: 0.74;
  --header-nav-scale: 0.88;
  position: relative;
  left: auto;
  top: auto;
  z-index: 4;
  width: 100%;
  min-height: clamp(110px, 8.7vw, 178px);
  overflow: visible;
  background:
    radial-gradient(circle at 28% 0%, rgba(239, 200, 116, 0.15), transparent 18%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.9) 68%, rgba(0, 0, 0, 0.18));
  box-shadow: none;
  pointer-events: auto;
}

.pixel-lux-hero .pixel-header-shell {
  width: 100%;
  max-width: 1500px;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  gap: clamp(10px, 1.05vw, 20px);
  padding: clamp(14px, 1.35vw, 26px) clamp(24px, 2.35vw, 48px) clamp(10px, 0.9vw, 18px);
}

.pixel-lux-hero .pixel-header-brand {
  flex: 0 0 clamp(380px, 24vw, 450px);
  min-height: clamp(74px, 6.4vw, 120px);
  grid-template-columns: clamp(58px, 5.3vw, 96px) minmax(0, 1fr);
  column-gap: clamp(16px, 1.4vw, 28px);
}

.pixel-lux-hero .pixel-header-logo-mark {
  width: clamp(54px, 4.6vw, 86px);
  height: clamp(54px, 4.6vw, 86px);
  border-width: 2px;
  box-shadow:
    0 0 clamp(16px, 1.5vw, 28px) rgba(239, 200, 116, 0.42),
    inset 0 0 clamp(9px, 0.8vw, 16px) rgba(239, 200, 116, 0.14);
}

.pixel-lux-hero .pixel-header-brand-kicker {
  color: #efc874;
  font-family: var(--font-oswald), var(--font-bebas), "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: clamp(13px, 1.1vw, 21px);
  letter-spacing: 0.18em;
  line-height: 1.35;
}

.pixel-lux-hero .pixel-header-brand-name {
  margin-top: clamp(8px, 0.65vw, 13px);
  color: #efc874;
  font-family: var(--font-oswald), var(--font-bebas), "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: clamp(34px, 2.7vw, 54px);
  letter-spacing: 0.06em;
  line-height: 1.18;
}

.pixel-lux-hero .pixel-header-desktop-nav {
  gap: clamp(5px, 0.65vw, 14px);
}

.pixel-lux-hero .pixel-header-menu-group {
  flex: 0 0 clamp(260px, 24vw, 390px);
  height: clamp(76px, 7.1vw, 130px);
  grid-template-columns: minmax(0, 1fr) 1px minmax(0, 1.15fr) 1px minmax(0, 1.1fr);
  border: 1px solid rgba(216, 180, 106, 0.5);
  border-radius: clamp(14px, 1.4vw, 26px);
  box-shadow:
    inset 0 0 clamp(12px, 1vw, 20px) rgba(239, 200, 116, 0.035),
    0 0 clamp(14px, 1.15vw, 24px) rgba(216, 180, 106, 0.09);
}

.pixel-lux-hero .pixel-header-nav-item {
  flex: 0 0 calc(var(--nav-basis, 50) * var(--header-nav-scale) * 1px);
  width: calc(var(--nav-basis, 50) * var(--header-nav-scale) * 1px);
  min-width: clamp(48px, 4vw, 72px);
  height: clamp(76px, 7.1vw, 130px);
  padding: clamp(10px, 0.75vw, 14px) clamp(3px, 0.5vw, 9px);
  transition:
    color 250ms var(--ease-signature),
    filter 250ms var(--ease-signature),
    transform 250ms var(--ease-signature),
    background 250ms var(--ease-signature),
    box-shadow 250ms var(--ease-signature);
}

.pixel-lux-hero .pixel-header-nav-item svg {
  width: clamp(28px, 2.3vw, 44px);
  height: clamp(28px, 2.3vw, 44px);
}

.pixel-lux-hero .pixel-header-nav-label {
  margin-top: clamp(10px, 0.85vw, 16px);
  font-family: var(--font-oswald), var(--font-bebas), "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(var(--header-font-size, 16) * var(--header-label-scale) * 1px);
  letter-spacing: 0.06em;
  line-height: 1.34;
}

.pixel-lux-hero .pixel-header-nav-sub {
  margin-top: clamp(4px, 0.4vw, 8px);
  font-size: calc(12 * var(--header-label-scale) * 1px);
  letter-spacing: 0.04em;
  line-height: 1.25;
}

.pixel-lux-hero .pixel-header-nav-item[data-active="true"] {
  background:
    radial-gradient(circle at 50% 24%, rgba(239, 200, 116, 0.28), transparent 46%),
    linear-gradient(180deg, rgba(239, 200, 116, 0.16), rgba(239, 200, 116, 0.055));
  box-shadow:
    inset 0 0 clamp(24px, 2.2vw, 42px) rgba(239, 200, 116, 0.12),
    0 0 clamp(16px, 1.5vw, 30px) rgba(239, 200, 116, 0.2);
}

.pixel-lux-hero .pixel-header-nav-item[data-active="true"]::after {
  bottom: 0;
  width: 100%;
  height: max(3px, 0.22vw);
}

.pixel-lux-hero .pixel-header-nav-item:hover {
  transform: translateY(-1px);
  filter: drop-shadow(0 0 clamp(8px, 0.8vw, 16px) rgba(239, 200, 116, 0.34));
}

.pixel-lux-content {
  display: grid;
  width: min(100% - 128px, 1500px);
  min-width: 0;
  align-content: center;
  justify-items: center;
  gap: clamp(24px, 2.15vw, 42px);
  margin: 0 auto;
  padding: clamp(14px, 1.4vw, 26px) 0 clamp(38px, 3.2vw, 64px);
  text-align: center;
  pointer-events: auto;
}

.pixel-lux-title {
  margin: 0;
  max-width: 100%;
  color: #efc874;
  font-family: var(--font-bebas), var(--font-oswald), "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: clamp(54px, 6.7vw, 132px);
  font-weight: 900;
  letter-spacing: 0.06em;
  line-height: 1.08;
  text-transform: uppercase;
  white-space: nowrap;
  text-shadow:
    0 0 clamp(10px, 1vw, 20px) rgba(239, 200, 116, 0.28),
    0 clamp(4px, 0.4vw, 8px) clamp(16px, 1.4vw, 28px) rgba(0, 0, 0, 0.95);
}

.pixel-lux-subtitle {
  margin: calc(-8px + 0.3vw) 0 0;
  color: #fff8ea;
  font-family: var(--font-noto-sans-jp), var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: clamp(18px, 1.85vw, 34px);
  font-weight: 900;
  letter-spacing: 0.04em;
  line-height: 1.8;
  text-shadow:
    0 0 clamp(7px, 0.7vw, 14px) rgba(255, 255, 255, 0.16),
    0 clamp(3px, 0.28vw, 6px) clamp(10px, 0.9vw, 18px) rgba(0, 0, 0, 0.96);
}

.pixel-lux-actions {
  display: grid;
  width: min(100%, 1400px);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(18px, 1.7vw, 34px);
  margin-top: clamp(3px, 0.5vw, 10px);
}

.pixel-lux-action {
  --lux-border: rgba(216, 180, 106, 0.94);
  --lux-fill: rgba(216, 180, 106, 0.14);
  --lux-glow: rgba(216, 180, 106, 0.45);
  display: flex;
  min-width: 0;
  min-height: 80px;
  height: clamp(80px, 7.2vw, 142px);
  align-items: center;
  justify-content: center;
  gap: clamp(12px, 1.1vw, 20px);
  overflow: hidden;
  border: 2px solid var(--lux-border);
  border-radius: 16px;
  padding: 16px clamp(18px, 1.6vw, 32px);
  background:
    linear-gradient(180deg, rgba(255, 247, 234, 0.08), rgba(255, 247, 234, 0.01) 45%, rgba(0, 0, 0, 0.2)),
    rgba(5, 5, 4, 0.74),
    var(--lux-fill);
  box-shadow:
    0 0 clamp(12px, 1.4vw, 28px) var(--lux-glow),
    inset 0 0 clamp(14px, 1.5vw, 30px) rgba(255, 247, 234, 0.045);
  color: #fff8ea;
  cursor: pointer;
  font: inherit;
  text-align: center;
  transition:
    transform 250ms var(--ease-signature),
    box-shadow 250ms var(--ease-signature),
    filter 250ms var(--ease-signature);
}

.pixel-lux-action:hover {
  transform: scale(1.03);
  box-shadow:
    0 0 clamp(20px, 2vw, 40px) var(--lux-glow),
    inset 0 0 clamp(14px, 1.5vw, 30px) rgba(255, 247, 234, 0.06);
}

.pixel-lux-action[data-tone="blue"] {
  --lux-border: rgba(31, 154, 255, 0.96);
  --lux-fill: rgba(31, 154, 255, 0.1);
  --lux-glow: rgba(31, 154, 255, 0.36);
}

.pixel-lux-action[data-tone="green"] {
  --lux-border: rgba(20, 226, 70, 0.96);
  --lux-fill: rgba(20, 226, 70, 0.1);
  --lux-glow: rgba(20, 226, 70, 0.36);
}

.pixel-lux-action[data-tone="dark"] {
  --lux-border: rgba(255, 247, 234, 0.72);
  --lux-fill: rgba(255, 247, 234, 0.03);
  --lux-glow: rgba(255, 247, 234, 0.22);
}

.pixel-lux-action-icons {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: #fff8ea;
}

.pixel-lux-action-icons svg {
  width: clamp(34px, 3.8vw, 70px);
  height: clamp(34px, 3.8vw, 70px);
  filter: drop-shadow(0 0 clamp(8px, 0.8vw, 16px) rgba(255, 247, 234, 0.24));
}

.pixel-lux-action-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff8ea;
  font-family: var(--font-noto-sans-jp), var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: clamp(21px, 1.85vw, 38px);
  font-weight: 900;
  letter-spacing: 0.03em;
  line-height: 1.32;
  text-shadow: 0 clamp(2px, 0.22vw, 4px) clamp(8px, 0.75vw, 15px) rgba(0, 0, 0, 0.94);
  white-space: nowrap;
}

.pixel-lux-action-copy small {
  margin-top: clamp(6px, 0.65vw, 12px);
  color: var(--lux-border);
  font-family: var(--font-oswald), var(--font-bebas), "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: clamp(14px, 1.22vw, 25px);
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 1.25;
}

@media (max-width: 1400px) {
  .pixel-lux-hero .pixel-main-header {
    --header-label-scale: 0.55;
    --header-nav-scale: 0.64;
  }

  .pixel-lux-hero .pixel-header-shell {
    gap: clamp(4px, 0.45vw, 8px);
    padding-inline: clamp(16px, 1.7vw, 26px);
  }

  .pixel-lux-hero .pixel-header-brand {
    flex-basis: clamp(210px, 19vw, 250px);
  }

  .pixel-lux-hero .pixel-header-brand-kicker {
    letter-spacing: 0.14em;
  }

  .pixel-lux-hero .pixel-header-brand-name {
    font-size: clamp(27px, 2.5vw, 38px);
    letter-spacing: 0.08em;
  }

  .pixel-lux-hero .pixel-header-menu-group {
    flex-basis: clamp(220px, 22vw, 290px);
  }
}

@media (max-width: 1180px) {
  .pixel-lux-hero .pixel-main-header {
    --header-label-scale: 0.5;
    --header-nav-scale: 0.46;
  }

  .pixel-lux-hero .pixel-header-shell {
    gap: 3px;
    padding-inline: clamp(14px, 1.8vw, 22px);
  }

  .pixel-lux-hero .pixel-header-brand {
    flex-basis: clamp(172px, 18vw, 205px);
    grid-template-columns: clamp(42px, 4vw, 54px) minmax(0, 1fr);
    column-gap: clamp(8px, 0.9vw, 12px);
  }

  .pixel-lux-hero .pixel-header-logo-mark {
    width: clamp(40px, 4vw, 54px);
    height: clamp(40px, 4vw, 54px);
  }

  .pixel-lux-hero .pixel-header-brand-kicker {
    font-size: clamp(9px, 0.9vw, 12px);
  }

  .pixel-lux-hero .pixel-header-brand-name {
    font-size: clamp(24px, 2.55vw, 31px);
    letter-spacing: 0.06em;
  }

  .pixel-lux-hero .pixel-header-menu-group {
    flex-basis: clamp(172px, 21vw, 220px);
  }

  .pixel-lux-hero .pixel-header-nav-item {
    min-width: 34px;
    height: clamp(58px, 6.2vw, 72px);
    padding-inline: 1px;
  }

  .pixel-lux-hero .pixel-header-nav-item svg {
    width: clamp(17px, 2vw, 24px);
    height: clamp(17px, 2vw, 24px);
  }

  .pixel-lux-hero .pixel-header-nav-label {
    margin-top: clamp(5px, 0.6vw, 8px);
  }

  .pixel-lux-content {
    width: min(100% - 56px, 1500px);
  }

  .pixel-lux-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 960px) {
  .pixel-lux-hero {
    min-height: 520px;
  }

  .pixel-lux-content {
    width: min(100% - 56px, 1500px);
    gap: 20px;
  }

  .pixel-lux-title {
    font-size: clamp(42px, 7.2vw, 70px);
    white-space: normal;
  }

  .pixel-lux-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .pixel-lux-hero {
    min-height: 620px;
  }

  .pixel-lux-hero .pixel-main-header {
    min-height: 82px;
  }

  .pixel-lux-hero .pixel-header-shell {
    padding: 12px 14px;
  }

  .pixel-lux-hero .pixel-header-brand {
    flex-basis: min(72vw, 230px);
    min-height: 50px;
    grid-template-columns: 44px minmax(0, 1fr);
    column-gap: 12px;
  }

  .pixel-lux-hero .pixel-header-logo-mark {
    width: 38px;
    height: 38px;
  }

  .pixel-lux-hero .pixel-header-brand-kicker {
    font-size: 9px;
    letter-spacing: 2.2px;
  }

  .pixel-lux-hero .pixel-header-brand-name {
    margin-top: 6px;
    font-size: 24px;
    letter-spacing: 5px;
  }

  .pixel-lux-content {
    width: min(100% - 32px, 1500px);
    align-content: start;
    gap: 18px;
    padding-top: 58px;
    padding-bottom: 30px;
  }

  .pixel-lux-title {
    font-size: clamp(36px, 11vw, 48px);
    line-height: 1.02;
  }

  .pixel-lux-subtitle {
    font-size: 17px;
    line-height: 1.65;
  }

  .pixel-lux-actions {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .pixel-lux-action {
    min-height: 76px;
    height: 76px;
    border-radius: 14px;
    padding: 12px 16px;
  }

  .pixel-lux-action-copy {
    font-size: 20px;
  }

  .pixel-lux-action-copy small {
    font-size: 13px;
    margin-top: 5px;
  }
}

.pixel-hero-cta-band {
  position: absolute;
  left: 0;
  top: 13.4%;
  z-index: 2;
  width: 100%;
  height: 6.42%;
  pointer-events: none;
  background:
    radial-gradient(circle at 16% 70%, rgba(214, 176, 93, 0.16), transparent 19%),
    radial-gradient(circle at 50% 72%, rgba(42, 134, 255, 0.1), transparent 18%),
    radial-gradient(circle at 64% 72%, rgba(34, 197, 94, 0.12), transparent 18%),
    linear-gradient(180deg, rgba(7, 7, 7, 0.9), rgba(5, 5, 5, 0.98) 24%, #070706 76%, rgba(8, 8, 7, 0.96));
  box-shadow:
    inset 0 calc(16 * 0.1157407407vw) calc(24 * 0.1157407407vw) rgba(0, 0, 0, 0.7),
    inset 0 calc(-14 * 0.1157407407vw) calc(20 * 0.1157407407vw) rgba(0, 0, 0, 0.66);
}

.pixel-feature-section-bg {
  position: absolute;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
  background:
    radial-gradient(circle at 50% 46%, rgba(216, 180, 106, 0.08), transparent 32%),
    linear-gradient(180deg, rgba(5, 5, 4, 0.95), #0b0b0a 16%, #11100e 50%, #080807 86%, rgba(4, 4, 3, 0.98));
  box-shadow:
    inset 0 calc(24 * 0.1157407407vw) calc(38 * 0.1157407407vw) rgba(0, 0, 0, 0.72),
    inset 0 calc(-22 * 0.1157407407vw) calc(34 * 0.1157407407vw) rgba(0, 0, 0, 0.75);
}

.pixel-feature-heading {
  position: absolute;
  z-index: 5;
  display: flex;
  min-width: 0;
  align-items: center;
  gap: calc(13 * 0.1157407407vw);
  pointer-events: none;
}

.pixel-feature-heading-line {
  height: max(1px, calc(0.9 * 0.1157407407vw));
  flex: 1 1 auto;
  background: linear-gradient(90deg, transparent, rgba(239, 200, 116, 0.84) 16%, rgba(239, 200, 116, 0.84) 84%, transparent);
  box-shadow: 0 0 calc(5 * 0.1157407407vw) rgba(239, 200, 116, 0.2);
}

.pixel-feature-heading-title {
  flex: 0 0 auto;
  color: #f4cf7a;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(28 * 0.1157407407vw);
  font-style: italic;
  font-weight: 900;
  letter-spacing: calc(1.2 * 0.1157407407vw);
  line-height: 1;
  text-shadow:
    0 calc(2 * 0.1157407407vw) calc(7 * 0.1157407407vw) rgba(0, 0, 0, 0.92),
    0 0 calc(10 * 0.1157407407vw) rgba(239, 200, 116, 0.22);
}

.pixel-dom-text[data-region="header"],
.pixel-dom-text[data-region="hero"],
.pixel-dom-text[data-region="about"],
.pixel-dom-button[data-region="hero"],
.pixel-dom-button[data-region="about"],
.pixel-dom-text[data-region="price-entertainment"],
.pixel-dom-button[data-region="price-entertainment"] {
  display: none;
}

.pixel-about-panel {
  position: absolute;
  z-index: 6;
  overflow: hidden;
  border: max(1px, calc(1.05 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.9);
  border-radius: calc(8 * 0.1157407407vw);
  background:
    radial-gradient(circle at 26% 46%, rgba(239, 200, 116, 0.055), transparent 30%),
    radial-gradient(circle at 74% 52%, rgba(68, 126, 255, 0.045), transparent 34%),
    linear-gradient(90deg, rgba(10, 10, 9, 0.98), rgba(3, 3, 3, 0.95) 42%, rgba(6, 6, 5, 0.98));
  box-shadow:
    inset 0 0 calc(18 * 0.1157407407vw) rgba(239, 200, 116, 0.035),
    0 0 calc(15 * 0.1157407407vw) rgba(216, 180, 106, 0.08);
  pointer-events: none;
}

.pixel-about-copy {
  position: absolute;
  z-index: 7;
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  pointer-events: none;
}

.pixel-about-kicker,
.pixel-about-title,
.pixel-about-body,
.pixel-about-more {
  flex: 0 0 auto;
  margin: 0;
  max-width: 100%;
  overflow: hidden;
}

.pixel-about-kicker {
  color: #efc874;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(24 * 0.1157407407vw);
  font-style: italic;
  font-weight: 900;
  letter-spacing: calc(1.8 * 0.1157407407vw);
  line-height: 1.16;
  text-shadow:
    0 calc(2 * 0.1157407407vw) calc(7 * 0.1157407407vw) rgba(0, 0, 0, 0.92),
    0 0 calc(9 * 0.1157407407vw) rgba(239, 200, 116, 0.22);
  white-space: nowrap;
}

.pixel-about-title {
  margin-top: calc(4 * 0.1157407407vw);
  color: #fffaf1;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(38 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(3.6 * 0.1157407407vw);
  line-height: 1.06;
  text-shadow:
    0 calc(2 * 0.1157407407vw) calc(7 * 0.1157407407vw) rgba(0, 0, 0, 0.94),
    0 0 calc(8 * 0.1157407407vw) rgba(255, 250, 241, 0.24);
  white-space: nowrap;
}

.pixel-about-rule {
  position: relative;
  width: 100%;
  height: calc(9 * 0.1157407407vw);
  margin-top: calc(9 * 0.1157407407vw);
}

.pixel-about-rule::before,
.pixel-about-rule::after {
  position: absolute;
  top: 50%;
  width: calc(46% - 8 * 0.1157407407vw);
  height: max(1px, calc(0.8 * 0.1157407407vw));
  background: linear-gradient(90deg, transparent, rgba(171, 126, 52, 0.9));
  content: "";
}

.pixel-about-rule::before {
  left: 0;
}

.pixel-about-rule::after {
  right: 0;
  transform: scaleX(-1);
}

.pixel-about-rule-mark {
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(22 * 0.1157407407vw);
  height: calc(7 * 0.1157407407vw);
  transform: translate(-50%, -50%);
}

.pixel-about-rule-mark::before,
.pixel-about-rule-mark::after {
  position: absolute;
  top: 50%;
  width: calc(7 * 0.1157407407vw);
  height: calc(7 * 0.1157407407vw);
  border: max(1px, calc(0.7 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.9);
  transform: translateY(-50%) rotate(45deg);
  content: "";
}

.pixel-about-rule-mark::before {
  left: calc(3 * 0.1157407407vw);
}

.pixel-about-rule-mark::after {
  right: calc(3 * 0.1157407407vw);
}

.pixel-about-body {
  margin-top: calc(11 * 0.1157407407vw);
  color: rgba(255, 250, 241, 0.96);
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(8 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(0.95 * 0.1157407407vw);
  line-height: 1.62;
  text-shadow:
    0 calc(2 * 0.1157407407vw) calc(7 * 0.1157407407vw) rgba(0, 0, 0, 0.94),
    0 0 calc(3 * 0.1157407407vw) rgba(255, 250, 241, 0.12);
  white-space: pre-line;
  word-break: keep-all;
}

.pixel-about-more {
  position: absolute;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  border: max(1px, calc(1.25 * 0.1157407407vw)) solid rgba(216, 180, 106, 0.86);
  border-radius: calc(6 * 0.1157407407vw);
  background: rgba(5, 5, 4, 0.62);
  box-shadow:
    0 0 calc(11 * 0.1157407407vw) rgba(216, 180, 106, 0.18),
    inset 0 0 calc(12 * 0.1157407407vw) rgba(239, 200, 116, 0.035);
  color: #fffaf1;
  cursor: pointer;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(14 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(1.3 * 0.1157407407vw);
  line-height: 1;
  pointer-events: auto;
  text-shadow: 0 calc(2 * 0.1157407407vw) calc(6 * 0.1157407407vw) rgba(0, 0, 0, 0.94);
  white-space: nowrap;
}

.pixel-about-photo-frame {
  position: absolute;
  z-index: 7;
  overflow: hidden;
  border: max(1px, calc(1.05 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.86);
  border-radius: calc(4 * 0.1157407407vw);
  background-color: #050504;
  background-image: url("/assets/tsurusen-home/png/section-02-about-textless-ai.png");
  background-position: 75.5% 13.4%;
  background-repeat: no-repeat;
  background-size: 274.4% auto;
  box-shadow:
    0 0 calc(14 * 0.1157407407vw) rgba(216, 180, 106, 0.1),
    inset 0 0 calc(12 * 0.1157407407vw) rgba(0, 0, 0, 0.52);
  pointer-events: none;
}

.pixel-dom-text[data-region="event-access-faq"],
.pixel-dom-button[data-region="event-access-faq"],
.pixel-dom-text[data-region="cta-footer"],
.pixel-dom-button[data-region="cta-footer"] {
  display: none;
}

.pixel-eaf-panel {
  position: absolute;
  z-index: 6;
  overflow: hidden;
  border: max(1px, calc(1.05 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.86);
  border-radius: calc(8 * 0.1157407407vw);
  background:
    radial-gradient(circle at 18% 52%, rgba(239, 200, 116, 0.04), transparent 26%),
    radial-gradient(circle at 49% 47%, rgba(49, 112, 190, 0.04), transparent 25%),
    linear-gradient(180deg, rgba(9, 9, 8, 0.98), rgba(5, 5, 5, 0.98));
  box-shadow:
    inset 0 0 calc(16 * 0.1157407407vw) rgba(239, 200, 116, 0.035),
    0 0 calc(12 * 0.1157407407vw) rgba(216, 180, 106, 0.08);
  pointer-events: none;
}

.pixel-eaf-heading {
  position: absolute;
  z-index: 8;
  display: flex;
  min-width: 0;
  align-items: center;
  gap: calc(12 * 0.1157407407vw);
  pointer-events: none;
}

.pixel-eaf-heading-line {
  height: max(1px, calc(0.7 * 0.1157407407vw));
  flex: 1 1 auto;
  background: linear-gradient(90deg, transparent, rgba(239, 200, 116, 0.78) 22%, rgba(239, 200, 116, 0.78) 78%, transparent);
  box-shadow: 0 0 calc(4 * 0.1157407407vw) rgba(239, 200, 116, 0.18);
}

.pixel-eaf-heading-title {
  flex: 0 0 auto;
  color: #efc874;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(26 * 0.1157407407vw);
  font-style: italic;
  font-weight: 900;
  letter-spacing: calc(1.8 * 0.1157407407vw);
  line-height: 1;
  text-shadow:
    0 calc(2 * 0.1157407407vw) calc(7 * 0.1157407407vw) rgba(0, 0, 0, 0.94),
    0 0 calc(9 * 0.1157407407vw) rgba(239, 200, 116, 0.22);
  white-space: nowrap;
}

.pixel-eaf-event-card {
  position: absolute;
  z-index: 8;
  overflow: hidden;
  border: max(1px, calc(0.9 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.74);
  border-radius: calc(5 * 0.1157407407vw);
  background:
    linear-gradient(180deg, rgba(255, 247, 234, 0.035), rgba(255, 247, 234, 0.005)),
    rgba(9, 9, 8, 0.9);
  box-shadow:
    inset 0 0 calc(12 * 0.1157407407vw) rgba(255, 231, 177, 0.03),
    0 0 calc(8 * 0.1157407407vw) rgba(216, 180, 106, 0.08);
  pointer-events: none;
}

.pixel-eaf-card-media,
.pixel-eaf-map-media {
  position: absolute;
  z-index: 8;
  overflow: hidden;
  overflow: clip;
  contain: paint;
  background: #050504;
}

.pixel-eaf-card-media {
  left: 0;
  top: 0;
  width: 100%;
  height: 52%;
}

.pixel-eaf-card-media::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 46%, rgba(6, 5, 4, 0.62));
  content: "";
}

.pixel-eaf-card-media img,
.pixel-eaf-map-media img {
  position: absolute;
  display: block;
  height: auto;
  max-width: none;
  pointer-events: none;
  user-select: none;
}

.pixel-eaf-event-copy {
  position: absolute;
  left: 4%;
  top: 54%;
  z-index: 9;
  display: flex;
  width: 92%;
  height: 43%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  text-align: center;
}

.pixel-eaf-event-title,
.pixel-eaf-event-subtitle,
.pixel-eaf-event-date,
.pixel-eaf-event-time {
  display: block;
  max-width: 100%;
  flex: 0 0 auto;
  overflow: hidden;
  text-shadow: 0 calc(2 * 0.1157407407vw) calc(6 * 0.1157407407vw) rgba(0, 0, 0, 0.94);
  white-space: nowrap;
}

.pixel-eaf-event-title {
  color: #fff8ea;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(9.5 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(0.35 * 0.1157407407vw);
  line-height: 1.06;
}

.pixel-eaf-event-subtitle {
  margin-top: calc(2 * 0.1157407407vw);
  color: rgba(255, 250, 241, 0.96);
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(6.7 * 0.1157407407vw);
  font-weight: 900;
  line-height: 1.12;
}

.pixel-eaf-card-rule {
  display: block;
  width: 100%;
  height: max(1px, calc(0.55 * 0.1157407407vw));
  flex: 0 0 auto;
  margin: calc(4.5 * 0.1157407407vw) 0 calc(4 * 0.1157407407vw);
  background: linear-gradient(90deg, transparent, rgba(239, 200, 116, 0.8) 12%, rgba(239, 200, 116, 0.8) 88%, transparent);
}

.pixel-eaf-event-date {
  color: #efc874;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(7.3 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(0.3 * 0.1157407407vw);
  line-height: 1.08;
}

.pixel-eaf-event-time {
  margin-top: calc(2 * 0.1157407407vw);
  color: #fff8ea;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(7.5 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(0.35 * 0.1157407407vw);
  line-height: 1.05;
}

.pixel-eaf-button {
  position: absolute;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: max(1px, calc(0.9 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.82);
  border-radius: calc(6 * 0.1157407407vw);
  background: rgba(5, 5, 4, 0.68);
  box-shadow:
    0 0 calc(9 * 0.1157407407vw) rgba(216, 180, 106, 0.12),
    inset 0 0 calc(10 * 0.1157407407vw) rgba(239, 200, 116, 0.03);
  color: #fff8ea;
  cursor: pointer;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(9.4 * 0.1157407407vw);
  font-weight: 900;
  gap: calc(2 * 0.1157407407vw);
  letter-spacing: calc(1.2 * 0.1157407407vw);
  line-height: 1;
  pointer-events: auto;
  text-shadow: 0 calc(2 * 0.1157407407vw) calc(6 * 0.1157407407vw) rgba(0, 0, 0, 0.94);
  white-space: nowrap;
}

.pixel-eaf-button small {
  color: #efc874;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(5.6 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(1.5 * 0.1157407407vw);
  line-height: 1;
}

.pixel-eaf-map-media {
  position: absolute;
  z-index: 8;
  border: max(1px, calc(0.9 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.82);
  border-radius: calc(5 * 0.1157407407vw);
  box-shadow: 0 0 calc(8 * 0.1157407407vw) rgba(42, 134, 255, 0.08);
}

.pixel-eaf-access-list {
  position: absolute;
  z-index: 8;
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
}

.pixel-eaf-access-row {
  display: grid;
  min-height: 0;
  grid-template-columns: calc(14 * 0.1157407407vw) minmax(0, 1fr);
  align-items: center;
  column-gap: calc(7 * 0.1157407407vw);
  overflow: hidden;
  border-top: max(1px, calc(0.5 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.42);
  padding: calc(1.8 * 0.1157407407vw) 0 calc(1.8 * 0.1157407407vw) calc(1 * 0.1157407407vw);
}

.pixel-eaf-access-row:first-child {
  border-top: 0;
}

.pixel-eaf-access-row svg {
  width: calc(11 * 0.1157407407vw);
  height: calc(11 * 0.1157407407vw);
  color: #efc874;
  filter: drop-shadow(0 0 calc(4 * 0.1157407407vw) rgba(239, 200, 116, 0.3));
}

.pixel-eaf-access-row span {
  display: block;
  min-width: 0;
  overflow: hidden;
  color: #fff8ea;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(6.6 * 0.1157407407vw);
  font-weight: 800;
  letter-spacing: calc(0.28 * 0.1157407407vw);
  line-height: 1.25;
  text-shadow: 0 calc(2 * 0.1157407407vw) calc(6 * 0.1157407407vw) rgba(0, 0, 0, 0.94);
  white-space: pre-line;
}

.pixel-eaf-faq-list {
  position: absolute;
  z-index: 8;
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: calc(5 * 0.1157407407vw);
  overflow: hidden;
}

.pixel-eaf-faq-row {
  display: grid;
  min-height: 0;
  flex: 1 1 0;
  grid-template-columns: minmax(0, 1fr) calc(16 * 0.1157407407vw);
  align-items: center;
  overflow: hidden;
  border: max(1px, calc(0.75 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.62);
  border-radius: calc(5 * 0.1157407407vw);
  background:
    linear-gradient(180deg, rgba(255, 247, 234, 0.035), rgba(255, 247, 234, 0.006)),
    rgba(20, 20, 18, 0.84);
  padding: 0 calc(8 * 0.1157407407vw) 0 calc(14 * 0.1157407407vw);
  color: #fff8ea;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(8.2 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(0.55 * 0.1157407407vw);
  line-height: 1;
  text-shadow: 0 calc(2 * 0.1157407407vw) calc(6 * 0.1157407407vw) rgba(0, 0, 0, 0.94);
  white-space: nowrap;
}

.pixel-eaf-faq-row span {
  display: flex;
  height: 100%;
  align-items: center;
  min-width: 0;
  overflow: hidden;
  line-height: 1.2;
  text-overflow: clip;
}

.pixel-eaf-faq-row svg {
  justify-self: end;
  width: calc(11 * 0.1157407407vw);
  height: calc(11 * 0.1157407407vw);
  color: #efc874;
  filter: drop-shadow(0 0 calc(3 * 0.1157407407vw) rgba(239, 200, 116, 0.28));
}

.pixel-cf-panel {
  position: absolute;
  z-index: 7;
  overflow: hidden;
  border: max(1px, calc(0.9 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.88);
  border-radius: calc(6 * 0.1157407407vw);
  background:
    radial-gradient(circle at 49% 34%, rgba(168, 72, 235, 0.1), transparent 24%),
    radial-gradient(circle at 18% 30%, rgba(216, 180, 106, 0.07), transparent 20%),
    radial-gradient(circle at 83% 26%, rgba(216, 180, 106, 0.06), transparent 22%);
  box-shadow:
    inset 0 0 calc(18 * 0.1157407407vw) rgba(0, 0, 0, 0.58),
    0 0 calc(12 * 0.1157407407vw) rgba(216, 180, 106, 0.08);
  pointer-events: none;
}

.pixel-cf-panel::before {
  position: absolute;
  inset: 0 0 auto;
  z-index: 7;
  height: 58%;
  background:
    radial-gradient(ellipse at 50% 35%, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.38) 48%, rgba(0, 0, 0, 0.62) 100%),
    linear-gradient(90deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.4) 28%, rgba(0, 0, 0, 0.34) 72%, rgba(0, 0, 0, 0.02));
  content: "";
}

.pixel-cf-footer-shade {
  position: absolute;
  left: 0;
  top: 57.5%;
  z-index: 7;
  width: 100%;
  height: 42.5%;
  border-top: max(1px, calc(0.65 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.72);
  background-color: #060605;
  background:
    radial-gradient(circle at 13% 45%, rgba(216, 180, 106, 0.06), transparent 19%),
    radial-gradient(circle at 54% 20%, rgba(255, 247, 234, 0.035), transparent 24%),
    linear-gradient(180deg, #10100f, #060605 62%, #050504);
}

.pixel-cf-title,
.pixel-cf-subtitle,
.pixel-cf-brand,
.pixel-cf-column,
.pixel-cf-copyright {
  position: absolute;
  z-index: 9;
  margin: 0;
  overflow: hidden;
  pointer-events: none;
  text-shadow: 0 calc(2 * 0.1157407407vw) calc(7 * 0.1157407407vw) rgba(0, 0, 0, 0.94);
}

.pixel-cf-title {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #efc874;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(40 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(1.6 * 0.1157407407vw);
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  text-shadow:
    0 calc(2 * 0.1157407407vw) calc(8 * 0.1157407407vw) rgba(0, 0, 0, 0.96),
    0 0 calc(11 * 0.1157407407vw) rgba(239, 200, 116, 0.2);
}

.pixel-cf-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff8ea;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(11 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(0.7 * 0.1157407407vw);
  line-height: 1;
  text-align: center;
  white-space: nowrap;
}

.pixel-cf-button {
  position: absolute;
  z-index: 10;
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: max(1px, calc(1.2 * 0.1157407407vw)) solid var(--button-border);
  border-radius: calc(6 * 0.1157407407vw);
  background:
    linear-gradient(180deg, rgba(255, 247, 234, 0.09), rgba(255, 247, 234, 0.01) 45%, rgba(0, 0, 0, 0.2)),
    rgba(6, 6, 5, 0.78),
    var(--button-fill);
  box-shadow:
    0 0 calc(13 * 0.1157407407vw) var(--button-glow),
    inset 0 0 calc(14 * 0.1157407407vw) rgba(255, 247, 234, 0.04);
  color: #fff8ea;
  cursor: pointer;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(12.4 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(0.3 * 0.1157407407vw);
  line-height: 1;
  pointer-events: auto;
  text-align: center;
  text-shadow: 0 calc(2 * 0.1157407407vw) calc(6 * 0.1157407407vw) rgba(0, 0, 0, 0.96);
  white-space: nowrap;
}

.pixel-cf-button small {
  display: block;
  max-width: 100%;
  margin-top: calc(4 * 0.1157407407vw);
  overflow: hidden;
  color: var(--button-border);
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(7.6 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(1.35 * 0.1157407407vw);
  line-height: 1;
}

.pixel-cf-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #efc874;
  text-align: center;
}

.pixel-cf-logo-mark {
  position: relative;
  display: block;
  width: calc(28 * 0.1157407407vw);
  height: calc(28 * 0.1157407407vw);
  border: max(1px, calc(1.2 * 0.1157407407vw)) solid rgba(239, 200, 116, 0.9);
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%, rgba(239, 200, 116, 0.18), transparent 56%),
    rgba(8, 8, 7, 0.34);
  box-shadow: 0 0 calc(9 * 0.1157407407vw) rgba(239, 200, 116, 0.22);
}

.pixel-cf-logo-mark::before,
.pixel-cf-logo-mark::after {
  position: absolute;
  left: 50%;
  top: 43%;
  width: 47%;
  height: 24%;
  border-top: max(1px, calc(1.2 * 0.1157407407vw)) solid rgba(239, 200, 116, 0.9);
  border-radius: 50% 50% 0 0;
  content: "";
}

.pixel-cf-logo-mark::before {
  transform: translate(-88%, -50%) rotate(25deg);
}

.pixel-cf-logo-mark::after {
  transform: translate(-12%, -50%) rotate(-25deg);
}

.pixel-cf-logo-stem {
  position: absolute;
  left: 50%;
  top: 36%;
  width: max(1px, calc(1 * 0.1157407407vw));
  height: 44%;
  background: rgba(239, 200, 116, 0.92);
  transform: translateX(-50%);
}

.pixel-cf-brand-kicker,
.pixel-cf-brand-name {
  display: block;
  max-width: 100%;
  overflow: hidden;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
}

.pixel-cf-brand-kicker {
  margin-top: calc(5 * 0.1157407407vw);
  font-size: calc(7.2 * 0.1157407407vw);
  letter-spacing: calc(1.35 * 0.1157407407vw);
}

.pixel-cf-brand-name {
  margin-top: calc(5 * 0.1157407407vw);
  font-size: calc(16.8 * 0.1157407407vw);
  letter-spacing: calc(3.7 * 0.1157407407vw);
}

.pixel-cf-column {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  color: #fff8ea;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
}

.pixel-cf-column-title {
  display: block;
  max-width: 100%;
  overflow: hidden;
  color: #efc874;
  font-size: calc(9.4 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(1.25 * 0.1157407407vw);
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
}

.pixel-cf-column-rule {
  display: block;
  width: calc(55 * 0.1157407407vw);
  height: max(1px, calc(0.65 * 0.1157407407vw));
  margin: calc(7 * 0.1157407407vw) 0 calc(6 * 0.1157407407vw);
  background: linear-gradient(90deg, rgba(239, 200, 116, 0.82), rgba(239, 200, 116, 0.1));
}

.pixel-cf-column-items {
  display: flex;
  min-width: 0;
  max-width: 100%;
  flex-direction: column;
  gap: calc(5.1 * 0.1157407407vw);
  overflow: hidden;
}

.pixel-cf-column-link {
  color: inherit;
  text-decoration: none;
  pointer-events: auto;
}

.pixel-cf-column-item {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: calc(5.5 * 0.1157407407vw);
  overflow: hidden;
  color: #fff8ea;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(7.3 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(0.45 * 0.1157407407vw);
  line-height: 1.15;
  white-space: nowrap;
}

.pixel-cf-column-item svg {
  width: calc(14 * 0.1157407407vw);
  height: calc(14 * 0.1157407407vw);
  flex: 0 0 auto;
  color: #fff8ea;
  filter: drop-shadow(0 0 calc(3 * 0.1157407407vw) rgba(255, 247, 234, 0.36));
}

.pixel-cf-column[data-kind="address"] .pixel-cf-column-item,
.pixel-cf-column[data-kind="hours"] .pixel-cf-column-item {
  font-size: calc(6.7 * 0.1157407407vw);
  letter-spacing: calc(0.15 * 0.1157407407vw);
}

.pixel-cf-copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 248, 234, 0.9);
  font-family: var(--font-manrope), var(--font-zen), sans-serif;
  font-size: calc(5.6 * 0.1157407407vw);
  font-weight: 500;
  letter-spacing: calc(0.15 * 0.1157407407vw);
  line-height: 1;
  text-align: center;
  white-space: nowrap;
}

.pixel-pe-heading {
  position: absolute;
  z-index: 6;
  display: flex;
  min-width: 0;
  align-items: center;
  gap: calc(13 * 0.1157407407vw);
  pointer-events: none;
}

.pixel-pe-heading-line {
  height: max(1px, calc(0.85 * 0.1157407407vw));
  flex: 1 1 auto;
  background: linear-gradient(90deg, transparent, rgba(239, 200, 116, 0.9) 18%, rgba(239, 200, 116, 0.9) 82%, transparent);
  box-shadow: 0 0 calc(5 * 0.1157407407vw) rgba(239, 200, 116, 0.22);
}

.pixel-pe-heading-title {
  flex: 0 0 auto;
  color: #efc874;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(31 * 0.1157407407vw);
  font-style: italic;
  font-weight: 900;
  letter-spacing: calc(1.8 * 0.1157407407vw);
  line-height: 1;
  text-shadow:
    0 calc(2 * 0.1157407407vw) calc(8 * 0.1157407407vw) rgba(0, 0, 0, 0.92),
    0 0 calc(8 * 0.1157407407vw) rgba(239, 200, 116, 0.2);
  white-space: nowrap;
}

.pixel-price-card {
  position: absolute;
  z-index: 6;
  overflow: hidden;
  border: max(1px, calc(1.2 * 0.1157407407vw)) solid var(--price-card-border);
  border-radius: calc(8 * 0.1157407407vw);
  background:
    radial-gradient(circle at 50% 82%, var(--price-card-glow), transparent 37%),
    linear-gradient(180deg, rgba(255, 247, 234, 0.035), rgba(0, 0, 0, 0.14)),
    rgba(5, 7, 9, 0.42);
  box-shadow:
    0 0 calc(13 * 0.1157407407vw) var(--price-card-shadow),
    inset 0 0 calc(18 * 0.1157407407vw) rgba(255, 247, 234, 0.035);
  pointer-events: none;
}

.pixel-price-title,
.pixel-price-value,
.pixel-price-extension,
.pixel-price-perk-label {
  position: absolute;
  z-index: 7;
  display: flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff8ea;
  text-align: center;
  text-shadow: 0 calc(2 * 0.1157407407vw) calc(6 * 0.1157407407vw) rgba(0, 0, 0, 0.95);
  white-space: nowrap;
}

.pixel-price-title {
  left: 16%;
  top: 12%;
  width: 68%;
  height: 15%;
  color: var(--price-title-color);
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(20 * 0.1157407407vw);
  font-style: italic;
  font-weight: 900;
  letter-spacing: calc(1.4 * 0.1157407407vw);
  line-height: 1;
}

.pixel-price-value {
  left: 3%;
  top: 33%;
  width: 94%;
  height: 15%;
  font-family: var(--font-manrope), var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(18.2 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(-0.15 * 0.1157407407vw);
}

.pixel-price-solid-rule {
  position: absolute;
  left: 8%;
  top: 54%;
  z-index: 7;
  width: 84%;
  height: max(1px, calc(0.65 * 0.1157407407vw));
  background: linear-gradient(90deg, transparent, rgba(239, 200, 116, 0.88) 12%, rgba(239, 200, 116, 0.88) 88%, transparent);
}

.pixel-price-extension {
  left: 9%;
  top: 60%;
  width: 82%;
  height: 10%;
  color: rgba(255, 239, 209, 0.92);
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(10.2 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(0.45 * 0.1157407407vw);
}

.pixel-price-dotted-rule {
  position: absolute;
  left: 8%;
  top: 75%;
  z-index: 7;
  width: 84%;
  height: max(1px, calc(0.5 * 0.1157407407vw));
  background-image: linear-gradient(90deg, rgba(255, 247, 234, 0.26) 35%, transparent 0);
  background-position: left center;
  background-size: calc(4 * 0.1157407407vw) 1px;
  background-repeat: repeat-x;
}

.pixel-price-perks {
  position: absolute;
  left: 7%;
  top: 75%;
  z-index: 7;
  display: grid;
  width: 86%;
  height: 22%;
  grid-template-columns: repeat(var(--perk-count), minmax(0, 1fr));
  pointer-events: none;
}

.pixel-price-perk {
  position: relative;
  display: grid;
  min-width: 0;
  place-items: center;
  gap: calc(1 * 0.1157407407vw);
  color: #efc874;
}

.pixel-price-perk + .pixel-price-perk {
  border-left: max(1px, calc(0.5 * 0.1157407407vw)) dotted rgba(255, 247, 234, 0.28);
}

.pixel-price-perk svg {
  width: calc(21 * 0.1157407407vw);
  height: calc(21 * 0.1157407407vw);
  filter:
    drop-shadow(0 0 calc(4 * 0.1157407407vw) rgba(239, 200, 116, 0.78))
    drop-shadow(0 0 calc(9 * 0.1157407407vw) rgba(239, 200, 116, 0.16));
}

.pixel-price-perk-label {
  position: static;
  width: 100%;
  height: auto;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(8.7 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(0.2 * 0.1157407407vw);
}

.pixel-price-more {
  position: absolute;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: max(1px, calc(1 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.74);
  border-radius: calc(7 * 0.1157407407vw);
  background:
    linear-gradient(180deg, rgba(255, 247, 234, 0.05), rgba(255, 247, 234, 0)),
    rgba(6, 6, 5, 0.7);
  box-shadow:
    0 0 calc(11 * 0.1157407407vw) rgba(216, 180, 106, 0.16),
    inset 0 0 calc(10 * 0.1157407407vw) rgba(239, 200, 116, 0.03);
  color: #fff8ea;
  cursor: pointer;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(12 * 0.1157407407vw);
  font-weight: 900;
  gap: calc(3 * 0.1157407407vw);
  letter-spacing: calc(1.4 * 0.1157407407vw);
  line-height: 1;
  text-shadow: 0 calc(2 * 0.1157407407vw) calc(6 * 0.1157407407vw) rgba(0, 0, 0, 0.92);
}

.pixel-price-more small {
  color: #efc874;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(7.3 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(1.55 * 0.1157407407vw);
}

.pixel-entertainment-panel {
  position: absolute;
  z-index: 6;
  overflow: hidden;
  border: max(1px, calc(1 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.78);
  border-radius: calc(5 * 0.1157407407vw);
  box-shadow: 0 0 calc(10 * 0.1157407407vw) rgba(216, 180, 106, 0.08);
  pointer-events: none;
}

.pixel-ent-row {
  position: absolute;
  left: 0;
  z-index: 7;
  width: 100%;
  border-top: max(1px, calc(0.6 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.72);
  pointer-events: none;
}

.pixel-ent-row:first-child {
  border-top: 0;
}

.pixel-ent-copy {
  position: absolute;
  left: 49%;
  top: 0;
  z-index: 7;
  display: grid;
  width: 50%;
  height: 100%;
  grid-template-columns: calc(27 * 0.1157407407vw) minmax(0, 1fr);
  column-gap: calc(7 * 0.1157407407vw);
  align-items: center;
  padding: calc(4 * 0.1157407407vw) calc(6 * 0.1157407407vw) calc(4 * 0.1157407407vw) 0;
}

.pixel-ent-copy svg {
  width: calc(23 * 0.1157407407vw);
  height: calc(23 * 0.1157407407vw);
  color: #efc874;
  filter: drop-shadow(0 0 calc(5 * 0.1157407407vw) rgba(239, 200, 116, 0.42));
}

.pixel-ent-title {
  display: flex;
  min-height: calc(19 * 0.1157407407vw);
  align-items: center;
  overflow: hidden;
  color: #efc874;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(15.2 * 0.1157407407vw);
  font-weight: 900;
  letter-spacing: calc(1.1 * 0.1157407407vw);
  line-height: 1;
  white-space: nowrap;
  text-shadow:
    0 calc(2 * 0.1157407407vw) calc(7 * 0.1157407407vw) rgba(0, 0, 0, 0.94),
    0 0 calc(4 * 0.1157407407vw) rgba(239, 200, 116, 0.18);
}

.pixel-ent-body {
  display: block;
  margin-top: calc(4 * 0.1157407407vw);
  overflow: hidden;
  color: rgba(255, 247, 234, 0.92);
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-size: calc(6.6 * 0.1157407407vw);
  font-weight: 700;
  letter-spacing: calc(0.25 * 0.1157407407vw);
  line-height: 1.36;
  white-space: pre-line;
  text-shadow: 0 calc(2 * 0.1157407407vw) calc(6 * 0.1157407407vw) rgba(0, 0, 0, 0.95);
}

.pixel-nav-link,
.pixel-dom-button,
.pixel-card-link {
  position: absolute;
  z-index: 5;
  display: inline-flex;
  min-width: 0;
  min-height: 0;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.pixel-nav-link {
  overflow: hidden;
  color: #fff8ea;
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(8 * 0.1157407407vw);
  line-height: 1;
  letter-spacing: calc(0.7 * 0.1157407407vw);
  text-shadow:
    0 0 calc(4 * 0.1157407407vw) rgba(255, 239, 208, 0.74),
    0 calc(1 * 0.1157407407vw) calc(3 * 0.1157407407vw) rgba(0, 0, 0, 0.94);
  text-align: center;
  white-space: nowrap;
}

.pixel-nav-link[data-reserve="true"] {
  border: 0;
  border-radius: calc(5 * 0.1157407407vw);
  color: #fff8ea;
  background: transparent;
  box-shadow: none;
}

.pixel-dom-text {
  position: absolute;
  z-index: 4;
  min-width: 0;
  max-width: 100%;
  margin: 0;
  overflow: hidden;
  color: var(--text-color);
  font-size: calc(var(--font-size) * 0.1157407407vw);
  line-height: var(--line-height, 1);
  letter-spacing: calc(var(--tracking, 0) * 0.1157407407vw);
  text-align: var(--align, left);
  white-space: pre-line;
  overflow-wrap: anywhere;
  pointer-events: none;
  text-rendering: geometricPrecision;
  word-break: keep-all;
}

.pixel-dom-text[data-variant="hero"],
.pixel-dom-text[data-variant="section"] {
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  text-shadow:
    0 0 calc(5 * 0.1157407407vw) rgba(247, 226, 177, 0.34),
    0 calc(2 * 0.1157407407vw) calc(7 * 0.1157407407vw) rgba(0, 0, 0, 0.92);
}

.pixel-dom-text[data-variant="section"] {
  font-style: italic;
}

.pixel-dom-text[data-variant="label"],
.pixel-dom-text[data-variant="small"] {
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-weight: 900;
  text-transform: uppercase;
}

.pixel-dom-text[data-variant="hero"],
.pixel-dom-text[data-variant="section"],
.pixel-dom-text[data-variant="label"],
.pixel-dom-text[data-variant="small"],
.pixel-dom-text[data-variant="price"] {
  white-space: pre;
}

.pixel-dom-text[data-variant="subtitle"],
.pixel-dom-text[data-variant="body"],
.pixel-dom-text[data-variant="price"] {
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
}

.pixel-dom-text[data-variant="subtitle"] {
  font-weight: 900;
}

.pixel-dom-text[data-variant="body"] {
  font-weight: 600;
  overflow: hidden;
}

.pixel-dom-text[data-variant="price"] {
  font-family: var(--font-manrope), var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
}

.pixel-dom-text[data-variant="subtitle"],
.pixel-dom-text[data-variant="body"],
.pixel-dom-text[data-variant="label"],
.pixel-dom-text[data-variant="price"],
.pixel-feature-label,
.pixel-feature-sub {
  text-shadow:
    0 calc(1 * 0.1157407407vw) calc(4 * 0.1157407407vw) rgba(0, 0, 0, 0.92),
    0 0 calc(2 * 0.1157407407vw) rgba(255, 247, 234, 0.16);
}

.pixel-dom-button {
  flex-direction: row;
  gap: calc(7 * 0.1157407407vw);
  border: 0;
  border-radius: calc(6 * 0.1157407407vw);
  background: transparent;
  box-shadow: none;
  color: #fff8ea;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  overflow: hidden;
  padding: 0 calc(8 * 0.1157407407vw);
  font-size: calc(8.1 * 0.1157407407vw);
  font-weight: 900;
  line-height: 1.05;
  text-align: center;
  text-shadow: 0 calc(1 * 0.1157407407vw) calc(4 * 0.1157407407vw) rgba(0, 0, 0, 0.94);
  white-space: normal;
}

.pixel-button-copy {
  display: block;
  min-width: 0;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  line-height: 1.04;
  overflow-wrap: anywhere;
}

.pixel-button-copy:not(:has(small)) {
  min-height: calc(1em + 2px);
  line-height: calc(1em + 2px);
}

.pixel-dom-button small {
  display: block;
  margin-top: calc(2 * 0.1157407407vw);
  height: auto;
  min-height: 0;
  color: rgba(255, 247, 234, 0.84);
  font-family: "Bahnschrift Condensed", "Arial Narrow", var(--font-manrope), sans-serif;
  font-size: calc(4.6 * 0.1157407407vw);
  line-height: 1;
  letter-spacing: calc(0.55 * 0.1157407407vw);
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
}

.pixel-card-link {
  overflow: hidden;
  border-radius: calc(4 * 0.1157407407vw);
  color: transparent;
}

.pixel-card-link span {
  display: block;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  color: transparent;
  pointer-events: none;
}

.pixel-feature-card {
  position: absolute;
  z-index: 5;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  pointer-events: none;
  border: max(1px, calc(1.25 * 0.1157407407vw)) solid rgba(171, 126, 52, 0.76);
  border-radius: calc(6 * 0.1157407407vw);
  background:
    linear-gradient(180deg, rgba(255, 247, 234, 0.04), rgba(255, 247, 234, 0.01) 44%, rgba(0, 0, 0, 0.08)),
    rgba(18, 18, 16, 0.94);
  box-shadow:
    inset 0 0 calc(18 * 0.1157407407vw) rgba(255, 231, 177, 0.035),
    0 0 calc(11 * 0.1157407407vw) rgba(216, 180, 106, 0.08);
}

.pixel-feature-icon {
  position: absolute;
  z-index: 4;
  display: grid;
  place-items: center;
  left: 26%;
  top: 11%;
  width: 48%;
  height: 33%;
  color: #f2c674;
  filter:
    drop-shadow(0 0 calc(4 * 0.1157407407vw) rgba(242, 198, 116, 0.88))
    drop-shadow(0 0 calc(12 * 0.1157407407vw) rgba(242, 198, 116, 0.18));
  pointer-events: none;
}

.pixel-feature-icon[data-contained="true"] {
  overflow: hidden;
}

.pixel-feature-icon[data-contained="true"] svg {
  width: 100%;
  height: 100%;
}

.pixel-feature-label,
.pixel-feature-sub {
  position: absolute;
  z-index: 4;
  display: block;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  color: #fff8ea;
  font-family: var(--font-zen), "Yu Gothic", "Meiryo", sans-serif;
  text-align: center;
  pointer-events: none;
  white-space: pre-line;
  overflow-wrap: anywhere;
  word-break: keep-all;
}

.pixel-feature-label {
  left: 5%;
  top: 51%;
  width: 90%;
  height: 15%;
  font-size: calc(15.2 * 0.1157407407vw);
  font-weight: 900;
  line-height: 1;
}

.pixel-feature-label[data-contained="true"] {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 calc(1 * 0.1157407407vw);
  line-height: 1;
}

.pixel-feature-divider {
  position: absolute;
  left: 16%;
  top: 69%;
  z-index: 4;
  width: 68%;
  height: max(1px, calc(0.7 * 0.1157407407vw));
  background: linear-gradient(90deg, transparent, rgba(239, 200, 116, 0.88) 15%, rgba(239, 200, 116, 0.88) 85%, transparent);
  pointer-events: none;
}

.pixel-feature-sub {
  left: 6%;
  top: 76%;
  width: 88%;
  height: 18%;
  color: rgba(250, 242, 228, 0.9);
  font-size: calc(7.7 * 0.1157407407vw);
  font-weight: 800;
  line-height: 1.45;
  letter-spacing: calc(0.1 * 0.1157407407vw);
}

.pixel-feature-sub[data-contained="true"] {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 calc(1 * 0.1157407407vw);
}

.pixel-icon-layer {
  position: absolute;
  inset: 0;
  z-index: 4;
  color: transparent;
  pointer-events: none;
}

.pixel-icon-layer svg {
  position: absolute;
  display: block;
  color: currentColor;
  filter: none;
}

.pixel-nav-link:focus-visible,
.pixel-dom-button:focus-visible,
.pixel-card-link:focus-visible,
.pixel-header-brand:focus-visible,
.pixel-header-nav-item:focus-visible,
.pixel-header-mobile-toggle:focus-visible {
  outline: 2px solid rgba(35, 214, 181, 0.96);
  outline-offset: 2px;
}

@media (min-width: 1024px) {
  .pixel-page-image-mobile {
    display: none;
  }

  .pixel-page-image-desktop {
    display: block;
  }

  .pixel-nav-link[data-reserve="true"] {
    border: 1px solid rgba(216, 180, 106, 0.72);
    background: rgba(10, 9, 8, 0.12);
    box-shadow:
      0 0 calc(10 * 0.1157407407vw) rgba(216, 180, 106, 0.18),
      inset 0 0 calc(9 * 0.1157407407vw) rgba(216, 180, 106, 0.08);
  }

  .pixel-dom-button {
    border: 1px solid var(--button-border);
    background:
      linear-gradient(180deg, rgba(255, 247, 234, 0.1), rgba(255, 247, 234, 0)),
      rgba(8, 8, 7, 0.58),
      var(--button-fill);
    box-shadow:
      0 0 calc(10 * 0.1157407407vw) var(--button-glow),
      inset 0 0 calc(12 * 0.1157407407vw) rgba(255, 247, 234, 0.05);
  }

  .pixel-button-copy:not(:has(small)) {
    min-height: max(14px, calc(1em + 2px));
    line-height: max(14px, calc(1em + 2px));
  }

  .pixel-dom-button small {
    height: 14px;
    min-height: 14px;
    line-height: 14px;
  }
}

@media (min-width: 1024px) {
  .pixel-nav-link[data-reserve="true"],
  .pixel-dom-button {
    border-color: transparent;
    background: transparent;
    box-shadow: none;
  }

  .pixel-dom-button svg {
    display: none;
  }
}

.pixel-dom-button[data-row="hero"] {
  align-items: center;
  justify-content: center;
  gap: calc(11 * 0.1157407407vw);
  border: max(1px, calc(2.2 * 0.1157407407vw)) solid var(--button-border);
  border-radius: calc(13 * 0.1157407407vw);
  padding: calc(8 * 0.1157407407vw) calc(14 * 0.1157407407vw);
  background:
    linear-gradient(180deg, rgba(255, 247, 234, 0.08), rgba(255, 247, 234, 0.01) 42%, rgba(0, 0, 0, 0.18)),
    #070706,
    var(--button-fill);
  box-shadow:
    0 0 calc(19 * 0.1157407407vw) var(--button-glow),
    0 calc(10 * 0.1157407407vw) calc(24 * 0.1157407407vw) rgba(0, 0, 0, 0.56),
    inset 0 0 calc(18 * 0.1157407407vw) rgba(255, 247, 234, 0.06);
  font-size: calc(17 * 0.1157407407vw);
  letter-spacing: calc(0.2 * 0.1157407407vw);
}

.pixel-dom-button[data-row="hero"] .pixel-button-copy {
  display: flex;
  height: auto;
  max-height: 100%;
  min-height: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.02;
}

.pixel-dom-button[data-row="hero"] small {
  margin-top: calc(5 * 0.1157407407vw);
  height: auto;
  min-height: 0;
  font-size: calc(9.3 * 0.1157407407vw);
  line-height: 1;
  letter-spacing: calc(1.35 * 0.1157407407vw);
}

.pixel-dom-button[data-framed="true"] {
  border: 1px solid var(--button-border);
  background:
    linear-gradient(180deg, rgba(255, 247, 234, 0.1), rgba(255, 247, 234, 0)),
    rgba(8, 8, 7, 0.58),
    var(--button-fill);
  box-shadow:
    0 0 calc(10 * 0.1157407407vw) var(--button-glow),
    inset 0 0 calc(12 * 0.1157407407vw) rgba(255, 247, 234, 0.05);
}

.pixel-dom-button[data-clean-fill="true"] {
  background:
    linear-gradient(180deg, rgba(255, 247, 234, 0.1), rgba(255, 247, 234, 0)),
    #070706,
    var(--button-fill);
  box-shadow:
    0 0 calc(10 * 0.1157407407vw) var(--button-glow),
    inset 0 0 calc(12 * 0.1157407407vw) rgba(255, 247, 234, 0.06);
}

.pixel-dom-button[data-row="hero"][data-clean-fill="true"] {
  background:
    linear-gradient(180deg, rgba(255, 247, 234, 0.08), rgba(255, 247, 234, 0.01) 42%, rgba(0, 0, 0, 0.18)),
    #070706,
    var(--button-fill);
  box-shadow:
    0 0 calc(19 * 0.1157407407vw) var(--button-glow),
    0 calc(10 * 0.1157407407vw) calc(24 * 0.1157407407vw) rgba(0, 0, 0, 0.56),
    inset 0 0 calc(18 * 0.1157407407vw) rgba(255, 247, 234, 0.06);
}

.pixel-dom-button[data-compact="true"] {
  gap: calc(18 * 0.1157407407vw);
  padding: calc(8 * 0.1157407407vw) calc(18 * 0.1157407407vw);
}

.pixel-dom-button[data-compact="true"] .pixel-button-copy {
  align-items: flex-start;
  font-size: calc(14.6 * 0.1157407407vw);
  text-align: left;
}

.pixel-dom-button[data-compact="true"] small {
  font-size: calc(8.5 * 0.1157407407vw);
  letter-spacing: calc(1.25 * 0.1157407407vw);
}

.pixel-button-icons {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: calc(14 * 0.1157407407vw);
  max-height: 100%;
  color: #fff8ea;
}

.pixel-dom-button[data-framed="true"] svg {
  display: block;
  width: calc(26 * 0.1157407407vw);
  height: calc(26 * 0.1157407407vw);
  flex: 0 0 auto;
  color: #fff8ea;
  filter: drop-shadow(0 0 calc(5 * 0.1157407407vw) rgba(255, 247, 234, 0.54));
}

.pixel-dom-button[data-compact="true"] .pixel-button-icons svg:first-child {
  padding: calc(3.2 * 0.1157407407vw);
  border: max(1px, calc(1.7 * 0.1157407407vw)) solid currentColor;
  border-radius: calc(6 * 0.1157407407vw);
}
`;

const xPct = (value: number) => `${(value / designWidth) * 100}%`;
const yPct = (value: number) => `${(value / designHeight) * 100}%`;

const toneColor = (tone: PixelTextBlock["tone"]) => {
  switch (tone) {
    case "gold":
      return "#efc874";
    case "muted":
      return "rgba(245, 236, 220, 0.9)";
    case "blue":
      return "#9dcbff";
    case "pink":
      return "#ffd2e2";
    case "white":
      return "#fffaf1";
    case "ink":
    default:
      return "#fff8ea";
  }
};

const buttonTone = (tone: PixelButton["tone"]) => {
  switch (tone) {
    case "blue":
      return {
        "--button-border": "rgba(93, 151, 238, 0.92)",
        "--button-fill": "rgba(34, 91, 176, 0.16)",
        "--button-glow": "rgba(80, 145, 255, 0.45)",
      };
    case "green":
      return {
        "--button-border": "rgba(48, 214, 94, 0.92)",
        "--button-fill": "rgba(25, 167, 72, 0.16)",
        "--button-glow": "rgba(48, 214, 94, 0.44)",
      };
    case "dark":
      return {
        "--button-border": "rgba(216, 180, 106, 0.82)",
        "--button-fill": "rgba(15, 13, 11, 0.28)",
        "--button-glow": "rgba(216, 180, 106, 0.3)",
      };
    case "gold":
    default:
      return {
        "--button-border": "rgba(216, 180, 106, 0.94)",
        "--button-fill": "rgba(216, 180, 106, 0.2)",
        "--button-glow": "rgba(216, 180, 106, 0.42)",
      };
  }
};

function navigateTo(href: string) {
  window.location.href = href;
}

function boxStyle({ left, top, width, height }: Pick<PixelLink, "left" | "top" | "width" | "height">): CSSProperties {
  return { left: xPct(left), top: yPct(top), width: xPct(width), height: yPct(height) };
}

function innerBoxStyle({ left, top, width, height }: Pick<PixelLink, "left" | "top" | "width" | "height">, parentWidth: number, parentHeight: number): CSSProperties {
  return {
    left: `${(left / parentWidth) * 100}%`,
    top: `${(top / parentHeight) * 100}%`,
    width: `${(width / parentWidth) * 100}%`,
    height: `${(height / parentHeight) * 100}%`,
  };
}

function sliceCropStyle(crop: { x: number; y: number; width: number; height: number }): CSSProperties {
  return {
    left: `${(-crop.x / crop.width) * 100}%`,
    top: `${(-crop.y / crop.height) * 100}%`,
    width: `${(designWidth / crop.width) * 100}%`,
  };
}

function TextBlock({ as, text, left, top, width, height, size, lineHeight = 1, tracking = 0, tone, variant = "body", align = "left" }: PixelTextBlock) {
  const Tag = as;
  const region =
    top < 50
      ? "header"
      : top < 361
        ? "hero"
      : top >= 361 && top < 592
        ? "about"
        : top >= 775 && top < 1031
          ? "price-entertainment"
          : top >= 1418 && top < 1621
            ? "event-access-faq"
            : top >= 1621
              ? "cta-footer"
              : undefined;
  const style: PixelStyle = {
    ...boxStyle({ left, top, width, height }),
    "--font-size": size,
    "--line-height": lineHeight,
    "--tracking": tracking,
    "--text-color": toneColor(tone),
    "--align": align,
  };

  return (
    <Tag className="pixel-dom-text" data-region={region} data-variant={variant} style={style}>
      {text}
    </Tag>
  );
}

function ActionButton({ href, label, sub, left, top, width, height, tone, icon: Icon, secondaryIcon: SecondaryIcon, row, framed, compact, cleanFill }: PixelButton) {
  const region = top < 361 ? "hero" : top >= 361 && top < 592 ? "about" : top >= 775 && top < 1031 ? "price-entertainment" : top >= 1418 && top < 1621 ? "event-access-faq" : top >= 1621 ? "cta-footer" : undefined;
  const style: PixelStyle = {
    ...boxStyle({ left, top, width, height }),
    ...buttonTone(tone),
  };

  return (
    <button
      type="button"
      className="pixel-dom-button"
      data-tone={tone}
      data-row={row}
      data-region={region}
      data-framed={framed ? "true" : undefined}
      data-compact={compact ? "true" : undefined}
      data-clean-fill={cleanFill ? "true" : undefined}
      onClick={() => navigateTo(href)}
      style={style}
      aria-label={label}
    >
      {Icon || SecondaryIcon ? (
        <span className="pixel-button-icons" aria-hidden="true">
          {Icon ? <Icon size={14} strokeWidth={2} /> : null}
          {SecondaryIcon ? <SecondaryIcon size={14} strokeWidth={2} /> : null}
        </span>
      ) : null}
      <span className="pixel-button-copy">
        {label}
        {sub ? <small>{sub}</small> : null}
      </span>
    </button>
  );
}

function CardLink({ href, label, left, top, width, height }: PixelLink) {
  return (
    <a className="pixel-card-link" href={href} aria-label={label} style={boxStyle({ left, top, width, height })}>
      <span>{label}</span>
    </a>
  );
}

function PixelHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const groupedItems = headerNavItems.filter((item) => item.group === "menu");
  const standaloneItems = headerNavItems.filter((item) => item.group !== "menu");

  const itemMetrics = (label: string) => {
    const basisByLabel: Record<string, number> = {
      HOME: 80,
      ACCESS: 90,
      BLOG: 70,
      CAMPAIGN: 120,
      ENTERTAINMENT: 150,
      EVENTS: 86,
      FAQ: 60,
      PRICE: 92,
      "DRINK MENU": 132,
      "FOOD MENU": 126,
    };

    return {
      basis: basisByLabel[label] ?? 76,
      labelSize: label.length > 12 ? 18 : label.length > 8 ? 19.5 : 21,
      tracking: label.length > 12 ? 0.16 : label.length > 8 ? 0.34 : 0.78,
    };
  };

  const renderNavItem = (item: HeaderNavItem, isMobile = false) => {
    const Icon = item.icon;
    const { basis, labelSize, tracking } = itemMetrics(item.label);
    const style: PixelStyle | undefined = isMobile
      ? undefined
      : {
          "--nav-basis": basis,
          "--header-font-size": labelSize,
          "--header-tracking": tracking,
        };

    return (
      <button
        key={item.label}
        type="button"
        className="pixel-header-nav-item"
        data-active={item.active ? "true" : undefined}
        data-has-sub={item.sub ? "true" : undefined}
        onClick={() => {
          setMenuOpen(false);
          navigateTo(item.href);
        }}
        style={style}
        aria-label={item.label}
      >
        <Icon strokeWidth={1.65} aria-hidden="true" />
        <span className="pixel-header-nav-label">{item.label}</span>
        {item.sub ? <span className="pixel-header-nav-sub">{item.sub}</span> : null}
      </button>
    );
  };

  return (
    <header className="pixel-main-header" aria-label="Site header">
      <div className="pixel-header-shell">
        <button type="button" className="pixel-header-brand" aria-label="TSURUSEN home" onClick={() => navigateTo("/")}>
          <span className="pixel-header-logo-mark" aria-hidden="true">
            <span className="pixel-header-logo-stem" />
          </span>
          <span className="pixel-header-brand-copy">
            <span className="pixel-header-brand-kicker">AMUSEMENT BAR</span>
            <span className="pixel-header-brand-name">TSURUSEN</span>
          </span>
        </button>

        <nav className="pixel-header-desktop-nav" aria-label="Header menu">
          {renderNavItem(standaloneItems[0])}
          <div className="pixel-header-menu-group" aria-label="Price, drink menu and food menu">
            {groupedItems.map((item, index) => [
              index > 0 ? <span key={`${item.label}-divider`} className="pixel-header-menu-divider" aria-hidden="true" /> : null,
              renderNavItem(item),
            ])}
          </div>
          {standaloneItems.slice(1).map((item) => renderNavItem(item))}
        </nav>

        <button type="button" className="pixel-header-mobile-toggle" aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"} aria-expanded={menuOpen} aria-controls="pixel-header-mobile-menu" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X strokeWidth={1.8} aria-hidden="true" /> : <Menu strokeWidth={1.8} aria-hidden="true" />}
        </button>

        <nav id="pixel-header-mobile-menu" className="pixel-header-mobile-panel" data-open={menuOpen ? "true" : undefined} aria-label="Mobile header menu">
          {renderNavItem(standaloneItems[0], true)}
          <div className="pixel-header-mobile-group" aria-label="Price, drink menu and food menu">
            {groupedItems.map((item) => renderNavItem(item, true))}
          </div>
          {standaloneItems.slice(1).map((item) => renderNavItem(item, true))}
        </nav>
      </div>
    </header>
  );
}

function PixelHero() {
  return (
    <section className="pixel-lux-hero" aria-labelledby="pixel-lux-title">
      <PixelHeader />
      <div className="pixel-lux-content">
        <h1 id="pixel-lux-title" className="pixel-lux-title">
          LET&apos;S PLAY TONIGHT.
        </h1>
        <p className="pixel-lux-subtitle">今夜はTSURUSENで最高の時間を。</p>
        <div className="pixel-lux-actions" aria-label="Reserve actions">
          {heroActions.map((action) => {
            const Icon = action.icon;
            const SecondaryIcon = action.secondaryIcon;

            return (
              <button key={action.label} type="button" className="pixel-lux-action" data-tone={action.tone} onClick={() => navigateTo(action.href)} aria-label={action.label}>
                {Icon || SecondaryIcon ? (
                  <span className="pixel-lux-action-icons" aria-hidden="true">
                    {Icon ? <Icon strokeWidth={2} /> : null}
                    {SecondaryIcon ? <SecondaryIcon strokeWidth={2} /> : null}
                  </span>
                ) : null}
                <span className="pixel-lux-action-copy">
                  {action.label}
                  <small>{action.sub}</small>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const panelWidth = 804;
  const panelHeight = 214;

  return (
    <section className="pixel-about-panel" aria-labelledby="about-heading" style={boxStyle({ left: 30, top: 374, width: 804, height: 214 })}>
      <div className="pixel-about-copy" style={innerBoxStyle({ left: 100, top: 38, width: 300, height: 132 }, panelWidth, panelHeight)}>
        <p className="pixel-about-kicker">ABOUT</p>
        <h2 id="about-heading" className="pixel-about-title">
          TSURUSEN
        </h2>
        <span className="pixel-about-rule" aria-hidden="true">
          <span className="pixel-about-rule-mark" />
        </span>
        <p className="pixel-about-body">
          非日常を味わえる歌舞伎町のアミューズメントバー。{"\n"}
          ダーツ、カラオケ、飲み放題を楽しみながら、{"\n"}
          仲間との夜を特別な時間に変えていきます。
        </p>
      </div>

      <div className="pixel-about-photo-frame" aria-hidden="true" style={innerBoxStyle({ left: 386, top: 32, width: 414, height: 170 }, panelWidth, panelHeight)} />
    </section>
  );
}

function priceCardTone(tone: string): PixelStyle {
  if (tone === "pink") {
    return {
      "--price-card-border": "rgba(255, 111, 174, 0.96)",
      "--price-card-glow": "rgba(255, 111, 174, 0.16)",
      "--price-card-shadow": "rgba(255, 111, 174, 0.34)",
      "--price-title-color": "#ff9bc8",
    };
  }

  return {
    "--price-card-border": "rgba(105, 168, 255, 0.96)",
    "--price-card-glow": "rgba(105, 168, 255, 0.14)",
    "--price-card-shadow": "rgba(105, 168, 255, 0.34)",
    "--price-title-color": "#6aa8ff",
  };
}

function PriceEntertainmentSection() {
  return (
    <>
      <div className="pixel-pe-heading" aria-hidden="true" style={boxStyle({ left: 34, top: 786, width: 350, height: 36 })}>
        <span className="pixel-pe-heading-line" />
        <span className="pixel-pe-heading-title">PRICE SYSTEM</span>
        <span className="pixel-pe-heading-line" />
      </div>

      <div className="pixel-pe-heading" aria-hidden="true" style={boxStyle({ left: 432, top: 786, width: 390, height: 36 })}>
        <span className="pixel-pe-heading-line" />
        <span className="pixel-pe-heading-title">ENTERTAINMENT</span>
        <span className="pixel-pe-heading-line" />
      </div>

      {priceCards.map((card) => {
        const style: PixelStyle = {
          ...boxStyle({ left: card.left, top: 803, width: 157, height: 185 }),
          ...priceCardTone(card.tone),
        };

        return (
          <div key={card.title} className="pixel-price-card" style={style}>
            <span className="pixel-price-title">{card.title}</span>
            <span className="pixel-price-value">{card.price}</span>
            <span className="pixel-price-solid-rule" aria-hidden="true" />
            <span className="pixel-price-extension">{card.extension}</span>
            <span className="pixel-price-dotted-rule" aria-hidden="true" />
            <span className="pixel-price-perks" style={{ "--perk-count": card.perks.length } as PixelStyle}>
              {card.perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <span key={perk.label} className="pixel-price-perk">
                    <Icon strokeWidth={1.4} aria-hidden="true" />
                    <span className="pixel-price-perk-label">{perk.label}</span>
                  </span>
                );
              })}
            </span>
          </div>
        );
      })}

      <button type="button" className="pixel-price-more" onClick={() => navigateTo("/pricing")} style={boxStyle({ left: 124, top: 984, width: 216, height: 33 })}>
        詳しく見る
        <small>VIEW MORE</small>
      </button>

      <div className="pixel-entertainment-panel" aria-label="ENTERTAINMENT" style={boxStyle({ left: 427, top: 803, width: 352, height: 186 })}>
        {entertainmentItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="pixel-ent-row" style={{ top: `${index * 33.3333}%`, height: "33.3334%" }}>
              <span className="pixel-ent-copy">
                <Icon strokeWidth={1.45} aria-hidden="true" />
                <span>
                  <span className="pixel-ent-title">{item.title}</span>
                  <span className="pixel-ent-body">{item.body}</span>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

function EventAccessFaqSection() {
  const panelWidth = 860;
  const panelHeight = 203;
  const sliceSrc = `${assetBase}/section-07-event-access-faq-textless-ai.png`;
  const heading = (label: string, left: number, width: number) => (
    <div className="pixel-eaf-heading" aria-hidden="true" style={innerBoxStyle({ left, top: 11, width, height: 30 }, panelWidth, panelHeight)}>
      <span className="pixel-eaf-heading-line" />
      <span className="pixel-eaf-heading-title">{label}</span>
      <span className="pixel-eaf-heading-line" />
    </div>
  );

  return (
    <section className="pixel-eaf-panel" aria-label="Event Access FAQ" style={boxStyle({ left: 2, top: 1418, width: 860, height: 203 })}>
      {heading("EVENT", 16, 318)}
      {heading("ACCESS", 348, 224)}
      {heading("FAQ", 590, 250)}

      {eventCards.map((card, index) => (
        <article key={card.title} className="pixel-eaf-event-card" style={innerBoxStyle({ left: 18 + index * 108, top: 53, width: 100, height: 119 }, panelWidth, panelHeight)}>
          <span className="pixel-eaf-card-media" aria-hidden="true">
            <img src={sliceSrc} alt="" draggable={false} style={sliceCropStyle(card.crop)} />
          </span>
          <span className="pixel-eaf-event-copy">
            <span className="pixel-eaf-event-title">{card.title}</span>
            {card.subtitle ? <span className="pixel-eaf-event-subtitle">{card.subtitle}</span> : null}
            <span className="pixel-eaf-card-rule" aria-hidden="true" />
            <span className="pixel-eaf-event-date">{card.date}</span>
            <span className="pixel-eaf-event-time">{card.time}</span>
          </span>
        </article>
      ))}

      <button type="button" className="pixel-eaf-button" onClick={() => navigateTo("/#event")} style={innerBoxStyle({ left: 51, top: 177, width: 278, height: 22 }, panelWidth, panelHeight)}>
        イベント一覧を見る
        <small>VIEW MORE</small>
      </button>

      <div className="pixel-eaf-map-media" aria-hidden="true" style={innerBoxStyle({ left: 360, top: 53, width: 210, height: 74 }, panelWidth, panelHeight)}>
        <img src={sliceSrc} alt="" draggable={false} style={sliceCropStyle({ x: 352, y: 5, width: 104, height: 72 })} />
      </div>

      <div className="pixel-eaf-access-list" style={innerBoxStyle({ left: 365, top: 129, width: 205, height: 68 }, panelWidth, panelHeight)}>
        {accessRows.map((row) => {
          const Icon = row.icon;
          return (
            <div key={row.text} className="pixel-eaf-access-row">
              <Icon strokeWidth={1.7} aria-hidden="true" />
              <span>{row.text}</span>
            </div>
          );
        })}
      </div>

      <div className="pixel-eaf-faq-list" style={innerBoxStyle({ left: 594, top: 52, width: 246, height: 125 }, panelWidth, panelHeight)}>
        {faqItems.map((item) => (
          <div key={item} className="pixel-eaf-faq-row">
            <span>{item}</span>
            <Plus strokeWidth={2.2} aria-hidden="true" />
          </div>
        ))}
      </div>

      <button type="button" className="pixel-eaf-button" onClick={() => navigateTo("/#faq")} style={innerBoxStyle({ left: 600, top: 183, width: 234, height: 18 }, panelWidth, panelHeight)}>
        すべてのFAQを見る
        <small>VIEW MORE</small>
      </button>
    </section>
  );
}

function CtaFooterSection() {
  const panelWidth = 854;
  const panelHeight = 189;

  return (
    <section className="pixel-cf-panel" aria-label="Reserve and footer" style={boxStyle({ left: 5, top: 1626, width: panelWidth, height: panelHeight })}>
      <div className="pixel-cf-footer-shade" aria-hidden="true" />

      <h2 className="pixel-cf-title" style={innerBoxStyle({ left: 202, top: 27, width: 450, height: 43 }, panelWidth, panelHeight)}>
        LET&apos;S PLAY TONIGHT.
      </h2>
      <p className="pixel-cf-subtitle" style={innerBoxStyle({ left: 286, top: 64, width: 282, height: 16 }, panelWidth, panelHeight)}>
        今夜はTSURUSENで最高の時間を。
      </p>

      {ctaFooterButtons.map((button) => (
        <button
          key={button.label}
          type="button"
          className="pixel-cf-button"
          data-tone={button.tone}
          onClick={() => navigateTo(button.href)}
          style={{ ...innerBoxStyle(button, panelWidth, panelHeight), ...buttonTone(button.tone) }}
        >
          {button.label}
          <small>{button.sub}</small>
        </button>
      ))}

      <div className="pixel-cf-brand" style={innerBoxStyle({ left: 55, top: 122, width: 128, height: 61 }, panelWidth, panelHeight)}>
        <span className="pixel-cf-logo-mark" aria-hidden="true">
          <span className="pixel-cf-logo-stem" />
        </span>
        <span className="pixel-cf-brand-kicker">AMUSEMENT BAR</span>
        <span className="pixel-cf-brand-name">TSURUSEN</span>
      </div>

      {ctaFooterColumns.map((column) => (
        <div key={column.title} className="pixel-cf-column" data-kind={column.kind} style={innerBoxStyle(column, panelWidth, panelHeight)}>
          <span className="pixel-cf-column-title">{column.title}</span>
          <span className="pixel-cf-column-rule" aria-hidden="true" />
          <span className="pixel-cf-column-items">
            {column.items.map((item) => {
              const Icon = item.icon;
              const content = (
                <span className="pixel-cf-column-item">
                  {Icon ? <Icon strokeWidth={2} aria-hidden="true" /> : null}
                  <span>{item.text}</span>
                </span>
              );

              return item.href ? (
                <a key={item.text} className="pixel-cf-column-link" href={item.href}>
                  {content}
                </a>
              ) : (
                <span key={item.text}>{content}</span>
              );
            })}
          </span>
        </div>
      ))}

      <p className="pixel-cf-copyright" style={innerBoxStyle({ left: 354, top: 176, width: 146, height: 9 }, panelWidth, panelHeight)}>
        © 2024 TSURUSEN. All Rights Reserved.
      </p>
    </section>
  );
}

export function TsurusenPixelHome() {
  return (
    <div className="tsurusen-pixel-home" id="top">
      <style>{runtimeCss}</style>
      <div className="tsurusen-pixel-stage" aria-label="TSURUSEN HOME">
        {textlessSlices.map((slice) => (
          <img
            key={slice.src}
            src={slice.src}
            alt=""
            aria-hidden="true"
            className="pixel-slice-image"
            draggable={false}
            style={{ top: yPct(slice.top), height: yPct(slice.height) }}
          />
        ))}

        <div className="pixel-hero-cta-band" aria-hidden="true" />
        <div className="pixel-feature-section-bg" aria-hidden="true" style={boxStyle({ left: 0, top: 592, width: 864, height: 183 })} />

        {anchorTargets.map((anchor) => (
          <span key={anchor.id} id={anchor.id} className="pixel-anchor" style={{ top: yPct(anchor.top) }} />
        ))}

        <PixelHero />

        {textBlocks.map((block) => (
          <TextBlock key={`${block.text}-${block.left}-${block.top}`} {...block} />
        ))}

        <AboutSection />

        <div className="pixel-feature-heading" aria-hidden="true" style={boxStyle({ left: 38, top: 609, width: 788, height: 30 })}>
          <span className="pixel-feature-heading-line" />
          <span className="pixel-feature-heading-title">FEATURE</span>
          <span className="pixel-feature-heading-line" />
        </div>

        {featureItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="pixel-feature-card"
              style={boxStyle({
                left: item.left - featureCardInner.width / 2,
                top: featureCardInner.top,
                width: featureCardInner.width,
                height: featureCardInner.height,
              })}
            >
              <span className="pixel-feature-icon" data-contained="true">
                <Icon size={28} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <span className="pixel-feature-label" data-contained="true">
                {item.label}
              </span>
              <span className="pixel-feature-divider" aria-hidden="true" />
              <span className="pixel-feature-sub" data-contained="true">
                {item.sub}
              </span>
            </div>
          );
        })}

        <PriceEntertainmentSection />
        <EventAccessFaqSection />
        <CtaFooterSection />

        {actionButtons.map((button) => (
          <ActionButton key={`${button.label}-${button.left}-${button.top}`} {...button} />
        ))}

        {hitLinks.map((link) => (
          <CardLink key={`${link.label}-${link.top}`} {...link} />
        ))}

        <div className="pixel-icon-layer" aria-hidden="true">
          {footerIcons.map((item) => {
            const Icon = item.icon;
            return <Icon key={`${item.left}-${item.top}`} size={item.size} strokeWidth={1.6} style={{ left: xPct(item.left), top: yPct(item.top) }} />;
          })}
          <Star size={14} fill="currentColor" strokeWidth={1.2} style={{ left: xPct(545), top: yPct(1204) }} />
          <Star size={14} fill="currentColor" strokeWidth={1.2} style={{ left: xPct(570), top: yPct(1204) }} />
          <Star size={14} fill="currentColor" strokeWidth={1.2} style={{ left: xPct(595), top: yPct(1204) }} />
          <Star size={14} fill="currentColor" strokeWidth={1.2} style={{ left: xPct(620), top: yPct(1204) }} />
          <Star size={14} fill="currentColor" strokeWidth={1.2} style={{ left: xPct(645), top: yPct(1204) }} />
        </div>
      </div>
    </div>
  );
}
