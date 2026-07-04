import { quickActions } from "@/data/siteConfig";

export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta fixed inset-x-3 z-50 rounded-[8px] border border-line bg-graphite/94 p-1 shadow-2xl backdrop-blur-xl md:hidden">
      <nav className="grid grid-cols-4 gap-1" aria-label="スマホ固定CTA">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <a
              key={action.label}
              href={action.href}
              aria-label={`${action.label}へ移動`}
              className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-[6px] text-[11px] font-black ${
                index === 0 ? "bg-amber text-graphite" : "text-ink"
              }`}
            >
              <Icon size={17} aria-hidden="true" />
              {action.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
