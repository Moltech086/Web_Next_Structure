import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./HeroSection.scss";

const heroTechIcons = [
  { icon: "mdi:code-tags", label: "Frontend" },
  { icon: "mdi:server", label: "Backend" },
  { icon: "mdi:database", label: "Database" },
  { icon: "mdi:cloud", label: "Cloud" },
  { icon: "mdi:brain", label: "AI/ML" },
  { icon: "mdi:cellphone", label: "Mobile" },
  { icon: "mdi:shield-check", label: "Security" },
  { icon: "mdi:source-branch", label: "DevOps" },
];

const HeroSection = ({ scrollToSection }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="technology-hero-section">
      <div className="hero-background"></div>
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Behind Every{" "}
                <span className="hero-title-highlight">
                  Smart Solution
                  <div className="hero-title-underline"></div>
                </span>
                <br />
                Is a Smarter Stack
              </h1>

              <p className="hero-description">
                Powering innovation at Moltech with modern, reliable, and
                future-ready technologies.
              </p>
              <p className="hero-quote">
                &quot; From startups to enterprises, our expert team selects and
                implements the right tools — so your product stays ahead of the
                curve. &quot;
              </p>
            </div>

            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection("tech-stack")}
                className="hero-button-primary"
                aria-label="Explore Our Stack"
              >
                Explore Our Stack
                <Icon icon="mdi:arrow-right" className="hero-button-icon" />
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">200+</div>
                <div className="hero-stat-label">Projects Delivered</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">50+</div>
                <div className="hero-stat-label">Technologies Mastered</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">95.0%</div>
                <div className="hero-stat-label">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Content - Tech Icons Grid */}
          <div className="hero-icons">
            <div className="hero-icons-grid">
              {heroTechIcons.map((tech, index) => (
                <div
                  key={index}
                  className="hero-icon-card"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: `translateY(${
                      Math.sin(scrollY * 0.01 + index) * 5
                    }px)`,
                  }}
                >
                  <div className="hero-icon-content">
                    <div className="hero-icon-wrapper">
                      <Icon icon={tech.icon} className="hero-icon" />
                    </div>
                    <div className="hero-icon-label">{tech.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
