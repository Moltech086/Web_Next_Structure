"use client";
import React, { useState, useEffect, useRef } from "react";
import Images from "@/components/image/Image";
import { AppIcons } from "@/data/appIcons";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";
import DataProcessingSlider from "./components/DataProcessingSlider";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import ProcessSection from "@/components/processsection/ProcessSection";
import CTASection from "@/components/ctaSection/CTASection";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import FeaturedCaseStudy from "@/features/caseStudyPage/featuredCaseStudy/FeaturedCaseStudy";
import "./DataProcessingPage.scss";

const services = [
  {
    title: "Data Entry & Digitization",
    icon: "fluent-color:document-add-48",
    content1:
      "Quietly devouring your team's time and attention, manual data entry can also be. Turning handwritten forms, outdated paper files, or scattered digital records into ordered, searchable data is vital but labor-intensive. We are here to help.",
    content2:
      "At Moltech Solutions Inc., we provide dependable and accurate digitalization and data entry tools catered to your company's requirements. From entering consumer information and survey answers to digitizing contracts, invoices, and handwritten logs, we make sure your data is clean, orderly, and easily available.",
    content3:
      "Anywhere paper still rules or records are scattered over several sources, our solution is perfect for businesses in the healthcare, logistics, real estate, legal, and educational sectors. Your personnel can avoid the busywork and concentrate on important tasks by contracting this to us. Our staff blends security, speed, and accuracy to let you start trusting your data. Allow us to lay the foundation so you may create better selections at it.",
  },
  {
    title: "Data Cleansing and Validation",
    icon: "streamline-freehand-color:cleaning-man",
    content1:
      "Your data's quality only matches its correctness. Although they may seem minor, typos, duplicates, obsolete information, and inconsistent formats can lead to significant issues such as ineffective advertising, poor decision-making, and compliance risks.",
    content2:
      "Our area of expertise at Moltech Solutions Inc., is data cleansing and validation to guarantee your records are not only accurate but whole. To uphold integrity, we find and eliminate duplicates, fix formatting mistakes, change outdated information, and cross-reference data from several sources.",
    content3:
      "Any company using CRM systems, financial systems, inventory data, or customer databases needs this service. Particularly financial services, retail, and e-commerce businesses can gain from this degree of accuracy.",
    content4:
      "We assist you in avoiding the knock-on consequences of poor data. Whether it's a one-time cleanup or continuous quality inspections, our staff guarantees that consistent, dependable data driving your operations may be acted upon with confidence.",
  },
  {
    title: "Data Conversion",
    icon: "streamline-plump-color:convert-pdf-1-flat",
    content1:
      "Data stuck in old formats or across incompatible systems forms a quiet bottleneck.   Perfect conversion is vital whether you're turning PDFs into structured data from Excel to a database, from outdated software, or from obsolete tools—but harmful if done wrong.",
    content2:
      "Moltech Solutions Inc. provides safe and efficient data conversion tools tailored to your tech ecosystem. We deal with everything from reformatting enormous volumes of scanned data into usable digital formats to converting files between XML, CSV, JSON, or SQL formats.",
    content3:
      "Companies going through digital transformation, ERP migrations, or software upgrades usually rely on us to connect the old and new. Trusting us to share data without compromising integrity includes banks, manufacturers, healthcare providers, and educational organizations.",
    content4:
      "Our method ensures zero data loss, structural integrity, and format fit. We handle the technical tasks, while you concentrate on scaling and modifying the system. Conversion is a perfect forward stride, not a disruption with us.",
  },
  {
    title: "Data Analysis and Reporting",
    icon: "icon-park:analysis",
    content1:
      "Sales figures, customer interactions, inventory trends, or operational metrics—you are sitting on a gold mine of data, but without precise analysis, it is just numbers on a screen. Insight results only from data being put to use.",
    content2:
      "Using customized data analysis and reporting tools, Moltech Solutions Inc. assists companies in releasing that insight. Whether your needs are for operational performance summaries, customer behavior reports, or monthly sales dashboards, we transform your unprocessed data into easily consumed visual reports that guide decisions.",
    content3:
      "Retail chains, e-commerce sites, SaaS enterprises, and operations teams dependent on performance tracking greatly benefit from this service. Either we assist you in creating new bespoke reporting pipelines, or we work with your current tools  (Excel, Power BI, Google Sheets, SQL databases, etc.).",
    content4:
      "Our staff makes sure every report addresses the objectives of your company. We show you what's critical, sort out the noise, and enable you to see patterns before they pass by as lost chances. Data should empower you, not overwhelm you.",
  },
  {
    title: "Invoice and Transaction Processing",
    icon: "icon-park:bill",
    content1:
      "Your company creates scores, if not hundreds, of invoices and financial transactions every day. Manually processing them results in delays, lost payments, duplicate entries, or perhaps compliance issues. This is a back-office assignment needing accuracy and consistency.",
    content2:
      "By providing end-to-end invoicing and transaction processing capabilities, Moltech Solutions Inc. simplifies your financial processes. From entering data (PDFs, scans, Excel) to verifying entries, tracking payments, and record reconciliation—we guarantee accuracy from entry to audit.",
    content3:
      "Accounting businesses, shipping companies, wholesalers, and any business handling significant supplier and customer transactions would find great value in this service. Our staff scales with you regardless of your monthly handling—500,000 records or less.",
    content4:
      "We keep audit-ready records, speed up your financial cycles, and help you cut processing expenses. You may concentrate on increasing your income with us; we make sure every dollar is tracked.",
  },
  {
    title: "Document Digitization",
    icon: "fluent-color:document-24",
    content1:
      "Apart from using physical space, paper document piles slow down access, increase danger, and impede digital processes. Not only smart but also essential in the busy corporate climate of today is digitizing those records.",
    content2:
      "Moltech Solutions Inc. offers complete document digitization capability beyond simple scanning. We categorize, tag, index, and convert your physical documents—invoices, contracts, forms, receipts, etc.—into searchable, safe digital files based on how your team works.",
    content3:
      "Ideal usage for this service would be law firms, hospitals, real estate corporations, colleges, and government agencies striving to maintain, modernize, or streamline document-heavy processes.",
    content4:
      "We promise strict data protection, consistent formatting, and full text recognition (OCR), therefore allowing fast and consistent future retrieval. With our help, your paper archives become powerful, easily available tools that give your teams quick access to the data they need when most needed.",
  },
  {
    title: "Database Management & Migration",
    icon: "streamline-plump-color:database-flat",
    content1:
      "Your data expands with the growth of your business, but controlling that expansion is not always easy. Database performance depends on structure, optimization, and maintenance. And when should we move? Real are the hazards of data loss, outage, or mismatched formats.",
    content2:
      "Strong database management and migration tools available from Moltech Solutions Inc. are meant to keep your data orderly, accessible, and future-ready. We have you covered whether your database is SQL Server, MySQL, Oracle, or cloud-based systems like AWS or Azure.",
    content3:
      "Among our offerings are database setup, schema design, performance tuning, frequent backups, and full-scale migrations—on-site to cloud, legacy to modern systems. Should your company be upgrading, merging, or expanding, we guarantee a seamless, zero-loss change.",
    content4:
      "We service companies in fields including finance, logistics, healthcare, and e-commerce—where accuracy and uptime are non-negotiable. Your data backbone starts to be a source of strength rather than stress with Moltech.",
  },
  {
    title: "Real-Time Data Processing",
    icon: "openmoji:timer",
    content1:
      "Failures in the digital age of today might indicate missed opportunities. Staying competitive requires real-time data processing, whether you are tracking logistics in real time, monitoring customer behavior on your app, or observing changes on your financial dashboard.",
    content2:
      "Moltech Solutions Inc. lets your company run in real time. Whether transactional data, sensor inputs, user events, or sales data—we create systems that process continuous data streams with zero lag, therefore guaranteeing your operations remain responsive and current.",
    content3:
      "For logistics enterprises, financial startups, IoT-driven businesses, and live dashboards for consumer engagement or fraud detection, especially, this is crucial.  To keep your data flowing, we leverage Apache Kafka, Node.js, or cloud-native event-streaming pipelines, among other technologies and frameworks.",
    content4:
      "Working with Moltech allows you to access dependable, scalable, real-time data handling free from complication. While you concentrate on making quick, wise decisions at the speed your company requires, let us manage the back-end architecture.",
  },
  {
    title: "Custom Data Solutions",
    icon: "streamline-sharp-color:customer-support-setting-flat",
    content1:
      "Since every business is exactly like each other, why should your data solutions be? Off-the-shelf products may not meet your specific compliance obligations, specialist reporting needs, or customized processes.",
    content2:
      "Custom data processing solutions created by Moltech Solutions Inc. precisely fit your company logic. From tailored dashboards, scripts, and connectors to bespoke ETL pipelines and workflow automation—we provide exactly what you need, nothing less.",
    content3:
      "Companies with specific operations—such as specialist manufacturers, agencies with complicated billing, or service providers with tailored client onboarding—should find this solution perfect. Working directly with your team, we help you to define your objectives and create a solution that matches your situation well.",
    content4:
      "Moltech lets you adjust the tools to you rather than fit rigid tools. We convert manual workarounds into precise automatic solutions for issues you thought you would have to live with. Not the other way around, let us assist you in shaping data around your company.",
  },
];

