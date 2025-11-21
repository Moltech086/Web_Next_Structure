import AccountingPage from "@/features/servicePages/accountingPage/AccountingPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

// Force SSR for service page
export const dynamic = "force-dynamic";

// ✅ Page Metadata
export const metadata = {
  title: "Outsourced Accounting Services in Dallas | Moltech Solutions Inc.",
  description:
    "Cut accounting costs by up to 60% with expert outsourced bookkeeping, invoicing & reporting. Based in Dallas, trusted by businesses across the USA.",
  canonical: `${BASE_URL}/services/accounting`,
  openGraph: {
    title: "Outsourced Accounting Services in Dallas | Moltech Solutions Inc.",
    description:
      "From bookkeeping to payroll and monthly reporting, Moltech delivers cost-effective, expert-led accounting support for growing US businesses.",
    url: `${BASE_URL}/services/accounting`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/services-og/accounting-og.webp`,
        alt: "Outsourced Accounting Services in Dallas | Moltech Solutions Inc.",
        type: "image/webp",
      },
    ],
    site_name: "Moltech Solutions Inc.",
    locale: "en_US",
  },
  twitter: {
    cardType: "summary_large_image",
    title: "Outsourced Accounting Services in Dallas | Moltech Solutions Inc.",
    description:
      "From bookkeeping to payroll and monthly reporting, Moltech delivers cost-effective, expert-led accounting support for growing US businesses.",
    image: `${BASE_URL}/images/meta/services-og/accounting-og.webp`,
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "outsourced accounting services, bookkeeping Dallas, invoice management, financial reporting, payroll support, cloud accounting, ERPNext, accounting outsourcing USA, small business accounting Dallas, Dallas TX accounting support, online accounting firm, scalable financial services, Moltech Solutions Inc",
    },
  ],
};

// ✅ JSON-LD Schema for the page
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
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
    // Website
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: commonSchemaData.companyName,
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
    },
    // WebPage
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/services/accounting#webpage`,
      url: `${BASE_URL}/services/accounting`,
      name: "Outsourced Accounting Services in Dallas | Moltech Solutions",
      description:
        "Cut accounting costs by up to 60% with expert outsourced bookkeeping, invoicing & reporting. Based in Dallas, trusted by businesses across the USA.",
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/services-og/accounting-og.webp`,
      },
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/services-og/accounting-og.webp`,
      },
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
            name: "Outsourced Accounting Services in Dallas",
            item: `${BASE_URL}/services/accounting`,
          },
        ],
      },
      mainEntity: { "@id": `${BASE_URL}/services/accounting#service` },
    },
    // Service
    {
      "@type": "Service",
      "@id": `${BASE_URL}/services/accounting#service`,
      name: "Outsourced Accounting Services in Dallas | Moltech Solutions",
      description:
        "Moltech Solutions Inc. delivers comprehensive accounting outsourcing services eliminating administrative headaches and cutting costs by up to 60%. Services include invoice & billing management, bookkeeping, monthly financial operations, payroll & HR support, cloud accounting setup, reporting & analytics, and ERPNext implementation.",
      provider: { "@id": `${BASE_URL}/#organization` },
      brand: { "@id": `${BASE_URL}/#organization` },
      serviceType: "Accounting",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Dallas–Fort Worth, TX" },
        { "@type": "Country", name: "United States" },
      ],
      offers: { "@type": "Offer", url: `${BASE_URL}/services/accounting` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Invoice & Billing Management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "General Bookkeeping & Data Entry",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Monthly Financial Operations",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Payroll and HR Support" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Cloud Accounting Setup" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Reporting and Analytics",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "ERPNext Implementation" },
          },
        ],
      },
    },
  ],
};
// accountingFaqData.js
export const accountingFaqData = {
  faqItems: [
    {
      title: "Who should use professional accounting services?",
      content:
        "Our accounting services are ideal for small to mid-sized businesses, startups, and growing enterprises looking to streamline their finances, maintain compliance, and gain financial clarity. Whether you’re overwhelmed with bookkeeping, need monthly financial reporting, or want professional support to manage your business growth, our services can help.",
    },
    {
      title: "Why do I need accounting services for my business?",
      content:
        "Accurate accounting is crucial for financial compliance, tax preparation, cash flow management, and strategic planning. Without professional accounting, businesses risk costly errors, missed tax deadlines, and poor financial decisions that can hurt profitability and growth.",
    },
    {
      title: "What is the difference between bookkeeping and accounting?",
      content:
        "Bookkeeping focuses on recording daily financial transactions, while accounting involves interpreting, analyzing, and reporting that data to help you understand your business’s financial health. Accounting services often include bookkeeping but also provide financial statements, budgeting, and tax advice.",
    },
    {
      title:
        "Why do I need professional accounting services if I already use accounting software?",
      content:
        "While accounting software helps with data entry, professional accounting services ensure your books are accurate and compliant and provide insights to help you make better business decisions. We help interpret your numbers, prepare for taxes, and catch costly errors that software alone might miss.",
    },
    {
      title:
        "Is it expensive to hire accounting services for small businesses?",
      content:
        "Many small businesses worry about the cost of accounting services, but the reality is that it saves you time, reduces tax liabilities, and prevents financial mistakes that could cost far more. We offer scalable plans to match your business size and budget.",
    },
    {
      title:
        "Will I lose control over my business finances if I outsource accounting services?",
      content:
        "No, you remain in full control. Our accounting services act as an extension of your business, providing you with organized financial data and clear reports so you can make confident decisions.",
    },
    {
      title: "Are your accounting services secure?",
      content:
        "Yes. We prioritize the confidentiality and security of your financial data, using encrypted systems and industry best practices to protect your information.",
    },
    {
      title: "Do you offer customized accounting solutions for my business?",
      content:
        "Yes, we understand that every business is unique. Common pain points include: Generic software that fails to meet specific needs; Large accounting firms that often fail to provide personalized support. Our tailored accounting services include customized bookkeeping, payroll, and financial reporting solutions designed to meet your business’s specific goals and challenges.",
    },
    {
      title: "Can you integrate with my existing business systems?",
      content:
        "Yes, we can integrate with most business systems, including POS systems, e-commerce platforms, CRM software, and banking systems. Integration eliminates duplicate data entry and ensures accurate, up-to-date financial information.",
    },
    {
      title: "How much do accounting services cost?",
      content:
        "Accounting service fees vary based on business size, complexity, and services required. We offer transparent pricing with monthly packages starting at competitive rates. Most clients find our services pay for themselves through tax savings and improved efficiency.",
    },
  ],
};

// ✅ FAQ JSON-LD (dynamic)
const faqJsonLd = accountingFaqData?.faqItems
  ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: accountingFaqData.faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.title,
        acceptedAnswer: { "@type": "Answer", text: faq.content },
      })),
    }
  : null;

// ✅ Accounting Service Page Component
export default function AccountingServicePage() {
  return (
    <>
      {/* Main JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* FAQ JSON-LD (if exists) */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Page Content */}
      <AccountingPage />
    </>
  );
}
