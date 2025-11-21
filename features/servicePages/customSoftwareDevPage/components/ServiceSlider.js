import React from "react";
import "../../ServiceSlider.scss";
import Iconify from "@/components/ui/icons/Iconify";

const ServiceSlider = () => {
  const reasons = [
    {
      icon: "streamline:target-remix",
      title: "Custom-Built Software Aligned to Your Business Goals & Process",
      description:
        "We don’t repurpose templates or use generic code. Every solution is uniquely designed around your specific workflows, challenges, and growth objectives—whether you’re a startup or a multinational organization.",
      highlight: "",
    },
    {
      icon: "streamline-ultimate:performance-increase",
      title: "Boost Efficiency and Reduce Operational Costs",
      description:
        "By automating manual processes, integrating systems, and streamlining operations, our solutions help you reduce inefficiencies and achieve more with fewer resources.",
      highlight: "Always in the loop",
    },
    {
      icon: "famicons:build-outline",
      title: "Scalable, Future-Ready Architecture",
      description:
        "We build software with growth in mind—modular, cloud-ready, and easy to evolve as your business scales. Whether you're adding users, features, or integrations, your system grows with you.",
      highlight: "Your growth partner for years",
    },
    {
      icon: "material-symbols-light:security",
      title: "Strong Focus on Data Security & Compliance",
      description:
        "Data protection is at the core of everything we build. We follow industry best practices and regional regulations like GDPR (Europe) and CCPA (USA) to ensure your platform remains secure and compliant.",
      highlight: "ROI-focused development",
    },
    {
      icon: "streamline-ultimate:multiple-users-1",
      title: "Experienced, Agile Team with Global Perspective",
      description:
        "Our certified developers, UI/UX designers, and project managers use agile methodologies to deliver on-time, high-quality results. With clients across North America and Europe, we bring international experience with a localized approach.",
      highlight: "Complete end-to-end service",
    },
    {
      icon: "mdi:comments-outline",
      title: "End-to-End Partnership & Transparent Communication",
      description:
        "From the first discovery call to deployment and beyond, we act as your technology partner—not just a vendor. You get real-time updates, direct access to decision-makers, and long-term support post-launch.",
      highlight: "Maximum value for your investment",
    },
  ];

  const stats = [
    {
      number: "150+",
      label: "Projects Delivered",
      description: "Successfully completed across various industries",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project feedback surveys",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance when you need it",
    },
    {
      number: "5+ Years",
      label: "Average Partnership",
      description: "Long-term relationships with our clients",
    },
  ];

  const benefits = [
    "Dedicated project manager and direct access to your development team",
    "Regular progress updates with demos and milestone reviews",
    "Comprehensive documentation and training for your team",
    "Post-launch support with proactive monitoring and maintenance",
    "Scalable architecture designed to grow with your business",
    "Industry best practices for security, performance, and reliability",
    "Agile development process with flexibility for changing requirements",
    "Competitive pricing with transparent, no-surprise billing",
  ];

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="heading-block">
          <h2 className="headline-title">
            Why Choose{" "}
            <span className="highlight-text"> Moltech Solutions Inc.</span> for
            Custom Software Development Services ?
          </h2>
          <p>
            When it comes to custom software, choosing the right<span className="highlight"> development
            partner</span> can make or break your <span className="highlight">digital transformation. At Moltech
            Solutions Inc.</span>, we combine deep technical expertise, industry
            understanding, and a global delivery model to create software that
            delivers <span className="highlight">measurable business outcomes</span>.
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

        {/* <div className="stats-section">
          <h3>Proven Track Record</h3>
          <p>Numbers that speak to our commitment and expertise</p>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="benefits-section">
          <h3>What You Get When You Work With Us</h3>
          <p>Beyond just great software—a complete partnership experience</p>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <Iconify icon="charm:circle-tick" className="benefit-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceSlider;
