const newsAssetBase = "/assets/news";

export type NewsArticleCard = {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
};

export type NewsArticle = {
  slug: string;
  category: string;
  date: string;
  author: {
    initial: string;
    name: string;
    role: string;
    bio: string;
  };
  readTime: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAccentImage: string;
  eyecatchImage: string;
  intro: string[];
  quote: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  featureCards: Array<{
    title: string;
    label: string;
    body: string;
    image: string;
  }>;
  pointItems: Array<{
    title: string;
    body: string;
  }>;
  tableOfContents: Array<{
    label: string;
  }>;
  relatedInfo: {
    title: string;
    body: string;
    hours: string;
    holiday: string;
    address: string;
    access: string;
    tel: string;
    image: string;
  };
  popularArticles: NewsArticleCard[];
  relatedArticles: NewsArticleCard[];
};

const popularArticles: NewsArticleCard[] = [
  {
    title: "初めてのダーツ完全ガイド",
    category: "GUIDE",
    date: "2024.07.12",
    readTime: "6 min read",
    image: `${newsAssetBase}/news-popular-01.png`,
    href: "/news/darts-machine-update",
  },
  {
    title: "歌舞伎町のおすすめバー10選",
    category: "KABUKICHO",
    date: "2024.07.08",
    readTime: "7 min read",
    image: `${newsAssetBase}/news-popular-02.png`,
    href: "/news/editors-choice",
  },
  {
    title: "カラオケで盛り上がる曲特集",
    category: "KARAOKE",
    date: "2024.07.06",
    readTime: "5 min read",
    image: `${newsAssetBase}/news-popular-03.png`,
    href: "/news/party-evolution",
  },
  {
    title: "誕生日サプライズの起こし方",
    category: "EVENT",
    date: "2024.07.03",
    readTime: "7 min read",
    image: `${newsAssetBase}/news-popular-04.png`,
    href: "/news/tsurusen-summer-festival-2024",
  },
  {
    title: "二次会に選ばれる理由",
    category: "PARTY",
    date: "2024.07.01",
    readTime: "6 min read",
    image: `${newsAssetBase}/news-popular-05.png`,
    href: "/news/heijitsu-nomihodai-plan",
  },
];

const relatedArticles: NewsArticleCard[] = [
  {
    title: "夏のDJナイトレポート",
    category: "EVENT",
    date: "2024.07.12",
    readTime: "6 min read",
    image: `${newsAssetBase}/news-related-event.png`,
    href: "/news/tsurusen-summer-festival-2024",
  },
  {
    title: "歌舞伎町グルメガイド",
    category: "KABUKICHO",
    date: "2024.07.08",
    readTime: "7 min read",
    image: `${newsAssetBase}/news-related-food.png`,
    href: "/news/editors-choice",
  },
  {
    title: "バーテンダーおすすめカクテル",
    category: "DRINK",
    date: "2024.07.05",
    readTime: "5 min read",
    image: `${newsAssetBase}/news-related-drink.png`,
    href: "/news/new-cocktail-menu",
  },
  {
    title: "二次会に最適な店の選び方",
    category: "GUIDE",
    date: "2024.07.01",
    readTime: "6 min read",
    image: `${newsAssetBase}/news-related-guide.png`,
    href: "/news/party-evolution",
  },
];

