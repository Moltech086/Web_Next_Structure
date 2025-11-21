import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const EchemEmailAutomationData = {
slug: "event-driven-email-automation-and-classification-system-case-study",
    heroSection: {
        title: "Echem",
        HeroImage: AppIcons.PubsubWorkflow,
        highlight: "Email Automation and Classification System",
        description:
            "An event-driven automation system built for Echem to classify and process high-volume regulatory emails using GCP Pub/Sub, FastAPI, and RabbitMQ—enabling real-time ingestion, ML classification, and seamless OMS delivery.",
        location: {
            icon: "mdi:map-marker",
            label: "USA",
        },
        industry: {
            icon: "mdi:medical-bag",
            label: "Pharmaceuticals",
        },
        services: [
            {
                name: "Email Automation",
                icon: "mdi:email-sync-outline",
                href: "/services/ai-solutions",
            },
            {
                name: "Classification System",
                icon: "mdi:shape-outline",
                href: "/services/ai-solutions",
            },
            {
                name: "Microservices Architecture",
                icon: "mdi:server-network",
                href: "/services/custom-software-development",
            },
            {
                name: "Queue-based Messaging",
                icon: "mdi:queue",
                href: "/services/custom-software-development",
            },
        ],
        card: {
            mainIcon: "mdi:email-fast-outline",
            lines: ["w-3-4", "w-1-2"],
            iconRow: [
                { icon: "mdi:cloud-outline", bg: "bg-blue" },
                { icon: "mdi:shape-outline", bg: "bg-green" },
                { icon: "mdi:server-network", bg: "bg-yellow" },
            ],
        },
    },
    metaConfig: {
  title:
    "Event‑Driven Email Automation & Classification System Case Study | Moltech Solutions Inc.",
  description:
    "Discover how Moltech Solutions implemented a real‑time, event‑driven email ingestion and ML classification pipeline using Pub/Sub, FastAPI, and RabbitMQ—delivering structured data seamlessly into downstream systems.",
  keywords:
    "event-driven email automation, ML email classification, GCP Pub/Sub, FastAPI, RabbitMQ, microservices architecture, OMS integration, email parsing",
  canonical:
    `${BASE_URL}/case-study/event-driven-email-automation-and-classification-system-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Event‑Driven Email Automation & Classification System Case Study | Moltech Solutions Inc.",
    description:
      "Discover how Moltech Solutions implemented a real‑time, event‑driven email ingestion and ML classification pipeline using Pub/Sub, FastAPI, and RabbitMQ—delivering structured data seamlessly into downstream systems.",
    url:
      `${BASE_URL}/case-study/event-driven-email-automation-and-classification-system-case-study`,
    image:
      `${BASE_URL}/images/meta/event-driven-email-automation-and-classification-system-case-study.svg`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Event‑Driven Email Automation & Classification System Case Study | Moltech Solutions Inc.",
    description:
      "See how Moltech Solutions built a real‑time event-driven email ingestion and ML classification pipeline with Pub/Sub, FastAPI, and RabbitMQ for seamless system integration.",
    image:
      `${BASE_URL}/images/meta/event-driven-email-automation-and-classification-system-case-study.svg`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
    projectDetails: {
        description:
            "We built a real-time, event-driven email ingestion and classification pipeline for Echem, automating the extraction and transformation of unstructured email content and attachments using GCP Pub/Sub, FastAPI, RabbitMQ, and custom ML models—ultimately enabling structured data handoff to their Order Management System (OMS).",
    },
    aboutSection: {
        description1:
            "Echem is a pharmaceutical-focused organization specializing in regulatory data exchange and research workflows. Every day they handle large volumes of structured and unstructured communications, especially email-based quotes and documentation—creating a need for a fully automated ingestion and classification pipeline.",
        industry: "Pharmaceuticals",
        projectType: "Email Automation and Classification System",
        technologies: [
            {
                name: "FastAPI",
                icon: "logos:fastapi",
                description: "Python-based backend framework powering modular microservices.",
            },
            {
                name: "Google Cloud Pub/Sub",
                icon: "logos:google-cloud",
                description: "Message-driven event ingestion and distribution platform.",
            },
            {
                name: "RabbitMQ",
                icon: "logos:rabbitmq-icon",
                description: "Message broker managing asynchronous queues for ML pipelines.",
            },
            {
                name: "MongoDB",
                icon: "logos:mongodb-icon",
                description: "NoSQL database for storing incoming payloads and email data.",
            },
            {
                name: "Custom ML Classification Model",
                icon: "mdi:robot-outline",
                description: "Label classification engine trained to identify 'Quote' emails.",
            },
            {
                name: "Marker (Markdown Parser)",
                icon: "mdi:file-code-outline",
                description: "Custom model for converting attachments to Markdown format.",
            },
            {
                name: "Email Validation Logic",
                icon: "mdi:email-check-outline",
                description: "Ensures sender authenticity before downstream processing.",
            },
        ],
    },
    majorFeatures: {
        features: [
            {
                title: "Real-Time Ingestion",
                description:
                    "GCP Pub/Sub subscription streams new Gmail events to FastAPI.",
                icon: "mdi:clock-fast",
            },
            {
                title: "FastAPI Webhook",
                description:
                    "Validates, parses, and persists incoming email data to MongoDB.",
                icon: "mdi:webhook",
            },
            {
                title: "Asynchronous Classification",
                description:
                    "RabbitMQ-driven queues for scalable ML-based email labeling.",
                icon: "mdi:format-list-checks",
            },
            {
                title: "Document Parsing Pipeline",
                description:
                    "Marker-powered conversion of attachments into Markdown for easy downstream consumption.",
                icon: "mdi:file-document-outline",
            },
            {
                title: "OMS Integration",
                description:
                    "Decoupled delivery of structured email data into the Order Management System via RabbitMQ.",
                icon: "mdi:integration",
            },
            {
                title: "Scalable Microservices Architecture",
                description:
                    "Independently deployable services ensure high availability and future extensibility.",
                icon: "mdi:application-brackets-outline",
            },
        ],
    },
    challengeSolution: {
        challenges: [
            {
                title: "Real-Time Email Ingestion",
                desc: "Capturing each incoming Gmail message instantly and reliably, without missing or duplicating events.",
                icon: "mdi:email-arrow-right-outline",
            },
            {
                title: "Accurate Classification & Validation",
                desc: "Distinguishing 'Quote' emails from other correspondence and ensuring each message comes from a valid, authorized account.",
                icon: "mdi:shield-check-outline",
            },
            {
                title: "Attachment Handling & Parsing",
                desc: "Processing diverse file types (PDFs, DOCXs, images) and converting them into clean, structured Markdown.",
                icon: "mdi:file-document-multiple-outline",
            },
            {
                title: "Asynchronous Reliability",
                desc: "Coordinating multiple queues (GCP Pub/Sub → FastAPI → RabbitMQ) with retry logic, back-pressure management, and health checks to prevent message loss or bottlenecks.",
                icon: "mdi:reload-alert",
            },
            {
                title: "Multi-Service Integration",
                desc: "Orchestrating smooth data flow between GCP Pub/Sub, FastAPI services, the ML classification model, and the downstream OMS without tight coupling.",
                icon: "mdi:vector-link",
            },
        ],
        solutions: [
            {
                title: "GCP Pub/Sub Push Subscriptions",
                desc: "Leveraged Pub/Sub’s push model to deliver every new Gmail event directly to our FastAPI webhook, guaranteeing real‑time delivery.",
                icon: "mdi:cloud-upload-outline",
            },
            {
                title: "ML-Driven Label Classification",
                desc: "Routed emails through a RabbitMQ queue feeding a custom ML service that validates sender accounts and accurately assigns labels.",
                icon: "mdi:robot-outline",
            },
            {
                title: "Marker-Powered Document Parser",
                desc: "Integrated a Markdown-conversion model to extract text and structure from attachments, normalizing outputs into a consistent format.",
                icon: "mdi:file-code-outline",
            },
            {
                title: "Resilient Queue Orchestration",
                desc: "Implemented retry policies, DLQs, and health-check endpoints to ensure message durability and fault tolerance.",
                icon: "mdi:repeat-variant",
            },
            {
                title: "Modular Microservices Architecture",
                desc: "Decoupled each function—event ingestion, parsing, classification, and delivery—into standalone FastAPI services for scalability.",
                icon: "mdi:application-cog-outline",
            },
        ],
    },
    projectSnippets: {
        projectSnippets: [
            {
                id: 1,
                title: "Pub/Sub Workflow",
                description: "Workflow diagram showing the event-driven email ingestion and classification pipeline.",
                category: "echem",
                image: AppIcons.PubsubWorkflow,
            },
        ],
    },
    resultsSection: {
        title: "Business Values Provided",
        description:
            "The email automation system drastically improved turnaround time, accuracy, and system integration while reducing repetitive human effort.",
        values: [
            {
                title: "Reduced Manual Effort",
                description:
                    "Fully automates email triage, classification, and extraction—eliminating repetitive human tasks.",
                icon: "mdi:account-off",
            },
            {
                title: "Faster Turnaround",
                description:
                    "Cuts the time from email receipt to actionable data by over 70%.",
                icon: "mdi:clock-outline",
            },
            {
                title: "Improved Accuracy",
                description:
                    "ML-driven classification and parser-based extraction minimize manual errors.",
                icon: "mdi:check-decagram-outline",
            },
            {
                title: "Seamless Integration",
                description:
                    "Plug-and-play compatibility with OMS and email infrastructure.",
                icon: "mdi:lan-connect",
            },
            {
                title: "Regulatory Compliance",
                description:
                    "Structured, auditable handling of all incoming communications.",
                icon: "mdi:file-document-alert-outline",
            },
        ],
    },
};

export default EchemEmailAutomationData;