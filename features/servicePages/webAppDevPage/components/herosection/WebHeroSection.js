import React from "react";
import "./WebHeroSection.scss";
import Iconify from "@/components/ui/icons/Iconify";
import Link from "next/link";
import Images from "@/components/image/Image";
import { AppIcons } from "@/data/appIcons";

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Left Content */}
            <div
              className="hero-text"
            >
              <h1 className="hero-title">
                Transform Your Business with{" "}
                <span className="highlight">Powerful, Scalable</span> Web
                Applications
              </h1>
              <p className="hero-subtitle">
                Success in today&apos;s connected, fast-paced digital market
                depends on web applications. We create <span className="highlight">secure</span>, scalable, and
                <span className="highlight"> robust web apps tailored specifically for your business needs</span>.
              </p>

              <Link className="service-btn" href="/contact-us">
                <span>Let&apos;s Connect</span>
                <Iconify icon="weui:arrow-filled" width={20} />
              </Link>
            </div>

            {/* Right Image */}
            <div
              className="hero-image-container"
            >
              <div className="image-wrapper">
                <Images
                  imagePath={AppIcons.webAppDevelopmentHeroSectionImg}
                  alt="web-app-development-hero-section"
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro-section">
        <div className="intro-container">
          <h2 className="intro-title">
            Why Web Applications Are Essential for
            <span className="highlight"> Modern Business Success</span> ?
          </h2>
          <div className="intro-grid">
            <div className="intro-content animate-slide-up">
              <div className="intro-text">
                <p>
                  Success in the linked, fast-paced digital market of today
                  depends on<span className="highlight"> web apps</span> for companies. Businesses of different
                  kinds employ web apps to remain competitive in worldwide
                  markets, improve internal process efficiency, and keep
                  consumers more interested by making their internal procedures
                  more effective.
                </p>
                <p>
                  <span className="highlight"> Safe, scalable, and strong web apps</span> created especially for
                  your company by <span className="highlight">Moltech Solution Inc.</span> reflect their needs. Our
                  products enable customers to respond to evolving market needs,
                  provide an effortless interface, and let them get real-time
                  information from anywhere, therefore <span className="highlight"> improving operational
                    efficiency and revenue generation.</span>
                </p>
                <p>
                  Whether you&apos;re transforming outdated systems or starting
                  a new digital platform, our <span className="highlight"> web application services </span> set up
                  your business for <span className="highlight"> long-term success</span> in a world run by
                  technology.
                </p>
              </div>
            </div>
            <div className="intro-image animate-fade-in">
              <div className="image-wrapper">
                <Images
                  imagePath={AppIcons.webAppDevelopmentHeroSectionImg2}
                  alt="web-app-development-hero-section"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
          <div className="intro-features">
            {[
              {
                icon: <Iconify icon="mdi:earth" className="icon" />,
                title: "Global Reach",
                desc: "Compete in worldwide markets",
              },
              {
                icon: <Iconify icon="mdi:trending-up" className="icon" />,
                title: "Efficiency",
                desc: "Streamline internal processes",
              },
              {
                icon: <Iconify icon="mdi:shield-outline" className="icon" />,
                title: "Security",
                desc: "Safe & scalable solutions",
              },
            ].map((item, i) => (
              <div key={i} className="feature-box">
                <div className="icon-box">{item.icon}</div>
                <h4 className="feature-title">{item.title}</h4>
                <p className="feature-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section >
    </>
  );
};

export default HeroSection;
