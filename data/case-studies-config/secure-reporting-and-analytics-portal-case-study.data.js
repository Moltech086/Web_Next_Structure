import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const BrownAndBrownData = {

  slug: "secure-reporting-and-analytics-portal-case-study",
  heroSection: {
    title: "Brown & Brown Portal",
    HeroImage: AppIcons.BrownAndBrown1,
    highlight: "Valuation & Report Generation Platform",
    description:
      "In partnership with BrightLogic Inc., we developed a valuation report generation system for Brown & Brown, streamlining liability data imports, plan configuration, and automated Word-based report creation for the insurance and finance sectors.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "USA – Insurance & Financial Services",
    },
    industry: {
      icon: "mdi:finance",
      label: "Insurance, Risk & Finance",
    },
    services: [
      {
        name: "Report Automation",
        icon: "mdi:file-document-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "XML/CSV Import & Validation",
        icon: "mdi:file-table-box-outline",
        href: "/services/data-preprocessing-and-cleaning",
      },
      {
        name: "Calculation Engine",
        icon: "mdi:calculator-variant",
        href: "/services/custom-software-development",
      },
      {
        name: "Word Merge Templates",
        icon: "mdi:file-word-box-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Admin Portal with Role Control",
        icon: "mdi:shield-account-outline",
        href: "/services/web-application-development",
      },
    ],
    card: {
      mainIcon: "mdi:file-chart-outline",
      lines: ["w-4-5", "w-3-4"],
      iconRow: [
        { icon: "mdi:xml", bg: "bg-blue" },
        { icon: "mdi:file-word-box-outline", bg: "bg-indigo" },
        { icon: "mdi:calculator", bg: "bg-teal" },
      ],
    },
  },
  metaConfig: {
  title:
    "Secure Reporting & Analytics Portal for Insurance Valuations | Custom .NET & React Case Study USA",
  description:
    "insurance reporting platform, secure analytics dashboard, .NET Core solution, valuation automation, report generation portal, Dallas tech company",
  keywords:
    "insurance reporting platform, secure reporting system, insurance analytics dashboard, .NET Core reporting solution, finance valuation automation, report generation portal, insurance software USA, legacy system modernization, Dallas tech company, React reporting portal",
  canonical:
    `${BASE_URL}/case-study/secure-reporting-and-analytics-portal-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Secure Reporting & Analytics Portal for Insurance Valuations | Custom .NET & React Case Study USA",
    description:
      "See how Moltech Solutions transformed a legacy system into a secure, web-based reporting and analytics portal for a major insurance firm using React and .NET Core.",
    url:
      `${BASE_URL}/case-study/secure-reporting-and-analytics-portal-case-study`,
    image:
      `${BASE_URL}/images/meta/reporting-portal-og.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Secure Reporting & Analytics Portal for Insurance Valuations | Case Study",
    description:
      "Learn how Moltech Solutions built a modular insurance reporting platform with secure data imports, document merging, and role-based access.",
    image:
      `${BASE_URL}/images/meta/reporting-portal-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We developed a robust, feature-rich portal that enables administrators and analysts at Brown & Brown to manage clients and their plans, import large liability data files, configure reusable templates, perform automated calculations, and generate structured Word-based reports. The system also provides a secure, role-based admin environment for managing report types, valuation fields, calculation rules, and document templates with integrated data validation and calculation features.",
  },
  aboutSection: {
    description1:
      "Brown & Brown is a leading insurance brokerage and risk management firm providing a wide range of insurance and reinsurance products and services across various sectors. To enhance operational efficiency and valuation reporting, Brown & Brown required a scalable, modular system to handle complex client plans and structured report generation workflows.",
    description2:
      "We worked on this project in collaboration with BrightLogic Inc. (USA) to build a comprehensive web-based report generation and valuation management portal for Brown & Brown, enabling the team to automate, manage, and deliver client-specific valuation reports efficiently.",
    industry: "Insurance, Finance, Reporting",
    projectType: "Web-Based Valuation & Reporting Platform",
    technologies: [
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Modern frontend framework for building dynamic and responsive UIs.",
      },
      {
        name: ".NET Core API",
        icon: "logos:dotnet",
        description:
          "Backend services built using scalable and secure .NET Core APIs.",
      },
      {
        name: "SQL Server",
        icon: "logos:mysql",
        description:
          "Relational database for structured data storage and complex querying.",
      },
      {
        name: "REST API Development",
        icon: "mdi:api",
        description:
          "Seamless data communication between frontend and backend using RESTful APIs.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description:
          "Markup language for structuring and presenting web content.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Style sheet language for designing visually appealing interfaces.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Framework for building responsive and mobile-first web designs.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Versatile scripting language for implementing client-side logic.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript enabling better tooling and maintainability.",
      },
      {
        name: "jQuery",
        icon: "logos:jquery",
        description:
          "Lightweight JavaScript library for DOM manipulation and AJAX functionality.",
      },
      // {
      //   name: "Role-Based Authentication & Authorization",
      //   icon: "mdi:shield-lock-outline",
      //   description:
      //     "Fine-grained access control and secure login across user roles.",
      // },
      // {
      //   name: "XML and CSV Data Import Handling",
      //   icon: "mdi:file-delimited-outline",
      //   description:
      //     "Support for structured data imports using XML and CSV formats.",
      // },
      // {
      //   name: "XSD Schema Validation",
      //   icon: "mdi:file-code-outline",
      //   description:
      //     "Enforces strict XML structure using XSD-based validation during import.",
      // },
      // {
      //   name: "Word Document Merge",
      //   icon: "mdi:file-word-outline",
      //   description:
      //     "Dynamic generation of branded client documents through Word merge templates.",
      // },
      // {
      //   name: "Modular Architecture with Repository Pattern",
      //   icon: "mdi:layers-triple-outline",
      //   description:
      //     "Clean and scalable architecture built with a modular, maintainable structure.",
      // },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Client & Plan Management",
        description:
          "Manage clients and associated valuation plans. Configure plan structures, define reported sets, and reuse prior valuation data.",
        icon: "mdi:briefcase-outline",
      },
      {
        title: "Data Import & Processing",
        description:
          "Import liability data via XML/CSV with validation against XSD templates. Perform dynamic calculations based on configured fields.",
        icon: "mdi:file-code-outline",
      },
      {
        title: "Report Generation",
        description:
          "Generate automated Word reports using merge templates and rules-driven valuation logic with configurable fields.",
        icon: "mdi:file-word-box-outline",
      },
      {
        title: "Admin Module",
        description:
          "Role-based user authentication with administrative control over basis types, liability types, report types, and field configurations.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "Template Management",
        description:
          "Upload and manage report templates, XSDs, XML field assignments, and extraction rules for dynamic document generation.",
        icon: "mdi:file-cog-outline",
      },
      {
        title: "Authentication & Authorization",
        description:
          "Enforce secure access across modules using granular, role-based permissions for both users and administrators.",
        icon: "mdi:lock-check-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Complex Data Import Handling",
        desc: "Complex XML/CSV liability data imports need to be handled automatically.",
        icon: "mdi:file-upload-outline",
      },
      {
        title: "Manual Word Report Creation",
        desc: "The creation of Word reports required the use of reusable, configurable templates.",
        icon: "mdi:file-word-outline",
      },
      {
        title: "Advanced Access Control Needs",
        desc: "Advanced role-based access control was necessary to ensure secure management.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "Valuation-Based Calculations",
        desc: "Complex calculation requirements were connected to the valuation processes.",
        icon: "mdi:calculator-variant-outline",
      },
    ],
    solutions: [
      {
        title: "Modular Web Portal Architecture",
        desc: "Built a modular, scalable web portal with reusable architecture.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Validated Data Import System",
        desc: "Integrated XML/CSV data import with validation via XSD schema.",
        icon: "mdi:file-check-outline",
      },
      {
        title: "Automated Word Report Generation",
        desc: "Automated Word report generation using document merge templates.",
        icon: "mdi:file-word-box-outline",
      },
      {
        title: "Dynamic Valuation Calculations",
        desc: "Enabled dynamic calculation management tied to valuation plans.",
        icon: "mdi:chart-line-variant",
      },
      {
        title: "Secure Role-Based Access",
        desc: "Implemented role-based authentication and authorization for security.",
        icon: "mdi:account-lock-outline",
      },
      {
        title: "Robust Admin Field Management",
        desc: "Built robust admin modules for the master field, valuation field, and report type.",
        icon: "mdi:form-select",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "BrownAndBrown",
        image: AppIcons.BrownAndBrown1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "BrownAndBrown",
        image: AppIcons.BrownAndBrown2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "BrownAndBrown",
        image: AppIcons.BrownAndBrown3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "BrownAndBrown",
        image: AppIcons.BrownAndBrown4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "BrownAndBrown",
        image: AppIcons.BrownAndBrown5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "BrownAndBrown",
        image: AppIcons.BrownAndBrown6,
      },
      {
        id: 7,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "BrownAndBrown",
        image: AppIcons.BrownAndBrown7,
      },
      {
        id: 8,
        title: "Interactive Elements",
        description:
          "Enhanced user experience with animations and hover effects.",
        category: "BrownAndBrown",
        image: AppIcons.BrownAndBrown8,
      },
      {
        id: 9,
        title: "Client Testimonials",
        description:
          "Highlighted client feedback to build credibility and trust.",
        category: "BrownAndBrown",
        image: AppIcons.BrownAndBrown9,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "I’ve had the pleasure of working with Nigam since 2005 across a number of projects and client accounts. Over the years, Nigam and his development team have consistently delivered outstanding work across a wide range of technologies. Their depth of expertise, attention to detail, and commitment to client success have always stood out.",
    author: "Carl Auwarter",
    title: "USA",
  },
  resultsSection: {
    title: "Business Values Provided",
    description:
      "The platform improved efficiency, accuracy, and control over reporting and valuation workflows.",
    values: [
      {
        title: "Automated Report Generation",
        description:
          "Reduced manual effort by generating reports on-demand or via scheduled tasks.",
        icon: "mdi:file-chart-outline",
      },
      {
        title: "Streamlined Data Imports",
        description:
          "Easily ingested bulk data from various sources with validation and mapping.",
        icon: "mdi:database-import",
      },
      {
        title: "Configurable Valuations Management",
        description:
          "Offered flexible controls to manage asset types, rules, and calculation logic.",
        icon: "mdi:scale-balance",
      },
    ],
  },
};

export default BrownAndBrownData;
