import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const AispMembershipPlatformData = {
  slug: "membership-management-platform-admin-portal-case-study",
  heroSection: {
    title: "Association of Information Security Professionals (AISP)",
    HeroImage: AppIcons.AISP1,
    highlight: "Secure Digital Membership Platform",
    description:
      "We partnered with Flying Cape Technologies to develop a full-fledged membership and admin portal for AiSP, enabling seamless member onboarding, renewals, communication, and financial management.",
    location: {
      icon: "mdi:office-building-marker-outline",
      label: "Singapore – Cybersecurity & Membership Association",
    },
    industry: {
      icon: "mdi:shield-account-outline",
      label: "Professional Cybersecurity Association",
    },
    services: [
      {
        name: "Membership Portal",
        icon: "mdi:account-multiple-check-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Admin Platform",
        icon: "mdi:view-dashboard-outline",
        href: "/services/web-application-development",
      },
      {
        name: "EDM & Email Campaign System",
        icon: "mdi:email-fast-outline",
        href: "/services/ui-ux-design-and-development",
      },
      {
        name: "Payment Reconciliation",
        icon: "mdi:file-document-check-outline",
        href: "/services/accounting",
      },
    ],
    card: {
      mainIcon: "mdi:shield-lock-outline",
      lines: ["w-3-4", "w-2-3"],
      iconRow: [
        { icon: "mdi:credit-card-check", bg: "bg-green" },
        { icon: "mdi:email-outline", bg: "bg-blue" },
        { icon: "mdi:account-multiple-plus", bg: "bg-purple" },
      ],
    },
  },
  metaConfig: {
  title:
    "Multi-Tier Membership Platform with Admin Tools, EDM & Payment Automation | Case Study - USA",
  description:
    "Built a modern membership platform with admin tools, EDM, PayPal payments, and automated reconciliation—tailored for associations and professional networks.",
  keywords:
    "membership management platform USA, admin dashboard for associations, React membership portal, professional body web portal, PayPal integration for renewals, multi-tier membership system, EDM campaign tool, financial tracking web app, USA nonprofit portal, Dallas full-stack development, automated membership platform",
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  canonical:
    `${BASE_URL}/case-study/membership-management-platform-admin-portal-case-study`,
  openGraph: {
    title:
      "Multi-Tier Membership Platform with Admin Tools, EDM & Payment Automation | Case Study - USA",
    description:
      "Discover how we built a dynamic membership and admin system with payment automation, EDM campaigns, and financial tracking using .NET Core, React, and Next.js.",
    type: "website",
    url: `${BASE_URL}/case-study/membership-management-platform-admin-portal-case-study`,
    image:
      `${BASE_URL}/images/meta/membership-admin-platform-og.webp`,
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Multi-Tier Membership Platform with Admin Tools, EDM & Payment Automation | Case Study - USA",
    description:
      "Built by Moltech Solutions (Dallas), this secure platform features membership tiering, payment reconciliation, EDM campaigns, and admin workflows for professional associations.",
    image:
      `${BASE_URL}/images/meta/membership-admin-platform-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We built a comprehensive membership management platform that supports multiple membership types (Corporate, Individual, Academic), payment processing, and member communications. The platform enables AiSP to onboard new members, manage renewals, reconcile payments, and run EDM campaigns while allowing customers to manage their profiles and participate in community activities.",
  },
  aboutSection: {
    description1:
      "In partnership with Flying Cape Technologies, we developed a membership portal and admin management system for AiSP, empowering their team to manage memberships, events, and communications efficiently while providing members with a seamless digital experience.",
    description2:
      "From member sign-up to event bookings and payment tracking, the new platform enhances the experience for both administrators and members, enabling AiSP to support its mission of building Singapore’s cybersecurity ecosystem.",
    industry: "Cybersecurity Association",
    projectType: "Membership Portal & Admin Platform",
    technologies: [
      {
        name: ".NET Core API",
        icon: "logos:dotnet",
        description:
          "Secure and scalable backend for membership and financial workflows.",
      },
      {
        name: "React.js",
        icon: "logos:react",
        description: "Frontend library for building dynamic user interfaces.",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description:
          "React-based framework for server-rendered web applications.",
      },
      {
        name: "MS SQL Server",
        icon: "devicon:microsoftsqlserver-wordmark",
        description:
          "Reliable relational database for member and transaction records.",
      },
      {
        name: "AWS Amplify",
        icon: "material-icon-theme:amplify",
        description: "Web hosting and CI/CD platform for frontend apps.",
      },
      {
        name: "AWS EC2",
        icon: "logos:aws-ec2",
        description: "Scalable compute service for API and backend hosting.",
      },
      {
        name: "IIS (Internet Information Services)",
        icon: "mdi:server",
        description: "Windows-based web server for hosting ASP.NET Core APIs.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Standard markup language for structuring web content.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description: "Style sheet language for designing responsive UI.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description: "CSS framework for developing mobile-first websites.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Programming language for building dynamic web functionality.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript that compiles to plain JavaScript.",
      },
      {
        name: "jQuery",
        icon: "logos:jquery",
        description:
          "Lightweight JavaScript library for simplified DOM manipulation.",
      },
      // {
      //   name: "Role-Based Access Control",
      //   icon: "mdi:account-lock-outline",
      //   description:
      //     "Authorization system to control feature access by user roles.",
      // },
      {
        name: "PayPal Integration",
        icon: "logos:paypal",
        description:
          "Secure online payment gateway integration for transactions.",
      },
      {
        name: "Email Scheduler",
        icon: "arcticons:smsscheduler",
        description:
          "System for sending scheduled email notifications automatically.",
      },
      // {
      //   name: "Repository & Distributed Architecture",
      //   icon: "mdi:source-repository-multiple",
      //   description:
      //     "Maintainable codebase and scalable backend using modern architecture patterns.",
      // },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "User Dashboard & Membership Management",
        description:
          "Users can log in, submit forms, manage profiles, and track membership information.",
        icon: "mdi:account-circle-outline",
      },
      {
        title: "Community Engagement & Event Participation",
        description:
          "Enables users to book events, participate in communities, and view related content.",
        icon: "mdi:calendar-account",
      },
      {
        title: "Financial Records Access",
        description:
          "Users can view and download invoices and receipts tied to their membership.",
        icon: "mdi:file-document-outline",
      },
      {
        title: "Admin Dashboard & Account Control",
        description:
          "Admins can manage dashboards, control user accounts, and oversee system operations.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Membership Tier Management",
        description:
          "Supports Corporate, Academic, and Individual tiers with custom pricing and workflows.",
        icon: "mdi:account-group-outline",
      },
      {
        title: "Email Campaign Management",
        description:
          "Admins can manage and send EDMs to members and non-members, with custom templates.",
        icon: "mdi:email-fast-outline",
      },
      {
        title: "Payment & Finance Management",
        description:
          "Includes payment reconciliation, invoice extraction, and transaction reporting.",
        icon: "mdi:currency-usd-circle-outline",
      },
      {
        title: "Dynamic Field Maintenance",
        description:
          "Admin tools for updating dropdowns, templates, and structured content fields.",
        icon: "mdi:form-select",
      },
      {
        title: "Informational Pages Management",
        description:
          "List and manage structured informational content as per AiSP-defined structure.",
        icon: "mdi:file-document-box-multiple-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Manual Processing & Renewals",
        desc: "Manual handling of membership forms and renewals created inefficiencies and delays.",
        icon: "mdi:file-document-alert-outline",
      },
      {
        title: "Tier Complexity",
        desc: "Complex membership tiers (Corporate, Academic, Individual) required structured and flexible digital workflows.",
        icon: "mdi:layers-triple-outline",
      },
      {
        title: "Disconnected Communication",
        desc: "Lack of integrated EDM tools made event and communication management inefficient.",
        icon: "mdi:email-off-outline",
      },
      {
        title: "Payment & Financial Tracking",
        desc: "Manual reconciliation and lack of automated reporting slowed down financial processes.",
        icon: "mdi:bank-transfer-out",
      },
      {
        title: "Scalable Community Platform",
        desc: "Needed a secure, scalable system to engage and manage a growing membership base.",
        icon: "mdi:account-group-outline",
      },
    ],
    solutions: [
      {
        title: "Responsive Membership Web Portal",
        desc: "Developed a portal with online forms, member login, and community interaction features.",
        icon: "mdi:web",
      },
      {
        title: "Tier-Based Admin Tools",
        desc: "Built admin modules to manage accounts and workflows for Corporate, Academic, and Individual tiers.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "Integrated Payment Gateway",
        desc: "Enabled seamless payments and renewals through a secure online gateway.",
        icon: "mdi:credit-card-check-outline",
      },
      {
        title: "EDM Campaign & Email Management",
        desc: "Built an integrated EDM system to schedule, manage, and track email campaigns.",
        icon: "mdi:email-sync-outline",
      },
      {
        title: "Automated Finance Dashboard",
        desc: "Implemented automated invoice extraction, reconciliation, and financial reporting.",
        icon: "mdi:cash-check",
      },
      {
        title: "Dynamic Field & Template Controls",
        desc: "Added modules to manage dropdown fields and email templates dynamically via admin tools.",
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
        category: "AISP",
        image: AppIcons.AISP1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "AISP",
        image: AppIcons.AISP2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "AISP",
        image: AppIcons.AISP3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "AISP",
        image: AppIcons.AISP4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "AISP",
        image: AppIcons.AISP5,
      },
      {
        id: 6,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "AISP",
        image: AppIcons.AISP6,
      },
       {
        id: 7,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "AISP",
        image: AppIcons.AISP7,
      },
      {
        id: 8,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "AISP",
        image: AppIcons.AISP8,
      },
      {
        id: 9,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "AISP",
        image: AppIcons.AISP9,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "A reliable and trustworthy co-worker. Moltech is very passionate about technologies and able to recommend and provide solution custom to your needs.",
    author: "Peterson Tan",
    title: "Technical consultant",
  },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The platform improved member services, reduced admin workload, and strengthened financial and community management.",
  values: [
    {
      title: "Streamlined Membership & Payment Workflows",
      description:
        "Unified registration and payment systems made it easy for members to join, renew, and contribute effortlessly.",
      icon: "mdi:account-cash-outline",
    },
    {
      title: "Automated Financial Tracking & Reporting",
      description:
        "Integrated reconciliation tools reduced manual accounting and provided real-time financial insights.",
      icon: "mdi:finance",
    },
    {
      title: "Enhanced Member Experience",
      description:
        "Self-service dashboards gave members access to payment history, receipts, and participation status anytime.",
      icon: "mdi:view-dashboard-outline",
    },
    {
      title: "Improved Operational Efficiency",
      description:
        "Automation and centralized data reduced administrative overhead and improved accuracy across workflows.",
      icon: "mdi:clipboard-check-outline",
    },
    {
      title: "Strengthened Community Engagement",
      description:
        "Integrated announcements, reminders, and feedback tools fostered more consistent and meaningful interactions.",
      icon: "mdi:account-group-outline",
    },
  ],
}
,
};

export default AispMembershipPlatformData;
