"use client";
import React, { useState, useEffect, useRef } from "react";
import { AppIcons } from "@/data/appIcons";
import Images from "@/components/image/Image";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";
import "./SoftwareTestingAndQAPage.scss";
import ProcessSection from "@/components/processsection/ProcessSection";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import CTASection from "@/components/ctaSection/CTASection";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";

const SoftwareTestingAndQAPage = () => {
    const logos = [
        AppIcons.seleniumTestLogo,
        AppIcons.playWrightLogo,
        AppIcons.cyrpressLogo,
        AppIcons.testCompleteLogo,
        AppIcons.ranorexLogo,
        AppIcons.loadRunnerLogo,
        AppIcons.soapUILogo,
        AppIcons.browserStackLogo,
        AppIcons.restAssuredLogo,
        AppIcons.appiumLogo,
    ];
    const services = [
        {
            title: "Functional Testing & Manual Testing",
            icon: "streamline-kameleon-color:settings-4",
            content:
                "At Moltech Solution Inc., we think that quality begins with gaining a grasp of how your software should function, followed by testing it with the goal of achieving the desired results.  In an array of situations, our functional and manual testing services ensure that every feature will work exactly as expected. To discover latent defects, inconsistencies, or logic errors that automated techniques might overlook, we duplicate the actions of real-world customers. Validating the business rules and conducting edge-case testing were just two of the ways that we ensured your trust in Every Release. You receive a team that tests with a purpose when you work with Moltech. This team focuses on quality, user flows, and stability to ensure that your software provides the experience that your consumers deserve.",
        },
        {
            title: "Automated Testing",
            icon: "streamline-kameleon-color:robot",
            content:
                "In the current era, developing programs demands precision and reliability. Absolute necessity is their quickness and accuracy. Moltech provides smart and scalable automated testing tools to help you simplify your quality assurance process. We create and update scripts that run quick tests of your application across many browsers, devices, and environments. Such functionality helps us to find problems early on and cut the need for human rework. Whether your needs call for end-to-end automation, regression testing, or integration of continuous integration and continuous delivery, our experts will guarantee that you obtain quicker releases without compromising quality. The automated testing Moltech offers will help you stay current with the needs of your market and deploy with confidence. Such testing will increase coverage, save you time, and lower costs.",
        },
        {
            title: "Performance & Load Testing",
            icon: "icon-park:speed-one",
            content:
                "Moltech guarantees that your applications will not only run as expected but also scale by means of its performance and load testing services. We replicate real-world traffic, stress test your systems, and find bottlenecks before your users ever do. Whether you are getting ready for a new release or seasonal traffic spikes, our help will enable you to fine-tune performance, maximize response times, and enhance system stability. Our team is able to provide you with practical insights going beyond statistics, even during periods of great demand, so that we can help you create perfect experiences. Moltech ensures your software operates efficiently, even when pushed to its limits.",
        },
        {
            title: "Security Testing & Vulnerability Assessment",
            icon: "streamline-freehand-color:security-shield-network",
            content:
                "In a world of growing cyber hazards, protecting your data and users is a must. Moltech offers complete security testing and vulnerability assessments to find flaws before attackers do. We guarantee your application satisfies the strictest security requirements, from data flow audits to penetration testing. We find and assist you in addressing XSS, SQL injection, compromised authentication, and more. Whether your field of work is SaaS, healthcare, or finance, our team supports your remaining compliant, safe, and ahead of risk. Moltech builds security in somewhat different ways than it bolts on.",
        },
        {
            title: "Usability Testing",
            icon: "logos:vueuse",
            content:
                "Apart from ensuring the program is functional, Moltech's usability analysis assures it is also easy to use. We can clear uncertainty and discomfort by means of actual user encounters, evaluation of interface clarity, and navigation technique testing. Whether it's a consumer portal, business dashboard, or mobile app, we can help you find usability problems compromising uptake. Our human-centered approach helps us to turn concepts into design modifications that are useful and efficient in raising retention, enjoyment, and interaction.   Not only is Moltech using your product, but it is also much valued. ed.",
        },
        {
            title: "Regression Testing",
            icon: "flat-color-icons:line-chart",
            content:
                "Every additional repair or modification can inadvertently ruin something that used to function.  Regression testing is thus essential, and Moltech controls it exactly. We meticulously retest current functionality after upgrades to ensure there are no gaps. Combining automated and hand techniques helps us to maintain continuity across releases, guarantee stability, and identify unexpected side effects. Our approach ensures that your application updates without adding downtime or regressions. Moltech enables you to fearlessly go ahead knowing that your former ability is still powerful, further enhanced with new features shining.",
        },
        {
            title: "Mobile App Testing",
            icon: "noto:mobile-phone",
            content:
                "Mobile users desire simplicity, speed, and perfect performance. Our area of expertise at Moltech is actual device mobile app testing on both Android and iOS platforms—not just simulations. We evaluate performance, compatibility, UI consistency, and utility under numerous network configurations and screen sizes. From download to daily use, our QA experts help ensure a flawless experience regardless of native, hybrid, or cross-platform nature. We uncover usability issues, crashes, and bugs before your clients do. Your Moltech mobile app is not only ready to wow but also strong and responsive.",
        },
        {
            title: "API & Integration Testing",
            icon: "catppuccin:folder-api",
            content:
                "Your program interacts with other systems via APIs and integrations; thus, it is not isolated.  Here at Moltech, we carefully check these connections to guarantee data security and accuracy. From REST and SOAP to outside interfaces like payment gateways or CRMs, our staff verifies request-response cycles, manages edge situations, and examines error handling under all circumstances. We guarantee flawless communication among services, especially in cases of complicated situations. API and integration testing from Moltech guarantees your backend's robustness, stability, and readiness to serve your business logic from top to bottom.",
        },
        {
            title: "User Acceptance Testing (UAT) Support",
            icon: "flat-color-icons:customer-support",
            content:
                "Your software doesn't start until your users declare it so. Full UAT support from Moltech helps you design, run, and validate the last step before go-live. To produce real-world test cases, guide testing sessions, and gather insightful comments, we carefully work with your stakeholders. Our staff guarantees the program satisfies business needs—not only technical requirements—so users feel competent and ready to implement. Moltech links the development and business teams for both customer-facing apps and a new ERP deployment. UAT becomes a seamless, empowering last check when we are with you, not a last-minute frenzy.",
        },
    ];

    const accordionData = [
        {
            title: "Unreliable Software",
            icon: "famicons:warning-outline",
            description:
                "Eliminate bugs and crashes with our thorough functional and regression testing.",
        },
        {
            title: "Poor User Experience",
            icon: "fluent:emoji-sad-24-regular",
            description:
                "Our usability testing ensures your software is intuitive and engaging for your users.",
        },
        {
            title: "Security Risks",
            icon: "game-icons:cracked-shield",
            description:
                "Protect sensitive data and maintain compliance with our robust security testing.",
        },
        {
            title: "Slow Performance",
            icon: "fluent:slow-mode-24-regular",
            description:
                "Optimize load times and scalability with our performance testing expertise.",
        },
        {
            title: "Delayed Launches",
            icon: "pajamas:rocket-launch",
            description:
                "Speed up development cycles with efficient automation and streamlined testing processes.",
        },
        {
            title: "High Maintenance Costs",
            icon: "streamline-freehand:money-coin-cash",
            description:
                "Catch issues early to reduce post-launch fixes and save on long-term costs.",
        },
    ];
    const steps = [
        {
            icon: "jam:task-list",
            title: "Discovery & QA Planning",
            description:
                " We begin by listening—really listening. We thoroughly examine your product vision, user journeys, and business goals to customize a QA approach that meets your specific requirements, rather than adopting a universal approach.",
        },
        {
            icon: "material-symbols:strategy-outline-rounded",
            title: "Test Strategy & Environment Setup",
            description:
                "We craft tailored test plans and set up the ideal environment—whether that’s automated tools, test labs, or staging platforms—ensuring everything is aligned for accurate, efficient testing.",
        },
        {
            icon: "tabler:automation",
            title: "Test Execution (Manual & Automated)",
            description:
                "Our experts blend human intuition with automation precision. We test for functionality, UI behavior, performance, security, and more—mirroring real-world usage to uncover what truly matters.",
        },
        {
            icon: "streamline:bug-virus-browser",
            title: "Bug Reporting & Open Communication",
            description:
                "No surprises. We keep you informed with transparent, real-time updates, clear defect reports, and collaborative QA dashboards—so you always know where things stand.",
        },
        {
            icon: "grommet-icons:folder-cycle",
            title: "Regression & Final QA Cycle",
            description:
                "Before every release, we go back—retesting fixed issues, ensuring past features still work, and giving your product the final polish it needs to launch with confidence.",
        },
        {
            icon: "bx:support",
            title: "Ongoing QA & Support",
            description:
                "Quality doesn’t stop at go-live. We stay with you—offering sprint-based QA, automation upkeep, and continuous improvement based on user feedback and evolving needs.",
        },
    ];

    const faqItems = [
        {
            title: "Who should consider using software testing and QA services?",
            content: "<p>Any business developing web, mobile, or custom software should consider software testing services to ensure its application is bug-free, user-friendly, and scalable. Startups launching MVPs, enterprises rolling out complex systems, or SaaS companies maintaining products can all benefit from QA testing to prevent revenue loss due to bugs or performance issues.</p>"
        },
        {
            title: "Why can’t we skip QA testing if developers test the software internally?",
            content: "<p>Developer testing often misses edge cases and usability issues. QA testers use structured methods like manual, automated, and performance testing to catch bugs early, ensuring your product is stable, secure, and ready for market.</p>"
        },
        {
            title: "Is QA testing only for big companies with large budgets?",
            content: "<p>No. QA and software testing services are crucial for businesses of all sizes. Fixing bugs post-release is more expensive and can damage your reputation. Cost-effective QA services help startups and SMEs ship reliable products and reduce long-term expenses.</p>"
        },
        {
            title: "What are the common pains businesses face without proper QA testing?",
            content: "<p>Common issues include frequent bugs in production, poor user experience, deployment delays, high maintenance costs, and negative reviews. Our QA services prevent these by catching issues early.</p>"
        },
        {
            title: "Can software testing help reduce overall development costs?",
            content: "<p>Yes. Early QA testing reduces rework and post-release bug fixing, which are more expensive. Identifying issues during development minimizes disruption and improves cost efficiency.</p>"
        },
        {
            title: "Do you provide both manual testing and automated testing?",
            content: "<p>Yes, we combine manual testing for usability and exploratory tests with automated testing for fast, scalable regression testing, ensuring efficiency and thorough coverage.</p>"
        },
        {
            title: "How do I know if my app needs QA services now?",
            content: "<p>If your app crashes often, is scaling, is ready for launch, needs performance/security testing, or has inconsistent UI/UX—it’s time for QA testing to ensure stability and reliability.</p>"
        },
        {
            title: "How do software testing and QA services improve my user experience?",
            content: "<p>QA testing finds UI issues, slow performance, and broken flows, allowing fixes that make your app smooth, fast, and user-friendly—boosting retention and satisfaction.</p>"
        },
        {
            title: "What industries can benefit from QA and software testing services?",
            content: "<p>Industries like SaaS, e-commerce, healthcare, fintech, education, and logistics benefit from QA to ensure software reliability, compliance, and optimal user experience.</p>"
        },
        {
            title: "Why should I choose Moltech for software testing services?",
            content: "<p>We offer fast, scalable, secure QA services with reduced time to market, fewer bugs, improved user experience, and seamless integration with your development team.</p>"
        },
        {
            title: "How do Software Testing & QA services integrate with my development team?",
            content: "<p>Our QA team collaborates using tools like Jira and Slack, participates in standups, and adapts testing strategies to align with your team for efficient, real-time quality checks.</p>"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isManuallySelected, setIsManuallySelected] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!isManuallySelected) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % services.length);
            }, 10000); // change slide every 3s
        }

        return () => clearInterval(intervalRef.current);
    }, [isManuallySelected, services.length]);

    const handleSlideClick = (index) => {
        setCurrentSlide(index);
        setIsManuallySelected(true);
        clearInterval(intervalRef.current);
    };

    return (
        <>
            <div className="testing-service-details">
                <div className="testing-service-hero-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="testing-service-details__content">
                                    <div className="testing-service-details__content__title">
                                        Ensure Flawless Software with <span className="highlight">Moltech&apos;s Expert Testing & QA </span>
                                        Services
                                    </div>
                                    <div className="testing-service-details__content__sub-title">
                                        At <span className="highlight">Moltech Solution Inc.</span>, we deliver top-notch software testing & QA services across the USA, helping businesses launch reliable, secure, and user-friendly software. Let&apos;s build quality together.
                                    </div>
                                    <Link className="service-btn" href="/contact-us">
                                        <span>Let&apos;s Connect</span>
                                        <Iconify icon="weui:arrow-filled" width={20} />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="testing-service-details__image">
                                    <Images imagePath={AppIcons.softwareTestingVector} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                            <div className="intro-img">
                                <Images imagePath={AppIcons.QaIntro} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                            <div className="testing-service-intro">
                                <p>
                                    At <span className="highlight">Moltech Solution Inc.</span>, we deliver top-notch software testing & QA services across the USA, helping businesses launch reliable, secure, and user-friendly software. Let&apos;s build quality together.
                                </p>
                                <p>
                                    Your software is typically the first—and occasionally
                                    only—touchpoint your clients use in the digital-first economy
                                    of today. One error, crash, or security flaw can quickly sour
                                    your name, undermine confidence, and cause income loss.
                                    According to studies, 88% of users uninstall an app after
                                    encountering problems; addressing problems after release can
                                    be up to 100x pricier than early discovery of them. Software
                                    testing and quality assurance therefore require a
                                    business-critical approach rather than only one that is
                                    technical.
                                </p>
                                <p>
                                    At <span className="highlight">Moltech Solution Inc.</span>, we tackle QA proactively, with a
                                    business-aligned bent. We examine your workflows, user
                                    behavior, and industry-specific demands to make sure your
                                    software is quick, functional, secure, and scalable—not only
                                    execute test scripts. Let&apos;s Connect
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testing-service-details marquee-sec">
                <div className="testing-service-hero-section">
                    <div className="logo-marquee">
                        <div className="marquee-inner">
                            {[...logos, ...logos].map((logo, i) => (
                                <div className="logo" key={i}>
                                    <Images imagePath={logo} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="testing-service-details">
                <div className="container slide-sec">
                    <div className="testing-service-details__features">
                        <h1 className="key-service-title">
                            Key Software Testing & QA Services
                        </h1>
                        <h2 className="key-service-sub-title">
                            We offer a range of software testing & QA services tailored to
                            your business needs.
                        </h2>
                    </div>
                    <div className="testing-service-details__features__content">
                        <div className="testing-service-key-card-container">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`testing-service-key-card ${index === currentSlide ? "active" : ""
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
                                                transform: `scale(${scale}) translateX(${position * 45
                                                    }%)`,
                                                zIndex: 100 - absPos,
                                                opacity: absPos > 2 ? 0 : 1,
                                                pointerEvents: absPos === 0 ? "auto" : "none",
                                            }}
                                        >
                                            <div className="description-icon-title">
                                                <Iconify icon={service.icon} />
                                                <div className="description-title">{service.title}</div>
                                            </div>
                                            <div className="description-content">
                                                {service.content}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <CTASection />
                <div className="testing-process-services">
                    <div className="">
                        <ProcessSection
                            steps={steps}
                            title="How We Deliver Software Testing & QA at Moltech"
                            subTitle=""
                            bgColor={"#f7f7f7"}
                        />
                    </div>
                    <div className="container">
                        <div className="key-service-sub-description">
                            With Moltech, QA isn&apos;t a phase—it&apos;s a promise. Moltech
                            ensures that your software consistently meets your users
                            expectations.
                        </div>
                    </div>
                </div>
                <div className="customer-challenges-section">
                    <div className="container">
                        <div className="section-header">
                            <h3 className="section-title">
                                Customer Challenges We helped them to solve for business
                            </h3>
                            <p className="section-subtitle">
                                Software glitches can derail your business. Moltech’s testing &
                                QA services address common pain points, helping you stay ahead:
                            </p>
                        </div>

                        <div className="challenges-grid">
                            {accordionData.map((item, index) => (
                                <div
                                    key={index}
                                    className="challenge-card"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="card-icon">
                                        <Iconify icon={item.icon} width="32" height="32" />
                                    </div>
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ServiceFAQ items={faqItems} title="Our Software Testing Services" />
            <BranchFooter />
        </>
    );
};

export default SoftwareTestingAndQAPage;
