"use client";
import React, { useEffect, useRef, useState } from "react";
import Images from "@/components/image/Image";
import { AppIcons } from "@/data/appIcons";
import Iconify from "@/components/ui/icons/Iconify";
import "../Service.scss";
import "./StaffAugmentationPage.scss";
import StaffSlider from "./components/staffSlider/StaffSlider";
import Link from "next/link";
import ProcessSection from "@/components/processsection/ProcessSection";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import CTASection from "@/components/ctaSection/CTASection";
import { Icon } from "@iconify/react";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import FeaturedCaseStudy from "@/features/caseStudyPage/featuredCaseStudy/FeaturedCaseStudy";

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
};

const steps = [
    {
        icon: "mdi:magnify",
        title: "Needs Assessment",
        description:
            "We work closely with you to understand your project requirements, desired skill sets, and team dynamics.",
    },
    {
        icon: "hugeicons:ai-user",
        title: "Talent Sourcing",
        description:
            "Our team leverages an extensive network to identify and pre-screen candidates with proven expertise relevant to your needs.",
    },
    {
        icon: "mdi:graph",
        title: "Client Selection",
        description:
            "You review CVs, interview candidates, and select the professionals who best fit your team and culture.",
    },
    {
        icon: "ph:figma-logo-light",
        title: "Onboarding & Integration",
        description:
            "We facilitate a smooth onboarding process, ensuring our specialists are quickly productive and aligned with your workflows.",
    },
    {
        icon: "mdi:code-tags",
        title: "Ongoing Support",
        description:
            " Our management team remains engaged to address any issues, monitor performance, and ensure the highest quality of service throughout the engagement.",
    },
];

const faqItems = [
    {
        title: "What is staff augmentation, and how does it work?",
        content: `<p>Staff augmentation is a flexible outsourcing strategy where you hire skilled tech talent on a contract basis to extend your in-house team for a project or a specific period. You maintain direct control over workflows while the augmented staff work as your team members, ensuring faster delivery and reduced hiring overheads.</p>`,
    },
    {
        title: "Who should consider using staff augmentation services?",
        content: `<p>Businesses of all sizes can benefit from IT staff augmentation services if they need to:</p><ul><li>Quickly scale their development team for a project.</li><li>Access specialized skills not available in-house.</li><li>Meet tight deadlines without long-term hiring commitments.</li><li>Reduce costs while maintaining quality delivery.</li></ul><p>Startups, growing software product companies, and enterprises managing fluctuating workloads find staff augmentation particularly effective.</p>`,
    },
    {
        title: "How do I begin with staff augmentation?",
        content: `<ul><li>Consultation: Discuss your needs and requirements.</li><li>Skill assessment: Define technical and soft skill requirements.</li><li>Candidate selection: Review pre-screened profiles.</li><li>Team integration: Onboard selected professionals.</li><li>Ongoing support: Continuous monitoring and optimization.</li></ul>`,
    },
    {
        title: "How do you ensure the quality and reliability of augmented staff?",
        content: `<p>Reputable staff augmentation providers use rigorous screening processes, including technical assessments, interviews, and background checks. You can also set clear performance metrics and request replacements if a resource does not meet your expectations.</p>`,
    },
    {
        title:
            "What are the common challenges or pain points with staff augmentation?",
        content: `<ul><li>Communication gaps: Integrating external staff may lead to misunderstandings if expectations and roles are not clearly defined.</li><li>Data security concerns: Sharing sensitive information with third-party professionals requires robust security measures and NDAs.</li><li>Cultural fit: Ensuring augmented staff align with your company culture and workflow can be challenging without proper onboarding.</li></ul>`,
    },
    {
        title: "Can I hire remote or distributed teams through staff augmentation?",
        content: `<p>Absolutely. Staff augmentation supports remote, distributed, or hybrid teams, allowing you to tap into global talent and boost productivity without geographical limitations.</p>`,
    },
    {
        title: "How are data security and confidentiality handled?",
        content: `<p>Professional staff augmentation companies sign NDAs and follow strict data security protocols to safeguard your sensitive information.</p>`,
    },
    {
        title: "What if I'm not satisfied with the performance?",
        content: `<ul><li>Immediate replacement: Within 48 hours for performance issues.</li><li>No additional costs: Replacement guarantee at no extra charge.</li><li>Continuous improvement: Regular performance optimization.</li></ul>`,
    },
    {
        title: `<span style="color: red">Pain Point:</span> I'm worried about communication and cultural barriers.`,
        content: `<p>We provide English-proficient professionals who understand Western business culture and work in your time zone. Our team undergoes cultural training and communication workshops.</p>`,
    },
    {
        title: `<span style="color: red">Pain Point:</span> What if the augmented staff doesn't fit our company culture?`,
        content: `<p>We conduct thorough cultural fit assessments and offer a replacement guarantee within the first 30 days if the match isn't perfect.</p>`,
    },
    {
        title: "What types of professionals can I hire through staff augmentation?",
        content: `<p>You can hire a wide range of professionals, including:</p><ul><li>Software Developers (e.g., Python, Java, React, Node.js, .Net)</li><li>DevOps Engineers</li><li>Data Scientists and Analysts</li><li>Cybersecurity Experts</li><li>Project Managers</li><li>UI/UX Designers</li><li>Quality Assurance (QA) Engineers</li></ul>`,
    },
    {
        title: "What are the benefits of staff augmentation?",
        content: `<ul><li>Cost Savings: Reduce expenses related to recruitment, training, and employee benefits.</li><li>Faster Time-to-Market: Accelerate project timelines by quickly onboarding skilled professionals.</li><li>Scalability: Adjust team size based on project demands without long-term commitments.</li><li>Access to Global Talent: Tap into a worldwide pool of experts with diverse skill sets.</li><li>Focus on Core Business: Free up internal resources to focus on strategic goals while augmented staff handle specialized tasks.</li></ul>`,
    },
    {
        title: "How is staff augmentation different from outsourcing?",
        content: `<ul><li>Control: With staff augmentation, you manage the augmented professionals as part of your team, unlike outsourcing, where a third-party vendor controls the workforce.</li><li>Integration: Augmented staff work directly with your in-house team, ensuring alignment with your company culture and processes.</li><li>Flexibility: Staff augmentation allows you to scale resources for specific tasks, while outsourcing typically involves handing over entire projects.</li></ul>`,
    },
    {
        title: "Can staff augmentation support remote work?",
        content: `<p>Yes, our staff augmentation services support both onsite and remote work models. Our professionals are equipped to collaborate effectively using tools like Slack, Zoom, and Jira, ensuring productivity and communication regardless of location.</p>`,
    },
    {
        title: "How quickly can I onboard staff augmentation resources?",
        content: `<p>Once we finalize your requirements, you can typically onboard talent within 5 weeks, ensuring minimal delays in your project timelines.</p>`,
    },
    {
        title: "How do you ensure the quality of augmented staff?",
        content: `<p>We carefully vet and onboard experienced professionals, ensuring their skills match your needs. We also provide ongoing support and performance monitoring to ensure consistent delivery quality throughout the engagement.</p>`,
    },
];

