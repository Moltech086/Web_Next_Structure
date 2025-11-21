"use client";
import React, { useState } from "react";
import { AppIcons } from "@/data/appIcons";
import Iconify from "@/components/ui/icons/Iconify";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ServiceSlider from "./components/ServiceSlider";
import CTASection from "../../../components/ctaSection/CTASection";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import ProcessSection from "@/components/processsection/ProcessSection";
import ServiceFAQ from "../../../components/serviceFAQ/ServiceFAQ";
import FeaturedCaseStudy from "@/features/caseStudyPage/featuredCaseStudy/FeaturedCaseStudy";
import Image from "next/image";
import "../../../styles/Variables.scss";
import "../Service.scss";

const steps = [
  {
    icon: "mdi:chat-question",
    title: "Discovery & Consultation",
    description:
      "We begin with an in-depth discussion to understand your business goals, challenges, existing infrastructure, and vision of your idea to develop.",
  },
  {
    icon: "mdi:pencil-ruler",
    title: "Strategic Planning & Design",
    description:
      "Defining the project scope, technical architecture, technology stack, and detailed functional specifications, we help you to build prototypes, designs, workflows, MVPs, mind maps for your business process.",
  },
  {
    icon: "mdi:cog-outline",
    title: "Development & Iteration",
    description:
      "Our expert developers write clean, efficient, and scalable code on define technology stack.",
  },
  {
    icon: "mdi:cloud-upload-outline",
    title: "Deployment & Launch",
    description:
      "Seamless deployment of the software to your chosen environment (cloud, on-premise).",
  },
  {
    icon: "material-symbols:settings-suggest-rounded",
    title: "Post-Launch Support & Optimization",
    description:
      " Ongoing maintenance, bug fixes, performance monitoring, and security updates.",
  },
];

