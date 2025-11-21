import DataProcessingPage from "@/features/servicePages/dataProcessingPage/DataProcessingPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Data Preprocessing Services | Moltech Solutions Dallas, TX",
  description:
    "Professional data preprocessing and cleaning services in Dallas, TX. Improve data quality, accuracy, and analytics with Moltech Solutions.",
  canonical: `${BASE_URL}/services/data-preprocessing-and-cleaning`,
  keywords:
    "data preprocessing, data cleaning, data transformation, Moltech Solutions",
  openGraph: {
    title: "Data Preprocessing Services | Moltech Solutions Dallas, TX",
    description:
      "Professional data preprocessing and cleaning services in Dallas, TX. Improve data quality, accuracy, and analytics with Moltech Solutions.",
    url: `${BASE_URL}/services/data-preprocessing-and-cleaning`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/services-og/data-preprocessing-and-cleaning-og.webp`,
        alt: "Data Preprocessing & Cleaning Services | Moltech",
        type: "image/webp",
      },
    ],
    site_name: commonSchemaData.companyName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Preprocessing Services | Moltech Solutions Dallas, TX",
    description:
      "Professional data preprocessing and cleaning services in Dallas, TX. Improve data quality, accuracy, and analytics with Moltech Solutions.",
    images: [
      `${BASE_URL}/images/meta/services-og/data-preprocessing-and-cleaning-og.webp`,
    ],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "data preprocessing Dallas, data cleaning services, data quality improvement, data analytics Dallas, Moltech Solutions, data preparation USA",
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
      "@id": `${BASE_URL}/services/data-preprocessing-and-cleaning#webpage`,
      url: `${BASE_URL}/services/data-preprocessing-and-cleaning`,
      name: "Data Preprocessing Services | Moltech Solutions Inc. Dallas, TX",
      description:
        "Unlock growth with expert data preprocessing—cleansing, conversion, digitization, reporting, and automation. Trusted globally. Based in Dallas, Texas.",
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
            name: "Data Preprocessing and Cleaning",
            item: `${BASE_URL}/services/data-preprocessing-and-cleaning`,
          },
        ],
      },
      primaryImageOfPage: `${BASE_URL}/images/meta/services-og/data-preprocessing-and-cleaning-og.webp`,
      inLanguage: "en-US",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntity: {
        "@id": `${BASE_URL}/services/data-preprocessing-and-cleaning#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/services/data-preprocessing-and-cleaning#service`,
      name: "Data Preprocessing Services | Moltech Solutions Dallas, TX",
      description:
        "Professional data preprocessing and cleaning services in Dallas, TX. Improve data quality, accuracy, and analytics with Moltech Solutions.",
      provider: { "@id": `${BASE_URL}/#organization` },
      brand: { "@id": `${BASE_URL}/#organization` },
      serviceType: "Data Preprocessing and Cleaning",
      areaServed: commonSchemaData.areasServed,
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/services/data-preprocessing-and-cleaning`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Data Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Data Cleansing" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Data Conversion" },
          },
        ],
      },
    },
  ],
};

const faqData = [
  {
    question: "What are data processing services, and why are they important?",
    answer:
      "Data processing services involve collecting, cleaning, validating, transforming, and organizing raw data into usable information for decision-making, helping reduce manual effort and improve accuracy.",
  },
  {
    question: "Who can benefit from your data processing services?",
    answer:
      "Small businesses, startups, enterprises, and organizations with large volumes of sales, accounting, or operational data benefit by saving time, reducing errors, and improving data efficiency.",
  },
  {
    question:
      "Why should I outsource data processing instead of managing it in-house?",
    answer:
      "Outsourcing ensures accuracy, faster turnaround, data security, and cost efficiency, helping you avoid internal errors and letting your team focus on core business activities.",
  },
  {
    question:
      "What common problems do businesses face without proper data processing?",
    answer:
      "Issues include data inconsistency, inaccurate reports, time-consuming manual entry, and difficulty analyzing large datasets—all of which our services help resolve efficiently.",
  },
  {
    question: "How do your data processing services help with business growth?",
    answer:
      "We provide structured and accurate data for reporting, forecasting, and strategic decisions—improving efficiency and driving growth across operations.",
  },
  {
    question: "Is my data safe with your data processing services?",
    answer:
      "Yes, we follow strict security protocols and confidentiality agreements to ensure your data remains fully protected throughout the processing lifecycle.",
  },
  {
    question: "What types of data can you process?",
    answer:
      "We handle financial, customer, sales, survey, product, and inventory data, offering customized solutions based on your business needs and formats.",
  },
  {
    question: "How do I know if I need data processing services?",
    answer:
      "If you face reporting delays, spend excessive time cleaning data, or struggle with accuracy, it’s time to consider professional data processing support.",
  },
  {
    question:
      "Can data processing services handle multiple data formats and sources?",
    answer:
      "Yes, we process data from various formats—paper, digital files, databases, and online sources—ensuring seamless and consolidated data management.",
  },
  {
    question: "How do you ensure data accuracy and quality?",
    answer:
      "We use quality checks, validations, and audits to ensure 99.99%+ accuracy and flag any illegible or duplicate data for resolution with your input.",
  },
  {
    question: "How long does data processing take?",
    answer:
      "Timelines vary by data size and complexity—simple tasks may take hours, while larger analytics projects take days. We provide accurate estimates during consultation.",
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

export default function DataPreprocessingServicePage() {
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
      <DataProcessingPage />
    </>
  );
}
