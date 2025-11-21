import CustomSoftwareDevelopment from "@/features/servicePages/customSoftwareDevPage/CustomSoftwareDevPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

export const dynamic = "force-dynamic";

export const metadata = {
  title:
    "Custom Software Development in Dallas – Web, Mobile, SaaS & Enterprise Solutions | Moltech Solution Inc.",
  description:
    "Moltech Solution Inc offers custom software development services from Dallas, including web apps, mobile apps, SaaS, enterprise software, API integration, cloud-native apps, and dedicated development teams. Tailored solutions, agile delivery.",
  canonical: `${BASE_URL}/services/custom-software-development`,
  keywords:
    "custom software development, web application development, mobile apps, SaaS, API integration, Moltech Solution Inc.",
  openGraph: {
    title:
      "Custom Software Development in Dallas – Web, Mobile, SaaS & Enterprise Solutions | Moltech Solution Inc.",
    description:
      "From web and mobile apps to enterprise SaaS and cloud-native solutions, Moltech delivers custom software built for innovation, scale, and results.",
    url: `${BASE_URL}/services/custom-software-development`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/services-og/custom-software-development-og.webp`,
        alt: "Custom Software Development in Dallas – Web, Mobile, SaaS & Enterprise Solutions | Moltech Solution Inc.",
        type: "image/webp",
      },
    ],
    site_name: commonSchemaData.companyName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Software Development in Dallas – Web, Mobile, SaaS & Enterprise Solutions | Moltech Solution Inc.",
    description:
      "From web and mobile apps to enterprise SaaS and cloud-native solutions, Moltech delivers custom software built for innovation, scale, and results.",
    images: [
      `${BASE_URL}/images/meta/services-og/custom-software-development-og.webp`,
    ],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "custom software development Dallas, web application development, mobile app development USA, SaaS development, enterprise software solutions, legacy system modernization, API integration services, cloud-native application development, dedicated development teams, Frisco software company",
    },
    { name: "author", content: "Moltech Solutions Inc." },
    { name: "language", content: "English" },
    { name: "distribution", content: "Global" },
    { name: "rating", content: "General" },
    { name: "revisit-after", content: "7 days" },
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
      "@id": `${BASE_URL}/services/custom-software-development#webpage`,
      url: `${BASE_URL}/services/custom-software-development`,
      name: "Custom Software Development in Dallas – Web, Mobile, SaaS & Enterprise Solutions | Moltech Solution Inc.",
      description:
        "Moltech Solution Inc offers custom software development services from Dallas, including web apps, mobile apps, SaaS, enterprise software, API integration, cloud-native apps, and dedicated development teams. Tailored solutions, agile delivery.",
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
            name: "Custom Software Development",
            item: `${BASE_URL}/services/custom-software-development`,
          },
        ],
      },
      primaryImageOfPage: `${BASE_URL}/images/meta/services-og/custom-software-development-og.webp`,
      inLanguage: "en-US",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntity: {
        "@id": `${BASE_URL}/services/custom-software-development#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/services/custom-software-development#service`,
      name: "Custom Software Development in Dallas – Web, Mobile, SaaS & Enterprise Solutions | Moltech Solution Inc.",
      description:
        "Moltech Solution Inc offers custom software development services from Dallas, including web apps, mobile apps, SaaS, enterprise software, API integration, cloud-native apps, and dedicated development teams. Tailored solutions, agile delivery.",
      provider: { "@id": `${BASE_URL}/#organization` },
      brand: { "@id": `${BASE_URL}/#organization` },
      serviceType: "Custom Software Development",
      areaServed: commonSchemaData.areasServed,
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/services/custom-software-development`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom Software Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "MVP Development",
            description: "Rapid MVP to validate product-market fit",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Enterprise Delivery",
            description: "Full lifecycle delivery & support",
            priceCurrency: "USD",
          },
        ],
      },
    },
  ],
};

const faqData = [
  {
    question:
      "What is custom software development, and how does it differ from off-the-shelf software?",
    answer:
      "Custom software development is making software that is made just for your business's needs, workflows, or goals. Custom software solutions are a better fit for your unique operations than off-the-shelf software, which is made for a wide audience and often requires you to change your processes. Custom software solutions offer seamless integration, scalability, and improved efficiency.",
  },
  {
    question: "Who should consider custom software development?",
    answer:
      "Custom software development is ideal for: Small, medium, and large businesses with unique workflows; Companies facing limitations with off-the-shelf software; Businesses looking to scale operations efficiently; Organizations aiming for workflow automation; Startups developing unique digital products. If you’re frustrated by the limitations of generic tools or spending too much time on manual processes, custom software is right for you.",
  },
  {
    question:
      "Why should I choose custom software instead of ready-made software?",
    answer:
      "Off-the-shelf software often forces you to adjust your processes to fit the tool, while custom software aligns with your business needs, workflows, and goals. Supports unique processes; Offers seamless integration with your existing systems; Grows with your business, avoiding the need for future migrations; Provides better control and flexibility; Enhances business process automation.",
  },
  {
    question: "Will I own the custom software after development?",
    answer:
      "Yes, once your custom software development project is complete and payment is made, you will own all source code, documentation, and intellectual property.",
  },
  {
    question: "What if I'm unsure about my business software needs?",
    answer:
      "You don't need to have all the answers before contacting us. Our team will help you clarify your requirements, identify pain points, and prioritize features to ensure your custom software solution aligns with your business goals and maximizes ROI.",
  },
  {
    question: "Who should hire custom software development?",
    answer:
      "Businesses that benefit most from custom software services include: Companies with unique workflows that don't fit standard software; Growing businesses outgrowing their current systems; Organizations needing specific integrations or data control; Industries with compliance requirements (healthcare, finance, legal); Businesses wanting competitive advantages through proprietary features; Companies spending too much on multiple software subscriptions.",
  },
  {
    question: "What size company typically needs custom software development?",
    answer:
      "Custom software benefits companies of all sizes: Startups: Need scalable solutions and competitive differentiation; Small businesses: Unique processes requiring specialized solutions; Mid-size companies: Complex integrations and growing operational needs; Large enterprises: Require comprehensive systems to ensure regulatory compliance. The key factor is having unique requirements, not company size.",
  },
  {
    question: "Is custom software development expensive?",
    answer:
      "Custom software is an investment that delivers high ROI by: Reducing manual work and operational costs; Improving efficiency and productivity; Minimizing errors and rework; Eliminating subscription fees for unused features in generic software. You save money long-term by investing in software that makes your business more efficient.",
  },
  {
    question: "How long does custom software development take?",
    answer:
      "Project timelines depend on complexity, but typically: Initial MVP (Minimum Viable Product): 3–6 months; Full-feature builds delivered in phases for faster results while adding features iteratively. We use an agile development approach so you start seeing value early while refining the system to your exact needs.",
  },
  {
    question: "Will my team find it difficult to use custom software?",
    answer:
      "No. Custom software is designed around your current workflows, making it intuitive and easier to adopt. We also provide: User training; Clear documentation; Post-launch support to ensure smooth onboarding.",
  },
  {
    question: "How can I begin implementing custom software for my business?",
    answer:
      "Identify key challenges you want to solve; Outline your workflows and pain points; Contact us for a free consultation. We will assess your needs, propose a solution, and guide you through each step of the custom software development process.",
  },
  {
    question: "Can custom software integrate with my existing systems?",
    answer:
      "Yes, integration is a key strength of custom software. We can connect with: Legacy systems and databases; Third-party APIs (CRM, ERP, accounting software); Cloud platforms (AWS, Azure, Google Cloud); Mobile applications and web services; IoT devices and hardware systems; Business intelligence tools; E-commerce platforms and payment processors.",
  },
  {
    question: "Do you provide ongoing support for custom software?",
    answer:
      "Yes, we offer comprehensive support packages including: Bug fixes and technical issues resolution; Security updates and patches; Performance optimization and monitoring; Feature enhancements and new functionality; User training and documentation; System maintenance and backups; Priority support with guaranteed response times.",
  },
  {
    question: "What's the first step to get custom software developed?",
    answer:
      "Start with a free consultation where we: Analyze your current processes and pain points; Identify opportunities for improvement; Assess if custom software is the best solution; Provide approximate timeline and budget estimates; Discuss alternative approaches if needed; Create a detailed project proposal.",
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

export default function CustomSoftwareDevelopmentPage() {
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
      <CustomSoftwareDevelopment />
    </>
  );
}