const services = [
  {
    number: "01",
    title: "Custom Web Application Development",
    content: {
      title: "",
      mainTitle: "Custom Web Application Development",
      description:
        "Build powerful, secure, and scalable web applications that align with your business processes and user expectations.",
      description2:
        "From internal tools to customer-facing platforms, we develop responsive, feature-rich web apps using modern tech stacks like React, Angular, Node.js, .NET, and more.",
      tech: {
        frontend: [
          AppIcons.AngularLogo,
          AppIcons.ReactLogo,
          AppIcons.NodejsLogo,
          AppIcons.NetLogo,
          AppIcons.MongoDBLogo,
          AppIcons.MySQLLogo,
          AppIcons.PHPLogo,
        ],
      },
      features: [
        {
          icon: "ic:baseline-security",
          title: "Security & Scalability",
          desc: "Enterprise-grade architecture that grows with your business.",
        },
        {
          icon: "eos-icons:performance",
          title: "Performance-Driven Design",
          desc: "Lightning-fast, responsive apps that users love to use.",
        },
        {
          icon: "streamline-cyber:business-chart-4",
          title: "Business-Aligned Functionality",
          desc: "Built to reflect your processes—not force you to adapt to generic solutions.",
        },
      ],
    },
  },
  {
    number: "02",
    title: "Mobile App Development (iOS, Android & Hybrid)",
    content: {
      title: "Mobile-First Solutions",
      mainTitle: "Mobile App Development (iOS, Android & Hybrid)",
      description:
        "Turn your mobile strategy into reality with high-performance native and cross-platform apps. We use technologies like Swift, Kotlin, Flutter, and React Native to deliver seamless mobile experiences across both iOS and Android ecosystems — perfect for startups, enterprises, and digital products.",
      tech: {
        frontend: [
          AppIcons.swiftLogo,
          AppIcons.androidLogo,
          AppIcons.Kotlin,
          AppIcons.flutterLogo,
          AppIcons.ReactLogo,
        ],
      },
      features: [
        {
          icon: "tabler:code",
          title: "Unified Codebase",
          desc: "Build once, deploy everywhere using cross-platform tools.",
        },
        {
          icon: "mdi:material-ui",
          title: "Smooth UX/UI",
          desc: "Intuitive interfaces for delightful mobile experiences.",
        },
        {
          icon: "eos-icons:performance",
          title: "Native Performance",
          desc: "Apps optimized for performance and speed.",
        },
      ],
    },
  },
  {
    number: "03",
    title: "Enterprise Software Solutions",
    content: {
      title: "Enterprise-oriented Software",
      mainTitle: "Enterprise Software Solutions",
      description:
        "Automate workflows, improve operational efficiency, and unify data with custom-built enterprise applications. We develop tailored ERP, CRM, HRMS, and finance systems that integrate with your existing infrastructure and scale with your business growth.",
      tech: {
        frontend: [
          AppIcons.microsoft,
          AppIcons.java,
          AppIcons.ERPNext,
          AppIcons.ERP,
          AppIcons.CRM,
          AppIcons.WCF,
        ],
      },
      features: [
        {
          icon: "tabler:code",
          title: "Custom Integrations",
          desc: "Seamlessly connect with existing tools and systems.",
        },
        {
          icon: "mdi:material-ui",
          title: "Scalable Architecture",
          desc: "Built to grow with your enterprise needs.",
        },
        {
          icon: "eos-icons:performance",
          title: "High Performance",
          desc: "Optimized for speed, stability, and large data loads.",
        },
      ],
    },
  },
  {
    number: "04",
    title: "SaaS Product Development",
    content: {
      title: "Scalable SaaS Solutions",
      mainTitle: "SaaS Product Development",
      description:
        "From concept to launch, we help entrepreneurs and companies build scalable, multi-tenant SaaS platforms.Whether you need an MVP or a fully featured cloud-based solution, we guide you through the entire process, from ideation to design, development, and deployment.",
      tech: {
        frontend: [
          AppIcons.ReactLogo,
          AppIcons.AngularLogo,
          AppIcons.NodejsLogo,
          AppIcons.DotNet,
          AppIcons.MongoDBLogo,
          AppIcons.MySQLLogo,
          AppIcons.PHPLogo,
        ],
      },
      features: [
        {
          icon: "tabler:code-dots",
          title: "Cross-Platform Ready",
          desc: "Single codebase for web, mobile, and desktop delivery.",
        },
        {
          icon: "mdi:palette-swatch",
          title: "User-Centric Design",
          desc: "Clean, responsive interfaces for better engagement.",
        },
        {
          icon: "fluent:rocket-24-filled",
          title: "Cloud-Native Performance",
          desc: "Optimized for fast, secure, and scalable delivery.",
        },
      ],
    },
  },
  {
    number: "05",
    title: "Legacy System Modernization",
    content: {
      title: "Modern Systems",
      mainTitle: "Legacy System Modernization",
      description:
        "Revitalize outdated systems with modern architecture, improved security, and enhanced performance. Our team helps you migrate, refactor, and upgrade legacy applications to cloud-native or microservices-based platforms—reducing costs and future-proofing your tech stack.",
      tech: {
        frontend: [
          AppIcons.ReactLogo,
          AppIcons.AngularLogo,
          AppIcons.NodejsLogo,
          AppIcons.DotNet,
          AppIcons.MongoDBLogo,
          AppIcons.MySQLLogo,
          AppIcons.PHPLogo,
        ],
      },
      features: [
        {
          icon: "tabler:refresh",
          title: "System Refactoring",
          desc: "Revamp legacy code for better maintainability and efficiency.",
        },
        {
          icon: "carbon:cloud-service-management",
          title: "Cloud Migration",
          desc: "Move seamlessly to cloud-native or hybrid environments.",
        },
        {
          icon: "solar:shield-check-bold",
          title: "Security Enhancement",
          desc: "Upgrade outdated systems with modern security standards.",
        },
      ],
    },
  },
  {
    number: "06",
    title: "API & Integration Services",
    content: {
      title: "Integration Services",
      mainTitle: "API & Integration Services",
      description:
        "Deliver seamless experiences across all devices with apps built for both Android and iOS. From intuitive UI to robust performance, our apps are designed for user engagement and business efficiency.",
      tech: {
        frontend: [
          AppIcons.WCF,
          AppIcons.Core,
          AppIcons.GRPC,
          AppIcons.GraphQL,
          AppIcons.RestAPI,
        ],
      },
      features: [
        {
          icon: "tabler:api",
          title: "Custom API Development",
          desc: "Build secure and well-documented RESTful or GraphQL APIs.",
        },
        {
          icon: "solar:server-path-outline",
          title: "System Integration",
          desc: "Connect legacy systems, cloud apps, and databases seamlessly.",
        },
        {
          icon: "material-symbols:sync-lock",
          title: "Data Sync & Security",
          desc: "Ensure reliable data flow with authentication and encryption.",
        },
      ],
    },
  },
  {
    number: "07",
    title: "Cloud-Native Application Development",
    content: {
      title: "Cloud Solutions",
      mainTitle: "Cloud-Native Application Development",
      description:
        "Leverage the power of the cloud with scalable, secure, and cost-efficient applications built on AWS, Azure, and GCP. We specialize in designing cloud-first architectures that ensure high availability, elasticity, and DevOps automation.",
      tech: {
        frontend: [
          AppIcons.awsLogo,
          AppIcons.azureLogo,
          AppIcons.googleCloudLogo,
        ],
      },
      features: [
        {
          icon: "mdi:cloud-outline",
          title: "Cloud-First Architecture",
          desc: "Designed for scalability, resilience, and global availability.",
        },
        {
          icon: "mdi:dev-to",
          title: "DevOps Automation",
          desc: "CI/CD pipelines and monitoring for faster, safer releases.",
        },
        {
          icon: "material-symbols:lock-outline",
          title: "Built-in Security",
          desc: "End-to-end encryption and role-based access controls.",
        },
      ],
    },
  },
  {
    number: "08",
    title: "Dedicated Development Teams",
    content: {
      title: "Team Development",
      mainTitle: "Dedicated Development Teams",
      description:
        "Scale your internal resources with our experienced remote teams of developers, QA engineers, UX designers, and project managers. Work with a team that becomes an extension of your own — flexible, agile, and focused on delivering quality on time and within budget.",
      tech: {
        frontend: [],
      },
      features: [
        {
          icon: "mdi:account-multiple-outline",
          title: "Expert Talent Pool",
          desc: "Access skilled engineers, QAs, and designers on demand.",
        },
        {
          icon: "mdi:clock-outline",
          title: "Flexible Engagements",
          desc: "Scale teams up or down based on your project needs.",
        },
        {
          icon: "mdi:target",
          title: "Goal-Focused Delivery",
          desc: "Aligned with your timelines, KPIs, and quality standards.",
        },
      ],
    },
  },
];

