import { siteConfig } from "@/data/siteConfig";

const cardColors = ["bg-amber", "bg-white", "bg-cyan", "bg-coral text-white"];

export function TrustBar() {
  return (
    <section className="bg-white py-8">
      <div className="site-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.trustItems.map((item, index) => (
          <div
            key={item.label}
            className={`dokomi-card px-5 py-6 ${cardColors[index % cardColors.length]}`}
          >
            <p className="font-display text-xs font-black uppercase tracking-[0.08em]">
              {item.label}
            </p>
            <p className="mt-3 bubble-logo text-5xl tracking-[0]">{item.value}</p>
            <p className="mt-2 text-sm font-black leading-6">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
