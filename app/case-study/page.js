import CaseStudyList from "../../features/caseStudyPage/caseStudyList/CaseStudyList";
import commonSchemaData from "@/data/commonSchemaData";
import { BASE_URL } from "@/lib/utils/baseUrl";

// ✅ Force SSR for better SEO
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Success Stories | Custom Software & App Development Case Studies USA",
  description:
    "Discover how Moltech Solutions helped 15+ industries in the USA succeed with mobile apps, B2B portals, SEO, AI solutions, and enterprise software.",
  keywords:
    "custom software development USA, mobile app case studies, Dallas software success stories, enterprise software USA, B2B portal development, SEO case studies, UI UX redesign examples, HRMS recruitment platform USA, digital transformation case studies",
  robots: "index, follow",
  openGraph: {
    title:
      "Success Stories | Custom Software & App Development Case Studies USA",
    description:
      "See how Moltech delivered digital transformation, mobile apps, SEO, and HRMS platforms across 15+ industries with 98% success rate.",
    url: `${BASE_URL}/case-study`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/cashStudy-og.webp`,
        width: 1200,
        height: 630,
        alt: "Moltech Solutions Case Studies",
      },
    ],
    siteName: "Moltech Solutions Inc.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Success Stories | Custom Software Development Case Studies",
    description:
      "Discover how Moltech Solutions helped 15+ industries succeed with custom software solutions.",
    images: [`${BASE_URL}/images/meta/cashStudy-og.webp`],
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
  alternates: {
    canonical: `${BASE_URL}/case-study`,
  },
};

// Structured Data for Case Study Page
const caseStudySchemaData = {
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
      "@id": `${BASE_URL}/case-study/#webpage`,
      url: `${BASE_URL}/case-study`,
      name: "Success Stories | Custom Software & App Development Case Studies USA",
      description:
        "Discover how Moltech Solutions helped 15+ industries in the USA succeed with mobile apps, B2B portals, SEO, AI solutions, and enterprise software.",
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/cashStudy-og.webp`,
      },
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/cashStudy-og.webp`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Case Study",
            item: `${BASE_URL}/case-study`,
          },
        ],
      },
    },
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/case-study/#collectionpage`,
      name: "Moltech Case Studies",
      description:
        "Detailed case studies of custom software, mobile apps, B2B portals, SEO, AI solutions, and enterprise software delivered by Moltech Solutions.",
      about: [
        {
          "@type": "Thing",
          name: "Custom Software Development",
        },
        {
          "@type": "Thing",
          name: "Mobile App Development",
        },
        {
          "@type": "Thing",
          name: "Digital Transformation",
        },
        {
          "@type": "Thing",
          name: "SEO",
        },
        {
          "@type": "Thing",
          name: "HRMS Platform",
        },
      ],
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntityOfPage: { "@id": `${BASE_URL}/case-study/#webpage` },
    },
  ],
};

export default function CaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchemaData),
        }}
      />
      <CaseStudyList />
    </>
  );
}
