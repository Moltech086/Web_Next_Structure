"use client";
import React, { useRef, useState, useEffect } from "react";
import Images from "@/components/image/Image";
import { AppIcons } from "@/data/appIcons";
import Iconify from "@/components/ui/icons/Iconify";
import "../Service.scss";
import "./UIUXDesignAndDevPage.scss";
import ProcessSection from "@/components/processsection/ProcessSection";
import ServicesSection from "./components/serviceSection/ServiceSection";
import CTASection from "@/components/ctaSection/CTASection";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import { Icon } from "@iconify/react";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import FeaturedCaseStudy from "@/features/caseStudyPage/featuredCaseStudy/FeaturedCaseStudy";

const steps = [
    {
        icon: "mdi:magnify",
        title: "Discovery & Research",
        description: " We dive deep into your goals, users, and competitors.",
    },
    {
        icon: "hugeicons:ai-user",
        title: "User Journey Mapping",
        description:
            "Map real-life user paths to remove friction and uncover opportunities.",
    },
    {
        icon: "mdi:graph",
        title: "Wireframes & Prototypes",
        description:
            "Our designers create wireframes and interactive prototypes to visualize the product’s layout and functionality, allowing for early feedback and iteration.",
    },
    {
        icon: "ph:figma-logo-light",
        title: "Visual Design / UI Design",
        description:
            "We craft visually stunning, brand-aligned interfaces with a focus on usability, accessibility, and modern design principles.",
    },
    {
        icon: "mdi:code-tags",
        title: "Development & Integration",
        description:
            "Our developers bring the designs to life using robust technologies, ensuring seamless performance across devices and platforms.",
    },
    {
        icon: "fluent:box-search-20-regular",
        title: "Testing & Validation",
        description:
            "We conduct rigorous usability testing, A/B testing, and accessibility checks to ensure the product meets the highest standards.",
    },
    {
        icon: "material-symbols-light:rocket-launch-outline",
        title: "Launch & Optimization",
        description:
            "After launching, we provide ongoing support, monitoring performance and making improvements to keep your product competitive.",
    },
];

const faqItems = [
    {
        title: "Who should consider UI/UX design and development services?",
        content: `<p>If you own a startup, SaaS business, e-commerce platform, or enterprise application aiming to improve customer engagement, reduce bounce rates, and increase conversions, UI/UX design services are essential for you. A well-designed interface ensures your users can navigate your app or website intuitively, improving user satisfaction and retention. Whether you are launching a new digital product or looking to redesign your current platform, investing in UI/UX design and development will help your business stand out in a competitive market.</p>`,
    },
    {
        title: "What is the difference between UI design and UX design?",
        content: `<p>UI (User Interface) design focuses on the visual aspects—layouts, colors, typography, and interactive elements. UX (User Experience) design is about the user journey, logical navigation, and ensuring ease of use. While UI makes your app or site visually appealing, UX ensures it's practical and user-friendly. Both are essential to delivering a successful digital experience.</p>`,
    },
    {
        title: "Why is investing in UI/UX design important for my business?",
        content: `<p>High bounce rates, poor engagement, and low conversions often result from poor UI/UX. Investing in design ensures your site or app meets user expectations with intuitive navigation and appealing visuals. This improves customer satisfaction, shortens task times, and boosts brand perception—ultimately helping your business grow.</p>`,
    },
    {
        title: "What problems do UI/UX design and development solve?",
        content: `<ul><li>High user drop-off rates or low engagement</li><li>Confusing navigation or unclear calls to action</li><li>Inconsistent branding or visual design</li><li>Accessibility issues for users with disabilities</li><li>Negative feedback about usability or aesthetics</li><li>Low conversion rates despite good traffic</li></ul>`,
    },
    {
        title: "What will be delivered at the end of the UI/UX design process?",
        content: `<p>Deliverables often include:</p><ul><li>User research reports and personas</li><li>Customer journey maps</li><li>Wireframes and interactive prototypes</li><li>High-fidelity UI designs</li><li>Design systems and style guides</li><li>For development projects: coded website or app</li></ul>`,
    },
    {
        title: "How much does UI/UX Design and Development cost?",
        content: `<p>Costs vary based on project scope, customization, and revision cycles. After discussing your needs, we provide a transparent quote. Most agencies include 2–3 major revision rounds in the base cost.</p>`,
    },
    {
        title: "What makes your UI/UX Design and Development service unique?",
        content: `<p>We follow a user-centric, data-driven approach tailored to your goals. With clear communication, deep research, and continuous support, we ensure your product not only looks great but also performs effectively.</p>`,
    },
    {
        title: "How does UI/UX design improve customer retention?",
        content: `<p>When your platform is intuitive and enjoyable to use, users are more likely to return and recommend it. A clear interface, smooth navigation, and consistent branding foster trust and long-term engagement.</p>`,
    },
    {
        title: "What industries benefit from UI/UX design services?",
        content: `<p>Nearly all industries benefit from good UI/UX, including:</p><ul><li>E-commerce</li><li>Healthcare</li><li>Education</li><li>SaaS</li><li>Fintech</li><li>Travel</li><li>Logistics</li></ul><p>Whether launching an MVP or enhancing user experience, UI/UX design reduces frustration and boosts adoption.</p>`,
    },
    {
        title:
            "Do I need UI/UX design if I already have a developer building my app?",
        content: `<p>Yes. Developers focus on functionality, while UI/UX designers ensure that functionality is presented clearly and intuitively. Without proper design, even a feature-rich app can confuse users. A solid UI/UX foundation ensures your app is not only functional but also user-friendly and market-ready.</p>`,
    },
];

