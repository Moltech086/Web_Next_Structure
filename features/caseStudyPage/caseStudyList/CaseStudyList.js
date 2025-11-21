"use client";
import React, { useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import "./CaseStudyList.scss";
import Link from "next/link";
import Images from "@/components/image/Image";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";


const caseStudies = [
  {
    id: 1,
    imagePath: AppIcons.Heritage4,
    slug: "resort-website-redesign-case-study",
    title: "Website Redesign & Digital Transformation",
    client: "Heritage Resort Shark Bay",
    industry: "Hospitality, Travel & Tourism",
    technologies: [
      ".NET Core",
      "API Development",
      "Next.js",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "HTML",
    ],
    description:
      "Revamped the resort's digital presence with a mobile-friendly website, integrated CMS, and SEO optimization to boost online engagement and bookings.",
    results: [
      "Fully responsive, modern website",
      "Improved SEO and search visibility",
      "Streamlined content management",
      "Higher engagement and booking potential",
    ],
  },
  {
    id: 2,
    imagePath: AppIcons.Pardoo1,
    slug: "roadhouse-digital-transformation-case-study",
    title: "Website Redevelopment & SEO Enhancement",
    client: "Pardoo Roadhouse",
    industry: "Travel, Hospitality, Fuel & Services",
    technologies: [
      ".NET Core",
      "API Development",
      "Next.js",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "HTML",
    ],
    description:
      "Post-Cyclone Ilsa, we partnered with Pardoo Roadhouse to rebuild their digital presence with a mobile-first website, CMS integration, and SEO optimization to enhance customer reach and engagement.",
    results: [
      "Fully mobile-responsive website",
      "Boosted search engine visibility",
      "Easy content updates via CMS",
      "Stronger tourism and service awareness",
    ],
  },
  {
    id: 3,
    imagePath: AppIcons.MWIEloquence2,
    slug: "jewelry-ecommerce-case-study",
    title: "E-commerce B2B Portal Enhancement & Maintenance",
    client: "MWI Eloquence",
    industry: "Fine Jewelry & Diamond Manufacturing",
    technologies: [
      "Microsoft .NET",
      "ASP.NET",
      "AJAX Toolkit",
      "JavaScript",
      "MS SQL",
      "IIS",
    ],
    description:
      "Ongoing development and support for a feature-rich B2B e-commerce portal connecting fine jewelry manufacturers with leading retail chains, with robust role-based pricing, PDF handling, and advanced search features.",
    results: [
      "Stabilized and refactored legacy codebase",
      "Improved user experience and checkout process",
      "Enabled scalable product management",
      "Long-term technical partnership and support",
    ],
  },
  {
    id: 4,
    imagePath: AppIcons.Brightlogix1,
    slug: "technology-consulting-website-design-case-study",
    title: "Corporate Website Redesign & SEO Optimization",
    client: "BrightLogix",
    industry: "Technology",
    technologies: [
      ".NET Core",
      "API Development",
      "Next.js",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "HTML",
    ],
    description:
      "Redesigned and optimized BrightLogix's corporate website to better communicate their services, improve SEO visibility, and deliver a modern, mobile-friendly user experience.",
    results: [
      "Modernized UI reflecting brand expertise",
      "Improved SEO and organic reach",
      "Clearer service messaging for better engagement",
      "Fully responsive site for all device types",
    ],
  },
  {
    id: 5,
    imagePath: AppIcons.KBcouriers1,
    slug: "courier-booking-admin-system-case-study",
    title: "Corporate Website, Admin Portal & API Development",
    client: "K&B Couriers",
    industry: "Logistics & Courier Services",
    technologies: [
      "ASP.NET MVC 5.0",
      "C#",
      "MS SQL Server",
      "IIS",
      "jQuery",
      "AngularJS",
      "JavaScript",
      "AJAX",
      "HTML5",
      "CSS",
      "Bootstrap 3",
      "SVN",
    ],
    description:
      "Delivered a modern public website, a feature-rich admin portal, and backend APIs to replace third-party limitations, enabling K&B Couriers to streamline courier operations, improve order processing, and manage clients more effectively.",
    results: [
      "Modern, responsive corporate website launched",
      "Custom admin portal with role-based access control",
      "Real-time order sync with Ontime360 data",
      "Faster, more accurate order processing workflows",
    ],
  },
  {
    id: 6,
    imagePath: AppIcons.HRMS1,
    slug: "hrms-recruitment-portal-case-study",
    title: "B2B SaaS HRMS & Recruitment Platform Development",
    client: "Echem Portal Inc",
    industry: "HRMS Recruitment",
    technologies: [
      "Microsoft .NET 8.0",
      ".NET API",
      "React.js",
      "JavaScript",
      "HTML",
      "SCSS",
      "Bootstrap CSS",
      "Tailwind CSS",
      "MS SQL",
      "IIS",
      "Jenkins",
      "Python (Resume QCR)",
    ],
    description:
      "Built a centralized recruitment and interview management portal for Echem Portal Inc. to streamline hiring workflows, automate candidate tracking, and integrate AI-powered resume parsing.",
    results: [
      "Faster recruitment cycles with round-wise tracking",
      "Centralized candidate data and structured interview feedback",
      "AI-based resume scanning and automated data entry",
      "Improved HR collaboration and decision-making efficiency",
    ],
  },
  {
    id: 7,
    imagePath: AppIcons.sgTech1,
    slug: "membership-event-management-case-study",
    title: "Member & Event Management System Development",
    client: "SGTech",
    industry: "Tech Industry Association",
    technologies: [
      ".NET Core 6",
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "MS SQL Server",
      "Zoom API",
      "ActiveCampaign API",
      ".NET Core Background Services",
    ],
    description:
      "Developed a centralized membership and event management platform for SGTech, enabling seamless booking, financial reporting, chapter-based access, and integrated webinar/event participation.",
    results: [
      "Streamlined membership and event management",
      "Improved self-service experience for members",
      "Faster payments and automated invoicing",
      "Accurate reporting and reduced admin workload",
    ],
  },
  {
    id: 8,
    imagePath: AppIcons.smf1,
    slug: "manufacturing-membership-event-management-case-study",
    title: "Membership & Event Management Platform Development",
    client: "Singapore Manufacturing Federation (SMF)",
    industry: "Manufacturing",
    technologies: [
      ".NET Core 6",
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "MS SQL Server",
      "Zoom API",
      "ActiveCampaign API",
      "Reddot Payment Gateway",
      ".NET Core Background Services",
    ],
    description:
      "Developed a centralized, mobile-friendly platform for SMF to manage memberships, events, communications, and financial reporting—empowering members with online self-service tools and boosting organizational efficiency.",
    results: [
      "Streamlined membership and event operations",
      "Online self-service for renewals and bookings",
      "Improved financial tracking and transaction reporting",
      "Reduced manual workload with automated communication",
    ],
  },
  {
    id: 9,
    imagePath: AppIcons.Whare4,
    slug: "warehouse-management-app-case-study",
    title: "Mobile Warehouse Management App Development",
    client: "Clixz",
    industry: "Warehouse",
    technologies: [
      "React Native",
      "Redux",
      "Axios",
      "Web Services",
      "QR/Barcode Scanning",
      "Google Play Console",
      "Apple App Store",
    ],
    description:
      "Developed a robust mobile application for warehouse technicians to access, verify, and manage stock in real time—even in offline mode—enhancing field productivity and inventory accuracy.",
    results: [
      "Real-time and offline stock access",
      "Faster instrument verification via barcode scanning",
      "Improved stock booking efficiency",
      "Seamless data sync and reduced manual errors",
    ],
  },
  {
    id: 10,
    imagePath: AppIcons.Capitaland1,
    slug: "skills-development-portal-case-study",
    title: "SkillsFuture Queen Bee Learning Platform Development",
    client: "CapitaLand",
    industry: "Real Estate & Retail Sector",
    technologies: [
      "AWS EC2 (IIS)",
      "MS SQL Server 2019",
      "ASP.NET MVC 5.0",
      "C#",
      ".NET Core 6",
      "Next.js",
      "AngularJS",
      "jQuery",
      "JavaScript",
      "AJAX",
      "HTML",
      "CSS",
      "Bootstrap 4",
      "SVN",
    ],
    description:
      "Developed a custom learning and resource portal for CapitaLand’s SkillsFuture Queen Bee Programme to help Singapore’s retail SMEs upskill through curated courses, workshops, and centralized programme management.",
    results: [
      "Streamlined learning experience for SMEs",
      "Centralized partner and resource management",
      "Automated booking, cancellation, and communication workflows",
      "Improved participation tracking and real-time reporting",
    ],
  },
  {
    id: 11,
    imagePath: AppIcons.QuickVisa1,
    slug: "immigration-services-platform-case-study",
    title: "Immigration Services Platform Development",
    client: "Quick Visa & Immigration Inc",
    industry: "Visa and Consulting Services",
    technologies: [
      "Next.js",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    description:
      "Developed a secure immigration services platform for Quick Visa & Immigration Inc. to streamline client onboarding, document handling, and case management while improving user experience and lead generation.",
    results: [
      "Secure client portal with document upload and tracking",
      "Improved visibility into application progress",
      "Automated communication for faster updates",
      "Boosted online presence with SEO and content tools",
    ],
  },
  {
    id: 12,
    imagePath: AppIcons.pemmasani1,
    slug: "accounting-firm-website-design-case-study",
    title: "Accounting Firm Website Development",
    client: "Pemmasani LLC",
    industry: "Accounting",
    technologies: [
      "Microsoft Assure Server",
      "MySQL",
      "PHP",
      "WordPress",
      "phpMyAdmin",
      "Workbench",
      "HTML5",
      "CSS3",
      "Bootstrap 4",
      "Advanced Custom Fields",
      "Contact Form 7",
      "Cookies Consents",
    ],
    description:
      "Developed a professional, responsive website for Pemmasani LLC to showcase accounting and audit services across multiple U.S. locations, improving visibility, lead generation, and client engagement.",
    results: [
      "Multi-location visibility with tailored contact forms",
      "Clear service presentation and improved content structure",
      "Increased online inquiries through optimized CTAs",
      "Consistent branding across a mobile-friendly design",
    ],
  },
  {
    id: 13,
    imagePath: AppIcons.ecertificate1,
    slug: "online-e-certificate-solution-case-study",
    title: "E-Certificate Automation Platform Development",
    client: "E-Certificate (Flying Cape Schools)",
    industry: "Education Technology",
    technologies: [
      "ASP.NET MVC",
      "C#",
      "MS SQL Server",
      "jQuery",
      "AngularJS",
      "TypeScript",
      "HTML5",
      "Bootstrap 4",
      "AJAX",
      "AWS EC2 (Windows Server IIS)",
      "SVN",
    ],
    description:
      "Built a secure, scalable digital certificate generation platform for partner schools to automate the creation, customization, and email delivery of verifiable course completion certificates.",
    results: [
      "Reduced manual work for certificate creation and distribution",
      "QR-enabled, verifiable certificates for authenticity",
      "Instant delivery and email automation",
      "Efficient certificate template and font management by schools",
    ],
  },
  {
    id: 14,
    imagePath: AppIcons.SLA1,
    slug: "membership-event-management-web-portal-case-study",
    title: "Membership & Resource Management Platform Development",
    client: "Singapore Land Authority (SLA)",
    industry: "Government, Land Management, Geospatial Services",
    technologies: [
      ".NET Core API",
      "Next.js",
      "React.js",
      "MS SQL Server",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Bootstrap",
      "jQuery",
      "AWS Amplify",
      "AWS EC2 with IIS",
      "Google Captcha",
      "Zoom API",
      "Email Scheduler",
    ],
    description:
      "Developed a comprehensive web and admin portal for SLA to digitize membership workflows, manage bookings and resources, and streamline financial operations—enhancing accessibility, compliance, and engagement.",
    results: [
      "Fully digitized membership sign-up and approval system",
      "Automated financial management with GST and invoice tracking",
      "Zoom-integrated event booking with secure payment",
      "Streamlined admin reporting and collaboration tools",
    ],
  },
  {
    id: 15,
    imagePath: AppIcons.AISP1,
    slug: "membership-management-platform-admin-portal-case-study",
    title: "Membership & Admin Platform Development",
    client: "AISP",
    industry: "Professional Membership Association",
    technologies: [
      ".NET Core API",
      "Next.js",
      "React.js",
      "MS SQL Server",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "HTML5",
      "CSS",
      "Bootstrap",
      "AWS Amplify",
      "AWS EC2 (IIS)",
      "PayPal Integration",
      "Email Scheduler",
    ],
    description:
      "Developed a secure, tiered membership and admin platform for AiSP to automate onboarding, payments, communications, and event management—improving operational efficiency and member engagement.",
    results: [
      "Digitized workflows for corporate, academic, and individual memberships",
      "Automated payment reconciliation and financial reporting",
      "Streamlined EDM campaigns and communication management",
      "Improved self-service experience for members with dashboards and access to records",
    ],
  },
  {
    id: 16,
    imagePath: AppIcons.SCAL1,
    slug: "event-management-platform-web-platform-case-study",
    title: "Membership & Event Management Portal Development",
    client: "SCAL (The Singapore Contractors Association Ltd.)",
    industry: "Construction, Association Management",
    technologies: [
      ".NET Core API",
      "Next.js",
      "React.js",
      "MS SQL Server",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "HTML5",
      "CSS",
      "Bootstrap",
      "AWS Amplify",
      "AWS EC2 with IIS",
      "Zoom API",
      "Email Scheduler",
      "S3 Bucket",
    ],
    description:
      "Developed a secure and scalable membership and event management platform for SCAL, digitizing onboarding, booking, financial reconciliation, and reporting for both members and administrators.",
    results: [
      "Digitized membership sign-up, renewal, and event registration workflows",
      "Automated GST-based invoicing and payment reconciliation",
      "Integrated Zoom API for seamless event hosting",
      "Advanced reporting tools for MOM compliance, OATI, slots, and financials",
    ],
  },
  {
    id: 17,
    imagePath: AppIcons.BoysTown1,
    slug: "donation-and-fundraising-management-platform-with-volunteer-and-event-coordination-case-study",
    title: "Donation Platform & Admin Panel Development",
    client: "Boys’ Town Singapore",
    industry: "Non-Profit, Social Services",
    technologies: [
      ".NET Core API",
      "Next.js",
      "React.js",
      "MS SQL Server",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "HTML5",
      "CSS",
      "Bootstrap",
      "AWS EC2 with IIS",
      "Salesforce API",
      "SingPass API",
      "PayPal",
      "OxPay",
      "Webhook Scheduler",
    ],
    description:
      "Developed a mobile-friendly donation platform and admin panel for Boys’ Town Singapore to streamline donor engagement, backend management, and real-time communication—supporting their mission to serve children and youth from disadvantaged backgrounds.",
    results: [
      "Launched secure, user-friendly online donation experience",
      "Integrated SingPass and Salesforce for secure, automated data sync",
      "Simplified backend donation and partner link management",
      "Reduced manual effort with batch upload and automated notifications",
    ],
  },
  {
    id: 18,
    imagePath: AppIcons.acca1,
    slug: "secure-e-voting-platform-case-study",
    title: "Secure eVoting Platform for AGM Elections",
    client: "ACCA (Association of Chartered Certified Accountants)",
    industry: "Professional Membership, Accounting",
    technologies: [
      "ASP.NET MVC",
      "C#",
      "MS SQL Server",
      "jQuery",
      "AngularJS",
      "JavaScript",
      "AJAX",
      "HTML5",
      "CSS",
      "Bootstrap 3 & 4",
      "AWS EC2 with IIS",
      "Image Cropper",
    ],
    description:
      "Built a secure, scalable online voting system for ACCA to conduct panel elections and AGMs remotely during COVID-19, ensuring member participation, compliance, and transparency.",
    results: [
      "Remote, real-time voting enabled during pandemic restrictions",
      "Maintained transparency with secure audit trails",
      "Streamlined election operations with reduced manual effort",
      "Scalable platform ready for future governance needs",
    ],
  },
  {
    id: 19,
    imagePath: AppIcons.ScienceCenter1,
    slug: "online-conference-management-platform-case-study",
    title: "Conference Management Platform for SISTC",
    client: "Singapore International Science Teachers' Conference (SISTC)",
    industry: "Education, Schools",
    technologies: [
      ".NET Core API",
      "Next.js",
      "React.js",
      "MS SQL Server",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "HTML5",
      "CSS",
      "Bootstrap",
      "AWS Amplify",
      "AWS EC2 with IIS",
      "Payment Gateway Integration",
      "Email Scheduler",
    ],
    description:
      "Developed a full-featured conference management platform for SISTC, streamlining registration, school/group discounts, voucher handling, and certificate delivery for Singapore’s leading science education conference.",
    results: [
      "Automated registration and discount workflows for schools and individuals",
      "Enabled self-serve digital certificate downloads post-event",
      "Simplified event and booking oversight for administrators",
      "Improved engagement and efficiency with dashboards and notifications",
    ],
  },
  {
    id: 20,
    imagePath: AppIcons.CentralizeSystem1,
    slug: "centralized-operations-management-platform-case-study",
    title: "Centralized User & Common Module Management System",
    client: "EchemPortal Inc",
    industry: "Chemical Data Management, SaaS",
    technologies: [
      "React.js",
      ".NET Core",
      "SQL Server",
      "MongoDB",
      "REST API",
      "HTML5",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "TypeScript",
    ],
    description:
      "Developed a centralized platform to manage users, roles, projects, keys, and shared modules for EchemPortal Inc., enabling seamless integration across multiple chemical data management applications.",
    results: [
      "Unified user and role management across all applications",
      "Streamlined project-level access control and operational consistency",
      "Improved system security via centralized key handling",
      "Automated email digests and background task scheduling",
      "Scalable modular system supporting current and future apps",
    ],
  },

  {
    id: 21,
    imagePath: AppIcons.IPAS1,
    slug: "association-member-event-platform-case-study",
    title: "Membership, Events & Content Management Portal for IPAS",
    client: "Insolvency Practitioners Association of Singapore Limited (IPAS)",
    industry: "Professional Membership, Accounting, Education",
    technologies: [
      "React.js",
      ".NET Core",
      "SQL Server",
      "MongoDB",
      "REST API",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Bootstrap",
      "AsiaPay Payment Gateway",
      "Zoom API",
      "Role-Based Access Control",
      "Email Scheduler & Digest",
    ],
    description:
      "Developed a centralized portal for IPAS to manage memberships, events, CMS content, financial operations, and certificates—enhancing operational efficiency and member engagement across the accounting and professional development ecosystem.",
    results: [
      "Automated membership and event workflows with admin control",
      "Real-time financial tracking and reconciliation with AsiaPay",
      "Automated certificate generation for attendees",
      "CMS with gallery, resource, and dynamic page management",
      "Improved member engagement through dashboards and notification tools",
    ],
  },
  {
    id: 22,
    imagePath: AppIcons.SGBC1,
    slug: "membership-accreditation-management-platform-case-study",
    title: "Membership & Accreditation Management Portal for SGBC",
    client: "Singapore Green Building Council (SGBC)",
    industry: "Sustainability, Certification, Green Building",
    technologies: [
      "React.js",
      ".NET Core API",
      "SQL Server",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Bootstrap",
      "Stripe Payment Gateway",
      "Xero API (OAuth)",
      "Zoom API",
      "REST API",
      "Secure Role-Based Access",
      "Email Scheduler & Digest",
    ],
    description:
      "Built a robust digital platform for SGBC to manage GMQP accreditation, CPD tracking, course bookings, and financial workflows, integrated with Stripe and Xero for seamless operations and enhanced user experiences for professionals and administrators alike.",
    results: [
      "Digitized GMQP accreditation and renewal workflows",
      "Automated CPD progress tracking and verification",
      "Streamlined course bookings and secure payments",
      "Integrated Xero for efficient batch financial processing",
      "Enabled committee-based application and attendance approvals",
    ],
  },
  {
    id: 23,
    imagePath: AppIcons.SFC1,
    slug: "creative-industry-membership-portal-case-study",
    title:
      "Membership & Event Management Platform for Singapore Fashion Council",
    client: "Singapore Fashion Council (SFC)",
    industry:
      "Fashion, Sustainability, Professional Membership, Event Management",
    technologies: [
      ".NET Core API",
      "Next.js",
      "React.js",
      "MS SQL Server",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Bootstrap",
      "jQuery",
      "AWS Amplify",
      "AWS EC2",
      "Secure Role-Based Access",
      "Zoom API",
      "Xero AR Template Integration",
      "Email Scheduler",
    ],
    description:
      "Developed a responsive web and admin portal for the Singapore Fashion Council (SFC) to streamline membership, event management, and financial operations, enabling the council to manage campaigns, vouchers, and reporting with efficiency and scalability.",
    results: [
      "Digitized corporate and individual membership onboarding and renewals",
      "Automated event creation, registration, and approval workflows",
      "Integrated Xero AR financial templates and detailed reconciliation tools",
      "Enabled voucher code campaign creation and impact reporting",
      "Enhanced strategic oversight with comprehensive financial and membership reports",
    ],
  },
  {
    id: 24,
    imagePath: AppIcons.TMS1,
    slug: "project-collaboration-and-tracking-platform-case-study",
    title: "Project & Team Management Platform for TMS",
    client: "TMS (USA)",
    industry: "Team and Project Management",
    technologies: [
      "React.js",
      ".NET Core API",
      "SQL Server",
      "REST API",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "HTML5",
      "CSS",
      "Bootstrap",
      "Role-Based Authentication",
      "Email Template Management",
    ],
    description:
      "We developed a robust, centralized project and team management platform for a USA-based PM company, enabling detailed task tracking, sprint planning, timesheet management, and role-based access across multiple teams and clients.",
    results: [
      "Streamlined end-to-end project lifecycle with backlog and synergy planning",
      "Enabled detailed timesheet tracking, review, and approval workflows",
      "Enhanced team task planning with performance dashboards and reporting",
      "Implemented secure user roles and customer-project mapping",
      "Supported data-driven management through comprehensive reports",
    ],
  },
  {
    id: 25,
    imagePath: AppIcons.lDC1,
    slug: "workflow-and-document-automation-platform-case-study",
    title: "Workflow Management & Reporting System for LDC",
    client: "Laborers District Council (Philadelphia)",
    industry: "Labor Unions, Workforce Management",
    technologies: [
      "React.js",
      ".NET Core API",
      "SQL Server",
      "REST API",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "HTML5",
      "CSS",
      "Bootstrap",
      "Role-Based Authentication",
    ],
    description:
      "We developed a centralized and secure workflow and reporting portal for the Laborers District Council (LDC), enabling efficient management of employers, contracts, associations, and audits with robust role-based access control and compliance-oriented reporting.",
    results: [
      "Streamlined administrative workflows for employers, audits, and contracts",
      "Implemented comprehensive, downloadable reports for better operational insights",
      "Reduced manual effort and improved data accuracy across departments",
      "Strengthened security through role-based access and permission controls",
    ],
  },
  {
    id: 26,
    imagePath: AppIcons.TotalScopeInc1,
    slug: "legacy-system-modernization-platform-case-study",
    title: "Legacy System Modernization & Web Portal for Total Scope",
    client: "Total Scope, Inc.",
    industry: "Medical Equipment Repair & Maintenance",
    technologies: [
      "React.js",
      ".NET Core API",
      "SQL Server",
      "REST API",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Bootstrap",
      "Secure Role-Based Authentication",
      "Modular Architecture",
    ],
    description:
      "We are modernizing Total Scope’s legacy VB system into a modular, web-based platform to streamline their endoscopic equipment repair workflows. The new portal enhances repair tracking, inventory management, loaner logistics, and administrative control with scalable architecture and robust reporting capabilities.",
    results: [
      "Transformed legacy workflows into responsive, scalable modules",
      "Enhanced operational clarity with dashboards and search features",
      "Implemented secure user access control across departments",
      "Set foundation for future financial, reporting, and integration modules",
    ],
  },
  {
    id: 27,
    imagePath: AppIcons.BrownAndBrown1,
    slug: "secure-reporting-and-analytics-portal-case-study",
    title: "Valuation Report Automation Portal for Brown & Brown",
    client: "Brown & Brown",
    industry: "Insurance, Finance",
    technologies: [
      "React.js",
      ".NET Core API",
      "SQL Server",
      "REST API",
      "JavaScript",
      "TypeScript",
      "jQuery",
      "HTML5",
      "CSS",
      "Bootstrap",
      "XML/CSV Data Import",
      "XSD Schema Validation",
      "Word Document Merge",
      "Secure Role-Based Access",
    ],
    description:
      "In collaboration with BrightLogic Inc., we built a scalable, modular portal for Brown & Brown to manage complex client valuation plans, perform structured calculations, and generate automated Word reports using configurable templates.",
    results: [
      "Streamlined liability data import with XML/CSV & XSD validation",
      "Enabled dynamic valuation plan management with calculation rules",
      "Automated Word report generation using reusable merge templates",
      "Built secure, role-based admin portal for field, template, and rule management",
      "Improved efficiency in producing custom financial valuation reports",
    ],
  },

  {
    id: 28,
    imagePath: AppIcons.Aurum1,
    slug: "chemical-procurement-and-b2b-workflow-automation-case-study",
    title:
      "Chemical Procurement & B2B Workflow Automation Platform for Aurum Pharmatech LLP",
    client: "Aurum Pharmatech LLP",
    industry: "Chemical Procurement, B2B Workflow Automation",
    technologies: [
      "React.js",
      "Next.js",
      ".NET Core",
      "MS SQL",
      "JavaScript",
      "HTML, CSS3",
      "Bootstrap",
    ],
    description:
      "We developed a modern, scalable e-commerce portal with an integrated admin management system for Aurum Pharmatech LLP, enabling easy chemical product search, RFQ submission, order processing, and internal operations management with analytics and automation.",

    results: [
      "Centralized chemical search by CAS No., MDL No., Catalog ID, SMILES, bulk, and structure",
      "Seamless RFQ submission and order management workflow for B2B users",
      "Automated email communications and templated notifications for RFQs and orders",
      "Admin dashboard for user, product, and system configuration management",
      "Analytics and reporting tools for tracking orders, RFQs, user behavior, and system health",
    ],
  },

  {
    id: 29,
    imagePath: AppIcons.RPA2,
    slug: "robotic-process-automation-and-data-management-platform-case-study",
    title: "RPA & Middleware Automation Platform for Chemical Business",
    client: "Chemical Business",
    industry: "IT Automation, Data Management, Chemical Industry",
    technologies: [
      "React.js",
      ".NET Core 5",
      "C#",
      "Python 3.10",
      "MS SQL Server",
      "MySQL",
      "HTML, CSS3, SCSS",
      "Bootstrap",
      "JavaScript",
      "Flask",
      "Docker",
      "Windows Server IIS",
    ],
    description:
      "We built a distributed, Python-powered RPA and middleware platform for a global chemical business, automating ingestion, cleaning, normalization, and validation of millions of supplier records while providing real-time monitoring, error handling, and scalable operations.",

    results: [
      "Centralized orchestration console for scheduling, monitoring, and logging all RPA workflows",
      "Flexible Python adapters for diverse data sources, enabling quick adaptation to changing formats",
      "Modular data-cleaning pipelines for deduplication, normalization, and taxonomy enforcement",
      "Automated database integrity analyzer to detect and correct anomalies",
      "Template-driven image generation for automated product asset creation and CDN delivery",
    ],
  },
  {
    id: 30,
    imagePath: AppIcons.CloudDocs2,
    slug: "api-driven-saas-document-management-case-study",
    title: "Cloud-based Document Management SaaS Platform – Cloud Docs",
    client: "Internal Software as a Service Product",
    industry: "Document Management, SaaS",
    technologies: ["React.js", "FastAPI (Python)", "MySQL", "JWT", "OAuth"],
    description:
      "We developed Cloud Docs, an API-driven SaaS document management platform for the pharmaceutical sector, providing secure, centralized storage, real-time file operations, and seamless integration with internal and third-party systems while ensuring compliance and scalability.",

    results: [
      "Centralized document storage with secure bucket and folder management",
      "Real-time file operations with progress tracking, validations, and version consistency",
      "Role-based access control for secure collaboration across teams",
      "Public APIs enabling seamless integration with multiple internal and external systems",
      "End-to-end encryption ensuring secure upload, storage, and retrieval of documents",
    ],
  },

  {
    id: 31,
    imagePath: AppIcons.PubsubWorkflow,
    slug: "event-driven-email-automation-and-classification-system-case-study",
    title: "Pub/Sub Workflow for Email Automation",
    client: "Echem",
    industry: "Pharmaceuticals, Document Management",
    technologies: [
      "React.js",
      "FastAPI (Python)",
      "Google Cloud Pub/Sub",
      "RabbitMQ",
      "MongoDB",
      "Custom ML Model",
      "Marker (Markdown Parser)",
    ],
    description:
      "We developed an event-driven email automation and classification system for Echem, leveraging GCP Pub/Sub, FastAPI, RabbitMQ, and custom ML models to ingest, parse, classify, and deliver high-volume regulatory emails in real time to their Order Management System.",

    results: [
      "Real-time email ingestion with GCP Pub/Sub push subscriptions",
      "Automated ML-driven classification and validation of incoming emails",
      "Marker-powered document parsing converting attachments into structured Markdown",
      "Asynchronous, resilient queue orchestration ensuring fault tolerance and scalability",
      "Decoupled microservices architecture enabling modular, high-availability email processing",
    ],
  },
  {
    id: 32,
    imagePath: AppIcons.OPS1,
    slug: "ai-powered-order-processing-automation-case-study",
    title: "OPS – Order Processing System",
    client: "Echem",
    industry: "Pharmaceutical, Chemical",
    technologies: [
      "Python",
      "Django",
      "React.js",
      "MongoDB",
      "Docker",
      "TensorFlow",
      "PyTorch",
      "Hugging Face Transformers",
      "Custom Mistral-7B LLM",
    ],
    description:
      "We built OPS, an AI-powered order processing system for Echem, leveraging LLMs, custom ML models, and backend APIs to automatically extract, validate, and process unstructured purchase orders into structured data for seamless OMS integration.",

    results: [
      "Automated PO ingestion from emails and manual uploads with context-aware extraction",
      "Fine-tuned Mistral-7B model for accurate extraction of chemical names, CAS numbers, quantities, and delivery terms",
      "User validation dashboard highlighting low-confidence fields for correction",
      "Seamless OMS integration through secure API pipelines",
      "NLP-based fuzzy matching to map extracted data to internal records",
      "Dockerized microservices architecture enabling scalable, independent processing modules",
      "Audit logs and analytics for traceability, compliance, and operational insights",
    ],
  },
  {
    id: 33,
    imagePath: AppIcons.RPAWorkflow,
    slug: "scalable-internal-automation-platform-case-study",
    title: "Routine Process Automation Platform",
    client: "Internal Automation Team/R&D Department",
    industry: "Pharmaceutical, Chemical, Data & Research Services",
    technologies: [
      ".NET (C#)",
      "React.js",
      "Python",
      "Flask + Flask-SocketIO",
      "SQL Server",
      "MySQL",
      "FileManager API",
      "Docker",
      "IIS",
    ],
    description:
      "We built a scalable internal Routine Process Automation (RPA) platform for data-driven teams in the pharmaceutical and chemical sectors, automating supplier data ingestion, website scraping, cleaning, transformation, and import into SQL Server for consistent, traceable, and efficient workflows.",

    results: [
      "Centralized RPA platform with distributed scraper clients supporting standard, VPN, and Tor-based data extraction",
      "Automated file ingestion, cleaning, standardization, and import into SQL Server for operational efficiency",
      "Integrated FileManager API for systematic input/output management and traceability",
      "Middleware server scheduling dynamically routes tasks to available clients, maximizing throughput",
      "Real-time logs and status tracking for transparency, troubleshooting, and auditing",
      "Advanced extensions for chemical enrichment, image generation, and email validation",
      "Downloadable processed output for easy integration into downstream workflows",
    ],
  },
  {
    id: 34,
    imagePath: AppIcons.IMS1,
    slug: "procurement-inquiry-automation-case-study",
    title: "Inquiry Management System (IMS)",
    client: "Echemportal",
    industry: "Supplier/Vendor Management",
    technologies: [
      "React.js",
      ".NET Core",
      "Python",
      "SQL Server",
      "SMTP, IMAP/POP",
      "JavaScript",
      "C#",
    ],
    description:
      "We developed IMS, a web-based inquiry management system for Echemportal, automating the full lifecycle of chemical-product inquiries, supplier communications, and response tracking while providing a centralized dashboard for visibility, audit, and compliance.",

    results: [
      "Automated end-to-end inquiry processing with parallel Python grabbers fetching supplier emails",
      "Bulk templated email dispatch ensuring consistent, professional communications",
      "Automated parsing and linking of incoming replies to original inquiries",
      "Centralized dashboard with real-time inquiry status, response tracking, and audit logs",
      "Standardized email templates and configuration to enforce uniform messaging",
      "Vendor and product management modules for structured, traceable internal procurement workflows",
    ],
  },
  {
    id: 35,
    imagePath: AppIcons.scanner1,
    slug: "mobile-attendance-and-class-booking-system-case-study",
    title: "Flying Cape – Attendance & Class-Booking App",
    client: "Flying Cape",
    industry: "Education Technology",
    technologies: [
      "Ionic 3.0 with TypeScript",
      "REST APIs",
      "SSO Authentication",
      "Keychain Certificates",
      "SVN",
      "Google Play Console",
      "Apple App Store",
    ],
    description:
      "We developed a centralized mobile attendance and class-booking system for Flying Cape, enabling parents to reserve classes and institutions to manage attendance in real time using QR scanning, dashboards, and reporting, all via a secure mobile app.",

    results: [
      "Secure user login with SSO and Keychain-stored credentials",
      "Real-time dashboards displaying class schedules, bookings, and check-ins",
      "QR-code attendance scanning for instant, accurate student check-ins",
      "Manual attendance overrides and walk-in booking support for flexibility",
      "Automated reporting with CSV/PDF export for bookings and attendance tracking",
      "Unified mobile platform replacing fragmented booking portals across partner institutes",
    ],
  },
  {
    id: 36,
    imagePath: AppIcons.EPS1,
    slug: "ai-powered-email-automation-case-study",
    title: "EPS – Email Processing System",
    client: "Echem",
    industry: "Chemical Trading, Supply Chain",
    technologies: [
      "Python",
      "Django",
      "FastAPI",
      "Vanilla JS (HTML/CSS)",
      "MongoDB",
      "TensorFlow",
      "PyTorch",
      "Hugging Face Transformers",
      "Custom Mistral-7B LLM",
      "Docker",
      "Ubuntu Server 22.04",
      "Windows Server 2022",
    ],
    description:
      "We developed EPS, an AI-powered email processing system for Echem, automating the intake, classification, and extraction of high-volume quotation emails using ML models and fine-tuned LLMs, with verification interfaces and integration into Echem’s internal EMS modules.",

    results: [
      "Automated classification of incoming emails by category, priority, and business relevance using ML models",
      "Advanced extraction of CAS numbers, chemical names, quantities, and table-based data from unstructured emails",
      "Integration of fine-tuned Mistral-7B LLM for contextual understanding and extraction accuracy",
      "User verification panel for reviewing and correcting extracted data before system ingestion",
      "Real-time dashboards and statistics on email volumes, processing status, and label accuracy",
      "Rule configuration interface for adaptable classification and extraction logic",
      "IMAP/Gmail API integration and external EMS/ERP-ready data pipelines",
      "Audit logging for tracking user actions, errors, and continuous model improvement",
    ],
  },
  {
    id: 37,
    imagePath: AppIcons.acca1,
    slug: "acca-partner-event-management-system-case-study",
    title: "Association of Chartered Certified Accountants (ACCA)",
    client: "Flying Cape",
    industry: "Association of Chartered Certified Accountants",
    technologies: [
      "AWS EC2 (Windows Server, IIS)",
      "Microsoft SQL Server 2019",
      "ASP.NET MVC 5.0",
      "C#",
      "jQuery",
      "AngularJS",
      "JavaScript",
      "AJAX",
      "HTML5",
      "CSS3",
      "Bootstrap 4",
      "SVN",
    ],
    description:
      "We developed a global partner and event management platform for ACCA, streamlining professional development workflows for members and partners with booking, payments, reporting, and secure role-based access, all on a scalable, high-performance architecture.",

    results: [
      "Centralized member portal for exploring classes, managing bookings, and tracking CPD progress",
      "Admin portal with comprehensive control over classes, users, banners, and reports",
      "Robust booking workflows supporting confirmation, cancellation, rescheduling, and OTC bookings with audit trails",
      "Advanced multi-criteria class search with fast server-side filtering and caching",
      "Role-based access management for partners and internal users across distributed servers",
      "Scalable deployment using AWS EC2, IIS Web Farms, SQL clustering, and distributed caching",
      "Unified payment service integrating AsiaPay and Adyen with retries and transaction logging",
      "Real-time dashboards and exportable reports using SignalR-driven updates and pre-aggregated metrics",
    ],
  },
  {
    id: 38,
    imagePath: AppIcons.flyingCape1,
    slug: "flying-cape-partner-event-system-case-study",
    title: "Flying Cape",
    client: "Flying Cape",
    industry: "Education & Learning Tech",
    technologies: [
      "AWS EC2 (Windows Server, IIS)",
      "Microsoft SQL Server 2019",
      "ASP.NET MVC 5.0",
      "C#",
      "jQuery",
      "AngularJS",
      "JavaScript",
      "AJAX",
      "HTML5",
      "CSS3",
      "Bootstrap 4",
      "SVN",
    ],
    description:
      "We developed a scalable education and learning management platform for Flying Cape, providing students, partners, and admins with seamless class booking, intelligent search, profile management, payment processing, and real-time analytics through a unified web portal and admin console.",

    results: [
      "Member portal with one-click class booking, cancellations, rescheduling, and profile management",
      "Admin portal for bulk class uploads, partner/user management, dashboards, and exportable reports",
      "Intelligent multi-criteria class search with indexed, cached filtering for fast response",
      "Reward engine and eWallet system managing Compass Points and balances in real time",
      "Decoupled workflow modules ensuring reliable booking, cancellation, rescheduling, and OTC operations",
      "Role-based access control for hundreds of educational partners and internal admins",
      "Auto-scaling infrastructure with AWS EC2, SQL clustering, and distributed web farms for high-volume traffic",
      "Unified integration layer for payment gateways (AsiaPay, Mastercard, DBS) and Singpass API with retry and logging mechanisms",
    ],
  },
  {
    id: 39,
    imagePath: AppIcons.Clixz1,
    slug: "clixzplatform-utility-saas-case-study",
    title: "ClixzPlatform",
    client: "Flying Cape",
    industry: "Any Industries",
    technologies: [
      ".NET",
      "Angular",
      "MS-SQL",
      ".NET Core",
      "SCSS",
      "Bootstrap",
      "HTML",
      "TypeScript",
      "SSRS",
      "Background Services",
      "Azure Authentication",
    ],
    description:
      "We developed ClixzPlatform, a multi-tenant SaaS platform for utility providers, enabling configurable workflows, quotations, reporting, and dashboards with per-tenant customization, rapid onboarding, and a scalable architecture.",

    results: [
      "Pluggable workflow modules for email alerts, PDF generation, and custom task execution configured via metadata",
      "Dynamic admin console for tenant-specific management of users, permissions, modules, and global settings",
      "Sales and lead management modules with dynamic quotation, conditional pricing, and workflow tracking",
      "Data and document management including approvals, questionnaires, and pre-filled forms",
      "SSRS-powered dashboards and real-time metrics tailored per tenant",
      "Multi-tenant architecture ensuring strict data and permission segregation across customers",
      "Rapid onboarding of new tenants without bespoke development",
      "Modular, maintainable codebase reducing technical debt while supporting diverse client requirements",
    ],
  },
];

const CaseStudyList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCards, setExpandedCards] = useState([]);

  const itemsPerPage = 6;

  const featuredStudies = caseStudies.slice(0, 3); // First 3 as featured
  // Toggle expand/collapse for tech stack
  const toggleExpand = (id) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  // Filter and search case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const matchesSearch =
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry =
        selectedIndustry === "" || study.industry === selectedIndustry;
      return matchesSearch && matchesIndustry;
    });
  }, [searchTerm, selectedIndustry]);

  // Pagination
  const totalPages = Math.ceil(filteredCaseStudies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedCaseStudies = filteredCaseStudies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Success Stories</h1>
          <p>
            Discover how Moltech Solutions helped 15+ industries succeed with
            custom software solutions.
          </p>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-icon">
                <Icon icon="mdi:briefcase" />
              </div>
              <strong>15+</strong>
              <span>Industries Served</span>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Icon icon="mdi:chart-line" />
              </div>
              <strong>98%</strong>
              <span>Success Rate</span>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <Icon icon="mdi:rocket-launch" />
              </div>
              <strong>39+</strong>
              <span>Projects Delivered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured">
        <h2>Featured Success Stories</h2>
        <p>
          Highlighting our most impactful projects that showcase our expertise
          and innovation
        </p>

        <div className="grid">
          {featuredStudies.map((study) => {
            const isExpanded = expandedCards.includes(study.id);
            const visibleTechs = isExpanded
              ? study.technologies
              : study.technologies.slice(0, 3);
            const remainingCount = study.technologies.length - 3;

            return (
              <div key={study.id} className="card">
                <div className="card-header">
                  <Image src={study.imagePath} alt={study.title} />
                </div>
                <div className="card-body">
                  <div className="card-content">
                    <div className="badge-year">
                      <span className="badge">{study.industry}</span>
                    </div>
                    <h3>{study.title}</h3>
                    <p>{study.description}</p>
                  </div>
                  <div className="tags">
                    {visibleTechs.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                    {!isExpanded && remainingCount > 0 && (
                      <span
                        className="more-tags"
                        onClick={() => toggleExpand(study.id)}
                        style={{ cursor: "pointer", color: "#007bff" }}
                      >
                        +{remainingCount}
                      </span>
                    )}
                  </div>
                  <div className="details">
                    <Link href={`/case-study/${study.slug}`}>
                      Explore <Icon icon="mdi:chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="featured">
        <h3>Case Studies</h3>
        <p>
          Explore our case studies to learn how we have helped our clients
          achieve their goals and improve their businesses.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="case-grid current">
        {paginatedCaseStudies.length > 0 ? (
          paginatedCaseStudies.map((study) => {
            const isExpanded = expandedCards.includes(study.id);
            const visibleTechs = isExpanded
              ? study.technologies
              : study.technologies.slice(0, 3);
            const remainingCount = study.technologies.length - 3;

            return (
              <div key={study.id} className="case-card">
                {/* Banner Image */}
                <div className="card-banner">
                  {study.imagePath ? (
                    <Images
                      imagePath={study.imagePath}
                      altText={`${study.title} Case Study`}
                    />
                  ) : (
                    <Images
                      imagePath={AppIcons.BrokenImg}
                      altText="No image available"
                    />
                  )}
                </div>

                {/* Card Content */}
                <div className="card-info">
                  <div className="info">
                    {/* Industry */}
                    <div className="badge-year">
                      <span className="badge">{study.industry}</span>
                      <span className="year">2024</span>
                    </div>

                    {/* Title */}
                    <h4>{study.title}</h4>

                    {/* Description */}
                    <p>{study.description}</p>

                    {/* Client */}
                    <p>
                      <strong>Client:</strong> {study.client}
                    </p>

                    {/* Technologies */}
                    <div className="tags">
                      {visibleTechs.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                      {!isExpanded && remainingCount > 0 && (
                        <span
                          className="more-tags"
                          onClick={() => toggleExpand(study.id)}
                          style={{ cursor: "pointer", color: "#007bff" }}
                        >
                          +{remainingCount}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Link */}
                  <Link href={`/case-study/${study.slug}`}>View Details</Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-results">
            <Icon icon="mdi:magnify" />
            <h3>No case studies found</h3>
            <p>Try adjusting your search terms or filters.</p>
          </div>
        )}
      </section>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="pagination-button"
            aria-label="Previous page"
          >
            <Icon icon="mdi:chevron-left" />
          </button>

          {/* Dynamic pagination range */}
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const half = Math.floor(5 / 2);
            let start = Math.max(currentPage - half, 1);
            let end = start + 4;
            if (end > totalPages) {
              end = totalPages;
              start = Math.max(end - 4, 1);
            }
            const page = start + i;
            return (
              <button
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => setCurrentPage(page)}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="pagination-button"
            aria-label="Next page"
          >
            <Icon icon="mdi:chevron-right" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CaseStudyList;
