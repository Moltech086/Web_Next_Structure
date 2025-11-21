import AboutPage from "@/features/aboutUsPage/AboutUsPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

// Force SSR for about page
export const dynamic = "force-dynamic";

export const metadata = {
  title:
    "Moltech Solutions Inc. | Global & USA Software, AI, Digital Marketing from Dallas",
  description:
    "Learn how Moltech Solution Inc, based in Dallas, transforms bold ideas into reliable, scalable software. From custom web & mobile apps to AI/ML, cloud DevOps, legacy modernization and IT consulting for U.S. businesses.",
  canonical: `${BASE_URL}/about-us`,
  openGraph: {
    title:
      "Moltech Solution Inc | Custom Software Development & IT Services USA",
    description:
      "Agile U.S.-based teams delivering custom software, mobile & web apps, AI solutions, and modernization services that drive real business outcomes.",
    url: `${BASE_URL}/about-us`,
    images: [{ url: `${BASE_URL}/images/meta/og-about-us.webp` }],
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
      "@id": `${BASE_URL}/about-us#webpage`,
      url: `${BASE_URL}/about-us`,
      name: "About Us | Moltech Solutions Inc.",
      description: metadata.description,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/og-about-us.webp`,
      },
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/og-about-us.webp`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: `${BASE_URL}/about-us`,
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
      <AboutPage />
    </>
  );
}
