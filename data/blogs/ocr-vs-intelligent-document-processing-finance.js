import { BASE_URL } from "@/lib/utils/baseUrl";

export const blogConfig = {
  slug: "ocr-vs-intelligent-document-processing-finance",

  // Meta configuration
  metaConfig: {
    title:
      "OCR vs IDP in Finance: Smarter Automation for Workflows",
    description:
      "Upgrade from OCR to IDP for faster, more accurate finance workflows. Cut costs, reduce errors, and streamline approvals in your finance operations.",
    canonical: "/blog/ocr-vs-intelligent-document-processing-finance",
    author: "Moltech Solutions Inc.",
    publisher: "Moltech Solutions Inc.",
    imageUrl: `${BASE_URL}/images/meta/OcrVsIdp.webp`,
    twitterImage: `${BASE_URL}/images/meta/OcrVsIdp.webp`,
    keywords: [
      "Intelligent Document Processing in Finance",
      "AI-driven OCR for finance",
      "NLP for finance automation",
      "Finance document automation",
      "AI-powered invoice processing",
      "OCR vs IDP in finance"
    ],
    section: "Blog",
    publishedTime: "2025-08-30T00:00:00+00:00",
  },

  heroData: {
    title: "OCR vs. Intelligent Document Processing",
    highlight: "in Finance Operations",
    description:
      "Finance teams face endless invoice scanning, signature verification, and manual data entry that slow operations and increase errors. Discover how Intelligent Document Processing (IDP) combines AI with OCR to accelerate approvals, cut costs, and reduce mistakes while streamlining workflows.",
    author: "Moltech Solutions Inc.",
    date: "Aug 30, 2025",
    stats: [
      {
        icon: "mdi:file-document-check-outline",
        title: "70% Faster Document Processing",
        desc: "AI-driven IDP automates invoice handling and approvals.",
      },
      {
        icon: "mdi:alert-decagram",
        title: "60% Fewer Errors",
        desc: "Minimize human mistakes in finance data entry and validation.",
      },
      {
        icon: "mdi:cash-multiple",
        title: "40% Cost Reduction",
        desc: "Cut operational overhead through automation and accuracy.",
      },
    ],
  },

  tableOfContents: [
    {
      id: "ocr-in-finance",
      title: "How OCR Works: The Good and Bad Things About It in Finance",
      level: 1,
    },
    {
      id: "idp-in-finance",
      title: "What Intelligent Document Processing in Finance Adds: AI, NLP, and Context",
      level: 1,
    },
    {
      id: "ocr-vs-idp-comparison",
      title: "OCR vs. IDP: A Simple Comparison",
      level: 1,
    },
    {
      id: "operational-impact",
      title: "Operational Impact: KPIs, Costs, and Compliance",
      level: 1,
    },
    {
      id: "implementation-roadmap",
      title: "Implementation Roadmap for Finance Teams",
      level: 1,
    },
    { id: "conclusion", title: "Conclusion", level: 1 },
  ],

  tags: [
    "Intelligent Document Processing",
    "OCR in Finance",
    "AI for Finance Operations",
    "Invoice Automation",
    "Document Workflow Optimization",
    "Error Reduction in Finance",
    "Approval Process Acceleration",
    "ERP Data Integration",
    "Finance Process Automation",
    "Cost Reduction with AI",
  ],

  faqData: {
    faqTitle: "OCR vs. Intelligent Document Processing in Finance",
    faqItems: [
      {
        title: "Why move from OCR to Intelligent Document Processing?",
        content:
          "IDP leverages AI and NLP to understand document context, reducing errors and speeding up approvals compared to traditional OCR, which only recognizes text.",
      },
      {
        title: "How much faster is document processing with IDP?",
        content:
          "On average, AI-driven IDP can improve processing times by 60–70%, automating repetitive finance workflows like invoice extraction and approval routing.",
      },
      {
        title: "Does IDP reduce human errors in finance operations?",
        content:
          "Yes. Intelligent data extraction, validation rules, and AI verification minimize manual mistakes in data entry, invoice processing, and approval workflows.",
      },
      {
        title: "Can IDP integrate with ERP systems?",
        content:
          "Absolutely. Modern IDP solutions can seamlessly feed structured data into ERP systems, streamlining finance operations and reducing manual reconciliation efforts.",
      },
      {
        title: "Is implementing IDP costly for finance teams?",
        content:
          "Implementation costs are offset by operational savings, faster approvals, and reduced errors. ROI is typically realized within months depending on document volume.",
      },
      {
        title: "What types of documents can IDP handle?",
        content:
          "IDP can process invoices, purchase orders, receipts, contracts, and other structured or semi-structured finance documents with high accuracy.",
      },
    ],
  },
};
