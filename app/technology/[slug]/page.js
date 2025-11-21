import { notFound } from "next/navigation";
import TechnologyDetails from "@/features/technologyPage/technologyDetail/TechnologyDetails";
import { getTechnologyConfig, getAllTechnologySlugs } from "@/data/technologies";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

// Generate static params for all technology pages
export async function generateStaticParams() {
  const slugs = getAllTechnologySlugs();
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}
// Generate metadata for each technology page
export async function generateMetadata({ params }) {
  const { slug } = params;
  const techConfig = getTechnologyConfig(slug);
  
  if (!techConfig) {
    return {
      title: "Technology Not Found",
      description: "The requested technology page could not be found.",
    };
  }
  return {
    title: `${techConfig.title} | Moltech Solutions Inc.`,
    description: techConfig.description,
    keywords: techConfig.keywords,
    authors: [{ name: 'Moltech Solutions Inc.' }],
    creator: 'Moltech Solutions Inc.',
    publisher: 'Moltech Solutions Inc.',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${techConfig.title} | Moltech Solutions Inc.`,
      description: techConfig.description,
      url: `${BASE_URL}${techConfig.canonical}`,
      siteName: "Moltech Solutions Inc.",
      images: [
        {
          url: `${BASE_URL}/images/meta/technology-og.webp`,
          width: 1200,
          height: 630,
          alt: `${techConfig.title} - Moltech Solutions Inc.`,
          type: "image/webp",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${techConfig.title} | Moltech Solutions Inc.`,
      description: techConfig.description,
      images: [`${BASE_URL}/images/meta/technology-og.webp`],
      creator: "@MoltechSolutions",
      site: "@MoltechSolutions",
    },
    alternates: {
      canonical: `${BASE_URL}${techConfig.canonical}`,
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  };
}

// Force SSR for technology pages
export const dynamic = 'force-dynamic';

export default async function TechnologyPage({ params }) {
  const { slug } = params;
  const techConfig = getTechnologyConfig(slug);
  
  if (!techConfig) {
    notFound();
  }

  // Dynamically import the technology data from the new consolidated structure
  let techData;
  try {
    const dataModule = await import(`@/data/technologies/${slug}.js`);
    techData = dataModule.default || dataModule[Object.keys(dataModule)[0]];
  } catch (error) {
    console.error(`Failed to load data for ${slug}:`, error);
    notFound();
  }

  // Generate structured data
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
        "@id": `${BASE_URL}${techConfig.canonical}#webpage`,
        url: `${BASE_URL}${techConfig.canonical}`,
        name: `${techConfig.title} | Moltech Solutions Inc.`,
        description: techConfig.description,
        image: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/meta/technology-og.webp`,
        },
        isPartOf: { "@id": `${BASE_URL}/#website` },
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/meta/technology-og.webp`,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { 
              "@type": "ListItem", 
              position: 1, 
              name: "Home", 
              item: BASE_URL
            },
            { 
              "@type": "ListItem", 
              position: 2, 
              name: "Technology", 
              item: `${BASE_URL}/technology`
            },
            { 
              "@type": "ListItem", 
              position: 3, 
              name: techConfig.title, 
              item: `${BASE_URL}${techConfig.canonical}`
            },
          ],
        },
      },
      {
        "@type": "TechArticle",
        "@id": `${BASE_URL}${techConfig.canonical}#techarticle`,
        headline: techConfig.title,
        description: techConfig.description,
        author: { "@id": `${BASE_URL}/#organization` },
        publisher: { "@id": `${BASE_URL}/#organization` },
        datePublished: "2024-01-01",
        dateModified: "2024-12-15",
        mainEntityOfPage: { "@id": `${BASE_URL}${techConfig.canonical}#webpage` },
        about: [
          {
            "@type": "Thing",
            name: techConfig.title,
            description: techConfig.description
          },
          {
            "@type": "Thing", 
            name: "Software Development",
            description: "Custom software development services"
          }
        ],
        mentions: techConfig.keywords.slice(0, 10),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <TechnologyDetails data={techData} />
    </>
  );
}
