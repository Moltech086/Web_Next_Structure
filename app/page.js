import commonSchemaData from "@/data/commonSchemaData";
import Home from "@/features/homePage/HomePage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import { Suspense } from "react";

// ✅ Change to static for better performance (home page content rarely changes)
export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export const metadata = {
  title: "Custom Software & AI Solutions | Moltech Solutions (Dallas, USA)",
  description:
    "Moltech delivers custom software, mobile apps, AI & QA services from Dallas with global offices. Scale with dedicated teams, secure tech stack, and proven delivery. 98% client satisfaction.",
  keywords: [
    "custom software development Dallas",
    "AI solutions USA",
    "mobile app development",
    "QA testing services",
    "dedicated development teams",
    "enterprise software",
    "digital transformation",
    "Dallas tech company",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  authors: [{ name: commonSchemaData.companyName }],
  creator: commonSchemaData.companyName,
  publisher: commonSchemaData.companyName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: "Custom Software & AI Solutions | Moltech Solutions (Dallas, USA)",
    description:
      "Moltech delivers custom software, mobile apps, AI & QA services from Dallas with global offices. Scale with dedicated teams, secure tech stack, and proven delivery.",
    url: `${BASE_URL}/`,
    siteName: commonSchemaData.companyName,
    images: [
      {
        url: `${BASE_URL}/images/meta/og-home.webp`,
        width: 1200,
        height: 630,
        alt: "Moltech Solutions - Custom Software & AI Development",
        type: "image/webp",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & AI Solutions | Moltech Solutions",
    description:
      "Deliver custom software, mobile apps & AI solutions with our dedicated teams from Dallas, USA.",
    images: [`${BASE_URL}/images/meta/og-home.webp`],
    creator: commonSchemaData.creator,
    site: commonSchemaData.creator,
  },
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

const jsonLdSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: commonSchemaData.companyName,
      url: BASE_URL,
      logo: commonSchemaData.logo,
      sameAs: commonSchemaData.socialMedia,
      contactPoint: commonSchemaData.contactPoints,
      address: commonSchemaData.primaryAddress,
      knowsAbout: commonSchemaData.technologies,
      areaServed: commonSchemaData.areasServed,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/og-home.webp`,
        width: 1200,
        height: 630,
      },
      description:
        "We provide custom software development, mobile apps, AI integration, and IT services for businesses in the USA.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "33.0198",
        longitude: "-96.6989",
      },
      openingHours: "Mo-Fr 09:00-18:00",
      priceRange: "$$",
      foundingDate: "2019",
      numberOfEmployees: "50-100",
      slogan: "Scaling Innovation Through Technology",
    },

    // WebSite
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: commonSchemaData.companyName,
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // WebPage
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: `${BASE_URL}/`,
      name: "Moltech Solutions Inc - Custom Software, AI & IT Services",
      description:
        "We provide custom software development, mobile apps, AI integration, and IT services for businesses in the USA.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/og-home.webp`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        ],
      },
    },

    // Article / Main Content
    {
      "@type": "Article",
      "@id": `${BASE_URL}/#article`,
      headline: "Moltech Solutions Inc - Custom Software, AI & IT Services",
      description:
        "We provide custom software development, mobile apps, AI integration, and IT services for businesses in the USA.",
      author: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      datePublished: "2025-01-01",
      dateModified: "2025-09-25",
      mainEntityOfPage: { "@id": `${BASE_URL}/#webpage` },
      about: [
        {
          "@type": "Thing",
          name: "Custom Software & AI Services",
          description:
            "End-to-end software development, AI solutions, and mobile apps",
        },
      ],
      mentions: [
        { "@type": "Thing", name: "Custom Software Development" },
        { "@type": "Thing", name: "Mobile App Development" },
        { "@type": "Thing", name: "AI Solutions" },
        { "@type": "Thing", name: "QA Services" },
        { "@type": "Thing", name: "Digital Transformation" },
      ],
    },

    // Services
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#services`,
      serviceType: "Software Development",
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
              description: "End-to-end custom software development solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description: "iOS and Android mobile application development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Solutions",
              description:
                "Artificial Intelligence and Machine Learning solutions",
            },
          },
        ],
      },
    },
  ],
};
export default function HomePage() {
  return (
    <>
      {/* ✅ Preload critical resources */}
      <link
        rel="preload"
        as="image"
        href="images/hero-banner.webp"
        type="image/webp"
      />
      <link
        rel="preload"
        as="font"
        href="fonts/font-1.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* ✅ DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* ✅ Enhanced JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />

      {/* ✅ Add Suspense for better loading */}
      <Suspense fallback={<div className="loading-skeleton">Loading...</div>}>
        <Home />
      </Suspense>
    </>
  );
}

// ✅ Add generateStaticParams for static generation
export async function generateStaticParams() {
  return []; // Empty array for single home page
}
