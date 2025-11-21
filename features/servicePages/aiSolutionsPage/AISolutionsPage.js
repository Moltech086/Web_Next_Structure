"use client";
import React, { useEffect, useRef, useState } from "react";
import Images from "@/components/image/Image";
import { AppIcons } from "@/data/appIcons";
import Iconify from "@/components/ui/icons/Iconify";
import Link from "next/link";
import "./AISolutionsPage.scss";
import "../ServiceSlider.scss";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import CTASection from "@/components/ctaSection/CTASection";
import { Icon } from "@iconify/react";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import FeaturedCaseStudy from "@/features/caseStudyPage/featuredCaseStudy/FeaturedCaseStudy";

const reasons = [
  {
    icon: "fluent:people-team-16-regular",
    title: "Identify high-impact AI opportunities",
    description:
      "Identify high-impact AI opportunities and prioritize them based on business value, risk, and alignment with your goals.",
    highlight: "",
  },
  {
    icon: "material-symbols:rocket-launch-outline",
    title: "Reduce trial and error in AI investment",
    description:
      "Reduce trial and error in AI investment by using data-driven insights to guide your AI strategy and ensure alignment with your business objectives.",
    highlight: "Always in the loop",
  },
  {
    icon: "mdi:shield-check-outline",
    title: "Get working solutions—not just concepts",
    description:
      "Get working solutions—not just concepts—by leveraging our expertise in AI implementation and delivery.",
    highlight: "Your growth partner for years",
  },
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Seamless integration with your tools",
    description:
      "Seamless integration with your tools and workflows, ensuring a smooth transition to AI-powered solutions.",
    highlight: "ROI-focused development",
  },
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Support beyond deployment",
    description:
      "Support beyond deployment, including maintenance, updates, and training to ensure your AI solutions continue to deliver value.",
    highlight: "Complete end-to-end service",
  },
];

