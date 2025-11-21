"use client";
import React, { useState } from "react";
import HeroSection from "./components/herosection/WebHeroSection";
import ServicesGrid from "./components/servicegrid/ServiceGrid";
import ServicePage from "./components/servicepage/ServicePage";
import { getServiceDetails } from "./components/servicepage/data/serviceDetails";
import CTASection from "../../../components/ctaSection/CTASection";
import WhyChooseUsSection from "./components/whychooseus/WhyChooseUs";
import ChallengesSection from "./components/challengessection/ChallengesSection";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import ProcessSection from "@/components/processsection/ProcessSection";
import FeaturedCaseStudy from "@/features/caseStudyPage/featuredCaseStudy/FeaturedCaseStudy";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import { AppIcons } from "@/data/appIcons";
import "./WebAppDevPage.scss";

const WebAppDevPage = () => {
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const steps = [
    {
      icon: "fluent:person-feedback-24-regular", // listening & understanding
      title: "We sit, listen, and understand.",
      description:
        "We begin by immersing ourselves in your data landscape. Our team collaborates with your stakeholders to map your current processes, uncover inefficiencies, and understand how data flows within your business.",
    },
    {
      icon: "icon-park-outline:graphic-design", // vision illustration/design
      title: "We illustrate the vision",
      description:
        'Once we are in line, we sketch the layout, basic elements, and user flows of your app. Whatever let&apos;s you "see" it early—wireframes, preliminary screens, or even a simple prototype',
    },
    {
      icon: "ph:stack-bold", // blocks/iterations
      title: "We create it in blocks and iteration, not all at once.",
      description:
        "We don't vanish for months, then reappear with surprise. We create your software in little, tested chunks so you remain in control and observe improvement at every turn.",
    },
    {
      icon: "mdi:bug-check-outline", // testing / QA
      title: "We break it (before users do).",
      description:
        "Our staff checks everything like actual users—clicking, navigating, submitting, and even trying to break it. Why? Since bugs shouldn't be a consumer issue.",
    },
    {
      icon: "mdi:rocket-launch-outline", // launch
      title: "We launch not in panic",
      description:
        "There is no last-minute scrambling. We address configuration, hosting, deployment, and support. Your app stresses-free, securely, and runs without problems.",
    },
    {
      icon: "material-symbols:handshake-outline", // support / partnership
      title: "We Stay With You (For Real)",
      description:
        "Launch starts rather than ends. We keep improving by fixing the small problems and tracking performance. Like you, we are here long-term.",
    },
  ];

  const caseStudies = [
    {
      title: "MWI Eloquence B2B Portal",
      image: AppIcons.MWIEloquence2,
      description:
        "MWI Eloquence connects jewelry distributors with retailers through a comprehensive B2B portal. It enables users to browse product catalogs by attributes, manage role-based pricing, generate PDFs, and handle orders efficiently. Designed to streamline transactions and enhance user experience, the platform supports distributors and jewelers with consistent updates and maintenance.",
      location: "USA",
      industry: "Fine Jewelry & Diamond Manufacturing",
      stats: [
        {
          label: "Project Focus",
          value: "Platform stability",
        },
        {
          label: "Key Outcomes",
          value: "User experience",
        },
      ],
      projectType: "Web Development",
      technologies: [
        {
          name: "Microsoft .NET",
          icon: "devicon:dot-net-wordmark",
          description: "Enterprise-grade backend framework from Microsoft.",
        },
        {
          name: "ASP.NET",
          icon: "skill-icons:dotnet",
          description: "Web application framework for robust, secure apps.",
        },
        {
          name: "AJAX Toolkit",
          icon: "mdi:cached",
          description: "Asynchronous UI interactions and component updates.",
        },
        {
          name: "JavaScript",
          icon: "logos:javascript",
          description: "Dynamic frontend scripting for interactive elements.",
        },
        {
          name: "MS SQL Database",
          icon: "devicon:azuresqldatabase",
          description: "Reliable and scalable data storage engine.",
        },
        {
          name: "IIS Hosting",
          icon: "mdi:server",
          description: "Secure and high-performance Microsoft web hosting.",
        },
      ],
      link: "jewelry-ecommerce-case-study",
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
      // category: "Fashion & Membership",
      title: "Singapore Fashion Council Portal",
      image: AppIcons.SFC1,
      description:
        "We built a membership and event management platform for the Singapore Fashion Council, allowing members to sign up, book courses, and manage their profiles, while enabling SFC to handle memberships, events, and financial workflows efficiently through a robust admin portal.",
      location: "Singapore ",
      industry: "Fashion & Membership Association",
      stats: [
        {
          label: "Project Focus",
          value: "Membership system",
        },
        {
          label: "Key Outcomes",
          value: "Financial automation",
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
          description:
            "Enables secure online payments via integrated gateways.",
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
      // category: "Education",
      title: "SISTC Conference Platform",
      image: AppIcons.ScienceCenter1,
      description:
        "We developed a feature-rich conference management system for SISTC to manage online event registrations, school and individual bookings, automated discounts, and certificate downloads, while providing the admin team with comprehensive event creation, booking, and voucher management capabilities..",
      location: "Singapore",
      industry: "Education (Schools)",
      stats: [
        {
          label: "Project Focus",
          value: "Booking system",
        },
        {
          label: "Key Outcomes",
          value: "Admin automation",
        },
      ],
      projectType:
        "Conference Portal ,Event Booking System , Discount & Voucher System , Certificate Delivery , Admin Reporting Dashboard",
      technologies: [
        {
          name: ".NET Core API",
          icon: "logos:dotnet",
          description:
            "Backend services managing events, users, and discounts.",
        },
        {
          name: "Next.js",
          icon: "logos:nextjs-icon",
          description:
            "Framework used to build the server-rendered public-facing web portal.",
        },
        {
          name: "React.js",
          icon: "logos:react",
          description:
            "Used to build the dynamic and responsive admin dashboard.",
        },
        {
          name: "MS SQL Server",
          icon: "devicon:microsoftsqlserver-wordmark",
          description:
            "Central data store for users, events, bookings, and vouchers.",
        },
        {
          name: "HTML",
          icon: "logos:html-5",
          description:
            "Markup language used for structuring and presenting content on the web.",
        },
        {
          name: "CSS",
          icon: "logos:css-3",
          description:
            "Stylesheet language used for responsive design and UI styling.",
        },
        {
          name: "Bootstrap",
          icon: "logos:bootstrap",
          description:
            "Frontend framework for mobile-first UI development and components.",
        },
        {
          name: "JavaScript",
          icon: "logos:javascript",
          description:
            "Main scripting language for adding interactivity in frontend apps.",
        },
        {
          name: "TypeScript",
          icon: "logos:typescript-icon",
          description:
            "Typed superset of JavaScript used for scalable and robust development.",
        },
        {
          name: "jQuery",
          icon: "skill-icons:jquery",
          description:
            "JavaScript library for DOM manipulation and legacy browser support.",
        },
        {
          name: "AWS Amplify",
          icon: "logos:aws-amplify",
          description:
            "Cloud service for hosting the frontend with CI/CD pipelines.",
        },
        {
          name: "AWS EC2",
          icon: "logos:aws-ec2",
          description: "Cloud-based virtual servers for hosting backend APIs.",
        },
        {
          name: "IIS (API Hosting)",
          icon: "mdi:server",
          description:
            "Windows-based web server used for hosting .NET Core APIs.",
        },
        {
          name: "Role-Based Access Control",
          icon: "mdi:account-lock-outline",
          description:
            "Secure user permissions and access level enforcement system.",
        },
        {
          name: "Payment Gateway Integration",
          icon: "mdi:credit-card-outline",
          description:
            "Integrated with gateways to support secure online payments.",
        },
        {
          name: "Email Scheduler",
          icon: "arcticons:smsscheduler",
          description:
            "Automated email notifications triggered by scheduled events.",
        },
        {
          name: "Distributed & Repository Architecture",
          icon: "mdi:source-repository-multiple",
          description:
            "Clean and scalable backend structure using best coding practices.",
        },
      ],
      link: "online-conference-management-platform-case-study",
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
      // category: "Visa & Immigration Consulting",
      title: "Quick Visa & Immigration Inc",
      image: AppIcons.QuickVisa1,
      description:
        "We developed a comprehensive immigration services platform for Quick Visa & Immigration Inc. to enhance how clients apply for and track their Canadian immigration processes. The platform enables clients to explore visa options, securely upload documents, and monitor application progress while allowing the Quick Visa team to manage profiles, communicate efficiently, and deliver end-to-end support with accuracy and speed.",
      location: "Canada",
      industry: "Visa & Immigration Consulting",
      stats: [],
      projectType:
        "Website Development,Client Portal, SEO Optimization ,Automation",
      technologies: [
        {
          name: "Next.js",
          icon: "logos:nextjs-icon",
          description:
            "Frontend framework for high-performance and SEO-friendly pages.",
        },
        {
          name: "Node.js",
          icon: "logos:nodejs-icon",
          description: "Used for backend and API development.",
        },
        {
          name: "Bootstrap",
          icon: "logos:bootstrap",
          description: "Responsive UI design and layout components.",
        },
        {
          name: "JavaScript",
          icon: "logos:javascript",
          description:
            "Programming language for dynamic and interactive web elements.",
        },
        {
          name: "HTML",
          icon: "mdi:language-html5",
          description: "Defines the structure and content of web pages.",
        },
        {
          name: "CSS",
          icon: "mdi:language-css3",
          description: "Used for styling and layout of web applications.",
        },
      ],
      link: "immigration-services-platform-case-study",
    },
  ];

  const faqItems = [
    {
      title: "What are the services for developing web applications?",
      content: `<p>Web application services involve designing, developing, and maintaining web-based software that runs on browsers, helping businesses streamline operations, enhance customer engagement, and automate workflows. Our services for developing web applications include UI/UX design, backend and frontend development, API integration, and deployment.</p>`,
    },
    {
      title:
        "What are Web Application Services, and how can they benefit my business?",
      content: `<p>Web application services involve the design, development, and maintenance of custom web-based applications tailored to your business needs. These services help businesses streamline operations, enhance user experiences, and boost online presence. Whether you need a customer portal, e-commerce platform, or internal management tool, our services for developing web applications deliver scalable, secure, and user-friendly solutions.</p>`,
    },
    {
      title: "Who can choose Web Application Services?",
      content: `<p>Our web application services are particularly well-suited for the following groups:</p><ul><li>Small businesses looking to digitize operations or improve customer engagement</li><li>Startups needing cost-effective, scalable web apps to launch their ideas</li><li>Enterprises requiring complex and secure applications for internal processes or customer-facing platforms</li><li>E-commerce businesses seeking robust online stores with seamless user experiences</li><li>Nonprofits aiming to create accessible platforms for outreach or donations</li></ul><p>If your business needs a tailored digital solution to solve operational challenges or engage users, our services are for you.</p>`,
    },
    {
      title: "Who should choose web application development services?",
      content: `<p>Our web application services are ideal for businesses, startups, entrepreneurs, and organizations seeking to build scalable, secure, and custom online solutions. Whether you need a customer portal, internal tool, SaaS product, or e-commerce platform, our services fit those aiming to streamline operations, improve customer engagement, or launch new digital products.</p>`,
    },
    {
      title:
        "Why should I invest in a custom web application instead of off-the-shelf software?",
      content: `<p>Custom web applications are designed to fit your unique business needs, providing greater flexibility, scalability, and integration with your existing systems. Unlike generic solutions, custom apps evolve with your business, improve efficiency, and offer a competitive edge.</p>`,
    },
    {
      title: "What is the difference between a website and a web application?",
      content: `<p>A website typically provides static information and basic interaction, while a web application is interactive, dynamic, and allows users to perform specific tasks, such as managing data, making purchases, or collaborating online. Web applications are essential for businesses needing advanced functionality and user engagement.</p>`,
    },
    {
      title: "How long does it take to develop a web application?",
      content: `<p>Development timelines vary based on project complexity, features, and integration requirements. Simple web apps may take a few weeks, while complex solutions can require several months. We provide detailed timelines after understanding your project goals and requirements.</p>`,
    },
    {
      title:
        "What are the most common challenges businesses face with web applications?",
      content: `<p>Common pain points include:</p><ul><li>Difficulty integrating with existing systems</li><li>Security vulnerabilities</li><li>Poor user experience or slow performance</li><li>High maintenance costs</li></ul><p>Our team addresses these issues with best practices in security, UX/UI design, and ongoing support.</p>`,
    },
    {
      title: "Do you provide ongoing maintenance and support?",
      content: `<p>Yes, we offer comprehensive web application maintenance services, including bug fixes, software updates, speed optimization, and database management, ensuring your app remains secure and high-performing.</p>`,
    },
    {
      title: "How can I begin using your web application services?",
      content: `<p>Contact us for a free consultation. We’ll discuss your goals, assess your requirements, and provide a tailored proposal to kickstart your project.</p>`,
    },
    {
      title:
        "Why should I invest in custom web applications instead of using off-the-shelf software?",
      content: `<p>Off-the-shelf software often forces you to adapt your processes to the software’s limitations, while custom web applications fit your exact workflows and business goals, ensuring better scalability, performance, and security.</p>`,
    },
    {
      title: "Is building a custom web application expensive?",
      content: `<p>The cost of a custom web application depends on the project’s scope and features. While it requires investment, it often reduces operational costs, improves efficiency, and creates new revenue channels, offering significant ROI.</p>`,
    },
    {
      title: "Will my web application be mobile-friendly?",
      content: `<p>Yes. Our web application services ensure your application is responsive, working seamlessly on desktops, tablets, and mobile devices to reach a broader audience and improve user experience.</p>`,
    },
    {
      title: "Can your web applications integrate with existing systems?",
      content: `<p>Yes, our web applications are designed to integrate seamlessly with existing systems like CRMs, ERPs, payment gateways, and third-party APIs. We ensure compatibility to enhance your workflow without disruptions.</p>`,
    },
    {
      title: "How do you ensure the security of my web application?",
      content: `<p>We follow best practices, including:</p><ul><li>Data Encryption: Protecting sensitive information with SSL/TLS</li><li>Secure Coding: Preventing vulnerabilities like SQL injection and XSS</li><li>Regular Audits: Conducting security assessments to identify and fix risks</li><li>Compliance: Adhering to regulations like GDPR, HIPAA, or PCI-DSS as needed</li></ul>`,
    },
    {
      title: "Can I update or add features to my web application later?",
      content: `<p>Yes, our web applications are built with modular architectures, making it easy to add new features or update existing ones as your business evolves.</p>`,
    },
    {
      title: "Can a web application help me compete with larger companies?",
      content: `<p>Absolutely! Custom web applications create equal opportunities by automating processes that larger companies manage with large teams. You can provide professional, efficient services that match or exceed customer expectations, often at a fraction of the operational cost.</p>`,
    },
    {
      title: "Do you provide training for my team?",
      content: `<p>Yes! We include comprehensive training as part of our web application development service. This covers both end-user training for your team and administrator training for managing the application. We also provide documentation and ongoing support to ensure smooth adoption.</p>`,
    },
  ];

  const handleServiceClick = (id) => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    setSelectedServiceId(id);
  };

  const handleBack = () => {
    setSelectedServiceId(null);
  };

  const serviceData = selectedServiceId
    ? getServiceDetails(selectedServiceId)
    : null;

  return (
    <div className="web-app-development-service">
      {!selectedServiceId ? (
        <>
          <HeroSection />
          <ServicesGrid onServiceSelect={handleServiceClick} />

          <CTASection />
          <ProcessSection
            steps={steps}
            title="Our Step-by-Step Web App Development Process"
            subTitle="A structured, transparent process tailored to your business success."
            bgColor="#fff"
          />
          <WhyChooseUsSection />
          <ChallengesSection />
          <FeaturedCaseStudy caseStudies={caseStudies} />
          <ServiceFAQ
            items={faqItems}
            title="Our Web App Development Services"
          />
          <BranchFooter bgColor="#fff" />
        </>
      ) : (
        <ServicePage serviceData={serviceData} onBack={handleBack} />
      )}
    </div>
  );
};

export default WebAppDevPage;
