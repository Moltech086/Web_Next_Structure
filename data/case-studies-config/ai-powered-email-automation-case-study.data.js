import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const EchemEPSData = {
  slug: "ai-powered-email-automation-case-study",
  // ✅ Add metadata for SEO
 metaConfig: {
  title:
    "AI‑Powered Email Automation Case Study | Moltech Solutions Inc.",
  description:
    "Discover how Moltech Solutions built an AI‑driven email processing system to automatically classify, extract, and manage high‑volume quotation emails—boosting accuracy, speed, and seamless ERP/CRM integration.",
  keywords:
    "email automation, AI email processing, ML NLP automation, quotation data extraction, document workflow automation, SaaS email system",
  canonical:
    `${BASE_URL}/case-study/ai-powered-email-automation-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "AI‑Powered Email Automation Case Study | Moltech Solutions Inc.",
    description:
      "Discover how Moltech Solutions built an AI‑driven email processing system to automatically classify, extract, and manage high‑volume quotation emails—boosting accuracy, speed, and seamless ERP/CRM integration.",
    url:
      `${BASE_URL}/case-study/ai-powered-email-automation-case-study`,
    image:
      `${BASE_URL}/images/meta/ai-powered-email-automation-case-study.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI‑Powered Email Automation Case Study | Moltech Solutions Inc.",
    description:
      "Explore how Moltech Solutions created an AI‑driven platform that automates classification and data extraction of high‑volume quotation emails, ensuring faster, more accurate workflows.",
    image:
      `${BASE_URL}/images/meta/ai-powered-email-automation-case-study.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},


  heroSection: {
    title: "EPS – Email Processing System",
    HeroImage: AppIcons.EPS1,
    highlight: "AI-Powered Email Automation for Chemical Trading",
    description: "EPS (Email Processing System) is an AI-driven automation platform developed for Echem to intelligently process and manage high volumes of quotation emails in the chemical trading domain.",
    location: {
      icon: "mdi:email-outline",
      label: "Chemical Trading – Global",
    },
    industry: {
      icon: "mdi:flask-outline",
      label: "Chemical Trading, Supply Chain",
    },
    services: [
      {
        name: "AI & ML Integration",
        icon: "mdi:robot-outline",
        href: "/services/ai-solutions",
      },
      {
        name: "Custom Software Platform",
        icon: "mdi:application-cog",
        href: "/services/custom-software-development",
      },
      {
        name: "NLP Automation",
        icon: "mdi:brain",
        href: "/services/ai-solutions",
      },
    ],
    card: {
      mainIcon: "mdi:email-fast-outline",
      lines: ["w-3-5", "w-2-4"],
      iconRow: [
        { icon: "mdi:robot-outline", bg: "bg-blue" },
        { icon: "mdi:flask-outline", bg: "bg-green" },
        { icon: "mdi:email-outline", bg: "bg-orange" },
      ],
    },
  },

  projectDetails: {
    description:
      "Echem partnered with us to build the Email Processing System (EPS), an intelligent platform to automate the intake, classification, and data extraction from high volumes of quotation-related emails in the chemical trading space. The system fetches emails from multiple mailboxes, classifies them using machine learning models, and extracts key data like CAS numbers, chemical names, and quantities, even from complex tables within emails. EPS integrates fine-tuned large language models (LLMs) for advanced unstructured data extraction while providing a user verification interface to review and correct data before pushing it to Echem’s internal request modules. This reduces manual workload, speeds up quotation processing, and ensures accurate, consistent data for procurement and follow-ups. The scalable architecture allows Echem to extend automation to invoices, order confirmations, and payment tracking, future-proofing their operations while maintaining data integrity across ERP and CRM systems.",
  },

  aboutSection: {
    description1:
      "Echem is a domain expert in chemical trading and sourcing, managing a high volume of client and vendor interactions primarily through email.",
    description2:
      "To scale operations and reduce manual processing, Echem initiated the EPS project to automate the intake, classification, extraction, and management of quotation-related emails, ensuring faster and more accurate responses.",
    industry: "Chemical Trading, Supply Chain",
    projectType: "Email Automation System using ML & NLP",
    technologies: [
      {
        name: "Ubuntu Server 22.04 LTS",
        icon: "logos:ubuntu",
        description:
          "Linux OS used for running scalable and secure backend services.",
      },
      {
        name: "Windows Server 2022",
        icon: "vscode-icons:file-type-powershell",
        description:
          "Windows-based environment for compatibility with legacy internal systems.",
      },
      {
        name: "Python",
        icon: "logos:python",
        description:
          "Core language used for backend, ML, and NLP logic.",
      },
      {
        name: "Vanilla JS (HTML/CSS)",
        icon: "vscode-icons:file-type-js-official",
        description:
          "Frontend components built using plain JavaScript and standard web technologies.",
      },
      {
        name: "Django",
        icon: "logos:django",
        description:
          "Python-based web framework used for administrative and user interfaces.",
      },
      {
        name: "FastAPI",
        icon: "logos:fastapi",
        description:
          "High-performance framework used to power APIs with async support.",
      },
      {
        name: "Docker & Docker Compose",
        icon: "logos:docker-icon",
        description:
          "Used for containerizing services to support local development and production deployment.",
      },
      {
        name: "RestTests",
        icon: "mdi:test-tube",
        description:
          "Tool used for REST API testing and regression validation.",
      },
      {
        name: "TensorFlow",
        icon: "logos:tensorflow",
        description:
          "ML framework used for model training and classification tasks.",
      },
      {
        name: "PyTorch",
        icon: "logos:pytorch-icon",
        description:
          "Deep learning framework used alongside TensorFlow for certain model types.",
      },
      {
        name: "Hugging Face Transformers",
        icon: "simple-icons:huggingface",
        description:
          "Library used to access pretrained LLMs and apply NLP tasks like classification and extraction.",
      },
      {
        name: "Custom Mistral-7B LLM",
        icon: "mdi:brain",
        description:
          "Fine-tuned local model used for chemical-specific data extraction and context recognition.",
      },
      {
        name: "MongoDB",
        icon: "vscode-icons:file-type-mongo",
        description:
          "NoSQL document database used for email, logs, and metadata storage.",
      },
    ],
  },

  majorFeatures: {
    features: [
      {
        title: "Automated Email Classification",
        description:
          "Sorts incoming emails by category, priority, and business relevance using machine learning models.",
        icon: "mdi:email-outline",
      },
      {
        title: "Advanced Data Extraction",
        description:
          "Extracts CAS numbers, chemical names, quantities, and other key fields from quotations, including from complex tables.",
        icon: "mdi:file-search-outline",
      },
      {
        title: "Fine-Tuned LLM Integration",
        description:
          "Uses a custom fine-tuned Mistral-7B LLM to enhance contextual understanding and extraction accuracy.",
        icon: "mdi:brain",
      },
      {
        title: "User Verification Panel",
        description:
          "Enables users to review, confirm, and edit extracted data and email labels with an intuitive web interface.",
        icon: "mdi:account-check-outline",
      },
      {
        title: "Email Statistics & Dashboards",
        description:
          "Provides real-time insights on email volumes, processing status, and label accuracy.",
        icon: "mdi:view-dashboard-outline",
      },
      {
        title: "Rule Configuration Interface",
        description:
          "Allows configuration of custom rules for email classification and data extraction logic to align with evolving business needs.",
        icon: "mdi:filter-settings-outline",
      },
      {
        title: "IMAP and Gmail API Integration",
        description:
          "Fetches and centralizes emails from multiple customer and vendor mailboxes into a unified system.",
        icon: "mdi:email-sync-outline",
      },
      {
        title: "External System Integration",
        description:
          "Pushes verified, structured data into Echem’s EMS Quote modules, with future readiness for ERP and CRM syncing.",
        icon: "mdi:database-sync",
      },
      {
        title: "Audit and Logging System",
        description:
          "Tracks all user actions, errors, and label corrections for transparency, auditing, and continuous model improvement.",
        icon: "mdi:clipboard-text-clock-outline",
      },
    ],
  },

  challengeSolution: {
    challenges: [
      {
        title: "Unstructured Email Volume",
        desc: "Managing high volumes of emails with mixed structures (plain text, HTML, and embedded tables) presents challenges.",
        icon: "mdi:email-multiple-outline",
      },
      {
        title: "Similar Email Types",
        desc: "I must distinguish between similar email types such as quotes, inquiries, and follow-ups.",
        icon: "mdi:email-variant",
      },
      {
        title: "Chemical Data Extraction",
        desc: "I am responsible for extracting highly variable chemical data, such as CAS No., chemical names, and quantities, from semi-structured emails.",
        icon: "mdi:flask-outline",
      },
      {
        title: "Accuracy with Minimal Effort",
        desc: "I am responsible for ensuring data accuracy and validation with minimal manual intervention.",
        icon: "mdi:check-decagram",
      },
      {
        title: "ERP/CRM Sync",
        desc: "We ensure data consistency by integrating with external ERP and CRM systems.",
        icon: "mdi:database-arrow-right-outline",
      },
    ],
    solutions: [
      {
        title: "AI-Based Email Classification",
        desc: "Implemented AI-based email classification models trained on historical labeled data to categorize emails efficiently.",
        icon: "mdi:robot-outline",
      },
      {
        title: "Rule-Based Correction Engine",
        desc: "Developed a rule-based label correction engine to refine AI predictions and adapt to evolving business needs.",
        icon: "mdi:filter-check-outline",
      },
      {
        title: "LLM-Based Data Extraction",
        desc: "Integrated fine-tuned local LLMs to extract chemical-related data from unstructured and structured content.",
        icon: "mdi:brain",
      },
      {
        title: "Table Extraction Module",
        desc: "Built a custom module for extracting table attachments.",
        icon: "mdi:table-large",
      },
      {
        title: "Verification UI",
        desc: "Designed a web-based verification interface for users to validate and correct extracted data seamlessly.",
        icon: "mdi:account-check-outline",
      },
      {
        title: "Logging & Exception Handling",
        desc: "Enabled robust logging and exception tracking for transparency and easy debugging.",
        icon: "mdi:alert-octagon-outline",
      },
      {
        title: "ERP/CRM Data Integration",
        desc: "Established integration pipelines to sync verified data with Echem’s EMS Quote module and prepare for ERP/CRM connections.",
        icon: "mdi:database-sync-outline",
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
        image: AppIcons.EPSWorkFlow,
      },
      {
        id: 2,
        title: "EPS Dashboard",
        description: "Live email statistics and processing metrics for admins",
        category: "echem-eps",
        image: AppIcons.EPS1,
      },
      {
        id: 3,
        title: "Processed Emails",
        description: "Processed emails with labels and extracted data",
        category: "echem-eps",
        image: AppIcons.EPS2,
      },
      {
        id: 4,
        title: "Incorrect Processed Emails",
        description: "Processed emails with incorrect labels and extracted data",
        category: "echem-eps",
        image: AppIcons.EPS3,
      },
      {
        id: 5,
        title: "Label Configuration",
        description: "Configuration of custom rules for email classification and data extraction logic to align with evolving business needs.",
        category: "echem-eps",
        image: AppIcons.EPS4,
      },
      {
        id: 6,
        title: "Table Configuration",
        description: "Configuration of custom rules for table extraction logic to align with evolving business needs.",
        category: "echem-eps",
        image: AppIcons.EPS5,
      },
      {
        id: 7,
        title: "Trash Emails",
        description: "Trash emails with incorrect labels and extracted data",
        category: "echem-eps",
        image: AppIcons.EPS6,
      },
    ],
  },

  testimonialSection: {
    // ... existing testimonial section
  },

  resultsSection: {
    title: "Business Value Provided",
    description:
      "70–80% reduction in manual email triaging and labeling, freeing up valuable staff time.",
    values: [
      {
        title: "Improved Efficiency",
        description: "70–80% reduction in manual email triaging and labeling, freeing up valuable staff time.",
        icon: "akar-icons:reduce"
      },
      {
        title: "Faster Quote Processing",
        description:
          "Faster, more accurate quote processing, improving turnaround times and customer responsiveness.",
        icon: "mdi:clock-check-outline",
      },
      {
        title: "Minimized Human Error",
        description:
          "Minimized human error in data entry and quotation processing, ensuring data reliability.",
        icon: "mdi:alert-circle-check-outline",
      },
      {
        title: "Self-Improving System",
        description:
          "Continuous learning loop through user feedback, enhancing model accuracy over time.",
        icon: "mdi:progress-auto",
      },
      {
        title: "Future-Ready Architecture",
        description:
          "Scalable architecture ready for future extensions like invoice and payment tracking automation.",
        icon: "mdi:chart-areaspline-variant",
      },
      {
        title: "ERP/CRM Integration-Ready",
        description:
          "Integration-ready structure for seamless syncing with ERP and CRM systems, supporting end-to-end digital workflows.",
        icon: "mdi:database-arrow-right-outline",
      },
      {
        title: "Improved Efficiency & Cost Savings",
        description:
          "Improved operational efficiency and cost savings by automating repetitive, high-volume tasks.",
        icon: "mdi:cash-check",
      },
    ],
  }
};

export default EchemEPSData;
