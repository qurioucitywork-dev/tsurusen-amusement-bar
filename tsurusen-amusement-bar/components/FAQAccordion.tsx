"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function FAQAccordion({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(0);
  const faqs = compact ? siteConfig.faqs.slice(0, 5) : siteConfig.faqs;

  return (
    <div className="grid gap-3">
      {faqs.map((faq, index) => {
        const expanded = open === index;
        return (
          <article key={faq.q} className="overflow-hidden border-2 border-white bg-graphite">
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : index)}
              className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-base font-black text-ink">{faq.q}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-amber transition-transform ${expanded ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {expanded ? (
              <p className="border-t-2 border-white px-5 py-5 text-sm font-bold leading-8 text-mist">
                {faq.a}
              </p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
