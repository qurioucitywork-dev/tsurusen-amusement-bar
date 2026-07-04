# Image Asset Prompts

共通サフィックス：
photorealistic editorial hospitality photography, real Tokyo nightlife bar atmosphere, controlled cyan and coral neon accents, warm practical highlights, shallow depth of field, 35mm lens feeling, subtle film grain, no text, no logo, no watermark, no readable signage, no real brand references, avoid oversaturated purple wash, avoid cartoon look, avoid fake 3D render.

## reference-analysis-notes
参考URLから使用してよい型：
- ローディングで世界観を作ってからHeroへ入る
- 背景グリッド、紙/チケット風の情報UI、周辺に浮くステッカー状ビジュアル
- 中央に強いブランドシグナル、右上/ヘッダーにメニュー、下部へスクロール誘導
- フッター前に制作者/問い合わせに相当する情報ブロックを置く

使用禁止：
- 参考URLの画像、ロゴ、キャラクター、文言、配色の完全一致、ソースコード流用

鶴千版への変換：
- キャラクターステッカーではなく、店内写真を白縁のフォトステッカーにする
- 作品メニューではなく、ダーツ / カラオケ / バー / 貸切 / アクセス / 予約の導線にする
- turquoise一色ではなく、黒、アイボリー、真鍮、ティール、赤を使った夜の高級感にする

## photo-sticker-set
用途：Hero周辺のステッカー状写真差し替え、SNS導線
サイズ／アスペクト比：各 1200x900 / 4:3、透明背景版が必要な場合はPNG
生成プロンプト（英語）：
Create a set of photorealistic cutout-style photo stickers for an original Tokyo darts and karaoke amusement bar website. Each sticker should look like a real editorial bar photograph printed as a small glossy sticker with a clean ivory border and subtle shadow: 1) polished bar counter with neon reflections, 2) dart machines glowing in a dark lounge, 3) karaoke microphone and drinks on a table, 4) bottle shelf and warm bar lights. No text, no logo, no readable signage, no brand labels, no people who look like public figures. Premium nightlife mood, black and brass interior, controlled teal and red accent lighting, subtle film grain.
ネガティブ指定：cartoon character, mascot, copied illustration style, turquoise grid background, readable signage, brand logos, fake 3D render, messy club crowd.
配置先：/public/assets/generated/sticker-*.webp または /public/assets/generated/sticker-*.png
alt：鶴千の店内写真ステッカー

## hero-short-video
用途：Hero動画、SNS/TikTok導線のファーストビュー
サイズ／アスペクト比：1080x1920 / 9:16、または 1920x1080 / 16:9
生成プロンプト（英語）：
A cinematic short vertical video for an original Tokyo amusement bar website. Slow push-in through a premium darts and karaoke bar at night: bar counter glow, dart machines lighting up, karaoke microphone on the table, cocktails catching teal and red neon reflections. No readable text, no logo, no identifiable brand labels, no copyrighted characters, no real people faces. Smooth editorial camera movement, warm practical lights, refined nightlife atmosphere, subtle film grain, premium but welcoming.
ネガティブ指定：club chaos, heavy purple wash, visible trademarks, readable screen text, mascot characters, fake render look.
配置先：/public/assets/kabukicho/hero-short.mp4
alt：鶴千の店内ショート動画

## hero-bar
用途：Hero背景、トップファーストビュー
サイズ／アスペクト比：1800x1012 / 16:9
スタイル：夜の店内、右側に被写体、左側にコピー用余白
生成プロンプト（英語）：
Use case: photorealistic-natural. Asset type: official website hero image for a stylish amusement bar in Tokyo. A sophisticated darts and karaoke amusement bar interior at night, dartboards glowing on one side, a polished bar counter with cocktails, subtle karaoke room doorway in the background, no visible brand logos. Wide 16:9 landscape, focal subject on the right third, generous dark negative space on the left for website copy. Controlled cyan and coral neon, soft practical bar lights, shallow depth of field, refined but playful. no text, no logo, no watermark, no readable signage.
ネガティブ指定：cartoon look, over-saturated purple wash, stock-photo polish, fake 3D render, messy clutter.
配置先：/public/assets/generated/hero-bar.webp
alt：ダーツとバーカウンターがネオンに照らされた店内

## darts-lane
用途：メニュー、店内、導線カード
サイズ／アスペクト比：1200x900 / 4:3
スタイル：ダーツレーンの近景
生成プロンプト（英語）：
Close editorial photo of a premium darts lane inside a stylish amusement bar, dartboard softly illuminated, darts placed neatly on a small side table, no visible brand logos. 4:3 landscape card crop, slightly low angle, dartboard on upper left third, layered depth into the room. cyan and coral neon accents, soft bar light, shallow depth of field, subtle film grain. no text, no logo, no watermark.
ネガティブ指定：arcade clutter, cheap party look, real brand references.
配置先：/public/assets/generated/darts-lane.webp
alt：照明に浮かぶダーツレーン

