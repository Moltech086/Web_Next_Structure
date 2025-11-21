import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const RPAEcosystemData = {
    slug: "scalable-internal-automation-platform-case-study",
    heroSection: {
        title: "Routine Process Automation Platform",
        HeroImage: AppIcons.RPAWorkflow,
        highlight: "Scalable Internal Automation for Data-Driven Teams",
        description:
            "The Routine Process Automation (RPA) platform is an internal system developed to handle end-to-end product data workflows, including file-based supplier data ingestion, supplier website scraping, data cleaning and transformation, and importing cleaned data into the internal SQL Server (SSMS) database.",
        location: {
            icon: "mdi:email-outline",
            label: "Internal Automation Team/R&D Department",
        },
        industry: {
            icon: "mdi:flask-outline",
            label: "Pharmaceutical, Chemical, Data & Research Services",
        },
        services: [
            {
                name: "Enterprise Internal Automation",
                icon: "mdi:robot-industrial-outline",
                href: "/services/ai-solutions",
            },
            {
                name: "Robotic Process Automation (RPA)",
                icon: "mdi:robot-outline",
                href: "/services/ai-solutions",
            },
            {
                name: "Data Cleaning & ETL Pipelines",
                icon: "mdi:database-cog-outline",
                href: "/services/data-preprocessing-and-cleaning",
            },
            {
                name: "Custom Middleware Services",
                icon: "mdi:application-cog",
                href: "/services/custom-software-development",
            },
        ],
        card: {
            mainIcon: "mdi:robot-outline",
            lines: ["w-3-5", "w-2-4"],
            iconRow: [
                { icon: "mdi:file-upload-outline", bg: "bg-blue" },
                { icon: "mdi:database-import-outline", bg: "bg-green" },
                { icon: "mdi:robot-industrial-outline", bg: "bg-orange" },
            ],
        },
    },
    metaConfig: {
  title:
    "Scalable Internal Automation Platform Case Study | Moltech Solutions Inc.",
  description:
    "Discover how Moltech Solutions built a scalable internal automation platform to streamline supplier data ingestion, web scraping, data cleaning, and ETL pipelines—boosting operational efficiency and data accuracy.",
  keywords:
    "internal automation platform, RPA ecosystem, data pipeline automation, ETL pipelines, robotic process automation, middleware scheduling",
  canonical:
    `${BASE_URL}/case-study/scalable-internal-automation-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Scalable Internal Automation Platform Case Study | Moltech Solutions Inc.",
    description:
      "Discover how Moltech Solutions built a scalable internal automation platform to streamline supplier data ingestion, web scraping, data cleaning, and ETL pipelines—boosting operational efficiency and data accuracy.",
    url:
      `${BASE_URL}/case-study/scalable-internal-automation-platform-case-study`,
    image:
      `${BASE_URL}/images/meta/scalable-internal-automation-platform-case-study.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Scalable Internal Automation Platform Case Study | Moltech Solutions Inc.",
    description:
      "Discover how Moltech Solutions built a scalable internal automation platform to streamline supplier data ingestion, web scraping, data cleaning, and ETL pipelines—boosting operational efficiency and data accuracy.",
    image:
      `${BASE_URL}/images/meta/rpa_workflow.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}   ,

    projectDetails: {
        description:
            "The Routine Process Automation (RPA) platform is an internal system developed to handle end-to-end product data workflows, including file-based supplier data ingestion, supplier website scraping, data cleaning and transformation, and importing cleaned data into the internal SQL Server (SSMS) database.",
    },
    aboutSection: {
        description1:
            "The Internal Automation Team serves a data-driven organization managing large-scale product data pipelines for research, sourcing, and market intelligence.",
        description2:
            "Faced with increasing supplier and product volumes, the team required an intelligent, scalable automation system to eliminate manual scraping, data cleaning, and import processes, enabling operational efficiency and consistency across workflows.",
        industry:
            "Pharmaceutical, Chemical, Data & Research Services, Enterprise Automation Solutions",
        projectType:
            "Enterprise Internal Automation, Robotic Process Automation Ecosystem (RPA), and Data Cleaning & ETL Pipelines.",
        technologies: [
            {
                name: ".NET (C#)",
                icon: "logos:dotnet",
                description: "Frontend: .NET, React.js",
            },
            {
                name: "React.js",
                icon: "logos:react",
                description: "Frontend: .NET, React.js",
            },
            {
                name: "Python",
                icon: "logos:python",
                description: "Backend (Core Processing): Python",
            },
            {
                name: "Flask + Flask-SocketIO",
                icon: "simple-icons:flask",
                description:
                    "Frameworks & Libraries: Flask + Flask-SocketIO, APScheduler, Pandas, Pubchempy, Requests-HTML/Aiohttp, PyODBC, SQLAlchemy, Cryptography, WebSocket-Client, Wget",
            },
            {
                name: "SQL Server",
                icon: "mdi:database",
                description: "Databases: SQL Server (Primary)",
            },
            {
                name: "MySQL",
                icon: "vscode-icons:file-type-mysql",
                description: "Databases: MySQL (Legacy/Temporary)",
            },
            {
                name: "FileManager API",
                icon: "mdi:file-cabinet",
                description:
                    "Databases: FileManager API for centralized file storage",
            },
            {
                name: "Docker",
                icon: "logos:docker-icon",
                description: "Infrastructure: Docker",
            },
            {
                name: "IIS",
                icon: "mdi:server",
                description: "Infrastructure: IIS",
            },
        ],
    },
    majorFeatures: {
        features: [
            {
                title: "Upload Interface",
                description:
                    "Allows users to upload Excel/TXT supplier files, select the relevant supplier module, and choose the processing server. This ensures files are routed correctly and processed efficiently.",
                icon: "mdi:file-upload-outline",
            },
            {
                title: "Distributed Scraper Clients",
                description:
                    "Supports standard, VPN, and Tor-based clients, enabling resilient scraping while accessing region-restricted supplier websites and rotating IPs for reliable data collection.",
                icon: "mdi:web",
            },
            {
                title: "File Manager Integration",
                description:
                    "Integrates with a centralized FileManager API to manage all input and output files systematically, ensuring documents are traceable, organized, and securely stored.",
                icon: "mdi:file-cabinet",
            },
            {
                title: "Middleware Server Scheduling",
                description:
                    "The middleware server dynamically schedules and distributes scraping and processing tasks across clients based on availability and task type, maximizing system throughput.",
                icon: "mdi:router-wireless-settings",
            },
            {
                title: "Automated Cleaning & Importing",
                description:
                    "Automatically cleans, standardizes, and transforms scraped data before importing it into SQL Server, ensuring data consistency and readiness for analysis and operations.",
                icon: "mdi:database-import-outline",
            },
            {
                title: "Logs & Status Tracking",
                description:
                    "Provides real-time visibility into the status of each automation task, detailed logs for every step, and progress tracking via the RPA web portal, ensuring transparency and easy troubleshooting.",
                icon: "mdi:clipboard-text-clock-outline",
            },
            {
                title: "Advanced Processing Extensions",
                description:
                    "Supports image generation, email validation, and chemical information enrichment using PubChem, expanding the system's capabilities beyond basic scraping and importing.",
                icon: "mdi:flask-outline",
            },
            {
                title: "Downloadable Output",
                description:
                    "Users can view and download cleaned and processed output files directly from the platform, which simplifies integration and integration into downstream workflows.",
                icon: "mdi:file-download-outline",
            },
        ],
    },
    challengeSolution: {
        challenges: [
            {
                title: "Lack of Centralized Scraper Management",
                desc: "The challenge was the absence of a centralized system for managing scraper pipelines and logs.",
                icon: "mdi:account-network-outline",
            },
            {
                title: "Inconsistent File Formats",
                desc: "Inconsistent supplier file formats require dynamic processing logic.",
                icon: "mdi:file-alert-outline",
            },
            {
                title: "Region-Restricted Supplier Websites",
                desc: "Accessing region-restricted supplier websites requires the use of a VPN or Tor.",
                icon: "mdi:map-marker-off-outline",
            },
            {
                title: "File and Log Synchronization",
                desc: "Synchronization of files and logs between clients and servers.",
                icon: "mdi:sync-circle",
            },
            {
                title: "Data Traceability",
                desc: "We ensure data traceability during the importation of cleansed data.",
                icon: "mdi:history",
            },
            {
                title: "Scalability for New Suppliers",
                desc: "Scalability challenges with onboarding new suppliers and modules.",
                icon: "mdi:chart-bubble",
            },
        ],
        solutions: [
            {
                title: "Modular RPA Architecture",
                desc: "We designed a modular, scalable RPA architecture using Flask, SocketIO, and Docker.",
                icon: "mdi:cube-outline",
            },
            {
                title: "Middleware Server",
                desc: "Built a middleware server to intelligently schedule and route tasks to appropriate clients.",
                icon: "mdi:server-network-outline",
            },
            {
                title: "VPN and Tor Scraping",
                desc: "Integrated VPN and Tor-based scraping for region-specific data extraction.",
                icon: "mdi:shield-airplane-outline",
            },
            {
                title: "Chemical Enrichment",
                desc: "Enabled PubChem-based chemical data enrichment.",
                icon: "mdi:flask-outline",
            },
            {
                title: "Centralized File Manager",
                desc: "Developed a centralized FileManager API for managing input/output files.",
                icon: "mdi:file-tree-outline",
            },
            {
                title: "Log Tracking System",
                desc: "Built a log-tracking system for complete visibility and auditing.",
                icon: "mdi:file-tree-outline",
            },
            {
                title: "Cleaner Engine & DataUploadClient",
                desc: "Developed a Cleaner Engine to convert raw scraped data into import-ready formats automatically. A DataUploadClient has been added to securely import cleaned data into SQL Server.",
                icon: "mdi:database-import-outline",
            },
        ],
    },
    projectSnippets: {
        projectSnippets: [
            {
                id: 1,
                title: "Homepage Hero Section",
                description: "Stunning oceanfront view with modern booking interface",
                category: "Quick Visa",
                image: AppIcons.RPAEcosystem1,
            },
            {
                id: 2,
                title: "Room Gallery",
                description: "Interactive room showcase with detailed amenities",
                category: "Quick Visa",
                image: AppIcons.RPAEcosystem2,
            },
            {
                id: 3,
                title: "Mobile Responsive Design",
                description: "Seamless experience across all devices",
                category: "Quick Visa",
                image: AppIcons.RPAEcosystem3,
            },
            {
                id: 4,
                title: "Homepage Hero Section",
                description: "Stunning oceanfront view with modern booking interface",
                category: "Quick Visa",
                image: AppIcons.RPAEcosystem4,
            },
            {
                id: 5,
                title: "Room Gallery",
                description: "Interactive room showcase with detailed amenities",
                category: "Quick Visa",
                image: AppIcons.RPAEcosystem5,
            },
            {
                id: 6,
                title: "Mobile Responsive Design",
                description: "Seamless experience across all devices",
                category: "Quick Visa",
                image: AppIcons.RPAEcosystem6,
            },
        ],
    },
    resultsSection: {
        title: "Business Value Provided",
        description:
            "Reduced manual data entry and processing time by over 80%.",
        values: [
            {
                title: "80% Time Reduction",
                description:
                    "Reduced manual data entry and processing time by over 80%.",
                icon: "mdi:clock-check-outline",
            },
            {
                title: "Parallel Processing for 100+ Suppliers",
                description: "Enabled handling of 100+ suppliers in parallel.",
                icon: "mdi:server-network-outline",
            },
            {
                title: "Improved Data Accuracy",
                description:
                    "Improved data accuracy and consistency across product records.",
                icon: "mdi:alert-circle-check-outline",
            },
            {
                title: "Centralized Monitoring & Traceability",
                description:
                    "Centralized monitoring and traceability of all automation requests.",
                icon: "mdi:clipboard-text-clock-outline",
            },
            {
                title: "Scalable for New Modules",
                description:
                    "Scalable system for onboarding new modules and suppliers with minimal developer intervention.",
                icon: "mdi:chart-multiline",
            },
            {
                title: "Chemical Info Integration",
                description:
                    "Enhanced data enrichment for research and analysis with chemical info integration.",
                icon: "mdi:flask-outline",
            },
        ],
    },
};

export default RPAEcosystemData;
