import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const EchemOPSData = {
    slug: "ai-powered-order-processing-automation",
    heroSection: {
        title: "OPS – Order Processing System-case-study",
        HeroImage: AppIcons.OPS1,
        highlight: "AI-Powered Order Processing for Chemical & Pharma",
        description:
            "AI-powered automation of complex POs using LLMs and backend APIs.",
        location: {
            icon: "mdi:email-outline",
            label: "Chemical & Pharma – Global",
        },
        industry: {
            icon: "mdi:flask-outline",
            label: "Pharmaceutical, Chemical",
        },
        services: [
           
            {
                name: "Custom Software Platform",
                icon: "mdi:application-cog",
                href: "/services/custom-software-development",
            },
        ],
        card: {
            mainIcon: "mdi:file-document-edit-outline",
            lines: ["w-3-5", "w-2-4"],
            iconRow: [
                { icon: "mdi:robot-outline", bg: "bg-blue" },
                { icon: "mdi:flask-outline", bg: "bg-green" },
                { icon: "mdi:file-document-outline", bg: "bg-orange" },
            ],
        },
    },
    metaConfig: {
  title:
    "AI‑Powered Order Processing Automation Case Study | Moltech Solutions Inc.",
  description:
    "Discover how Moltech Solutions built an AI‑driven order processing system that automates extraction, validation, and integration of complex purchase orders—boosting speed, accuracy, and seamless ERP/OMS connectivity.",
  keywords:
    "AI order processing, intelligent document processing, PO automation, LLM integration, ERP integration, workflow automation",
  canonical:
    `${BASE_URL}/case-study/ai-powered-order-processing-automation-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "AI‑Powered Order Processing Automation Case Study | Moltech Solutions Inc.",
    description:
      "Discover how Moltech Solutions built an AI‑driven order processing system that automates extraction, validation, and integration of complex purchase orders—boosting speed, accuracy, and seamless ERP/OMS connectivity.",
    url:
      `${BASE_URL}/case-study/ai-powered-order-processing-automation-case-study`,
    image:
      `${BASE_URL}/images/meta/ai-powered-order-processing-automation-case-study.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI‑Powered Order Processing Automation Case Study | Moltech Solutions Inc.",
    description:
      "Discover how Moltech Solutions built an AI‑driven order processing system that automates extraction, validation, and integration of complex purchase orders—boosting speed, accuracy, and seamless ERP/OMS connectivity.",
    image:
      `${BASE_URL}/images/meta/ai-powered-order-processing-automation-case-study.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
    projectDetails: {
        description:
            "OPS is an AI-driven Intelligent Document Processing (IDP) and workflow automation platform designed for Echem to automate the transformation of unstructured purchase order PDFs into structured, validated data. Leveraging a fine-tuned local and proprietary extraction pipeline, the system extracts critical PO data, allowing users to validate and correct via an intuitive dashboard before pushing it seamlessly into Echem’s Order Management System (OMS).",
    },
    aboutSection: {
        description1:
            "Echem is a specialized player in the chemical trading and sourcing domain, managing a high volume of supplier communications and purchase orders daily.",
        description2:
            "P reviously reliant on manual, email-driven workflows, Echem faced inefficiencies and human errors in processing complex POs. To address these challenges, Echem initiated the Order Processing System (OPS) project to digitize and automate the end-to-end PO lifecycle, enhancing operational speed and accuracy..",
        industry: "Pharmaceutical, Chemical",
        projectType:
            "AI-powered Order Processing Automation System with LLM integration and backend API services.",
        technologies: [
            {
                name: "Python",
                icon: "logos:python",
                description:
                    "Core language used for backend, ML, and LLM-based logic.",
            },
            {
                name: "React.js",
                icon: "logos:react",
                description:
                    "Frontend technology used for building intuitive dashboards and validation panels.",
            },
            {
                name: "Django",
                icon: "logos:django",
                description:
                    "Backend framework powering the business logic and API layer.",
            },
            {
                name: "MongoDB",
                icon: "vscode-icons:file-type-mongo",
                description:
                    "NoSQL document database used to store extracted PO data, logs, and metadata.",
            },
            {
                name: "Docker & Docker Compose",
                icon: "logos:docker-icon",
                description:
                    "Used for containerizing services to support scalable deployment.",
            },
            {
                name: "TensorFlow",
                icon: "logos:tensorflow",
                description:
                    "ML framework used for PO format recognition and data extraction.",
            },
            {
                name: "PyTorch",
                icon: "logos:pytorch-icon",
                description:
                    "Used for training and deploying some of the extraction models.",
            },
            {
                name: "Hugging Face Transformers",
                icon: "simple-icons:huggingface",
                description:
                    "Access pretrained and fine-tuned models for contextual NLP extraction.",
            },
            {
                name: "Custom Mistral-7B LLM",
                icon: "mdi:brain",
                description:
                    "Fine-tuned local model used for domain-specific PO understanding and extraction.",
            },
        ],
    },
    majorFeatures: {
        features: [
            {
                title: "Automated PDF Ingestion",
                description:
                    "Automatically fetches POs from emails and allows manual uploads through the interface.",
                icon: "mdi:file-download-outline",
            },
            {
                title: "Context-Aware PO Data Extraction",
                description:
                    "Extracts CAS numbers, chemical names, quantities, and delivery terms using a fine-tuned Mistral-7B model.",
                icon: "mdi:brain",
            },
            {
                title: "User Validation Panel",
                description:
                    "Dashboard for validating extracted data, highlighting low-confidence fields for correction.",
                icon: "mdi:account-check-outline",
            },
            {
                title: "Seamless OMS Integration",
                description:
                    "Pushes validated PO data into the OMS through secure API-based pipelines.",
                icon: "mdi:database-sync",
            },
            {
                title: "NLP-Based Fuzzy Matching",
                description:
                    "Maps extracted chemical data with internal records, handling inconsistencies.",
                icon: "mdi:flask-outline",
            },
            {
                title: "Audit and Logging System",
                description:
                    "Logs user actions and system outputs for traceability and compliance.",
                icon: "mdi:clipboard-text-clock-outline",
            },
            {
                title: "Dashboard and Analytics",
                description:
                    "Tracks volumes, accuracy, and processing speed for actionable insights.",
                icon: "mdi:view-dashboard-outline",
            },
            {
                title: "Scalable Microservices Architecture",
                description:
                    "Dockerized modules for ingestion, extraction, and validation supporting independent scaling.",
                icon: "mdi:server",
            },
            {
                title: "Error Handling and Notifications",
                description:
                    "Alerts users to failures or review-needed documents to prevent losses.",
                icon: "mdi:alert-outline",
            },
        ],
    },
    challengeSolution: {
        challenges: [
            {
                title: "Non-standard PO Formats",
                desc: "Wide variations in PO formats, including scanned documents and complex layouts.",
                icon: "mdi:file-document-outline",
            },
            {
                title: "Incomplete or Inconsistent Data",
                desc: "Missing fields or inconsistent layouts across suppliers",
                icon: "mdi:file-alert-outline",
            },
            {
                title: "Non-standard Chemical Identifiers",
                desc: "Non-standard naming and CAS numbers posed challenges in standardization.",
                icon: "mdi:flask-outline",
            },
            {
                title: "Data Matching Accuracy",
                desc: "Matching extracted data accurately with internal records",
                icon: "mdi:compare",
            },
            {
                title: "Limited Historical Data",
                desc: "Limited labeled historical data for effective model training",
                icon: "mdi:history",
            },
        ],
        solutions: [
            {
                title: "Custom ML Models",
                desc: "Trained models on Echem's historical PO data to improve extraction.",
                icon: "mdi:robot-outline",
            },
            {
                title: "Rule-Based Correction Engine",
                desc: "Handled format inconsistencies with domain-specific rules.",
                icon: "mdi:filter-check-outline",
            },
            {
                title: "LLM Contextual Extraction",
                desc: "Used local Mistral-7B for contextual understanding and extraction.",
                icon: "mdi:brain",
            },
            {
                title: "Fuzzy Matching Algorithm",
                desc: "Mapped extracted data to internal SKUs using fuzzy logic.",
                icon: "mdi:flask-outline",
            },
            {
                title: "User-Friendly UI",
                desc: "React-based interface for easy validation and correction.",
                icon: "mdi:account-check-outline",
            },
            {
                title: "Dockerized Microservices",
                desc: "Deployment architecture supports flexibility and scaling.",
                icon: "mdi:docker",
            },
        ],
    },
    projectSnippets: {
        projectSnippets: [
            {
                id: 1,
                title: "OPS Workflow",
                description: "Workflow diagram showing the event-driven email ingestion and classification pipeline.",
                category: "echem",
                image: AppIcons.OPSWorkflow,
            },
            {
                id: 2,
                title: "OPS Workflow",
                description: "Workflow diagram showing the event-driven email ingestion and classification pipeline.",
                category: "echem",
                image: AppIcons.OPS1,
            },
            {
                id: 3,
                title: "OPS Workflow",
                description: "Workflow diagram showing the event-driven email ingestion and classification pipeline.",
                category: "echem",
                image: AppIcons.OPS2,
            },
            {
                id: 4,
                title: "OPS Workflow",
                description: "Workflow diagram showing the event-driven email ingestion and classification pipeline.",
                category: "echem",
                image: AppIcons.OPS3,
            },
            {
                id: 5,
                title: "OPS Workflow",
                description: "Workflow diagram showing the event-driven email ingestion and classification pipeline.",
                category: "echem",
                image: AppIcons.OPS4,
            },
            {
                id: 6,
                title: "OPS Workflow",
                description: "Workflow diagram showing the event-driven email ingestion and classification pipeline.",
                category: "echem",
                image: AppIcons.OPS5,
            },
        ],
    },
    resultsSection: {
        title: "Business Value Provided",
        description:
            "Significant time savings, faster procurement turnaround, and enhanced data accuracy.",
        values: [
            {
                title: "Significant Time Savings",
                description: "Automated data capture reduces manual workload dramatically.",
                icon: "mdi:clock-check-outline",
            },
            {
                title: "Faster Procurement Turnaround",
                description: "Processes POs faster with less manual validation.",
                icon: "mdi:rocket-launch-outline",
            },
            {
                title: "Enhanced Data Accuracy",
                description: "Improved accuracy through contextual LLM extraction and validation feedback loops.",
                icon: "mdi:alert-circle-check-outline",
            },
            {
                title: "Seamless System Integration",
                description: "Integrates effortlessly into OMS and prepares for broader ERP syncing.",
                icon: "mdi:database-sync-outline",
            },
            {
                title: "Scalable Modular Architecture",
                description: "System design allows for easy expansion and maintenance.",
                icon: "mdi:chart-areaspline-variant",
            },
            {
                title: "Foundation for AI-Driven Procurement",
                description: "Built groundwork for a fully automated, intelligent procurement lifecycle.",
                icon: "mdi:brain",
            },
        ],
    },
};

export default EchemOPSData;
