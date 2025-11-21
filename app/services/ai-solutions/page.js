import AISolutionsPage from "@/features/servicePages/aiSolutionsPage/AISolutionsPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

// Force SSR for service page
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Global AI Solutions Partner | Moltech Solutions Inc., Dallas TX USA",
  description:
    "Custom AI solutions that deliver measurable results. Based in Frisco, Texas—trusted by businesses across the USA and Canada for automation, analytics, and more.",
  canonical: `${BASE_URL}/services/ai-solutions`,
  keywords:
    "AI solutions, machine learning services, predictive analytics, AI consulting, RPA, natural language processing, Moltech Solutions",
  openGraph: {
    title: "Global AI Solutions Partner | Moltech Solutions Inc., Frisco TX",
    description:
      "Based in Frisco, Texas—Moltech delivers practical AI solutions globally. Automate, predict, and personalize with AI tailored to your business.",
    url: `${BASE_URL}/services/ai-solutions`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/services-og/ai-solutions-og.webp`,
        alt: "Global AI Solutions Partner | Moltech Solutions Inc., Dallas TX USA",
        type: "image/webp",
      },
    ],
    site_name: commonSchemaData.companyName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global AI Solutions Partner | Moltech Solutions Inc., Frisco TX",
    description:
      "Based in Frisco, Texas—Moltech delivers practical AI solutions globally. Automate, predict, and personalize with AI tailored to your business.",
    images: [`${BASE_URL}/images/meta/services-og/ai-solutions-og.webp`],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "AI solutions Frisco TX, global AI services, AI development USA, custom AI partner, AI consulting Texas, enterprise AI Canada, AI automation Europe, predictive analytics, AI chatbots, RPA development, Moltech Solutions Inc, worldwide AI partner",
    },
  ],
};

// ✅ JSON-LD Schema Data
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
      "@id": `${BASE_URL}/services/ai-solutions#webpage`,
      url: `${BASE_URL}/services/ai-solutions`,
      name: "Global AI Solutions Partner | Moltech Solutions Inc., Dallas TX USA",
      description:
        "Custom AI solutions that deliver measurable results. Based in Frisco, Texas—trusted by businesses across the USA and Canada for automation, analytics, and more.",
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/services-og/ai-solutions-og.webp`,
      },
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "en-US",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/meta/services-og/ai-solutions-og.webp`,
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
            name: "AI Solutions",
            item: `${BASE_URL}/services/ai-solutions`,
          },
        ],
      },
      mainEntity: { "@id": `${BASE_URL}/services/ai-solutions#service` },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/services/ai-solutions#service`,
      name: "Global AI Solutions Partner | Moltech Solutions Inc., Dallas TX USA",
      description:
        "Custom AI solutions that deliver measurable results. Based in Frisco, Texas—trusted by businesses across the USA and Canada for automation, analytics, and more.",
      provider: { "@id": `${BASE_URL}/#organization` },
      brand: { "@id": `${BASE_URL}/#organization` },
      serviceType: "AI Solutions",
      areaServed: commonSchemaData.areasServed,
      offers: { "@type": "Offer", url: `${BASE_URL}/services/ai-solutions` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Solutions Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Proof of Concept",
            description: "Quick validation of AI value",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "MVP Model",
            description: "Production-ready ML model",
            priceCurrency: "USD",
          },
        ],
      },
      termsOfService: `${BASE_URL}/privacy-policy`,
      providerMobility: "static",
      availableChannel: [
        {
          "@type": "ServiceChannel",
          serviceLocation: {
            "@type": "Place",
            address: commonSchemaData.primaryAddress,
          },
        },
      ],
      serviceOutput: "Deployed models, APIs, dashboards",
      serviceAudience: "Enterprises and SMBs",
      serviceTechnologies: commonSchemaData.technologies,
    },
  ],
};

