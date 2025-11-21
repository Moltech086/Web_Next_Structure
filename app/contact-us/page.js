import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";
import ContactUsPage from "@/features/contactUsPage/ContactUsPage";

// Force SSR for contact page
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact Moltech | Top Custom Software Development Company in Dallas",
  description:
    "Reach out to Moltech Solutions, your trusted Dallas-based software development partner. Let's build custom mobile, web, AI, and enterprise solutions.",
  alternates: {
    canonical: `${BASE_URL}/contact-us`,
  },
  openGraph: {
    title: "Contact Moltech | Software Development Company in Dallas, USA",
    description:
      "Get in touch with Moltech Solutions for custom software, mobile apps, and AI development services from our Dallas, TX office.",
    url: `${BASE_URL}/contact-us`,
    images: [
      {
        url: `${BASE_URL}/images/meta/contact-og.webp`, // ✅ better than SVG
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Moltech | Top Custom Software Development Company in Dallas",
    description:
      "Reach out to Moltech Solutions for software, mobile apps & AI solutions from Dallas, TX.",
    images: [`${BASE_URL}/images/meta/contact-og.webp`],
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
      "@id": `${BASE_URL}/contact-us#webpage`,
      url: `${BASE_URL}/contact-us`,
      name: "Contact Moltech | Top Custom Software Development Company in Dallas",
      description: metadata.description,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/contact-og.webp`,
      },
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/contact-og.webp`,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: `${BASE_URL}/contact-us`,
          },
        ],
      },
    },
  ],
};

export default function ContactUsPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ContactUsPage />
    </>
  );
}
