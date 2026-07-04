import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IndustrySpecificClientComponent } from "./IndustrySpecificClientComponent";
import { SectionHeading } from "./SectionHeading";

export function ServiceSection({ withLink = true }: { withLink?: boolean }) {
  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Menu"
            title="遊び方を選ぶ"
            copy="ダーツ、カラオケ、バータイム。イベントサイトのように、目的別にすぐ探せるメニュー導線へ整理しています。"
          />
          {withLink ? (
            <Link href="/menu" className="line-link lg:justify-self-end">
              メニュー詳細へ <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
        <div className="mt-14">
          <IndustrySpecificClientComponent />
        </div>
      </div>
    </section>
  );
}
