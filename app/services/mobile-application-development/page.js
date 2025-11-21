import MobileAppDevelopmentPage from "@/features/servicePages/mobileAppDevPage/MobileAppDevelopmentPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

// Force SSR for service page
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Mobile App Development Dallas | USA-Centric iOS & Android Solutions",
  description:
    "Top Dallas mobile app development company delivering USA-focused iOS & Android solutions. UI/UX design, robust backend & app store optimization.",
  canonical: `${BASE_URL}/services/mobile-application-development`,
  keywords:
    "mobile app development, iOS, Android, cross-platform, Moltech Solution Inc.",
  openGraph: {
    title: "Mobile App Development Dallas | USA-Focused iOS & Android Experts",
    description:
      "Leading Dallas-based mobile app development firm specializing in iOS, Android, UI/UX, backend engineering & app store optimization for U.S. clients.",
    url: `${BASE_URL}/services/mobile-application-development`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/services-og/mobile-application-development-og.webp`,
        alt: "Mobile Application Development | Moltech Solution Inc.",
        type: "image/webp",
      },
    ],
    site_name: commonSchemaData.companyName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Dallas | USA-Focused iOS & Android Experts",
    description:
      "Leading Dallas-based mobile app development firm specializing in iOS, Android, UI/UX, backend engineering & app store optimization for U.S. clients.",
    images: [`${BASE_URL}/images/meta/services-og/mobile-application-development-og.webp`],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "mobile development, iOS, Android, React Native",
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
      "@id": `${BASE_URL}/services/mobile-application-development#webpage`,
      url: `${BASE_URL}/services/mobile-application-development`,
      name: "Mobile App Development Dallas | USA-Focused iOS & Android Experts",
      description:
        "Top Dallas mobile app development company delivering USA-focused iOS & Android solutions. UI/UX design, robust backend & app store optimization.",
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
            name: "Mobile Application Development",
            item: `${BASE_URL}/services/mobile-application-development`,
          },
        ],
      },
      primaryImageOfPage: `${BASE_URL}/images/meta/services-og/mobile-application-development-og.webp`,
      inLanguage: "en-US",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntity: {
        "@id": `${BASE_URL}/services/mobile-application-development#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/services/mobile-application-development#service`,
      name: "Mobile App Development Dallas | USA-Focused iOS & Android Experts",
      description:
        "Leading Dallas-based mobile app development firm specializing in iOS, Android, UI/UX, backend engineering & app store optimization for U.S. clients.",
      provider: { "@id": `${BASE_URL}/#organization` },
      brand: { "@id": `${BASE_URL}/#organization` },
      serviceType: "Mobile Application Development",
      areaServed: commonSchemaData.areasServed,
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/services/mobile-application-development`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "iOS App Development" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Android App Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Cross-Platform Apps" },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "App Maintenance & Support",
            },
          },
        ],
      },
    },
  ],
};

const faqData = [
  {
    question: "Who should consider Mobile Application Development services?",
    answer:
      "Businesses of any size looking to improve customer engagement, streamline operations, or expand digital presence should consider Mobile Application Development services. Investing in mobile app services can help you scale efficiently, whether you are a startup needing an MVP or an enterprise aiming to enhance customer experience through a custom mobile app.",
  },
  {
    question:
      "Why is investing in a custom mobile app important for my business?",
    answer:
      "A custom mobile app helps you directly reach customers, offer personalized experiences, and increase brand loyalty. With the rising use of smartphones, having your business available via a dedicated mobile app improves accessibility and positions you competitively in your industry.",
  },
  {
    question: "I already have a website. Do I need a mobile app?",
    answer:
      "Yes. While a mobile-responsive website is important, a mobile app offers enhanced user engagement, offline access, push notifications, and better performance, leading to improved customer retention and more frequent user interactions.",
  },
  {
    question:
      "What are the most common challenges businesses face before mobile app development?",
    answer:
      "Common challenges include: Unclear project scope and features; Choosing the right platform (iOS, Android, or cross-platform); Budget and timeline estimation; Integrating the app with existing systems. Our Mobile Application Development services help you clarify these areas with structured planning and phased development.",
  },
  {
    question: "Why choose your Mobile Application Development services?",
    answer:
      "We focus on user-centric design, scalable architecture, and clean, maintainable code, ensuring your app performs well and grows with your business. We also prioritize clear communication and provide regular updates to ensure that the app development process remains stress-free for you.",
  },
  {
    question: "How much does it cost to build a mobile app?",
    answer:
      "The cost varies based on features, platform, and complexity. We provide a transparent estimate after a detailed discovery call to align with your goals and budget for your custom mobile app development.",
  },
  {
    question:
      "Will you help with app store publishing and post-launch support?",
    answer:
      "Yes. Our Mobile App Development services include app store submission to the Apple App Store and Google Play, compliance with their guidelines, and post-launch maintenance to ensure smooth operation and timely updates.",
  },
  {
    question: "What type of mobile applications can you develop?",
    answer:
      "We develop native iOS and Android apps, cross-platform apps using React Native or Flutter, and progressive web apps (PWAs), ensuring your app aligns with your goals and your audience's needs.",
  },
  {
    question: "How long does it take to develop a mobile application?",
    answer:
      "Depending on the complexity and features, a typical custom app can take 8–20 weeks from discovery to launch. We follow an agile development process to ensure you can test early builds and adjust requirements during development.",
  },
  {
    question: "What Types of Mobile Apps Can You Develop?",
    answer:
      "We specialize in developing various types of mobile applications, including: Native Apps: Built specifically for iOS or Android, offering superior performance and user experience; Hybrid Apps: Cross-platform apps that work on both iOS and Android, reducing development time and cost; Progressive Web Apps (PWAs): Web-based apps that provide a native app-like experience with lower development costs; E-commerce Apps: Feature-rich apps with shopping carts, payment gateways, and push notifications; On-Demand Apps: Apps for delivery, ride-sharing, or service booking tailored to your industry.",
  },
  {
    question: "How do you ensure app security and data protection?",
    answer:
      "We implement best practices, including data encryption, secure authentication, and compliance with industry standards, to protect user data and privacy.",
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

export default function MobileAppDevServicePage() {
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
      <MobileAppDevelopmentPage />
    </>
  );
}