const caseStudies = [
    {
        // category: "Membership & Events",
        title: "IPAS Membership Management Platform",
        image: AppIcons.IPAS1,
        description:
            "We developed a feature-rich admin and web portal to manage memberships, events, bookings, payments, and resources for IPAS, supporting the organisation’s mission of enhancing its members’ professional journey and operational efficiency.",
        location: "Singapore",
        industry: "Professional Membership, Accounting, Education",
        stats: [
            {
                label: "Key Outcome",
                value: "Streamlined operations and scalable member engagement",
            },
        ],
        projectType:
            " Membership Portal , Event Registration & Certificates ,  CMS & Gallery , Finance & Reconciliation ,  Email & Notification System",
        technologies: [
            {
                name: "React.js",
                icon: "logos:react",
                description:
                    "Frontend library for building dynamic public and admin-facing portals.",
            },
            {
                name: "TypeScript",
                icon: "logos:typescript-icon",
                description:
                    "Typed JavaScript superset used for safer, scalable frontend development.",
            },
            {
                name: ".NET Core",
                icon: "logos:dotnet",
                description:
                    "Framework for backend APIs managing logic, roles, and workflows.",
            },
            {
                name: "SQL Server",
                icon: "devicon:mysql-wordmark",
                description:
                    "Relational database used for transactional and structured data.",
            },
            {
                name: "MongoDB",
                icon: "logos:mongodb-icon",
                description:
                    "NoSQL database used for unstructured and content-rich data.",
            },
            {
                name: "REST API Development",
                icon: "mdi:api",
                description:
                    "Secure RESTful services enabling frontend-backend communication.",
            },
            {
                name: "HTML",
                icon: "logos:html-5",
                description: "Core markup language for structuring modern web pages.",
            },
            {
                name: "CSS",
                icon: "logos:css-3",
                description:
                    "Stylesheet language for responsive and adaptive UI designs.",
            },
            {
                name: "Bootstrap",
                icon: "logos:bootstrap",
                description:
                    "CSS framework used to build responsive and mobile-first layouts.",
            },
            {
                name: "JavaScript",
                icon: "logos:javascript",
                description:
                    "Client-side scripting language used for rich web interactions.",
            },
            {
                name: "Role-Based Access Control",
                icon: "mdi:account-lock-outline",
                description:
                    "User access management using secure, permission-based roles.",
            },
            {
                name: "Email Notification & Digest",
                icon: "mdi:email-outline",
                description:
                    "Automated system for sending alerts, summaries, and updates.",
            },
            {
                name: "Event Scheduler & Data Sync",
                icon: "mdi:calendar-clock",
                description:
                    "Background services to automate scheduling and data synchronization.",
            },
            {
                name: "AsiaPay Integration",
                icon: "mdi:credit-card-outline", // No official AsiaPay icon available
                description:
                    "Integrated online payment gateway supporting secure transactions.",
            },
            {
                name: "Zoom API",
                icon: "bxl:zoom",
                description:
                    "Third-party API integration used for managing online events and webinars.",
            },
            {
                name: "Distributed & Repository Architecture",
                icon: "mdi:source-repository-multiple",
                description:
                    "Clean, scalable code structure using service segregation and pattern-based development.",
            },
        ],
        link: "association-member-event-platform-case-study",
    },
    {
        // category: "Accreditation & CPD",
        title: "SGBC GMQP Accreditation Portal",
        image: AppIcons.SGBC1,
        description:
            "We delivered a feature-rich GMQP portal allowing professionals to apply, track CPD (Continuing Professional Development) progress, manage applications, and book courses online. The admin portal enables SGBC to manage applications, financial transactions, approvals, and committee workflows, supporting the effective management of the GMQP scheme.",
        location: "Singapore",
        industry: "Professional Certification, Green Building",
        stats: [
            {
                label: "Key Outcome",
                value: "Full-cycle accreditation, CPD & finance automation",
            },
        ],
        projectType:
            "Membership & Accreditation  , Course & CPD Management , Financial Reconciliation (Xero) ,  Zoom & Stripe Integrations , Committee Workflow Automation",
        technologies: [
            {
                name: "React.js",
                icon: "logos:react",
                description:
                    "Frontend library for building responsive, component-driven UIs.",
            },
            {
                name: "TypeScript",
                icon: "logos:typescript-icon",
                description:
                    "Typed superset of JavaScript used to ensure scalable and maintainable code.",
            },
            {
                name: ".NET Core API",
                icon: "logos:dotnet",
                description:
                    "Backend framework for secure API development and business logic.",
            },
            {
                name: "SQL Server",
                icon: "devicon:mysql-wordmark",
                description:
                    "Relational database for structured application and transactional data.",
            },
            {
                name: "MongoDB",
                icon: "logos:mongodb-icon",
                description:
                    "Document-based NoSQL database for flexible data modeling.",
            },
            {
                name: "REST API Development",
                icon: "mdi:api",
                description:
                    "Exposes backend functionality through secure RESTful endpoints.",
            },
            {
                name: "HTML",
                icon: "logos:html-5",
                description:
                    "Standard markup language used to build semantic and accessible pages.",
            },
            {
                name: "CSS",
                icon: "logos:css-3",
                description:
                    "Stylesheet language used to design responsive and adaptive layouts.",
            },
            {
                name: "Bootstrap",
                icon: "logos:bootstrap",
                description:
                    "CSS framework used for rapid UI development and mobile-first design.",
            },
            {
                name: "JavaScript",
                icon: "logos:javascript",
                description:
                    "Primary scripting language for interactivity and dynamic behavior.",
            },
            {
                name: "Role-Based Access Control",
                icon: "mdi:account-lock-outline",
                description:
                    "Ensures security by assigning user roles and managing permission levels.",
            },
            {
                name: "Stripe Integration",
                icon: "logos:stripe",
                description:
                    "Online payment processing for donations, subscriptions, and fees.",
            },
            {
                name: "Xero API Integration",
                icon: "logos:xero",
                description:
                    "OAuth-based integration for syncing accounting data and invoices.",
            },
            {
                name: "Zoom API",
                icon: "bxl:zoom",
                description:
                    "Used for managing online webinars, meetings, and live courses.",
            },
            {
                name: "Email Notification & Digest",
                icon: "mdi:email-outline",
                description:
                    "Automated notifications for user activity and scheduled updates.",
            },
            {
                name: "Event Scheduler & Data Sync",
                icon: "mdi:calendar-clock",
                description:
                    "Background modules for scheduling events and syncing external data.",
            },
            {
                name: "Distributed & Repository Architecture",
                icon: "mdi:source-repository-multiple",
                description:
                    "Follows modular, maintainable design with reusable service layers.",
            },
        ],
        link: "membership-accreditation-management-platform-case-study",
    },
    {
        // category: "Membership & Events",
        title: "SFC Membership & Financial Platform",
        image: AppIcons.SFC1,
        description:
            "We built a membership and event management platform for the Singapore Fashion Council, allowing members to sign up, book courses, and manage their profiles, while enabling SFC to handle memberships, events, and financial workflows efficiently through a robust admin portal.",
        location: "Singapore",
        industry: "Fashion & Membership Association",
        stats: [
            {
                label: "Key Outcome",
                value: "Fully automated onboarding, event and finance operations",
            },
        ],
        projectType:
            "Membership System , Event & Booking Workflow , Financial Automation , Voucher & Campaign Management , Zoom & Email Integrations",
        technologies: [
            {
                name: ".NET Core API",
                icon: "logos:dotnet",
                description:
                    "Backend services powering secure business logic and workflows.",
            },
            {
                name: "Next.js",
                icon: "logos:nextjs-icon",
                description:
                    "Server-side rendering and routing for the public web portal.",
            },
            {
                name: "React.js",
                icon: "logos:react",
                description:
                    "Used for building the dynamic, component-based admin portal.",
            },
            {
                name: "MS SQL Server",
                icon: "logos:mysql",
                description:
                    "Relational database used to store user, booking, and transaction data.",
            },
            {
                name: "HTML",
                icon: "logos:html-5",
                description:
                    "Markup language used to build and structure frontend pages.",
            },
            {
                name: "CSS",
                icon: "logos:css-3",
                description:
                    "Styling language for layouts, themes, and responsiveness.",
            },
            {
                name: "Bootstrap",
                icon: "logos:bootstrap",
                description:
                    "Frontend framework used for mobile-first, responsive UI components.",
            },
            {
                name: "JavaScript",
                icon: "logos:javascript",
                description:
                    "Client-side scripting for frontend interactivity and logic.",
            },
            {
                name: "TypeScript",
                icon: "logos:typescript-icon",
                description:
                    "Typed superset of JavaScript for building reliable, scalable code.",
            },
            {
                name: "jQuery",
                icon: "skill-icons:jquery",
                description:
                    "Simplifies DOM manipulation and enhances legacy browser compatibility.",
            },
            {
                name: "AWS Amplify",
                icon: "logos:aws-amplify",
                description:
                    "Used for hosting the frontend with CI/CD support and performance optimizations.",
            },
            {
                name: "AWS EC2",
                icon: "logos:aws-ec2",
                description: "Hosts backend APIs on Windows Server with IIS.",
            },
            {
                name: "IIS (API Hosting)",
                icon: "mdi:server",
                description:
                    "Windows web server for running and managing .NET Core APIs.",
            },
            {
                name: "Role-Based Access Control",
                icon: "mdi:account-lock-outline",
                description:
                    "Secures application access based on user roles and permissions.",
            },
            {
                name: "Payment Gateway Integration",
                icon: "mdi:credit-card-outline",
                description: "Enables secure online payments via integrated gateways.",
            },
            {
                name: "Zoom API Integration",
                icon: "bxl:zoom",
                description:
                    "Used for managing virtual meetings, webinars, and live events.",
            },
            {
                name: "Email Scheduler",
                icon: "arcticons:smsscheduler",
                description:
                    "Automated email delivery system for updates and reminders.",
            },
            {
                name: "Distributed & Repository Architecture",
                icon: "mdi:source-repository-multiple",
                description:
                    "Ensures scalable, modular, and maintainable code structure.",
            },
        ],
        link: "creative-industry-membership-portal-case-study",
    },
    {
        // category: "Insurance, Risk & Finance",
        title: "Brown & Brown Portal",
        image: AppIcons.BrownAndBrown1,
        description:
            "We developed a robust, feature-rich portal that enables administrators and analysts at Brown & Brown to manage clients and their plans, import large liability data files, configure reusable templates, perform automated calculations, and generate structured Word-based reports. The system also provides a secure, role-based admin environment for managing report types, valuation fields, calculation rules, and document templates with integrated data validation and calculation features.",
        location: "USA",
        industry: "Insurance, Risk Management, Financial Reporting",
        stats: [
            {
                label: "Key Outcome",
                value: "Automated valuation workflows with Word report generation",
            },
        ],
        projectType:
            "Report Automation,XML/CSV Import & Validation,Calculation Engine ,Word Merge Templates,Admin Portal with Role Control",
        technologies: [
            {
                name: "React.js",
                icon: "logos:react",
                description:
                    "Modern frontend framework for building dynamic and responsive UIs.",
            },
            {
                name: ".NET Core API",
                icon: "logos:dotnet",
                description:
                    "Backend services built using scalable and secure .NET Core APIs.",
            },
            {
                name: "SQL Server",
                icon: "logos:mysql",
                description:
                    "Relational database for structured data storage and complex querying.",
            },
            {
                name: "REST API Development",
                icon: "mdi:api",
                description:
                    "Seamless data communication between frontend and backend using RESTful APIs.",
            },
            {
                name: "HTML5, CSS, Bootstrap",
                icon: "logos:bootstrap",
                description:
                    "Responsive layout and design system built using HTML5, CSS3, and Bootstrap.",
            },
            {
                name: "JavaScript, TypeScript, jQuery",
                icon: "logos:typescript-icon", // Swap with logos:javascript or logos:jquery as preferred
                description:
                    "Core scripting languages and libraries for logic, type safety, and DOM manipulation.",
            },
            {
                name: "Role-Based Authentication & Authorization",
                icon: "mdi:shield-lock-outline",
                description:
                    "Fine-grained access control and secure login across user roles.",
            },
            {
                name: "XML and CSV Data Import Handling",
                icon: "mdi:file-delimited-outline",
                description:
                    "Support for structured data imports using XML and CSV formats.",
            },
            {
                name: "XSD Schema Validation",
                icon: "mdi:file-code-outline",
                description:
                    "Enforces strict XML structure using XSD-based validation during import.",
            },
            {
                name: "Word Document Merge",
                icon: "mdi:file-word-outline",
                description:
                    "Dynamic generation of branded client documents through Word merge templates.",
            },
            {
                name: "Modular Architecture with Repository Pattern",
                icon: "mdi:layers-triple-outline",
                description:
                    "Clean and scalable architecture built with a modular, maintainable structure.",
            },
        ],
        link: "secure-reporting-and-analytics-portal-case-study",
    },
    {
        // category: "Team Management SaaS",
        title: "TMS Project Management Platform",
        image: AppIcons.TMS1,
        description:
            "We developed a robust project and team management system, providing the company with a centralized platform to manage customers, projects, teams, and user roles while supporting detailed timesheet management and project synergy tracking. The system streamlines project lifecycle management—from backlog planning to team allocation and task monitoring—while providing insightful reports for project health and team productivity, empowering the company to handle complex projects efficiently.",
        location: "USA",
        industry: "Team & Project Management",
        stats: [
            {
                label: "Key Outcome",
                value: "Connected workflows with role-based access",
            },
        ],
        projectType:
            "Timesheet Tracking , Team Planning , Backlog & Task Management , Role-Based Access , Report Generation",
        technologies: [
            {
                name: "React.js",
                icon: "logos:react",
                description:
                    "Frontend developed using React.js for a fast, dynamic UI experience.",
            },
            {
                name: ".NET Core API",
                icon: "logos:dotnet",
                description:
                    "Robust and secure backend built using scalable .NET Core APIs.",
            },
            {
                name: "SQL Server",
                icon: "logos:mysql",
                description:
                    "Secure relational database used for storing and managing structured data.",
            },
            {
                name: "REST API Development",
                icon: "mdi:api",
                description:
                    "RESTful API endpoints enable seamless frontend-backend communication.",
            },
            {
                name: "HTML5, CSS, Bootstrap",
                icon: "logos:bootstrap",
                description:
                    "Responsive and accessible UI designed using HTML5, CSS3, and Bootstrap.",
            },
            {
                name: "JavaScript, TypeScript, jQuery",
                icon: "logos:typescript-icon", // You can change to logos:javascript or logos:jquery if preferred
                description:
                    "Used for scripting logic, interactivity, and type-safe development.",
            },
            {
                name: "Secure Role-Based Authentication & Authorization",
                icon: "mdi:shield-lock-outline",
                description:
                    "Granular access control with secure, role-based authentication across modules.",
            },
            {
                name: "Modular, Distributed Architecture",
                icon: "mdi:layers-triple-outline",
                description:
                    "Engineered with a scalable and modular architecture using the Repository Pattern.",
            },
            {
                name: "Email Notification & Template Management",
                icon: "mdi:email-outline",
                description:
                    "Automated notifications and customizable email templates for system communication.",
            },
        ],
        link: "project-collaboration-and-tracking-platform-case-study",
    },
    {
        // category: "Labor & Workforce",
        title: "LDC Workflow Management",
        image: AppIcons.lDC1,
        description:
            "To modernize and streamline their internal workflows, LDC required a secure, centralized system for managing employers, associations, contracts, and operational reports. We developed a comprehensive workflow management portal for LDC to handle administrative processes efficiently while maintaining strict access controls.",
        location: "Philadelphia, USA",
        industry: "Labor Unions & Workforce Management",
        stats: [
            {
                label: "Project Focus",
                value: "Workflow automation",
            },
            {
                label: "Key Outcomes",
                value: "Secure reporting",
            },
        ],
        projectType:
            "Workflow Automation, Employer & Contract Management , Detailed Reporting , Role-Based Access Control ",
        technologies: [
            {
                name: "React.js",
                icon: "logos:react",
                description:
                    "Frontend developed using React.js for a fast, dynamic UI experience.",
            },
            {
                name: ".NET Core API",
                icon: "logos:dotnet",
                description:
                    "Backend services powered by .NET Core API for scalable and efficient server-side logic.",
            },
            {
                name: "SQL Server",
                icon: "logos:mysql",
                description:
                    "Structured relational database for storing and managing business-critical data.",
            },
            {
                name: "REST API Development",
                icon: "mdi:api",
                description:
                    "RESTful APIs built for seamless communication between frontend and backend modules.",
            },
            {
                name: "HTML5, CSS, Bootstrap",
                icon: "logos:bootstrap",
                description:
                    "Responsive UI built using semantic HTML5, modern CSS, and Bootstrap framework.",
            },
            {
                name: "JavaScript, TypeScript, jQuery",
                icon: "logos:typescript-icon",
                description:
                    "Used across the platform for scripting, type safety, and DOM manipulation.",
            },
            {
                name: "Role-Based Authentication & Authorization",
                icon: "mdi:shield-lock-outline",
                description:
                    "Secure login system with fine-grained role-based access controls.",
            },
            {
                name: "Modular Architecture",
                icon: "mdi:layers-triple-outline",
                description:
                    "Scalable, maintainable modular structure using distributed services and repository pattern.",
            },
        ],
        link: "workflow-and-document-automation-platform-case-study",
    },
    {
        // category: "Healthcare & Maintenance",
        title: "Total Scope – Legacy Platform Modernization",
        image: AppIcons.TotalScopeInc1,
        description:
            "We are rebuilding Total Scope’s operational platform, transitioning from a VB-based legacy system to a modular, scalable web application. The new platform includes modules for workspace management, scopes, tasks, loaners, inventory, repairs, financial operations, quality tracking, and detailed reporting while aligning with Total Scope’s structured workflow in scope management, repair cycles, and client communications. The project is being executed in well-defined phases to ensure smooth and systematic development. So far, key components such as Scopes, Tasks, and the Workspace Dashboard have been successfully completed. Currently, the team is actively working on modules including Loaners, Emails, Shipping Status, Inventory, Acquisitions, and Repairs. Looking ahead, the planned development will focus on important areas like Contracts, Carts, Quality, Financials, Advanced Reporting, Administration, and Tools to complete the full project scope.",
        location: "USA",
        industry: "Medical Equipment Repair & Maintenance",
        duration: "Ongoing Digital Overhaul",
        users: "Technicians, Admins, Repair Managers",
        stats: [
            {
                label: "Key Outcome",
                value:
                    "Improved task workflows and inventory tracking with secure role-based access",
            },
        ],
        projectType:
            "Legacy System Modernization , Workflow Automation , Inventory & Repair Management , Modular Web Portal",
        technologies: [
            {
                name: "React.js",
                icon: "logos:react",
                description:
                    "Modern UI development using component-based architecture.",
            },
            {
                name: ".NET Core API",
                icon: "logos:dotnet",
                description: "Robust backend services with RESTful API support.",
            },
            {
                name: "SQL Server",
                icon: "logos:mysql",
                description: "Structured data management and transactional operations.",
            },
            {
                name: "REST API Development",
                icon: "tabler:api",
                description: "Consistent and scalable communication between systems.",
            },
            {
                name: "HTML5, CSS, Bootstrap",
                icon: "logos:bootstrap",
                description: "Responsive, semantic layouts and UI components.",
            },
            {
                name: "JavaScript & TypeScript",
                icon: "logos:typescript-icon",
                description: "Strong typed and dynamic behavior implementation.",
            },
            {
                name: "Role-Based Authentication & Authorization",
                icon: "mdi:account-lock",
                description: "Secure and customizable access control mechanisms.",
            },
            {
                name: "Repository Pattern & Modular Architecture",
                icon: "mdi:package-variant",
                description: "Clean separation of concerns and scalable codebase.",
            },
            {
                name: "Third-party Integrations",
                icon: "tabler:plug-connected",
                description: "Seamless integration with logistics and finance systems.",
            },
        ],
        link: "legacy-system-modernization-platform-case-study",
    },
];

