import React from "react";
import "./TSHeroSection.scss";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const TSHeroSection = ({ heroSection }) => {
  return (
    <>
      {heroSection ? (
        <section
          className="ts-hero-section"
          style={{ background: heroSection?.bgGradient }}
        >
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <h1 className="hero-title">
                  {heroSection?.beforeTitle}
                  <span style={{ color: heroSection?.heighLightColor }}>
                    {" "}
                    {heroSection.highlightTitle}{" "}
                  </span>
                  {heroSection?.afterTitle}
                </h1>
                {heroSection.description ? (
                  <div
                    className="hero-description"
                    dangerouslySetInnerHTML={{
                      __html: heroSection.description,
                    }}
                  />
                ) : null}
                {heroSection.descriptionTwo ? (
                  <p className="hero-description">
                    {heroSection.descriptionTwo}
                  </p>
                ) : null}
                {heroSection.descriptionThree ? (
                  <p className="hero-description">
                    {heroSection.descriptionThree}
                  </p>
                ) : null}
                {heroSection.ctaAction ? (
                  <div className="hero-buttons">
                    {heroSection.ctaDescription ? (
                      <div
                        className="hero-description"
                        dangerouslySetInnerHTML={{
                          __html: heroSection.ctaDescription,
                        }}
                      ></div>
                    ) : null}
                    <Link
                      href={heroSection?.ctaAction}
                      aria-label="Call To Action"
                      style={{ background: heroSection?.heighLightColor }}
                    >
                      Let&apos;s Connect
                      <Icon
                        icon="mdi:arrow-right"
                        className="hero-button-icon"
                      />
                    </Link>
                  </div>
                ) : null}
              </div>
              <div className="hero-card">
                <div className="card-box">
                  <div className="card-header">
                    <Image
                      src={heroSection.HeroImage}
                      alt="Hero Image"
                      width={768}
                      height
                      priority
                      fetchPriority="high"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default TSHeroSection;
