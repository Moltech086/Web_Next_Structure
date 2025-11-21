import SoftwareTestingAndQAPage from "@/features/servicePages/softwareTestingAndQAPage/SoftwareTestingAndQAPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

export const dynamic = "force-dynamic";
export const metadata = {
  title:
    "Software Testing & QA Services in Dallas, USA | Moltech Solution Inc USA",
  description:
    "Comprehensive software testing & QA services in Dallas, USA. Manual, automated, performance, security, and mobile app testing by Moltech Solutions.",
  canonical: `${BASE_URL}/services/software-testing-and-qa`,
  keywords:
    "software testing, QA, automation, performance testing, security testing",
  openGraph: {
    title:
      "Software Testing & QA Services in Dallas, USA | Moltech Solution Inc USA",
    description:
      "Comprehensive software testing & QA services in Dallas, USA. Manual, automated, performance, security, and mobile app testing by Moltech Solutions.",
    url: `${BASE_URL}/services/software-testing-and-qa`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/services-og/software-testing-and-qa-og.webp`,
        alt: "Software Testing & QA Services | Moltech Solution Inc",
        type: "image/webp",
      },
    ],
    site_name: commonSchemaData.companyName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Software Testing & QA Services in Dallas, USA | Moltech Solution Inc USA",
    description:
      "Comprehensive software testing & QA services in Dallas, USA. Manual, automated, performance, security, and mobile app testing by Moltech Solutions.",
    images: [`${BASE_URL}/images/meta/services-og/software-testing-and-qa-og.webp`],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "software testing Dallas, QA services USA, manual testing, automated testing, performance testing, security testing, mobile app QA, Moltech Solutions, software quality assurance Dallas",
    },
  ],
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
      "@id": `${BASE_URL}/services/software-testing-and-qa#webpage`,
      url: `${BASE_URL}/services/software-testing-and-qa`,
      name: "Software Testing & QA Services in Dallas, USA | Moltech Solution Inc USA",
      description:
        "Ensure flawless software performance with Moltech’s QA & testing services in Dallas. Functional, secure, and scalable solutions for US-based businesses.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${BASE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Software Testing & QA",
            item: `${BASE_URL}/services/software-testing-and-qa`,
          },
        ],
      },
      primaryImageOfPage: `${BASE_URL}/images/meta/services-og/software-testing-and-qa-og.webp`,
      inLanguage: "en-US",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntity: {
        "@id": `${BASE_URL}/services/software-testing-and-qa#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/services/software-testing-and-qa#service`,
      name: "Software Testing & QA Services in Dallas, USA | Moltech Solution Inc USA",
      description:
        "Ensure flawless software performance with Moltech’s QA & testing services in Dallas. Functional, secure, and scalable solutions for US-based businesses.",
      provider: { "@id": `${BASE_URL}/#organization` },
      brand: { "@id": `${BASE_URL}/#organization` },
      serviceType: "Software Testing & QA",
      areaServed: commonSchemaData.areasServed,
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/services/software-testing-and-qa`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Functional Testing & Manual Testing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Automated Testing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Performance & Load Testing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Security Testing & Vulnerability Assessment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Usability Testing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Regression Testing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Testing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "API & Integration Testing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "User Acceptance Testing (UAT) Support",
            },
          },
        ],
      },
    },
  ],
};

const faqData = [
  {
    question: "Who should consider using software testing and QA services?",
    answer:
      "Any business developing web, mobile, or custom software should consider software testing services to ensure its application is bug-free, user-friendly, and scalable. Startups launching MVPs, enterprises rolling out complex systems, or SaaS companies maintaining products can all benefit from QA testing to prevent revenue loss due to bugs or performance issues.",
  },
  {
    question:
      "Why can’t we skip QA testing if developers test the software internally?",
    answer:
      "Developer testing often misses edge cases and usability issues. QA testers use structured methods like manual, automated, and performance testing to catch bugs early, ensuring your product is stable, secure, and ready for market.",
  },
  {
    question: "Is QA testing only for big companies with large budgets?",
    answer:
      "No. QA and software testing services are crucial for businesses of all sizes. Fixing bugs post-release is more expensive and can damage your reputation. Cost-effective QA services help startups and SMEs ship reliable products and reduce long-term expenses.",
  },
  {
    question:
      "What are the common pains businesses face without proper QA testing?",
    answer:
      "Common issues include frequent bugs in production, poor user experience, deployment delays, high maintenance costs, and negative reviews. Our QA services prevent these by catching issues early.",
  },
  {
    question: "Can software testing help reduce overall development costs?",
    answer:
      "Yes. Early QA testing reduces rework and post-release bug fixing, which are more expensive. Identifying issues during development minimizes disruption and improves cost efficiency.",
  },
  {
    question: "Do you provide both manual testing and automated testing?",
    answer:
      "Yes, we combine manual testing for usability and exploratory tests with automated testing for fast, scalable regression testing, ensuring efficiency and thorough coverage.",
  },
  {
    question: "How do I know if my app needs QA services now?",
    answer:
      "If your app crashes often, is scaling, is ready for launch, needs performance/security testing, or has inconsistent UI/UX—it’s time for QA testing to ensure stability and reliability.",
  },
  {
    question:
      "How do software testing and QA services improve my user experience?",
    answer:
      "QA testing finds UI issues, slow performance, and broken flows, allowing fixes that make your app smooth, fast, and user-friendly—boosting retention and satisfaction.",
  },
  {
    question:
      "What industries can benefit from QA and software testing services?",
    answer:
      "Industries like SaaS, e-commerce, healthcare, fintech, education, and logistics benefit from QA to ensure software reliability, compliance, and optimal user experience.",
  },
  {
    question: "Why should I choose Moltech for software testing services?",
    answer:
      "We offer fast, scalable, secure QA services with reduced time to market, fewer bugs, improved user experience, and seamless integration with your development team.",
  },
  {
    question:
      "How do Software Testing & QA services integrate with my development team?",
    answer:
      "Our QA team collaborates using tools like Jira and Slack, participates in standups, and adapts testing strategies to align with your team for efficient, real-time quality checks.",
  },
];

const faqJsonLd =
  faqData.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqData.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

export default function SoftwareQAServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <SoftwareTestingAndQAPage />
    </>
  );
}