const baseArticle: NewsArticle = {
  slug: "kabukicho-night-guide",
  category: "GUIDE",
  date: "2024.07.15",
  author: {
    initial: "T",
    name: "TSURUSEN Editorial Team",
    role: "編集部",
    bio: "鶴千の魅力を伝えるために、日々現場を取材し、夜の楽しみ方を編集しています。",
  },
  readTime: "8 min read",
  title: "KABUKICHO NIGHT GUIDE",
  subtitle: "歌舞伎町の夜をもっと楽しむ、大人の遊び方ガイド",
  heroImage: `${newsAssetBase}/news-hero-bg.png`,
  heroAccentImage: `${newsAssetBase}/news-hero-darts.png`,
  eyecatchImage: `${newsAssetBase}/news-main-kabukicho.png`,
  intro: [
    "ネオンが煌めき、人々が集い、音楽が流れ、笑顔が生まれる。",
    "歌舞伎町は、東京の中でも特別なエネルギーを持つ街です。",
    "その中心で、大人たちが心から楽しめる場所が「鶴千」です。",
  ],
  quote: "最高の夜は、計画ではなく、出会いと瞬間でできている。",
  sections: [
    {
      heading: "鶴千で楽しむ、大人の夜の過ごし方",
      body: [
        "ダーツ、カラオケ、美味しいお酒、そして心地よい空間。",
        "それぞれの楽しみ方がひとつになり、忘れられない夜をつくります。",
      ],
    },
    {
      heading: "大人が楽しめる理由",
      body: [
        "洗練されたラグジュアリー空間、豊富なドリンクとフードメニュー、フレンドリーなスタッフが、自然に会話を弾ませます。",
        "貸切やパーティーにも最適で、アクセス抜群の立地も魅力です。",
      ],
    },
  ],
  featureCards: [
    {
      title: "DARTS",
      label: "本格ダーツ",
      body: "初心者から上級者まで楽しめる本格ダーツをご用意。",
      image: `${newsAssetBase}/news-card-darts.png`,
    },
    {
      title: "KARAOKE",
      label: "音響設備",
      body: "最新曲から懐かしの名曲まで、盛り上がる夜に。",
      image: `${newsAssetBase}/news-card-karaoke.png`,
    },
    {
      title: "COCKTAILS",
      label: "夜の一杯",
      body: "バーテンダーが作るこだわりの一杯が特別な時間を演出。",
      image: `${newsAssetBase}/news-card-cocktails.png`,
    },
  ],
  pointItems: [
    {
      title: "アクセス抜群",
      body: "新宿駅から徒歩圏内で集合にも便利。",
    },
    {
      title: "最大100名様まで貸切OK",
      body: "パーティーや宴会に最適です。",
    },
    {
      title: "営業時間 18:00 - 5:00",
      body: "深夜までゆっくり楽しめます。",
    },
  ],
  tableOfContents: [
    { label: "歌舞伎町は、夜のエンターテインメントシティ。" },
    { label: "鶴千で楽しむ、大人の夜の過ごし方" },
    { label: "おすすめの楽しみ方シーン" },
    { label: "鶴千のこだわり" },
    { label: "まとめ：今夜の物語を、ここから。" },
  ],
  relatedInfo: {
    title: "ダーツ＆カラオケ アミューズメントバー鶴千",
    body: "歌舞伎町で飲み放題・ダーツ・カラオケを楽しめる大人の遊び場。",
    hours: "18:00 - 5:00",
    holiday: "年中無休",
    address: "東京都新宿区歌舞伎町1-2-3 レッツビル B2F",
    access: "新宿駅東口 徒歩7分",
    tel: "03-1234-5678",
    image: `${newsAssetBase}/news-sidebar-info.png`,
  },
  popularArticles,
  relatedArticles,
};

const articleOverrides: Array<Partial<NewsArticle> & Pick<NewsArticle, "slug">> = [
  baseArticle,
  {
    slug: "party-evolution",
    category: "GUIDE",
    date: "2024.07.15",
    title: "KABUKICHO NIGHT GUIDE",
    subtitle: "歌舞伎町の夜をもっと楽しむ、大人の遊び方ガイド",
  },
  {
    slug: "tsurusen-summer-festival-2024",
    category: "EVENT",
    date: "2024.07.12",
    title: "SUMMER DJ NIGHT REPORT",
    subtitle: "音楽と乾杯で盛り上がる、夏のイベントレポート",
  },
  {
    slug: "new-cocktail-menu",
    category: "DRINK",
    date: "2024.07.10",
    title: "COCKTAIL SELECTION",
    subtitle: "バーテンダーが提案する、夏に飲みたいカクテル特集",
  },
  {
    slug: "darts-machine-update",
    category: "DARTS",
    date: "2024.07.12",
    title: "DARTS NIGHT GUIDE",
    subtitle: "初心者でも楽しめる、勝つためのゲーム紹介",
  },
  {
    slug: "heijitsu-nomihodai-plan",
    category: "NEWS",
    date: "2024.07.09",
    title: "NOMIHODAI PLAN NEWS",
    subtitle: "平日でも使いやすい飲み放題プランのお知らせ",
  },
  {
    slug: "editors-choice",
    category: "KABUKICHO",
    date: "2024.07.08",
    title: "EDITOR'S KABUKICHO PICKS",
    subtitle: "歌舞伎町で迷った時に読みたい、大人の夜ガイド",
  },
];

export const newsArticles: NewsArticle[] = articleOverrides.map((article) => ({
  ...baseArticle,
  ...article,
  author: {
    ...baseArticle.author,
    ...article.author,
  },
  relatedInfo: {
    ...baseArticle.relatedInfo,
    ...article.relatedInfo,
  },
}));

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function getAllNewsArticles() {
  return newsArticles;
}
