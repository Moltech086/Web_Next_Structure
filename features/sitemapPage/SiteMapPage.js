import React from "react";
import "./SiteMapPage.scss";
import Link from "next/link";

const SiteMapPage = () => {
  return (
    <>
      <div className="site-map-section">
        {/* Top Title Start */}
        <div className="sitemap-top-title-sec">
          <div className="container">
            <div className="row">
              <div className="col-2xl-12 col-xl-12 col-md-12 col-12">
                <div className="left-desc-sec">
                  <div className="title-center">
                    <span className="sub-title">Sitemap</span>
                    <h1 className="title mb-4">Sitemap</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-map-section">
          <div className="site-map">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="sitemap-link">
                    <h3>Main Pages</h3>
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/case-study">Case Studies</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/technology">Technology</Link>
                      </li>
                      <li>
                        <Link href="/career">Career</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                    </ul>

                    <h3>Services</h3>
                    <ul>
                      <li>
                        <Link href="/services/custom-software-development">
                          Custom Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-application-development">
                          Web App Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/mobile-application-development">
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/business-software-consulting">
                          Business Software Consulting
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/ui-ux-design-and-development">
                          UI/UX Design and Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/ai-solutions">AI Solutions</Link>
                      </li>
                      <li>
                        <Link href="/services/data-preprocessing-and-cleaning">
                          Data Processing and Cleaning
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/software-testing-and-qa">
                          Software Testing & QA
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/staff-augmentation">
                          Staff Augmentation
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/accounting">Accounting</Link>
                      </li>
                    </ul>
                    <h3>Case Studies</h3>
                    <ul className="tow-section">
                      <li>
                        <Link href="/case-study/resort-website-redesign-case-study">
                          Heritage Resort Shark Bay
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/roadhouse-digital-transformation-case-study">
                          Pardoo Roadhouse
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/jewelry-ecommerce-case-study">
                          MWI Eloquence
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/technology-consulting-website-design-case-study">
                          BrightLogix
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/courier-booking-admin-system-case-study">
                          K&B Couriers
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/hrms-recruitment-portal-case-study">
                          Echem Portal Inc
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/membership-event-management-case-study">
                          SGTech
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/manufacturing-membership-event-management-case-study">
                          SMF
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/warehouse-management-app-case-study">
                          Clixz Mobile Warehouse Application
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/skills-development-portal-case-study">
                          CapitaLand
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/immigration-services-platform-case-study">
                          Quick Visa & Immigration Inc.
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/accounting-firm-website-design-case-study">
                          Pemmasani LLC
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/online-e-certificate-solution-case-study">
                          E-Certificate
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/membership-event-management-web-portal-case-study">
                          Singapore Land Authority (SLA)
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/membership-management-platform-admin-portal-case-study">
                          Association of Information Security Professionals
                          (AISP)
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/event-management-platform-web-platform-case-study">
                          Singapore Contractors Association Ltd. (SCAL)
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/donation-and-fundraising-management-platform-with-volunteer-and-event-coordination-case-study">
                          Boys’ Town Singapore
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/secure-e-voting-platform-case-study">
                          ACCA – Association of Chartered Certified Accountants
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/online-conference-management-platform-case-study">
                          Singapore International Science Teachers’ Conference
                          (SISTC)
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/centralized-operations-management-platform-case-study">
                          EchemPortal Centralized System
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/association-member-event-platform-case-study">
                          IPAS Membership & Event Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/membership-accreditation-management-platform-case-study">
                          SGBC GMQP Accreditation & CPD Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/creative-industry-membership-portal-case-study">
                          Singapore Fashion Council Portal
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/project-collaboration-and-tracking-platform-case-study">
                          TMS Platform
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/workflow-and-document-automation-platform-case-study">
                          Laborers District Council (LDC)
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/legacy-system-modernization-platform-case-study">
                          Total Scope, Inc.
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/secure-reporting-and-analytics-portal-case-study">
                          Brown & Brown Portal
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/chemical-procurement-and-b2b-workflow-automation-case-study">
                          Aurum Pharmatech LLP
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/robotic-process-automation-and-data-management-platform-case-study">
                          Robotic Process Automation
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/api-driven-saas-document-management-case-study">
                          Cloud Docs
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/event-driven-email-automation-and-classification-system-case-study">
                          Echem
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/ai-powered-order-processing-automation-case-study">
                          OPS – Order Processing System
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/scalable-internal-automation-platform-case-study">
                          Routine Process Automation Platform
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/procurement-inquiry-automation-case-study">
                          Inquiry Management System (IMS)
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/mobile-attendance-and-class-booking-system-case-study">
                          Flying Cape App
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/ai-powered-email-automation-case-study">
                          EPS – Email Processing System
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/acca-partner-event-management-system-case-study">
                          Association of Chartered Certified Accountants (ACCA)
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/flying-cape-partner-event-system-case-study">
                          Flying Cape
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study/clixzplatform-utility-saas-case-study">
                          ClixzPlatform
                        </Link>
                      </li>
                    </ul>
                    <h3>Our Blogs</h3>
                    <ul className="tow-section">
                      <li>
                        <Link href="/blog/future-of-coding-ai-software-services">
                          AI Is Rewriting the Code: The Future of Software Engineering, Productivity, and Innovation
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/digital-marketing-metrics-2026">
                          Digital Marketing Metrics 2026
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/best-mobile-app-development-frameworks-2026">
                        Top 10 Mobile App Development Frameworks 2026
                        </Link>
                      </li>{" "}
                    
                      <li>
                        <Link href="/blog/native-vs-cross-platform-development-2025">
                          Native vs Cross-Platform Development: Expert Software
                          Services Guide
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/nodejs-performance-optimization">
                          Node.js Performance Optimization: Expert Software
                          Services for Speed & Scalability
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/angular-vs-vue-2025-framework-comparison">
                          Angular vs Vue in 2025: Expert Software Services &
                          Development Guide
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/mobile-app-architecture-layers-components-design">
                          Mobile App Architecture: Expert Software Services for
                          Scalable Apps
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/in-house-it-vs-managed-services-it-consulting">
                          In-House IT vs Managed Services: Managed IT Consulting
                          for Growth
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/no-code-tools-popular-affordable-open-source">
                          No-Code Tools Guide: Affordable Solutions & Software
                          Services
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/intelligent-rpa-python-ai-automation">
                          Intelligent RPA: Using Python with AI to Build Smarter
                          Automation Bots
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/full-stack-hybrid-app-development-react-dotnet-ai">
                          Full-Stack Hybrid App Development with React + .NET |
                          Expert Software Services
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/economics-outsourcing-data-processing-experts">
                          Data Processing Outsourcing Services: Cost Efficiency
                          & Accuracy
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/data-cleaning-impact-business-decisions">
                          How Data Cleaning Impacts Business Decisions ?
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/real-time-dashboards-unstructured-data">
                          Build Real-Time Dashboards from Unstructured Data
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/ai-rpa-data-entry-validation">
                          AI RPA Solutions for Data Entry and Validation
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/tech-stack-selection-guide">
                          Tech Stack Selection: How to Choose the Right
                          Technologies for Your Next Project
                        </Link>
                      </li>{" "} 
                      <li>
                        <Link href="/blog/website-performance-optimization-google-rankings">
                          Website Performance and Its Impact on Google Rankings
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/ollama-dotnet-react-local-ai-integration">
                          Connecting Ollama with .NET & React: Build Full-Stack
                          Local AI Apps
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/ollama-vs-openai-local-ai-solutions">
                          Ollama vs OpenAI: When Local AI Beats the Cloud —
                          Local vs Cloud AI Solutions
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/local-ai-assistants-ollama-n8n-automation">
                          Building AI Assistants with Ollama and n8n — Local,
                          Private, and Automated
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/private-llms-locally-ollama-secure-ai">
                          Running Private LLMs Locally with Ollama | Secure AI
                          Solutions for Enterprises
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/embed-ai-in-web-apps">
                          Embed AI in Web Apps Without Rewriting Your Stack | AI
                          Solutions & Consulting
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/conversational-web-agents-mcp">
                          Building Conversational Web Agents with MCP
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/vibe-coding-ai-assisted-development">
                          Vibe Coding & AI-Assisted Development: Risks,
                          Benefits, and How to Get It Right
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/kubernetes-docker-updates-2025">
                          Kubernetes & Docker Updates 2025
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/apis-application-modernization">
                          APIs in Application Modernization Unlock
                          Interoperability and Drive Innovation
                        </Link>
                      </li>{" "}
                      <li>
                        <Link href="/blog/ai-in-auditing-enhancing-accuracy-efficiency">
                          The Role of AI in Auditing: Enhancing Accuracy and
                          Efficiency
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/agentic-ai-retail-inventory-automation">
                          Leveraging Agentic AI for Retail Inventory Automation
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/react-vs-angular-performance">
                          React vs Angular — High-Performance Frameworks
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/cicd-devsecops-2025-new-practices-tools">
                          CI/CD DevSecOps 2025: New Practices & Tools
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/dotnet-maui-cross-platform-mobile-apps">
                          .NET MAUI — Build Cross-Platform Mobile Apps
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/react-19-features-developers-need-to-know">
                          React 19 Features Developers Need to Know
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/owasp-2025-updates-developer-guide">
                          The Future of Web Security: OWASP 2025 Updates
                          Developers Should Know
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ai-dev-tools-2025-copilot-codewhisperer-gemini-compared">
                          AI Dev Tools in 2025: Copilot, CodeWhisperer, and
                          Gemini Compared
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/azure-vs-aws-vs-gcp-2025-which-cloud-fits-your-business">
                          Azure vs AWS vs GCP in 2025: Which Cloud Fits Your
                          Business?
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/migrate-angular-15-to-angular-18">
                          Migrating from Angular 15 to Angular 18 : Challenges &
                          Best Practices
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ai-augmented-dotnet-fintech-solutions">
                          How AI-Augmented .NET Development Is Reshaping Fintech
                          Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/securing-progressive-web-apps-react-dotnet#service-worker-best-practices">
                          Securing Progressive Web Apps: Best Practices for
                          High-Traffic Platforms
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ai-powered-code-reviews-dotnet">
                          AI-Powered Code Reviews in .NET: Enhancing Quality and
                          Speed
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ocr-vs-intelligent-document-processing-finance">
                          OCR vs. Intelligent Document Processing in Finance Ops
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ai-driven-personalization-ux">
                          Security First: Integrating Robust Security into
                          Custom Software Development Lifecycle
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/real-time-supply-chain-re-routing-predictive-ai">
                          Real-Time Supply-Chain Re-Routing Using Predictive
                          Models — AI Supply Chain Optimization
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/data-security-in-custom-apps">
                          Data Security and Compliance in Custom Apps
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ai-driven-personalization-ux">
                          The Role of AI in Enhancing User Experience (UX) and
                          Personalization
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/hybrid-vs-multi-cloud-choose-right-architecture">
                          Hybrid vs Multi-Cloud: Choose the Right Architecture
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/cross-platform-development-frameworks-comparison">
                          Cross-Platform Development Frameworks: React Native
                          vs. Flutter vs. Xamarin
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/blazor-united-vs-nextjs">
                          Blazor United vs. Next.js: Full-Stack Showdown
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/real-time-analytics-competitive-advantage">
                          Real-Time Analytics for Instant Business Advantage
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ai-in-finance-cfo-playbook-rpa-automation">
                          The Future of Finance: How AI and RPA are
                          Revolutionizing Accounting Departments
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ai-pilots-vs-full-scale-deployment">
                          AI Pilots vs. Full-Scale Deployment: What Works?
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/from-monolith-to-microservices-dotnet9-playbook">
                          From Monolith to Microservices in .NET 9: A
                          Step-by-Step Playbook
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/reliable-email-systems-with-pub-sub-messaging">
                          Building Reliable Email Systems Using Pub/Sub
                          Messaging
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/next-js-15-features-and-seo-benefits-turbopack-server-actions-and-ppr-guide">
                          Next.js: Key Upgrades & Real-World Benefits to
                          Transform Modern Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/hr-data-analytics-insights">
                          HR Data Analytics How IT Companies Use People
                          Analytics for Decision-Making.
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/csharp-interface-best-practices">
                          Simplifying Software Development with Interfaces in C#
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/threads-vs-tasks-parallel-programming-csharp-dallas">
                          Threads or Tasks? The Parallel Programming in C#
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/middleware-dotnet-request-handling-dotnet-development-dallas">
                          Middleware in .NET: Enhancing Request Handling with
                          Custom Logic
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/events-and-delegates-csharp-dotnet-development">
                          Events and Delegates in C#
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/cors-cross-origin-dotnet-csharp-dallas">
                          CORS (Cross-Origin Resource Sharing) in C# and .NET
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ienumerable-vs-icollection-dotnet-csharp">
                          Understanding IEnumerable vs. ICollection in .NET
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/python-web-scraping-guide-dallas-usa">
                          Web Scraping with Python: A Step-by-Step Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/angular-19-key-features-improvements-dallas">
                          10 Key Features and Improvements in Angular 19
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/5-simple-web-design-tricks-for-ui-ux-professional-look-dallas">
                          5 Simple Web Design Tricks to Make Your Website Stand
                          Out
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/tailwind-vs-material-ui-which-framework-is-right">
                          Tailwind vs Material-UI: A Guide
                        </Link>
                      </li>
                    </ul>
                    <h3>Other Pages</h3>
                    <ul>
                      <li>
                        <Link href="/how-we-work">How we Work?</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/sitemap">Sitemap</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteMapPage;
