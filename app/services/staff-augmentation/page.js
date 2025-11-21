import StaffAugmentationPage from "@/features/servicePages/staffAugmentationPage/StaffAugmentationPage";
// Use the StaffAugmentationPage component (file exists at features/servicePages/staffAugmentationPage/StaffAugmentationPage.js)
import { BASE_URL } from "@/lib/utils/baseUrl";
import commonSchemaData from "@/data/commonSchemaData";

// Force SSR for service page
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Top IT Staff Augmentation Company in Dallas | Moltech Solutions Inc.",
  description:
    "Hire vetted developers, DevOps, QA & tech experts fast. Moltech provides flexible IT staff augmentation services to scale your team across the U.S. from Dallas.",
  canonical: `${BASE_URL}/services/staff-augmentation`,
  keywords:
    "staff augmentation, contract developers, scale teams, Moltech Solutions",
  openGraph: {
    title:
      "Top IT Staff Augmentation Company in Dallas | Moltech Solutions Inc.",
    description:
      "Need to scale your dev team quickly? Moltech Solutions offers vetted developers, DevOps, QA & more. On-demand, Dallas-based, and globally backed.",
    url: `${BASE_URL}/services/staff-augmentation`,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/meta/services-og/staff-augmentation-og.webp`,
        alt: "Staff Augmentation Services | Moltech",
        type: "image/webp",
      },
    ],
    site_name: commonSchemaData.companyName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top IT Staff Augmentation Company in Dallas | Moltech Solutions Inc.",
    description:
      "Hire vetted developers, DevOps, QA & tech experts fast. Moltech provides flexible IT staff augmentation services to scale your team across the U.S. from Dallas.",
    images: [`${BASE_URL}/images/meta/services-og/staff-augmentation-og.webp`],
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "staff augmentation services dallas, hire developers in usa, tech staff augmentation company, it staffing dallas, remote developers usa, moltech staff augmentation, software developers on contract, dedicated development team, cloud devops engineers dallas, ui ux designers staff augmentation, project-based developers usa, qa testers on-demand, contract-to-hire developers, it outsourcing dallas texas, hybrid delivery  model it, usa it staff extension, fast team scaling solutions usa",
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
      "@id": `${BASE_URL}/services/staff-augmentation#webpage`,
      url: `${BASE_URL}/services/staff-augmentation`,
      name: "Top IT Staff Augmentation Company in Dallas | Moltech Solutions Inc.",
      description:
        "Hire vetted developers, DevOps, QA & tech experts fast. Moltech provides flexible IT staff augmentation services to scale your team across the U.S. from Dallas.",
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
            name: "Staff Augmentation",
            item: `${BASE_URL}/services/staff-augmentation`,
          },
        ],
      },
      primaryImageOfPage: `${BASE_URL}/images/meta/services-og/staff-augmentation-og.webp`,
      inLanguage: "en-US",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntity: { "@id": `${BASE_URL}/services/staff-augmentation#service` },
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/services/staff-augmentation#service`,
      name: "Top IT Staff Augmentation Company in Dallas | Moltech Solutions Inc.",
      description:
        "Hire vetted developers, DevOps, QA & tech experts fast. Moltech provides flexible IT staff augmentation services to scale your team across the U.S. from Dallas.",
      provider: { "@id": `${BASE_URL}/#organization` },
      brand: { "@id": `${BASE_URL}/#organization` },
      serviceType: "Staff Augmentation",
      areaServed: commonSchemaData.areasServed,
      offers: {
        "@type": "Offer",
        url: `${BASE_URL}/services/staff-augmentation`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dedicated Developer Staffing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "On-Demand Team Extension",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Project-Based Resource Deployment",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Specialized Role Augmentation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hybrid Delivery Model (Onshore + Offshore)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Contract-to-Hire Services",
            },
          },
        ],
      },
    },
  ],
};

