"use client";

import { FormEvent, useState } from "react";
import { CalendarCheck, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const fieldClass =
  "min-h-12 border-2 border-white bg-obsidian px-4 text-ink outline-none transition focus:border-amber";

export function ReservationForm({ mode = "reservation" }: { mode?: "reservation" | "party" | "contact" }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="grove-panel p-8 text-center">
        <CalendarCheck className="mx-auto text-amber" size={44} aria-hidden="true" />
        <h2 className="mt-5 text-3xl font-black tracking-[0] text-ink">送信内容を受け付けました</h2>
        <p className="body-copy mx-auto mt-4 max-w-xl">
          デモフォームのため実送信は行っていません。公開時は予約管理ツール、メール、LINE通知などに接続できます。お急ぎの場合は {siteConfig.phone} へお電話ください。
        </p>
        <button type="button" onClick={() => setSent(false)} className="button-secondary mt-7">
          内容を再編集
        </button>
      </div>
    );
  }

  const isContact = mode === "contact";

  return (
    <form onSubmit={onSubmit} className="grove-panel grid gap-5 p-6 md:p-8">
      <div>
        <p className="eyebrow">{isContact ? "Contact Form" : mode === "party" ? "Party Form" : "Web Reservation"}</p>
        <h2 className="mt-3 text-3xl font-black tracking-[0] text-ink">
          {isContact ? "お問い合わせ内容を送る" : mode === "party" ? "貸切・パーティーを相談する" : "来店希望を送る"}
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          名前
          <input name="name" autoComplete="name" required className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          電話番号
          <input name="tel" type="tel" autoComplete="tel" required className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          メールアドレス
          <input name="email" type="email" autoComplete="email" className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          来店希望日
          <input name="date" type="date" className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          希望時間
          <input name="time" type="time" className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          人数
          <input name="people" type="number" min="1" placeholder="例：4" className={fieldClass} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          利用目的
          <select name="purpose" className={fieldClass} defaultValue="">
            <option value="" disabled>選択してください</option>
            <option>二次会</option>
            <option>デート</option>
            <option>団体利用</option>
            <option>貸切</option>
            <option>観光・夜遊び</option>
            <option>その他</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          希望プラン
          <select name="plan" className={fieldClass} defaultValue="">
            <option value="" disabled>選択してください</option>
            {siteConfig.plans.map((plan) => (
              <option key={plan.name}>{plan.name}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-ink">
        要望
        <textarea
          name="message"
          rows={5}
          placeholder="貸切、誕生日、席の希望、Instagram DM希望など"
          className="border-2 border-white bg-obsidian px-4 py-4 text-ink outline-none transition focus:border-amber"
        />
      </label>
      <button type="submit" className="button-primary justify-self-start">
        <Send size={18} aria-hidden="true" />
        送信する
      </button>
    </form>
  );
}