// ✅ FAQ Data
const faqData = [
  {
    question: "What are AI solutions, and how can they help my business?",
    answer:
      "AI solutions refer to the use of Artificial Intelligence technologies like machine learning, natural language processing, and predictive analytics to automate processes, gain insights, and enhance decision-making. Businesses can use AI solutions to reduce manual tasks, improve accuracy, and stay competitive in a data-driven market.",
  },
  {
    question: "Who should consider using AI solutions?",
    answer:
      "Businesses of all sizes, from startups to enterprises, looking to improve efficiency, gain actionable insights from data, automate repetitive tasks, or personalize customer experiences should consider AI solutions. If your business wants to move beyond traditional software systems and leverage intelligent automation, AI services are right for you.",
  },
  {
    question: "What business challenges can AI solutions address?",
    answer:
      "Common pain points that AI solutions help resolve include:\n- High manual workloads and repetitive tasks consuming staff time\n- Inefficient data analysis and reporting\n- Inaccurate demand forecasting and inventory management\n- Slow customer service response times\n- Difficulty in detecting patterns, fraud, or customer behavior trends",
  },
  {
    question: "Do I need technical expertise to implement AI solutions?",
    answer:
      "No. Our AI services are designed to be implemented with minimal disruption to your operations. We handle the technical complexities while ensuring your team understands how to use and benefit from AI in your workflows.",
  },
  {
    question: "How do AI solutions impact ROI for businesses?",
    answer:
      "By reducing manual tasks, improving accuracy, and enhancing customer engagement, AI solutions can significantly reduce operational costs and improve revenue opportunities. Most businesses see ROI through time saved, improved customer satisfaction, and better decision-making using AI-driven insights.",
  },
  {
    question: "How do I know if my business is ready for AI integration?",
    answer:
      "If your business deals with large volumes of data, has repetitive processes, or aims to gain more profound insights into customer behavior, it is ready for AI integration. We offer an initial consultation to assess your current workflows and data readiness to recommend the best-fit AI solutions for your business.",
  },
  {
    question: "Is AI only for large enterprises?",
    answer:
      "No. While many large enterprises use AI, small and mid-sized businesses can greatly benefit from AI solutions to gain a competitive edge. We provide scalable AI services tailored to your budget and business size.",
  },
  {
    question: "How long does it take to implement AI solutions?",
    answer:
      "Implementation time varies based on the complexity of your needs. Simple AI process automation can take a few weeks, while advanced machine learning models may take a few months for data preparation, training, and integration.",
  },
  {
    question: "Will AI solutions replace my employees?",
    answer:
      "No, AI solutions are designed to enhance your team’s productivity, not replace them. By automating repetitive tasks, your employees can focus on higher-value work, improving overall job satisfaction and business growth.",
  },
  {
    question: "Why should I choose your company for AI solutions?",
    answer:
      "We specialize in custom AI solutions for businesses, ensuring seamless integration with your existing systems while providing continuous support and optimization. Our expertise in AI services helps you implement practical, cost-effective AI strategies that deliver measurable business value.",
  },
  {
    question: "Can I start with a small pilot project?",
    answer:
      "Absolutely! We recommend starting with a pilot project to demonstrate value and build confidence. Common pilot projects include:\n- Automated email responses or chatbots\n- Basic data analysis and reporting\n- Simple workflow automation\n- Customer sentiment analysis\n- Invoice processing or data entry automation\nThis approach allows you to see tangible results quickly while minimizing risk and investment.",
  },
  {
    question: "Do I need technical expertise to implement your AI solutions?",
    answer:
      "No technical expertise is required! We handle the entire process, from consultation to deployment and training. Our team ensures your AI solutions are user-friendly and integrated seamlessly into your operations. We also provide training for your staff to maximize adoption.",
  },
  {
    question: "Are your AI solutions secure and compliant with regulations?",
    answer:
      "Yes, security and compliance are top priorities. Our AI solutions adhere to industry standards like GDPR, HIPAA (for healthcare), and CCPA. We implement robust data encryption, access controls, and regular audits to protect your data.",
  },
  {
    question:
      "Can your AI solutions integrate with my existing software or tools?",
    answer:
      "Absolutely! We design our AI solutions to smoothly integrate with popular platforms such as CRM systems like Salesforce and HubSpot, ERP software, and e-commerce platforms like Shopify and Magento. We assess your tech stack during the consultation to ensure compatibility.",
  },
  {
    question: "How do I get started with your AI solutions?",
    answer:
      "1. Schedule a Consultation: Contact us to discuss your business needs\n2. Custom Proposal: We’ll provide a tailored plan outlining the AI solution, timeline, and costs\n3. Implementation & Training: Our team handles deployment and trains your staff for seamless adoption",
  },
];

// ✅ FAQ JSON-LD (dynamic)
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

export default function AISolutionsServicePage() {
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
      <AISolutionsPage />
    </>
  );
}
