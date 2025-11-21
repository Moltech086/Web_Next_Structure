import BusinessSoftwareConsultingPage from "@/features/servicePages/businessSoftwareConsultingPage/BusinessSoftwareConsultingPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

export const dynamic = "force-dynamic";

export const metadata = {
  title:
    "Business Software Consulting in Dallas | Strategic IT Advisory | Moltech Solutions Inc",
  description:
    "Moltech Solutions Inc offers expert business software consulting in Dallas USA, helping you modernize systems, automate processes, integrate platforms, and select the right technology stack. From startups to enterprises—get strategic, scalable, and secure software guidance.",
  canonical: `${BASE_URL}/services/business-software-consulting`,
  keywords:
    "business software consulting, digital transformation, system integration, process automation, Moltech Solutions",
  openGraph: {
    title:
      "Business Software Consulting in Dallas | Strategic IT Advisory | Moltech Solutions Inc",
    description:
      "From strategy to implementation, Moltech helps you modernize operations, choose the right tech stack, integrate systems, and digitally transform with confidence.",
    url: `${BASE_URL}/services/business-software-consulting`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/services-og/business-software-consulting-og.webp`,
        alt: "Business Software Consulting in Dallas | Strategic IT Advisory | Moltech Solutions Inc",
        type: "image/webp",
      },
    ],
    site_name: commonSchemaData.companyName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Business Software Consulting in Dallas | Strategic IT Advisory | Moltech Solutions Inc",
    description:
      "From strategy to implementation, Moltech helps you modernize operations, choose the right tech stack, integrate systems, and digitally transform with confidence.",
    images: [
      `${BASE_URL}/images/meta/services-og/business-software-consulting-og.webp`,
    ],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "business software consulting, IT advisory, digital transformation",
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
      "@id": `${BASE_URL}/services/business-software-consulting#webpage`,
      url: `${BASE_URL}/services/business-software-consulting`,
      name: "Business Software Consulting in Dallas | Strategic IT Advisory | Moltech Solutions Inc",
      description:
        "Moltech Solutions Inc offers expert business software consulting in Dallas USA, helping you modernize systems, automate processes, integrate platforms, and select the right technology stack. From startups to enterprises—get strategic, scalable, and secure software guidance.",
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
            name: "Business Software Consulting",
            item: `${BASE_URL}/services/business-software-consulting`,
          },
        ],
      },
      primaryImageOfPage: `${BASE_URL}/images/meta/services-og/business-software-consulting-og.webp`,
      inLanguage: "en-US",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntity: {
        "@id": `${BASE_URL}/services/business-software-consulting#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/services/business-software-consulting#service`,
      name: "Business Software Consulting in Dallas | Strategic IT Advisory | Moltech Solutions Inc",
      description:
        "Moltech Solutions Inc offers expert business software consulting in Dallas USA, helping you modernize systems, automate processes, integrate platforms, and select the right technology stack. From startups to enterprises—get strategic, scalable, and secure software guidance.",
      provider: { "@id": `${BASE_URL}/#organization` },
      brand: { "@id": `${BASE_URL}/#organization` },
      serviceType: "Business software consulting",
      areaServed: commonSchemaData.areasServed,
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/services/business-software-consulting`,
      },
    },
  ],
};
const faqData = [
  {
    question:
      "What is Business Software Consulting, and Why Should I Choose It for My Business?",
    answer:
      "Business software consulting involves assessing your business needs, recommending, designing, and implementing software solutions to optimize operations, enhance efficiency, and drive growth. It includes services like software selection, system integration, process automation, and digital transformation strategies. Businesses choose software consulting to streamline workflows, reduce costs, and stay competitive in a tech-driven market.",
  },
  {
    question: "How Much Does Business Software Consulting Cost?",
    answer:
      "The cost of business software consulting varies depending on the project's scope, complexity, and duration. Simple assessments or software selection typically have lower costs, whereas comprehensive services such as system integration or digital transformation usually necessitate a larger investment. We provide transparent pricing and customized plans to suit your budget.",
  },
  {
    question:
      "Why Do I Need Software Consulting When I Can Choose Software Myself?",
    answer:
      "Business software consulting saves time, reduces risks, and ensures optimal results by:\n- Expert Guidance: We identify software that aligns with your specific business needs.\n- Cost Efficiency: Avoid costly mistakes from choosing incompatible or overpriced software.\n- Seamless Integration: Ensure new software integrates with existing systems without disruptions.\n- Training and Support: Provide staff training and ongoing support for smooth adoption.",
  },
  {
    question:
      "What Are the Common Pain Points in Software Implementation, and How Do You Address Them?",
    answer:
      "Software implementation can be challenging, but we mitigate common issues:\n- Resistance to Change: We provide change management strategies and training to ensure staff adoption.\n- Integration Challenges: We ensure seamless integration with existing systems, avoiding data silos.\n- Budget Overruns: We plan meticulously to stay within budget and avoid hidden costs.\n- Downtime and Disruptions: We implement solutions with minimal impact on daily operations.\n- Security Risks: We prioritize secure configurations and compliance with regulations like GDPR and HIPAA.",
  },
  {
    question: "Do You Provide Ongoing Support After Software Implementation?",
    answer:
      "Yes, we offer comprehensive post-implementation support, including:\n- Regular software updates and maintenance\n- Troubleshooting and technical support\n- Staff training to maximize software utilization\n- Performance monitoring to ensure optimal functionality\n- Scalability planning for future growth",
  },
  {
    question: "What types of software solutions can you help with?",
    answer:
      "Custom software development, CRM and ERP implementation, Cloud migration and integration, Legacy system modernization, Process automation and workflow optimization.",
  },
  {
    question: "Why is Business Software Consulting important for my business?",
    answer:
      "Many businesses struggle with inefficient processes or software that doesn’t fit their needs, leading to wasted time, low productivity, and operational bottlenecks. Business Software Consulting helps you identify the right technology solutions, align them with your workflows, and ensure your investment delivers measurable ROI.",
  },
  {
    question:
      "We already have software systems in place. Do we still need software consulting?",
    answer:
      "Yes. Our Business Software Consulting services help evaluate your current systems to identify inefficiencies, gaps, or opportunities for automation and cost savings. Whether you need integration with new tools, optimization, or complete digital transformation, we help you get the most out of your existing systems.",
  },
  {
    question:
      "How do I know if I need Business Software Consulting or Custom Software Development?",
    answer:
      "If you are unsure of what software will best fit your business goals, need to analyze your current processes, or require an expert technology roadmap, you need Business Software Consulting. If you already have a clear solution in mind and want it built, you need Custom Software Development.",
  },
  {
    question: "What is your process during Business Software Consulting?",
    answer:
      "We begin with a discovery session to understand your business goals, current processes, and pain points. We analyze your systems, identify opportunities for improvement, and deliver a clear technology strategy with actionable steps, including recommendations for software solutions and potential development needs.",
  },
  {
    question: "How long does a Business Software Consulting engagement take?",
    answer:
      "Depending on the size and complexity of your business, it typically takes 2–6 weeks to complete a consulting engagement, from discovery to delivering your custom software strategy.",
  },
  {
    question:
      "Will you help with software selection and implementation after consulting?",
    answer:
      "Yes. We assist in identifying the right tools and can handle implementation, integration, and training to ensure your new software is adopted successfully, ensuring you receive full value from your investment.",
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

export default function Page() {
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
      <BusinessSoftwareConsultingPage />
    </>
  );
}
