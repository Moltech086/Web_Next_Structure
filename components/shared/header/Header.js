"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AppIcons } from "../../../data/appIcons";
import "./Header.scss";
import Iconify from "@/components/ui/icons/Iconify";
import Buttons from "@/components/ui/button/Buttons";

const servicesData = [
  {
    category: "Software Development",
    icon: "lsicon:setting-outline",
    items: [
      {
        title: "Custom Software Development",
        description: "Tailored solutions for unique business needs",
        href: "/services/custom-software-development",
      },
      {
        title: "Web App Development",
        description: "Scalable, responsive, and modern web applications",
        href: "/services/web-application-development",
      },
      {
        title: "Mobile App Development",
        description: "Cross-platform apps for iOS and Android",
        href: "/services/mobile-application-development",
      },
    ],
  },
  {
    category: "IT Consulting & Design",
    icon: "clarity:design-line",
    items: [
      {
        title: "Business Software Consulting",
        description: "Expert guidance for software planning and growth",
        href: "/services/business-software-consulting",
      },
      {
        title: "UI/UX Design and Development",
        description: "Engaging, user-centered digital experiences",
        href: "/services/ui-ux-design-and-development",
      },
    ],
  },
  {
    category: "AI & Data Solutions",
    icon: "hugeicons:ai-brain-03",
    items: [
      {
        title: "AI Solutions",
        description: "Smart automation with machine learning models",
        href: "/services/ai-solutions",
      },
      {
        title: "Data Preprocessing and Cleaning",
        description: "Structured, clean data for reliable insights",
        href: "/services/data-preprocessing-and-cleaning",
      },
    ],
  },
  {
    category: "Quality Assurance",
    icon: "iconamoon:certificate-badge-light",
    items: [
      {
        title: "Software Testing & QA",
        description: "Bug-free, high-performance product delivery",
        href: "/services/software-testing-and-qa",
      },
    ],
  },
  {
    category: "Team & Resource Support",
    icon: "fluent:people-team-32-regular",
    items: [
      {
        title: "Staff Augmentation",
        description: "On-demand tech talent to scale your team",
        href: "/services/staff-augmentation",
      },
    ],
  },
  {
    category: "Business Support Services",
    icon: "streamline-ultimate:human-resources-businessman",
    items: [
      {
        title: "Accounting",
        description: "Accurate, compliant financial management",
        href: "/services/accounting",
      },
    ],
  },
];

const technologyData = [
  {
    category: "Frontend",
    icon: "streamline-ultimate:coding-apps-website-browser-image-bold",
    items: [
      {
        title: "React.js",
        href: "/technology/react-js-development",
      },
      {
        title: "Next.js",
        href: "/technology/next-js-ssr-development-services/",
      },
      {
        title: "Angular",
        href: "/technology/angular-development-services/",
      },
      {
        title: "Vue.js",
        href: "/technology/",
      },
      {
        title: "JavaScript",
        href: "/technology/javascript-development/",
      },
      {
        title: "HTML5",
        href: "/technology/",
      },
    ],
  },
  {
    category: "Backend",
    icon: "streamline-sharp:browser-code-2-solid",
    items: [
      {
        title: ".NET",
        href: "/technology/microsoft-dotnet-8-development/",
      },
      {
        title: "Node.js",
        href: "/technology/nodejs-development-services/",
      },
      {
        title: "Python",
        href: "/technology/python-development-services/",
      },
      {
        title: "Java",
        href: "/technology/",
      },
      {
        title: "Express.js",
        href: "/technology/",
      },
    ],
  },
  {
    category: "Mobile",
    icon: "icomoon-free:mobile",
    items: [
      {
        title: "React Native",
        href: "/technology/react-native-development/",
      },
      {
        title: "Flutter",
        href: "/technology/flutter-development-services/",
      },
      {
        title: "Kotlin",
        href: "/technology/",
      },
      {
        title: "Swift",
        href: "/technology/",
      },
    ],
  },
  {
    category: "Database",
    icon: "healthicons:database",
    items: [
      {
        title: "Microsoft SQL",
        href: "/technology/",
      },
      {
        title: "PostgreSQL",
        href: "/technology/",
      },
      {
        title: "MY SQL",
        href: "/technology/",
      },
      {
        title: "MongoDB",
        href: "/technology/",
      },
      {
        title: "Firebase",
        href: "/technology/",
      },
      {
        title: "Redis",
        href: "/technology/",
      },
    ],
  },

  {
    category: "Cloud & DevOps",
    icon: "mdi:cloud-cog-outline",
    items: [
      {
        title: "Microsoft Azure",
        href: "/technology/",
      },
      {
        title: "AWS",
        href: "/technology/",
      },
      {
        title: "Docker",
        href: "/technology/",
      },
      {
        title: "Kubernetes",
        href: "/technology/",
      },
      {
        title: "GitHub Actions",
        href: "/technology/",
      },
      {
        title: "Terraform",
        href: "/technology/",
      },
    ],
  },
  {
    category: "UI/UX",
    icon: "mdi:palette",
    items: [
      {
        title: "CSS",
        href: "/technology/",
      },
      {
        title: "SCSS",
        href: "/technology/",
      },
      {
        title: "Figma",
        href: "/technology/figma-design-services/",
      },
      {
        title: "Adobe XD",
        href: "/technology/",
      },
      {
        title: "Sketch",
        href: "/technology/",
      },
      {
        title: "Canva",
        href: "/technology/",
      },
      {
        title: "Adobe Illustrator",
        href: "/technology/",
      },
    ],
  },
];