const faqItems = [
  {
    title:
      "What is custom software development, and how does it differ from off-the-shelf software?",
    content:
      "<p>Custom software development is making software that is made just for your business's needs, workflows, or goals. Custom software solutions are a better fit for your unique operations than off-the-shelf software, which is made for a wide audience and often requires you to change your processes. Custom software solutions offer seamless integration, scalability, and improved efficiency.</p>",
  },
  {
    title: "Who should consider custom software development?",
    content:
      "<p>Custom software development is ideal for:</p><ul><li>Small, medium, and large businesses with unique workflows</li><li>Companies facing limitations with off-the-shelf software</li><li>Businesses looking to scale operations efficiently</li><li>Organizations aiming for workflow automation</li><li>Startups developing unique digital products</li><p>If you’re frustrated by the limitations of generic tools or spending too much time on manual processes, custom software is right for you.</p></ul> ",
  },
  {
    title:
      "Why should I choose custom software instead of ready-made software?",
    content:
      "<p>Off-the-shelf software often forces you to adjust your processes to fit the tool, while custom software aligns with your business needs, workflows, and goals.</p><ul><li>Supports unique processes</li><li>Offers seamless integration with your existing systems</li><li>Grows with your business, avoiding the need for future migrations</li><li>Provides better control and flexibility</li><li>Enhances business process automation</li></ul>",
  },
  {
    title: "Will I own the custom software after development?",
    content:
      "<p>Yes, once your custom software development project is complete and payment is made, you will own all source code, documentation, and intellectual property.</p>",
  },
  {
    title: "What if I&apos;m unsure about my business software needs?",
    content:
      "<p>You don&apos;t need to have all the answers before contacting us. Our team will help you clarify your requirements, identify pain points, and prioritize features to ensure your custom software solution aligns with your business goals and maximizes ROI.</p>",
  },
  {
    title: "Who should hire custom software development?",
    content: `<p>Businesses that benefit most from custom software services include:</p><ul><li>Companies with unique workflows that don't fit standard software</li><li>Growing businesses outgrowing their current systems</li><li>Organizations needing specific integrations or data control</li><li>Industries with compliance requirements (healthcare, finance, legal)</li><li>Businesses wanting competitive advantages through proprietary features</li><li>Companies spending too much on multiple software subscriptions</li></ul>`,
  },
  {
    title: "What size company typically needs custom software development?",
    content: `<p>Custom software benefits companies of all sizes:</p><ul><li>Startups: Need scalable solutions and competitive differentiation</li><li>Small businesses: Unique processes requiring specialized solutions</li><li>Mid-size companies: Complex integrations and growing operational needs</li><li>Large enterprises: Require comprehensive systems to ensure regulatory compliance</li></ul><p>The key factor is having unique requirements, not company size.</p>`,
  },
  {
    title: "Is custom software development expensive?",
    content: `<p>Custom software is an investment that delivers high ROI by:</p><ul><li>Reducing manual work and operational costs</li><li>Improving efficiency and productivity</li><li>Minimizing errors and rework</li><li>Eliminating subscription fees for unused features in generic software</li></ul><p>You save money long-term by investing in software that makes your business more efficient.</p>`,
  },
  {
    title: "How long does custom software development take?",
    content: `<p>Project timelines depend on complexity, but typically:</p><ul><li>Initial MVP (Minimum Viable Product): 3–6 months</li><li>Full-feature builds delivered in phases for faster results while adding features iteratively</li></ul><p>We use an agile development approach so you start seeing value early while refining the system to your exact needs.</p>`,
  },
  {
    title: "Will my team find it difficult to use custom software?",
    content: `<p>No. Custom software is designed around your current workflows, making it intuitive and easier to adopt. We also provide:</p><ul><li>User training</li><li>Clear documentation</li><li>Post-launch support to ensure smooth onboarding</li></ul>`,
  },
  {
    title: "How can I begin implementing custom software for my business?",
    content: `<ul><li>Identify key challenges you want to solve</li><li>Outline your workflows and pain points</li><li>Contact us for a free consultation</li></ul><p>We will assess your needs, propose a solution, and guide you through each step of the custom software development process.</p>`,
  },
  {
    title: "Can custom software integrate with my existing systems?",
    content: `<p>Yes, integration is a key strength of custom software. We can connect with:</p><ul><li>Legacy systems and databases</li><li>Third-party APIs (CRM, ERP, accounting software)</li><li>Cloud platforms (AWS, Azure, Google Cloud)</li><li>Mobile applications and web services</li><li>IoT devices and hardware systems</li><li>Business intelligence tools</li><li>E-commerce platforms and payment processors</li></ul>`,
  },
  {
    title: "Do you provide ongoing support for custom software?",
    content: `<p>Yes, we offer comprehensive support packages including:</p><ul><li>Bug fixes and technical issues resolution</li><li>Security updates and patches</li><li>Performance optimization and monitoring</li><li>Feature enhancements and new functionality</li><li>User training and documentation</li><li>System maintenance and backups</li><li>Priority support with guaranteed response times</li></ul>`,
  },
  {
    title: "What's the first step to get custom software developed?",
    content: `<p>Start with a free consultation where we:</p><ul><li>Analyze your current processes and pain points</li><li>Identify opportunities for improvement</li><li>Assess if custom software is the best solution</li><li>Provide approximate timeline and budget estimates</li><li>Discuss alternative approaches if needed</li><li>Create a detailed project proposal</li></ul>`,
  },
];

