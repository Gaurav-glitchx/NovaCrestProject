import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "NovaCrest Technologies",
  shortName: "NovaCrest",
  domain: "novacrest.tech",
  url: "https://novacrest.tech",
  description: "NovaCrest Technologies designs, builds and grows high-performance websites, mobile applications, software products and digital experiences for ambitious businesses.",
  keywords: [
    "NovaCrest Technologies",
    "NovaCrest Tech",
    "web development company",
    "mobile app development company",
    "software development company",
    "custom software development",
    "UI UX design company",
    "technical SEO services",
    "digital marketing company",
    "ecommerce development company",
    "custom SaaS development company",
    "AI solutions for business"
  ],
  author: "NovaCrest Technologies",
  email: "contact@novacrest.tech", // Professional domain email placeholder
  sameAs: [
    "https://linkedin.com/company/novacrest-technologies",
    "https://twitter.com/novacresttech",
    "https://github.com/novacrest-technologies"
  ]
};

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  canonicalUrl,
  keywords = SITE_CONFIG.keywords,
  noIndex = false
}: {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title
    ? `${title} | NovaCrest Technologies`
    : "NovaCrest Technologies | Web, App & Software Development";

  const canonical = canonicalUrl
    ? `${SITE_CONFIG.url}${canonicalUrl.startsWith("/") ? canonicalUrl : `/${canonicalUrl}`}`
    : SITE_CONFIG.url;

  return {
    title: pageTitle,
    description,
    keywords,
    authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      title: pageTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "NovaCrest Technologies - Digital Products, Technology & Growth",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      creator: "@novacresttech",
      images: ["/og-image.png"],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
