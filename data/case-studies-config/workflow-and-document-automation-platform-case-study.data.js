import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const LDCData = {
  slug: "workflow-and-document-automation-platform-case-study",
  heroSection: {
    title: "Laborers District Council (LDC)",
    HeroImage: AppIcons.lDC1,
    highlight: "Workflow & Reporting Portal",
    description:
      "A secure, centralized system developed for LDC to manage employers, associations, audits, and workforce contracts with detailed reporting and role-based access control.",
    location: {
      icon: "mdi:map-marker-outline",
      label: "Philadelphia, USA",
    },
    industry: {
      icon: "mdi:account-hard-hat-outline",
      label: "Labor Unions & Workforce Management",
    },
    services: [
      {
        name: "Workflow Automation",
        icon: "mdi:cogs",
        href: "/services/custom-software-development",
      },
      {
        name: "Employer & Contract Management",
        icon: "mdi:briefcase-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Detailed Reporting",
        icon: "mdi:file-chart-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Role-Based Access Control",
        icon: "mdi:shield-key-outline",
        href: "/services/web-application-development",
      },
    ],
    card: {
      mainIcon: "mdi:account-hard-hat",
      lines: ["w-4-5", "w-3-4"],
      iconRow: [
        { icon: "mdi:account-group-outline", bg: "bg-blue" },
        { icon: "mdi:file-document-edit-outline", bg: "bg-yellow" },
        { icon: "mdi:shield-check-outline", bg: "bg-green" },
      ],
    },
  },
metaConfig: {
  title: "Workflow and Document Management System with Approvals, Role-Based Access, and Audit Trails",
  description:
    "Streamline operations with a secure workflow management platform. Built for labor unions and membership bodies. Powered by .NET Core & React from Dallas, USA.",
  keywords:
    "project management software, team collaboration tool, timesheet tracker, React project portal, .NET Core app, Dallas software company, USA tech partner",
  canonical:
    `${BASE_URL}/case-study/workflow-and-document-automation-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Workflow Automation Platform for Labor & Membership Groups",
    description:
      "Secure document and workflow management solution for unions and organizations. Built using .NET Core & React in Dallas, USA.",
    url: `${BASE_URL}/case-study/workflow-and-document-automation-platform-case-study`,
    image:
      `${BASE_URL}/images/meta/workflow-automation-og.webp`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow Automation Platform for Labor & Membership Groups",
    description:
      "Secure document and workflow automation solution for unions and membership-based organizations. Developed using .NET Core and React in Dallas.",
    image:
      `${BASE_URL}/images/meta/workflow-automation-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}

,
  projectDetails: {
    description:
      "To modernize and streamline their internal workflows, LDC required a secure, centralized system for managing employers, associations, contracts, and operational reports. We developed a comprehensive workflow management portal for LDC to handle administrative processes efficiently while maintaining strict access controls.",
  },
  aboutSection: {
    description1:
      "The Laborers District Council (LDC) of the Metropolitan Area of Philadelphia and Vicinity assists its membership in securing employment, defending their rights, and advancing their interests as working men and women. Through education and cooperation, LDC empowers its members to achieve their rightful place in society.",

    industry: "Labor Unions, Workforce",
    projectType: "Workflow Management & Reporting Portal",
    technologies: [
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Frontend developed using React.js for a fast, dynamic UI experience.",
      },
      {
        name: ".NET Core API",
        icon: "logos:dotnet",
        description:
          "Backend services powered by .NET Core API for scalable and efficient server-side logic.",
      },
      {
        name: "SQL Server",
        icon: "logos:mysql",
        description:
          "Structured relational database for storing and managing business-critical data.",
      },
      {
        name: "REST API Development",
        icon: "mdi:api",
        description:
          "RESTful APIs built for seamless communication between frontend and backend modules.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Markup language used to structure content on the web.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Stylesheet language for designing visually engaging user interfaces.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Framework for building responsive, mobile-first user interfaces quickly.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Core scripting language for adding interactivity to web applications.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Superset of JavaScript providing static type checking and advanced tooling.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description:
          "Simplified DOM manipulation and AJAX calls for enhanced browser compatibility.",
      },
      // {
      //   name: "Role-Based Authentication & Authorization",
      //   icon: "mdi:shield-lock-outline",
      //   description: "Secure login system with fine-grained role-based access controls.",
      // },
      // {
      //   name: "Modular Architecture",
      //   icon: "mdi:layers-triple-outline",
      //   description: "Scalable, maintainable modular structure using distributed services and repository pattern.",
      // }
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Employer Management",
        description:
          "Add, update, delete, and search employers. Manage bankruptcy, audits, bonds, cancellations, comments, contracts, and association assignments.",
        icon: "mdi:account-tie-outline",
      },
      {
        title: "Contracts Management",
        description:
          "Search, add, edit, and delete project contracts. Assign contracts to employers and link crafts, locals, and work types.",
        icon: "mdi:file-document-edit-outline",
      },
      {
        title: "Associations Management",
        description:
          "Add, edit, and delete associations, including date-controlled assignments to employers and contracts.",
        icon: "mdi:account-group-outline",
      },
      {
        title: "Advanced Reporting",
        description:
          "Generate and download structured reports like employer lists, contractor crafts, demographics, bonds, and unsigned data.",
        icon: "mdi:file-chart-outline",
      },
      {
        title: "Security Management",
        description:
          "Manage users, assign security groups, define permissions, reset passwords, and control group access settings.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "Utilities Management",
        description:
          "Administer lookup tables including crafts, locals, employer types, contractor work types, and contract types.",
        icon: "mdi:tools",
      },
      {
        title: "Authentication & Authorization",
        description:
          "Secure, role-based access control enforced across all modules to ensure compliance and data protection.",
        icon: "mdi:lock-check-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Lack of Centralized System",
        desc: "The absence of centralized, secure systems for managing audits, associations, and bonds presented a challenge.",
        icon: "mdi:file-cancel-outline",
      },
      {
        title: "Reporting Limitations",
        desc: "The organization required structured, downloadable reports to gain operational insights.",
        icon: "mdi:file-chart-outline",
      },
      {
        title: "Complex Role Access Needs",
        desc: "The organization required fine-grained, role-based access control.",
        icon: "mdi:shield-account-outline",
      },
    ],
    solutions: [
      {
        title: "Secure Workflow Portal",
        desc: "Developed a secure, modular workflow management portal for end-to-end administrative management.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Operational Reporting Tools",
        desc: "Integrated comprehensive reporting tools for operational insights and compliance.",
        icon: "mdi:chart-box-outline",
      },
      {
        title: "Advanced Role Access Control",
        desc: "Implemented robust role-based access control and user management for security.",
        icon: "mdi:account-lock-outline",
      },
      {
        title: "Structured Data Management",
        desc: "Enabled structured data management for employers, contracts, and associations.",
        icon: "mdi:database-outline",
      },
      {
        title: "Admin Process Automation",
        desc: "Streamlined administrative processes, reducing manual overhead for LDC staff.",
        icon: "mdi:robot-outline",
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
        image: AppIcons.lDC1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "lDC",
        image: AppIcons.lDC2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "lDC",
        image: AppIcons.lDC3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "lDC",
        image: AppIcons.lDC4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "lDC",
        image: AppIcons.lDC5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "lDC",
        image: AppIcons.lDC6,
      },
      {
  id: 7,
  title: "SEO Optimized Content",
  description: "Structured content aligned with SEO best practices.",
  category: "lDC",
  image: AppIcons.lDC7,
},
{
  id: 8,
  title: "Interactive Elements",
  description: "Engaging animations and smooth transitions for better user interaction.",
  category: "lDC",
  image: AppIcons.lDC8,
},
{
  id: 9,
  title: "Client Testimonial Section",
  description: "Build trust with real client feedback and reviews.",
  category: "lDC",
  image: AppIcons.lDC9,
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
    "The platform automated complex workflows, strengthened security, and enabled smarter operations with real-time data insights.",
  values: [
    {
      title: "Streamlined Workflow Management",
      description: "Automated task coordination, approvals, and processes across departments.",
      icon: "mdi:flowchart",
    },
    {
      title: "Data-Driven Operations",
      description: "Real-time analytics enabled better planning, monitoring, and performance tuning.",
      icon: "mdi:chart-box-outline",
    },
    {
      title: "Enhanced Security Compliance",
      description: "Enforced access controls, audit trails, and data protection policies to meet compliance standards.",
      icon: "mdi:shield-lock-outline",
    },
  ],
}
,
};
export default LDCData;
