import React from "react";
import { Icon } from "@iconify/react";
import "./BlogCTA.scss";
import Link from "next/link";

const CtaSection = () => {
  return (
    <div className="blog-cta-section">
      <div className="cta-container">
        <h4 className="cta-title">Contact Information</h4>
        <p className="cta-subtext">Say something to start a live chat!</p>

        <div className="cta-list">
          <div className="cta-item">
            <Icon icon="mdi:phone" />
            <span>+1-945-209-7691</span>
          </div>
          {/* <div className="cta-item">
            <Icon icon="mdi:whatsapp" />
            <span>+1-945-209-7691</span>
          </div> */}

          <div className="cta-item  address">
            <Icon icon="mdi:map-marker-outline" />
            <div>
              <span>2000 N Central Expressway</span>
              <span>Suite 220 Plano, TX 75074</span>
              <span>United States</span>
            </div>
          </div>
          
          <div className="cta-item">
            <Icon icon="mdi:email-outline" />
            <span>inquiry@mol-tech.us</span>
          </div>

        </div>
        <div className="cta-socials">
          <a
            href="https://www.facebook.com/moltechsolutions.pvt.ltd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook"
          >
            <Icon icon="mdi:facebook" />
          </a>
          <a
            href="https://www.instagram.com/moltechsolutions.pvt.ltd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
          >
            <Icon icon="mdi:instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/moltech-solutions-inc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn"
          >
            <Icon icon="mdi:linkedin" />
          </a>
        </div>

        <div className="cta-button-wrapper">
          <Link href="/contact-us" className="cta-button">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
