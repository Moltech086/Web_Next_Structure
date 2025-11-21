"use client";
import React, { useEffect, useState } from "react";
import "./HowWeWorkPage.scss";
import Iconify from "@/components/ui/icons/Iconify";
import Link from "next/link";
import { Icon } from "@iconify/react";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import CTASection from "@/components/ctaSection/CTASection";
import { useAddContactUsMutation } from "@/app/services/contactUsAPI";
import SwalAlert from "@/services/swalService/SwalService";
import { AppIcons } from "@/data/appIcons";

const models = [
  {
    id: 0,
    title: "Dedicated Team Model",
    icon: "mdi:account-group-outline",
    caption: "Long-term collaboration with your own expert team.",
    description:
      "Do you want to hire someone else to handle your IT work while still maintaining control and quality? With our Dedicated Team Model, you'll get a team of developers, designers, and QA experts who only work on your project. This strategy is excellent for long-term product development, scaling startups, or adding new features all the time.",
    benefits: [
      "100% dedicated team for your project",
      "Full control over process and priorities",
      "No hiring or HR hassle",
      "Scalable for long-term growth",
      "Direct communication with your team",
    ],
  },
  {
    id: 1,
    title: "Fixed Scope Model",
    icon: "mdi:file-document-outline",
    caption: "Clear deliverables, predictable outcomes.",
    description:
      "Our Fixed Scope Model is the best solution for outsourcing IT projects with specified goals and due dates. We finish your project on schedule and under budget by breaking it up into segments with clear deliverables.",
    benefits: [
      "Well-defined project milestones",
      "Predictable costs and timelines",
      "Clear deliverables and acceptance criteria",
      "Ideal for MVPs and redesigns",
      "Minimal scope creep",
    ],
  },
  {
    id: 2,
    title: "Time & Material Model",
    icon: "mdi:clock-outline",
    caption: "Pay only for actual time and resources used.",
    description:
      "If the work needs to be modified as requirements change, our Time & Material Model is the best choice. You only pay for the time and resources you use — ideal for agile development or ongoing improvements.",
    benefits: [
      "Flexible approach for changing requirements",
      "Perfect for agile software development",
      "Ideal for testing new product ideas",
      "Great for continuous improvements",
      "Suitable for both startups and large companies",
    ],
  },
  {
    id: 3,
    title: "Hybrid Engagement",
    icon: "mdi:shuffle-variant",
    caption: "Mix and match models for ultimate flexibility.",
    description:
      "Our Hybrid Engagement Model allows you to mix team augmentation, fixed scope, and T&M approaches. Great for projects with varying phases and needs.",
    benefits: [
      "Customized engagement for your needs",
      "Combine fixed, T&M, and team models",
      "Adaptable to changing priorities",
      "Balance cost, speed, and quality",
      "Ideal for complex, multi-phase projects",
    ],
  },
  {
    id: 4,
    title: "Staff Augmentation",
    icon: "mdi:account-plus-outline",
    caption: "Expand your team with top talent, instantly.",
    description:
      "Scale your team quickly with our skilled engineers and managers. Ideal for ongoing development without the overhead of hiring.",
    benefits: [
      "Rapid team scaling",
      "Access to specialized skills",
      "No long-term hiring commitment",
      "Maintain control over priorities",
      "Meet tight deadlines with ease",
    ],
  },
  {
    id: 5,
    title: "Project Partnership Model",
    icon: "mdi:handshake-outline",
    caption: "Shared investment and risk in project success.",
    description:
      "We collaborate on projects with shared goals and accountability, perfect for long-term product development and digital transformation.",
    benefits: [
      "Shared risk and reward",
      "Aligned incentives for success",
      "Long-term collaboration",
      "Transparent communication",
      "End-to-end project support",
    ],
  },
  {
    id: 6,
    title: "Technology Partnership Model",
    icon: "mdi:cpu-64-bit",
    caption: "Strategic technology collaboration for growth.",
    description:
      "Collaborate with Moltech to deliver top-tier technology services through joint ventures, revenue sharing, or white-label delivery.",
    benefits: [
      "Strategic technology partnership",
      "Revenue sharing or commission models",
      "Joint product development",
      "Expand your service offerings",
      "Reliable delivery partner",
    ],
  },
];
const benefits = [
  {
    icon: "mdi:rocket-launch-outline",
    title: "Driving Results, Together",
    description:
      "Partner with Moltech to scale confidently, innovate faster, and turn your vision into real outcomes.",
  },
  {
    icon: "mdi:trending-up",
    title: "Beyond Outsourcing: A Partnership for Growth",
    description:
      "Moltech becomes an extension of your team, empowering you to scale faster, innovate confidently, and achieve lasting impact.",
  },
  {
    icon: "mdi:chart-bar",
    title: "Built to Scale with You",
    description:
      "Grow without limits while staying in control, with engagement models tailored to your evolving goals.",
  },
  {
    icon: "mdi:target-variant",
    title: "Partnerships That Propel You Forward",
    description:
      "Work with Moltech to move faster, build smarter, and achieve growth that lasts.",
  },
  {
    icon: "mdi:flash-outline",
    title: "The Smart Way to Scale",
    description:
      "Partner with Moltech to expand your capabilities while maintaining quality, speed, and control.",
  },
  {
    icon: "mdi:handshake-outline",
    title: "Driving Results, Together",
    description:
      "At Moltech, we don’t just deliver projects; we align with your vision to create real, measurable impact.",
  },
];
const engagementSteps = [
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Discover & Understand",
    description:
      "We dive deep to understand your vision, goals, and challenges, ensuring we’re aligned from the start.",
  },
  {
    icon: "mdi:hand-okay",
    title: "Choose the Perfect Fit",
    description:
      "Select the engagement model and team structure that best matches your needs and culture.",
  },
  {
    icon: "mdi:clipboard-list-outline",
    title: "Plan & Onboard",
    description:
      "We co-create a roadmap, onboard your team, and set up tools and processes for seamless collaboration.",
  },
  {
    icon: "mdi:rocket-launch-outline",
    title: "Build & Iterate",
    description:
      "We deliver in agile cycles, gathering feedback and refining the product to ensure it meets your goals.",
  },
  {
    icon: "mdi:chart-multiline",
    title: "Launch & Scale",
    description:
      "We launch, support, and help you scale for impact—ensuring long-term success and growth.",
  },
];

