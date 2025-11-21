import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const ScalMembershipEventPortalData = {
  slug: "event-management-platform-web-platform-case-study",
  heroSection: {
    title: "Singapore Contractors Association Ltd. (SCAL)",
    HeroImage: AppIcons.SCAL5,
    highlight: "Smart Membership & Event Portal",
    description:
      "We partnered with Flying Cape Technologies to build a robust membership and event platform for SCAL, digitizing approval workflows, financial tracking, and online event participation.",
    location: {
      icon: "mdi:office-building-outline",
      label: "Singapore – National Construction Association",
    },
    industry: {
      icon: "mdi:hammer-wrench",
      label: "Construction, Association Management",
    },
    services: [
      {
        name: "Membership Portal",
        icon: "mdi:account-box-multiple-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Admin Dashboard",
        icon: "mdi:view-dashboard-edit-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Event Management System",
        icon: "mdi:calendar-check-outline",
        href: "/services/business-software-consulting",
      },
      {
        name: "Zoom & Email Integration",
        icon: "mdi:email-send-outline",
        href: "/services/ui-ux-design-and-development",
      },
      {
        name: "Financial Automation",
        icon: "mdi:currency-usd-circle-outline",
        href: "/services/accounting",
      },
    ],
    card: {
      mainIcon: "mdi:account-group-outline",
      lines: ["w-4-5", "w-2-3"],
      iconRow: [
        { icon: "mdi:file-document-check", bg: "bg-green" },
        { icon: "mdi:zoom", bg: "bg-blue" },
        { icon: "mdi:credit-card-sync-outline", bg: "bg-purple" },
      ],
    },
  },
  metaConfig: {
  title: "Membership & Event Management Platform with Zoom, GST, & Reporting | Case Study - USA",
  description:
    "We developed a feature-rich platform with Zoom events, membership renewals, GST tracking, S3 file storage, and reporting—automating operations for associations.",
  keywords:
    "membership management system USA, event booking portal development, Zoom integrated event platform, GST invoicing and reconciliation tool, React admin dashboard, .NET Core portal development, Dallas association management software, member renewal system, reporting module for nonprofits, AWS-hosted web application, secure event registration system",
  canonical:
    `${BASE_URL}/case-study/event-management-platform-web-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title: "Membership & Event Management Platform with Zoom, GST, & Reporting | Case Study - USA",
    description:
      "See how our Dallas-based team built a powerful member and event management portal with Zoom integration, automated GST invoicing, S3 storage, and real-time reporting using .NET Core and React.",
    url: `${BASE_URL}/case-study/event-management-platform-web-platform-case-study`,
    image: `${BASE_URL}/images/meta/event-management-scal-og.webp`,
    type: "website",
    locale: "en_US",
    site_name: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership & Event Management Platform with Zoom, GST, & Reporting | Case Study - USA",
    description:
      "Built by Moltech Solutions (Dallas), this full-featured portal handles membership workflows, bookings, invoicing, Zoom events, and analytics—powered by React & .NET Core.",
    image: `${BASE_URL}/images/meta/event-management-scal-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We built a scalable membership and event management portal for SCAL to manage member onboarding, approvals, bookings, and financial tracking seamlessly, while enabling members to register, renew, and participate in training and events. Integrated reporting and Zoom API capabilities further enhanced operational effectiveness.",
  },
  aboutSection: {
    description1:
      "The Singapore Contractors Association Limited (SCAL) is the national association representing Singapore’s construction industry, providing leadership, advocacy, and services to support its members and promote best practices within the industry. SCAL facilitates training, networking, and regulatory compliance support to enhance members' business capabilities.",
    description2:
      "We partnered with Flying Cape Technologies to develop a membership and event management system with a comprehensive admin dashboard for SCAL, digitizing workflows and improving operational efficiency for both members and administrators.",
    industry: "Construction & Professional Association",
    projectType: "Membership & Event Management Portal",
    technologies: [
      {
        name: ".NET Core API",
        icon: "logos:dotnet",
        description:
          "Backend system managing workflows, payments, reports, and Zoom integration.",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description:
          "Server-side rendering and routing for the main user web portal.",
      },
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Admin dashboard built for real-time management and UI responsiveness.",
      },
      {
        name: "MS SQL Server",
        icon: "devicon:microsoftsqlserver-wordmark",
        description:
          "Central database for memberships, events, and financial transactions.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description: "Core scripting language used for frontend interactivity.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript used for scalable application logic.",
      },
      {
        name: "jQuery",
        icon: "logos:jquery",
        description: "JavaScript library used for simplified DOM manipulation.",
      },
      {
        name: "AWS Amplify",
        icon: "logos:aws-amplify",
        description:
          "Web hosting platform for frontend deployment with CI/CD support.",
      },
      {
        name: "AWS EC2",
        icon: "logos:aws-ec2",
        description:
          "Scalable virtual server used for hosting backend APIs with IIS.",
      },
      {
        name: "IIS (API Hosting)",
        icon: "mdi:server",
        description:
          "Windows-based server used to run ASP.NET Core APIs on EC2.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Markup language used for structuring web content.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Styling language used for layout, themes, and responsiveness.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Frontend framework for responsive and mobile-first design.",
      },

      // {
      //   name: "Role-Based Access Control",
      //   icon: "mdi:account-lock-outline",
      //   description:
      //     "Secure user management system with permission-based access.",
      // },
      // {
      //   name: "S3 Bucket Integration",
      //   icon: "logos:aws-s3",
      //   description:
      //     "Cloud storage integration for uploading and serving file attachments.",
      // },
      {
        name: "Email Scheduler",
        icon: "arcticons:smsscheduler",
        description:
          "Automated notifications and reminders sent via email scheduler.",
      },
      // {
      //   name: "Distributed & Repository Architecture",
      //   icon: "mdi:source-repository-multiple",
      //   description:
      //     "Scalable backend design using clean code principles and modular structure.",
      // },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Membership Registration & Renewals",
        description:
          "Supports full onboarding workflow, renewals, document uploads, and status tracking.",
        icon: "mdi:account-arrow-right-outline",
      },
      {
        title: "User Dashboard & Membership Access",
        description:
          "Logged-in members can manage personal info, access resources, and track their history.",
        icon: "mdi:account-circle-outline",
      },
      {
        title: "Event Booking with Zoom Integration",
        description:
          "Users can register for events and webinars, including Zoom-powered sessions.",
        icon: "mdi:video-plus-outline",
      },
      {
        title: "Payments & Financial Records",
        description:
          "Integrated cart, invoice, and receipt tracking with support for GST and credit notes.",
        icon: "mdi:finance",
      },
      {
        title: "Community & Resource Management",
        description:
          "Manage community involvement, share resources, and publish structured content per SCAL.",
        icon: "mdi:account-multiple-outline",
      },
      {
        title: "Admin Dashboard & CMS Tools",
        description:
          "Full control of pages, entries, banners, and roles through a secure admin backend.",
        icon: "mdi:view-dashboard-edit-outline",
      },
      {
        title: "Membership Approval Workflow",
        description:
          "Admins can view, approve, or reject memberships and track status updates.",
        icon: "mdi:check-decagram",
      },
      {
        title: "Email & Notification Scheduler",
        description:
          "Automated emails for renewals, events, invoices, and admin alerts using templates.",
        icon: "mdi:email-outline",
      },
      {
        title: "Advanced Reporting Tools",
        description:
          "Includes MOM reports, slot renewals, OATI updates, and full export capability.",
        icon: "mdi:table-multiple",
      },
      {
        title: "Field & Dropdown Management",
        description:
          "Admins can dynamically manage dropdowns, master fields, tags, and templates.",
        icon: "mdi:form-select",
      },
      {
        title: "Role-Based Authorization",
        description:
          "Secure admin access based on predefined roles for managing portal operations.",
        icon: "mdi:shield-account-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Manual Membership & Event Handling",
        desc: "Manual workflows for memberships, event bookings, and renewals caused delays and inefficiencies.",
        icon: "mdi:file-document-alert-outline",
      },
      {
        title: "Fragmented Financial Management",
        desc: "Lacked automation for GST, invoicing, credit notes, and reconciliation processes.",
        icon: "mdi:currency-usd-off",
      },
      {
        title: "No Online Event System",
        desc: "Secure online event booking and Zoom integration was missing for virtual sessions.",
        icon: "mdi:calendar-remove-outline",
      },
      {
        title: "Lack of Advanced Reporting",
        desc: "No structured way to track submissions, renewals, MOMs, or OATI slots in real-time.",
        icon: "mdi:chart-timeline-variant",
      },
    ],
    solutions: [
      {
        title: "End-to-End Membership Portal",
        desc: "Developed responsive web and admin portal for bookings, membership, and financial workflows.",
        icon: "mdi:account-check-outline",
      },
      {
        title: "Zoom API Integration",
        desc: "Seamless creation and management of Zoom meetings linked with member events.",
        icon: "mdi:video-outline",
      },
      {
        title: "Automated GST & Reconciliation",
        desc: "Implemented financial automation for GST, credit note issuance, and reconciliation tracking.",
        icon: "mdi:file-certificate-outline",
      },
      {
        title: "Advanced Reporting & MOMs",
        desc: "Custom reports for slots, submissions, renewals, and MOMs enabled real-time insights.",
        icon: "mdi:chart-box-outline",
      },
      {
        title: "Role-Based Access & Email Scheduling",
        desc: "Admins can control access, manage roles, and schedule automated communications.",
        icon: "mdi:account-key-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SCAL",
        image: AppIcons.SCAL1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "SCAL",
        image: AppIcons.SCAL2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "SCAL",
        image: AppIcons.SCAL3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SCAL",
        image: AppIcons.SCAL4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SCAL",
        image: AppIcons.SCAL5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SCAL",
        image: AppIcons.SCAL6,
      },
      {
        id: 7,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SCAL",
        image: AppIcons.SCAL7,
      },
      {
        id: 8,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "SCAL",
        image: AppIcons.SCAL8,
      },
      {
        id: 9,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "SCAL",
        image: AppIcons.SCAL9,
      },
      {
        id: 10,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SCAL",
        image: AppIcons.SCAL10,
      },
      {
        id: 11,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "SCAL",
        image: AppIcons.SCAL11,
      },
      {
        id: 12,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "SCAL",
        image: AppIcons.SCAL12,
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
      "The platform empowered SLA with automation, self-service tools, and data-driven operations to serve members more effectively.",
    values: [
      {
        title: "Digitised Membership & Event Workflows",
        description:
          "Streamlined registrations, renewals, and event sign-ups through automated digital systems—minimizing manual work.",
        icon: "mdi:calendar-account-outline",
      },
      {
        title: "Enhanced Member Engagement",
        description:
          "Secure portals and self-service tools allowed members to manage profiles, payments, and event participation with ease.",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "Automated Financial Tracking & Approvals",
        description:
          "Integrated workflows ensured accuracy in payments, reimbursements, and approvals—reducing manual intervention.",
        icon: "mdi:cash-check",
      },
      {
        title: "Advanced Operational Insights",
        description:
          "Detailed reporting and dashboards offered real-time visibility into finances, member activity, and event performance.",
        icon: "mdi:chart-box-outline",
      },
    ],
  },
};

export default ScalMembershipEventPortalData;