const caseStudies = [
  {
    // category: "Logistics & Courier Services",
    title: "K&B Couriers",
    image: AppIcons.KBcouriers1,
    description:
      "Moltech Solutions collaborated with K&B Couriers to deliver a full-scale digital solution including a modern corporate website, custom admin portal, and backend APIs. The solution improved internal workflows, enforced validations, and delivered real-time logistics control—enhancing their operational performance and scalability.",
    location: "USA",
    industry: "Logistics & Courier Services",
    stats: [],
    projectType:
      "Web Portal , Business Consulting , API Development , UI/UX Design",
    technologies: [
      {
        name: "Windows Server IIS",
        icon: "mdi:server",
        description:
          "Web server hosting the application and services securely.",
      },
      {
        name: "MS SQL Server 2012+",
        icon: "simple-icons:microsoftsqlserver",
        description: "Relational database to manage logistics and client data.",
      },
      {
        name: "ASP.NET MVC 5.0",
        icon: "skill-icons:dotnet",
        description:
          "Powerful framework for scalable enterprise web applications.",
      },
      {
        name: "AJAX Toolkit",
        icon: "mdi:cached",
        description: "Asynchronous UI interactions and component updates.",
      },
      {
        name: "C#",
        icon: "logos:c-sharp",
        description: "Backend programming language for logic and services.",
      },
      {
        name: "AngularJS",
        icon: "skill-icons:angular-dark",
        description:
          "JavaScript framework for building dynamic web interfaces.",
      },
      {
        name: "jQuery",
        icon: "logos:jquery",
        description: "Simplified JavaScript for DOM manipulation and Ajax.",
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
        name: "CSS",
        icon: "logos:css-3",
        description: "Stylesheets crafted for beautiful and responsive design.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Component framework for rapid and consistent UI development.",
      },

      {
        name: "SVN",
        icon: "mdi:source-branch",
        description: "Version control system used for codebase management.",
      },
    ],
    link: "courier-booking-admin-system-case-study",
  },
  {
    // category: "Chemical Data Management, SaaS",
    title: "EchemPortal Centralized System",
    image: AppIcons.CentralizeSystem1,
    description:
      "We developed a centralized system for EchemPortal Inc. to serve as the backbone for their growing portfolio of applications. This system handles user management, project assignments, role configurations, and secure client key management while supporting common operational needs like email digests, event schedulers, and data synchronization across various projects.",
    location: "Global",
    industry: "Chemical Data Management",
    stats: [],
    projectType:
      "User Management ,  Centralized Role System ,  Email Digest & Notifications  , Scheduler & Jobs , Exception & Log Monitor",
    technologies: [
      {
        name: "React.js",
        icon: "logos:react",
        description:
          "Frontend library used to build dynamic dashboard modules and admin interfaces.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript used for scalable and maintainable frontend code.",
      },
      {
        name: ".NET Core",
        icon: "logos:dotnet",
        description:
          "Backend framework for building secure, high-performance REST APIs.",
      },
      {
        name: "SQL Server",
        icon: "logos:mysql",
        description:
          "Relational database used for managing structured business data.",
      },
      {
        name: "MongoDB",
        icon: "logos:mongodb-icon",
        description:
          "NoSQL database used for storing unstructured and document-based data.",
      },
      {
        name: "REST API Development",
        icon: "mdi:api",
        description:
          "Exposes secure RESTful services to connect frontend and backend systems.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Markup language used for structuring content on the web.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Styling language used for modern, responsive layout design.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Frontend UI toolkit for building responsive layouts and components.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Core scripting language used for interactive client-side behavior.",
      },
    ],
    link: "centralized-operations-management-platform-case-study",
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
    // category: "Land Management & Geospatial",
    title: "Singapore Land Authority (SLA)",
    image: AppIcons.SLA1,
    description:
      "We built a user-centric web application and robust admin backend for SLA, enabling efficient membership management, booking processes, and resource management while providing SLA with detailed financial reporting and operational oversight through a structured, scalable portal.",
    location: "Singapore",
    industry: "Land Management & Geospatial",
    stats: [],
    projectType:
      "Web Portal Development ,Admin Dashboard ,Financial Reporting System ,Zoom API Integration",
    technologies: [
      {
        name: ".NET Core API",
        icon: "devicon:dotnetcore",
        description:
          "Secure and scalable API layer for business logic and integrations.",
      },
      {
        name: "Next.js",
        icon: "skill-icons:nextjs-light",
        description:
          "Modern React-based framework for high-performance web applications.",
      },
      {
        name: "React.js",
        icon: "vscode-icons:file-type-reactjs",
        description:
          "Component-based library for building responsive admin interfaces.",
      },
      {
        name: "MS SQL Server",
        icon: "devicon:microsoftsqlserver-wordmark",
        description:
          "Robust data storage solution with advanced querying and reporting.",
      },
      {
        name: "HTML",
        icon: "mdi:language-html5",
        description: "Markup language used for structuring content on the web.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Style sheet language for designing visually engaging pages.",
      },
      {
        name: "Bootstrap",
        icon: "skill-icons:bootstrap",
        description: "Popular CSS framework for responsive, mobile-first UI.",
      },
      {
        name: "JavaScript",
        icon: "skill-icons:javascript",
        description: "Core language for dynamic and interactive web content.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript for scalable application code.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description:
          "Legacy JavaScript library for DOM manipulation and events.",
      },
      {
        name: "AWS Amplify",
        icon: "skill-icons:aws-dark",
        description:
          "Cloud-based web hosting and CI/CD for frontend applications.",
      },
      {
        name: "AWS EC2 with IIS",
        icon: "logos:aws-ec2",
        description:
          "Scalable virtual server for hosting backend APIs securely.",
      },
      {
        name: "Role-Based Access Control",
        icon: "mdi:account-lock-outline",
        description: "Secure user access with permission-based roles.",
      },
      {
        name: "Payment Gateway Integration",
        icon: "mdi:credit-card-outline",
        description:
          "Enables secure online payment processing in the platform.",
      },
      {
        name: "Google Captcha",
        icon: "logos:recaptcha",
        description: "Bot protection to secure user interactions and forms.",
      },
      {
        name: "Zoom API Integration",
        icon: "bxl:zoom",
        description: "Enables automated Zoom meeting creation and management.",
      },
      {
        name: "Email Scheduler",
        icon: "mdi:email-send-outline",
        description:
          "Automated email notifications triggered by system events.",
      },
      {
        name: "Distributed & Repository Pattern",
        icon: "mdi:source-branch",
        description:
          "Architectural patterns ensuring maintainability and scalability.",
      },
    ],
    link: "membership-event-management-web-portal-case-study",
  },
];

