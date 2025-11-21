import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";
import CareerPage from "@/features/careerPage/CareerPage";

// Force SSR for about page
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Career | Moltech Solution Inc.",
  description:
    "Moltech Solutions Inc. is your trusted Dallas partner for providing custom development, mobile apps, AI integration, legacy system modernization & IT services for U.S. businesses.",
  canonical: `${BASE_URL}/career`,
  openGraph: {
    title: "Career | Moltech Solution Inc.",
    description:
      "Moltech Solutions Inc. is your trusted Dallas partner for providing custom development, mobile apps, AI integration, legacy system modernization & IT services for U.S. businesses.",
    url: `${BASE_URL}/career`,
    images: [
      {
        url: `${BASE_URL}/images/meta/career-og.webp`,
      },
    ],
  },
  twitter: {
    handle: "@MoltechSolutions",
    site: "@MoltechSolutions",
    cardType: "summary_large_image",
  },
};

const schemaData = {
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
      knowsAbout: commonSchemaData.technologies,
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
      "@id": `${BASE_URL}/career#webpage`,
      url: `${BASE_URL}/career`,
      name: "Career | Moltech Solutions Inc.",
      description: metadata.description,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/career-og.webp`,
      },
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/career-og.webp`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Career",
            item: `${BASE_URL}/career`,
          },
        ],
      },
    },
  ],
};

export default function AboutUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <CareerPage />
    </>
  );
}
