import React from "react";
import { Icon } from "@iconify/react";
import "./CSHeroSection.scss";
import Images from "@/components/image/Image";
import { AppIcons } from "@/data/appIcons";
import Link from "next/link";

const CSHeroSection = ({ heroSection }) => {
  return (
    <section className="cs-hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="tags">
              <span className="tag tag-orange">Case Study</span>
            </div>
            <h1 className="hero-title">
              {heroSection?.title}
              <span className="highlight">{heroSection?.highlight}</span>
            </h1>
            <p className="hero-description">{heroSection?.description}</p>
            <div className="hero-meta">
              <div className="meta-item">
                <Icon
                  icon={heroSection?.location?.icon}
                  className="meta-icon"
                />
                <span>{heroSection?.location?.label}</span>
              </div>
              <div className="meta-item">
                <Icon
                  icon={heroSection?.industry?.icon}
                  className="meta-icon"
                />
                <span>{heroSection?.industry?.label}</span>
              </div>
            </div>
            <div className="service-tags">
              <h3>Services Delivered:</h3>
              <div className="service-grid">
                {heroSection?.services?.map((service, index) => (
                  <Link key={index} className="service-card" href={`${service?.href}`}>
                    <div className="icon-box">
                      <Icon icon={service?.icon} className="icon" />
                    </div>
                    <div className="text">
                      <h4>{service?.name}</h4>
                    </div>
                    <Icon
                      icon="tabler:external-link"
                      className="external-icon"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-box">
              <div className="card-header">
                {/* <Icon icon="mdi:web" className="card-main-icon" /> */}
                <Images imagePath={heroSection.HeroImage} altText="Hero-Image" fetchPriority="high" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="card-body">
                <div className="line w-3-4"></div>
                <div className="line w-1-2"></div>
                <div className="icon-row">
                  <div className="icon-box bg-orange">
                    <Icon icon="mdi:cellphone" className="icon" />
                  </div>
                  <div className="icon-box bg-green">
                    <Icon icon="mdi:magnify" className="icon" />
                  </div>
                  <div className="icon-box bg-purple">
                    <Icon icon="mdi:trending-up" className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSHeroSection;
