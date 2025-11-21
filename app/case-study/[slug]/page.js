import React from "react";
import { notFound } from "next/navigation";
import CaseStudyDetails from "@/features/caseStudyPage/caseStudyDetail/CaseStudyDetails";
import commonSchemaData from "@/data/commonSchemaData";
import { BASE_URL } from "@/lib/utils/baseUrl";

// ✅ Enhanced dynamic import with error handling
async function getCaseStudyConfig(slug) {
  try {
    const caseStudyModule = await import(
      `../../../data/case-studies-config/${slug}.data.js`
    );
    return caseStudyModule.default || caseStudyModule;
  } catch (error) {
    console.error(`Case study config not found for slug: ${slug}`, error);
    return null;
  }
}

// ✅ Use metaConfig directly for SEO

export async function generateMetadata({ params }) {
  const { slug } = params;
  const caseStudyData = await getCaseStudyConfig(slug);

  if (!caseStudyData) {
    return {
      title: "Case Study Not Found | Moltech Solutions",
      description: "The requested case study could not be found.",
      robots: "noindex, nofollow",
    };
  }

  const { metaConfig, heroSection } = caseStudyData;
  const title =
    metaConfig?.title || heroSection?.title || "Moltech Solutions Case Study";
  const description =
    metaConfig?.description ||
    heroSection?.description ||
    "Explore our case studies.";
  const image =
    metaConfig?.openGraph?.image || `${BASE_URL}/images/meta/${slug}.webp`;
  const url = metaConfig?.canonical || `${BASE_URL}/case-study/${slug}`;

  return {
    title,
    description,
    keywords: metaConfig?.keywords || "Moltech Solutions, case study",
    authors: [{ name: metaConfig?.author || "Moltech Solutions Inc." }],
    robots: "index, follow",

    // ✅ Proper Open Graph tags (for LinkedIn, WhatsApp, Slack, etc.)
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Moltech Solutions Inc.",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    // ✅ Proper Twitter card tags
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    alternates: {
      canonical: `${BASE_URL}/case-study/${slug}`,
    },
    other: {
      "article:author": metaConfig?.author || "Moltech Solutions Inc.",
      "article:section": "Case Studies",
      "article:tag": heroSection?.industry?.label || "Software Development",
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = params;
  const caseStudyData = await getCaseStudyConfig(slug);

  if (!caseStudyData) {
    notFound();
  }

  const { metaConfig, heroSection } = caseStudyData;

  // ✅ Structured Data using metaConfig
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
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/case-study/${slug}#webpage`,
        url: metaConfig?.canonical || `${BASE_URL}/case-study/${slug}`,
        name: metaConfig?.title || heroSection.title,
        description: metaConfig?.description || heroSection.description,
        image: {
          "@type": "ImageObject",
          url:
            metaConfig?.openGraph?.image ||
            `${BASE_URL}/images/meta/${slug}.webp`,
          width: 1200,
          height: 630,
        },
        isPartOf: { "@id": `${BASE_URL}/#website` },
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url:
            metaConfig?.openGraph?.image ||
            `${BASE_URL}/images/meta/${slug}.webp`,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Case Studies",
              item: `${BASE_URL}/case-study`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: heroSection.title,
              item: `${BASE_URL}/case-study/${slug}`,
            },
          ],
        },
      },
      {
        "@type": "Article",
        "@id": `${BASE_URL}/case-study/${slug}#article`,
        headline: metaConfig?.title || heroSection.title,
        description: metaConfig?.description || heroSection.description,
        image: {
          "@type": "ImageObject",
          url:
            metaConfig?.openGraph?.image ||
            `${BASE_URL}/images/meta/${slug}.webp`,
          width: 1200,
          height: 630,
        },
        author: { "@id": `${BASE_URL}/#organization` },
        publisher: { "@id": `${BASE_URL}/#organization` },
        datePublished: metaConfig?.publishedDate || "2024-01-01",
        dateModified: metaConfig?.modifiedDate || "2024-01-01",
        keywords: metaConfig?.keywords?.split(",") || [
          "Moltech Solutions",
          "case study",
        ],
        articleSection: ["Case Study", heroSection.industry?.label],
        mainEntityOfPage: { "@id": `${BASE_URL}/case-study/${slug}#webpage` },
        wordCount: metaConfig?.wordCount || "2000",
        timeRequired: metaConfig?.readingTime || "PT5M",
        ...(caseStudyData.faqData && {
          mainEntity: {
            "@type": "FAQPage",
            mainEntity: caseStudyData.faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        }),
      },
    ],
  };

  return (
    <>
      {/* ✅ Preload OG Image safely */}
      {metaConfig?.openGraph?.image && (
        <link rel="preload" as="image" href={metaConfig.openGraph.image} />
      )}
      {/* ✅ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ✅ Render Case Study Details */}
      <CaseStudyDetails data={caseStudyData} />
    </>
  );
}

// ✅ Generate static params for all case studies
export async function generateStaticParams() {
  const caseStudySlugs = [
    "acca-partner-event-management-system-case-study",
    "accounting-firm-website-design-case-study",
    "ai-powered-email-automation-case-study",
    "ai-powered-order-processing-automation-case-study",
    "api-driven-saas-document-management-case-study",
    "association-member-event-platform-case-study",
    "centralized-operations-management-platform-case-study",
    "chemical-procurement-and-b2b-workflow-automation-case-study",
    "clixzplatform-utility-saas-case-study",
    "courier-booking-admin-system-case-study",
    "creative-industry-membership-portal-case-study",
    "donation-and-fundraising-management-platform-with-volunteer-and-event-coordination-case-study",
    "event-driven-email-automation-and-classification-system-case-study",
    "event-management-platform-web-platform-case-study",
    "flying-cape-partner-event-system-case-study",
    "hrms-recruitment-portal-case-study",
    "immigration-services-platform-case-study",
    "jewelry-ecommerce-case-study",
    "legacy-system-modernization-platform-case-study",
    "manufacturing-membership-event-management-case-study",
    "membership-accreditation-management-platform-case-study",
    "membership-event-management-web-portal-case-study",
    "membership-event-management-case-study",
    "membership-management-platform-admin-portal-case-study",
    "mobile-attendance-and-class-booking-system-case-study",
    "online-conference-management-platform-case-study",
    "online-e-certificate-solution-case-study",
    "procurement-inquiry-automation-case-study",
    "project-collaboration-and-tracking-platform-case-study",
    "resort-website-redesign-case-study",
    "roadhouse-digital-transformation-case-study",
    "robotic-process-automation-and-data-management-platform-case-study",
    "scalable-internal-automation-platform-case-study",
    "secure-e-voting-platform-case-study",
    "secure-reporting-and-analytics-portal-case-study",
    "skills-development-portal-case-study",
    "technology-consulting-website-design-case-study",
    "warehouse-management-app-case-study",
    "workflow-and-document-automation-platform-case-study",
  ];

  return caseStudySlugs.map((slug) => ({ slug }));
}
