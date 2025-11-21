import HowWeWorkPage from "@/features/howWeWorkPage/HowWeWorkPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

// Force SSR for how-we-work page
export const dynamic = "force-dynamic";

export const metadata = {
  title:
    "How We Work | Moltech Solution Inc. – Flexible Software Development Partnership Models",
  description:
    "Explore Moltech Solution Inc’s flexible software development models including dedicated teams, fixed scope, hybrid, and staff augmentation. Based in Dallas, we align with your vision to deliver secure, scalable solutions.",
  canonical: `${BASE_URL}how-we-work`,
  openGraph: {
    title:
      "How We Work | Moltech – Flexible Software Development Partnership Models in Dallas, USA",
    description:
      "From idea to impact—Moltech offers agile development, dedicated teams, and scalable IT engagement models tailored to your business goals.",
    url: `${BASE_URL}/how-we-work`,
    images: [{ url: `${BASE_URL}/images/meta/og-how-we-work.webp` }],
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
      "@id": `${BASE_URL}/how-we-work#webpage`,
      url: `${BASE_URL}/how-we-work`,
      name: "How We Work | Moltech Solution Inc.",
      description: metadata.description,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/og-how-we-work.webp`,
      },
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/og-how-we-work.webp`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "How We Work",
            item: `${BASE_URL}/how-we-work`,
          },
        ],
      },
    },
  ],
};

export default function HowWeWorkPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <HowWeWorkPage />
    </>
  );
}
