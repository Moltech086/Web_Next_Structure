import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const SingaporeLandAuthorityPortalData = {
  slug: "membership-event-management-web-portal-case-study",
  heroSection: {
    title: "Singapore Land Authority (SLA)",
    HeroImage: AppIcons.SLA1,
    highlight: "Digital Transformation of Land Services",
    description:
      "We developed a scalable, secure web and admin portal for SLA to digitize their membership, bookings, and financial workflows while enhancing citizen and business interaction.",
    location: {
      icon: "mdi:office-building-marker-outline",
      label: "Singapore – Government & Geospatial Services",
    },
    industry: {
      icon: "mdi:map-outline",
      label: "Land Management & Geospatial",
    },
    services: [
      {
        name: "Web Portal Development",
        icon: "mdi:monitor-cellphone",
        href: "/services/custom-software-development",
      },
      {
        name: "Admin Dashboard",
        icon: "mdi:view-dashboard-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Financial Reporting System",
        icon: "mdi:file-chart-outline",
        href: "/services/accounting",
      },
      {
        name: "Zoom API Integration",
        icon: "mdi:video-outline",
        href: "/services/ui-ux-design-and-development",
      },
    ],
    card: {
      mainIcon: "mdi:map-clock-outline",
      lines: ["w-3-5", "w-2-4"],
      iconRow: [
        { icon: "mdi:account-group-outline", bg: "bg-blue" },
        { icon: "mdi:currency-usd", bg: "bg-green" },
        { icon: "mdi:lock-check-outline", bg: "bg-orange" },
      ],
    },
  },
  metaConfig: {
  title:
    "Smart Membership & Event Portal with Booking, GST, Zoom, and Admin Dashboard | Case Study - USA",
  description:
    "Moltech Solutions Inc. (Dallas, USA) delivered a modern membership and event portal featuring event booking, secure payment gateway, Zoom API integration, GST invoicing, credit note management, automated email notifications, user dashboards, CMS, and role-based admin control—built with .NET Core, React, and Next.js.",
  keywords:
    "membership event management system, GST invoicing platform USA, Zoom integrated portal, booking and payment system, React admin dashboard, .NET Core membership app, Dallas portal development company, automated email scheduler platform, CMS for membership sites, secure event booking system",
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  canonical:
    `${BASE_URL}/case-study/membership-event-management-web-portal-case-study`,
  openGraph: {
    title:
      "Smart Membership & Event Portal with Booking, GST, Zoom, and Admin Dashboard | Case Study - USA",
    description:
      "We developed a feature-rich membership and event platform for a national organization—featuring Zoom integration, booking cart, GST financial tracking, CMS, and secure access controls.",
    type: "website",
    url: `${BASE_URL}/case-study/membership-event-management-web-portal-case-study`,
    image:
      `${BASE_URL}/images/meta/membership-event-sla-og.webp`,
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Smart Membership & Event Portal with Booking, GST, Zoom, and Admin Dashboard | Case Study - USA",
    description:
      "Built by Moltech (Dallas), this scalable portal includes Zoom-based event booking, GST tracking, credit notes, CMS, and approval workflows with secure role-based access.",
    image:
      `${BASE_URL}/images/meta/membership-event-sla-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},
  projectDetails: {
    description:
      "We built a user-centric web application and robust admin backend for SLA, enabling efficient membership management, booking processes, and resource management while providing SLA with detailed financial reporting and operational oversight through a structured, scalable portal.",
  },
  aboutSection: {
    description1:
      "The Singapore Land Authority (SLA) is a statutory board under the Ministry of Law, managing Singapore’s state land and properties while developing innovative geospatial and land administration systems. With a mission to optimize land resources for Singapore’s social and economic growth, SLA champions geospatial innovation through initiatives like OneMap and Virtual Singapore, fostering cross-sector digital solutions for land and property management.",
    description2:
      "We partnered with Flying Cape Technologies to deliver a comprehensive web and admin application for SLA, supporting their initiatives to digitize and streamline land-related services for citizens, businesses, and internal administrative workflows.",
    industry: "Government, Geospatial Services",
    projectType: "Web & Admin Portal Development",
    technologies: [
      {
        name: ".NET Core API",
        icon: "devicon:dotnetcore",
        description:
          "Secure and scalable API layer for business logic and integrations.",
      },
      {
        name: "Next.js",
        icon: "skill-icons:nextjs-light",
        description:
          "Modern React-based framework for high-performance web applications.",
      },
      {
        name: "React.js",
        icon: "vscode-icons:file-type-reactjs",
        description:
          "Component-based library for building responsive admin interfaces.",
      },
      {
        name: "MS SQL Server",
        icon: "devicon:microsoftsqlserver-wordmark",
        description:
          "Robust data storage solution with advanced querying and reporting.",
      },
      {
        name: "HTML",
        icon: "mdi:language-html5",
        description: "Markup language used for structuring content on the web.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Style sheet language for designing visually engaging pages.",
      },
      {
        name: "Bootstrap",
        icon: "skill-icons:bootstrap",
        description: "Popular CSS framework for responsive, mobile-first UI.",
      },
      {
        name: "JavaScript",
        icon: "skill-icons:javascript",
        description: "Core language for dynamic and interactive web content.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript for scalable application code.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description:
          "Legacy JavaScript library for DOM manipulation and events.",
      },
      {
        name: "AWS Amplify",
        icon: "skill-icons:aws-dark",
        description:
          "Cloud-based web hosting and CI/CD for frontend applications.",
      },
      {
        name: "AWS EC2 with IIS",
        icon: "logos:aws-ec2",
        description:
          "Scalable virtual server for hosting backend APIs securely.",
      },
      {
        name: "Role-Based Access Control",
        icon: "mdi:account-lock-outline",
        description: "Secure user access with permission-based roles.",
      },
      {
        name: "Payment Gateway Integration",
        icon: "mdi:credit-card-outline",
        description:
          "Enables secure online payment processing in the platform.",
      },
      {
        name: "Google Captcha",
        icon: "logos:recaptcha",
        description: "Bot protection to secure user interactions and forms.",
      },
      {
        name: "Zoom API Integration",
        icon: "bxl:zoom",
        description: "Enables automated Zoom meeting creation and management.",
      },
      {
        name: "Email Scheduler",
        icon: "mdi:email-send-outline",
        description:
          "Automated email notifications triggered by system events.",
      },
      {
        name: "Distributed & Repository Pattern",
        icon: "mdi:source-branch",
        description:
          "Architectural patterns ensuring maintainability and scalability.",
      },
    ],
  },
  majorFeatures: {
    "features": [
      {
        "title": "Membership Sign-Up + Approval Workflow",
        "description": "Users register and admins approve memberships via a structured process.",
        "icon": "mdi:account-check-outline"
      },
      {
        "title": "Booking System with Secure Payments",
        "description": "Users can book events and pay via integrated gateway with invoice tracking.",
        "icon": "mdi:calendar-check-outline"
      },
      {
        "title": "User Profile & Dashboard",
        "description": "Manage user profiles and personalized dashboards for better engagement.",
        "icon": "mdi:account-circle-outline"
      },
      {
        "title": "Cart Functionality",
        "description": "Users can add multiple events or services to cart and proceed to checkout securely.",
        "icon": "mdi:cart-outline"
      },
      {
        "title": "Organization Profile Management",
        "description": "Manage organization details and settings efficiently within the portal.",
        "icon": "mdi:domain"
      },
      {
        "title": "Google Captcha Integration",
        "description": "Protects the platform from bot sign-ups and spam.",
        "icon": "mdi:shield-check"
      },
      {
        "title": "Admin Dashboard with CMS & Management",
        "description": "Admins can manage pages, CMS, entries, banners, master fields, and resources from one dashboard.",
        "icon": "mdi:monitor-dashboard"
      },
      {
        "title": "Membership & Booking Management with Approval Workflow",
        "description": "Streamlines membership approvals and booking processes with role-based authorization.",
        "icon": "mdi:account-check"
      },
      {
        "title": "Email Scheduler for Automated Notifications",
        "description": "Automates sending of emails to users and administrators based on events and triggers.",
        "icon": "mdi:email-clock-outline"
      },
      {
        "title": "Financial Management & Reporting",
        "description": "Handles GST, credit notes, invoices, vouchers, transaction and deferred income reports, plus payment reconciliation.",
        "icon": "mdi:file-certificate-outline"
      },
      {
        "title": "Collaboration Portal & SLA Reporting",
        "description": "Facilitates team collaboration and generates SLA-related reports.",
        "icon": "mdi:clipboard-list"
      },
      {
        "title": "Zoom API Integration",
        "description": "Supports online events and webinars via Zoom integration.",
        "icon": "mdi:video-outline"
      }
    ]
  },
  challengeSolution: {
    "challenges": [
    {
      "title": "Manual Membership Approvals",
      "desc": "Manual workflows for membership approvals and booking management slowed operations.",
      "icon": "mdi:account-clock"
    },
    {
      "title": "Content & Resource Management",
      "desc": "Managing content and resources across SLA's services was challenging.",
      "icon": "mdi:folder-multiple"
    },
    {
      "title": "Complex Financial Tracking",
      "desc": "Financial tracking, including GST, credit notes, and reconciliation, needed digital streamlining.",
      "icon": "mdi:bank-off-outline"
    },
    {
      "title": "Lack of Centralized Collaboration",
      "desc": "There was a deficiency in a centralized platform for collaboration on internal reporting and workflows.",
      "icon": "mdi:web-off"
    }
  ],
  "solutions": [
    {
      "title": "Responsive Web Application",
      "desc": "Developed a clean, responsive web application to facilitate user interactions and bookings.",
      "icon": "mdi:web-box"
    },
    {
      "title": "Feature-rich Admin Portal",
      "desc": "Built an admin portal for managing content, resources, memberships, and financial operations.",
      "icon": "mdi:account-cog"
    },
    {
      "title": "Integrated Financial Management",
      "desc": "Integrated GST, credit notes, invoice handling, and reconciliation into one streamlined system.",
      "icon": "mdi:currency-inr"
    },
    {
      "title": "Collaboration & Reporting Portal",
      "desc": "Provided SLA teams with collaboration tools including report generation capabilities.",
      "icon": "mdi:clipboard-list"
    },
    {
      "title": "Approval Workflow & Role-based Access",
      "desc": "Implemented membership and booking approval workflows with role-based authorization.",
      "icon": "mdi:account-check"
    },
    {
      "title": "Security & Communication Integrations",
      "desc": "Integrated Google Captcha for security, Zoom API for online events, and an email scheduler for automated notifications.",
      "icon": "mdi:shield-check"
    }
  ]
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SLA",
        image: AppIcons.SLA1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "SLA",
        image: AppIcons.SLA2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "SLA",
        image: AppIcons.SLA3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SLA",
        image: AppIcons.SLA4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SLA",
        image: AppIcons.SLA5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SLA",
        image: AppIcons.SLA6,
      },
      {
        id: 7,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SLA",
        image: AppIcons.SLA7,
      },
      {
        id: 8,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "SLA",
        image: AppIcons.SLA8,
      },
      {
        id: 9,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "SLA",
        image: AppIcons.SLA9,
      },
      {
        id: 10,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SLA",
        image: AppIcons.SLA10,
      },
      {
        id: 11,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SLA",
        image: AppIcons.SLA11,
      },
      {
        id: 12,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SLA",
        image: AppIcons.SLA12,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "We are very happy Moltech customers! Apart from their technical expertise and professionalism, Nigam and team have been extremely reliable and dedicated throughout. I would highly recommend their services with confidence.",
    author: "Jamie Tan",
    title: "CEO at Flying Cape Organization",
  },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The platform streamlined operations, empowered members, and supported SLA’s long-term digital vision.",
  values: [
    {
      title: "Digitised Membership & Event Workflows",
      description:
        "Moved manual processes online, enabling faster registration, approvals, and event coordination.",
      icon: "mdi:account-multiple-outline",
    },
    {
      title: "Automated Financial Tracking & Approvals",
      description:
        "Integrated finance tools simplified dues collection, expense approvals, and reporting workflows.",
      icon: "mdi:cash-check",
    },
    {
      title: "Enhanced User Engagement",
      description:
        "Secure login, personalized dashboards, and seamless access boosted member satisfaction and retention.",
      icon: "mdi:shield-account-outline",
    },
    {
      title: "Scalable Platform Aligned with SLA’s Mission",
      description:
        "Future-ready architecture supported SLA’s evolving goals while maintaining performance and security.",
      icon: "mdi:rocket-launch-outline",
    },
  ],
}
,
};

export default SingaporeLandAuthorityPortalData;