const faqData = [
  {
    question: "What is staff augmentation, and how does it work?",
    answer:
      "Staff augmentation is a flexible outsourcing strategy where you hire skilled tech talent on a contract basis to extend your in-house team for a project or a specific period. You maintain direct control over workflows while the augmented staff work as your team members, ensuring faster delivery and reduced hiring overheads.",
  },
  {
    question: "Who should consider using staff augmentation services?",
    answer:
      "Businesses of all sizes can benefit from IT staff augmentation services if they need to: Quickly scale their development team for a project; Access specialized skills not available in-house; Meet tight deadlines without long-term hiring commitments; Reduce costs while maintaining quality delivery. Startups, growing software product companies, and enterprises managing fluctuating workloads find staff augmentation particularly effective.",
  },
  {
    question: "How do I begin with staff augmentation?",
    answer:
      "Consultation: Discuss your needs and requirements. Skill assessment: Define technical and soft skill requirements. Candidate selection: Review pre-screened profiles. Team integration: Onboard selected professionals. Ongoing support: Continuous monitoring and optimization.",
  },
  {
    question:
      "How do you ensure the quality and reliability of augmented staff?",
    answer:
      "Reputable staff augmentation providers use rigorous screening processes, including technical assessments, interviews, and background checks. You can also set clear performance metrics and request replacements if a resource does not meet your expectations.",
  },
  {
    question:
      "What are the common challenges or pain points with staff augmentation?",
    answer:
      "Communication gaps: Integrating external staff may lead to misunderstandings if expectations and roles are not clearly defined. Data security concerns: Sharing sensitive information with third-party professionals requires robust security measures and NDAs. Cultural fit: Ensuring augmented staff align with your company culture and workflow can be challenging without proper onboarding.",
  },
  {
    question:
      "Can I hire remote or distributed teams through staff augmentation?",
    answer:
      "Absolutely. Staff augmentation supports remote, distributed, or hybrid teams, allowing you to tap into global talent and boost productivity without geographical limitations.",
  },
  {
    question: "How are data security and confidentiality handled?",
    answer:
      "Professional staff augmentation companies sign NDAs and follow strict data security protocols to safeguard your sensitive information.",
  },
  {
    question: "What if I'm not satisfied with the performance?",
    answer:
      "Immediate replacement: Within 48 hours for performance issues. No additional costs: Replacement guarantee at no extra charge. Continuous improvement: Regular performance optimization.",
  },
  {
    question:
      "Pain Point: I'm worried about communication and cultural barriers.",
    answer:
      "We provide English-proficient professionals who understand Western business culture and work in your time zone. Our team undergoes cultural training and communication workshops.",
  },
  {
    question:
      "Pain Point: What if the augmented staff doesn't fit our company culture?",
    answer:
      "We conduct thorough cultural fit assessments and offer a replacement guarantee within the first 30 days if the match isn't perfect.",
  },
  {
    question:
      "What types of professionals can I hire through staff augmentation?",
    answer:
      "You can hire a wide range of professionals, including: Software Developers (e.g., Python, Java, React, Node.js, .Net), DevOps Engineers, Data Scientists and Analysts, Cybersecurity Experts, Project Managers, UI/UX Designers, Quality Assurance (QA) Engineers.",
  },
  {
    question: "What are the benefits of staff augmentation?",
    answer:
      "Cost Savings: Reduce expenses related to recruitment, training, and employee benefits. Faster Time-to-Market: Accelerate project timelines by quickly onboarding skilled professionals. Scalability: Adjust team size based on project demands without long-term commitments. Access to Global Talent: Tap into a worldwide pool of experts with diverse skill sets. Focus on Core Business: Free up internal resources to focus on strategic goals while augmented staff handle specialized tasks.",
  },
  {
    question: "How is staff augmentation different from outsourcing?",
    answer:
      "Control: With staff augmentation, you manage the augmented professionals as part of your team, unlike outsourcing, where a third-party vendor controls the workforce. Integration: Augmented staff work directly with your in-house team, ensuring alignment with your company culture and processes. Flexibility: Staff augmentation allows you to scale resources for specific tasks, while outsourcing typically involves handing over entire projects.",
  },
  {
    question: "Can staff augmentation support remote work?",
    answer:
      "Yes, our staff augmentation services support both onsite and remote work models. Our professionals are equipped to collaborate effectively using tools like Slack, Zoom, and Jira, ensuring productivity and communication regardless of location.",
  },
  {
    question: "How quickly can I onboard staff augmentation resources?",
    answer:
      "Once we finalize your requirements, you can typically onboard talent within 5 weeks, ensuring minimal delays in your project timelines.",
  },
  {
    question: "How do you ensure the quality of augmented staff?",
    answer:
      "We carefully vet and onboard experienced professionals, ensuring their skills match your needs. We also provide ongoing support and performance monitoring to ensure consistent delivery quality throughout the engagement.",
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

export default function StaffAugmentationServicePage() {
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
      <StaffAugmentationPage />
    </>
  );
}
