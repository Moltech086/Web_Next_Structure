
import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";


const CloudDocsData = {

  slug: "api-driven-saas-document-management-case-study",
  heroSection: {
    title: "Cloud Docs",
    HeroImage: AppIcons.CloudDocs2,
    highlight: "API-Driven SaaS Document Management",
    description:
      "API-driven SaaS platform for secure document storage and management.",
    location: {
      icon: "mdi:cloud-outline",
      label: "Pharma Sector – Global",
    },
    industry: {
      icon: "mdi:file-document-multiple-outline",
      label: "Document Management",
    },
    services: [
      {
        name: "Custom Web Platform",
        icon: "mdi:application-cog",
        href: "/services/custom-software-development",
      },
      {
        name: "API Development",
        icon: "mdi:api",
        href: "/services/web-application-development",
      },
      {
        name: "Cloud Integration",
        icon: "mdi:cloud-sync-outline",
        href: "/services/web-application-development",
      },
      {
        name: "Data Security & Compliance",
        icon: "mdi:shield-lock-outline",
        href: "/services/custom-software-development",
      },
    ],
    card: {
      mainIcon: "mdi:file-document-outline",
      lines: ["w-3-5", "w-2-4"],
      iconRow: [
        { icon: "mdi:cloud-outline", bg: "bg-blue" },
        { icon: "mdi:lock-outline", bg: "bg-green" },
        { icon: "mdi:api", bg: "bg-orange" },
      ],
    },
  },
  metaConfig: {
    title:
      "API‑Driven SaaS Document Management Case Study | Moltech Solutions Inc.",
    description:
      "Discover how Moltech Solutions developed a secure, API‑driven SaaS platform for encrypted document storage, real‑time file operations, and seamless workflow integration.",
    keywords:
      "API‑driven DMS, SaaS document management, secure file storage, real‑time file sync, role-based access, workflow automation",
    canonical: `${BASE_URL}/case-study/api-driven-saas-document-management-case-study`,
    author: "Moltech Solutions Inc.",
    language: "English",
    distribution: "Global",
    rating: "General",
    revisitAfter: "7 days",
    openGraph: {
      title:
        "API‑Driven SaaS Document Management Case Study | Moltech Solutions Inc.",
      description:
        "Discover how Moltech Solutions developed a secure, API‑driven SaaS platform for encrypted document storage, real-time file operations, and seamless workflow integration.",
      url: `${BASE_URL}/case-study/cloud-docs-api-driven-saas-document-management-case-study`,
      image: `${BASE_URL}/images/meta/api-driven-saas-document-management-case-study.webp`,
      type: "website",
      locale: "en_US",
      siteName: "Moltech Solutions Inc.",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "API‑Driven SaaS Document Management Case Study | Moltech Solutions Inc.",
      description:
        "Discover how Moltech Solutions developed a secure, API‑driven SaaS platform for encrypted document storage, real-time file operations, and seamless workflow integration.",
      image: `${BASE_URL}/images/meta/capi-driven-saas-document-management-case-study.webp`,
      site: "@MoltechInc",
      creator: "@MoltechInc",
    },
  },
  projectDetails: {
    description:
      "Cloud Docs is a secure document management system (DMS) designed to help organizations store, manage, and retrieve digital files efficiently. The system supports file uploads, folder management, and bucket-style organization while offering real-time file operations through an intuitive web interface and robust public APIs. Built for flexibility, Cloud Docs can be deployed on the cloud or on-premise environments based on an organization’s needs. It integrates seamlessly into existing workflows, providing encrypted file storage, reliable access control, and seamless document retrieval, helping businesses automate document processes, reduce manual handling, and maintain compliance with security requirements.",
  },
  aboutSection: {
    description1:
      "A leading organization in the pharmaceutical sector is leveraging Moltech’s Cloud Docs service to centralize and manage critical documents across teams and locations securely.",
    description2:
      "By adopting Cloud Docs, they have streamlined document workflows, ensured compliance with security standards, and enabled scalable, organized file management to support their growing operational needs.",
    industry: "Pharmaceutical",
    projectType:
      "Cloud-based Third-Party Document Management System (DMS), API-driven SaaS platform for secure document storage and management.",
    technologies: [
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Frontend framework used to create a responsive, intuitive user experience.",
      },
      {
        name: "FastAPI",
        icon: "logos:fastapi",
        description:
          "High-performance Python framework for building modern APIs.",
      },
      {
        name: "MySQL",
        icon: "vscode-icons:file-type-sql",
        description:
          "Reliable relational database for scalable data management.",
      },
      {
        name: "JWT & OAuth",
        icon: "mdi:shield-key-outline",
        description:
          "Secure authentication methods used for safe and authorized access.",
      },
      {
        name: "Encryption",
        icon: "mdi:lock-outline",
        description:
          "Files are encrypted during upload and decrypted during download for secure handling.",
      },
      {
        name: "Cloud-Native Architecture",
        icon: "mdi:cloud-check-outline",
        description:
          "Supports hybrid or full cloud environments with seamless integration.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Centralized Document Storage",
        description:
          "Store all files in one secure location accessible by multiple systems.",
        icon: "mdi:file-document-outline",
      },
      {
        title: "Bucket & Folder Management",
        description:
          "Logical grouping of files for organized, scalable document handling.",
        icon: "mdi:folder-multiple-outline",
      },
      {
        title: "Secure File Handling",
        description:
          "Files are encrypted at rest and automatically decrypted on download.",
        icon: "mdi:lock-outline",
      },
      {
        title: "API-Driven Integration",
        description:
          "Public APIs allow seamless connectivity with various internal and third-party systems.",
        icon: "mdi:api",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Assign roles with specific access levels (admin, manager, viewer) for secure collaboration.",
        icon: "mdi:account-cog-outline",
      },
      {
        title: "Real-Time File Operations",
        description:
          "Track file status, upload progress, and validations instantly.",
        icon: "mdi:file-clock-outline",
      },
      {
        title: "User-Friendly Interface",
        description:
          "Intuitive, responsive design for easy use by technical and non-technical users.",
        icon: "mdi:monitor-cellphone",
      },
      {
        title: "Cloud or On-Premise Deployment",
        description:
          "Flexible deployment options based on organizational needs.",
        icon: "mdi:server-network",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Decentralized Document Access",
        desc: "In ecosystems with many systems using the same files, managing documents consistently is difficult.",
        icon: "mdi:file-multiple-outline",
      },
      {
        title: "Duplication Across Systems",
        desc: "Files often get duplicated or out of sync when passed manually between systems.",
        icon: "mdi:content-duplicate",
      },
      {
        title: "Version Control Difficulties",
        desc: "Maintaining version control across systems is challenging.",
        icon: "mdi:history",
      },
      {
        title: "Secure Centralized Storage Needs",
        desc: "Ensuring secure, centralized storage while allowing access from multiple systems is complex.",
        icon: "mdi:cloud-lock-outline",
      },
      {
        title: "Disruptive Workflow Integration",
        desc: "Existing workflows risk disruption without a unified document management approach.",
        icon: "mdi:alert-circle-outline",
      },
      {
        title: "Centralized Document Storage",
        desc: "Organizations need a way to store documents in one place while enabling seamless, secure access for all connected systems.",
        icon: "mdi:file-cabinet",
      },
    ],
    solutions: [
      {
        title: "Unified Document Storage",
        desc: "Built a centralized document management system, allowing documents to be stored in one secure location.",
        icon: "mdi:file-cabinet",
      },
      {
        title: "Seamless Ecosystem Access",
        desc: "Enabled multiple systems within the ecosystem to access and use documents seamlessly without duplication.",
        icon: "mdi:cloud-sync-outline",
      },
      {
        title: "Bucket and Folder Structure",
        desc: "Integrated bucket-style and folder-based organization for logical file management.",
        icon: "mdi:folder-multiple",
      },
      {
        title: "Real-Time File Sync",
        desc: "Implemented real-time file operations to maintain consistency across systems.",
        icon: "mdi:file-clock-outline",
      },
      {
        title: "Secure Access & Auth",
        desc: "Applied secure access controls using JWT and OAuth, ensuring only authorized systems and users can access files.",
        icon: "mdi:shield-lock-outline",
      },
      {
        title: "API Accessibility",
        desc: "Provided public APIs for easy integration, enabling different systems to upload, retrieve, and manage documents programmatically.",
        icon: "mdi:api",
      },
      {
        title: "End-to-End Encryption",
        desc: "Ensured file encryption during upload and decryption during download to maintain data security.",
        icon: "mdi:lock",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "CloudDocs Workflow",
        description: "",
        category: "cloud-docs",
        image: AppIcons.CloudDocsWorkflow,
      },
      {
        id: 2,
        title: "CloudDocs Project Image",
        description: "",
        category: "cloud-docs",
        image: AppIcons.CloudDocs1,
      },
      {
        id: 3,
        title: "CloudDocs Project Image",
        description: "",
        category: "cloud-docs",
        image: AppIcons.CloudDocs2,
      },
      {
        id: 4,
        title: "CloudDocs Project Image",
        description: "",
        category: "cloud-docs",
        image: AppIcons.CloudDocs3,
      },
      {
        id: 5,
        title: "CloudDocs Project Image",
        description: "",
        category: "cloud-docs",
        image: AppIcons.CloudDocs4,
      },
      {
        id: 6,
        title: "CloudDocs Project Image",
        description: "",
        category: "cloud-docs",
        image: AppIcons.CloudDocs5,
      },
      {
        id: 7,
        title: "CloudDocs Project Image",
        description: "",
        category: "cloud-docs",
        image: AppIcons.CloudDocs6,
      },
    ],
  },
  resultsSection: {
    title: "Business Values Provided",
    description:
      "The solution simplified academic workflows, digitized certificate delivery, and improved institutional efficiency.",
    values: [
      {
        title: "Centralized Access, Simplified Control",
        description:
          "All documents are in one place, improving organization and eliminating confusion.",
        icon: "mdi:file-document-multiple-outline",
      },
      {
        title: "Streamlined Document Workflows",
        description:
          "Efficient operations help reduce manual document handling and speed up processes.",
        icon: "mdi:progress-check",
      },
      {
        title: "Seamless Ecosystem Integration",
        description:
          "Multiple systems can securely and reliably access the same documents as needed.",
        icon: "mdi:cloud-sync",
      },
      {
        title: "Enhanced Data Security",
        description:
          "Encryption and access controls ensure regulatory compliance and protect sensitive data.",
        icon: "mdi:shield-check-outline",
      },
      {
        title: "Scalable to Business Growth",
        description:
          "Cloud Docs scales with organization size and complexity without disruption.",
        icon: "mdi:chart-line",
      },
      {
        title: "Cost-Efficient Document Management",
        description:
          "Reduces infrastructure and admin costs associated with legacy storage systems.",
        icon: "mdi:cash-multiple",
      },
      {
        title: "Regulatory Compliance Ready",
        description:
          "Meets industry standards for document access, traceability, and retention.",
        icon: "mdi:book-check-outline",
      },
      {
        title: "Flexible Deployment Options",
        description:
          "Deploy on cloud, on-premise, or hybrid based on IT infrastructure strategy.",
        icon: "mdi:server",
      },
    ],
  },
};

export default CloudDocsData;
