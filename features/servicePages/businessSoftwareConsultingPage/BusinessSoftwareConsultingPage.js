"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import CTASection from "@/components/ctaSection/CTASection";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import FeaturedCaseStudy from "@/features/caseStudyPage/featuredCaseStudy/FeaturedCaseStudy";
import Images from "@/components/image/Image";
import { AppIcons } from "@/data/appIcons";
import Iconify from "@/components/ui/icons/Iconify";
import "../Service.scss";
import "./BusinessSoftwareConsultingPage.scss";

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
};

const BusinessSoftwareConsultingPage = () => {
    const steps = [
        {
            icon: "mdi:lightbulb-on-outline",
            title: "Discovery & Business Insight Mapping",
            description:
                "We start by listening. Through thoughtful discovery sessions, we explore your challenges, workflows,  team dynamics, and growth goals—ensuring we understand not just your technology but also your business context.",
            serviceImg: AppIcons.businessSc1,
        },
        {
            icon: "mdi:target",
            title: "Opportunity Identification & Prioritization",
            description:
                "Next, we uncover inefficiencies, integration gaps, or outdated tools—and prioritize initiatives based on business impact, urgency, and ROI.",
            serviceImg: AppIcons.businessSc2,
        },
        {
            icon: "mdi:account-check-outline",
            title: "Client Selection",
            description:
                "You review curated CVs, conduct interviews, and choose professionals who best fit your team and culture.",
            serviceImg: AppIcons.businessSc3,
        },
        {
            icon: "mdi:road-variant",
            title: "Software Roadmap & Solution Architecture",
            description:
                "We translate insights into a clear roadmap—defining the ideal tech stack, integration points, architecture, and phased implementation plan tailored to your needs.",
            serviceImg: AppIcons.businessSc4,
        },
        {
            icon: "mdi:chart-box-outline",
            title: "Strategic Recommendations with Budget & Timeline",
            description:
                "You’ll receive a transparent, actionable blueprint—with detailed timelines, cost estimates, and optional execution support from our expert team.",
            serviceImg: AppIcons.businessSc5,
        },
        {
            icon: "mdi:play-circle-outline",
            title: "Optional Execution by Moltech",
            description:
                "Ready to build? Our engineers can bring the roadmap to life—developing, integrating, and managing your custom solution from start to finish.",
            serviceImg: AppIcons.businessSc6,
        },
    ];

    const testimonials = [
        {
            image: AppIcons.Josh,
            text: `Moltech has helped me on several software development projects and always done a great job. He is highly knowledgeable in the field and always responsive. I highly recommend working with them!`,
            name: "- Josh Ferguson",
        },
        {
            image: AppIcons.Michael,
            text: `Enjoyed working with Moltech for about 2 years. Nigam and his team did excellent work on creating several web projects for my company using technologies such as SQL, ASP MVC, and mobile development. I highly recommend them for any development project you need.
`,
            name: "- Michael Usov",
        },
        {
            image: AppIcons.Mike,
            text: `Terrific work. Great product and terrific communication.Highly recommended. Thank you!`,
            name: "- Mike Ross",
        },
    ];

    const faqItems = [
        {
            title:
                "What is Business Software Consulting, and Why Should I Choose It for My Business?",
            content: `<p>Business software consulting involves assessing your business needs, recommending, designing, and implementing software solutions to optimize operations, enhance efficiency, and drive growth. It includes services like software selection, system integration, process automation, and digital transformation strategies. Businesses choose software consulting to streamline workflows, reduce costs, and stay competitive in a tech-driven market.</p>`,
        },
        {
            title: "How Much Does Business Software Consulting Cost ?",
            content: `<p>The cost of business software consulting varies depending on the project's scope, complexity, and duration. Simple assessments or software selection typically have lower costs, whereas comprehensive services such as system integration or digital transformation usually necessitate a larger investment. We provide transparent pricing and customized plans to suit your budget.</p>`,
        },
        {
            title:
                "Why Do I Need Software Consulting When I Can Choose Software Myself?",
            content: `<p>Business software consulting saves time, reduces risks, and ensures optimal results by:</p><ul><li><strong>Expert Guidance:</strong> We identify software that aligns with your specific business needs.</li><li><strong>Cost Efficiency:</strong> Avoid costly mistakes from choosing incompatible or overpriced software.</li><li><strong>Seamless Integration:</strong> Ensure new software integrates with existing systems without disruptions.</li><li><strong>Training and Support:</strong> Provide staff training and ongoing support for smooth adoption.</li></ul>`,
        },
        {
            title:
                "What Are the Common Pain Points in Software Implementation, and How Do You Address Them?",
            content: `<p>Software implementation can be challenging, but we mitigate common issues:</p><ul><li><strong>Resistance to Change:</strong> We provide change management strategies and training to ensure staff adoption.</li><li><strong>Integration Challenges:</strong> We ensure seamless integration with existing systems, avoiding data silos.</li><li><strong>Budget Overruns:</strong> We plan meticulously to stay within budget and avoid hidden costs.</li><li><strong>Downtime and Disruptions:</strong> We implement solutions with minimal impact on daily operations.</li><li><strong>Security Risks:</strong> We prioritize secure configurations and compliance with regulations like GDPR and HIPAA.</li></ul>`,
        },
        {
            title: "Do You Provide Ongoing Support After Software Implementation?",
            content: `<p>Yes, we offer comprehensive post-implementation support, including:</p><ul><li>Regular software updates and maintenance</li><li>Troubleshooting and technical support</li><li>Staff training to maximize software utilization</li><li>Performance monitoring to ensure optimal functionality</li><li>Scalability planning for future growth</li></ul>`,
        },
        {
            title: "What types of software solutions can you help with?",
            content: `<ul><li>Custom software development</li><li>CRM and ERP implementation</li><li>Cloud migration and integration</li><li>Legacy system modernization</li><li>Process automation and workflow optimization</li></ul>`,
        },
        {
            title: "Why is Business Software Consulting important for my business?",
            content: `<p>Many businesses struggle with inefficient processes or software that doesn’t fit their needs, leading to wasted time, low productivity, and operational bottlenecks. Business Software Consulting helps you identify the right technology solutions, align them with your workflows, and ensure your investment delivers measurable ROI.</p>`,
        },
        {
            title:
                "We already have software systems in place. Do we still need software consulting?",
            content: `<p>Yes. Our Business Software Consulting services help evaluate your current systems to identify inefficiencies, gaps, or opportunities for automation and cost savings. Whether you need integration with new tools, optimization, or complete digital transformation, we help you get the most out of your existing systems.</p>`,
        },
        {
            title:
                "How do I know if I need Business Software Consulting or Custom Software Development?",
            content: `<p>If you are unsure of what software will best fit your business goals, need to analyze your current processes, or require an expert technology roadmap, you need Business Software Consulting. If you already have a clear solution in mind and want it built, you need Custom Software Development.</p>`,
        },
        {
            title: "What is your process during Business Software Consulting?",
            content: `<p>We begin with a discovery session to understand your business goals, current processes, and pain points. We analyze your systems, identify opportunities for improvement, and deliver a clear technology strategy with actionable steps, including recommendations for software solutions and potential development needs.</p>`,
        },
        {
            title: "How long does a Business Software Consulting engagement take?",
            content: `<p>Depending on the size and complexity of your business, it typically takes 2–6 weeks to complete a consulting engagement, from discovery to delivering your custom software strategy.</p>`,
        },
        {
            title:
                "Will you help with software selection and implementation after consulting?",
            content: `<p>Yes. We assist in identifying the right tools and can handle implementation, integration, and training to ensure your new software is adopted successfully, ensuring you receive full value from your investment.</p>`,
        },
    ];

    const caseStudies = [
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
            // category: "Chemical Data Management, SaaS",
            title: "Echem Portal Inc",
            image: AppIcons.CentralizeSystem1,
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
            // category: "Technology Association",
            title: "SGTech – Member & Event Management System",
            image: AppIcons.sgTech1,
            description:
                "We developed a comprehensive member and event management system for SGTech, integrating admin and member portals with booking, membership, and financial management. This streamlined operations, reduced manual work, and provided members with self-service tools and event access.",
            location: "Singapore",
            industry:
                "Technology Association",
            stats: [

            ],
            projectType:
                "Web Portal Development , Admin Dashboard , Event Management System , Payment Gateway Integration",
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
        {
            category: "SaaS / Chemical Compliance",
            title: "EchemPortal – Centralized Operational System",
            image: AppIcons.CentralizeSystem1,
            description:
                "Built a secure and modular hub for managing shared user roles, exception logs, schedulers, and integration settings across EchemPortal's multi-app SaaS ecosystem.",
            location: "Admins, Developers, Product Teams",
            industry: "SaaS, Chemical Compliance, System Architecture",
            stats: [


            ],
            projectType: "Centralized System Architecture, Role Management, Multi-App Integration",
            technologies: [
                {
                    name: "React",
                    icon: "logos:react",
                    description: "JavaScript library for building fast, component-based user interfaces.",
                },
                {
                    name: ".NET Core",
                    icon: "logos:dotnet",
                    description: "Cross-platform backend framework for scalable server-side applications.",
                },
                {
                    name: "MongoDB",
                    icon: "logos:mongodb-icon",
                    description: "Flexible NoSQL database for storing JSON-like dynamic data.",
                },
                {
                    name: "MS SQL",
                    icon: "logos:microsoft-sql-server",
                    description: "Structured database management system for reliable transactions.",
                }
            ],
            link: "centralized-operations-management-platform-case-study"
        }
        ,
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndexTestimonial, setActiveIndexTestimonial] = useState(0);
    // Inside the component
    const testimonialRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndexTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    useEffect(() => {
        const el = testimonialRef.current;
        if (!el) return;
    }, [activeIndexTestimonial]);

    return (
        <div className="staff-augmentation-wrapper">
            <div className="staff-augmentation-wrapper_hero">
                <div className="container">
                    <div className="bg-overlay" />
                    <div className="bg-image"></div>

                    <div className="staff-augmentation-wrapper_hero_hero-section">
                        {/* Left Content */}
                        <div className="staff-augmentation-wrapper_hero_hero-section_content-side">
                            <h1>
                                Transform Your Business Operations with Expert Software
                                Consulting
                            </h1>
                            <h2>
                                Partner with Moltech Solutions to streamline processes, boost
                                productivity, and drive growth through strategic software
                                implementation and optimization.
                            </h2>
                            <Link className="service-btn" href="/contact-us">
                                <span>Let&apos;s Connect</span>
                                <Iconify icon="weui:arrow-filled" width={20} />
                            </Link>
                        </div>

                        {/* Sliding Testimonial Section */}
                        <div>
                            <div className="staff-augmentation-wrapper_hero_hero-section_client-testimonial-sec">
                                <div
                                    className="testimonial"
                                    ref={testimonialRef}
                                    key={activeIndexTestimonial}
                                >
                                    <Images
                                        imagePath={testimonials[activeIndexTestimonial].image}
                                        altText="Staff Augmentation Image"
                                    />
                                    <p>{testimonials[activeIndexTestimonial].text}</p>
                                    <h3 className="name">
                                        {testimonials[activeIndexTestimonial].name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="staff-augmentation-wrapper_main-content">
                    <div className="staff-augmentation-wrapper_main-content_content-side">
                        <div className="staff-augmentation-wrapper_main-content_content-side_top-title">
                            <h3
                                className="staff-augmentation-wrapper_main-content_content-side_top-title_title"
                            >
                                Accelerate Growth with On-Demand Tech Talent
                            </h3>
                        </div>
                        <div
                            className="staff-augmentation-wrapper_main-content_content-side_center-content"
                        >
                            <p>
                                From sales and accounting to customer service and supply
                                chains, software drives all business activity in the digital
                                era. However, most companies struggle with off-the-shelf
                                software that falls short of their requirements, manual
                                processes that impede efficiency, and systems that lack
                                interoperability. Wasted hours, annoyed teams, and lost
                                business prospects follow from this.
                            </p>
                            <p>
                                <span className="highlight-text">
                                    Business Software Consulting Services
                                </span>{" "}
                                exists to address that. It&apos;s about matching your software
                                to your company, not pressuring it to change with technology.
                                The correct consulting partner guarantees everything runs as
                                you expand, points out areas where your present tools fall
                                short, and suggests superior solutions catered to your aims.
                            </p>
                            <p>
                                <b>
                                    <span className="highlight">Moltech Solutions Inc.</span>{" "}
                                    can help you in that area.
                                </b>
                            </p>
                            <p>
                                We become your strategic{" "}
                                <span className="highlight">technology partner;</span> we are
                                not only counselors. Our staff directly interacts with you to
                                grasp your operations, issues, and development strategies.
                                Whether your company is{" "}
                                <span className="highlight">expanding</span> and attempting to{" "}
                                <span className="highlight">
                                    modernize out-of-date systems
                                </span>{" "}
                                or a startup aiming to{" "}
                                <span className="highlight">automate tasks,</span> we assist
                                you in making wise{" "}
                                <span className="highlight">software decisions</span> that
                                produce actual outcomes.
                            </p>
                            <p>
                                <b>At Moltech, our role goes beyond just picking tools:</b>
                            </p>
                            <ul>
                                <li>
                                    We analyze your current systems and identify pain points.
                                </li>
                                <li>
                                    We recommend or design solutions that fit your workflow and
                                    budget.
                                </li>
                                <li>
                                    We ensure integration, avoiding data silos and process
                                    disruptions.
                                </li>
                                <li>
                                    We support your team, ensuring adoption, training, and
                                    long-term success.
                                </li>
                            </ul>
                            <p>
                                <b>
                                    With Moltech by your side, software becomes a growth
                                    enabler, not a roadblock.
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className="staff-augmentation-wrapper_main-content_img-side">
                        <Images
                            imagePath={AppIcons.Consulting}
                            altText="Custom Software Development"
                        />
                    </div>
                </div>
                <div className="services-augmentation">
                    <div className="center-title">
                        <h3 className="title">
                            Our Expert Software Consulting Services
                        </h3>
                        <p>
                            <span className="highlight">Moltech Solution Inc.</span> offers
                            flexible staff augmentation solutions that strengthen your
                            development team, which are utilized by American companies.
                        </p>
                       
                        <p>
                            At Moltech, we offer real talent suitable for your{" "}
                            <span className="highlight">
                                {" "}
                                objectives, culture, and technological stack
                            </span>
                            , not only the number of seats. From{" "}
                            <span className="highlight">temporary assistance</span> to{" "}
                            <span className="highlight">long-term support</span>, we
                            personalize our approach to your specific needs. Our U.S.
                            presence and worldwide delivery ability offer the ideal
                            combination of{" "}
                            <span className="highlight">
                                speed, economic benefits, and specialization
                            </span>
                            .
                        </p>
                    </div>

                    <div className="services-augmentation_card-wrapper">
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-01"
                        >
                            <div
                                className="d-flex"
                                style={{ gap: "1rem", alignItems: "center" }}
                            >
                                <div className="icon-box">
                                    <Iconify icon="material-symbols:strategy" />
                                </div>
                                <h3 className="card-title">Software Strategy & Planning</h3>
                            </div>
                            <p>
                                A concept, not code, is the starting point for excellent
                                software. Working closely with you, Moltech Solutions Inc.
                                understands your company inside and out before suggesting any
                                technology. We concentrate on matching your long- and
                                short-term objectives with the appropriate software road map.
                                Whether your company is growing, streamlining, or starting
                                again, our strategy sessions help you find what&apos;s holding
                                it back and how the correct digital tools might propel your
                                organization. Buzzwords and formula solutions are not what we
                                advocate—just sensible, doable ideas meant for actual business
                                impact. Knowing that technology will support, not impede, your
                                development will help you to move ahead boldly with direction,
                                budget, and priorities clear-cut.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-02"
                        >
                            <div
                                className="d-flex"
                                style={{ gap: "1rem", alignItems: "center" }}
                            >
                                <div className="icon-box">
                                    <Iconify icon="mdi:map-marker-path" />
                                </div>
                                <h3 className="card-title">
                                    {" "}
                                    Digital Transformation Roadmapping
                                </h3>
                            </div>
                            <p>
                                Digital change is more than just adding new technology to your
                                business. It also means changing how it works. Here at
                                Moltech, we help you make a plan for how to get from where you
                                are now to where you want to be. First, we look at your
                                existing goals, systems, and procedures. Our next step is to
                                make a thorough plan that is both creative and practical. We
                                can help you plan and carry out your project carefully,
                                whether it&apos;s making new digital experiences, managing
                                tasks, or setting up cloud The result was a change that helps
                                your employees be more flexible and gets your business ready
                                for the future. It wasn&apos;t too hard, but it gave them more
                                power.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-03"
                        >
                            <div
                                className="d-flex"
                                style={{ gap: "1rem", alignItems: "center" }}
                            >
                                <div className="icon-box">
                                    <Iconify icon="mdi:robot-industrial" />
                                </div>
                                <h3 className="card-title"> Process Automation Consulting</h3>
                            </div>
                            <p>
                                Moltech automates routine, time-consuming tasks repeated over
                                and develops clever solutions for them. This frees your staff
                                to concentrate on more critical tasks. Whether they include
                                authorizations, data entry, or customer correspondence, we
                                create simple-to-set-up automated processes with guaranteed
                                measured efficiency. We make technology simple and scalable;
                                hence, it won&apos;t be too difficult for you to grasp. Apart
                                from saving time, automation helps to reduce errors, improve
                                consistency, and create space for fresh ideas. We guide you
                                toward less effort and more intelligent work. Systems, if
                                replaced, can
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-04"
                        >
                            <div
                                className="d-flex"
                                style={{ gap: "1rem", alignItems: "center" }}
                            >
                                <div className="icon-box">
                                    <Iconify icon="mdi:update" />
                                </div>
                                <h3 className="card-title">
                                    {" "}
                                    Legacy System Evaluation & Modernization
                                </h3>
                            </div>
                            <p>
                                Older systems, if replaced, can drain resources, pose risks,
                                and hinder development. Moltech closely examines your old
                                software to determine what needs replacement and what merits
                                preservation. requires upgrading. We provide wise, reasonably
                                priced modernization proposals that minimize disturbance; we
                                do not jump to rebuild everything. Re-platforming,
                                restructuring, or integrating with contemporary solutions—we
                                future-proof your systems without sacrificing years of
                                investment. As a result, you will experience faster
                                performance, more robust security, and technology that is
                                finally consistent with your company vision.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-05"
                        >
                            <div
                                className="d-flex"
                                style={{ gap: "1rem", alignItems: "center" }}
                            >
                                <div className="icon-box">
                                    <Iconify icon="mdi:layers-outline" />
                                </div>
                                <h3 className="card-title">
                                    {" "}
                                    Technology Stack & Architecture Consulting
                                </h3>
                            </div>
                            <p>
                                Selecting the appropriate tech stack is a business-critical
                                rather than merely technical choice. Moltech assists you in
                                choosing and designing the appropriate mix of tools,
                                frameworks, and platforms to provide a strong, scalable basis
                                for your program. We walk you through decisions that combine
                                creativity, performance, and maintainability, whether you are
                                developing new products or expanding current systems. We keep
                                things sensible—no showy trends, no overreaching engineering.
                                We make sure the design fits future growth as well as present
                                needs. We make sure that selecting the wrong stack
                                doesn&apos;t cause momentum to fade or time or money to be
                                lost.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-06"
                        >
                            <div
                                className="d-flex"
                                style={{ gap: "1rem", alignItems: "center" }}
                            >
                                <div className="icon-box">
                                    <Iconify icon="mdi:checkbox-marked-circle-outline" />
                                </div>
                                <h3 className="card-title"> Enterprise Software Selection</h3>
                            </div>
                            <p>
                                Having thousands of tools available on the market makes
                                selecting the correct program daunting. Moltech provides order
                                among the anarchy. We assist you in defining your needs,
                                assessing the best-fit solutions, and walking you through the
                                choosing process so you avoid underdelivery or overpayment. We
                                assist you in evaluating ERPs, CRMs, industry-specific
                                systems, or providing vendor-neutral guidance based on actual
                                business requirements. We also take into account how new
                                programs match your current tech setup so you avoid having
                                disgruntled teams or disconnected systems. Our intent is Our
                                aim is to help you choose tools that fit your company goals
                                and operate well in practical environments.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-07"
                        >
                            <div
                                className="d-flex"
                                style={{ gap: "1rem", alignItems: "center" }}
                            >
                                <div className="icon-box">
                                    <Iconify icon="mdi:calculator-variant" />
                                </div>
                                <h3 className="card-title">
                                    {" "}
                                    Custom Software Scoping & Cost Estimation
                                </h3>
                            </div>
                            <p>
                                You have a concept, but to make it into a product, you will
                                need to plan it out. When you collaborate with Moltech, we
                                will assist you in planning the features, operations, and
                                development of your custom software. To minimize needless and
                                expensive rework in the future, we define features, workflows,
                                and user requirements through in-depth exploration sessions.
                                We then give you a precise estimate of the time, money, and
                                technical complexity involved. There are no ambiguous
                                promises; rather, there are clearly defined scopes that
                                provide your software project with the solid foundation it
                                requires to be successful.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-08"
                        >
                            <div
                                className="d-flex"
                                style={{ gap: "1rem", alignItems: "center" }}
                            >
                                <div className="icon-box">
                                    <Iconify icon="mdi:lan-connect" />
                                </div>
                                <h3 className="card-title">
                                    {" "}
                                    System Integration & Implementation
                                </h3>
                            </div>
                            <p>
                                Separated records and fragmented tools silently undermine
                                productivity. Moltech contributes to the wholeness of
                                everything. We design dependable and secure interfaces that
                                make your technology ecosystem function as a single entity,
                                whether it be connecting warehouse systems with eCommerce
                                platforms or merging your customer management system with your
                                finance software. We offer support for full implementation,
                                which includes everything from the configuration of users and
                                the system to testing and rollout. We take a method that
                                ensures your team receives the necessary training and
                                assistance while minimizing the amount of inconvenience to
                                your organization. What was the end result? a business that
                                operates more efficiently than it ever has before, as well as
                                systems that communicate with one another.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-09"
                        >
                            <div
                                className="d-flex"
                                style={{ gap: "1rem", alignItems: "center" }}
                            >
                                <div className="icon-box">
                                    <Iconify icon="mdi:database-import" />
                                </div>
                                <h3 className="card-title">Data Migration & Management</h3>
                            </div>
                            <p>
                                Moving data is not an easy operation, although it is the
                                lifeblood of your company. At Moltech, we ensure that the
                                process of data migration is safe, uncomplicated, and
                                stress-free. Whether you are migrating from an older system or
                                integrating data from numerous sources, we will make sure that
                                your data is cleansed, mapped accurately, and validated
                                before, during, and after the transfer process. Our services
                                are not limited to merely relocating. We also assist you in
                                effectively managing your data. For this reason, it is
                                necessary to design appropriate structures, access
                                restrictions, and performance standards so that your data
                                continues to be dependable and usable over time. You
                                won&apos;t be surprised, and you won&apos;t lose any records;
                                all you&apos;ll get is reliability and peace of mind.
                            </p>
                        </div>
                        <div
                            className="services-augmentation_card-wrapper_card"
                            
                            id="section-10"
                        >
                            <div
                                className="d-flex"
                                style={{ gap: "1rem", alignItems: "center" }}
                            >
                                <div className="icon-box">
                                    <Iconify icon="mdi:shield-check" />
                                </div>
                                <h3 className="card-title">
                                    Compliance & Security Consulting
                                </h3>
                            </div>
                            <p>
                                In this era of digital technology, security and compliance are
                                essential. Moltech can help you understand your company&apos;s
                                requirements, where your current processes may be lacking, and
                                how to fix them. We will help you through the practical
                                actions necessary to remain compliant and safe, whether it be
                                with data protection legislation such as the General Data
                                Protection Regulation (GDPR) or with industry-specific
                                standards. Whether it be through policy audits or assessments
                                of access control, our objective is to lessen the risk you
                                face without complicating your technology. If you make
                                security an integral element of your software strategy rather
                                than an afterthought, we will assist you in establishing trust
                                with your customers, partners, and regulators.
                            </p>
                        </div>
                    </div>
                    <div className="services-augmentation__sidebar">
                        <ul>
                            <li onClick={() => scrollToSection("section-01")}>
                                Software Strategy & Planning
                            </li>
                            <li onClick={() => scrollToSection("section-02")}>
                                Digital Transformation Roadmapping
                            </li>
                            <li onClick={() => scrollToSection("section-03")}>
                                Process Automation Consulting
                            </li>
                            <li onClick={() => scrollToSection("section-04")}>
                                Legacy System Evaluation & Modernization
                            </li>
                            <li onClick={() => scrollToSection("section-05")}>
                                Technology Stack & Architecture Consulting
                            </li>
                            <li onClick={() => scrollToSection("section-06")}>
                                Enterprise Software Selection
                            </li>
                            <li onClick={() => scrollToSection("section-07")}>
                                Custom Software Scoping & Cost Estimation
                            </li>
                            <li onClick={() => scrollToSection("section-08")}>
                                System Integration & Implementation
                            </li>
                            <li onClick={() => scrollToSection("section-09")}>
                                Data Migration & Management
                            </li>
                            <li onClick={() => scrollToSection("section-10")}>
                                Compliance & Security Consulting
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CTASection />
            <div className="services-augmentation">
                <div className="container">
                    <div className="center-title">
                        <h3 className="title">
                            Our Consulting Process: From{" "}
                            <span className="highlight"> Discovery </span> to{" "}
                            <span className="highlight">Execution</span>
                        </h3>
                        <h3 className="key-sub-title">
                            A Streamlined Approach That Drives Real Results
                        </h3>
                        <p>
                            <span className="highlight">At Moltech Solutions Inc.,</span> we
                            believe the best software solutions begin with a profound
                            understanding of your business. Our consulting process is
                            designed to be{" "}
                            <span className="highlight">straightforward</span>,
                            <span className="highlight"> collaborative</span>, and{" "}
                            <span className="highlight">results-driven</span>—ensuring you
                            get clarity, not complexity.
                        </p>
                    </div>
                </div>
            </div>

            <section className="steps-wrapper-bussiness">
                <div className="steps-container">
                    <div className="step-list">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`step-item ${activeIndex === index ? "active" : ""
                                    }`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="step-icon">
                                    <Iconify icon={step.icon} />
                                </div>
                                <span>{step.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="step-content">
                        <h3>{steps[activeIndex].title}</h3>
                        <p>{steps[activeIndex].description}</p>
                        <div className="service-img">
                            <Images
                                imagePath={steps[activeIndex].serviceImg}
                                altText=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <FeaturedCaseStudy caseStudies={caseStudies} />
            <ServiceFAQ
                items={faqItems}
                title="Our Business Software Consulting Services"
            />
            <BranchFooter />
        </div>
    );
};

export default BusinessSoftwareConsultingPage;
