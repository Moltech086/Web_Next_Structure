import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const EchemIMSData = {
    slug: "procurement-inquiry-automation-case-study",
    heroSection: {
        title: "Inquiry Management System (IMS)",
        HeroImage: AppIcons.IMS1,
        highlight: "Procurement Inquiry Automation & Vendor Communication",
        description:
            "The Inquiry Management System (IMS) is a web‑based platform built with React.js, .NET Core, Python, and SQL Server that automates the full inquiry lifecycle.",
        location: {
            icon: "mdi:map-marker-outline",
            label: "USA",
        },
        industry: {
            icon: "mdi:domain",
            label: "Supplier/Vendor Management",
        },
        services: [
            {
                name: "Procurement Automation",
                icon: "mdi:cart-arrow-down",
                href: "/services/ai-solutions",
            },
            {
                name: "Email Automation",
                icon: "mdi:email-fast-outline",
                href: "/services/ai-solutions",
            },
            {
                name: "Vendor Management Systems",
                icon: "mdi:account-multiple-outline",
                href: "/services/ai-solutions",
            },
            {
                name: "Workflow Automation",
                icon: "mdi:cog-sync-outline",
                href: "/services/ai-solutions",
            },
        ],
        card: {
            mainIcon: "mdi:email-fast-outline",
            lines: ["w-3-5", "w-2-4"],
            iconRow: [
                { icon: "mdi:email-outline", bg: "bg-blue" },
                { icon: "mdi:account-multiple-outline", bg: "bg-green" },
                { icon: "mdi:clipboard-list-outline", bg: "bg-orange" },
            ],
        },
    },
    metaConfig: {
  title:
    "Procurement Inquiry Automation Case Study | Moltech Solutions Inc.",
  description:
    "Learn how Moltech Solutions built a web‑based inquiry management platform that automates procurement workflows, vendor communications, and real‑time tracking for seamless supplier management.",
  keywords:
    "inquiry management system, procurement automation, vendor communication platform, email parsing automation, workflow automation",
  canonical:
    `${BASE_URL}/case-study/procurement-inquiry-automation-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Procurement Inquiry Automation Case Study | Moltech Solutions Inc.",
    description:
      "Learn how Moltech Solutions built a web‑based inquiry management platform that automates procurement workflows, vendor communications, and real‑time tracking for seamless supplier management.",
    url:
      `${BASE_URL}/case-study/procurement-inquiry-automation-case-study`,
    image:
      `${BASE_URL}/images/meta/procurement-inquiry-automation-case-study.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Procurement Inquiry Automation Case Study | Moltech Solutions Inc.",
    description:
      "Learn how Moltech Solutions built a web‑based inquiry management platform that automates procurement workflows, vendor communications, and real‑time tracking for seamless supplier management.",
    image:
      `${BASE_URL}/images/meta/procurement-inquiry-automation-case-study.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
    projectDetails: {
        description:
            "The Inquiry Management System (IMS) is a web‑based platform built with React.js, .NET Core, Python, and SQL Server that automates the full inquiry lifecycle: Users raise chemical‑product inquiries. Parallel Python “grabbers” fetch supplier emails from SMTP/IMAP/POP mailboxes and internal databases. IMS sends bulk, templated inquiry emails to selected suppliers. Incoming replies are automatically parsed and linked to their original inquiry. All inquiries, responses, and user actions are logged centrally for real‑time visibility and audit.",
    },
    aboutSection: {
        description1:
            "Echemportal is a chemical‑products company that manages a broad network of suppliers and needs a centralized system to automate vendor inquiries, track supplier responses, and maintain a structured vendor database for its internal procurement workflows.",
        description2: "",
        industry: "Supplier/Vendor Management",
        projectType: "Internal B2B Inquiry Management Platform",
        technologies: [
            {
                name: "React.js",
                icon: "logos:react",
                description: "React.js",
            },
            {
                name: ".NET Core",
                icon: "logos:dotnet",
                description: ".NET Core",
            },
            {
                name: "Python",
                icon: "logos:python",
                description: "Python",
            },
            {
                name: "SQL Server",
                icon: "mdi:database-cog-outline", // Alternate icon used
                description: "SQL Server",
            },
            {
                name: "SMTP, IMAP/POP",
                icon: "mdi:email-outline",
                description: "SMTP, IMAP/POP",
            },
            {
                name: "JavaScript",
                icon: "logos:javascript",
                description: "JavaScript",
            },
            {
                name: "C#",
                icon: "mdi:language-csharp",
                description: "C#",
            },
        ],
    },
    majorFeatures: {
        features: [
            {
                title: "Inquiry Management Module",
                description:
                    "Handles end-to-end inquiry processing:\nInitialize Inquiries: Send inquiries using grabbers and store vendor data.\nDefine Inquiries: List and track sent inquiries.\nProcessed Inquiries: Review vendor responses.\nUnmapped Responses: Identify replies that do not match any inquiry.\nInquiry History: Full action log for audit and traceability.\nDelete Inquiry: Remove outdated inquiries while preserving records.",
                icon: "mdi:email-check-outline",
            },
            {
                title: "Product Module",
                description:
                    "Products: Manually manage product data not captured by grabbers, with EchemProductId and Chem Browser ProductId mapping.",
                icon: "mdi:package-variant-closed",
            },
            {
                title: "Vendor Module",
                description:
                    "Master Vendors: Maintain a database of active vendors.\nVendor Groups: Organize vendors by region, expertise, or tier.\nVendor Preference: Set default vendor priorities.\nUnregistered Vendors: Track potential vendors pending registration.\nDeleted Vendors: Log removed vendors for traceability.",
                icon: "mdi:account-group-outline",
            },
            {
                title: "Configuration Module",
                description:
                    "Email Templates: Create and manage multiple email formats for inquiries, quotations, etc.\nEmail Sync Settings: Configure SMTP for sending emails from a designated sender ID.",
                icon: "mdi:cog-outline",
            },
        ],
    },
    challengeSolution: {
        challenges: [
            {
                title: "Disparate Data Sources",
                desc: "Manually locating supplier records across multiple databases and mail servers was slow and error‑prone.",
                icon: "mdi:database-remove-outline",
            },
            {
                title: "Inefficient Email Outreach",
                desc: "Sending individual inquiry emails led to inconsistent messaging, missed replies, and delays.",
                icon: "mdi:email-off-outline",
            },
            {
                title: "Response Mapping Errors",
                desc: "Manually matching supplier replies to inquiries resulted in lost or misfiled responses.",
                icon: "mdi:link-off",
            },
            {
                title: "Lack of Audit Trail",
                desc: "No centralized history made compliance reporting and issue investigation difficult.",
                icon: "mdi:file-alert-outline",
            },
            {
                title: "Inconsistent Communications",
                desc: "Different users crafted emails in varied formats, weakening brand consistency and clarity.",
                icon: "mdi:format-text-variant",
            },
        ],
        solutions: [
            {
                title: "Parallel Python Grabbers",
                desc: "Lightweight, concurrent processes that continuously harvest supplier data and emails from multiple sources, eliminating manual lookups.",
                icon: "mdi:robot-outline",
            },
            {
                title: "Bulk Templated Email Dispatch",
                desc: "A built‑in templating engine for sending hundreds of branded, structured inquiries at once—ensuring speed and consistency.",
                icon: "mdi:email-fast-outline",
            },
            {
                title: "Automated Reply Parsing & Linking",
                desc: "An email‑reading service that extracts metadata from incoming mail and automatically associates replies with their original inquiry records.",
                icon: "mdi:email-sync-outline",
            },
            {
                title: "Centralized Dashboard & Audit Log",
                desc: "A React.js console displaying inquiry statuses, response timelines, and a complete, immutable action history for compliance and reporting.",
                icon: "mdi:view-dashboard-outline",
            },
            {
                title: "Standardized Communication Framework",
                desc: "Managed email templates and configuration settings enforce uniform, professional messages and reduce follow‑up clarifications.",
                icon: "mdi:email-edit-outline",
            },
        ],
    },
    projectSnippets: {
        projectSnippets: [
            {
                id: 1,
                title: "EPS Workflow",
                description: "Complete workflow of EPS",
                category: "echem-eps",
                image: AppIcons.IMSWorkflow,
            },
            {
                id: 2,
                title: "EPS Dashboard",
                description: "Live email statistics and processing metrics for admins",
                category: "echem-eps",
                image: AppIcons.IMS1,
            },
            {
                id: 3,
                title: "Processed Emails",
                description: "Processed emails with labels and extracted data",
                category: "echem-eps",
                image: AppIcons.IMS2,
            },
            {
                id: 4,
                title: "Incorrect Processed Emails",
                description: "Processed emails with incorrect labels and extracted data",
                category: "echem-eps",
                image: AppIcons.IMS3,
            },
            {
                id: 5,
                title: "Label Configuration",
                description: "Configuration of custom rules for email classification and data extraction logic to align with evolving business needs.",
                category: "echem-eps",
                image: AppIcons.IMS4,
            },
            {
                id: 6,
                title: "Table Configuration",
                description: "Configuration of custom rules for table extraction logic to align with evolving business needs.",
                category: "echem-eps",
                image: AppIcons.IMS5,
            },
        ],
    },
    resultsSection: {
        title: "Business Value Provided",
        description: "",
        values: [
            {
                title: "Faster Procurement Process",
                description: "Faster Procurement Process",
                icon: "mdi:clock-fast",
            },
            {
                title: "Accurate Inquiry Tracking",
                description: "Accurate Inquiry Tracking",
                icon: "mdi:check-decagram",
            },
            {
                title: "Enhanced Transparency & Auditing",
                description: "Enhanced Transparency & Auditing",
                icon: "mdi:clipboard-text-clock-outline",
            },
            {
                title: "Stronger Supplier Engagement",
                description: "Stronger Supplier Engagement",
                icon: "mdi:account-heart-outline",
            },
            {
                title: "Informed Decision Making",
                description: "Informed Decision Making",
                icon: "mdi:lightbulb-on-outline",
            },
            {
                title: "Operational Efficiency Gains",
                description: "Operational Efficiency Gains",
                icon: "mdi:chart-line",
            },
        ],
    },
};

export default EchemIMSData;