const faqItems = [
  {
    title: "What are AI solutions, and how can they help my business?",
    content: `<p>AI solutions refer to the use of Artificial Intelligence technologies like machine learning, natural language processing, and predictive analytics to automate processes, gain insights, and enhance decision-making. Businesses can use AI solutions to reduce manual tasks, improve accuracy, and stay competitive in a data-driven market.</p>`,
  },
  {
    title: "Who should consider using AI solutions?",
    content: `<p>Businesses of all sizes, from startups to enterprises, looking to improve efficiency, gain actionable insights from data, automate repetitive tasks, or personalize customer experiences should consider AI solutions. If your business wants to move beyond traditional software systems and leverage intelligent automation, AI services are right for you.</p>`,
  },
  {
    title: "What business challenges can AI solutions address?",
    content: `<p>Common pain points that AI solutions help resolve include:</p><ul><li>High manual workloads and repetitive tasks consuming staff time</li><li>Inefficient data analysis and reporting</li><li>Inaccurate demand forecasting and inventory management</li><li>Slow customer service response times</li><li>Difficulty in detecting patterns, fraud, or customer behavior trends</li></ul>`,
  },
  {
    title: "Do I need technical expertise to implement AI solutions?",
    content: `<p>No. Our AI services are designed to be implemented with minimal disruption to your operations. We handle the technical complexities while ensuring your team understands how to use and benefit from AI in your workflows.</p>`,
  },
  {
    title: "How do AI solutions impact ROI for businesses?",
    content: `<p>By reducing manual tasks, improving accuracy, and enhancing customer engagement, AI solutions can significantly reduce operational costs and improve revenue opportunities. Most businesses see ROI through time saved, improved customer satisfaction, and better decision-making using AI-driven insights.</p>`,
  },
  {
    title: "How do I know if my business is ready for AI integration?",
    content: `<p>If your business deals with large volumes of data, has repetitive processes, or aims to gain more profound insights into customer behavior, it is ready for AI integration. We offer an initial consultation to assess your current workflows and data readiness to recommend the best-fit AI solutions for your business.</p>`,
  },
  {
    title: "Is AI only for large enterprises?",
    content: `<p>No. While many large enterprises use AI, small and mid-sized businesses can greatly benefit from AI solutions to gain a competitive edge. We provide scalable AI services tailored to your budget and business size.</p>`,
  },
  {
    title: "How long does it take to implement AI solutions?",
    content: `<p>Implementation time varies based on the complexity of your needs. Simple AI process automation can take a few weeks, while advanced machine learning models may take a few months for data preparation, training, and integration.</p>`,
  },
  {
    title: "Will AI solutions replace my employees?",
    content: `<p>No, AI solutions are designed to enhance your team’s productivity, not replace them. By automating repetitive tasks, your employees can focus on higher-value work, improving overall job satisfaction and business growth.</p>`,
  },
  {
    title: "Why should I choose your company for AI solutions?",
    content: `<p>We specialize in custom AI solutions for businesses, ensuring seamless integration with your existing systems while providing continuous support and optimization. Our expertise in AI services helps you implement practical, cost-effective AI strategies that deliver measurable business value.</p>`,
  },
  {
    title: "Can I start with a small pilot project?",
    content: `<p>Absolutely! We recommend starting with a pilot project to demonstrate value and build confidence. Common pilot projects include:</p><ul><li>Automated email responses or chatbots</li><li>Basic data analysis and reporting</li><li>Simple workflow automation</li><li>Customer sentiment analysis</li><li>Invoice processing or data entry automation</li></ul><p>This approach allows you to see tangible results quickly while minimizing risk and investment.</p>`,
  },
  {
    title: "Do I need technical expertise to implement your AI solutions?",
    content: `<p>No technical expertise is required! We handle the entire process, from consultation to deployment and training. Our team ensures your AI solutions are user-friendly and integrated seamlessly into your operations. We also provide training for your staff to maximize adoption.</p>`,
  },
  {
    title: "Are your AI solutions secure and compliant with regulations?",
    content: `<p>Yes, security and compliance are top priorities. Our AI solutions adhere to industry standards like GDPR, HIPAA (for healthcare), and CCPA. We implement robust data encryption, access controls, and regular audits to protect your data.</p>`,
  },
  {
    title:
      "Can your AI solutions integrate with my existing software or tools?",
    content: `<p>Absolutely! We design our AI solutions to smoothly integrate with popular platforms such as CRM systems like Salesforce and HubSpot, ERP software, and e-commerce platforms like Shopify and Magento. We assess your tech stack during the consultation to ensure compatibility.</p>`,
  },
  {
    title: "How do I get started with your AI solutions?",
    content: `<p><ul><li><strong>Schedule a Consultation:</strong> Contact us to discuss your business needs</li><li><strong>Custom Proposal:</strong> We’ll provide a tailored plan outlining the AI solution, timeline, and costs</li><li><strong>Implementation & Training:</strong> Our team handles deployment and trains your staff for seamless adoption</li></ul></p>`,
  },
];

