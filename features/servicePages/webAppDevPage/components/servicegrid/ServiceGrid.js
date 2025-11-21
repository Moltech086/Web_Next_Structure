import React from "react";
import Iconify from "@/components/ui/icons/Iconify";
import "./ServiceGrid.scss";
import Link from "next/link";

const ServiceGrid = ({ onServiceSelect }) => {
  const services = [
    {
      id: "custom-web-development",
      icon: "tabler:settings-code",
      title: "Custom Web Application Development",
      description:
        "Tailored web applications designed specifically for your business processes, needs, and goals.",
      features: [
        "Enterprise Web Solutions",
        "SaaS Application Development",
        "E-commerce &amp; Marketplace Platforms",
        "Web Application Development",
        "Real-Time Applications",
        "Single-Page Applications (SPAs)",
        "CMS Development",
        "Workflow Automation Systems",
        "Client Portals",
      ],
    },
    {
      id: "front-end-development",
      icon: "ph:code-simple-light",
      title: "Front End Development",
      description:
        "Custom e-commerce platforms and multi-vendor marketplaces for your business model.",
      features: [
        "UI/UX Optimization",
        "Performance Optimization",
        "Responsive Design",
        "Motion UI Animations",
      ],
    },
    {
      id: "integration-migration",
      icon: "carbon:data-share",
      title: "Integration & Migration Services",
      description:
        "Streamlined system integration and secure data migration with legacy modernization and robust API strategies.",
      features: [
        "Third-party Integrations",
        "API Gateway & Management",
        "Data Migration System",
        "Legacy System Modernization",
        "API and Authentication Integration",
      ],
    },

    {
      id: "backend-development",
      icon: "ph:stack-light",
      title: "Backend Development",
      description:
        "Scalable, secure, and high-performance backend solutions tailored to power modern applications and digital platforms.",
      features: [
        "API Development",
        "Database Design & Query Optimization",
        "Cloud Integrations",
        "Microservices Architecture",
        "Serverless Architecture",
      ],
    },
    {
      id: "security-compliance",
      icon: "material-symbols:shield-lock-outline",
      title: "Security and Compliance",
      description:
        "Protect your systems and data with real-world security hardening, role-based access control, and audit-ready compliance support.",
      features: [
        "End-to-End Security Hardening",
        "Penetration Testing & Vulnerability Scans",
        "GDPR & CCPA Compliance",
        "Role-Based Access Control (RBAC)",
        "Compliance Readiness",
      ],
    },

    {
      id: "cloud-native-development",
      icon: "mdi:cloud-braces",
      title: "Cloud-Native Development",
      description:
        "Build modular, scalable apps designed for the cloud—with serverless, auto-scaling, and resilient architectures.",
      features: [
        "Cloud-Native Architecture",
        "Serverless Deployment",
        "Auto-scaling & Load Balancing",
      ],
    },

    {
      id: "ai-ml-integration",
      icon: "mdi:robot-outline",
      title: "AI & Machine Learning Integration",
      description:
        "Enhance your applications with intelligent AI solutions—from smart chatbots to predictive analytics and personalized experiences.",
      features: [
        "AI Chatbots & Virtual Assistants",
        "Personalization Engines",
        "Predictive Analytics Dashboards",
      ],
    },
    {
      id: "devops-ci-cd",
      icon: "mdi:dev-to",
      title: "DevOps & CI/CD Services",
      description:
        "Automate delivery, monitor systems, and scale confidently with powerful CI/CD pipelines, container orchestration, and DevOps best practices.",
      features: [
        "CI/CD Pipeline Setup",
        "Containerization & Orchestration",
        "Monitoring & Logging",
      ],
    },

    {
      id: "mobile-responsive-web",
      icon: "mdi:cellphone-link",
      title: "Mobile-Responsive Web Development",
      description:
        "Deliver seamless, lightning-fast experiences across all devices with mobile-first design, AMP, and rigorous cross-device testing.",
      features: [
        "Mobile-First Design",
        "Accelerated Mobile Pages (AMP)",
        "Cross-Device & Browser Testing",
      ],
    },
    {
      id: "progressive-web-app",
      icon: "material-symbols:progress-activity",
      title: "Progressive Web App (PWA) Development",
      description:
        "Deliver fast, installable, and offline-capable web apps that work seamlessly across all devices and browsers.",
      features: ["Cross-platform Compatibility", "Fast and Installable"],
    },
    {
      id: "maintenance-support",
      icon: "mdi:tools",
      title: "Maintenance & Support",
      description:
        "Keep your applications secure, fast, and up-to-date with proactive bug fixes, framework upgrades, and performance monitoring.",
      features: [
        "Bug Fixes & SLA-Based Support",
        "Framework Upgrades & Patch Management",
        "Performance Monitoring & Optimization",
      ],
    },
  ];

  return (
    <section className="services-grid">
      <div className="container">
        <div className="header">
          <h2>
            Comprehensive{" "}
            <span className="highlight">Web Development Services</span>
          </h2>
          <p>
            From custom web applications to enterprise solutions, we provide
            end-to-end development services tailored to your business needs.
          </p>
        </div>

        <div className="grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              // onClick={() => onServiceSelect(service.id)}
            >
              <div className="card-header">
                <div className="card-title">
                  <div className="icon-wrapper">
                    <Iconify icon={service.icon} className="icon" />
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
                <Link href={`/services/web-application-development/${service.id}`} className="learn-more">
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
