import WebAppDevPage from "@/features/servicePages/webAppDevPage/WebAppDevPage";
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Web App Development Company in Dallas | Moltech Solutions Inc. USA",
  description:
    "Moltech builds secure, scalable web applications tailored to your business. Headquartered in Dallas, TX with global support across USA, Europe, Singapore, and India.",
  canonical: `${BASE_URL}/services/web-application-development`,
  keywords: "web application development, SPA, PWA, Moltech Solutions",
  openGraph: {
    title: "Web App Development Company in Dallas | Moltech Solutions Inc. USA",
    description:
      "Moltech builds secure, scalable web applications tailored to your business. Headquartered in Dallas, TX with global support across USA, Europe, Singapore, and India.",
    url: `${BASE_URL}/services/web-application-development`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/services-og/web-application-development-og.webp`,
        alt: "Web Application Development | Moltech",
        type: "image/webp",
      },
    ],
    site_name: commonSchemaData.companyName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web App Development Company in Dallas | Moltech Solutions Inc. USA",
    description:
      "Moltech builds secure, scalable web applications tailored to your business. Headquartered in Dallas, TX with global support across USA, Europe, Singapore, and India.",
    images: [`${BASE_URL}/images/meta/services-og/web-application-development-og.webp`],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "web app development, SPA, PWA, API integration",
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
      "@id": `${BASE_URL}/services/web-application-development#webpage`,
      url: `${BASE_URL}/services/web-application-development`,
      name: "Web App Development Company in Dallas | Moltech Solutions Inc. USA",
      description:
        "Moltech Solutions Inc. is your trusted Dallas partner for providing custom development, mobile apps, AI integration, legacy system modernization & IT services for U.S. businesses.",
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
            name: "Web Application Development",
            item: `${BASE_URL}/services/web-application-development`,
          },
        ],
      },
      primaryImageOfPage: `${BASE_URL}/images/meta/services-og/web-application-development-og.webp`,
      inLanguage: "en-US",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntity: {
        "@id": `${BASE_URL}/services/web-application-development#service`,
      },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/services/web-application-development#service`,
      name: "Web App Development Company in Dallas | Moltech Solutions Inc. USA",
      description:
        "Moltech builds secure, scalable web applications tailored to your business. Headquartered in Dallas, TX with global support across USA, Europe, Singapore, and India.",
      provider: { "@id": `${BASE_URL}/#organization` },
      brand: { "@id": `${BASE_URL}/#organization` },
      serviceType: "Web Application Development",
      areaServed: commonSchemaData.areasServed,
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/services/web-application-development`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Application Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Front End Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Integration & Migration Services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Backend Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Security and Compliance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud-Native Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Machine Learning Integration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "DevOps & CI/CD Services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile-Responsive Web Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Progressive Web App (PWA) Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Maintenance & Support",
            },
          },
        ],
      },
    },
  ],
};

const faqData = [
  {
    question: "What are the services for developing web applications?",
    answer:
      "Web application services involve designing, developing, and maintaining web-based software that runs on browsers, helping businesses streamline operations, enhance customer engagement, and automate workflows. Our services for developing web applications include UI/UX design, backend and frontend development, API integration, and deployment.",
  },
  {
    question:
      "What are Web Application Services, and how can they benefit my business?",
    answer:
      "Web application services involve the design, development, and maintenance of custom web-based applications tailored to your business needs. These services help businesses streamline operations, enhance user experiences, and boost online presence. Whether you need a customer portal, e-commerce platform, or internal management tool, our services for developing web applications deliver scalable, secure, and user-friendly solutions.",
  },
  {
    question: "Who can choose Web Application Services?",
    answer:
      "Our web application services are particularly well-suited for the following groups: Small businesses looking to digitize operations or improve customer engagement; Startups needing cost-effective, scalable web apps to launch their ideas; Enterprises requiring complex and secure applications for internal processes or customer-facing platforms; E-commerce businesses seeking robust online stores with seamless user experiences; Nonprofits aiming to create accessible platforms for outreach or donations. If your business needs a tailored digital solution to solve operational challenges or engage users, our services are for you.",
  },
  {
    question: "Who should choose web application development services?",
    answer:
      "Our web application services are ideal for businesses, startups, entrepreneurs, and organizations seeking to build scalable, secure, and custom online solutions. Whether you need a customer portal, internal tool, SaaS product, or e-commerce platform, our services fit those aiming to streamline operations, improve customer engagement, or launch new digital products.",
  },
  {
    question:
      "Why should I invest in a custom web application instead of off-the-shelf software?",
    answer:
      "Custom web applications are designed to fit your unique business needs, providing greater flexibility, scalability, and integration with your existing systems. Unlike generic solutions, custom apps evolve with your business, improve efficiency, and offer a competitive edge.",
  },
  {
    question: "What is the difference between a website and a web application?",
    answer:
      "A website typically provides static information and basic interaction, while a web application is interactive, dynamic, and allows users to perform specific tasks, such as managing data, making purchases, or collaborating online. Web applications are essential for businesses needing advanced functionality and user engagement.",
  },
  {
    question: "How long does it take to develop a web application?",
    answer:
      "Development timelines vary based on project complexity, features, and integration requirements. Simple web apps may take a few weeks, while complex solutions can require several months. We provide detailed timelines after understanding your project goals and requirements.",
  },
  {
    question:
      "What are the most common challenges businesses face with web applications?",
    answer:
      "Common pain points include: Difficulty integrating with existing systems; Security vulnerabilities; Poor user experience or slow performance; High maintenance costs. Our team addresses these issues with best practices in security, UX/UI design, and ongoing support.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes, we offer comprehensive web application maintenance services, including bug fixes, software updates, speed optimization, and database management, ensuring your app remains secure and high-performing.",
  },
  {
    question: "How can I begin using your web application services?",
    answer:
      "Contact us for a free consultation. We’ll discuss your goals, assess your requirements, and provide a tailored proposal to kickstart your project.",
  },
  {
    question: "Is building a custom web application expensive?",
    answer:
      "The cost of a custom web application depends on the project’s scope and features. While it requires investment, it often reduces operational costs, improves efficiency, and creates new revenue channels, offering significant ROI.",
  },
  {
    question: "Will my web application be mobile-friendly?",
    answer:
      "Yes. Our web application services ensure your application is responsive, working seamlessly on desktops, tablets, and mobile devices to reach a broader audience and improve user experience.",
  },
  {
    question: "Can your web applications integrate with existing systems?",
    answer:
      "Yes, our web applications are designed to integrate seamlessly with existing systems like CRMs, ERPs, payment gateways, and third-party APIs. We ensure compatibility to enhance your workflow without disruptions.",
  },
  {
    question: "How do you ensure the security of my web application?",
    answer:
      "We follow best practices, including: Data Encryption: Protecting sensitive information with SSL/TLS; Secure Coding: Preventing vulnerabilities like SQL injection and XSS; Regular Audits: Conducting security assessments to identify and fix risks; Compliance: Adhering to regulations like GDPR, HIPAA, or PCI-DSS as needed.",
  },
  {
    question: "Can I update or add features to my web application later?",
    answer:
      "Yes, our web applications are built with modular architectures, making it easy to add new features or update existing ones as your business evolves.",
  },
  {
    question: "Can a web application help me compete with larger companies?",
    answer:
      "Absolutely! Custom web applications create equal opportunities by automating processes that larger companies manage with large teams. You can provide professional, efficient services that match or exceed customer expectations, often at a fraction of the operational cost.",
  },
  {
    question: "Do you provide training for my team?",
    answer:
      "Yes! We include comprehensive training as part of our web application development service. This covers both end-user training for your team and administrator training for managing the application. We also provide documentation and ongoing support to ensure smooth adoption.",
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

export default function WebAppDevServicePage() {
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
      <WebAppDevPage />
    </>
  );
}
