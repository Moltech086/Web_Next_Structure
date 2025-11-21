import React from "react";
import { AppIcons } from "../../../data/appIcons";
import Image from "next/image";
import HeroImage from "../../../assets/images/hero-banner.webp";
const CompanyIntroduction = () => {
  return (
    <>
      <section className="main-hero-section" aria-label="Company introduction">
        <div className="hero-bg">
          <Image
            src={HeroImage}
            alt="Your Global Partner in Next-Gen Technology Solutions"
            role="presentation"
            aria-hidden="true"
            width={1920}
            height={1080}
            priority={true}
            fetchPriority="high"
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="container">
          <div className="col-12">
            <div className="center-desc">
              <h1>
                <span>Custom Software & AI Development</span>
                <br />
                from Dallas-Based Experts
              </h1>
              <p>
                Building Scalable, Sustainable, and High-Quality IT Systems to
                Empower Businesses Worldwide. We Excel in All Types of IT
                Services Using the Latest Technologies Across the Globe
              </p>
              <div className="iso-certificate">
                <Image
                  src={AppIcons.IOS}
                  alt="IOS Certification Logo"
                  width={170}
                  height={170}
                  priority={true}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyIntroduction;
