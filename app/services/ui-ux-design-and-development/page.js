import UiUxPage from "@/features/servicePages/uIUXDesignAndDevPage/UIUXDesignAndDevPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "UI/UX Design Services in Dallas, TX | Moltech Solutions Inc., USA",
  description:
    "Professional UI/UX design services using Figma, Adobe XD, and React. Based near Dallas, TX, Moltech delivers engaging, scalable designs for global businesses.",
  canonical: `${BASE_URL}/services/ui-ux-design-and-development`,
  keywords:
    "UI/UX design, frontend development, accessibility, Moltech Solutions",
  openGraph: {
    title: "UI/UX Design Services in Dallas, TX | Moltech Solutions Inc.",
    description:
      "Craft smart, scalable UI/UX with Figma, Adobe XD, and React. Moltech delivers seamless digital design for mobile, SaaS, and enterprise—Dallas-based, globally trusted.",
    url: `${BASE_URL}/services/ui-ux-design-and-development`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/services-og/ui-ux-design-and-development-og.webp`,
        alt: "UI/UX Design and Development | Moltech Solutions Inc.",
        type: "image/webp",
      },
    ],
    site_name: commonSchemaData.companyName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services in Dallas, TX | Moltech Solutions Inc.",
    description:
      "Professional UI/UX design services using Figma, Adobe XD, and React. Based near Dallas, TX, Moltech delivers engaging, scalable designs for global businesses.",
    images: [
      `${BASE_URL}/images/meta/services-og/ui-ux-design-and-development-og.webp`,
    ],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "ui ux design, accessibility, frontend development",
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
      "@id": `${BASE_URL}/services/ui-ux-design-and-development#webpage`,
      url: `${BASE_URL}/services/ui-ux-design-and-development`,
      name: "UI/UX Design Services in Dallas, TX | Moltech Solutions Inc.",
      description:
        "Professional UI/UX design services using Figma, Adobe XD, and React. Based near Dallas, TX, Moltech delivers engaging, scalable designs for global businesses.",
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
            name: "UI/UX Design and Development",
            item: `${BASE_URL}/services/ui-ux-design-and-development`,
          },
        ],
      },
      primaryImageOfPage: `${BASE_URL}/images/meta/services-og/ui-ux-design-and-development-og.webp`,
      inLanguage: "en-US",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntity: {
        "@id": `${BASE_URL}/services/ui-ux-design-and-development#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/services/ui-ux-design-and-development#service`,
      name: "UI/UX Design Services in Dallas, TX | Moltech Solutions Inc., USA",
      description:
        "Professional UI/UX design services using Figma, Adobe XD, and React. Based near Dallas, TX, Moltech delivers engaging, scalable designs for global businesses.",
      provider: { "@id": `${BASE_URL}/#organization` },
      brand: { "@id": `${BASE_URL}/#organization` },
      serviceType: "UI/UX Design and Development",
      areaServed: commonSchemaData.areasServed,
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/services/ui-ux-design-and-development`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web App Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Software Consulting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design and Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data Preprocessing and Cleaning",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Software Testing & QA",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Staff Augmentation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Accounting",
            },
          },
        ],
      },
    },
  ],
};

const faqData = [
  {
    question: "Who should consider UI/UX design and development services?",
    answer:
      "If you own a startup, SaaS business, e-commerce platform, or enterprise application aiming to improve customer engagement, reduce bounce rates, and increase conversions, UI/UX design services are essential for you. A well-designed interface ensures your users can navigate your app or website intuitively, improving user satisfaction and retention. Whether you are launching a new digital product or looking to redesign your current platform, investing in UI/UX design and development will help your business stand out in a competitive market.",
  },
  {
    question: "What is the difference between UI design and UX design?",
    answer:
      "UI (User Interface) design focuses on the visual aspects—layouts, colors, typography, and interactive elements. UX (User Experience) design is about the user journey, logical navigation, and ensuring ease of use. While UI makes your app or site visually appealing, UX ensures it's practical and user-friendly. Both are essential to delivering a successful digital experience.",
  },
  {
    question: "Why is investing in UI/UX design important for my business?",
    answer:
      "High bounce rates, poor engagement, and low conversions often result from poor UI/UX. Investing in design ensures your site or app meets user expectations with intuitive navigation and appealing visuals. This improves customer satisfaction, shortens task times, and boosts brand perception—ultimately helping your business grow.",
  },
  {
    question: "What problems do UI/UX design and development solve?",
    answer:
      "High user drop-off rates or low engagement; Confusing navigation or unclear calls to action; Inconsistent branding or visual design; Accessibility issues for users with disabilities; Negative feedback about usability or aesthetics; Low conversion rates despite good traffic.",
  },
  {
    question: "What will be delivered at the end of the UI/UX design process?",
    answer:
      "Deliverables often include: User research reports and personas; Customer journey maps; Wireframes and interactive prototypes; High-fidelity UI designs; Design systems and style guides; For development projects: coded website or app.",
  },
  {
    question: "How much does UI/UX Design and Development cost?",
    answer:
      "Costs vary based on project scope, customization, and revision cycles. After discussing your needs, we provide a transparent quote. Most agencies include 2–3 major revision rounds in the base cost.",
  },
  {
    question: "What makes your UI/UX Design and Development service unique?",
    answer:
      "We follow a user-centric, data-driven approach tailored to your goals. With clear communication, deep research, and continuous support, we ensure your product not only looks great but also performs effectively.",
  },
  {
    question: "How does UI/UX design improve customer retention?",
    answer:
      "When your platform is intuitive and enjoyable to use, users are more likely to return and recommend it. A clear interface, smooth navigation, and consistent branding foster trust and long-term engagement.",
  },
  {
    question: "What industries benefit from UI/UX design services?",
    answer:
      "Nearly all industries benefit from good UI/UX, including: E-commerce; Healthcare; Education; SaaS; Fintech; Travel; Logistics. Whether launching an MVP or enhancing user experience, UI/UX design reduces frustration and boosts adoption.",
  },
  {
    question:
      "Do I need UI/UX design if I already have a developer building my app?",
    answer:
      "Yes. Developers focus on functionality, while UI/UX designers ensure that functionality is presented clearly and intuitively. Without proper design, even a feature-rich app can confuse users. A solid UI/UX foundation ensures your app is not only functional but also user-friendly and market-ready.",
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

export default function UiUxServicePage() {
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
      <UiUxPage />
    </>
  );
}
