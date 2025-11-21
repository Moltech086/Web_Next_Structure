import SiteMapPage from "@/features/sitemapPage/SiteMapPage";
import commonSchemaData from "@/data/commonSchemaData";
import { BASE_URL } from "@/lib/utils/baseUrl";

// Force SSR for sitemap page
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Sitemap ",
  description:
    "Explore the full sitemap of Moltech Solutions Inc. for easy navigation of all our services, solutions, and company information.",
  keywords: [
    "Moltech sitemap",
    "Moltech Solutions Inc navigation",
    "Moltech services sitemap",
    "Moltech company sitemap",
    "Moltech solutions sitemap",
    "Dallas software company sitemap",
    "enterprise software sitemap USA",
    "Moltech website structure",
    "custom software sitemap",
    "Moltech site navigation",
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
  authors: [{ name: "Moltech Solutions Inc." }],
  creator: "Moltech Solutions Inc.",
  publisher: "Moltech Solutions Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sitemap | Moltech Solutions Inc.",
    description:
      "Explore the full sitemap of Moltech Solutions Inc. for easy navigation of all our services, solutions, and company information.",
    url: `${BASE_URL}/sitemap`,
    siteName: "Moltech Solutions Inc.",
    images: [
      {
        url: `${BASE_URL}/images/meta/sitemap-og.webp`,
        width: 1200,
        height: 630,
        alt: "Moltech Solutions Sitemap",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Moltech Solutions Inc.",
    description:
      "Explore the full sitemap of Moltech Solutions Inc. for easy navigation of all our services, solutions, and company information.",
    images: [`${BASE_URL}/images/meta/sitemap-twitter.webp`],
    creator: "@MoltechSolutions",
    site: "@MoltechSolutions",
  },
  alternates: {
    canonical: `${BASE_URL}/sitemap`,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

// Structured Data for Sitemap Page
const sitemapSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: commonSchemaData.companyName,
      url: BASE_URL,
      logo: commonSchemaData.logo,
      sameAs: commonSchemaData.socialMedia,
      contactPoint: commonSchemaData.contactPoints,
      address: commonSchemaData.primaryAddress,
      areaServed: commonSchemaData.areasServed,
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: commonSchemaData.companyName,
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/sitemap/#webpage`,
      url: `${BASE_URL}/sitemap`,
      name: "Sitemap | Moltech Solutions Inc.",
      description:
        "Explore the full sitemap of Moltech Solutions Inc. for easy navigation of all our services, solutions, and company information.",
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/sitemap-og.webp`,
      },
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/sitemap-og.webp`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sitemap",
            item: `${BASE_URL}/sitemap`,
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": `${BASE_URL}/sitemap/#itemlist`,
      name: "Moltech Solutions Sitemap",
      description:
        "Full sitemap of Moltech Solutions Inc. with links to services, solutions, case studies, blog, and company information.",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Home",
          url: BASE_URL,
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "Services",
          url: `${BASE_URL}/services`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Solutions",
          url: `${BASE_URL}/solutions`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Technology",
          url: `${BASE_URL}/technology`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Case Studies",
          url: `${BASE_URL}/case-studies`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 6,
          name: "Blog",
          url: `${BASE_URL}/blog`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 7,
          name: "Contact",
          url: `${BASE_URL}/contact`,
        },
      ],
    },
  ],
};

export default function SiteMapMainPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapSchemaData) }}
      />
      <SiteMapPage />
    </>
  );
}
