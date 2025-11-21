import React from "react";
import "./CTASection.scss";
import Iconify from "@/components/ui/icons/Iconify";
import Link from "next/link";


const CTASection = ({
  title = "Ready to Build Something Amazing?",
  subtitle = `Let's discuss your project and create a custom web application that drives your business forward. Get started with a free consultation today.`,
  buttonText = "Let's Connect",
  buttonLink = "/contact-us",
}) => {
  return (
    <section className="cta-section" aria-labelledby="cta-title" role="region">
      <div className="container">
        <div className="cta-content">
          {/* Associate heading with region */}
          <h2 id="cta-title" className="cta-title">
            {title}
          </h2>
          <p className="cta-subtitle">{subtitle}</p>

          <div className="cta-buttons">
            {/* Changed to button-like link for accessibility */}
            <Link
              rel="canonical"
              className="service-btn"
              href={buttonLink}
              aria-label={`Navigate to ${buttonText} page`}
            >
              <span>{buttonText}</span>
              <Iconify
                icon="weui:arrow-filled"
                width={20}
                aria-hidden="true"
                focusable="false"
              />
            </Link>
          </div>

          <div className="cta-contact">
            <div className="cta-contact-item">
              <Iconify
                icon="tdesign:call-1"
                aria-hidden="true"
                focusable="false"
              />{" "}
              <span>Call us: +1-945-209-7691</span>
            </div>
            <div className="cta-contact-item">
              <Iconify
                icon="line-md:email"
                aria-hidden="true"
                focusable="false"
              />{" "}
              <span>Email: inquiry@mol-tech.us</span>
            </div>
            <div className="cta-contact-item">
              <Iconify
                icon="grommet-icons:map"
                aria-hidden="true"
                focusable="false"
              />{" "}
              <span>
                2000 N Central Expressway, Suite 220, Plano, TX 75074, United
                States
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