const StaffAugmentationPage = () => {
    const sectionRef = useRef(null);
    const [activeId, setActiveId] = useState(null);
    const sectionRefs = useRef({
        "section-01": null,
        "section-02": null,
        "section-03": null,
        "section-04": null,
        "section-05": null,
        "section-06": null,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.4, // fires when 40% of section is visible
            }
        );

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            Object.values(sectionRefs.current).forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [startCount, setStartCount] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const progressPercentage = (activeIndex / (steps.length - 1)) * 100;

    // Counter values
    const [years, setYears] = useState(0);
    const [techs, setTechs] = useState(0);
    const [products, setProducts] = useState(0);
    const [countries, setCountries] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect(); // trigger once
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (startCount) {
            animateCount(setYears, 11);
            animateCount(setTechs, 250);
            animateCount(setProducts, 1000);
            animateCount(setCountries, 25);
        }
    }, [startCount]);

    const animateCount = (setter, target) => {
        let count = 0;
        const speed = Math.ceil(target / 50); // control animation speed
        const interval = setInterval(() => {
            count += speed;
            if (count >= target) {
                count = target;
                clearInterval(interval);
            }
            setter(count);
        }, 20);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const overlay = document.querySelector(".bg-overlay");
            if (overlay) {
                overlay.style.transform = `translateY(${-scrolled * 0.1}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="staff-augmentation-wrapper">
            <div className="ui-ux-design">
                <div className="container">
                    <div className="top-title-wrapper">
                        <div className="common-page-title">
                            <div className="title">
                                Stop Waiting Months to Find the Right Developers; Scale Your
                                Business with Expert IT{" "}
                                <span className="highlight">Staff Augmentation Services</span>
                            </div>
                            <p className="main-content">
                                Get top-tier IT professionals—on-demand, fully aligned with
                                your goals, and ready to deliver results. Our staff
                                augmentation services give you the flexibility to scale your
                                team without the overhead.
                            </p>

                            <Link className="service-btn" href="/contact-us">
                                <span>Let&apos;s Connect</span>
                                <Iconify icon="weui:arrow-filled" width={20} />
                            </Link>
                        </div>
                        <div className="hero-banner-side">
                            <Images
                                imagePath={AppIcons.StaffAugmentationService}
                                altText="Staff Augmentation Service"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="staff-augmentation-wrapper_main-content">
                    <div className="staff-augmentation-wrapper_main-content_content-side">
                        <div className="staff-augmentation-wrapper_main-content_content-side_top-title">
                            <h1
                                className="staff-augmentation-wrapper_main-content_content-side_top-title_sub-title"
                              
                            >
                                Accelerate Growth with On-Demand Tech Talent
                            </h1>
                            <h2
                                className="staff-augmentation-wrapper_main-content_content-side_top-title_title"
                              
                            >
                                Speed, skill, and scalability — That&apos;s Moltech
                            </h2>
                        </div>
                        <div
                            className="staff-augmentation-wrapper_main-content_content-side_center-content"
                          
                        >
                            <p>
                                Companies in the fast-paced digital environment of today have
                                to respond quickly to remain competitive, whether it means
                                launching a new product, meeting rigorous project deadlines,
                                or boosting development capacity. Usually too slow and costly,
                                traditional recruiting cannot satisfy these demands. Staff
                                augmentation has thus become the first-choice strategy for
                                modern teams. It allows companies to fill temporary resource
                                shortfalls, quickly access experienced IT professionals, and
                                maintain momentum without the overhead of permanent hiring.
                            </p>
                            <p>
                                Moltech Solution Inc. offers consistent, flexible workforce
                                augmentation solutions fit for American businesses. Combining
                                significant industry knowledge with a consultative approach,
                                we match you with carefully chosen staff appropriate for your
                                technical needs and business environment. Whether you run an
                                established company going digital, a developing company
                                increasing your technical workforce, or a startup producing
                                its MVP, we have the proper experts to help you succeed—on
                                your terms.
                            </p>
                            <p>
                                From QA testers, UI/UX designers, data scientists, and
                                cybersecurity specialists to full-stack developers, cloud
                                architects, and DevOps engineers, our screened experts fit
                                exactly your team. We become an extension of your internal
                                capability so you may remain concentrated on generating
                                results, save money, and hasten expansion by means of savings.
                                Using Moltech produces not only a service provider but also a
                                valued colleague in producing excellent software.
                            </p>
                        </div>
                    </div>
                    <div className="staff-augmentation-wrapper_main-content_img-side">
                        <Images
                            imagePath={AppIcons.DigitalMarketing}
                            altText="Digital Marketing"
                        />
                    </div>
                </div>
                <div className="services-augmentation">
                    <div className="center-title">
                        <h3 className="sub-title" >
                            Key Services Under Staff Augmentation by Moltech
                        </h3>
                        <h3 className="title" >
                            Augment Smarter, Scale Faster, Deliver Better.
                        </h3>
                    </div>

                    <div className="services-augmentation_card-wrapper">
                        <div
                            className="services-augmentation_card-wrapper_card"
                           
                            id="section-01"
                            ref={(el) => (sectionRefs.current["section-01"] = el)}
                        >
                            <h3 className="card-title">
                                <Iconify icon="mdi:account-cog" /> Dedicated Developer
                                Staffing
                            </h3>
                            <p>
                                Our committed developer staffing solution at Moltech Solution
                                Inc. let&apos;s you grow your engineering personnel without
                                going through the drawn-out hiring process. Our seasoned,
                                full-time developers fit your tools, time zones, and culture
                                and work just on your projects. We have you covered whether
                                your needs are front-end React or Angular, back-end .NET,
                                Node.js, Java, or full-stack pros. These engineers join your
                                stand-ups, daily contribute codes, and work closely with your
                                internal staff—that is, as actual team members. Working just
                                on your assignments helps you develop strong product knowledge
                                and, over time, delivers more value. For long-term software
                                development, product evolution, or scaling teams pursuing
                                demanding roadmaps, this paradigm is perfect. With Moltech,
                                you receive a committed specialist who fits perfectly into
                                your workflow and expands with your project rather than only a
                                contractor.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-02"
                            ref={(el) => (sectionRefs.current["section-02"] = el)}
                        >
                            <h3 className="card-title">
                                <Iconify icon="fluent:people-add-20-regular" />
                                On-Demand Team Extension
                            </h3>
                            <p>
                                If you need to quickly grow your development team when dates
                                are tight and workloads go up, our on-demand team extension
                                service can help. We offer developers, QA testers, UI/UX
                                designers, and more who have already been checked out and are
                                ready to work with your current processes and start delivering
                                results right away. We help your in-house team by giving them
                                the right people at the right time, whether you&apos;re
                                starting a new feature, moving systems, or ending a sprint.
                                Our team members are taught how to use your tools, tech stack,
                                and way of working together, which cuts down on ramp-up time.
                                We don&apos;t just send resumes like other companies do; we
                                send people who meet your technical and cultural needs. You
                                decide what to do and how to prioritize it, and we&apos;ll
                                help you stay on track with your projects. This format is
                                ideal for businesses that need short-term help, rapid output,
                                or project-specific knowledge without adding full-time
                                employees.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                           
                            id="section-03"
                            ref={(el) => (sectionRefs.current["section-03"] = el)}
                        >
                            <h3 className="card-title">
                                <Iconify icon="carbon:task-view" />
                                Project-Based Resource Deployment
                            </h3>
                            <p>
                                Our project-based resource deployment is the best option for
                                businesses with short-term goals or projects with clear goals
                                and scope. Moltech Solution Inc. has developers, testers,
                                DevOps engineers, and UI/UX designers who are highly skilled
                                and are assigned to your job for a set amount of time. We
                                match the right people with your schedule and technical stack,
                                whether you need to build a prototype, update an outdated
                                system, do security audits, or run QA sprints. This plan is
                                meant to cut down on costs while still improving quality and
                                efficiency. It&apos;s ideal for clients who need work done by
                                real people but don&apos;t want to hire full-time workers for
                                short-term projects. We&apos;ll do the hiring, training, and
                                planning of resources so you can focus on getting things done.
                                Project-based staffing helps you stay lean, meet targets, and
                                reach your business goals. We make sure the delivery process
                                goes smoothly and is held accountable.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-04"
                            ref={(el) => (sectionRefs.current["section-04"] = el)}
                        >
                            <h3 className="card-title">
                                <Iconify icon="material-symbols:engineering-rounded" />
                                Specialized Role Augmentation
                            </h3>
                            <p>
                                When your project needs specific knowledge, Moltech can help
                                with our role augmentation services. We help U.S. companies
                                hire people for technical jobs that are hard to fill because
                                they need people with specific skills or a lot of subject
                                knowledge. We quickly put you in touch with the right people
                                to help you build an AI model, automate DevOps tasks, scale
                                your cloud infrastructure, or improve your security. AI/ML
                                engineers, cloud architects, cybersecurity analysts, business
                                experts, and more are all in our talent pool. Staff are
                                evaluated on their technical skills and ability to communicate
                                and collaborate. Our specialized job augmentation ensures that
                                a lack of skills won&apos;t stall your project. We deliver
                                skilled professionals who are ready to help right away, so you
                                don&apos;t have to spend months looking for someone with a
                                rare profile. This model works excellently for large,
                                complicated projects, innovation labs, or places that need to
                                be careful about compliance and value accuracy and deep
                                experience.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                           
                            id="section-05"
                            ref={(el) => (sectionRefs.current["section-05"] = el)}
                        >
                            <h3 className="card-title">
                                <Iconify icon="fluent:globe-sync-24-regular" />
                                Hybrid Delivery Model (Onshore + Offshore)
                            </h3>
                            <p>
                                Our hybrid delivery model has the best of both worlds: team
                                leads based in the U.S. make it easy for everyone to work
                                together, and coders based in other countries keep costs down.
                                This mix lets you keep the quality of your work good while
                                keeping your costs low. At Moltech Solution Inc., we build
                                mixed teams that are based on your business goals. We make
                                sure that communication and core teamwork happen in your time
                                zone, and development cycles happen 24 hours a day, seven days
                                a week. It&apos;s ideal for businesses that need to get things
                                done quickly without lowering the standard. We make sure there
                                is clear communication, IP security, and compliance by being
                                based in the U.S. Our offshore teams in India bring a lot of
                                scientific knowledge, the ability to grow, and faster
                                turnaround times. As a result, there is a smooth workflow with
                                clear roles for each job, quick changes, and strong
                                accountability. Our hybrid model lets you move faster,
                                smarter, and cheaper, without the practical headaches, whether
                                you&apos;re making a new product or updating an old platform.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-06"
                            ref={(el) => (sectionRefs.current["section-06"] = el)}
                        >
                            <h3 className="card-title">
                                {" "}
                                <Iconify icon="mdi:handshake-outline" />
                                Contract-to-Hire Services
                            </h3>
                            <p>
                                Employing full-time talent is a significant investment,
                                particularly in cases of unknown long-term fit. Our
                                contract-to-hire programs also allow you to test team
                                alignment, communication, and skill set before deciding on a
                                permanent hire. At Moltech Solution Inc., we offer flexible
                                staffing starting on a contract basis that allows conversion
                                to full-time should the match be suitable. This approach
                                lowers recruiting risks, accelerates onboarding, and allows
                                you time to assess performance in practical settings. We have
                                pre-screened professionals open to long-term employment
                                regardless of your need—frontend developer, QA analyst, DevOps
                                engineer, or data scientist. During the contract, we oversee
                                payroll, compliance, and management so you may focus only on
                                fit. If it works out, fantastic—transitioning to full-time is
                                simple and easy. If not, we will assist you in locating
                                another without tampering with your business activities.
                            </p>
                        </div>
                    </div>
                    <div className="services-augmentation__sidebar">
                        <ul>
                            <li
                                className={activeId === "section-01" ? "active" : ""}
                                onClick={() => scrollToSection("section-01")}
                            >
                                <Icon icon="mdi:account-cog" /> Dedicated Developer Staffing
                            </li>
                            <li
                                className={activeId === "section-02" ? "active" : ""}
                                onClick={() => scrollToSection("section-02")}
                            >
                                <Icon icon="fluent:people-add-20-regular" /> On-Demand Team
                                Extension
                            </li>
                            <li
                                className={activeId === "section-03" ? "active" : ""}
                                onClick={() => scrollToSection("section-03")}
                            >
                                <Icon icon="carbon:task-view" /> Project-Based Resource
                                Deployment
                            </li>
                            <li
                                className={activeId === "section-04" ? "active" : ""}
                                onClick={() => scrollToSection("section-04")}
                            >
                                <Icon icon="material-symbols:engineering-rounded" />{" "}
                                Specialized Role Augmentation
                            </li>
                            <li
                                className={activeId === "section-05" ? "active" : ""}
                                onClick={() => scrollToSection("section-05")}
                            >
                                <Icon icon="fluent:globe-sync-24-regular" /> Hybrid Delivery
                                Model
                            </li>
                            <li
                                className={activeId === "section-06" ? "active" : ""}
                                onClick={() => scrollToSection("section-06")}
                            >
                                <Icon icon="mdi:handshake-outline" /> Contract-to-Hire
                                Services
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CTASection />
            <ProcessSection
                steps={steps}
                title={"Simple Steps to Your Perfect IT Team"}
                subTitle={
                    "As an IT company offering staff augmentation, our process is designed for speed, quality, and seamless integration:"
                }
                bgColor="#fafafa"
            />
            <div className="industries-we-serve-wrapper">
                <div className="container">
                    <div className="main-top-part">
                        <h3 className="title" >
                            Industries We Serve
                        </h3>
                        <div className="content-side">
                            <p className="content" >
                                We take pride in delivering innovative IT solutions across
                                industries. Our expertise spans Web & App Development, UI/UX
                                Design, Custom Software, and Digital Transformation empowering
                                global brands with smart technology.
                            </p>
                        </div>
                        <div className="img-side" >
                            <Images
                                imagePath={AppIcons.ServiceBanner}
                                altText="service banner"
                            />
                        </div>
                    </div>
                    <div className="services-card">
                        <div className="card">
                            <h3 className="title">SaaS</h3>
                            <p>
                                We build secure, scalable SaaS platforms with intuitive
                                design, robust architecture, and seamless integrations for
                                product-led businesses.
                            </p>
                        </div>
                        <div className="card" >
                            <h3 className="title">Healthcare</h3>
                            <p>
                                Our solutions streamline healthcare operations with
                                HIPAA-compliant apps, telemedicine platforms, and custom
                                patient management tools.
                            </p>
                        </div>
                        <div className="card" >
                            <h3 className="title">E-Commerce</h3>
                            <p>
                                We craft high-performance online stores with tailored
                                features, advanced analytics, and mobile-first experiences
                                that drive conversions.
                            </p>
                        </div>
                        <div className="card" >
                            <h3 className="title">Logistics</h3>
                            <p>
                                From fleet tracking to warehouse automation, we develop
                                logistics tech that boosts efficiency, transparency, and
                                real-time decision-making.
                            </p>
                        </div>
                        <div className="card" >
                            <h3 className="title">Finance</h3>
                            <p>
                                We empower financial firms with secure fintech apps, AI-driven
                                insights, and user-friendly platforms that simplify complex
                                processes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <StaffSlider />
            <FeaturedCaseStudy caseStudies={caseStudies} />
            <ServiceFAQ items={faqItems} title="Our Staff Augmentation Services" />
            <BranchFooter />
        </div>
    );
};

export default StaffAugmentationPage;
