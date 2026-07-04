"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export function IndustrySpecificClientComponent() {
  const [active, setActive] = useState(siteConfig.services[0].id);
  const current =
    siteConfig.services.find((service) => service.id === active) ??
    siteConfig.services[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
      <div className="grid gap-4">
        {siteConfig.services.map((service) => (
          <button
            key={service.id}
            type="button"
            onMouseEnter={() => setActive(service.id)}
            onFocus={() => setActive(service.id)}
            onClick={() => setActive(service.id)}
            className={`dokomi-card group grid min-h-28 grid-cols-[auto_1fr] items-center gap-5 p-6 text-left ${
              active === service.id ? "bg-cyan" : "bg-white"
            }`}
          >
            <span className="bubble-logo text-4xl text-coral">{service.label}</span>
            <span>
              <span className="block text-2xl font-black tracking-[0] text-ink group-hover:text-coral">
                {service.title}
              </span>
              <span className="mt-2 block text-sm font-bold leading-7 text-mist">
                {service.description}
              </span>
            </span>
          </button>
        ))}
      </div>
      <div className="dokomi-card relative min-h-[420px] overflow-hidden bg-white p-3">
        <div className="relative h-full min-h-[390px] overflow-hidden rounded-[30px]">
          <Image
            key={current.image}
            src={current.image}
            alt={`${current.title}の写真`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-signature"
          />
        </div>
        <div className="absolute bottom-8 left-8 right-8 rounded-[28px] border-2 border-ink bg-amber p-5">
          <p className="font-display text-4xl font-black tracking-[0] text-ink">
            {current.price}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {current.tags.map((tag) => (
              <span key={tag} className="pill-tag bg-white">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