const caseStudies = [
    {
        // category: "Labor & Workforce",
        title: "LDC Workflow Management System",
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
            "Workflow Automation , Employer & Contract Management , Detailed Reporting , Role-Based Access Control",
        technologies: [
            {
                name: "React.js",
                icon: "logos:react",
                description: "Frontend developed using React.js for a fast, dynamic UI experience.",
            },
            {
                name: ".NET Core API",
                icon: "logos:dotnet",
                description: "Backend services powered by .NET Core API for scalable and efficient server-side logic.",
            },
            {
                name: "SQL Server",
                icon: "logos:mysql",
                description: "Structured relational database for storing and managing business-critical data.",
            },
            {
                name: "REST API Development",
                icon: "mdi:api",
                description: "RESTful APIs built for seamless communication between frontend and backend modules.",
            },
            {
                name: "HTML5, CSS, Bootstrap",
                icon: "logos:bootstrap",
                description: "Responsive UI built using semantic HTML5, modern CSS, and Bootstrap framework.",
            },
            {
                name: "JavaScript, TypeScript, jQuery",
                icon: "logos:typescript-icon",
                description: "Used across the platform for scripting, type safety, and DOM manipulation.",
            },
            {
                name: "Role-Based Authentication & Authorization",
                icon: "mdi:shield-lock-outline",
                description: "Secure login system with fine-grained role-based access controls.",
            },
            {
                name: "Modular Architecture",
                icon: "mdi:layers-triple-outline",
                description: "Scalable, maintainable modular structure using distributed services and repository pattern.",
            },
        ],
        link: "workflow-and-document-automation-platform-case-study",
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
            }
        ],
        projectType: "Timesheet Tracking , Team Planning , Backlog & Task Management , Role-Based Access , Report Generation",
        technologies: [
            {
                name: "React.js",
                icon: "logos:react",
                description: "Frontend developed using React.js for a fast, dynamic UI experience.",
            },
            {
                name: ".NET Core API",
                icon: "logos:dotnet",
                description: "Robust and secure backend built using scalable .NET Core APIs.",
            },
            {
                name: "SQL Server",
                icon: "logos:mysql",
                description: "Secure relational database used for storing and managing structured data.",
            },
            {
                name: "REST API Development",
                icon: "mdi:api",
                description: "RESTful API endpoints enable seamless frontend-backend communication.",
            },
            {
                name: "HTML5, CSS, Bootstrap",
                icon: "logos:bootstrap",
                description: "Responsive and accessible UI designed using HTML5, CSS3, and Bootstrap.",
            },
            {
                name: "JavaScript, TypeScript, jQuery",
                icon: "logos:typescript-icon", // You can change to logos:javascript or logos:jquery if preferred
                description: "Used for scripting logic, interactivity, and type-safe development.",
            },
            {
                name: "Secure Role-Based Authentication & Authorization",
                icon: "mdi:shield-lock-outline",
                description: "Granular access control with secure, role-based authentication across modules.",
            },
            {
                name: "Modular, Distributed Architecture",
                icon: "mdi:layers-triple-outline",
                description: "Engineered with a scalable and modular architecture using the Repository Pattern.",
            },
            {
                name: "Email Notification & Template Management",
                icon: "mdi:email-outline",
                description: "Automated notifications and customizable email templates for system communication.",
            },
        ],
        link: "project-collaboration-and-tracking-platform-case-study"
    },
    {
        // category: "Government",
        title: "SLA Web & Admin Portal",
        image: AppIcons.SLA1,
        description:
            "We built a user-centric web application and robust admin backend for SLA, enabling efficient membership management, booking processes, and resource management while providing SLA with detailed financial reporting and operational oversight through a structured, scalable portal..",
        location: "Singapore",
        industry: "Land Management & Geospatial",
        stats: [
            {
                label: "Key Outcome",
                value: "Digital transformation of membership and finance workflows",
            },
        ],
        projectType:
            "Web Portal Development , Admin Dashboard , Financial Reporting System , Zoom API Integration",
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
        // category: "Warehouse",
        title: "Clixz Mobile App",
        image: AppIcons.Clixz1,
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
        // category: "Technology Association",
        title: "SGTech Member Portal",
        image: AppIcons.smf1,
        description:
            "We developed a comprehensive member and event management system for SGTech, integrating admin and member portals with booking, membership, and financial management. This streamlined operations, reduced manual work, and provided members with self-service tools and event access..",
        location: "Singapore",
        industry: "Technology Association",
        stats: [
            {
                label: "Key Outcome",
                value:
                    "Centralized operations with self-service tools and scalable modules",
            },
        ],
        projectType: "Web Portal Development , Admin Dashboard Event Management System , Payment Gateway Integration",
        technologies: [
            {
                name: ".NET Core 6",
                icon: "logos:dotnet",
                description: "API backend for scalable and secure data handling.",
            },
            {
                name: "React.js",
                icon: "logos:react",
                description: "Used in both Admin and Web portals for dynamic UI.",
            },
            {
                name: "Next.js",
                icon: "logos:nextjs-icon",
                description: "Server-side rendering for fast, SEO-friendly frontend.",
            },
            {
                name: "MasterCard",
                icon: "logos:mastercard",
                description:
                    "Trusted global payment gateway enabling secure and fast transactions.",
            },
            {
                name: "Zoom API",
                icon: "akar-icons:zoom-fill",
                description: "Integrated for webinar and virtual event participation.",
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
                name: "Tailwind CSS",
                icon: "devicon:tailwindcss",
                description:
                    "Component framework for rapid and consistent UI development.",
            },
            {
                name: "ActiveCampaign API",
                icon: "mdi:email-fast-outline",
                description: "Used for marketing emails and automated notifications.",
            },
            {
                name: "MS SQL Server",
                icon: "simple-icons:microsoftsqlserver",
                description:
                    "Enterprise-level database to store structured member/event data.",
            },
            {
                name: ".NET Background Services",
                icon: "mdi:cog-sync-outline",
                description:
                    "Handles tasks like billing, scheduling, and report generation.",
            },
            {
                name: "SVN",
                icon: "mdi:source-branch",
                description: "Version control system used for codebase management.",
            },
        ],
        link: "membership-event-management-case-study",
    },
];