const steps = [
  {
    icon: "hugeicons:ai-brain-04",
    title: "Strategic Discovery & Workflow Mapping",
    description:
      " We begin by immersing ourselves in your data landscape. Our team collaborates with your stakeholders to map your current processes, uncover inefficiencies, and understand how data flows within your business.",
    bulletinsTitle: "What We Do:",
    bulletins: [
      "Review your current data sources, formats & channels.",
      "Identify manual bottlenecks and areas prone to errors.",
      "Understand your integration needs (ERP, CRM, e-comm, etc.).",
      "Define quality benchmarks, compliance protocols, and turnaround goals.",
      "Assess security and confidentiality requirements.",
    ],
  },
  {
    icon: "material-symbols-light:design-services-outline-rounded",
    title: "Solution Architecture & Process Blueprint",
    description:
      "With your needs mapped, we design a custom-built solution that mirrors your business logic—not generic templates. We focus on building a process that delivers consistent, verifiable output with room to scale.",
    bulletinsTitle: "What You Receive:",
    bulletins: [
      "Tailored data processing pipeline with role assignments.",
      "Error-checking & validation rules for each data stage.",
      "API/data sync model for your existing platforms.",
      "Backup & disaster recovery strategy.",
      "Real-time dashboard/reporting design (optional).",
      "SLA definitions & measurable KPIs.",
    ],
  },
  {
    icon: "fluent-mdl2:world",
    title: "Pilot Execution & Refinement ",
    description:
      "We execute a real-world pilot with your data. This “test flight” ensures the system performs at scale, meets your accuracy standards, and integrates seamlessly with your tools.",
    bulletinsTitle: "What We Do:",
    bulletins: [
      "Process a controlled batch of live data.",
      "Validate results against defined benchmarks.",
      "Gather real-time feedback from your internal team.",
      "Optimize workflows, tools, and documentation.",
    ],
  },
  {
    icon: "fluent:mobile-optimized-48-regular",
    title: "Full - Scale Rollout & Continuous Optimization",
    description:
      "After a successful pilot, we scale. Our dedicated processing team operates your workflow with daily QC checks, real-time reporting, and continuous improvement recommendations.",
    bulletinsTitle: "Ongoing support includes:",
    bulletins: [
      "Daily/weekly processing with SLA guarantees.",
      "Continuous quality checks + 2nd-layer audits.",
      "Weekly review calls and performance scorecards.",
      "Workflow adjustments as your business evolves.",
      "Priority support and emergency handling protocols.",
    ],
  },
  {
    icon: "codicon:organization",
    title: "Continuous Optimization Loop",
    description:
      "We don’t stop at execution. Our specialists regularly review performance and suggest process improvements that reduce cost, improve accuracy, or enable automation.",
    bulletinsTitle: "You Benefit From:",
    bulletins: [
      "Error pattern analysis and correction automation.",
      "Volume-based optimization (batch vs. real-time).",
      "Opportunities to integrate AI/ML for classification or auto-tagging.",
      "Monthly efficiency reports and cost-saving insights.",
    ],
  },
];

