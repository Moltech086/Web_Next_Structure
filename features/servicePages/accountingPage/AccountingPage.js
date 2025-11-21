"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";
import Images from "@/components/image/Image";
import { AppIcons } from "@/data/appIcons";
import "./AccountingPage.scss";
import ProcessSection from "@/components/processsection/ProcessSection";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import CTASection from "@/components/ctaSection/CTASection";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import FeaturedCaseStudy from "@/features/caseStudyPage/featuredCaseStudy/FeaturedCaseStudy";
import "../Service.scss"

const AccountingPage = () => {
  const keyServicesItems = React.useMemo(() => [
    {
      id: 1,
      title: "Invoice & Billing Management",
      description:
        "Tired of tracking vendor bills or running after payments? We at Moltech Solutions Inc., simplify your invoicing and billing procedures to bring order back into them. Our staff follows up to save you from having to do so, as every invoice is handled quickly and precisely. We manage everything from tracking accounts receivable to arranging vendor payments and bank reconciliation.",
      description2:
        "We help you keep cash flow positive, link purchase orders with invoices (three-way matching), and apply sensible procedures for expense approvals. Whether you have ten customers or a hundred, we maintain flawless and error-free functioning of your billing cycle.",
      description3:
        "With our assistance, your financial operations become transparent, your vendors are paid on schedule, and your customers are professionally prodded, freeing you up to focus on growing your business. We serve as your financial partners, ensuring that every dollar counts, not just as bookkeepers.",
      icon: "stash:invoice-duotone",
      color: "#df9310",
      serviceImg: AppIcons.accinvoice,
    },
    {
      id: 2,
      title: "General Bookkeeping & Data Entry",
      description:
        "Bookkeeping need not be a burden—or a full-time employment. Reliable daily bookkeeping and data entry service provided by Moltech Solutions Inc. helps to maintain accurate, current financial records that are ready for whatever comes next. We classify spending, track every transaction, and balance your accounts so you may keep an eye on the broader picture.",
      description2:
        "Late evenings spent trying to track down that absent entry are no longer  Our meticulous staff makes sure every receipt fits and every figure adds up. We keep your books audit-ready and tax-season-ready, from simple journal entries to account classification.",
      description3:
        "Whether your business is established and looking to simplify your procedures or a startup just starting out, we are dedicated to providing bookkeeping that is simple, consistent, and stress-free. Allow Moltech to be your consistent hand in an environment of rapid corporate change.",
      icon: "ion:book-outline",
      color: "#18c485",
      serviceImg: AppIcons.accdataentry,
    },
    {
      id: 3,
      title: "Monthly Financial Operations",
      description:
        "Running your company month-to-month demands always seeing your finances clearly. Moltech Solutions Inc. precisely handles your monthly financial activities, so you never feel ignorant about your data. We guarantee prompt book closing, account reconciliation, and clear delivery of understandable financial statements.",
      description2:
        "We analyze numbers; we do not merely run them. By means of regular, monthly reporting, our professionals assist in identifying patterns, anomalies, and areas for development. You will always know where your money is going, what is working, and what requires work.",
      description3:
        "Not one of the delays. There will be no uncertainty involved. Just tidy accounts, provide clear insights, and establish a constant financial rhythm to enable confident future planning. Whether you're reporting to investors or simply want better nighttime sleep, our monthly financial operations guarantee your perpetually ready state.",
      icon: "ic:twotone-edit-calendar",
      color: "#047cba",
      serviceImg: AppIcons.accdataMonthly,
    },
    {
      id: 4,
      title: "Payroll and HR Support",
      description:
        "Payroll is about earning confidence rather than only writing checks. We streamline your payroll process, from handling year-end forms to creating payroll schedules to computing taxes and managing deductions.",
      description2:
        "Still, we do more than just paychecks. Especially for expanding teams, our staff assists with simple HR chores, including employee onboarding, leave monitoring, and labor law compliance. We make sure every payment is precise and timely in accordance with your particular company policies and payroll procedures.",
      description3:
        "Eliminate last-minute scrambling and penalties. Your crew stays pleased, your records remain compliant, and you remain focused on expanding your company when Moltech handles your payroll and HR basics.",
      icon: "fa-brands:amazon-pay",
      color: "#ff5b34",
      serviceImg: AppIcons.accdatapayrol,
    },
    {
      id: 5,
      title: "Cloud Accounting Setup",
      description:
        "Ready to send your books to the cloud? Using products like QuickBooks Online, Xero, and other top systems, Moltech Solutions Inc. helps you update your accounting system. We customize everything for your company, including a bespoke chart of accounts and automated processes that save you hours every week; our services go beyond just setting things up.",
      description2:
        "To interact with your accounting system, do you need payroll, inventory, or CRM tools?  We handle third-party integrations that consolidate all your data into a single, simplified view.  We now offer mobile access so you may monitor your accounts anywhere, at any time.",
      description3:
        "Best of all, we lead your team with truly helpful training—no jargon, just pragmatic knowledge-based guidance. Using Moltech, cloud accounting becomes strategic, safe, and straightforward.",
      icon: "ic:outline-cloud",
      color: "#8bdc64",
      serviceImg: AppIcons.accdatacloudaccounting,
    },
    {
      id: 6,
      title: "Reporting and Analytics",
      description:
        "Numbers convey a narrative if you know how to understand them. Via real- time dashboards, predictive analytics, and executive summary reports catered to your company's needs, Moltech Solutions Inc. helps you turn raw data into actionable insights.",
      description2:
        "We deliver on your timetable and automate regular financial reporting so you never have to wonder. Would you like real - time cash flow monitoring? Project the income for next quarter. Alternatively, monitor project, team, or product-based performance. We compile reports responding to the appropriate queries.",
      description3:
        "Our reporting transcends just figures at the surface. We provide you a real financial story to help you make decisions, see early red signals, and grab possibilities boldly. With Moltech, you get clarity rather than only data.",
      icon: "carbon:report-data",
      color: "#ffb718",
      serviceImg: AppIcons.accdatareporting,
    },
    {
      id: 7,
      title: "ERPNext Implementation",
      description:
        "Utilizing a system does not need to be difficult for anyone involved. From accounting and inventory to HR and CRM, Moltech Solutions Inc. simplifies ERPNext, an application set up to help you organize and manage your operations. We start by identifying your business goals, procedures, and areas of difficulty. We subsequently set up modules, customize features, and combine outside tools to produce a system that operates as you want. To ensure a seamless transition free of disturbance, our hands-on staff manages data migration, testing, and training.",
      description2:
        "Whether your upgrade is from spreadsheets or another platform, our ERPNext professionals make sure you maximize your investment.Implementation with us goes beyond simply software to include enabling better decisions, smarter automation, and scalable expansion.",
      icon: "simple-icons:erpnext",
      color: "#ff5b34",
      serviceImg: AppIcons.accdataerp,
    },
  ], []);

  const steps = [
    {
      title: "We Start by Listening",
      icon: "hugeicons:ear",
      description:
        "We take time to understand your business, industry, and pain points before recommending any solution. Every engagement begins with deep discovery.",
    },
    {
      title: "Tailored Solutions, Not Templates",
      icon: "carbon:template",
      description:
        "You’ll get a customized service proposal with clear deliverables, timelines, and outcomes—built around your unique needs.",
    },
    {
      title: "Risk-Free Pilot Option",
      icon: "healthicons:risk-analysis-outline",
      description:
        "Experience our quality firsthand with a trial run or limited-scope project before making long-term commitments.",
    },
    {
      title: "Smooth, Transparent Onboarding",
      icon: "fluent-mdl2:onboarding",
      description:
        "From secure data handover to platform setup, our onboarding process is structured, secure, and stress-free.",
    },
    {
      title: "Proactive Communication",
      icon: "fluent:communication-person-20-regular",
      description:
        "With regular check-ins, real-time dashboards, and open channels, you're always informed—never left guessing.",
    },
    {
      title: "Continuous Improvement",
      icon: "carbon:continuous-deployment",
      description:
        "We constantly optimize workflows, suggest automation, and fine-tune our service to bring even more value.",
    },
  ];

  const accordionData = [
    {
      title: "Time Constraints",
      image: AppIcons.accountschallenge1,
      description:
        "Your spending too much time on compliance and bookkeeping is the problem. Our Solution: We free up 15 to 25 hours a week so you can concentrate on expanding your company rather than reconciling spreadsheets.",
    },
    {
      title: "High In-House Costs",
      image: AppIcons.accountschallenge2,
      description:
        "Full-time employees are costly for routine, simple chores. Tension: Expert outsourcing will help you cut costs up to 60% without compromising control or quality.",
    },
    {
      title: "Compliance Risks",
      image: AppIcons.accountschallenge3,
      description:
        "Fear of audit triggers, missed filings, or IRS notices is the problem. We stay updated on laws and proactively address compliance issues, which spares you from incurring expensive fines.",
    },
    {
      title: "Scalability Bottlenecks",
      image: AppIcons.accountschallenge4,
      description:
        "The issue is that your current accounting system cannot scale to accommodate your growth. Our services fit your company and easily manage increasing complexity and more transactions as you grow.",
    },
    {
      title: "Lack of Strategic Insights",
      image: AppIcons.accountschallenge5,
      description:
        "Though you have financial data, you lack clear understanding. Without a CFO, get executive-level dashboards, reporting, and guidance to make better decisions.",
    },
    {
      title: "Outdated Technology",
      image: AppIcons.accountschallenge6,
      description:
        "Right now, your accounting tools are disconnected, clumsy, or antiquated. Our Solution: We move you to cloud-based systems and set up automation to save up to 60% of errors by means of time savings.",
    },
  ];

  const faqItems = [
    {
      title: "Who should use professional accounting services?",
      content: `<p>Our accounting services are ideal for small to mid-sized businesses, startups, and growing enterprises looking to streamline their finances, maintain compliance, and gain financial clarity. Whether you’re overwhelmed with bookkeeping, need monthly financial reporting, or want professional support to manage your business growth, our services can help.</p>`,
    },
    {
      title: "Why do I need accounting services for my business?",
      content: `<p>Accurate accounting is crucial for financial compliance, tax preparation, cash flow management, and strategic planning. Without professional accounting, businesses risk costly errors, missed tax deadlines, and poor financial decisions that can hurt profitability and growth.</p>`,
    },
    {
      title: "What is the difference between bookkeeping and accounting?",
      content: `<p>Bookkeeping focuses on recording daily financial transactions, while accounting involves interpreting, analyzing, and reporting that data to help you understand your business’s financial health. Accounting services often include bookkeeping but also provide financial statements, budgeting, and tax advice.</p>`,
    },
    {
      title:
        "Why do I need professional accounting services if I already use accounting software?",
      content: `<p>While accounting software helps with data entry, professional accounting services ensure your books are accurate and compliant and provide insights to help you make better business decisions. We help interpret your numbers, prepare for taxes, and catch costly errors that software alone might miss.</p>`,
    },
    {
      title:
        "Is it expensive to hire accounting services for small businesses?",
      content: `<p>Many small businesses worry about the cost of accounting services, but the reality is that it saves you time, reduces tax liabilities, and prevents financial mistakes that could cost far more. We offer scalable plans to match your business size and budget.</p>`,
    },
    {
      title:
        "Will I lose control over my business finances if I outsource accounting services?",
      content: `<p>No, you remain in full control. Our accounting services act as an extension of your business, providing you with organized financial data and clear reports so you can make confident decisions.</p>`,
    },
    {
      title: "Are your accounting services secure?",
      content: `<p>Yes. We prioritize the confidentiality and security of your financial data, using encrypted systems and industry best practices to protect your information.</p>`,
    },
    {
      title: "Do you offer customized accounting solutions for my business?",
      content: `<p>Yes, we understand that every business is unique. Common pain points include:</p><ul><li>Generic software that fails to meet specific needs</li><li>Large accounting firms that often fail to provide personalized support</li></ul><p>Our tailored accounting services include customized bookkeeping, payroll, and financial reporting solutions designed to meet your business’s specific goals and challenges.</p>`,
    },
    {
      title: "Can you integrate with my existing business systems?",
      content: `<p>Yes, we can integrate with most business systems, including POS systems, e-commerce platforms, CRM software, and banking systems. Integration eliminates duplicate data entry and ensures accurate, up-to-date financial information.</p>`,
    },
    {
      title: "How much do accounting services cost?",
      content: `<p>Accounting service fees vary based on business size, complexity, and services required. We offer transparent pricing with monthly packages starting at competitive rates. Most clients find our services pay for themselves through tax savings and improved efficiency.</p>`,
    },
  ];

  const caseStudies = [
    {
      // category: "Accounting & Financial Services",
      title: "Pemmasani LLC Website",
      image: AppIcons.pemmasani1,
      description:
        "We developed a professional website for Pemmasani LLC to showcase their accounting and audit services across multiple locations, enhancing their digital presence and making it easy for clients to learn about services and connect with the right office through clear CTAs and contact forms.",
      location: "USA",
      industry: "Accounting & Financial Services",
      stats: [
        {
          label: "Key Outcome",
          value: "Lead generation",
        },
      ],
      projectType:
        "Website Design & Development , WordPress CMS , Lead Capture , Multi-location Support ",
      technologies: [
        {
          name: "Microsoft Azure Server",
          icon: "logos:microsoft-azure",
          description:
            "Cloud-based web server used for hosting the website and services.",
        },
        {
          name: "MySQL",
          icon: "logos:mysql",
          description:
            "Relational database used to store website content, user data, and form submissions.",
        },
        {
          name: "PHP",
          icon: "logos:php",
          description:
            "Server-side scripting language used for backend logic and WordPress development.",
        },
        {
          name: "WordPress",
          icon: "logos:wordpress-icon",
          description:
            "CMS platform for building and managing content-rich websites.",
        },
        {
          name: "MySQL Workbench",
          icon: "logos:mysql",
          description:
            "Visual tool for database design, modeling, and query building.",
        },
        {
          name: "HTML",
          icon: "logos:html-5",
          description: "Markup language for structuring web content.",
        },
        {
          name: "CSS",
          icon: "logos:css-3",
          description:
            "Stylesheet language for designing the layout and look of the website.",
        },
        {
          name: "Bootstrap",
          icon: "logos:bootstrap",
          description: "Framework for responsive and mobile-first web design.",
        },
        {
          name: "Custom WordPress Theme",
          icon: "mdi:theme-light-dark",
          description: "Tailored WordPress theme for unique design and layout.",
        },
        {
          name: "Cookies Consent Plugin",
          icon: "mdi:cookie-outline",
          description: "Ensures GDPR-compliant cookie usage and user consent.",
        },
        {
          name: "Advanced Custom Fields",
          icon: "mdi:code-tags",
          description:
            "Custom field builder for WordPress for structured content editing.",
        },
        {
          name: "Contact Form 7",
          icon: "mdi:form-select",
          description:
            "WordPress plugin for creating and managing contact forms.",
        },
      ],
      link: "accounting-firm-website-design-case-study",
    },

    {
      // category: "Technology",
      title: "BrightLogix Website Redesign",
      image: AppIcons.Brightlogix1,
      description:
        "We collaborated with BrightLogix to redesign their website, reflecting their leadership in benefits software and development services. The updated content structure, improved mobile experience, and search engine optimization positioned BrightLogix as a trusted technology partner to their B2B clientele.",
      location: "USA",
      industry: "Technology",
      stats: [
        {
          label: "Project Focus",
          value: "SEO optimization",
        },
        {
          label: "Key Outcomes",
          value: "Modern experience",
        },
      ],
      projectType: "Web Design , Business Consulting",
      technologies: [
        {
          name: ".NET Core",
          icon: "devicon:dotnetcore",
          description:
            "Secure and scalable web development with Microsoft’s .NET Core.",
        },
        {
          name: "API Development",
          icon: "material-symbols:api",
          description:
            "Custom-built APIs for seamless data integration and scalability.",
        },
        {
          name: "Next.js",
          icon: "logos:nextjs-icon",
          description:
            "React-based framework supporting SEO and server-side rendering.",
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
          description:
            "Stylesheets crafted for beautiful and responsive design.",
        },
        {
          name: "Bootstrap",
          icon: "logos:bootstrap",
          description:
            "Component framework for rapid and consistent UI development.",
        },
      ],
      link: "technology-consulting-website-design-case-study",
    },
    {
      // category: "Education Technology",
      title: "E-Certificate – Digital Certificate Automation",
      image: AppIcons.ecertificate1,
      description:
        "We developed a web-based E-Certificate generation and management system for partner schools under Flying Cape Technologies, enabling them to create, manage, and distribute certificates online. Schools can upload course completions, auto-generate branded certificates with QR codes, and distribute them instantly to students via email, providing a modern learning completion experience.",
      location: "Singapore & Global",
      industry: "Education Technology",
      stats: [
        {
          label: "Key Outcome",
          value: "Automated delivery of 1000+ branded e-certificates per event",
        },
      ],
      projectType:
        "Custom Web Platform , PDF Generation , QR Code Integration  , Bulk Email Automation",
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
          name: "HTML5",
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
          description:
            "Used for designing and customizing certificate visuals.",
        },
      ],
      link: "online-e-certificate-solution-case-study",
    },
    {
      // category: "Non-Profit",
      title: "Boys’ Town – Donation Platform & Admin Panel",
      image: AppIcons.BoysTown1,
      description:
        "We created a user-friendly donation page to encourage seamless donor contributions to Boys’ Town, supporting their mission of serving children and youth in need. Additionally, we built an admin panel for the Boys’ Town team to manage donations, donor accounts, notifications, and partner links efficiently.",
      location: "Singapore",
      industry: "Non-Profit, Social Services",
      stats: [
        {
          label: "Key Outcome",
          value: "Increased donor engagement and reduced admin overhead",
        },
      ],
      projectType:
        "Donation Page Development ,  Admin Dashboard ,  Payment Gateway Integration ,  Salesforce & SingPass API Integration  , Webhook & Notifications",
      technologies: [
        {
          name: ".NET Core API",
          icon: "logos:dotnet",
          description:
            "Powers secure transaction processing and backend logic.",
        },
        {
          name: "Next.js",
          icon: "logos:nextjs-icon",
          description:
            "Framework for building fast, server-side rendered web portals.",
        },
        {
          name: "React.js",
          icon: "logos:react",
          description:
            "Used for building dynamic admin interfaces and reusable UI components.",
        },
        {
          name: "MS SQL Server",
          icon: "devicon:microsoftsqlserver-wordmark",
          description:
            "Robust relational database for donor data and transaction storage.",
        },
        {
          name: "HTML",
          icon: "logos:html-5",
          description: "Markup language for structuring web pages and layouts.",
        },
        {
          name: "CSS",
          icon: "logos:css-3",
          description:
            "Stylesheet language for responsive and modern web design.",
        },
        {
          name: "Bootstrap",
          icon: "logos:bootstrap",
          description:
            "CSS framework used for building responsive, mobile-first UIs.",
        },
        {
          name: "JavaScript",
          icon: "logos:javascript",
          description:
            "Core scripting language enabling interactivity on the web.",
        },
        {
          name: "TypeScript",
          icon: "logos:typescript-icon",
          description:
            "Superset of JavaScript providing type safety and scalable code structure.",
        },
        {
          name: "jQuery",
          icon: "skill-icons:jquery",
          description:
            "JavaScript library for simplified DOM manipulation and Ajax calls.",
        },
        {
          name: "AWS EC2",
          icon: "logos:aws-ec2",
          description:
            "Compute infrastructure hosting APIs and web portals using IIS.",
        },
        {
          name: "IIS (API & Web Hosting)",
          icon: "mdi:server",
          description:
            "Windows web server used for deploying .NET Core applications.",
        },
        {
          name: "PayPal",
          icon: "logos:paypal",
          description:
            "Integrated payment gateway for secure online donations.",
        },
        {
          name: "OxPay",
          icon: "arcticons:foxpay",
          description:
            "Supports regional payment processing and card services.",
        },
        {
          name: "Salesforce API",
          icon: "logos:salesforce",
          description:
            "CRM integration to manage donor data and engagement workflows.",
        },
        {
          name: "SingPass API",
          icon: "arcticons:singpass",
          description:
            "National digital ID system used for secure donor identity verification.",
        },
        {
          name: "Webhook Scheduler",
          icon: "material-symbols:webhook-rounded",
          description:
            "Automates push notifications and integration callbacks using scheduled triggers.",
        },
        {
          name: "Distributed & Repository Architecture",
          icon: "mdi:source-repository-multiple",
          description:
            "Clean, maintainable codebase with modular services and scalable logic layers.",
        },
      ],
      link: "donation-and-fundraising-management-platform-with-volunteer-and-event-coordination-case-study",
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
          description:
            "Structured data management and transactional operations.",
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
          description:
            "Seamless integration with logistics and finance systems.",
        },
      ],
      link: "legacy-system-modernization-platform-case-study",
    },
  ];

  const [selectedService, setSelectedService] = useState(keyServicesItems[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    let interval;

    if (!userInteractedRef.current) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % keyServicesItems.length;
          setSelectedService(keyServicesItems[nextIndex]);
          return nextIndex;
        });
      }, 1500);
    }

    return () => clearInterval(interval);
  }, [activeIndex, keyServicesItems]); // Depend on activeIndex and keyServicesItems to keep updating until stopped

  useEffect(() => {
    const stopAutoScroll = () => {
      userInteractedRef.current = true;
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("click", stopAutoScroll);
      window.addEventListener("keydown", stopAutoScroll);
      window.addEventListener("touchstart", stopAutoScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("click", stopAutoScroll);
        window.removeEventListener("keydown", stopAutoScroll);
        window.removeEventListener("touchstart", stopAutoScroll);
      }
    };
  }, []);

  const handleCardClick = (item, index) => {
    userInteractedRef.current = true; // Immediately flag interaction
    setSelectedService(item);
    setActiveIndex(index);
  };

  const toggleAccordion = (index) => {
    setActiveAccordionIndex(index);
  };

  return (
    <div className="accounting-service-page">
      <div className="services-herosection-details">
        <div className="container">
          <div className="row hero-main-sec">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div
                className="service-title-left"
              >
                {/* <span className="service-sub-title">Custom Software Development</span> */}
                <h1 className="service-title">
                  Empowering Your Business with Seamless Accounting Support
                </h1>
                <p>
                  <span className="highlight">Moltech Solutions Inc.</span>{" "}
                  delivers comprehensive accounting outsourcing services that
                  eliminate your administrative headaches while cutting costs by
                  up to 60%
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
                <Images
                  imagePath={AppIcons.accountingHeroSection}
                  alt="accounting"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-features">
        <div className="container">
          <div className="row mt-3">
            {/* Left Side with Clipped Image and Badges */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div
                className="service-features-left"
              >
                <div className="service-image-container">
                  <Images
                    imagePath={AppIcons.accountingHeroSection2}
                    altText="Custom Software Development"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div
                className="service-features-right"
              >
                <p className="description">
                  Outsourcing your accounting involves more than just
                  <span className="highlight"> cost savings.</span> Every hour
                  spent on bookkeeping, invoicing, chasing, or account
                  reconciliation takes time away from developing your company.
                  Doing things in-house sometimes means overpaying for{" "}
                  <span className="highlight">low-value chores</span> and
                  running the risk of{" "}
                  <span className="highlight">expensive mistakes.</span>
                </p>
                <p className="description">
                  For a start-up, hiring the proper accounting personnel is also
                  <span className="highlight"> costly</span> and{" "}
                  <span className="highlight">difficult.</span> Building a
                  competent financial staff from scratch takes time, effort, and
                  overhead most firms simply cannot afford; qualified
                  specialists are in high demand.
                </p>
                <p className="description">
                  Moltech Solutions Inc. distinguishes itself in that regard.
                  Our knowledgeable, tech-enabled accounting solutions provide:
                </p>
                <ul>
                  <li>
                    <span>Cost Efficiency:</span> No need to hire full-time
                    staff or invest in expensive tools.
                  </li>
                  <li>
                    <span>Speed & Accuracy:</span> 3x faster processing with
                    99.8% accuracy.
                  </li>
                  <li>
                    <span>Scalability:</span> Our services grow as your business
                    grows.
                  </li>
                  <li>
                    <span>Compliance & Peace of Mind:</span> Avoid tax
                    penalties, stay audit-ready, and unlock savings.
                  </li>
                  <li>
                    <span>Focus:</span> Free up your time to build and scale
                    your business.
                  </li>
                </ul>
                <p className="description">
                  Moltech Solutions Inc. provides a skilled financial team
                  behind the scenes instead of the expense and work involved in
                  hiring. Accounting transforms from a burden into a strategic
                  benefit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="key-accounting">
        <div className="container ">
          <div className="accounting-keyservices-section">
            <h2 className="accounting-keyservices-section-title">
              Key Accounting Services
            </h2>
            <h5 className="headline-title">
              We offer a range of accounting services tailored to your business
              needs.
            </h5>

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="accounting-keyservices-section-content">
                  <div className="accounting-keyservices-section-card-container">
                    {keyServicesItems.map((item, index) => (
                      <div
                        className={`accounting-keyservices-section-card ${activeIndex === index ? "selected" : ""
                          }`}
                        key={index}
                        style={{ borderTop: `5px solid ${item.color}` }}
                        onClick={() => handleCardClick(item, index)}
                      >
                        <div
                          className="accounting-keyservices-section-card-icon"
                          style={{
                            backgroundColor: item.color,
                          }}
                        >
                          <Iconify icon={item.icon} />
                        </div>
                        <div className="accounting-keyservices-section-card-title">
                          {item.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div
                  className="accounting-keyservices-section-card no-scale"
                  style={{
                    borderTop: `5px solid ${selectedService.color}`,
                  }}
                >
                  {selectedService ? (
                    <>
                      <div
                        className="accounting-keyservices-section-card-icon"
                        style={{ backgroundColor: selectedService.color }}
                      >
                        <Iconify icon={selectedService.icon} />
                      </div>
                      <div className="accounting-keyservices-section-card-title">
                        {selectedService.title}
                      </div>
                      <div className="accounting-keyservices-section-card-content my-3">
                        {selectedService.description}
                      </div>
                      <div className="accounting-keyservices-section-card-content mb-3">
                        {selectedService.description2}
                      </div>
                      <div className="accounting-keyservices-section-card-content mb-3">
                        {selectedService.description3}
                      </div>
                      <div className="accounting-key-service-image">
                        <Images
                          imagePath={selectedService.serviceImg}
                          altText="accounting key service"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="accounting-keyservices-section-card-icon">
                        <Iconify icon="ion:book-outline" />
                      </div>
                      <div className="accounting-keyservices-section-card-title">
                        Invoice & Billing Management
                      </div>
                      <div className="accounting-keyservices-section-card-content mb-2">
                        Tired of tracking vendor bills or running after
                        payments? We at Moltech Solutions Inc. simplify your
                        invoicing and billing procedures to bring order back
                        into them. Our staff follows up to save you from having
                        to do so, as every invoice is handled quickly and
                        precisely. We manage everything from tracking accounts
                        receivable to arranging vendor payments and bank
                        reconciliation.
                      </div>
                      <div className="accounting-keyservices-section-card-content mb-2">
                        We help you keep cash flow positive, link purchase
                        orders with invoices (three-way matching), and apply
                        sensible procedures for expense approvals. Whether you
                        have ten customers or a hundred, we maintain flawless
                        and error-free functioning of your billing cycle.
                      </div>
                      <div className="accounting-keyservices-section-card-content mb-2">
                        With our assistance, your financial operations become
                        transparent, your vendors are paid on schedule, and your
                        customers are professionally prodded, freeing you up to
                        focus on growing your business. We serve as your
                        financial partners, ensuring that every dollar counts,
                        not just as bookkeepers.
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <ProcessSection
        steps={steps}
        title="Our Outsourcing Process: Built to Win Your Trust"
        subTitle="At Moltech Solutions Inc., we don't just deliver accounting tasks—we build lasting partnerships. Here's how we earn your trust from day one:"
        bgColor="#fafafa"
      />
      <div className="container">
        <div className="testing-problem-details__features">
          <div className="headline-title">
            We address key client issues while doubling the value we bring to
            your business.
          </div>
          <div className="description">
            At Moltech Solutions Inc., we understand the practical difficulties
            that companies face when they manage their accounting in-house. Our
            outsourced accounting services address these issues and release
            potential like this:
          </div>

          <div className="testing-problem-details__features__content">
            {/* Accordion Left */}
            <div className="left-content">
              {accordionData.map((item, index) => (
                <div
                  className={`accordion-item ${activeAccordionIndex === index ? "active" : ""
                    }`}
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "25px" }}
                  >
                    <div className="accordion-number">0{index + 1}</div>
                    <div className="accordion-content">
                      <div className="accordion-title">{item.title}</div>
                    </div>
                  </div>
                  {activeAccordionIndex === index ? (
                    <div className="accordion-icon">
                      <Iconify icon="entypo:arrow-right" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="right-content">
              {/* Moved Description Here */}
              <div className="right-title">
                {accordionData[activeAccordionIndex]?.title}
              </div>
              <div className="right-content__description">
                {accordionData[activeAccordionIndex]?.description}
              </div>
              <div className="right-content__image">
                <Images
                  imagePath={accordionData[activeAccordionIndex]?.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedCaseStudy caseStudies={caseStudies} />
      <ServiceFAQ items={faqItems} title="Our Accounting Services" />
      <BranchFooter />
    </div>
  );
};

export default AccountingPage;