const UIUXDesignAndDevPage = () => {
    const sectionRef = useRef(null);
    const [startCount, setStartCount] = useState(false);

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
    return (
        <div className="ui-ux-design-wrapper">
            <div className="ui-ux-design">
                <div className="container">
                    <div className="top-title-wrapper">
                        <div className="common-page-title">
                            <div className="title">
                                <h1 className="highlight-text">
                                    Transforming Ideas
                                    <div className="tl"></div>
                                    <div className="bl"></div>
                                    <div className="br"></div>
                                    <div className="tr">
                                        <Iconify icon="streamline-cyber:cursor-arrow-double" />
                                    </div>
                                </h1>{" "}
                                into Seamless Digital Experiences with Our UI/UX Service.
                            </div>
                            <p className="main-content">
                                From wireframes to polished visuals, our UI/UX team brings
                                clarity, consistency, and creativity to every
                                touchpoint—turning your digital product into a user favorite
                            </p>
                        </div>
                        <div className="hero-banner-side">
                            <Images imagePath={AppIcons.MoltechSite} altText="ui-ux-banner
                            " />
                        </div>
                    </div>
                </div>
            </div>
            <section className="about-section">
                <div className="bg-decorator" />
                <div className="container">
                    <div className="text-center header">
                        <h2 className="title">
                            Crafting Digital Experiences That <span>Drive Results</span>
                        </h2>
                        <div className="divider" />
                    </div>

                    <div className="content">
                        <div className="left">
                            <p>
                                In the technologically advanced world of today, the design of
                                your product is generally the first and longest-lasting
                                impression of your brand. Beyond looks, our{" "}
                                <span className="highlight">
                                    UI/UX design and development services
                                </span>{" "}
                                at
                                <span className="highlight"> Moltech Solution Inc.</span>{" "}
                                create experiences that are user-friendly, appealing, and in
                                alignment with real user needs.
                            </p>
                            <p>
                                Whether you&apos;re starting a{" "}
                                <span className="highlight">mobile app</span>, a{" "}
                                <span className="highlight">SaaS platform</span>, or an{" "}
                                <span className="highlight">innovative business </span>{" "}
                                solution,
                                <span className="highlight">
                                    {" "}
                                    Moltech&apos;s UI/UX experts{" "}
                                </span>{" "}
                                work closely with you to translate ideas into meaningful
                                designs that support interaction and business objectives.
                            </p>
                            <p>
                                Every swipe, click, and scroll using{" "}
                                <span className="highlight">
                                    {" "}
                                    Moltech&apos;s UI/UX Design and Development services{" "}
                                </span>{" "}
                                helps to create a seamless user experience that captivates
                                consumers and drives customers to return to the business.
                            </p>
                        </div>

                        <div className="right">
                            <div className="feature-card blue">
                                <div className="icon-box">
                                    <Icon icon="mdi:account-group" className="icon" />
                                </div>
                                <div>
                                    <h3>User-Centered Design</h3>
                                    <p>
                                        We blend design thinking, visual innovation, and user
                                        research to create interfaces that are intuitive and
                                        engaging.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-card slate">
                                <div className="icon-box">
                                    <Icon icon="mdi:lightbulb-on" className="icon" />
                                </div>
                                <div>
                                    <h3>Innovation & Strategy</h3>
                                    <p>
                                        From concept to execution, we transform your ideas into
                                        meaningful designs that drive business success.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-card emerald">
                                <div className="icon-box">
                                    <Icon icon="mdi:target" className="icon" />
                                </div>
                                <div>
                                    <h3>Results-Driven</h3>
                                    <p>
                                        Every interaction is crafted to create seamless
                                        experiences that captivate users and drive measurable
                                        results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="uiux-section" ref={sectionRef}>
                <div className="container">
                    {/* Section Title */}
                    <div className="section-content">
                        <h3>
                            Why
                            <div className="highlight-text">
                                UI/UX Matters
                                <div className="tl"></div>
                                <div className="bl"></div>
                                <div className="br"></div>
                                <div className="tr">
                                    <Iconify icon="streamline-cyber:cursor-arrow-double" />
                                </div>
                            </div>{" "}
                            <br></br>
                            in Every Development Project
                        </h3>
                        <p>
                            Moltech UI/UX design and development services ensure your
                            product feels intuitive, engaging, and built for real users...
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-card-title">
                                <div className="icon-side">
                                    <Iconify icon="mdi:cellphone" />
                                </div>
                                <h3>Creates a strong first impression</h3>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-card-title">
                                <div className="icon-side">
                                    <Iconify icon="mdi:vector-square" />
                                </div>
                                <h3>Makes complex features easy to use</h3>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-card-title">
                                <div className="icon-side">
                                    <Iconify icon="mdi:draw" />
                                </div>
                                <h3>Bridges technology and user behavior</h3>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-card-title">
                                <div className="icon-side">
                                    <Iconify icon="mdi:monitor" />
                                </div>
                                <h3>Boosts engagement and user retention</h3>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-card-title">
                                <div className="icon-side">
                                    <Iconify icon="mdi:palette-outline" />
                                </div>
                                <h3>Reduces Support and Training Needs</h3>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-card-title">
                                <div className="icon-side">
                                    <Iconify icon="mdi:lightbulb-outline" />
                                </div>
                                <h3>Increases Adoption and Return on Investment</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ServicesSection />
            <CTASection />
            <ProcessSection
                steps={steps}
                title="Our UI UX Design Process"
                subTitle="From Insights to Impact—Our Design Journey:"
            />
            <section className="cps-section">
                <div className="container">
                    <h3 className="main-title">
                        Customer Problems We Solve in
                        <div className="highlight-text">
                            UI/UX Design &<div className="tl"></div>
                            <div className="bl"></div>
                            <div className="br"></div>
                            <div className="tr">
                                <Iconify icon="streamline-cyber:cursor-arrow-double" />
                            </div>
                        </div>{" "}
                        Development
                    </h3>
                    <div className="cps-card-section">
                        <div className="cps-card">
                            <div className="count">01</div>
                            <h3 className="card-title">
                                Confusing User Flows That Drive Users Away
                            </h3>
                            <p className="card-solution">
                                Do you ever find that consumers leave your app in the middle
                                of their experience? You are not the only one. Even users with
                                the most patience might become frustrated by workflows that
                                are complex. These journeys are untangled by Moltech, which
                                crafts straightforward and user-friendly flows that lead users
                                in a natural direction from the beginning to the end. A
                                happier user base, increased retention rates, and more
                                conversions are the results.
                            </p>
                        </div>
                        <div className="cps-card">
                            <div className="count">02</div>
                            <h3 className="card-title">
                                Inconsistent Design Across Web & Mobile
                            </h3>
                            <p className="card-solution">
                                Is there a difference in the way your product appears and
                                feels on each screen? How important is consistency? Through
                                the delivery of unified and responsive designs, we guarantee
                                that your brand will appear trustworthy and recognizable
                                regardless of the device or platform being used.
                            </p>
                        </div>
                        <div className="cps-card">
                            <div className="count">03</div>
                            <h3 className="card-title">
                                Visual Design Feels Outdated or Off-Brand
                            </h3>
                            <p className="card-solution">
                                The most crucial factor is your first impression. The
                                appearance of an out-of-date or off-brand product can quickly
                                undermine trust. Our designers give your product a new lease
                                on life by designing interfaces that are contemporary and
                                stylish. These interfaces foster an instant connection with
                                your audience and strengthen the identity of your business.
                            </p>
                        </div>
                        <div className="cps-card">
                            <div className="count">04</div>
                            <h3 className="card-title">
                                Low Engagement or Poor Conversion Rates
                            </h3>
                            <p className="card-solution">
                                Something is lacking if users are not taking action, such as
                                signing up, making purchases, or engaging with the content. We
                                investigate the &apos;why&apos; by utilizing behavioral
                                insights and frictionless navigation in order to revamp your
                                application with high-impact calls-to-action that contribute
                                to the achievement of genuine results.
                            </p>
                        </div>
                        <div className="cps-card">
                            <div className="count">05</div>
                            <h3 className="card-title">
                                Design Handoff Chaos Between Designers & Developers
                            </h3>
                            <p className="card-solution">
                                Are you sick of the never-ending back-and-forth and the things
                                that you have missed? We bridge the gap by providing
                                documentation and files that are clean, well-organized, and
                                ready for developers. By ensuring that everyone is on the same
                                page, our design systems expedite the development process and
                                reduce the amount of costly rework that is required.
                            </p>
                        </div>
                        <div className="cps-card">
                            <div className="count">06</div>
                            <h3 className="card-title">
                                Scaling the Product Breaks the Design
                            </h3>
                            <p className="card-solution">
                                There is a tendency for design to deteriorate as your product
                                grows. We make your experience future-proof by utilizing
                                scalable design systems and reusable components, which
                                guarantee that your application will continue to look and
                                function well, both now and in the future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <FeaturedCaseStudy caseStudies={caseStudies} />
            <ServiceFAQ items={faqItems} title="Our UI/UX Design Services" />
            <BranchFooter />
        </div>
    );
};

export default UIUXDesignAndDevPage;
