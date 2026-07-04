const steps = [
  {
    title: "空席確認",
    body: "人数、来店時間、遊びたい内容をLINE・電話・フォームで共有。",
  },
  {
    title: "席と遊び方を調整",
    body: "ダーツ中心、カラオケ中心、貸切相談など、目的に近い形へ整えます。",
  },
  {
    title: "来店",
    body: "初めての方には設備と料金を再確認してからスタートします。",
  },
];

export function FlowSection() {
  return (
    <section className="section-pad bg-cyan">
      <div className="site-container">
        <p className="bubble-logo text-6xl text-ink md:text-8xl">Flow</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[0] text-ink md:text-5xl">
          予約は短く。来店後は自由に。
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="dokomi-card bg-white p-7">
              <p className="bubble-logo text-6xl text-coral">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-2xl font-black tracking-[0] text-ink">{step.title}</h3>
              <p className="mt-4 text-sm font-bold leading-8 text-mist">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