const homeData = [
  {
    category: "Home",
    items: [
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "How We Work?",
        href: "/how-we-work",
      },
    ],
  },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [isChildMenuHovered, setIsChildMenuHovered] = useState(false);

  const router = useRouter();
  const isPortfolioPage = router.pathname === "/portfolio";
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isTechnologyDropdownOpen, setIsTechnologyDropdownOpen] =
    useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarClosing, setIsSidebarClosing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth <= 1024);
    };
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ Tablet/Mobile View
  if (isTabletOrMobile) {
    return (
      <div className="mobile-tablet-header">
        <div className="container">
          <div className="mobile-header">
            <Link href="/">
              <Image
                src={AppIcons.LogoImage}
                alt="Moltech Solutions Inc. Logo"
                width={200}
                height={66}
                loading="lazy"
                priority={false}
              />
            </Link>
            <button
              type="button"
              className="mobile-menu-icon"
              aria-label="Open mobile menu"
              aria-controls="mobile-sidebar"
              aria-expanded={isSidebarOpen}
              onClick={() => setIsSidebarOpen(true)}
            >
              <Iconify icon="line-md:menu" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Sidebar Overlay */}
        {isSidebarOpen && (
          <>
            <div
              className="sidebar-overlay"
              onClick={() => setIsSidebarOpen(false)}
            />
            <aside
              id="mobile-sidebar"
              className={`mobile-sidebar left ${
                isSidebarClosing ? "closing" : "open"
              }`}
              role="dialog"
              aria-modal="true"
            >
              <div className="sidebar-header">
                <Image
                  src={AppIcons.LogoImage}
                  alt="Moltech Solutions Inc. Logo"
                  width={200}
                  height={66}
                  loading="lazy"
                  priority={false}
                />
                <button
                  type="button"
                  className="close-icon"
                  aria-label="Close mobile menu"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Iconify icon="iconamoon:close-thin" aria-hidden="true" />
                </button>
              </div>

              <div className="sidebar-links">
                {/* Home */}
                <div
                  type="button"
                  className="sidebar-dropdown-toggle"
                  onClick={() => setIsHomeDropdownOpen((prev) => !prev)}
                  aria-expanded={isHomeDropdownOpen}
                  aria-controls="home-submenu"
                >
                  <Link href="/">Home</Link>
                  <Iconify
                    icon={
                      isHomeDropdownOpen ? "mdi:chevron-up" : "mdi:chevron-down"
                    }
                  />
                </div>
                {isHomeDropdownOpen && (
                  <div className="sidebar-submenu">
                    {homeData.map((cat, idx) => (
                      <div key={idx} className="submenu-category">
                        {cat.items.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className="sidebar-link"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Services */}
                <div
                  className="sidebar-dropdown-toggle"
                  onClick={() => setIsServiceDropdownOpen((prev) => !prev)}
                  aria-expanded={isServiceDropdownOpen}
                  aria-controls="services-submenu"
                >
                  <span>Services</span>
                  <Iconify
                    icon={
                      isServiceDropdownOpen
                        ? "mdi:chevron-up"
                        : "mdi:chevron-down"
                    }
                  />
                </div>
                {isServiceDropdownOpen && (
                  <div className="sidebar-submenu">
                    {servicesData.map((cat, idx) => (
                      <div key={idx} className="submenu-category">
                        <div className="submenu-category-title">
                          {cat.category}
                        </div>
                        {cat.items.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className="sidebar-link"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Technology */}

                {/* <div
                  className="sidebar-dropdown-toggle"
                  onClick={() => setIsTechnologyDropdownOpen((prev) => !prev)}
                  aria-expanded={isTechnologyDropdownOpen}
                  aria-controls="technology-submenu"
                >
                  <span>Technology</span>
                  <Iconify
                    icon={
                      isTechnologyDropdownOpen
                        ? "mdi:chevron-up"
                        : "mdi:chevron-down"
                    }
                  />
                </div> */}
                <Link
                  href="/technology"
                  // onClick={() => setIsSidebarOpen(false)}
                >
                  Technology
                </Link>

                {isTechnologyDropdownOpen && (
                  <div className="sidebar-submenu">
                    {technologyData.map((cat, idx) => (
                      <div key={idx} className="submenu-category">
                        <div className="submenu-category-title">
                          {cat.category}
                        </div>
                        {cat.items.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className="sidebar-link"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  href="/case-study"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Case Study
                </Link>
                <Link href="/blog" onClick={() => setIsSidebarOpen(false)}>
                  Blogs
                </Link>
                <Link href="/career" onClick={() => setIsSidebarOpen(false)}>
                  Career
                </Link>
                <Link
                  href="/contact-us"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Contact Us
                </Link>

                <Buttons
                  buttonTypeClassName="dark-border-btn"
                  buttonText="Let's Connect"
                  onClick={() => router.push("/contact-us#connect")}
                  ariaLabel="Navigate to contact form section"
                />
              </div>
            </aside>
          </>
        )}
      </div>
    );
  }

  const navItems = [
    {
      label: "Home",
      href: "/",
      children: [
        { label: "About Us", href: "/about-us" },
        { label: "How We Work?", href: "/how-we-work" },
      ],
    },
    { label: "Services", href: "#" },
    { label: "Case Study", href: "/case-study" },
    { label: "Blogs", href: "/blog" },
    { label: "Technology", href: "/technology" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div
      className={`navbar navbar-expand-lg ${
        isSticky ? "sticky header-main-menu" : "header-main-menu"
      }
        ${!isSticky && isPortfolioPage ? "portfolio-header" : ""} ${
        isChildMenuHovered ? "child-menu-hover" : ""
      }`}
      style={{ position: "relative" }}
    >
      <div className="container">
        <div className="d-flex mobile-menu">
          <Link className="navbar-brand" href="/">
            <Image
              src={AppIcons.LogoImage}
              alt="Moltech Solutions Inc. Logo"
              width={200}
              height={66}
              loading="lazy"
              priority={false}
            />
          </Link>
        </div>

        <div className="collapse navbar-collapse menu-items open">
          <ul className="navbar-nav me-auto mb-lg-0 menu-list">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`mx-2 ${
                  ["Services", "Technology"].includes(item.label)
                    ? "has-component"
                    : ""
                }`}
                onMouseEnter={() =>
                  ["Services"].includes(item.label) &&
                  setIsChildMenuHovered(true)
                }
                onMouseLeave={() =>
                  ["Services"].includes(item.label) &&
                  setIsChildMenuHovered(false)
                }
              >
                <div className="nav-link-wrapper">
                  <Link href={item.href || "#"}>{item.label}</Link>
                  {item.children && (
                    <Iconify
                      icon="line-md:chevron-small-down"
                      className="dropdown-icon"
                    />
                  )}
                </div>
                {item.children && (
                  <ul className="dropdown-menu">
                    {item.children.map((child, idx) => (
                      <li key={idx} className="dropdown-submenu">
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                {item.label === "Services" && (
                  <>
                    <Iconify icon="line-md:chevron-small-down" />
                    <div className="mega-menu">
                      <div className="custom-mega-menu-header">
                        <div className="header-left">
                          <div className="header-card-container">
                            {servicesData.map((categoryData, i) => (
                              <div className="service-category-block" key={i}>
                                <div className="service-category-title">
                                  <Iconify icon={categoryData.icon} />
                                  <span>{categoryData.category}</span>
                                </div>
                                {categoryData.items.map((item, j) => (
                                  <div className="header-card" key={j}>
                                    <Link href={item.href}>
                                      <div className="header-card-title">
                                        <div className="card-text">
                                          {item.title}
                                        </div>
                                        <div className="card-icon">
                                          <Iconify icon="grommet-icons:form-next-link" />
                                        </div>
                                      </div>
                                      <div className="header-card-description">
                                        {item.description}
                                      </div>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* {item.label === "Technology" && (
                  <>
                    <Iconify icon="line-md:chevron-small-down" />
                    <div className="mega-menu technology-menu">
                      <div className="custom-mega-menu-header">
                        <div className="header-left">
                          <div className="header-card-container">
                            {technologyData.map((categoryData, i) => (
                              <div className="technology-list-block" key={i}>
                                <span className="left-tech-icon">
                                  <Iconify icon={categoryData.icon} />
                                </span>
                                <div className="list-menu">
                                  <div className="technology-category-title">
                                    {categoryData.category}
                                  </div>
                                  {categoryData.items.map((item, j) => (
                                    <div className="tech-list" key={j}>
                                      <Link href={item.href}>
                                        <div className="technology-text">
                                          {item.title}
                                        </div>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="header-right">
                            <div className="top-desc">
                              <h6>
                                Behind Every Smart Solution Is a Smarter Stack
                              </h6>
                              <p>
                                Powering innovation at Moltech with modern,
                                reliable, and future-ready technologies.
                              </p>
                            </div>
                            <div className="cta">
                              <button
                                type="button"
                                className="hero-button-primary"
                              >
                                <span>Explore Our Stack</span>
                                <Iconify
                                  icon="mdi:arrow-right"
                                  className="hero-button-icon"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )} */}
              </li>
            ))}
          </ul>
        </div>

        <div className="right-btn-sec">
          <div className="main-question-part">
            <span>HAVE A QUESTION?</span>
            <br />
            <Link href="tel:+17325528682">Call us : +1-945-209-7691</Link>
          </div>
          <div className="connect-btn">
            <Buttons
              buttonTypeClassName="dark-border-btn"
              buttonText="Let's Connect"
              onClick={() => router.push("/contact-us#connect")}
              ariaLabel="Navigate to contact form section"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