## karaoke-room
用途：店内紹介、カラオケメニュー
サイズ／アスペクト比：1200x900 / 4:3
スタイル：個室感のあるカラオケラウンジ
生成プロンプト（英語）：
A compact premium karaoke lounge room inside a stylish amusement bar, comfortable booth seating, small table with drinks, microphone on the table, no people, no readable screen text. 4:3 landscape, eye-level from room entrance, layered seating depth, clean usable foreground. coral edge light and cyan ambient reflections, warm practical lamps, shallow depth of field. no text, no logo, no watermark.
ネガティブ指定：corporate meeting room, chaotic club lighting, readable lyrics.
配置先：/public/assets/generated/karaoke-room.webp
alt：カラオケラウンジ席

## cocktails
用途：バータイム、コース、メニュー
サイズ／アスペクト比：1200x900 / 4:3
スタイル：カクテルの近景
生成プロンプト（英語）：
Two signature cocktails on a dark polished bar counter with condensation and citrus garnish, subtle darts and karaoke neon blurred in background, no brand labels. 4:3 landscape, low close-up angle, drinks on lower right third, negative space to upper left. controlled cyan rim light, coral neon reflection, warm highlights, shallow depth of field. no text, no logo, no watermark.
ネガティブ指定：messy bar, cheap props, readable brand bottles.
配置先：/public/assets/generated/cocktails.webp
alt：ネオンが反射するカクテル

## friends-darts
用途：利用シーン、SNS、トッププレビュー
サイズ／アスペクト比：900x900 / 1:1
スタイル：大人の少人数利用シーン
生成プロンプト（英語）：
A small group of adult friends in their late 20s to late 30s enjoying darts in a stylish amusement bar, natural candid laughter, holding drinks casually, no one appears intoxicated, no visible logos. Square 1:1 crop, medium wide, faces natural but not celebrity-like, dartboard and neon framing the scene. cyan and coral neon accents, warm skin tones, shallow depth of field. adults only, no text, no logo, no watermark.
ネガティブ指定：excessive alcohol, messy club crowd, exaggerated posing, stock photo smile.
配置先：/public/assets/generated/friends-darts.webp
alt：ダーツを楽しむ大人のグループ

## staff-portrait
用途：こだわり、求人、スタッフ紹介
サイズ／アスペクト比：900x1200 / 3:4
スタイル：親しみと品のあるスタッフポートレート
生成プロンプト（英語）：
Professional portrait of a friendly Japanese amusement bar staff member in their late 20s to 30s, stylish black shirt, standing near a bar counter, approachable but polished, no name tag or logo. Vertical 3:4 portrait, waist-up, subject centered slightly off-axis, shallow depth of field. soft key light, cyan and coral neon rim lights, warm skin tones. adult only, no text, no logo, no watermark, not resembling any real public figure.
ネガティブ指定：fashion model exaggeration, nightclub host look, celebrity resemblance.
配置先：/public/assets/generated/staff-portrait.webp
alt：バーで働くスタッフのイメージ

## cta-counter
用途：Final CTA、アクセス、予約背景
サイズ／アスペクト比：1800x1012 / 16:9
スタイル：予約前の静かなカウンター
生成プロンプト（英語）：
Cinematic wide shot of a stylish Tokyo amusement bar counter prepared for a night reservation, glowing dartboards and karaoke room lights in the distance, three empty bar stools, no people, no visible brand labels. Wide 16:9 landscape, strong negative space in the center for overlay CTA, visual interest at far left and right edges. cyan and coral neon accents, warm low bar light, shallow depth of field. no text, no logo, no watermark.
ネガティブ指定：crowded club, messy tables, cheap stock photo look.
配置先：/public/assets/generated/cta-counter.webp
alt：予約前の静かなバーカウンター

## news-event
用途：ニュース、イベントカード
サイズ／アスペクト比：1200x900 / 4:3
スタイル：イベント小物の静物写真
生成プロンプト（英語）：
Tasteful close-up of a small event table setup for a darts night campaign, score cards, darts, mocktail glasses, and a reserved sign turned away so no text is readable. 4:3 landscape, overhead three-quarter angle, clean negative space around objects. cyan and coral neon reflections, warm highlights, shallow depth of field. no readable text, no logo, no watermark.
ネガティブ指定：messy party clutter, cheap plastic props, readable trademarks.
配置先：/public/assets/generated/news-event.webp
alt：ダーツイベント用のテーブルセット

## ogp
用途：OGP / Twitter card
サイズ／アスペクト比：1200x630
スタイル：hero-barをトリミング
生成プロンプト（英語）：hero-barからWebP変換時に1200x630へクロップ。
ネガティブ指定：なし
配置先：/public/assets/generated/ogp.webp
alt：ダーツ＆カラオケ アミューズメントバー鶴千の店内イメージ
