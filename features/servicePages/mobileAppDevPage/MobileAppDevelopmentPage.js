"use client";
import React, { useState, useEffect, useRef } from "react";
import Iconify from "@/components/ui/icons/Iconify";
import "./MobileAppDevelopmentPage.scss";
import MobileSlider from "./components/MobileSlider";
import Link from "next/link";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import CTASection from "@/components/ctaSection/CTASection";
import ProcessSection from "@/components/processsection/ProcessSection";
import { Icon } from "@iconify/react";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import FeaturedCaseStudy from "@/features/caseStudyPage/featuredCaseStudy/FeaturedCaseStudy";
import { AppIcons } from "@/data/appIcons";

const MobileAppDevelopmentPage = () => {
    const services = [
        {
            id: 1,
            title: "Native iOS App Development",
            description: `At Moltech Solutions Inc., we are specialists in developing native iOS apps that run seamlessly inside Apple's ecosystem. Applications developed by our talented programmers using Swift and Objective-C are visually appealing, quick, secure, and scalable. We make sure that your app meets Apple's design guidelines and offers a smooth, easy-to-use experience for users, whether they're using an iPhone, iPad, or Apple Watch. Everything from creating the user interface to distributing to the App Store has been taken care of by us. We can help to get your app approved by Apple faster and with greater intelligence due to our profound understanding of iOS frameworks. Working with Moltech ensures that your iOS app is not just functional but also visually stunning.`,
            gradient: "linear-gradient(135deg, #FA7343, #FF9472)",
            icon: "fa-brands:app-store-ios",
            techStack: ["logos:swift", "logos:apple"],
        },
        {
            id: 2,
            title: "Native Android App Development",
            description: `Our company creates strong native Android apps meant for expansion across Android devices, including smartphones, tablets, and wearables; they are dependable, feature-rich, and developed in native Android style. Using Java and Kotlin, our team of developers produces mobile apps ideal for speed, security, and a flawless user experience. We comply with Google's best practices to ensure compatibility among all running system versions and devices. Whether you are introducing a consumer app or a sophisticated business solution, we will provide you with an Android product that meets your company goals as well as the expectations of your users. <br/> We not only create apps but also, over time, optimize them for performance, user interface, and manageability. Moltech is your partner when it comes to creating Android applications businesses depend on and that people love.`,
            gradient: "linear-gradient(135deg, #A4C639, #8DBE2F)",
            icon: "flat-color-icons:android-os",
            techStack: [
                "logos:java",
                "devicon:kotlin",
                "vscode-icons:file-type-android-studio",
                "logos:android",
            ],
        },
        {
            id: 3,
            title: "Cross-Platform App Development",
            description: `Whether you need a Minimum Viable Product (MVP) or a full-featured app, our staff guarantees a native-like speed and user experience. Working with Moltech will provide you with flexibility, a faster time-to-market, and a product consistent on all platforms. Our cross-platform solutions will help you to realize your app idea in an economical and quick manner. For companies and startups aiming at economic scale, these options are perfect.`,
            gradient: "linear-gradient(135deg, #02569B, #039BE5)",
            icon: "devicon:reactnative",
            techStack: [
                "logos:flutter",
                "devicon:react-native",
                "vscode-icons:file-type-dart",
            ],
        },
        {
            id: 4,
            title: " UI/UX Design for Mobile",
            description: `We think excellent apps start with excellent design. Our mobile UI/UX design services center on producing simple, elegant, and captivating interactions that entice users back. First, we learn about your audience's behavior and needs by means of user research and wireframing. We then create eye-catching interfaces, smooth navigation, and micro-interactions, improving usability. Whether your app is a corporate dashboard or a consumer app, our design thinking method guarantees it feels and looks exactly correct. At Moltech, we mix design with utility; hence, your mobile app not only looks excellent but also performs well on all devices and screen sizes.`,
            gradient: "linear-gradient(135deg, #F24E1E, #A259FF)",
            icon: "arcticons:ux-led",
            techStack: [
                "logos:figma",
                "devicon:adobe-xd",
                "vscode-icons:file-type-sketch",
            ],
        },
        {
            id: 5,
            title: "App Prototyping & MVP Development",
            description: `Would you like to swiftly test your app idea? Prior to significant investment, our app prototyping and MVP development services enable you to evaluate your idea.  Working with companies and product teams, we create clickable prototypes or functional MVPs highlighting your main idea. This method lowers risk, gets early comments, and promotes internal buy-in or investor attraction. Our agile development staff guarantees quick delivery free of compromise in quality. Whether you're early market entry or polishing a pitch, we enable you to move fast with a minimal viable product that is functional, scalable, and ready for actual users.`,
            gradient: "linear-gradient(135deg, #A259FF, #C084FC)",
            icon: "arcticons:proton-vpn-alt",
            techStack: [
                "mdi:gesture-tap-button",
                "mdi:progress-clock",
                "mdi:account-check-outline",
            ],
        },
        {
            id: 6,
            title: "API & Third-Party Integration",
            description: `Modern mobile apps rely on connectivity. Our API integration services connect your app with various third-party tools, platforms, and data sources, including payment gateways, CRMs, maps, and analytics. Whether your app is running REST, GraphQL, or custom APIs, we guarantee effortless, secure, and quick interaction between this and other systems. Should you include Firebase, Stripe, or social logins? We already covered this. Via seamless integration, your smartphone application becomes smarter and more powerful with Moltech, enabling automation, real-time data flow, and expanded capability free from app architecture bloating.`,
            gradient: "linear-gradient(135deg, #FF6C37, #FF8A65)",
            icon: "streamline-ultimate:coding-apps-website-web-dev-api-cloud",
            techStack: ["logos:rest", "logos:graphql", "logos:oauth"],
        },
        {
            id: 7,
            title: "App Maintenance & Support",
            description: `The journey of your app does not end with its release. Our help and application maintenance guarantees that your mobile application remains secure, current, and running without flaws. We manage quick replies to user comments that are compatible with various operating systems or devices, which helps preserve compatibility changes, track performance, resolve issues, and apply updates. We customize our products depending on your business needs, monthly maintenance or 24-hour support. We also allow quick replies to user comments, so we maintain the excellent accessibility of your application. Moltech is still your partner; while we address stability, performance, and post-launch development, you can concentrate on expansion.`,
            gradient: "linear-gradient(135deg, #0078D4, #106EBE)",
            icon: "wpf:maintenance",
            techStack: ["logos:firebase", "logos:aws", "logos:crashlytics"],
        },
        {
            id: 8,
            title: "App Modernization & Migration",
            description: `Outdated apps can hurt user experience and security. Our app modernization and migration services help you revamp legacy mobile applications with modern UI, the latest technologies, and scalable architecture. Whether you want to migrate from a hybrid platform to native, update your tech stack, or improve performance, we make the transition smooth and efficient. We also assist in re-platforming apps for better scalability and maintainability. At Moltech, we breathe new life into your old apps—so you can meet current user expectations, stay competitive, and be future-ready.`,
            icon: "carbon:migrate",
            techStack: ["logos:aws", "logos:docker", "logos:microservices"],
        },
    ];

    const benefits = [
        {
            icon: "mdi:chart-line",
            title: "Boost Engagement",
            description: "Stay connected with customers 24/7.",
            color: "from-blue-500 to-blue-600",
        },
        {
            icon: "mdi:chart-bar",
            title: "Grow Revenue",
            description: "Drive more sales with seamless user experiences.",
            color: "from-green-500 to-green-600",
        },
        {
            icon: "mdi:restore",
            title: "Improve Retention",
            description: "App users return 3x more often.",
            color: "from-purple-500 to-purple-600",
        },
        {
            icon: "mdi:cog-outline",
            title: "Streamline Operations",
            description: "Automate and simplify key processes.",
            color: "from-orange-500 to-orange-600",
        },
        {
            icon: "mdi:flash-outline",
            title: "Strengthen Your Brand",
            description: "Stay top-of-mind on customers' phones.",
            color: "from-pink-500 to-pink-600",
        },
        {
            icon: "mdi:account-group-outline",
            title: "Gain Insights",
            description: "Track user behavior to make smarter decisions.",
            color: "from-indigo-500 to-indigo-600",
        },
    ];

    const serviceStep = [
        {
            icon: "mdi:magnify",
            title: "Discovery & Consultation",
            description:
                "We start by comprehending your target audience, market demands, and business objectives. This enables us to establish success metrics and create a plan that yields quantifiable results.",
            color: "#2DA4FF",
        },
        {
            icon: "mdi:map-outline",
            title: "Planning & Roadmapping",
            description:
                "Using wireframes to illustrate the user flow, choosing the appropriate tech stack (iOS, Android, or cross-platform), and defining the essential features, we turn your idea into a strategic plan.",
            color: "#5D5FEF",
        },
        {
            icon: "mdi:palette-outline",
            title: "UI/UX Design",
            description:
                "Our designers focus on usability, accessibility, and device consistency when creating smooth, aesthetically pleasing interfaces. An experience that your users will love is the aim.",
            color: "#AA48FF",
        },
        {
            icon: "mdi:code-tags",
            title: "Agile App Development",
            description:
                "Our developers create your app in sprints using clean, scalable code and contemporary tools, providing you with transparency, flexibility, and ongoing progress that you can monitor.",
            color: "#FF6C60",
        },
        {
            icon: "mdi:database-sync",
            title: "Backend & API Integration",
            description:
                "We ensure safe, dependable, and seamless performance by integrating robust backends and third-party services, such as CRMs, analytics, location tracking, and payment systems.",
            color: "#00C897",
        },
        {
            icon: "mdi:bug-check-outline",
            title: "Testing & Quality Assurance",
            description:
                "We run comprehensive QA across devices, platforms, and scenarios—resolving bugs, improving performance, and ensuring a flawless experience for real-world users.",
            color: "#FFAB00",
        },
        {
            icon: "mdi:cloud-upload",
            title: "App Store Deployment",
            description:
                "In order to guarantee a seamless approval process, we handle guidelines, metadata, and submission requirements as we prepare and publish your app to the App Store and Google Play.",
            color: "#7358F6",
        },
        {
            icon: "mdi:headset",
            title: "Post-Launch Support & Growth",
            description:
                "We manage submission requirements, guidelines, and metadata as we get your app ready for the App Store and Google Play to ensure a smooth approval process.",
            color: "#E04969",
        },
    ];

    const faqItems = [
        {
            title: "Who should consider Mobile Application Development services?",
            content: `<p>Businesses of any size looking to improve customer engagement, streamline operations, or expand digital presence should consider Mobile Application Development services. Investing in mobile app services can help you scale efficiently, whether you are a startup needing an MVP or an enterprise aiming to enhance customer experience through a custom mobile app.</p>`,
        },
        {
            title:
                "Why is investing in a custom mobile app important for my business?",
            content: `<p>A custom mobile app helps you directly reach customers, offer personalized experiences, and increase brand loyalty. With the rising use of smartphones, having your business available via a dedicated mobile app improves accessibility and positions you competitively in your industry.</p>`,
        },
        {
            title: "I already have a website. Do I need a mobile app?",
            content: `<p>Yes. While a mobile-responsive website is important, a mobile app offers enhanced user engagement, offline access, push notifications, and better performance, leading to improved customer retention and more frequent user interactions.</p>`,
        },
        {
            title:
                "What are the most common challenges businesses face before mobile app development?",
            content: `<p>Common challenges include:</p><ul><li>Unclear project scope and features</li><li>Choosing the right platform (iOS, Android, or cross-platform)</li><li>Budget and timeline estimation</li><li>Integrating the app with existing systems</li></ul><p>Our Mobile Application Development services help you clarify these areas with structured planning and phased development.</p>`,
        },
        {
            title: "Why choose your Mobile Application Development services?",
            content: `<p>We focus on user-centric design, scalable architecture, and clean, maintainable code, ensuring your app performs well and grows with your business. We also prioritize clear communication and provide regular updates to ensure that the app development process remains stress-free for you.</p>`,
        },
        {
            title: "How much does it cost to build a mobile app?",
            content: `<p>The cost varies based on features, platform, and complexity. We provide a transparent estimate after a detailed discovery call to align with your goals and budget for your custom mobile app development.</p>`,
        },
        {
            title: "Will you help with app store publishing and post-launch support?",
            content: `<p>Yes. Our Mobile App Development services include app store submission to the Apple App Store and Google Play, compliance with their guidelines, and post-launch maintenance to ensure smooth operation and timely updates.</p>`,
        },
        {
            title: "What type of mobile applications can you develop?",
            content: `<p>We develop native iOS and Android apps, cross-platform apps using React Native or Flutter, and progressive web apps (PWAs), ensuring your app aligns with your goals and your audience's needs.</p>`,
        },
        {
            title: "How long does it take to develop a mobile application?",
            content: `<p>Depending on the complexity and features, a typical custom app can take 8–20 weeks from discovery to launch. We follow an agile development process to ensure you can test early builds and adjust requirements during development.</p>`,
        },
        {
            title: "What Types of Mobile Apps Can You Develop?",
            content: `<p>We specialize in developing various types of mobile applications, including:</p><ul><li><strong>Native Apps:</strong> Built specifically for iOS or Android, offering superior performance and user experience</li><li><strong>Hybrid Apps:</strong> Cross-platform apps that work on both iOS and Android, reducing development time and cost</li><li><strong>Progressive Web Apps (PWAs):</strong> Web-based apps that provide a native app-like experience with lower development costs</li><li><strong>E-commerce Apps:</strong> Feature-rich apps with shopping carts, payment gateways, and push notifications</li><li><strong>On-Demand Apps:</strong> Apps for delivery, ride-sharing, or service booking tailored to your industry</li></ul>`,
        },
        {
            title: "How do you ensure app security and data protection?",
            content: `<p>We implement best practices, including data encryption, secure authentication, and compliance with industry standards, to protect user data and privacy.</p>`,
        },
    ];

    const caseStudies = [
        {
            // category: "Warehouse",
            title: "Clixz Mobile App",
            image: AppIcons.Whare6,
            description:
                "The app enables technicians to check warehouse stock, scan and verify installed instruments, and book stock transactions on the go. It supports both online and offline modes, allowing technicians to continue operations without internet connectivity, with automatic data sync once a connection is restored.",
            location: "Global",
            industry: "Warehouse",
            stats: [
                {
                    label: "Key Outcome",
                    value: "Reduced manual errors and boosted technician efficiency",
                },
            ],
            projectType: "Mobile App Development, UI/UX Design , Barcode Integration , Offline Capability ",
            technologies: [
                {
                    name: "React Native",
                    icon: "logos:react",
                    description: "Cross-platform mobile framework for Android and iOS deployment.",
                },
                {
                    name: "Redux",
                    icon: "logos:redux",
                    description: "Used for managing app-wide state efficiently.",
                },
                {
                    name: "Axios",
                    icon: "simple-icons:axios",
                    description: "For secure and structured API calls and syncing.",
                },
                {
                    name: "QR/Barcode Scanner",
                    icon: "gg:qr",
                    description: "Integrated barcode scanning tool for fast and accurate code reading.",
                },
                {
                    name: "Google Play Console",
                    icon: "logos:google-play-icon",
                    description: "Platform for managing Android app releases and analytics.",
                },
                {
                    name: "Apple App Store",
                    icon: "logos:apple-app-store",
                    description: "Deployment platform for publishing iOS apps and updates.",
                },
            ],
            link: "warehouse-management-app-case-study",
        },
        {
            // category: "Chemical Data Management, SaaS",
            title: "Echem Portal Inc B2B SaaS HRMS & Recruitment",
            image: AppIcons.HRMS2,
            description:
                "Moltech Solutions built a tailored HRMS and Recruitment portal for Echem Portal Inc. to simplify their hiring process. This B2B SaaS platform improves tracking, transparency, and automation across departments and reduces delays through real-time updates and AI resume parsing.",
            location: "Global",
            industry: "HRMS & Recruitment",
            stats: [

            ],
            projectType:
                "Custom Web Portal Development , AI Integration , SaaS Platform Development , Business Consulting",
            technologies: [
                {
                    name: "Microsoft .NET 8.0",
                    icon: "logos:dotnet",
                    description: "Modern backend framework for scalable enterprise apps.",
                },
                {
                    name: ".NET API",
                    icon: "material-symbols:api",
                    description: "RESTful APIs powering the recruitment workflow.",
                },

                {
                    name: "React JS",
                    icon: "logos:react",
                    description: "Frontend library for dynamic and responsive UI.",
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
                    description: "Stylesheets crafted for beautiful and responsive design.",
                },
                {
                    name: "Bootstrap",
                    icon: "logos:bootstrap",
                    description:
                        "Component framework for rapid and consistent UI development.",
                },
                {
                    name: "MS SQL Database",
                    icon: "simple-icons:microsoftsqlserver",
                    description: "Relational database for storing structured HR data.",
                },
                {
                    name: "IIS Hosting",
                    icon: "mdi:server",
                    description: "Secure and high-performance Microsoft web hosting.",
                },
                {
                    name: "Jenkins",
                    icon: "logos:jenkins",
                    description: "CI/CD server for deployment automation.",
                },
                {
                    name: "Python (QCR)",
                    icon: "logos:python",
                    description: "Used for AI-powered resume parsing and data extraction.",
                },
            ],
            link: "hrms-recruitment-portal-case-study",
        },
        {
            // category: "Hospitality & Tourism",
            title: "Heritage Resort Shark Bay – Digital Transformation",
            image: AppIcons.Heritage1,
            description:
                "The project aims to modernize the resort&apos;s website, enhance its visibility on search engines, and improve the overall digital user experience, which will lead to increased bookings, improved guest engagement, and easier content management for the client.",
            location: "Denham, Western Australia",
            industry: "Hospitality & Tourism",
            stats: [

            ],
            industry: "Hospitality, Travel & Tourism",
            projectType: "Website Redesign, CMS Integration, SEO",
            technologies: [
                {
                    name: ".NET Core",
                    icon: "logos:dotnet",
                    description: "Powerful cross-platform backend framework by Microsoft.",
                },
                {
                    name: "API Development",
                    icon: "material-symbols:api",
                    description: "Designing robust RESTful APIs for system integrations.",
                },
                {
                    name: "Next.js",
                    icon: "logos:nextjs-icon",
                    description: "React-based framework for server-side rendering and SEO.",
                },
                {
                    name: "JavaScript",
                    icon: "logos:javascript",
                    description: "Core programming language for interactive web apps.",
                },
                {
                    name: "HTML",
                    icon: "logos:html-5",
                    description: "Markup language for structuring content on the web.",
                },
                {
                    name: "SCSS",
                    icon: "vscode-icons:file-type-scss2",
                    description: "Style sheets for beautiful, responsive UI.",
                },
                {
                    name: "Bootstrap",
                    icon: "logos:bootstrap",
                    description: "Popular UI framework for quick and responsive design.",
                },

            ],
            link: "resort-website-redesign-case-study",
        },
        {
            // category: "Travel, Hospitality, Fuel & Services",
            title: "Pardoo Roadhouse – Digital Rebuild & SEO",
            image: AppIcons.Pardoo1,
            description:
                "Pardoo Roadhouse partnered with us to revamp their digital presence following the impact of Cyclone Ilsa. The goal was to modernize their website, improve search engine visibility, and enable easy content management. We delivered a fully redeveloped, mobile-friendly website that highlights their services, attractions, and facilities. A user-friendly CMS was integrated, and SEO best practices were implemented to enhance discoverability and drive visitor engagement.",
            location: "Pardoo, Western Australia",
            industry: "Travel, Hospitality, Fuel & Services",
            stats: [

            ],
            projectType: "Web Development , Modernization , Business Consulting",
            technologies: [
                {
                    name: ".NET Core",
                    icon: "logos:dotnet",
                    description: "Powerful cross-platform backend framework by Microsoft.",
                },
                {
                    name: "API Development",
                    icon: "material-symbols:api",
                    description: "Designing robust RESTful APIs for system integrations.",
                },
                {
                    name: "Next.js",
                    icon: "logos:nextjs-icon",
                    description: "React-based framework for server-side rendering and SEO.",
                },
                {
                    name: "JavaScript",
                    icon: "logos:javascript",
                    description: "Core programming language for interactive web apps.",
                },
                {
                    name: "HTML",
                    icon: "logos:html-5",
                    description: "Markup language for structuring content on the web.",
                },
                {
                    name: "SCSS",
                    icon: "vscode-icons:file-type-scss2",
                    description: "Style sheets for beautiful, responsive UI.",
                },
                {
                    name: "Bootstrap",
                    icon: "logos:bootstrap",
                    description: "Popular UI framework for quick and responsive design.",
                },


            ],
            link: "roadhouse-digital-transformation-case-study",
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
                    description: "Backend services managing events, users, and discounts.",
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
    ];

    const [selectedService, setSelectedService] = useState(services[0]);
    const [autoRotate, setAutoRotate] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (autoRotate) {
            intervalRef.current = setInterval(() => {
                setSelectedService((prev) => {
                    const currentIndex = services.findIndex((s) => s.id === prev.id);
                    const nextIndex = (currentIndex + 1) % services.length;
                    return services[nextIndex];
                });
            }, 3000);
        }

        return () => clearInterval(intervalRef.current);
    }, [autoRotate]);

    const handleCardClick = (service) => {
        setSelectedService(service);
        setAutoRotate(false);
        clearInterval(intervalRef.current);
    };

    return (
        <div className="mobile-app-services">
            <section className="hero-section">
                {/* Background Pattern */}
                <div className="background-pattern"></div>

                {/* Gradient Overlay */}
                <div className="gradient-overlay"></div>

                <div className="hero-container">
                    <div className="hero-grid">
                        {/* Content */}
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Transform Your Business Vision Into{" "}
                                <span className="gradient-text">
                                    Powerful Mobile Experiences
                                </span>
                            </h1>

                            <p className="hero-subtitle">
                                Custom Mobile App Development for iOS, Android & Cross-Platform
                                <br />
                                Designed for Your Business Success
                            </p>

                            {/* CTA Buttons */}
                            <Link className="service-btn" href="/contact-us">
                                <span>Let&apos;s Connect</span>
                                <Iconify icon="weui:arrow-filled" width={20} />
                            </Link>
                        </div>

                        {/* Visual Element */}
                        <div className="hero-visual">
                            <div className="card-wrapper">
                                <div className="bg-blur blue-blur"></div>
                                <div className="bg-blur purple-blur"></div>

                                <div className="visual-card">
                                    <div className="icon-wrapper">
                                        <Iconify icon="mdi:cellphone" className="visual-icon" />
                                    </div>
                                    <div className="visual-text">
                                        <h3>Mobile First</h3>
                                        <p>Building the future of mobile experiences</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="floating blue-float"></div>
                            <div className="floating purple-float"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="introduction-section">
                <div className="container">
                    <div className="intro-text">
                        <h2>Your Vision, Our Mobile Expertise</h2>

                        <div className="paragraphs">
                            <p>
                                Your customers are living on their smartphones in the{" "}
                                <span className="highlight">mobile-first environment</span> of
                                today, not just browsing. From banking and shopping to learning
                                and entertainment, mobile apps
                                <span className="highlight"> handle business everywhere</span>.
                                You already fall behind if your brand isn&apos;t visible on that
                                screen.
                            </p>
                            <p>
                                At <span className="highlight">Moltech Solution Inc.</span>, we
                                create mobile experiences that involve consumers and generate{" "}
                                <span className="highlight">tangible profits</span> rather than
                                just apps. Supported by a worldwide development team and based
                                in the USA, we assist startups and businesses in turning ideas
                                into{" "}
                                <span className="highlight">
                                    classy, scalable, and powerful iOS and Android apps
                                </span>
                                .
                            </p>
                            <p>
                                We bring your mobile vision to life with{" "}
                                <span className="highlight">
                                    strategy, speed, and scalability,
                                </span>{" "}
                                whether your project is introducing a new product, digitizing
                                your offerings, or rethinking your customer experience.
                            </p>
                        </div>

                        <div className="cta-box">
                            <Iconify icon="mdi:check-circle-outline" className="icon" />
                            <span>
                                Create an app your customers love, and watch as your company
                                expands.
                            </span>
                        </div>
                    </div>

                    <div className="impact-section">
                        <div className="badge purple">
                            <Iconify icon="mdi:lightbulb-on-outline" className="icon" />
                            <span>Business Impact</span>
                        </div>

                        <h3>
                            Why Mobile Apps Matter for
                            <span className="highlight"> Your Business?</span>
                        </h3>
                        <p className="subtitle">
                            Transform your business potential with mobile technology that
                            delivers real results.
                        </p>

                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="card-container">
                                        <div className={`icon-box ${benefit.color}`}>
                                            <Iconify icon={benefit.icon} className="icon white" />
                                        </div>
                                        <div className="content-part">
                                            <h4>{benefit.title}</h4>
                                            <p>{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="key-service-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="key-service-title">
                                Key Mobile App Development Services at{" "}
                                <span className="highlight">Moltech Solutions Inc.</span>
                            </div>
                            <div className="key-service-sub-title">
                                We offer a range of mobile app development services tailored to
                                your business needs.
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* Left Column: Service Cards */}
                        <div className="col-lg-6">
                            <div className="key-service-card-container">
                                {services.map((service, index) => (
                                    <div
                                        key={service.id}
                                        className="key-service-card-wrapper"
                                        onClick={() => handleCardClick(service)}
                                    >
                                        <div
                                            className={`key-service-card card-${index + 1} ${service.id === selectedService.id ? "active" : ""
                                                }`}
                                        >
                                            <div className="key-service-card-icon">
                                                <Iconify icon={service.icon} width={32} height={32} />
                                            </div>
                                            <div className="key-service-card-title">
                                                {service.title}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="col-lg-6">
                            <div className="key-service-content">
                                <div className="key-service-content-text">
                                    <div className="key-service-content-text-title">
                                        {selectedService.title}
                                    </div>
                                    <div
                                        className="key-service-content-text-description"
                                        dangerouslySetInnerHTML={{
                                            __html: selectedService.description,
                                        }}
                                    />
                                    {/* Tech Stack List */}
                                    {selectedService.techStack?.length > 0 && (
                                        <div className="key-service-tech-stack mt-3">
                                            <strong>Technology Stack:</strong>
                                            <div className="tech-stack-list">
                                                {selectedService.techStack.map((tech, idx) => (
                                                    <div className="tech-stack-item" key={idx}>
                                                        <Icon icon={tech} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CTASection />
            <ProcessSection
                steps={serviceStep}
                title="Our Mobile App Development Process"
                subTitle="From Concept to Effect: An Unambiguous, Cooperative Process"
                description={`<div className="description">
        <span style="color: #ef5323">Moltech Solutions Inc.</span> takes a flexible and open approach to turning
        your app concept into a dependable, user-focused product. We
        guarantee clarity, speed, and long-term value at every stage,
        whether you&apos;re creating an app from the ground up or updating
        an old one.
      </div>`}
            />
            <MobileSlider />
            <FeaturedCaseStudy caseStudies={caseStudies} />
            <ServiceFAQ
                items={faqItems}
                title="Our Mobile App Development Services"
            />
            <BranchFooter />
        </div>
    );
};

export default MobileAppDevelopmentPage;
