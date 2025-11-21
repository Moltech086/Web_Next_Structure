import TechnologyPage from "@/features/technologyPage/TechnologyPage";
import commonSchemaData from "@/data/commonSchemaData";
import { BASE_URL } from "@/lib/utils/baseUrl";

// Force SSR for technology page
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Modern Tech Stack for Scalable Software | Dallas-Based Experts",
  description:
    "Discover Moltech's robust tech stack across frontend, backend, mobile, AI, and cloud—built in Dallas to power U.S. startups to enterprise solutions.",
  keywords: [
    "technology stack USA",
    "software development technologies",
    "Dallas software company",
    "mobile app tech stack",
    "AI ML tools USA",
    "cloud DevOps services Dallas",
    "scalable software solutions USA",
    "frontend backend technologies",
    "custom software Dallas TX",
    "enterprise technology solutions",
    "modern web development stack",
    "cloud-native applications",
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
    title: "Future-Ready Technology Stack | Custom Software Built in Dallas",
    description:
      "Explore the technologies powering 200+ projects at Moltech—from React and .NET Core to AI, cloud, and mobile. Designed for growth and innovation.",
    url: `${BASE_URL}/technology`,
    siteName: commonSchemaData.companyName,
    images: [
      {
        url: `${BASE_URL}/images/meta/technology-og.webp`,
        width: 1200,
        height: 630,
        alt: "Moltech Technology Stack - Modern Software Development",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future-Ready Technology Stack | Custom Software Built in Dallas",
    description:
      "Explore the technologies powering 200+ projects at Moltech—from React and .NET Core to AI, cloud, and mobile.",
    images: [`${BASE_URL}/images/meta/technology-twitter.webp`],
    creator: "@MoltechSolutions",
    site: "@MoltechSolutions",
  },
  alternates: {
    canonical: `${BASE_URL}/technology`,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

// Structured Data for Technology Page - using centralized data
const technologySchemaData = {
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
      "@id": `${BASE_URL}/technology/#webpage`,
      url: `${BASE_URL}/technology`,
      name: "Modern Tech Stack for Scalable Software | Dallas-Based Experts",
      description:
        "Discover Moltech's robust tech stack across frontend, backend, mobile, AI, and cloud—built in Dallas to power U.S. startups to enterprise solutions.",
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
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Technology",
            item: `${BASE_URL}/technology`,
          },
        ],
      },
    },
    {
      "@type": "TechArticle",
      "@id": `${BASE_URL}/technology/#techarticle`,
      headline: "Modern Technology Stack for Enterprise Software Development",
      description:
        "Comprehensive overview of Moltech's technology stack including frontend, backend, mobile, AI, and cloud technologies.",
      author: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      datePublished: "2024-01-01",
      dateModified: "2024-12-15",
      mainEntityOfPage: { "@id": `${BASE_URL}/technology/#webpage` },
      about: [
        {
          "@type": "Thing",
          name: "Software Development",
          description: "Custom software development services",
        },
        {
          "@type": "Thing",
          name: "Technology Stack",
          description: "Modern technology stack for scalable applications",
        },
      ],
      mentions: [
        "React.js",
        "Node.js",
        ".NET Core",
        "Python",
        "JavaScript",
        "TypeScript",
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
      ],
    },
  ],
};

export default function TechnologyMainPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(technologySchemaData),
        }}
      />
      <TechnologyPage />
    </>
  );
}