const faqItems = [
  {
    title: "What are data processing services, and why are they important?",
    content:
      "<p>Data processing services involve collecting, cleaning, validating, transforming, and organizing raw data into usable information for decision-making, helping reduce manual effort and improve accuracy.</p>",
  },
  {
    title: "Who can benefit from your data processing services?",
    content:
      "<p>Small businesses, startups, enterprises, and organizations with large volumes of sales, accounting, or operational data benefit by saving time, reducing errors, and improving data efficiency.</p>",
  },
  {
    title:
      "Why should I outsource data processing instead of managing it in-house?",
    content:
      "<p>Outsourcing ensures accuracy, faster turnaround, data security, and cost efficiency, helping you avoid internal errors and letting your team focus on core business activities.</p>",
  },
  {
    title:
      "What common problems do businesses face without proper data processing?",
    content:
      "<p>Issues include data inconsistency, inaccurate reports, time-consuming manual entry, and difficulty analyzing large datasets—all of which our services help resolve efficiently.</p>",
  },
  {
    title: "How do your data processing services help with business growth?",
    content:
      "<p>We provide structured and accurate data for reporting, forecasting, and strategic decisions—improving efficiency and driving growth across operations.</p>",
  },
  {
    title: "Is my data safe with your data processing services?",
    content:
      "<p>Yes, we follow strict security protocols and confidentiality agreements to ensure your data remains fully protected throughout the processing lifecycle.</p>",
  },
  {
    title: "What types of data can you process?",
    content:
      "<p>We handle financial, customer, sales, survey, product, and inventory data, offering customized solutions based on your business needs and formats.</p>",
  },
  {
    title: "How do I know if I need data processing services?",
    content:
      "<p>If you face reporting delays, spend excessive time cleaning data, or struggle with accuracy, it’s time to consider professional data processing support.</p>",
  },
  {
    title:
      "Can data processing services handle multiple data formats and sources?",
    content:
      "<p>Yes, we process data from various formats—paper, digital files, databases, and online sources—ensuring seamless and consolidated data management.</p>",
  },
  {
    title: "How do you ensure data accuracy and quality?",
    content:
      "<p>We use quality checks, validations, and audits to ensure 99.99%+ accuracy and flag any illegible or duplicate data for resolution with your input.</p>",
  },
  {
    title: "How long does data processing take?",
    content:
      "<p>Timelines vary by data size and complexity—simple tasks may take hours, while larger analytics projects take days. We provide accurate estimates during consultation.</p>",
  },
];

