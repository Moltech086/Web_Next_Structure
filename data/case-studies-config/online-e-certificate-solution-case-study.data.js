import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const ECertificatePlatformData = {
  slug: "online-e-certificate-solution-case-study",
  heroSection: {
    title: "E-Certificate",
    HeroImage: AppIcons.ecertificate1,
    highlight: "Digital Certificate Automation Platform",
    description:
      "An online system built for partner schools to create, manage, and distribute verifiable e-certificates with dynamic branding, QR codes, and instant delivery.",
    location: {
      icon: "mdi:school-outline",
      label: "EdTech - Singapore & Global",
    },
    industry: {
      icon: "mdi:laptop-account",
      label: "Education Technology",
    },
    services: [
      {
        name: "Custom Web Platform",
        icon: "mdi:application-cog",
        href: "/services/custom-software-development",
      },
      {
        name: "PDF Generation",
        icon: "mdi:file-pdf-box",
        href: "/services/custom-software-development",
      },
      {
        name: "QR Code Integration",
        icon: "mdi:qrcode",
        href: "/services/custom-software-development",
      },
      {
        name: "Bulk Email Automation",
        icon: "mdi:email-send-outline",
        href: "/services/ui-ux-design-and-development",
      },
    ],
    card: {
      mainIcon: "mdi:file-certificate-outline",
      lines: ["w-3-5", "w-2-4"],
      iconRow: [
        { icon: "mdi:certificate-outline", bg: "bg-blue" },
        { icon: "mdi:email-check-outline", bg: "bg-green" },
        { icon: "mdi:qrcode", bg: "bg-orange" },
      ],
    },
  },
  metaConfig: {
  title:
    "Online E-Certificate Platform Case Study | EdTech Web App Development - USA",
  description:
    "Discover how Moltech Solutions Inc. (Dallas, USA) built a secure E-Certificate platform to help education providers auto-generate and deliver digital certificates with QR codes, saving time and boosting credibility.",
  keywords:
    "e-certificate platform development, education technology software USA, digital certificate generator, automated certificate delivery, QR code certificate system, online certificate management USA, school certificate app, ASP.NET MVC education platform, Dallas EdTech development company, custom admin dashboard for schools",
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  canonical:
    `${BASE_URL}/case-study/online-e-certificate-solution-case-study`,
  openGraph: {
    title:
      "Online E-Certificate Platform Case Study | EdTech Web App Development - USA",
    description:
      "We developed a scalable digital certificate platform for education providers—featuring QR code verification, template branding, automation, and admin control.",
    type: "website",
    url: `${BASE_URL}/case-study/online-e-certificate-solution-case-study`,
    image:
      `${BASE_URL}/images/meta/e-certificate-solution-og.webp`,
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Online E-Certificate Platform Case Study | EdTech Web App Development - USA",
    description:
      "Moltech Solutions (Dallas) built a custom platform for generating and emailing digital certificates with QR verification—helping educators streamline recognition.",
    image:
      `${BASE_URL}/images/meta/e-certificate-solution-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
  projectDetails: {
    description:
      "We developed a web-based E-Certificate generation and management system for partner schools under Flying Cape Technologies, enabling them to create, manage, and distribute certificates online. Schools can upload course completions, auto-generate branded certificates with QR codes, and distribute them instantly to students via email, providing a modern learning completion experience.",
  },
  aboutSection: {
    description1:
      "Our client, partner schools working with Flying Cape Technologies, needed a streamlined way to generate and distribute digital certificates for course completions.",
    description2:
      " These schools focus on delivering structured learning and want to improve post-course engagement while reducing manual workload in issuing certificates.",
    industry: "Education Technology",
    projectType: "E-Certificate Platform",
    technologies: [
      {
        name: "AWS EC2 (Windows Server IIS)",
        icon: "logos:aws",
        description:
          "Scalable cloud infrastructure hosting the IIS web server.",
      },
      {
        name: "MS SQL Server 2012+",
        icon: "vscode-icons:file-type-sql",
        description:
          "Relational database system for secure and efficient data storage.",
      },
      {
        name: "ASP.NET MVC",
        icon: "skill-icons:dotnet",
        description:
          "Robust server-side technology for scalable certificate generation.",
      },
      {
        name: "C#",
        icon: "mdi:language-csharp",
        description:
          "Primary programming language used for backend development.",
      },
      {
        name: "AngularJS",
        icon: "logos:angular-icon",
        description:
          "JavaScript framework used to build dynamic web applications.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description:
          "Lightweight library used for DOM manipulation and AJAX requests.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript used for safer and scalable frontend code.",
      },
      {
        name: "HTML",
        icon: "vscode-icons:file-type-html",
        description:
          "Standard markup language for creating web pages and applications.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Popular CSS framework for responsive, mobile-first UI design.",
      },
      {
        name: "CSS",
        icon: "vscode-icons:file-type-css",
        description:
          "Stylesheet language used to design the visual presentation of web pages.",
      },
      {
        name: "AJAX",
        icon: "mdi:swap-horizontal",
        description:
          "Enables asynchronous web page updates without full reloads.",
      },
      {
        name: "SVN (Apache Subversion)",
        icon: "mdi:source-branch",
        description:
          "Version control system for codebase tracking and collaboration.",
      },
      {
        name: "Distributed Architecture",
        icon: "mdi:server-network",
        description:
          "Ensures high availability and scalability across modules.",
      },
      {
        name: "Repository Pattern",
        icon: "mdi:folder-outline",
        description:
          "Design pattern used for clean separation of business logic and data access.",
      },
      {
        name: "QR Code Generator",
        icon: "mdi:qrcode",
        description: "Enables certificate authenticity and verification.",
      },
      {
        name: "Image Editing Tools",
        icon: "mdi:image-edit",
        description: "Used for designing and customizing certificate visuals.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
      title: "Manage Countries",
      description: "Admin can add, edit, and organize country data to group schools regionally.",
      icon: "mdi:earth",
    },
    {
      title: "Manage Schools",
      description: "Easily add and update school profiles and assign them to regions.",
      icon: "mdi:school-outline",
    },
    {
      title: "Manage Default Certificates",
      description: "Create and configure default certificate templates for use across schools.",
      icon: "mdi:certificate-outline",
    },
    {
      title: "Manage Default Fonts",
      description: "Upload and set global font styles used in certificate generation.",
      icon: "mdi:format-font",
    },
    {
      title: "Manage Default Colors",
      description: "Customize and apply global color schemes to certificates.",
      icon: "mdi:palette-swatch",
    },
    {
      title: "Manage User and Role-Based Permission",
      description: "Define roles and manage granular access for admins and schools.",
      icon: "mdi:shield-key-outline",
    },
    {
      title: "Upload Certificate Backgrounds",
      description: "Upload certificates and mark placeholders with X/Y coordinates.",
      icon: "mdi:image-marker-outline",
    },
    {
      title: "Manage Certificate Templates",
      description: "Create and organize various templates for different programs or schools.",
      icon: "mdi:file-document-multiple-outline",
    },
    {
      title: "Upload Fonts and Colors",
      description: "Schools can upload custom fonts and color themes for personalized branding.",
      icon: "mdi:format-color-fill",
    },
    {
      title: "Upload Candidate Lists",
      description: "Supports batch uploads and filtering by course/location.",
      icon: "mdi:file-upload-outline",
    },
    {
      title: "Filter by Location",
      description: "Enables precise filtering of candidates based on school or region.",
      icon: "mdi:map-marker-radius-outline",
    },
    {
      title: "Generate Certificates",
      description: "Create certificates with dynamic adjustments for font, size, and color.",
      icon: "mdi:certificate",
    },
    {
      title: "Automated Certificate Emails",
      description: "Instant PDF delivery via email with download links.",
      icon: "mdi:email-fast-outline",
    },
    {
      title: "QR Code on Certificates",
      description: "Each certificate is verifiable via a secure QR scan.",
      icon: "mdi:qrcode",
    }
    ],
  },
  challengeSolution: {
    challenges: [
    {
      title: "Manual Certificate Creation",
      desc: "Manual certificate creation was inefficient and prone to errors.",
      icon: "mdi:file-document-alert-outline",
    },
    {
      title: "No Secure Verification",
      desc: "There is a deficiency in having a secure, verifiable system to ensure the authenticity of certificates.",
      icon: "mdi:alert-decagram",
    },
    {
      title: "Bulk Distribution Effort",
      desc: "The distribution of certificates in bulk required a significant administrative effort.",
      icon: "mdi:email-off-outline",
    },
    {
      title: "Lack of Scalability",
      desc: "Scalable, on-demand certificate generation is necessary for ongoing courses.",
      icon: "mdi:chart-timeline-variant",
    },
  ],
  solutions: [
    {
      title: "Automated Certificate Platform",
      desc: "Built a secure online platform for automated certificate generation.",
      icon: "mdi:file-certificate-outline",
    },
    {
      title: "Dynamic PDF Generation",
      desc: "Enabled branded PDF certificate generation with dynamic course/learner data.",
      icon: "mdi:file-pdf-box",
    },
    {
      title: "Automated Email Delivery",
      desc: "Automated email delivery of certificates to students.",
      icon: "mdi:email-send-outline",
    },
    {
      title: "Admin Dashboard",
      desc: "An admin dashboard was made available to track the issuance of certificates.",
      icon: "mdi:view-dashboard-outline",
    },
  ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "SGTech",
        image: AppIcons.ecertificate1,
      },
      {
        id: 2,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "ecertificate",
        image: AppIcons.ecertificate2,
      },
      {
        id: 3,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "ecertificate",
        image: AppIcons.ecertificate3,
      },
    ],
  },
  // testimonialSection: {
  //   rating: 5,
  //   quote:
  //     "Moltech’s E-Certificate platform saved our team countless hours. Our learners now receive beautifully branded, QR-secured certificates right after class!",
  //   author: "Programme Coordinator",
  //   title: "Flying Cape Schools",
  // },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The solution simplified academic workflows, digitized certificate delivery, and improved institutional efficiency.",
  values: [
    {
      title: "Reduced Manual Workload for Schools",
      description:
        "Automation of routine administrative tasks helped educators and staff save time and focus on teaching.",
      icon: "mdi:school-outline",
    },
    {
      title: "Instant, Verifiable Certificate Delivery",
      description:
        "Students received secure digital certificates instantly, reducing delays and ensuring authenticity.",
      icon: "mdi:certificate-outline",
    },
    {
      title: "Enhanced Operational Efficiency",
      description:
        "Centralized processes and real-time updates improved coordination across departments.",
      icon: "mdi:chart-box-outline",
    },
  ],
}
,
};

export default ECertificatePlatformData;
