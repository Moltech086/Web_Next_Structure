import { AppIcons } from "@/data/appIcons";

const serviceDetails = {
  "custom-web-development": {
    id: "custom-web-development",
    title: "Custom Web Application Development",
    description:
      "Tailored web applications designed specifically for your business processes, needs, and goals.",
    image: AppIcons.customSoftware,
    content: [
      `<h3>Enterprise Web Solutions</h3>
             <p>Off-the-shelf software often fails to meet the complex needs of growing companies in today's fast-paced business environment. We at Moltech Solution Inc. create unique enterprise web solutions that complement your processes, work with your current systems, and grow with your company.</p>
             <p>Our team develops custom platforms that change the way your teams work, whether you require a powerful CRM to handle customer interactions, an ERP to tie everything together, a unique HR portal to manage the workforce, or a custom workflow based on business needs.</p>`,

      `<h3>SaaS Application Development</h3>
             <p>Custom SaaS application development that is secure, scalable, and cloud-native—that is our area of expertise at Moltech Solution Inc. Our team creates multi-tenant SaaS solutions, allowing businesses and startups to provide flawless digital services to customers all around. Whether you're scaling an enterprise-grade solution or creating a Minimum Viable Product (MVP), we can assist you in turning your SaaS idea into a profitable, high-performance product.</p>
             <p>Our SaaS offers include:</p>
             <ul>
               <li>Multi-tenant design for the best resource economy</li>
               <li>Stripe, PayPal, etc., among other automated subscription and billing systems</li>
               <li>User rights and role-based access control, or RBAC</li>
               <li>Customizable dashboards and real-time data</li>
               <li>APIs integrated into clouds on AWS, Azure, or GCP</li>
               <li>Global access, mobile-responsive UI/UX design</li>
             </ul>
             <p>Using an agile development approach ensures quick time-to-market, constant improvements, and long-term scalability. Whether your company is HRTech, FinTech, EduTech, HealthTech, or another, our bespoke SaaS solutions enable you to enhance the user experience, lower costs, and simplify methods.</p>`,

      `<h3>E-commerce &amp; Marketplace Platforms</h3>
             <p>Our expertise at Moltech Solution Inc. is creating custom e-commerce systems and multi-vendor markets fit for your particular company model. We provide strong, scalable, and conversion-oriented solutions if your business is starting a B2C storefront, a business-to-business ordering system, or a niche marketplace.</p>
             <p>Our e-commerce systems have mobile-first responsive stores, sophisticated product filtering, safe payment gateway integrations (Stripe, Razorpay, PayPal), and fully working vendor dashboards for marketplace setups. Everything required for a frictionless buying and selling service—from inventory control to user accounts to shipping automation to seamless order management—we enable.</p>
             <p>Working with modern technologies like .NET, React, Node.js, and also offering development and customization services on platforms including Shopify, Magento, WooCommerce, and BigCommerce, we can deliver the best-fit solution whether you're renovating or starting from scratch.</p>
             <p>Our solutions are SEO-friendly, high-performing, and fully integrated with ERPs, CRMs, and external logistics, giving you a strong digital commerce ecosystem to scale boldly.</p>`,

      `<h3>Web Application Development</h3>
             <p>Custom web application development is Moltech Solutions Inc.'s area of expertise; we create solutions ideal for your operations, needs, and goals. Unlike pre-made software, our custom web apps are developed from the ground up to meet your specific requirements and grow as your company evolves.</p>
             <p>We create fast, safe, and user-friendly web apps using modern technologies like Node.js, Angular, Java, React, and .NET. Whether your project calls for a data-driven dashboard, a customer portal, or a robust internal system—we build it right.</p>
             <p>We begin by thoroughly understanding your needs and then work closely together to cover UX/UI design, backend architecture, cloud deployment, and ongoing support. Every solution we build maximizes speed, usability, and integration with your tools or APIs.</p>`,

      `<h3>Real-Time Applications</h3>
             <p>Essential for today's fast-paced, always-connected world, real-time web applications developed at Moltech Solution Inc. enable instant data exchange, live collaboration, and dynamic user interactions. From chat systems and live dashboards to team tools and tracking systems, our bespoke real-time apps provide the responsiveness your users demand.</p>
             <p>We use modern tools including WebSockets, SignalR, Socket.IO, Node.js, .NET, and React to create high-performance, event-driven apps with low-latency communication, secure connections, and perfect browser/device compatibility.</p>
             <p>Whether your project is a live trading dashboard, logistics tracker, or a multi-user collaboration tool, we build custom solutions that scale and fit within your digital ecosystem.</p>`,

      `<h3>Single-Page Applications (SPAs)</h3>
             <p>At Moltech Solution Inc., we specialize in building fast, intuitive Single-Page Applications (SPAs) that offer users a seamless, app-like experience. SPAs load content dynamically without reloading the entire page, making them ideal for dashboards, admin panels, and modern web portals.</p>
             <p>Using frameworks like React, Angular, and Vue.js, we create responsive and scalable SPAs that smoothly integrate with your APIs and backend systems. Whether for internal tools or customer-facing platforms, we deliver high performance, long-term maintainability, and excellent UX.</p>`,

      `<h3>CMS Development</h3>
             <p>Custom CMS development is our specialty at Moltech Solution Inc. We empower you to fully control your website content, digital assets, and release processes. Whether you're managing a blog, product catalog, or corporate website, we tailor CMS systems for your unique needs.</p>
             <p>We work with both headless CMS platforms like Strapi and Contentful and traditional systems like WordPress, Umbraco, and Drupal. This let's us build solutions that support smooth content editing, versioning, roles, and efficient media handling.</p>
             <p>Our CMS solutions feature user-friendly interfaces, SEO-friendly structures, and secure, scalable architectures so your team can manage content without relying on developers.</p>`,

      `<h3>Workflow Automation Systems</h3>
             <p>Moltech Solution Inc. builds workflow automation tools that free your team from repetitive tasks, reduce errors, and improve productivity. We transform routine activities like document routing, task notifications, escalations, and review workflows into smart, rule-based systems.</p>
             <p>Our custom workflows are built with modern tech including Microsoft stack, Node.js, and BPMN-based engines. These connect easily with your existing tools—CRM, ERP, HRMS, or third-party systems.</p>
             <p>Whether you're in finance, HR, logistics, or operations, our automation solutions make your processes clearer, more dependable, and easier to manage—so your teams can focus on what matters most.</p>`,

      `<h3>Client Portals</h3>
             <p>We build custom client portals at Moltech Solution Inc. to give your customers a secure, self-service way to engage with your business. Whether it's managing accounts, tracking orders, accessing documents, or submitting support requests, our portals provide 24/7 access.</p>
             <p>Every portal is built with secure login, RBAC, and data encryption. We integrate with CRMs, ERPs, helpdesk tools, and internal systems to ensure seamless backend operations.</p>
             <p>Client portals enhance satisfaction and reduce support costs while giving customers power and convenience—designed for scalability and exceptional UX.</p>`,
    ],
    technologies: [
      "React",
      "Angular",
      "Node.js",
      ".NET Core",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
    ],
    benefits: [
      "Perfect fit for your business processes",
      "Competitive advantage through unique features",
      "Full control over functionality and design",
      "Seamless integration with existing systems",
      "Long-term cost effectiveness",
      "Scalable as your business grows",
    ],
  },

  "front-end-development": {
    id: "front-end-development",
    title: "Front End Development",
    description:
      "Front end development is our area of expertise at Moltech Solution Inc. We create custom front-end solutions that are secure and scalable.",
    image: AppIcons.frontEnd,
    content: [
      `<h3>UI/UX Optimization</h3>
             <p>At Moltech Solution Inc., we do more than just design interfaces—we design experiences. Our UI/UX improvement services are focused on making your product easy to use, feasible, and engaging. We look at user paths, pinpoint issues, and simplify interactions in order to render them easy to use and satisfy users.</p>
             <p>Whether it's streamlining a complex logistics platform interface or redesigning a healthcare application to improve user experience, our team is committed to optimizing both form and function. Not only does great design contribute to a better user experience, but it also boosts customer satisfaction, retention, and conversions.</p>`,

      `<h3>Performance Optimization</h3>
             <p>Users of modern digital environments desire their applications to load promptly and run without issues. Our solutions for online speed optimization help to remove lags, lower bounce rates, and keep your consumers interested in your web application.</p>
             <p>We aim to ensure your site or app runs at its optimum rate, from lazy-loading components and frontend asset optimization to API call reduction and Lighthouse score enhancement. For instance, we immediately increased conversions by 15% when we helped an e-commerce customer cut load times by 40%.</p>
             <p>Faster performance guarantees enhanced customer service as well as bigger business advantages.</p>`,

      `<h3>Responsive Design</h3>
             <p>Your design shouldn't appear on the same device as your users. We develop responsive web designs that look excellent on widescreens and smartphones as well.</p>
             <p>We make sure your content stays readable, functional, and accessible regardless of where or how your users access it by utilizing flexible layouts and mobile-first design principles.</p>
             <p>Following a responsive layout redesign, a recent SaaS dashboard project saw a 25% increase in mobile engagement. With more people using mobile devices to browse, responsive design is not an option—it is a necessity.</p>`,
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "Stripe API",
      "AWS Lambda",
      "Docker",
      "Kubernetes",
      "GraphQL",
    ],
    benefits: [
      "Recurring revenue model",
      "Global market reach",
      "Reduced infrastructure costs",
      "Automatic updates and maintenance",
      "Built-in security and compliance",
      "Rapid market deployment",
    ],
  },

  "integration-migration": {
    id: "integration-migration-services",
    title: "Integration & Migration Services",
    description:
      "From seamless third-party integrations to secure data migration and legacy system modernization, Moltech Solution Inc. ensures your digital ecosystem works in harmony.",
    image: AppIcons.integrationMigration,
    content: [
      `<h3>Third-party Integrations</h3>
            <p>At Moltech Solution Inc., we help businesses connect the tools they need by letting third parties easily integrate with them. We make sure that everything works well and safely together, whether it's connecting your ERP system to your CRM system, your email marketing tool to your CRM system, or your data to payment gateways. Alternatively, businesses may want to develop their own custom API.</p>
            <p>Several third-party systems, like Shopify, QuickBooks, and a shipping company, were added to make the order process smooth from start to finish for a retail client. With our unique integration services, your systems can talk to each other. This saves your team time because they don't have to do it by hand.</p>`,

      `<h3>API Gateway Management</h3>
            <p>Rising numbers of application programming interfaces (APIs) spread over several platforms could make management challenging. In this regard, our approaches to managing API Gateways can be really beneficial. By means of contemporary API gateways such as the AWS API Gateway, Kong, or Azure API Management, we assist in business, monitoring, and safeguarding all your API traffic.</p>
            <p>We ensure that your application programming interfaces (APIs) are both safe and effective by specifying rate limits, access restrictions, and implementing logging and analytics changes.</p>`,

      `<h3>Data Migration Services</h3>
            <p>Moving data between systems can be risky, but if done correctly, it doesn't have to be hazardous. Moltech Solution Inc. offers data migration services that ensure your information moves securely and accurately between existing apps or between outdated systems and cloud platforms.</p>
            <p>We handle everything from data cleansing and mapping to transformation and validation. We recently successfully transferred more than five million records from an on-site SQL Server to a modern Postgres cloud setup without experiencing any outages or data loss.</p>
            <p>We take care of the grunt work so you can focus on managing your business.</p>`,

      `<h3>Legacy System Modernization</h3>
            <p>Older technology can cause your company to lag. By re-architecting, re-platforming, or rebuilding legacy programs using modern technologies like .NET Core, Node.js, and cloud-native solutions, our services for modernizing legacy systems help you breathe fresh life into outdated apps.</p>
            <p>We converted a decades-old desktop program for one healthcare customer into a safe, web-based platform that improved usability and dropped maintenance overhead by 60%.</p>
            <p>Modernizing your legacy software addresses future-proofing your company rather than only tech.</p>`,

      `<h3>API &amp; Authentication Integration</h3>
            <p>Modern applications are built on APIs; safe authentication is not negotiable. With OAuth 2.0, JWT, SAML, and more, we are skilled in API and authentication integration, which allows you to connect to third-party providers and protect your systems.</p>
            <p>We used single sign-on (SSO) and token-based authentication for a SaaS customer to streamline access for hundreds of thousands of users.</p>
            <p>We ensure your system is safe and flawless whether your login is via Google or Microsoft, allows role-based access, or connects with outside APIs. Our aim is a flawless experience and secure access.</p>`,
    ],
    technologies: [
      "AWS API Gateway",
      "Azure API Management",
      "Kong",
      "OAuth 2.0",
      "JWT",
      "Node.js",
      ".NET Core",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
    ],
    benefits: [
      "Faster business processes via integrated systems",
      "Secure and accurate data migration",
      "Improved API scalability and security",
      "Modernized legacy systems",
      "Streamlined authentication and user access control",
    ],
  },
  "backend-development": {
    id: "backend-development",
    title: "Backend Development",
    description:
      "We build secure, scalable, and high-performance backends that power your entire application stack—whether cloud-native, monolithic, or microservices.",
    image: AppIcons.backEnd,
    content: [
      `<h3>API Development</h3>
            <p>APIs bridge your frontend and backend, and we specialize in creating secure, scalable, well-documented APIs that power your digital goods. From RESTful services to GraphQL and gRPC, we create consistently quick, easily integrated APIs.</p>
            <p>We established a set of customized APIs for a logistics customer to link their order management system with outside suppliers, therefore allowing real-time updates and automated processes. Our assistance for API development enables your systems to interact flawlessly both inside and outside.</p>`,

      `<h3>Database Design &amp; Optimization</h3>
            <p>Your data is only as useful as how well it's structured and accessed. We design efficient, normalized database architectures using relational (like SQL Server, PostgreSQL, and MySQL) and NoSQL (like MongoDB and Firebase) databases to match your business needs.</p>
            <p>We also offer database performance optimization—from indexing and query tuning to caching strategies. In one project, we reduced report generation time from 2 minutes to under 5 seconds by restructuring indexes and optimizing SQL queries.</p>`,

      `<h3>Cloud Integration</h3>
            <p>Whether you are creating cloud-native apps or migrating to the cloud, we can help you maximize platforms such as AWS, Microsoft Azure, and Google Cloud Platform. Our cloud integration services support CI/CD procedures, options for storage, app scaling, and secure data sync.</p>
            <p>We combined AWS Lambda, S3, and the RDS for a financial firm to create a completely cloud-native environment—cutting infrastructure expenses and increasing scalability—by means of which we could improve scalability. We manage the tech so you can concentrate on creativity.</p>`,

      `<h3>Microservices Architecture</h3>
            <p>To facilitate improved scalability, faster deployments, and autonomous service administration, we create applications utilizing the microservices architecture technique. Large monolithic systems are broken down into modular, manageable components that can expand along with your company using this strategy.</p>
            <p>An example of this would be how we separated order management, inventory, and payment into separate services in a recent retail project. This made the platform more resilient and made it easier to expand. Using microservices is the way to go if you are built for expansion.</p>`,

      `<h3>Serverless Architecture</h3>
            <p>Would you like to scale on demand while simultaneously lowering the amount of server maintenance? Through the utilization of platforms such as Amazon Web Services Lambda, Microsoft Azure Functions, and Google Cloud Functions, these serverless backend development services make it possible for you to execute programs without the need to manage servers.</p>
            <p>The serverless design allows you to pay only for the assets that you actually use, and that provides you with the ability to ensure both high availability and rapid execution. Organizations that are concerned about costs, event-driven applications, and startups are all good candidates for this design. For the purpose of a mobile application project, we developed a serverless backend that was able to process hundreds of requests per minute with nearly zero instances of downtime ever occurring.</p>`,
    ],
    technologies: [
      "Node.js",
      "Python",
      "Go",
      "Java",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS Lambda",
      "Docker",
      "Kubernetes",
      "GraphQL",
    ],
    benefits: [
      "Optimized for performance and scalability",
      "Future-ready with microservices and serverless support",
      "Built-in support for CI/CD and cloud platforms",
      "Secure API integrations and role-based access",
      "Reduced downtime with fault-tolerant architecture",
      "Seamless data syncing and real-time support",
    ],
  },
  "security-compliance": {
    id: "security-compliance",
    title: "Security and Compliance",
    description:
      "Protecting your software and your users through robust, enterprise-grade security and industry compliance practices.",
    image: AppIcons.securityCompliance,
    content: [
      `<h3>End-to-End Security Hardening</h3>
             <p>Security isn't just about ticking boxes—it’s about making sure your entire system, from top to bottom, is actually protected from possible cyber threats. At Moltech Solution Inc., we take a no-nonsense approach to security hardening. That means we roll up our sleeves and look at everything: your infrastructure, APIs, backend code, frontend exposures, and even how your teams handle credentials and deployment.</p>
             <p>We’ve worked with businesses where servers were misconfigured, ports were left open, or credentials were stored in plain text (yes, it still happens). So we’ve learned not to assume anything. Instead, we apply real-world best practices—SSL everywhere, security headers, minimal privilege, encrypted storage, token validation, and regular checks across your environment.</p>
             <p>One of our clients, a finance startup, came to us after experiencing performance issues and suspected data exposure. After a full audit, we patched their open endpoints, enforced HTTPS-only traffic, and added monitoring—all without disrupting their users. Good security isn’t flashy. It’s quiet, solid, and invisible when done right.</p>`,

      `<h3>Penetration Testing &amp; Vulnerability Scans</h3>
             <p>You can’t fix what you don’t know is broken. That’s why penetration testing and vulnerability scanning are a critical part of what we do at Moltech. Think of it like hiring someone to break into your system before the bad guys do.</p>
             <p>We run controlled, ethical attacks on your applications and APIs to see how they'd hold up under real pressure. Sometimes we find deprecated libraries with known exploits. Other times it's something simple—like an open port or missing auth check—that could’ve caused serious damage. We’ve even helped clients discover logic flaws in their payment workflows that would’ve been easy to exploit.</p>
             <p>We use a mix of automated tools and manual testing (because scanners don’t catch everything). Then we give you a plain-English report that explains what’s wrong, how risky it is, and what to do about it. No fluff—just practical advice to make your system stronger, safer, and audit-ready.</p>`,

      `<h3>GDPR/CCPA Compliance</h3>
             <p>It can be hard to understand privacy laws like GDPR and CCPA if your business wasn't built with them in mind. They won't go away, though, and the fines, damage to your image, and loss of customer trust are too high to risk. This is especially true when you're making B2B software for enterprise customers.</p>
             <p>At Moltech, we assist you in navigating this confusing landscape. We’ll work with your team to figure out exactly what data you’re collecting, how it's stored, and what needs to change to stay compliant. That includes things like cookie consent, data access rights, deletion workflows, and making sure third-party services don’t create unexpected risks.</p>
             <p>One ecommerce client came to us after realizing their “unsubscribe” button didn’t actually remove people from their mailing list. We helped them fix that, along with some backend storage issues that violated GDPR. End result? This approach leads to happier customers, eliminates legal risks, and enhances your brand image. Privacy isn’t just about rules—it’s about trust, and we help you build that the right way.</p>`,

      `<h3>Role-Based Access Control (RBAC)</h3>
             <p>Not all your system users or stakeholders should have the keys to everything—and that’s where RBAC (Role-Based Access Control) comes in. It sounds technical, but at its core, it's just about making sure the right people have the right level of access—and nothing more.</p>
             <p>We design RBAC setups that are flexible, scalable, and easy to manage. Whether it’s giving different teams access to different modules in your CRM or limiting what clients can see in a shared portal, we make sure everything stays clean and secure.</p>
             <p>One SaaS client of ours had a growing user base but no real access control. Support staff could see billing info, and clients could edit settings they weren’t supposed to. We helped them put proper roles in place—admin, editor, viewer—tied into their auth provider, with logs to track changes. Now, everyone sees only what they’re meant to. Simple, secure, and under control.</p>`,

      `<h3>Compliance Readiness</h3>
             <p>Getting ready for an audit? Or maybe you’re aiming for a certification like SOC 2, ISO 27001, or HIPAA? Either way, we’ve got your back. At Moltech, we help teams prepare for security and compliance audits without the panic or guesswork.</p>
             <p>We’ll sit down with you, walk through your systems, and figure out what gaps exist—from policy documents to encryption practices to access logs and data flows. Then we help you clean it up, piece by piece. No giant binders. No vague advice. Just clear steps toward becoming audit-ready.</p>
             <p>We helped one tech company prepare for a SOC 2 audit in less than 10 weeks. They had the tech in place, but no processes around logging, backup policies, or vendor management. We helped them pull it all together—and they passed on the first try. Whether you’re doing it for customers, investors, or peace of mind, compliance doesn’t have to be a nightmare. We’ll help you get there.</p>`,
    ],
    technologies: [
      "OAuth 2.0",
      "JWT",
      "SAML",
      "HTTPS",
      "Azure Security Center",
      "AWS IAM",
      "Kong Gateway",
      "Nmap",
      "Burp Suite",
      "OWASP ZAP",
    ],
    benefits: [
      "Hardened security across infrastructure and code",
      "End-to-end audit preparation and compliance support",
      "Reduced risk of data breaches and fines",
      "RBAC ensures limited, logical user access",
      "Fully documented and tested for GDPR, CCPA, and SOC 2",
      "Peace of mind for enterprise clients and investors",
    ],
  },
  "cloud-native-development": {
    id: "cloud-native-development",
    title: "Cloud-Native Development",
    description:
      "Modern, resilient, and scalable cloud-native systems tailored for performance and agility.",
    image: AppIcons.cloudNative,
    content: [
      `<h3>Cloud-native Architecture</h3>
   <p>Traditional apps weren’t built for the speed, scale, or complexity of today’s digital demands. That’s where cloud-native architecture comes in. At Moltech Solution Inc., we design systems that are modular, resilient, and built to scale across modern cloud environments like AWS, Azure, and GCP.</p>
   <p>We use patterns like microservices, containerization (Docker, Kubernetes), service mesh, and event-driven messaging to break down monolithic codebases and make your app easier to manage, deploy, and evolve. For one logistics client, we re-architected their bulky on-prem system into a cloud-native setup that could handle 10x the traffic—without downtime.</p>
   <p>The goal? Systems that are built to change, not just survive. With our cloud-native approach, your software becomes more agile, maintainable, and scalable from day one.</p>`,

      `<h3>Serverless Deployment</h3>
   <p>Why pay for servers you’re not using? With serverless deployment, you only pay when your code runs. We help you launch applications using AWS Lambda, Azure Functions, and Google Cloud Functions—so there’s no infrastructure to manage, scale, or secure.</p>
   <p>Serverless is perfect for apps that experience spikes in usage, need to scale fast, or require low-cost backend services like APIs, triggers, or cron jobs. One of our clients used to rely on a fixed monthly server plan—even when traffic dropped to zero overnight. We helped them move to a serverless architecture and cut their cloud costs by 70%.</p>
   <p>Serverless doesn’t mean less power—it means less overhead. It’s faster to build, easier to maintain, and built for modern software delivery.</p>`,

      `<h3>Auto-scaling &amp; Load-balancing</h3>
   <p>When traffic goes up, your app shouldn't crash. We set up auto-scaling and load-balancing systems that adapt to changes in demand on their own, so your users will always have quick, reliable service.</p>
   <p>We make sure that your system can grow when it needs to and shrink when it doesn't by using tools like AWS Auto Scaling Groups, Kubernetes HPA, and load balancers like ALB, Nginx, or HAProxy. This will save you time and money. We recently helped an e-commerce client get ready for a big launch by putting in place smart load sharing and horizontal scaling. Their platform was able to handle five times as much traffic without any problems.</p>
   <p>With the right auto-scaling and load-balancing, your app will be strong, quick to respond, and ready for the future, even when it's busy.</p>`,
    ],
    technologies: [
      "AWS Lambda",
      "Azure Functions",
      "Google Cloud Functions",
      "Docker",
      "Kubernetes",
      "Service Mesh",
      "ALB",
      "Nginx",
      "HAProxy",
      "AWS Auto Scaling",
      "Kubernetes HPA",
    ],
    benefits: [
      "No infrastructure management required",
      "Elastic scalability for peak loads",
      "Optimized cloud resource usage",
      "Lower costs with serverless models",
      "Resilient microservices-based architecture",
      "Faster deployments and time-to-market",
    ],
  },
  "ai-ml-integration": {
    id: "ai-ml-integration",
    title: "AI and Machine Learning Integration",
    description:
      "Empowering digital experiences with intelligent automation, personalization, and predictions.",
    image: AppIcons.AIML,
    content: [
      `<h3>AI Chatbots &amp; Virtual Assistants</h3>
             <p>We build intelligent AI-powered chatbots and virtual assistants that actually help—not just give canned responses. Whether you need a 24/7 support bot, an onboarding guide, or a lead qualification assistant, we use NLP models (like OpenAI’s GPT, Dialogflow, or Rasa) to make programs that understand intent, context, and even tone.</p>
             <p>By deploying a virtual assistant we built for FAQs, order tracking, and product suggestions, one of our e-commerce clients reduced their support tickets by half. The best part? Customers didn’t even realize they weren’t talking to a human.</p>
             <p>These bots are fully integrated into your website or web app and can connect with your CRM, ticketing system, or knowledge base. It’s smarter support—without the overhead.</p>`,

      `<h3>Personalization Engines</h3>
             <p>With our AI-driven personalization engines, we help you tailor content, product recommendations, and user flows based on behavior, preferences, and past actions.</p>
             <p>For example, we helped a media site boost engagement by 35% by recommending articles based on users’ browsing patterns and reading time. From personalized dashboards to dynamic homepage layouts, we use machine learning to make every user feel like your platform was built just for them.</p>
             <p>We can integrate personalization into any part of your web stack—ecommerce, content, SaaS, or enterprise apps—so users get relevant, timely, and engaging experiences every time they log in.</p>`,

      `<h3>Predictive Analytics</h3>
             <p>Make smarter decisions before problems happen. Our predictive analytics solutions use historical data and machine learning to uncover trends, detect risks, and forecast user behavior or business outcomes.</p>
             <p>Whether it’s predicting churn, sales, inventory needs, or user intent, we help you go from reactive to proactive. One client in the subscription space used our predictive dashboard to spot which users were likely to cancel—and saved 18% of them with timely retention offers.</p>
             <p>We build custom models and integrate them into your existing web systems with clean, interactive dashboards that your team can actually use—not just stare at. It’s about turning your data into decisions.</p>`,
    ],
    technologies: [
      "OpenAI GPT",
      "Dialogflow",
      "Rasa",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "Numpy",
      "Python",
      "Power BI",
      "Snowflake",
      "Tableau",
    ],
    benefits: [
      "Reduced support load with intelligent chatbots",
      "Highly personalized user experiences",
      "Predictive insights for smarter business decisions",
      "Custom AI models integrated with your stack",
      "Scalable machine learning pipelines",
      "Improved retention, engagement, and ROI",
    ],
  },
  "devops-ci-cd": {
    id: "devops-ci-cd",
    title: "DevOps and CI/CD Services",
    description:
      "Automating deployment, scaling, and monitoring for faster, safer software delivery.",
    image: AppIcons.devopsBG,
    content: [
      `<h3>CI/CD Pipeline Setup</h3>
         <p>From code commits to production releases, everything is done automatically by CI/CD processes that we set up. We use tools like GitHub Actions, GitLab CI, Azure DevOps, and Jenkins to make workflows that fit the stack and processes of your team.</p>
         <p>This means there will be no more "works on my machine" shocks or panic at the last minute when deploying. We can help you set up tests to run themselves, only release code that passes, and easily roll back when you need to.</p>
         <p>We set up a parallelized pipeline with automated testing and staging for one SaaS client, which cut release time from 45 minutes to less than 5 minutes. Shipping with us is always smaller, better, and faster.</p>`,

      `<h3>Containerization &amp; Orchestration</h3>
         <p>We help you use containers to package your apps and then use orchestration tools like Kubernetes, Docker Swarm, or ECS/EKS to safely scale them. Containerization ensures that your software works the same way on a laptop, in testing, and in production. Orchestration takes care of scaling, fault tolerance, and service management.</p>
         <p>We established a Kubernetes cluster on AWS, containerized their core services, and set up horizontal scaling for a client who was moving from a monolith to microservices. Their infrastructure got stronger, easier to handle, and ready for quick changes.</p>
         <p>It's no longer just big companies that use containers. Any team that wants to make operations easier, make their apps more portable, and sleep better at night can use them too.</p>`,

      `<h3>Monitoring &amp; Logging</h3>
         <p>You are able to have a functioning system if you can see what's going on inside. We set up centralized monitoring and logging so you’ll always know how your app is performing—and be the first to know when something goes wrong.</p>
         <p>Tools like Prometheus, Grafana, ELK Stack, Datadog, and CloudWatch let us visualize errors, monitor server health, and track application performance in real time. In fact, thanks to logs we set up, we identified a memory leak early for one client before it impacted users.</p>
         <p>Our approach to observability isn't about throwing logs into a black hole; it's about giving your team insight, meaningful alerts, and dashboards that actually get used.</p>`,
    ],
    technologies: [
      "GitHub Actions",
      "GitLab CI",
      "Azure DevOps",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "AWS ECS",
      "EKS",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Datadog",
      "AWS CloudWatch",
    ],
    benefits: [
      "Faster release cycles with CI/CD pipelines",
      "Reliable and repeatable deployments",
      "Scalable container-based infrastructure",
      "Real-time system monitoring and alerting",
      "Improved developer productivity",
      "Reduced human error and downtime",
    ],
  },
  "mobile-responsive-web": {
    id: "mobile-responsive-web",
    title: "Mobile-Responsive Web Development",
    description:
      "Designing seamless digital experiences that work beautifully across all mobile devices.",
    image: AppIcons.mobileResponsive,
    content: [
      `<h3>Mobile-First Design</h3>
    <p>Most consumers, of course, see your website from their phone rather than from a PC. We thus develop with a mobile-first strategy, building for the smallest screen first and then scaling back. Rather than forcing a desktop layout into a phone, we consider how information, navigation, and user flow should function given constrained space.</p>
    <p>This method enables us to produce more concentrated experiences—faster and cleaner ones as well. We focus especially on topics like button tap regions, thumb-friendly menus, adjustable grids, and content prioritization. For instance, we turned their whole layout strategy to mobile-first when we helped revamp a health services site, and within the first month, we experienced a 2x increase in appointment reservations from mobile users.</p>
    <p>It goes beyond merely "shrinking things down." It's about considering how your consumers connect with your brand when on the run. We will help you intentionally fix your mobile experience if it seems clumsy, antiquated, or difficult to use.</p>`,

      `<h3>AMP (Accelerated Mobile Pages)</h3>
    <p>Sometimes, even a three-second delay on mobile is enough to lose a potential customer. That’s where AMP (Accelerated Mobile Pages) makes a real difference. We help you build or convert content-heavy pages into lightning-fast, stripped-down versions that load almost instantly on mobile devices—even on slower connections.</p>
    <p>AMP is ideal for blogs, landing pages, news portals, and anywhere mobile speed really matters. It removes the bloat, simplifies scripts, and focuses on clean HTML, CSS, and caching techniques that dramatically improve load times and Google performance. For one content-based business, switching their articles to AMP helped reduce bounce rates by 35% and increased average mobile session duration.</p>
    <p>AMP doesn’t mean your site has to look boring. We keep it lightweight without compromising design or brand identity. It’s all about speed, simplicity, and serving your users what they came for—without the wait.</p>`,

      `<h3>Cross-Device Testing</h3>
    <p>Just because a site looks great on your laptop doesn’t mean it works well on your customer’s Android phone—or that budget tablet from three years ago. That’s why we do real cross-device testing, not just resize a browser window and call it a day.</p>
    <p>We manually test your website or web app across multiple screen sizes, operating systems, and real-world devices. iPhones, Samsung phones, iPads, older Androids, Windows laptops—you name it. We check layout consistency, font rendering, form behavior, scroll performance, and tap accuracy.</p>
    <p>One client came to us after realizing their checkout button was unclickable on a specific browser version—and they had no idea. After we implemented cross-device QA, we uncovered several small (but important) issues that were frustrating users and costing conversions.</p>
    <p>Automated tools help, but nothing beats eyes-on-device testing. We test how real users use your site—so you can deliver a great experience no matter where they land.</p>`,
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "AMP Framework",
      "Media Queries",
      "Chrome DevTools",
      "BrowserStack",
    ],
    benefits: [
      "Optimized for all screen sizes",
      "Improved mobile engagement and retention",
      "Faster load times with AMP",
      "Reduced bounce rates on mobile",
      "Enhanced accessibility and usability",
      "Higher SEO performance on mobile-first indexing",
    ],
  },
  "progressive-web-app": {
    id: "progressive-web-app",
    title: "Progressive Web App (PWA) Development",
    description:
      "Deliver fast, installable, and reliable web applications with native app-like experiences.",
    image: AppIcons.progressiveWebApp,
    content: [
      `<h3>Cross-platform Compatibility</h3>
         <p>A Progressive Web App (PWA) is the solution if you wish the speed and accessibility of a website with the feel and functionality of a mobile app. Our specialty at Moltech Solution Inc. is creating PWAs that are quick, installable, offline-ready, and interoperable across devices—giving consumers a seamless app-like experience without needing to visit an app store.</p>
         <p>A PWA can be a game-changer whether your goals are to increase engagement, speed loads, or lower bounce rates on mobile. After we swapped out their clunky mobile site for a PWA that worked offline and could be saved right to users&#39; home screens, one of our clients—a local food delivery startup—saw a 60% boost in repeat visits.</p>
         <p>We create not just "good enough" apps. Whatever the device or browser, we create PWAs that load rapidly, run smoothly, and feel native. It is the ideal balance of app-level performance with mobile reach.</p>`,

      `<h3>Fast and Installable</h3>
         <p>Your users abound on Android phones, iPhones, tablets, PCs, and all points in between. We thus ensure that every progressive web app we create is totally cross-platform compatible. Your app should look and work precisely as intended whether users are running Chrome, Safari, Edge, or Firefox.</p>
         <p>We test to guarantee consistent functionality and design responsiveness across actual devices rather than using emulators. This means layouts don&#39;t break on a different browser version, buttons are always tappable, and performance is seamless regardless of the platform.</p>
         <p>One of our e-commerce customers required their PWA to service consumers in low-connectivity but heavily iOS-used areas. We tuned for both so that, even on older devices, their software loaded fast and worked offline on Safari.</p>
         <p>The simple line is that we ensure your software runs wherever your user opens it—and works. Not any unusual bugs. Not one device specifically causing problems. Just a polished business experience.</p>`,
    ],
    technologies: [
      "React",
      "Next.js",
      "Workbox",
      "Web App Manifest",
      "Service Workers",
      "IndexedDB",
      "Lighthouse",
      "TypeScript",
      "Push API",
    ],
    benefits: [
      "Installable on mobile and desktop",
      "Offline access and caching support",
      "App-like experience on web",
      "Faster load speeds on slow networks",
      "No app store dependency",
      "Greater user engagement and retention",
    ],
  },
  "maintenance-support": {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description:
      "Reliable ongoing support, bug fixes, upgrades, and performance monitoring to keep your systems healthy.",
    image: AppIcons.maintenanceBG,
    content: [
      `<h3>Bug Fixes & SLA Support</h3>
    <p>Let’s be honest: no app is ever 100% bug-free. Even the most robust codebase can encounter unexpected issues or malfunction due to browser updates or accidental button clicks. That&#39;s why we are always available when the situation demands it.</p>
    <p>With our bug fix support, we don’t just say “we’ll get to it”—we actually do, fast. If something breaks, you reach out, and we jump in. And for critical issues, we’ve got SLA-based support, which just means we agree on how fast we’ll respond based on how serious it is.</p>`,

      `<h3>Framework Upgrades & Patch Management</h3>
    <p>You know how tech is—what’s cutting-edge today is outdated six months later. Browsers change, libraries evolve, and suddenly, your app is throwing warnings and missing features. We help keep things fresh with framework upgrades and patching so your platform doesn’t fall behind.</p>
    <p>We’re not fans of breaking stuff with rushed updates, so we test everything in staging first. Whether it&#39;s updating React, Angular, .NET, or handling dozens of dependency patches, we do it carefully and cleanly.</p>
    <p>One client was running on a super old version of their backend framework. They were worried that upgrading would break everything—but we handled it in phases, did full compatibility checks, and even cleaned up some legacy code along the way. End result? Smoother performance, fewer bugs, and new features unlocked.</p>`,

      `<h3>Performance Monitoring</h3>
    <p>If you fail to monitor performance, unexpected disruptions often occur, typically during a product launch or significant traffic surge. We set up performance monitoring to help you avoid those surprises.</p>
    <p>We don’t just glance at graphs—we actually dig into the numbers. Is the server slow? Are users bouncing because something takes too long to load? Are there spikes in errors at certain times of day? We find out, and we fix it.</p>
    <p>For one client, we caught a memory leak in their server just by watching trends over a couple of weeks. They had no idea anything was wrong—until we showed them. Fixing it early saved them from a big crash later.</p>
    <p>Good monitoring is like having a dashboard in your car—you might not always look at it, but you’re overjoyed it’s there when something’s off. We will set it up and monitor it for you.</p>`,
    ],
    technologies: [
      "React",
      "Angular",
      ".NET",
      "Node.js",
      "Docker",
      "GitHub Actions",
      "Sentry",
      "New Relic",
      "Azure Monitor",
    ],
    benefits: [
      "Fast bug resolution and SLA support",
      "Secure and tested framework updates",
      "Performance insights with real-time alerts",
      "Avoid critical downtimes and data loss",
      "Proactive system health management",
      "Long-term stability and improvement",
    ],
  },
};

// Utility functions
export const getServiceDetails = (serviceId) => {
  return serviceDetails[serviceId] || null;
};

export const getAllServices = () => {
  return Object.values(serviceDetails);
};

// Dummy React component to satisfy Next.js
const DummyComponent = () => null;
export default DummyComponent;