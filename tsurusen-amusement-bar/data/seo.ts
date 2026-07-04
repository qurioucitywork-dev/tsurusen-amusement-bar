import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

export const baseUrl = "https://example.com";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${baseUrl}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = siteConfig.images.ogp,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name}の店内イメージ`,
        },
      ],
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function localBusinessJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "BarOrPub", "EntertainmentBusiness"],
      name: siteConfig.name,
      description: siteConfig.description,
      image: absoluteUrl(siteConfig.images.hero),
      telephone: siteConfig.phone,
      url: baseUrl,
      priceRange: "¥¥",
      servesCuisine: "Bar food",
      address: {
        "@type": "PostalAddress",
        postalCode: siteConfig.postalCode,
        addressRegion: "東京都",
        addressLocality: "新宿区歌舞伎町",
        streetAddress: siteConfig.address,
        addressCountry: "JP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.6947,
        longitude: 139.7026,
      },
      areaServed: ["歌舞伎町", "新宿", "西武新宿", "東新宿"],
      sameAs: [siteConfig.instagramUrl, siteConfig.tiktokUrl, siteConfig.lineUrl],
      hasMap: siteConfig.mapUrl,
      openingHoursSpecification: siteConfig.hours.map((item) => ({
        "@type": "OpeningHoursSpecification",
        name: item.day,
        description: item.time,
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "126",
      },
      review: siteConfig.reviews.map((review) => ({
        "@type": "Review",
        author: { "@type": "Person", name: review.name },
        reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
        reviewBody: review.text,
      })),
    },
  ];
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function eventsJsonLd() {
  return siteConfig.events.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${siteConfig.name} ${event.title}`,
    description: event.description,
    startDate: `${event.date}T20:00:00+09:00`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: absoluteUrl(event.image),
    location: {
      "@type": "Place",
      name: siteConfig.name,
      address: siteConfig.address,
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
  }));
}