const CustomSoftwareDevelopment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = services[activeIndex];

  return (
    <>
      <div className="services-herosection-details">
        <div className="container">
          <div className="row hero-main-sec">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div
                className="service-title-left"
              >
                {/* <span className="service-sub-title">Custom Software Development</span> */}
                <h1 className="service-title">
                  The Right Software Can Change Everything—Let&apos;s Build It,
                  Built Just for Your Business
                </h1>
                <p>
                  Moltech Solutions delivers custom business software solutions
                  — so you get exactly what you need, when you need it.
                </p>
                <Link className="service-btn" href="/contact-us">
                  <span>Let&apos;s Connect</span>
                  <Iconify icon="weui:arrow-filled" width={20} />
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div
                className="service-title-right"
              >
                <Image
                  src={AppIcons.CustomSoftwareDevelopment}
                  alt="Custom Software Development"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="service_wave"
        >
          <Image src={AppIcons.ServiceWave} alt="Service Wave" />
        </div>
      </div>
      <div className="service-features">
        <div className="container">
          <h3 className="headline-title">
            Custom software solutions that scale with your goals and power your
            Business.
          </h3>
          <div className="row mt-3">
            {/* Left Side with Clipped Image and Badges */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div
                className="service-features-left"
              >
                <div className="service-image-container">
                  <Image
                    src={AppIcons.CustomSoftwareAsset1}
                    alt="Custom Software Development"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div
                className="service-features-right"
              >
                {/* <div className="sub-title">Built for Your Business. Designed for the Future.</div> */}
                <p className="description">
                  Whether you&apos;re a fast-growing startup looking to disrupt
                  the market, an enterprise aiming to modernize outdated
                  systems, or a digital-native company wanting to scale smarter,
                  we partner with you to build technology that works for you—not
                  the other way around.
                </p>
                <p className="description">
                  <span>At Moltech Solution Inc.</span>, we understand that
                  every business is different, and so are its challenges. That’s
                  why we specialize in creating custom-built software solutions
                  that go beyond basic functionality to become powerful enablers
                  of innovation, scalability, and operational excellence.
                </p>
                <p className="description">
                  We are a{" "}
                  <span className="highlight">
                    US-based Custom Software Services{" "}
                  </span>{" "}
                  company with a global development edge, dedicated to crafting
                  custom software solutions that help businesses modernize
                  operations, enhance productivity, and drive innovation. Our
                  team brings together over a decade of cross-industry
                  experience to deliver secure, scalable, and cost-effective
                  software tailored to your exact needs.
                </p>
                <p className="description">
                  With over a{" "}
                  <span className="highlight">decade of experience</span> in
                  industries like finance, healthcare, logistics, retail, and
                  SaaS, our team has the technical know-how and industry insight
                  to handle even the most complex digital transformations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-solutions">
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div
                className="service-solutions-left"
              >
                {/* <div className="sub-title">Built for Your Business. Designed for the Future.</div> */}
                <h3 className="headline-title">Solutions That Work for You</h3>
                <p className="description">
                  Whether you&apos;re a fast-growing startup looking to disrupt
                  the market, an enterprise aiming to{" "}
                  <span className="mark-content">
                    modernize outdated systems,
                  </span>{" "}
                  or a{" "}
                  <span className="mark-content">digital-native company</span>{" "}
                  wanting to scale smarter, we partner with you to build
                  technology that works for you—not the other way around.
                </p>
                <p className="description">
                  At Moltech,{" "}
                  <span className="mark-content">
                    Custom software development
                  </span>{" "}
                  is more than just code. It&apos;s about truly understanding
                  your business, pinpointing pain points, and creating smart,
                  future-ready solutions that solve real-world problems and
                  deliver measurable value.
                </p>
                <div className="highlight-sec">
                  <p className="description">
                    Let us help you turn your vision into a scalable, secure,
                    and impactful digital reality.
                  </p>
                  <Link className="service-btn" href="/contact-us">
                    <span>Let&apos;s Connect</span>
                    <Iconify icon="weui:arrow-filled" width={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div
                className="service-solutions-right"
              >
                <div className="service-image-container">
                  <Image
                    src={AppIcons.CustomSoftwareAsset2}
                    alt="Custom Software Development"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-keysolutions">
        <div className="container">
          {/* <div className="service-title">Custom Software Development Services</div> */}
          <div className="headline-title">
            Our Key{" "}
            <span className="highlight">Custom Software Development</span>{" "}
            Services
          </div>
          <div className="row mt-3">
            {/* Left Panel */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
              <div className="service-keysolutions-left">
                <div className="services-list">
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className={`service-list-item ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="service-item-number">{item.number}</div>
                      <div className="service-item-title">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
              <div className="service-keysolutions-right">
                {/* Top Section */}
                <div className="service-top-section">
                  {/* <div className="service-title">{current.content.title}</div> */}
                  <div className="service-main-title">
                    {current.content.mainTitle}
                  </div>
                  <div className="service-description">
                    {current.content.description}
                  </div>
                  <div className="service-description">
                    {current.content.description2}
                  </div>
                </div>

                {/* Tech Stack Section */}
                {current.content.tech?.frontend?.length > 0 && (
                  <div className="service-middle-section">
                    <div className="service-title">Technologies We Use:</div>
                    <div className="service-description">
                      We harness the power of modern, robust, and scalable tech
                      stacks to bring your vision to life:
                    </div>
                    <div className="tech-logos-section">
                      {/* Frontend */}
                      <div className="tech-stack-group">
                        <div className="techstack-list">
                          {current.content.tech.frontend.map((src, i) => (
                            <div className="techstack-item" key={i}>
                              <Image src={src} alt="Frontend Tech" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Section */}
                <div className="service-bottom-section">
                  <div className="service-title">Features</div>
                  <div className="service-description">
                    We offer a range of features to help you build custom
                    software solutions that meet your business needs:
                  </div>
                  <div className="service-bottom-section-list">
                    {current.content.features.map((feat, i) => (
                      <div className="service-bottom-section-item" key={i}>
                        <div className="title">
                          <Icon icon={feat.icon} /> {feat.title}
                        </div>
                        <div className="description">{feat.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <ServiceSlider />
      <ProcessSection
        steps={steps}
        title={"How do we work ?"}
        subTitle={"Our Tailored Software Development Approach"}
        bgColor={"#fff"}
      />
      <FeaturedCaseStudy caseStudies={caseStudies} />
      <ServiceFAQ
        items={faqItems}
        title={"Our Custom Software Development Services"}
      />
      <BranchFooter />
    </>
  );
};

export default CustomSoftwareDevelopment;