const caseStudies = [
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
    // category: "Accounting & Governance",
    title: "ACCA eVoting Platform",
    image: AppIcons.acca4,
    description:
      "We built a secure, scalable online voting platform that allowed ACCA members to log in, authenticate, and cast votes during AGMs remotely. This system ensured transparency, auditability, and seamless voting experiences for members, maintaining ACCA’s governance commitments even during pandemic restrictions.",
    location: "Global",
    industry: "Professional Membership, Accounting",
    stats: [
      {
        label: "Project Focus",
        value: "Secure voting",
      },
      {
        label: "Key Outcomes",
        value: "Governance ready",
      },
    ],
    projectType:
      "Online Voting Portal ,  Secure Authentication , Audit Trail Logging , Admin Dashboard , Notification System",
    technologies: [
      {
        name: "ASP.NET MVC",
        icon: "logos:dotnet",
        description:
          "Core backend framework used for vote management and session control.",
      },
      {
        name: "C#",
        icon: "logos:c-sharp",
        description:
          "Primary programming language for building backend logic and APIs.",
      },
      {
        name: "MS SQL Server",
        icon: "devicon:microsoftsqlserver-wordmark",
        description:
          "Stores secure vote logs and user credentials with traceability.",
      },
      {
        name: "HTML5",
        icon: "logos:html-5",
        description:
          "Markup language for structuring and presenting web content.",
      },
      {
        name: "AngularJS",
        icon: "devicon:angularjs",
        description:
          "Client-side framework used for dynamic dashboard and UI components.",
      },
      {
        name: "jQuery",
        icon: "skill-icons:jquery",
        description:
          "JavaScript library for simplifying DOM manipulation and Ajax requests.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Programming language enabling interactivity and client-side logic.",
      },
      {
        name: "AJAX",
        icon: "iconamoon:playlist-repeat-list-bold",
        description:
          "Technique for asynchronous web requests to enhance user experience.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description:
          "Stylesheet language used for layout and responsive design.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description:
          "Frontend framework used for responsive and mobile-first design.",
      },
      {
        name: "AWS EC2",
        icon: "logos:aws-ec2",
        description:
          "Scalable cloud infrastructure hosting the web server and APIs.",
      },
      {
        name: "Windows Server IIS",
        icon: "mdi:server",
        description:
          "Web server software used for hosting ASP.NET applications.",
      },
      {
        name: "SVN (Version Control)",
        icon: "mdi:source-branch",
        description:
          "Version control system managing codebase history and collaboration.",
      },
      {
        name: "Distributed and Repository Architecture",
        icon: "mdi:source-repository-multiple",
        description:
          "Design pattern ensuring scalable, maintainable backend structure.",
      },
      {
        name: "Image Cropper",
        icon: "mdi:crop",
        description:
          "Tool integrated for image editing and resizing within the app.",
      },
    ],
    link: "secure-e-voting-platform-case-study",
  },
  {
    // category: "Membership Platform",
    title: "AiSP Membership & Admin Portal",
    image: AppIcons.AISP1,
    description:
      "We built a comprehensive membership management platform that supports multiple membership types (Corporate, Individual, Academic), payment processing, and member communications. The platform enables AiSP to onboard new members, manage renewals, reconcile payments, and run EDM campaigns while allowing customers to manage their profiles and participate in community activities.",
    location: "Singapore",
    industry: "Professional Cybersecurity Association",
    stats: [],
    projectType:
      "Membership Portal ,  Admin Platform ,  EDM & Email Campaign System ,  Payment Reconciliation",
    technologies: [
      {
        name: ".NET Core API",
        icon: "logos:dotnet",
        description:
          "Secure and scalable backend for membership and financial workflows.",
      },
      {
        name: "React.js",
        icon: "logos:react",
        description: "Frontend library for building dynamic user interfaces.",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
        description:
          "React-based framework for server-rendered web applications.",
      },
      {
        name: "MS SQL Server",
        icon: "devicon:microsoftsqlserver-wordmark",
        description:
          "Reliable relational database for member and transaction records.",
      },
      {
        name: "AWS Amplify",
        icon: "material-icon-theme:amplify",
        description: "Web hosting and CI/CD platform for frontend apps.",
      },
      {
        name: "AWS EC2",
        icon: "logos:aws-ec2",
        description: "Scalable compute service for API and backend hosting.",
      },
      {
        name: "IIS (Internet Information Services)",
        icon: "mdi:server",
        description: "Windows-based web server for hosting ASP.NET Core APIs.",
      },
      {
        name: "HTML",
        icon: "logos:html-5",
        description: "Standard markup language for structuring web content.",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
        description: "Style sheet language for designing responsive UI.",
      },
      {
        name: "Bootstrap",
        icon: "logos:bootstrap",
        description: "CSS framework for developing mobile-first websites.",
      },
      {
        name: "JavaScript",
        icon: "logos:javascript",
        description:
          "Programming language for building dynamic web functionality.",
      },
      {
        name: "TypeScript",
        icon: "logos:typescript-icon",
        description:
          "Typed superset of JavaScript that compiles to plain JavaScript.",
      },
      {
        name: "jQuery",
        icon: "logos:jquery-icon",
        description:
          "Lightweight JavaScript library for simplified DOM manipulation.",
      },
      {
        name: "Role-Based Access Control",
        icon: "mdi:account-lock-outline",
        description:
          "Authorization system to control feature access by user roles.",
      },
      {
        name: "PayPal Integration",
        icon: "logos:paypal",
        description:
          "Secure online payment gateway integration for transactions.",
      },
      {
        name: "Email Scheduler",
        icon: "arcticons:smsscheduler",
        description:
          "System for sending scheduled email notifications automatically.",
      },
      {
        name: "Repository & Distributed Architecture",
        icon: "mdi:source-repository-multiple",
        description:
          "Maintainable codebase and scalable backend using modern architecture patterns.",
      },
    ],
    link: "membership-management-platform-admin-portal-case-study",
  },
];

const DataProcessingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManuallySelected, setIsManuallySelected] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isManuallySelected) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
      }, 10000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isManuallySelected, services.length]);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
    setIsManuallySelected(true);
    clearInterval(intervalRef.current);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="services-details">
      <div className="dataprocessing-herosection-details">
        <div
          className="dataprocessing-herosection-bgimage"
        
        >
          <div className="imagecontainer">
            <Images imagePath={AppIcons.dataPreprocessingVector} />
          </div>
        </div>
        <div className="dataprocessing-herosection">
          <div className="container">
            <div
              className="dataprocessing-herosection-left"
              
            >
              <h1 className="main-title">
                <span className="highlight">Grow</span> Your Business by
                <span className="highlight"> Processing Your Data</span> and
                Power Your Decisions.
              </h1>
              <div className="description">
                Today, managing a business entails being overwhelmed by{" "}
                <span className="highlight">data</span>. Information about{" "}
                <span className="highlight">customers</span>,{" "}
                <span className="highlight">financial transactions</span>,{" "}
                <span className="highlight">inventory</span>, and{" "}
                <span className="highlight">employees</span> is constantly being
                added. Critical data remains unprocessed while you&apos;re
                concentrating on <span>expanding your business</span>, which
                causes bottlenecks that hinder your growth and opportunities
                that you may miss.
              </div>
              <Link className="service-btn" href="/contact-us">
                <span>Let&apos;s Connect</span>
                <Iconify icon="weui:arrow-filled" width={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="dataprocessing-intro-section">
          <div className="dataprocessing-intro-left" >
            {/* <div className="dataprocessing-intro-left-title">
                            Introduction
                        </div> */}
            <div className="dataprocessing-intro-left-description">
              <p>
                Every decision, transaction, and consumer contact starts with
                data. But improper treatment turns it from an advantage to a
                liability.
              </p>
              <p>
                From bills, logs, and internal reports to online orders and
                customer inquiries, every company today is inundated with data.
                Ignored, this data can cause expensive mistakes, hold up
                business processes, and cause leaders to overlook the whole
                picture.
              </p>
              <p>
                Thus, good data processing is not optional; it is rather
                necessary.
              </p>
              <p>
                That’s why effective data processing isn’t optional—it’s
                essential.
              </p>
              <ul>
                <li>Manual data entry wastes hours</li>
                <li>Inaccurate data leads to poor decisions</li>
                <li>Unstructured records create compliance risks</li>
                <li>Scattered systems cause communication breakdowns</li>
              </ul>
            </div>
          </div>
          <div className="dataprocessing-intro-right">
            <div className="dataprocessing-intro-right-image-container">
              <Images imagePath={AppIcons.dataPreprocessingVector2} />
            </div>
            <div className="dataprocessing-box box-1">
              <div className="dataprocessing-box-left">
                <Iconify icon="icon-park-solid:data-one" />
              </div>
              <div className="dataprocessing-box-right">
                <div className="dataprocessing-box-right-title">
                  Manual data entry wastes hours
                </div>
              </div>
            </div>
            <div className="dataprocessing-box box-2">
              <div className="dataprocessing-box-left">
                <Iconify icon="streamline-ultimate:smiley-wrong-bold" />
              </div>
              <div className="dataprocessing-box-right">
                <div className="dataprocessing-box-right-title">
                  Inaccurate data leads to poor decisions
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dataprocessing-moltech-section"></div>
      </div>
      <div
        style={{ backgroundColor: "var(--themeColorLight)", padding: "4rem 0" }}
      >
        <div className="container">
          <div className="dataprocessing-moltech-section">
            <div className="dataprocessing-moltech-left" >
              <div className="dataprocessing-moltech-left-image-container">
                <Images imagePath={AppIcons.dataPreprocessingVector3} />
              </div>
              <div className="dataprocessing-box box-1">
                <div className="dataprocessing-box-left">
                  <Iconify icon="mage:robot-appreciate" />
                </div>
                <div className="dataprocessing-box-right">
                  <div className="dataprocessing-box-right-title">
                    Automate repetitive back-office tasks
                  </div>
                </div>
              </div>
              <div className="dataprocessing-box box-2">
                <div className="dataprocessing-box-left">
                  <Iconify icon="solar:shield-up-broken" />
                </div>
                <div className="dataprocessing-box-right">
                  <div className="dataprocessing-box-right-title">
                    Improve data quality and reliability
                  </div>
                </div>
              </div>
            </div>
            <div className="dataprocessing-moltech-right">
              <div className="dataprocessing-moltech-right-title">
                Moltech Solutions Inc.
              </div>
              <div className="dataprocessing-moltech-right-description">
                <p>
                  By precisely, safely, and at scale organizing, cleansing, and
                  simplifying your data—accurately—we help you turn data anarchy
                  into clarity.
                </p>
                <p>
                  Having more than fifteen years of expertise, we have worked in
                  many sectors to:
                </p>
                <p>
                  With{" "}
                  <span className="highlight">11+ years of experience</span>,
                  we&apos;ve worked across industries to:
                </p>
                <ul>
                  <li>Automate repetitive back-office tasks</li>
                  <li>Improve data quality and reliability</li>
                  <li>Enable faster reporting and smarter decisions</li>
                  <li>Save teams time, effort, and overhead costs</li>
                </ul>
                <p>
                  <span className="highlight">
                    When you partner with Moltech, your data stops being a
                    burden and starts driving growth.
                  </span>{" "}
                  Let us take care of the backend so you can focus on leading
                  from the front.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="datapreprocessing-service-details">
          <div className="datapreprocessing-service-details__features">
            <div className="key-service-title">
              Key Software Data Preprocessing Services
            </div>
            <div className="key-service-sub-title">
              We offer a range of software Data Preprocessing services tailored
              to your business needs.
            </div>
          </div>
          <div className="datapreprocessing-service-details__features__content">
            <div className="datapreprocessing-service-key-card-container">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`datapreprocessing-service-key-card ${
                    index === currentSlide ? "active" : ""
                  }`}
                  onClick={() => handleSlideClick(index)}
                >
                  {service.title}
                </div>
              ))}
            </div>

            <div className="description-slider-container">
              <div className="description-slider-wrapper">
                {services.map((service, index) => {
                  const position = index - currentSlide;
                  const absPos = Math.abs(position);

                  let scale = 0;
                  if (absPos === 0) scale = 1;
                  else if (absPos === 1) scale = 0.8;
                  else if (absPos === 2) scale = 0.6;

                  return (
                    <div
                      key={index}
                      className="description-slide"
                      style={{
                        transform: `scale(${scale}) translateX(${
                          position * 60
                        }%)`,
                        zIndex: 100 - absPos,
                        opacity: absPos > 2 ? 0 : 1,
                        pointerEvents: absPos === 0 ? "auto" : "none",
                      }}
                    >
                      <div className="description-icon">
                        <Iconify icon={service.icon} />
                      </div>
                      <div className="description-title">{service.title}</div>
                      <div className="description-content">
                        {service.content1}
                      </div>
                      <div className="description-content">
                        {service.content2}
                      </div>
                      <div className="description-content">
                        {service.content3}
                      </div>
                      <div className="description-content">
                        {service.content4}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <ProcessSection
        steps={steps}
        title="Our Approach for Data Processing Services"
        subTitle="Our Process: Phase Data Processing Framework"
      />
      <DataProcessingSlider />
      <FeaturedCaseStudy caseStudies={caseStudies} />
      <ServiceFAQ items={faqItems} title="Our Data Pre-processing Services" />
      <BranchFooter bgColor={"#fff"} />
    </div>
  );
};

export default DataProcessingPage;