export const locations = [
  {
    id: 1,
    city: "USA",
    flagImage: AppIcons.USA,
    address: "2000 N Central Expressway, Suite 220, Plano, TX 75074, USA",
    position: { top: "40%", left: "15%" },
  },
  {
    id: 2,
    city: "Singapore",
    flagImage: AppIcons.Singapore,
    address: "408 Joo Chiat Place Singapore (428085)",
    position: { top: "60%", left: "74%" },
  },
  {
    id: 3,
    city: "Switzerland",
    flagImage: AppIcons.Switzerland,
    address: "Kirchmooshöhe 4 4800 Zofingen Switzerland",
    position: { top: "35%", left: "49%" },
  },
  {
    id: 4,
    flagImage: AppIcons.India,
    city: "India",
    address:
      "5th Floor, 506, Dwarkesh business hub Opp. Visamo Society, Motera, 380005, Ahmedabad, Gujarat",
    position: { top: "47%", left: "66%" },
  },
];

const HowWeWork = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "Partnership",
    message: "",
  });

  const [
    addContactUs,
    {
      isLoading: isContactAdding,
      isSuccess: isContactSuccess,
      isError: isContactError,
      data: contactData,
      error: contactError,
    },
  ] = useAddContactUsMutation();

  const { success } = SwalAlert();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return value.trim() ? "" : "First name is required";
      case "lastName":
        return value.trim() ? "" : "Last name is required";
      case "email":
        if (!value) return "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^\+?[0-9]{10,15}$/.test(value)) {
          return "Enter a valid phone number (10–15 digits)";
        }
        return "";
      case "message":
        return value.trim() ? "" : "Please Write a Message";
      default:
        return "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      let FullName = `${formData.firstName} ${formData.lastName}`.trim();
      const req = {
        FullName,
        EmailAddress: formData.email,
        Phone: formData.phone,
        SubjectType: formData.subject,
        Message: formData.message,
      };

      addContactUs(req);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    if (isContactSuccess && contactData) {
      if (!contactData.hasError) {
        if (contactData.errorMessage) {
          success(contactData.errorMessage);
        } else {
          success(
            "Our team will connect with you shortly.",
            "We’ve received your response!"
          );
        }
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "Idea",
          message: "",
        });
        setErrors({});
        setIsLoading(false);
      }
    }
  }, [isContactSuccess, contactData]);

  return (
    <>

      <div className="how-we-work-page">
        <section className="hero-modern">
          {/* Animated Background Shapes */}
          <svg className="hero-modern__bg-svg hero-modern__bg-svg--shape1" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="60" fill="#ef5323" opacity="0.08" />
          </svg>
          <svg className="hero-modern__bg-svg hero-modern__bg-svg--shape2" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r="45" fill="#ef5323" opacity="0.12" />
          </svg>
          <svg className="hero-modern__bg-svg hero-modern__bg-svg--shape3" viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="35" fill="#ef5323" opacity="0.10" />
          </svg>
          <svg className="hero-modern__bg-svg hero-modern__bg-svg--shape4" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="30" fill="#ef5323" opacity="0.15" />
          </svg>

          <div className="hero-modern__container">
            {/* Left Content */}
            <div className="hero-modern__content">
              <h1 className="hero-modern__title">
                How We Work:
                <span className="hero-modern__title-highlight">
                  Partnership Models
                </span>
                <span className="hero-modern__title-secondary">& Process</span>
              </h1>

              <div className="hero-modern__subtitle">
                Build With Confidence: Flexible Partnership Models That Fit Your Vision
              </div>

              <div className="hero-modern__desc">
                From fixed projects to dedicated teams, our partnership models are
                designed to align with your business goals, ensuring clarity,
                accountability, and quality delivery every step of the way.
              </div>

              <div className="hero-modern__cta-group">
                <Link href="/contact-us" className="hero-modern__cta hero-modern__cta--primary">
                  Let&apos;s Connect
                  <Icon icon="mdi:arrow-right" />
                </Link>
              </div>

            </div>

            <div className="hero-modern__features">
              <div className="hero-modern__features-grid">
                <div className="hero-modern__feature-card">
                  <div className="hero-modern__feature-icon">
                    <Icon icon="mdi:shield-outline" />
                  </div>
                  <div>
                    <h3 className="hero-modern__feature-title">Secure & Reliable</h3>
                    <p className="hero-modern__feature-desc">Enterprise-grade security with 99.9% uptime guarantee</p>
                  </div>
                </div>

                <div className="hero-modern__feature-card">
                  <div className="hero-modern__feature-icon">
                    <Icon icon="mdi:account-group-outline" />
                  </div>
                  <div>
                    <h3 className="hero-modern__feature-title">Expert Team</h3>
                    <p className="hero-modern__feature-desc">Certified professionals with 10+ years experience</p>
                  </div>
                </div>

                <div className="hero-modern__feature-card">
                  <div className="hero-modern__feature-icon">
                    <Icon icon="mdi:rocket-launch-outline" />
                  </div>
                  <div>
                    <h3 className="hero-modern__feature-title">Fast Delivery</h3>
                    <p className="hero-modern__feature-desc">Agile methodology ensuring rapid project completion</p>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="hero-modern__stats">
                <div className="hero-modern__stats-grid">
                  <div className="hero-modern__stat">
                    <div className="hero-modern__stat-number">200+</div>
                    <div className="hero-modern__stat-label">Projects Delivered</div>
                  </div>
                  <div className="hero-modern__stat">
                    <div className="hero-modern__stat-number">98%</div>
                    <div className="hero-modern__stat-label">Client Satisfaction</div>
                  </div>
                  <div className="hero-modern__stat">
                    <div className="hero-modern__stat-number">24/7</div>
                    <div className="hero-modern__stat-label">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="collaborative-section redesigned">
          {/* Background Elements */}
          <div className="background-elements">
            <div className="bg-blur bg-blur-1"></div>
            <div className="bg-blur bg-blur-2"></div>
            <div className="bg-blur bg-blur-3"></div>
          </div>

          <div className="collab-inner">
            <div className="section-header">

              {/* Title */}
              <h2 className="collab-title">
                A{' '}
                <span className="title-highlight">
                  Collaborative{' '}
                  <div className="title-underline"></div>
                </span>
                Approach to Building{' '}
                <span className="title-accent">Great Software</span>
              </h2>

              {/* Description */}
              <p className="collab-description">
                At Moltech, excellent software emerges from effective collaboration. We believe that the best solutions are born when diverse minds come together, combining technical expertise with business insight. Our approach goes beyond traditional outsourcing – we become an extension of your team, understanding your vision, challenges, and goals to deliver software that truly makes a difference.
              </p>
            </div>

            {/* Features Grid */}
            <div className="collab-features-grid">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon icon="mdi:account-group" className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Team Extension</h3>
                  <p className="feature-description">
                    We seamlessly integrate with your existing team, bringing specialized skills and fresh perspectives to drive your projects forward.
                  </p>
                </div>
                <div className="feature-hover-overlay"></div>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon icon="mdi:bullseye-arrow" className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Goal Alignment</h3>
                  <p className="feature-description">
                    Every line of code serves your business objectives. We ensure perfect alignment between technical execution and strategic goals.
                  </p>
                </div>
                <div className="feature-hover-overlay"></div>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Icon icon="mdi:lightbulb-on" className="feature-icon" />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Innovation Focus</h3>
                  <p className="feature-description">
                    We don&apos;t just follow trends – we help create them. Our innovative mindset drives breakthrough solutions for complex challenges.
                  </p>
                </div>
                <div className="feature-hover-overlay"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="partnership-section split-tabs desktop-partnership-section">
          <div className="partnership-header">
            <span className="partnership-badge">WE ARE FLEXIBLE</span>
            <h3>Our Partnership Model</h3>
            <p>
              We offer flexible partnership models designed to fit your business
              needs and growth stage. Each model ensures you receive high-quality
              solutions that help you reach your goals efficiently while
              maintaining full control over your project.
            </p>
          </div>

          <div className="partnership-cards-row">
            <aside className="partnership-sidebar">
              <div className="sidebar-title">Partnership Models</div>
              <ul className="model-list" role="tablist">
                {models.map((model, index) => (
                  <li
                    key={model.id}
                    id={`tab-${index}`}
                    role="tab"
                    aria-selected={activeTab === index}
                    tabIndex={activeTab === index ? 0 : -1}
                    className={`model-list-item ${activeTab === index ? "active" : ""
                      }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <Icon icon={model.icon} />
                    {model.title}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="partnership-content-panels">
              {models.map((model, index) => (
                <div
                  key={model.id}
                  role="tabpanel"
                  aria-labelledby={`tab-${index}`}
                  className={`model-panel ${activeTab === index ? "active" : ""}`}
                  hidden={activeTab !== index}
                >
                  <div className="card-header-row">
                    <span
                      className="partnership-icon"
                      aria-label={`${model.title} Icon`}
                      title={model.title}
                    >
                      <Iconify icon={model.icon} width="22" />
                    </span>
                    <div className="header-text">
                      <h3>{model.title}</h3>
                      <div className="card-caption">{model.caption}</div>
                    </div>
                  </div>
                  <p>{model.description}</p>
                  <div className="benefits-box">
                    <div className="benefits-title">Key Benefits</div>
                    <ul className="benefits-list">
                      {model.benefits.map((benefit, i) => (
                        <li key={i}>
                          <span className="benefit-check">✔</span> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact-us" className="cta-button">
                    Get Started Today
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mobile-partnership-section">
          <div className="mobile-partnership-header">
            <h3>Our Partnership Model</h3>
            <p>
              We offer flexible partnership models designed to fit your business
              needs and growth stage. Each model ensures you receive high-quality
              solutions that help you reach your goals efficiently while
              maintaining full control over your project.
            </p>
          </div>
          <div className="mobile-partnership-cards">
            {models.map(({ icon, title, description }, i) => (
              <div key={i} className="mobile-card">
                <div className="mobile-card-icon" aria-label={`${title} icon`}>
                  <Iconify icon={icon} width="36" height="36" />
                </div>
                <h3 className="mobile-card-title">{title}</h3>
                <p className="mobile-card-desc">{description}</p>
              </div>
            ))}
          </div>
        </section>
        <CTASection />
        <section className="benefits-section">
          <div className="benefits-header">
            <h3>Benefits of Our Engagement Models</h3>
          </div>
          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon-title">
                  <span className="benefit-icon">
                    <Iconify icon={item.icon} width={28} height={28} />
                  </span>
                  <div className="benefit-title">{item.title}</div>
                </div>
                <div className="benefit-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="engagement-process-section">
          <div className="engagement-header">
            <h3>Our Engagement Process</h3>
            <p className="engagement-subtitle">
              From Idea to Impact: A Journey We Take Together
            </p>
          </div>

          <div className="engagement-steps-row">
            {engagementSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`engagement-step step${index + 1}`}>
                  <div className="step-icon" aria-label={step.title}>
                    <Iconify icon={step.icon} width={32} height={32} />
                  </div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-desc">{step.description}</div>
                </div>
                {index !== engagementSteps.length - 1 && (
                  <div className="engagement-connector">
                    <Iconify icon="mdi:arrow-right-thin" width={32} height={32} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="engagement-bg-dots" />
        </section>
        <section className="how-we-work-contact-wrapper">
          <div className="container">
            <div className="contact-header">
              <h3>Let&apos;s Start a Conversation</h3>
              <p>Ready to transform your ideas into digital reality? Get in touch with our expert team.</p>
            </div>

            <div className="contact-container">
              {/* LEFT SECTION - Contact Info */}
              <div className="contact-info">
                <div className="info-content">
                  <div className="info-header">
                    <h3>Get In Touch</h3>
                    <p>We&apos;re here to help you build something amazing</p>
                  </div>

                  <div className="contact-details">
                    <div className="info-item">
                      <div className="icon-wrapper">
                        <Icon icon="mdi:phone" width={20} height={20} />
                      </div>
                      <div className="info-text">
                        <span className="label">Phone</span>
                        <span className="value">+1-945-209-7691</span>
                      </div>
                    </div>

                    {/* <div className="info-item">
                      <div className="icon-wrapper">
                        <Icon icon="mdi:whatsapp" width={20} height={20} />
                      </div>
                      <div className="info-text">
                        <span className="label">WhatsApp</span>
                        <span className="value">+1-945-209-7691</span>
                      </div>
                    </div> */}

                    <div className="info-item">
                      <div className="icon-wrapper">
                        <Icon icon="mdi:email" width={20} height={20} />
                      </div>
                      <div className="info-text">
                        <span className="label">Email</span>
                        <span className="value">inquiry@mol-tech.us</span>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="icon-wrapper">
                        <Icon icon="mdi:map-marker" width={20} height={20} />
                      </div>
                      <div className="info-text">
                        <span className="label">Address</span>
                        <span className="value">
                          2000 N Central Expressway
                          <br />
                          Suite 220
                          <br />
                          Plano, TX 75074
                          <br />
                          United States
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="social-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                      <a href="https://www.facebook.com/moltechsolutions.pvt.ltd" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:facebook" width={20} height={20} />
                      </a>
                      <a href="https://www.instagram.com/moltechsolutions.pvt.ltd/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:instagram" width={20} height={20} />
                      </a>
                      <a href="https://www.linkedin.com/company/moltech-solutions-inc/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:linkedin" width={20} height={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="tech-pattern">
                  <div className="pattern-dot"></div>
                  <div className="pattern-dot"></div>
                  <div className="pattern-dot"></div>
                  <div className="pattern-line"></div>
                  <div className="pattern-line"></div>
                </div>
              </div>

              {/* RIGHT SECTION - Form */}
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name <span>*</span></label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.firstName ? 'error' : ''}
                      />
                      {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last Name <span>*</span></label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.lastName ? 'error' : ''}
                      />
                      {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address <span>*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number <span>*</span></label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 012 3456 789"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.phone ? 'error' : ''}
                      />
                      {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-group subject-group">
                    <label>How can we help you?</label>
                    <div className="radio-options">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="subject"
                          value="Idea"
                          checked={formData.subject === "Idea"}
                          onChange={handleChange}
                        />
                        <span className="radio-custom"></span>
                        <span className="radio-label">Share Your Idea</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="subject"
                          value="Partnership"
                          checked={formData.subject === "Partnership"}
                          onChange={handleChange}
                        />
                        <span className="radio-custom"></span>
                        <span className="radio-label">Partnership Opportunity</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group message-group">
                    <label htmlFor="message">Tell us about your project <span>*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Describe your project requirements, goals, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      className={errors.message ? 'error' : ''}
                    />
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  <div className="form-submit">
                    <button type="submit" disabled={isLoading} className="submit-btn" aria-label="Send message">
                      {isLoading ? (
                        <>
                          <Icon icon="svg-spinners:180-ring-with-bg" width={20} height={20} />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Icon icon="mdi:send" width={20} height={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <BranchFooter />
      </div>
    </>
  );
};

export default HowWeWork;
