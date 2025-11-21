import { AppIcons } from "@/data/appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

const ChemicalBusinessData = {
    slug: "robotic-process-automation-and-data-management-platform-case-study",
    heroSection: {
        title: "Robotic Process Automation",
        HeroImage: AppIcons.RPAWorkflow,
        highlight: "IT Automation/Data Management",
        description:
            "A powerful, Python-powered RPA and middleware platform tailored for the chemical industry, automating data ingestion, cleaning, and processing across millions of diverse supplier records—ensuring real-time visibility, data integrity, and scalable operations.",
        location: {
            icon: "mdi:map-marker",
            label: "Global",
        },
        industry: {
            icon: "mdi:briefcase-variant-outline",
            label: "Chemical Industry Automation",
        },
        services: [
            {
                name: "RPA",
                icon: "mdi:robot",
                href: "/services/ai-solutions",
            },
            {
                name: "Middleware Development",
                icon: "mdi:server-network",
                href: "/services/web-application-development",
            },
            {
                name: "Automation",
                icon: "mdi:cog-sync-outline",
                href: "/services/ai-solutions",
            },
            {
                name: "Data Management",
                icon: "mdi:database-settings-outline",
                href: "/services/data-preprocessing-and-cleaning",
            },
        ],
        card: {
            mainIcon: "mdi:flask-outline",
            lines: ["w-3-4", "w-1-2"],
            iconRow: [
                { icon: "mdi:cloud-upload-outline", bg: "bg-green" },
                { icon: "mdi:alert-decagram", bg: "bg-yellow" },
                { icon: "mdi:server", bg: "bg-blue" },
            ],
        },
    },
    // metaConfig
metaConfig: {
  title:
    "Robotic Process Automation & Data Management Platform Case Study | Moltech Solutions Inc.",
  description:
    "Discover how Moltech Solutions built a Python‑powered RPA and middleware platform to automate ingestion, cleaning, and processing of millions of supplier records—ensuring real‑time visibility and data integrity.",
  keywords:
    "robotic process automation, RPA platform, Python middleware, data ingestion, data cleaning, chemical industry automation, distributed RPA",
  canonical: `${BASE_URL}/case-study/robotic-process-automation-and-data-management-platform-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Robotic Process Automation & Data Management Platform Case Study | Moltech Solutions Inc.",
    description:
      "Discover how Moltech Solutions built a Python‑powered RPA and middleware platform to automate ingestion, cleaning, and processing of millions of supplier records—ensuring real‑time visibility and data integrity.",
    url: `${BASE_URL}/case-study/robotic-process-automation-and-data-management-platform-case-study`,
    image: `${BASE_URL}/images/meta/robotic-process-automation-and-data-management-platform-case-study.webp`,
    type: "website",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Robotic Process Automation & Data Management Platform Case Study | Moltech Solutions Inc.",
    description:
      "See how Moltech Solutions automated ingestion, cleaning, and processing of millions of supplier records with a Python‑powered RPA and middleware platform—delivering real‑time insight and data integrity.",
    image: `${BASE_URL}/images/meta/robotic-process-automation-and-data-management-platform-case-study.svg`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},

    projectDetails: {
        description:
            "Chemical Business sources millions of product listings from both direct supplier catalogs and scraped supplier websites. To fully automate ingestion and normalization of this vast catalog, we built a distributed, Python-powered RPA and middleware platform that dynamically dispatches scripts across multiple servers and client nodes.",
    },

    aboutSection: {
        description1:
            "Chemical Business is a leading provider of IT Automation and Data Management solutions for the chemical industry. They specialize in streamlining complex workflows—ranging from data acquisition and validation to advanced reporting—so that their clients can focus on innovation and compliance rather than manual data handling.",
        industry: "IT Automation/Data Management",
        projectType: "RPA, Middleware development, Automation",
        technologies: [
            {
                name: "Windows Server IIS",
                icon: "mdi:microsoft-windows",
                description: "Web server environment used for application hosting.",
            },
            {
                name: "Docker",
                icon: "mdi:docker",
                description: "Containerization for scalable and isolated deployment.",
            },
            {
                name: "MS SQL Server 2014+",
                icon: "mdi:database",
                description: "Primary relational database for data storage.",
            },
            {
                name: "MySQL",
                icon: "logos:mysql",
                description: "Used for structured data persistence.",
            },
            {
                name: ".NET Core 5",
                icon: "mdi:dot-net",
                description: "Backend services and APIs built on .NET Core.",
            },
            {
                name: "C#",
                icon: "mdi:language-csharp",
                description: "Programming language used in backend development.",
            },
            {
                name: "Python 3.10",
                icon: "mdi:language-python",
                description: "Used for scripting RPA bots and data pipelines.",
            },
            {
                name: "React Js",
                icon: "logos:react",
                description: "Frontend library used to build orchestration console.",
            },
            {
                name: "HTML",
                icon: "mdi:language-html5",
                description: "Defines the structure and content of web pages.",
            },
            {
                name: "CSS3",
                icon: "mdi:language-css3",
                description: "Used for styling and layout of web applications.",
            },
            {
                name: "SCSS",
                icon: "mdi:sass",
                description: "Syntactically awesome style sheets for better CSS architecture.",
            },
            {
                name: "Bootstrap",
                icon: "logos:bootstrap",
                description: "Responsive UI design and layout components.",
            },
            {
                name: "JavaScript",
                icon: "logos:javascript",
                description: "Programming language for dynamic and interactive web elements.",
            },
            {
                name: "Flask 2.2.3",
                icon: "mdi:flask-outline",
                description: "Used for microservices and middleware components.",
            },
            {
                name: "Git",
                icon: "mdi:git",
                description: "Version control system for source code management.",
            },
            {
                name: "SVN",
                icon: "mdi:source-branch",
                description: "Centralized version control system for managing codebases.",
            },
            {
                name: "TOR",
                icon: "mdi:shield-key-outline",
                description: "Used for secure and anonymous routing of network traffic.",
            },
            {
                name: "Distributed & Repository Pattern",
                icon: "mdi:chart-tree",
                description: "Used to design scalable and maintainable architecture.",
            },
            {
                name: "VPN",
                icon: "mdi:lock-outline",
                description: "Used for secure remote access and encrypted communication.",
            },
            {
                name: "Container",
                icon: "mdi:package-variant-closed",
                description: "Used for deploying isolated and portable environments.",
            },
        ],
    },
    majorFeatures: {
        features: [
            {
                title: "Dashboard",
                description: "Overview of the system.",
                icon: "mdi:view-dashboard-outline",
            },
            {
                title: "RPA Processes",
                description: "Create, manage, and monitor Robotic Process Automation workflows integrated with internal systems or databases.",
                icon: "mdi:robot-industrial-outline",
            },
            {
                title: "Database Analyzer",
                description: "Analyze and validate database structures, entries, and integrity checks across environments.",
                icon: "mdi:database-eye-outline",
            },
            {
                title: "ChemIndex",
                description: "Specialized chemical indexing tool—likely for SMILES/InChI/CAS-based mapping, useful for chemical data automation.",
                icon: "mdi:flask-outline",
            },
            {
                title: "Configuration",
                description: "Global settings for RPA bots, Server & Code Management, Configuration, User Management, etc.",
                icon: "mdi:cog-outline",
            },
            {
                title: "Site Management",
                description: "File Management, Site-based Exception Handling.",
                icon: "mdi:file-cog-outline",
            },
            {
                title: "Email Validation",
                description: "Validate and manage bulk emails, likely including verification, bounce-checking, or clean-up for automated communication pipelines.",
                icon: "mdi:email-check-outline",
            },
            {
                title: "Bingo Product Import",
                description: "Bulk import tool for “Bingo” (probably a product module or third-party app) data into the system.",
                icon: "mdi:package-variant-plus",
            },
            {
                title: "Image Management",
                description: "Auto-generate and manage images dynamically based on application inputs or workflow steps.",
                icon: "mdi:image-auto-adjust",
            },
            {
                title: "Security Permission",
                description: "Role-based access control for managing users, permissions, and module-level security enforcement.",
                icon: "mdi:shield-account-outline",
            },
        ],
    },
    challengeSolution: {
        challenges: [
            {
                title: "Massive Scale & Diversity of Data Sources",
                desc: "Handling millions of product records from a mix of direct supplier catalogs, website scrapes, and third‑party feeds—each with its own format, schema, and refresh cadence—made scheduling, ingestion, and normalization highly complex.",
                icon: "mdi:format-list-bulleted-type",
            },
            {
                title: "Frequent Source Changes",
                desc: "Supplier catalog exports and public websites evolve regularly, causing occasional schema drift or layout changes that can break scraping scripts or import routines.",
                icon: "mdi:reload-alert",
            },
            {
                title: "Data Quality & Consistency",
                desc: "Raw feeds often contained duplicates, missing or malformed identifiers (SMILES/InChI/CAS), inconsistent taxonomy, and invalid field values, undermining data integrity and downstream reporting.",
                icon: "mdi:database-alert-outline",
            },
            {
                title: "Real-Time Visibility & Error Handling",
                desc: "Without centralized monitoring, it was difficult to detect pipeline failures (e.g. scraper timeouts, import errors, or image‑generation faults) quickly and to trace them back to their root cause.",
                icon: "mdi:alert-octagram-outline",
            },
            {
                title: "Image Asset Generation at Scale",
                desc: "Newly imported products often lacked photography; generating meaningful placeholder or metadata‑driven images automatically, without manual intervention, added another layer of complexity.",
                icon: "mdi:image-auto-adjust",
            },
        ],
        solutions: [
            {
                title: "Centralized Orchestration Layer",
                desc: "Built a React.js console that schedules and monitors all pipeline stages—scraping, cleaning, indexing, importing, validation, and image generation—with real‑time job metrics, logs, alerts, and role‑based access control.",
                icon: "mdi:account-cog-outline",
            },
            {
                title: "Flexible Source Adapters",
                desc: "Developed a library of Python “source adapters” for each catalog type or web target. Each adapter encapsulates extraction logic (API calls, CSV/XML parsing, or headless‑browser scraping) and can be patched quickly when source formats change.",
                icon: "mdi:file-code-outline",
            },
            {
                title: "Modular Data‑Cleaning Pipelines",
                desc: "Implemented staged, reusable Python modules to deduplicate records, normalize data types, enforce taxonomy mappings, and apply business‑rule validations—ensuring only clean, standardized data is bulk‑loaded into SQL Server/MySQL.",
                icon: "mdi:filter-multiple-outline",
            },
            {
                title: "Automated Integrity Analyzer",
                desc: "Created a database‑profiling tool that scans for anomalies (orphan records, mismatched identifiers, schema drift) and either flags issues for review or applies safe, rule‑based corrections automatically.",
                icon: "mdi:database-search-outline",
            },
            {
                title: "Distributed Worker Cluster",
                desc: "Deployed a scalable Python‑worker framework that dynamically assigns jobs across servers and client nodes, with auto‑retries on failure, health‑checks, and versioned script deployments to minimize downtime.",
                icon: "mdi:server-network",
            },
            {
                title: "Template-Driven Image Service",
                desc: "Built an image‑generation microservice that composites product metadata onto branded templates or placeholder graphics, triggered automatically for new imports and delivering assets to a CDN.",
                icon: "mdi:image-multiple-outline",
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
                image: AppIcons.RPAWorkflow,
            },
            {
                id: 2,
                title: "Room Gallery",
                description: "Interactive room showcase with detailed amenities",
                category: "Quick Visa",
                image: AppIcons.RPA1,
            },
            {
                id: 3,
                title: "Mobile Responsive Design",
                description: "Seamless experience across all devices",
                category: "Quick Visa",
                image: AppIcons.RPA2,
            },
            {
                id: 4,
                title: "Homepage Hero Section",
                description: "Stunning oceanfront view with modern booking interface",
                category: "Quick Visa",
                image: AppIcons.RPA3,
            },
            {
                id: 5,
                title: "Room Gallery",
                description: "Interactive room showcase with detailed amenities",
                category: "Quick Visa",
                image: AppIcons.RPA4,
            },
            {
                id: 6,
                title: "Mobile Responsive Design",
                description: "Seamless experience across all devices",
                category: "Quick Visa",
                image: AppIcons.RPA5,
            },
            {
                id: 7,
                title: "Homepage Hero Section",
                description: "Stunning oceanfront view with modern booking interface",
                category: "Quick Visa",
                image: AppIcons.RPA6,
            },
            {
                id: 8,
                title: "Room Gallery",
                description: "Interactive room showcase with detailed amenities",
                category: "Quick Visa",
                image: AppIcons.RPA7,
            },
            {
                id: 9,
                title: "Mobile Responsive Design",
                description: "Seamless experience across all devices",
                category: "Quick Visa",
                image: AppIcons.RPA8,
            },
        ],
    },
    resultsSection: {
        title: "Business Values Provided",
        description: "Automation and middleware brought scale, agility, and visibility to data operations in the chemical industry.",
        values: [
            {
                title: "True End‑to‑End Automation",
                description: "Reduced manual catalog updates from days to minutes—handling millions of records without human intervention.",
                icon: "mdi:robot",
            },
            {
                title: "Error-Free Data at Scale",
                description: "Automated anomaly detection and correction slashed data-quality incidents by 90%, ensuring that downstream analytics and reporting are rock-solid.",
                icon: "mdi:shield-check-outline",
            },
            {
                title: "Ops Agility",
                description: "Hot-patch Python scripts and spin up/down capacity on demand, so new supplier integrations roll out in hours, not weeks.",
                icon: "mdi:lightning-bolt-outline",
            },
            {
                title: "Visual Oversight",
                description: "The Central console gives stakeholders a single pane of glass—process health, resource utilization, error trends, and KPIs—enabling proactive issue resolution.",
                icon: "mdi:monitor-eye",
            },
        ],
    },
};

export default ChemicalBusinessData;