const caseStudies = [
  {
    // category: "Chemical Data Management, SaaS",
    title: "Echem Portal Inc B2B SaaS HRMS & Recruitment",
    image: AppIcons.HRMS2,
    description:
      "Moltech Solutions built a tailored HRMS and Recruitment portal for Echem Portal Inc. to simplify their hiring process. This B2B SaaS platform improves tracking, transparency, and automation across departments and reduces delays through real-time updates and AI resume parsing.",
    location: "Global",
    industry: "HRMS & Recruitment",
    stats: [],
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
];

const AISolutionsPage = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const [scale, setScale] = useState(0.8);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !textRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // When it's in view
      if (containerTop < windowHeight && containerTop > -windowHeight / 2) {
        const progress = 1 - containerTop / windowHeight;
        // Clamp scale between 0.8 and 1.2
        const newScale = Math.min(1.2, Math.max(0.8, 0.8 + progress * 0.4));
        setScale(newScale);
      }
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="app-wrapper">
        {/* Hero Section */}
        <section className="ai-solutions-hero-section">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-left">
                <div className="badge">
                  <Iconify icon="mdi:brain" className="icon-small" />
                  AI Solutions That Actually Work
                </div>
                <h1 className="hero-title">
                  Transform Your Business with{" "}
                  <span className="text-gradient">AI That Works</span>
                </h1>
                <p className="hero-description">
                  Stop wondering if artificial intelligence could benefit your
                  company and start getting actual results.
                  <span className="highlight-underline">
                    {" "}
                    Custom AI solutions{" "}
                  </span>{" "}
                  that solve your particular problems,
                  <span className="highlight-underline">
                    {" "}
                    automate your processes
                  </span>
                  , and{" "}
                  <span className="highlight-underline">
                    propel quantifiable expansion
                  </span>
                  .
                </p>
                <Link className="service-btn mt-4" href="/contact-us">
                  <span>Let&apos;s Connect</span>
                  <Iconify icon="weui:arrow-filled" width={20} />
                </Link>
              </div>
              <div className="hero-right">
                <h2>Why Choose Our AI Solutions?</h2>
                <div className="features">
                  <div className="feature">
                    <div className="icon-box cyan">
                      <Iconify icon="mdi:brain" className="icon-medium cyan" />
                    </div>
                    <div>
                      <h4>Smart AI Solutions</h4>
                      <p>
                        Custom-built AI that adapts to your specific business
                        needs and challenges.
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="icon-box cyan">
                      <Iconify icon="mdi:flash" className="icon-medium blue" />
                    </div>
                    <div>
                      <h4>Lightning-Fast Results</h4>
                      <p>
                        Rapid implementation and immediate impact on your
                        business operations.
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="icon-box cyan">
                      <Iconify
                        icon="mdi:trending-up"
                        className="icon-medium indigo"
                      />
                    </div>
                    <div>
                      <h4>Measurable Growth</h4>
                      <p>
                        Track ROI with clear metrics and quantifiable business
                        improvements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="container">
            <div className="intro-grid">
              <div className="intro-left">
                <div>
                  <h3>Why AI Is No Longer Optional</h3>
                  <div className="divider"></div>
                </div>
                <div className="intro-content">
                  <p>
                    Artificial intelligence has become an{" "}
                    <strong>economic</strong> need rather than only a fad.
                    Companies embracing{" "}
                    <strong> artificial intelligence </strong> are outperforming
                    rivals in the fast-paced <strong> digital economy </strong>{" "}
                    of today by automating{" "}
                    <strong> labor-intensive tasks,</strong> finding{" "}
                    <strong> data-driven insights,</strong> and providing more{" "}
                    <strong> tailored consumer experiences.</strong>
                  </p>
                  <div className="highlight-box">
                    <h3>
                      <Iconify icon="mdi:brain" className="icon-medium blue" />
                      At Moltech Solution Inc.
                    </h3>
                    <p>
                      We provide businesses of all kinds with{" "}
                      <strong className="text-highlight">
                        practical and easily accessible
                      </strong>{" "}
                      artificial intelligence solutions. Whether your goals are
                      cost control, increased output, or faster innovation, we
                      enable you to turn artificial intelligence&apos;s promise
                      into practical influence.
                    </p>
                  </div>
                  <p>
                    From intelligent chatbots to predictive analytics, our
                    custom AI solutions are developed
                    <strong className="text-highlight">
                      {" "}
                      around your business
                    </strong>
                    , not the other way around.
                  </p>
                </div>
              </div>
              <div className="intro-right">
                <div className="img-container">
                  <Images imagePath={AppIcons.RobotImg} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="keyservice-section">
          <div className="keyservices-title">
            Key <span className="highlight">AI Solution Services</span> We
            Provide
          </div>
          <div className="keyservices-content">
            <span className="highlight">At Moltech Solution Inc.</span> provides
            a whole range of artificial intelligence solutions catered to your
            particular company requirements. Our solutions are meant to equip
            your company with innovative technology and practical insights, so
            empowering it.
          </div>
          <div className="keyservices-wrapper">
            <div className="row mb-3">
              <div
                className="col-xl-6 col-sm-12 d-flex justify-content-center align-items-center"
              >
                <div className="keyservices-imgcontainer">
                  <Images imagePath={AppIcons.Automation} alt="moltech-logo" />
                </div>
              </div>
              <div className="col-xl-6 col-sm-12 ">
                <div className="title">
                  Process Automation & Optimization (RPA + AI)
                </div>
                <div className="description">
                  At Moltech Solution Inc., intelligent RPA (robotic process
                  automation) and AI-driven process automation help to simplify
                  your operations. Combining cognitive artificial intelligence
                  with rule-based automation helps companies speed processes,
                  lower human error, and free up time for more creative
                  activities. From HR and finance to logistics and customer
                  service, our solutions are specifically matched to your
                  company processes and linked with your current systems.
                </div>
                <div className="description">
                  Our knowledge of automation helps you to free up your team to
                  concentrate on high-value work by gaining faster cycle times,
                  enhanced accuracy, and lowered operating costs. Moltech makes
                  the transition seamless and quantifiable, whether your initial
                  project is scaling intelligent workflows across departments or
                  basic task automation.
                </div>
                <div className="tech-stack-container">
                  <div className="tech-stack-item">
                    <Icon icon="logos:python" className="tech-icon" />
                    Python
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:tensorflow" className="tech-icon" />
                    TensorFlow
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="simple-icons:uipath" className="tech-icon" />
                    UiPath
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:pytorch-icon" className="tech-icon" />
                    PyTorch
                  </div>
                </div>
              </div>
            </div>
            <div className="row column-reverse-even">
              <div className="col-xl-6 col-sm-12 ">
                <div className="title">
                  AI Integration & Strategy Consulting
                </div>
                <div className="description">
                  A viable plan is the first step to success with artificial
                  intelligence. Moltech Solution Inc. helps businesses make AI
                  integration plans that work for their goals by helping with
                  definition, planning, and delivery. Our experts work closely
                  with your leadership team to find AI use cases that will have
                  a big effect, check to see if they are technically possible,
                  and write up a plan for how to adopt AI.
                </div>
                <div className="description">
                  We make sure that your AI assets are scalable, ready for the
                  future, and centered on value by getting the right machine
                  learning models and adding to your current systems. Our
                  consulting services help you take risks by getting rid of
                  doubt and preventing mistakes that cost a lot of money.
                </div>
                <div className="description">
                  If your company is ready to go enterprise-wide with AI or you
                  are just looking into it, Moltech may assist you with your
                  change path by giving you both technical depth and business
                  clarity.
                </div>
                <div className="tech-stack-container">
                  <div className="tech-stack-item">
                    <Icon icon="logos:python" className="tech-icon" />
                    Python
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:tensorflow" className="tech-icon" />
                    TensorFlow
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:pytorch-icon" className="tech-icon" />
                    PyTorch
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:microsoft-azure" className="tech-icon" />
                    Azure Machine Learning
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:aws" className="tech-icon" />
                    AWS SageMaker
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:google-cloud" className="tech-icon" />
                    Google Vertex AI
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:openai-icon" className="tech-icon" />
                    OpenAI API
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-sm-12 d-flex align-items-center"
              >
                <div className="keyservices-imgcontainer">
                  <Images
                    imagePath={AppIcons.StrategyConsulting}
                    alt="moltech-logo"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div
                className="col-xl-6 col-sm-12 d-flex align-items-center"
              >
                <div className="keyservices-imgcontainer">
                  <Images
                    imagePath={AppIcons.VirtualAssistants}
                    alt="moltech-logo"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-sm-12">
                <div className="title">
                  Predictive Analytics & Data Insights
                </div>
                <div className="description">
                  Transform your data into a strategic asset using
                  Moltech&apos;s predictive analytics and artificial
                  intelligence-based data insight solutions. We assist
                  businesses in evaluating historical data, identifying
                  patterns, and forecasting future trends, encompassing customer
                  behavior, demand planning, budgeting, and risk assessment.
                  <div className="description">
                    By employing sophisticated machine learning models and
                    specialized knowledge, we facilitate informed decision -
                    making supported by real - time data and predictive
                    analytics. Our solutions are adaptable and tailored,
                    seamlessly integrating into your dashboards and reporting
                    systems.
                  </div>
                  <div className="description">
                    What is the outcome? Enhanced precision, improved
                    strategizing, and a distinct competitive advantage.
                  </div>
                  <div className="description">
                    Regardless of whether you are a startup or an enterprise, we
                    enable your team to transition from instinctual decisions to
                    data - informed business strategy.
                  </div>
                  <div className="description">
                    Attain clarity, diminish ambiguity, and propel progress
                    through practical insights.
                  </div>
                </div>
                <div className="tech-stack-container">
                  <div className="tech-stack-item">
                    <Icon icon="logos:python" className="tech-icon" />
                    Python
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="mdi:robot-outline" className="tech-icon" />
                    Scikit-learn
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:tensorflow" className="tech-icon" />
                    TensorFlow
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="simple-icons:powerbi" className="tech-icon" />
                    Power BI
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:tableau-icon" className="tech-icon" />
                    Tableau
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:aws" className="tech-icon" />
                    AWS Forecast
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:google-cloud" className="tech-icon" />
                    Google BigQuery ML
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:microsoft-azure" className="tech-icon" />
                    Azure Synapse Analytics
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5 column-reverse-even">
              <div className="col-xl-6 col-sm-12">
                <div className="title">AI Chatbots & Virtual Assistants</div>
                <div className="description">
                  Customer care Moltech Solution Inc. develops artificial
                  intelligence-driven chatbots and virtual assistants to provide
                  customer care 24 hours a day, seven days a week. Apart from
                  simple Frequently Asked Questions (FAQs), our bots tackle
                  challenging questions on the web, mobile, and messaging apps,
                  recognize context, and customize interactions.
                </div>
                <div className="description">
                  No matter what type of company you run—B2B, e-commerce,
                  healthcare, or e-commerce—we provide tailored chatbot
                  solutions that increase contact, reduce response times, and
                  free up your support workers.
                </div>
                <div className="description">
                  We can assist you to combine internal tools, helpdesk, and CRM
                  so that bots and people may collaborate simply.
                </div>
                <div className="description">
                  Support for many languages, sentiment analysis, and
                  conversation memory helps our virtual agents to create
                  interactions that seem human and simultaneously increase
                  productivity.
                </div>
                <div className="description">
                  Smart, always-on communication can help businesses reduce
                  support expenses and make consumers happy.
                </div>
                <div className="tech-stack-container">
                  <div className="tech-stack-item">
                    <Icon icon="logos:dialogflow" className="tech-icon" />
                    Dialogflow
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="simple-icons:rasa" className="tech-icon" />
                    Rasa
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:microsoft" className="tech-icon" />
                    Microsoft Bot Framework
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:openai-icon" className="tech-icon" />
                    OpenAI GPT
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:nodejs-icon" className="tech-icon" />
                    Node.js
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:python" className="tech-icon" />
                    Python
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:twilio-icon" className="tech-icon" />
                    Twilio / WhatsApp API
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:zendesk" className="tech-icon" />
                    Zendesk / Freshdesk Integration
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-sm-12 d-flex align-items-center"
              >
                <div className="keyservices-imgcontainer">
                  <Images imagePath={AppIcons.AIChatbots} alt="moltech-logo" />
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-6 col-sm-12 d-flex align-items-center"
              >
                <div className="keyservices-imgcontainer">
                  <Images imagePath={AppIcons.RPAImg} alt="moltech-logo" />
                </div>
              </div>
              <div className="col-xl-6 col-sm-12">
                <div className="title">Personalization Engines</div>
                <div className="description">
                  Users of today expect tailored experiences, and Moltech
                  enables you to provide them using smart AI-driven
                  personalizing engines. We create dynamic content engines and
                  recommendation systems using real-time user behavior,
                  preferences, and contextual data that fit each unique email,
                  app, or website you run.
                </div>
                <div className="description">
                  Our solutions can help you to increase conversion rates,
                  retention, and customer happiness from content personalization
                  in media platforms to product recommendations in e-commerce.
                </div>
                <div className="description">
                  We use cutting-edge algorithms that learn and adapt constantly
                  to guarantee relevance at all levels of contact. Combined with
                  your current systems (CMS, CRM, eCommerce), our personalizing
                  tools fit your user count easily.
                </div>
                <div className="description">
                  Provide pertinent, intriguing activities that draw in
                  returning business.
                </div>
                <div className="tech-stack-container">
                  <div className="tech-stack-item">
                    <Icon icon="logos:python" className="tech-icon" />
                    Python
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:tensorflow" className="tech-icon" />
                    TensorFlow
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="mdi:robot-outline" className="tech-icon" />
                    Scikit-learn
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="simple-icons:apache" className="tech-icon" />
                    Apache Mahout
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:aws" className="tech-icon" />
                    Amazon Personalize
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="logos:google-cloud" className="tech-icon" />
                    Google Recommendations AI
                  </div>
                  <div className="tech-stack-item">
                    <Icon icon="mdi:chart-arc" className="tech-icon" />
                    Segment
                  </div>
                  <div className="tech-stack-item">
                    <Icon
                      icon="mdi:account-cog-outline"
                      className="tech-icon"
                    />
                    CMS & CRM Integrations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="process-section">
        <div className="container">
          <div className="main-title">
            Our Process—Simple Steps to Smarter AI Solutions
          </div>
          <div className="description">
            <span className="highlight">At Moltech Solution Inc.</span>, we make
            adopting AI clear, practical, and business-first. You don&apos;t
            need to be an AI expert—we guide you every step of the way, from
            idea to impact.
          </div>
          <div className="row process-container">
            <div className="col-xl-6 col-sm-12 d-flex align-items-center">
              <div className="process-imgcontainer">
                <Images imagePath={AppIcons.RobotImg2} alt="moltech-logo" />
              </div>
            </div>
            <div className="col-xl-6 col-sm-12">
              <div className="process-steps">
                <div className="process-step step-1">
                  <div className="process-top-section">
                    <div className="process-step-number">1</div>
                    <div className="process-step-title">
                      Understand Your Business & Goals
                    </div>
                  </div>
                  <div className="process-step-description">
                    Instead of using code, we begin with a conversation. Our
                    staff takes the time to learn about your business, your
                    obstacles, and your definition of success.
                    <br />
                    <li>
                      We pinpoint areas where AI can reduce errors, save time,
                      or open up new possibilities.
                    </li>
                  </div>
                </div>
                <div className="process-step step-2">
                  <div className="process-top-section">
                    <div className="process-step-number">2</div>
                    <div className="process-step-title">
                      Spot the Right Use Cases
                    </div>
                  </div>
                  <div className="process-step-description">
                    Not everything needs AI—so we help you focus on what
                    matters. We analyze your workflows and suggest AI
                    applications that offer the highest ROI.
                    <br />
                    Example: Automating invoice processing, personalizing
                    customer journeys, or predicting demand.
                    <br />
                    <li>A clear, prioritized AI roadmap for your business.</li>
                  </div>
                </div>
                <div className="process-step step-3">
                  <div className="process-top-section">
                    <div className="process-step-number">3</div>
                    <div className="process-step-title">
                      Prototype & Validate Quickly
                    </div>
                  </div>
                  <div className="process-step-description">
                    To test the concept, we create a small prototype using your
                    actual data. Before making a complete investment, you can
                    observe how AI functions, how it integrates, and what
                    benefits it can offer.
                    <br />
                    <li>Early alignment, reduced risk, and quick feedback.</li>
                  </div>
                </div>
                <div className="process-step step-4">
                  <div className="process-top-section">
                    <div className="process-step-number">4</div>
                    <div className="process-step-title">
                      Build, Integrate & Deploy
                    </div>
                  </div>
                  <div className="process-step-description">
                    Once validated, we develop and deploy the AI solution into
                    your existing systems—without disrupting your day-to-day
                    operations.
                    <br />
                    <li>Real-world results with minimal downtime.</li>
                  </div>
                </div>
                <div className="process-step step-5">
                  <div className="process-top-section">
                    <div className="process-step-number">5</div>
                    <div className="process-step-title">
                      Train, Monitor & Scale
                    </div>
                  </div>
                  <div className="process-step-description">
                    AI isn’t a one-time setup. We train your team, monitor
                    performance, and keep it improving as your business evolves.
                    <br />
                    <li>
                      Long-term value, continuous optimization, and scalable
                      growth.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <div className="">
        <section className="why-choose-us-section">
          <div className="container">
            <div className="heading-block">
              <h3 className="headline-title">
                Why Choose Moltech Solutions Inc. as a
                <span className="highlight"> Partner for Your</span> <br /> AI
                Solutions?
              </h3>
              <p>
                When it comes to AI solutions, choosing the right development
                partner can make or break your digital transformation. At
                Moltech Solutions Inc., we combine deep technical expertise,
                industry understanding, and a global delivery model to create AI
                solutions that deliver measurable business outcomes.
              </p>
              <p>
                Here&apos;s why clients across the USA, Canada, and Europe
                consistently choose us:
              </p>
            </div>

            <div className="reasons-grid">
              {reasons.map((reason, index) => (
                <div key={index} className={`reason-card card-${index + 1}`}>
                  <div className="reason-icon">
                    <Iconify icon={reason.icon} />
                  </div>
                  <div className="reason-title">{reason.title}</div>
                  {/* <div className="reason-highlight">
                <Iconify icon="tabler:star" className="star-icon" />
                <span>{reason.highlight}</span>
              </div> */}
                  <div className="reason-description">{reason.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <FeaturedCaseStudy caseStudies={caseStudies} />
      <ServiceFAQ items={faqItems} title={"Our AI Solutions Services"} />
      <BranchFooter />
    </>
  );
};

export default AISolutionsPage;
