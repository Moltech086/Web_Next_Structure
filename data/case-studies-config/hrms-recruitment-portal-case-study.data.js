import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";


const EchemPortalData = {
  slug: "hrms-recruitment-portal-case-study",
  heroSection: {
    title: "B2B SaaS HRMS & Recruitment Platform Development",
    HeroImage: AppIcons.HRMS2,
    highlight: " ",
    description:
      "Moltech built a centralized recruitment and HRMS portal for Echem Portal Inc., streamlining hiring workflows, automating candidate tracking, and integrating AI for smart resume parsing.",
    location: {
      icon: "mdi:map-marker",
      label: "Global (Online SaaS)",
    },
    industry: {
      icon: "mdi:briefcase-check-outline",
      label: "HRMS & Recruitment",
    },
    services: [
      {
        name: "Custom Web Portal Development",
        icon: "mdi:code-braces",
        href: "/services/custom-software-development",
      },
      {
        name: "AI Integration",
        icon: "mdi:robot-outline",
        href: "/services/ai-solutions",
      },
      {
        name: "SaaS Platform Development",
        icon: "mdi:cloud-outline",
        href: "/services/custom-software-development",
      },
      {
        name: "Business Consulting",
        icon: "mdi:account-tie",
        href: "/services/business-software-consulting",
      },
    ],
    card: {
      mainIcon: "mdi:account-search",
      lines: ["w-3-4", "w-1-2"],
      iconRow: [
        { icon: "mdi:calendar-check-outline", bg: "bg-purple" },
        { icon: "mdi:file-account", bg: "bg-green" },
        { icon: "mdi:robot-happy-outline", bg: "bg-orange" },
      ],
    },
  },
  // metaConfig
metaConfig: {
  title:
    "HRMS & Recruitment Portal Case Study | Custom Workforce Management Solutions - USA",
  description:
    "Explore how our Dallas-based team helped a U.S. organization modernize its hiring and HR operations with a custom HRMS and recruitment portal built for scalability, automation, and better candidate experiences.",
  keywords:
    "HRMS portal development, recruitment management system USA, hiring platform software, applicant tracking system, custom HR software development, USA HR tech solutions, HR automation tools, Dallas HRMS development, recruitment portal USA, end-to-end hiring platform",
  canonical: `${BASE_URL}/case-study/hrms-recruitment-portal-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "HRMS & Recruitment Portal Case Study | Custom Workforce Management Solutions - USA",
    description:
      "See how a U.S.-based company transformed its hiring and HR workflows with a modern HRMS and recruitment platform designed by our Dallas development team.",
    url: `${BASE_URL}/case-study/hrms-recruitment-portal-case-study`,
    image: `${BASE_URL}/images/meta/hrms-recruitment-og.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "HRMS & Recruitment Portal Case Study | Custom Workforce Management Solutions - USA",
    description:
      "Learn how our Dallas-based team built a modern HRMS and recruitment platform for a U.S. client, streamlining hiring, onboarding, and workforce operations.",
    image: `${BASE_URL}/images/meta/hrms-recruitment-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},

  projectDetails: {
    description:
      "Moltech Solutions collaborated with Echem Portal Inc. to build a tailored Recruitment and Interview Management Portal that streamlines the hiring process across the organization. The platform is designed to assist HR teams in managing the end-to-end recruitment lifecycle, from job posting to final selection.",
  },
  aboutSection: {
    description1:
      "Echem Portal Inc. is a specialized chemical trading company that operates in a dynamic and fast-paced business environment. To support its operations, the company requires a robust workforce across multiple departments, including Sales, Marketing, Accounting, software development, and Quality Assurance. As the organization continues to scale, managing employee data, recruitment, and HR processes efficiently has become a priority, leading to the need for a centralized HRMS and recruitment platform.",
    industry: "HRMS Recruitment",
    projectType: "B2B SaaS HRMS & Recruitment Portal",
    technologies: [
      {
        name: "Microsoft .NET 8.0",
        icon: "logos:dotnet",
        description: "Modern backend framework for scalable enterprise apps.",
      },
      {
        name: ".NET API",
        icon: "material-symbols:api",
        description: "RESTful APIs powering the recruitment workflow.",
      },
     
      {
        name: "React JS",
        icon: "logos:react",
        description: "Frontend library for dynamic and responsive UI.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Essential scripting language for dynamic and responsive features.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Structured markup for modern and accessible websites.",
      },
      {
        name: "SCSS",
        icon: "vscode-icons:file-type-scss2",
        description: "Stylesheets crafted for beautiful and responsive design.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Component framework for rapid and consistent UI development.",
      },
      {
        name: "MS SQL Database",
        icon: "simple-icons:microsoftsqlserver",
        description: "Relational database for storing structured HR data.",
      },
      {
        name: "IIS Hosting",
        icon: "mdi:server",
        description: "Secure and high-performance Microsoft web hosting.",
      },
      {
        name: "Jenkins",
        icon: "logos:jenkins",
        description: "CI/CD server for deployment automation.",
      },
      {
        name: "Python (QCR)",
        icon: "logos:python",
        description: "Used for AI-powered resume parsing and data extraction.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "Manage Departments",
        description: "Organize job postings by department and role hierarchy.",
        icon: "mdi:office-building-outline",
      },
      {
        title: "Job & Skill Mapping",
        description:
          "Assign skill and sub-skill requirements to specific job openings.",
        icon: "mdi:star-check-outline",
      },
      {
        title: "Candidate Management",
        description:
          "Track candidate applications, resumes, statuses, and communication.",
        icon: "mdi:account-multiple-check-outline",
      },
      {
        title: "Interview Workflow Configuration",
        description:
          "Define and assign interview rounds with role-based visibility.",
        icon: "mdi:timeline-check-outline",
      },
      {
        title: "AI Resume Scanning",
        description:
          "Use Python-based QCR module to auto-extract and structure candidate data.",
        icon: "mdi:robot-outline",
      },
      {
        title: "Feedback Management",
        description:
          "Interviewers submit structured evaluation forms directly in the portal.",
        icon: "mdi:comment-check-outline",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Restrict platform features based on role (HR, Interviewer, Manager).",
        icon: "mdi:shield-account-outline",
      },
      {
        title: "Automated Email Alerts",
        description:
          "Email notifications to candidates and interviewers at each stage.",
        icon: "mdi:email-outline",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "Unstructured Hiring Process",
        desc: "Recruitment was tracked through spreadsheets and email, leading to delays and inconsistencies.",
        icon: "mdi:file-document-alert-outline",
      },
      {
        title: "Scattered Interview Feedback",
        desc: "Lack of structured follow-up and unclear tracking across interview phases.",
        icon: "mdi:comment-question-outline",
      },
      {
        title: "Limited Visibility",
        desc: "No overview for HR teams to monitor candidate progress in real time.",
        icon: "mdi:eye-off-outline",
      },
    ],
    solutions: [
      {
        title: "Centralized HRMS Portal",
        desc: "One place to manage all jobs, resumes, rounds, and results.",
        icon: "mdi:folder-account-outline",
      },
      {
        title: "Structured Interview Flow",
        desc: "Define multiple interview types, assign rounds, and collect feedback easily.",
        icon: "mdi:timeline-text-outline",
      },
      {
        title: "Real-Time Progress Tracking",
        desc: "Automated status updates and dashboards for HR visibility.",
        icon: "mdi:progress-clock",
      },
      {
        title: "AI Resume Parsing",
        desc: "Python-powered module to scan resumes and auto-fill candidate records.",
        icon: "mdi:robot-happy-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "HRMS",
        image: AppIcons.HRMS1,
      },
      {
        id: 2,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "HRMS",
        image: AppIcons.HRMS2,
      },
      {
        id: 3,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "HRMS",
        image: AppIcons.HRMS3,
      },
      {
        id: 4,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "HRMS",
        image: AppIcons.HRMS4,
      },
      {
        id: 5,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "HRMS",
        image: AppIcons.HRMS5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "HRMS",
        image: AppIcons.HRMS6,
      },
      {
        id: 7,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "HRMS",
        image: AppIcons.HRMS7,
      },
      {
        id: 8,
        title: "SEO Optimized Content",
        description: "Structured content aligned with SEO best practices.",
        category: "HRMS",
        image: AppIcons.HRMS8,
      },
      {
        id: 9,
        title: "Mobile-First Design",
        description: "Optimized layout for seamless access on all devices.",
        category: "HRMS",
        image: AppIcons.HRMS9,
      },
      {
        id: 10,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "HRMS",
        image: AppIcons.HRMS10,
      },
      {
        id: 11,
        title: "Services Showcase",
        description: "Dedicated sections for services and industry value.",
        category: "HRMS",
        image: AppIcons.HRMS11,
      },
      {
        id: 12,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "HRMS",
        image: AppIcons.HRMS12,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "Moltech is very enthusiastic developer cum Director. Technology is not a barrier for him. He can work with any technology given. He is very soft spoken and humble. He is always helpful to the co-workers and team members. It was really very awesome experience working with him. I strongly recommended his programming skill and working style.",
    author: "Vinod Satapara",
    title: "Director at iFour Technolab Pvt. Ltd.",
  },
resultsSection: {
  title: "Business Values Provided",
  description:
    "The digital transformation delivered significant value across key business areas.",
  values: [
    {
      title: "Improved Recruitment Speed & Transparency",
      description:
        "Streamlined workflows and clear stage tracking made hiring faster, fairer, and more accountable.",
      icon: "mdi:clock-fast",
    },
    {
      title: "Centralized Candidate Data",
      description:
        "All applicant profiles, evaluations, and communications were unified for easier access and better decisions.",
      icon: "mdi:account-multiple-outline",
    },
    {
      title: "Reduced Manual Work via Automation & AI",
      description:
        "AI-driven filters and automated notifications minimized repetitive tasks and saved valuable HR time.",
      icon: "mdi:robot-industrial-outline",
    },
    {
      title: "Enhanced HR–Interviewer Collaboration",
      description:
        "Role-based access and shared evaluation tools boosted alignment between hiring teams and decision-makers.",
      icon: "ph:users-three-duotone",
    },
  ],
}
,
};

export default EchemPortalData;
