"use client";
import React, { useState, useEffect } from "react";
import "./FeaturedCaseStudy.scss";
import { Icon } from "@iconify/react";
import Images from "@/components/image/Image";
import Link from "next/link";

function FeaturedCaseStudy({ caseStudies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, caseStudies.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section className="case-studies">
      <div className="container">
        <div className="heading">
          <h2>Featured Case Studies</h2>
          <p>
            Discover how we&apos;ve helped businesses transform their operations
            and achieve remarkable growth.
          </p>
        </div>

        <div className="slider">
          {/* LEFT SIDE */}
          <div className="slider-left">
            <div className="badge">
              <span className="icon-wrap">
                <span className="inner-dot"></span>
              </span>
              <div className="badge-content">
                <h3>{currentStudy?.title}</h3>
                {/* <p>{currentStudy?.category || currentStudy?.subtitle}</p> */}
              </div>
            </div>
            <div className="project-type">
              <p>{currentStudy?.projectType}</p>
            </div>
            <div className="location-users">
              <div className="location">
                <Icon icon="mdi:location" />
                {currentStudy?.location}
              </div>
              <div className="industry">
                <Icon icon="carbon:industry" /> {currentStudy?.industry}
              </div>
            </div>
            <p className="description">{currentStudy?.description}</p>

            {currentStudy?.link && (
              <div className="read-more">
                <Link
                  href={`/case-study/${currentStudy.link}`}
                  
                  className="read-more-button"
                >
                  Know More...
                </Link>
              </div>
            )}  

            <div className="technology-used mb-5">
              <h3>Technology Used</h3>
              <div className="tech-list">
                {currentStudy?.technologies?.map((tech, idx) => (
                  <div key={idx} className="tech-item">
                    <Icon icon={tech.icon} />
                    <p className="tooltip-box">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="metrics">
                            {currentStudy?.stats?.map((stats, idx) => (
                                <div key={idx}>
                                    <div className="label">{stats.label}</div>
                                    <div className="value">{stats.value}</div>
                                </div>
                            ))}
                        </div> */}

            {/* Controls */}
            <div className="controls">
              <div className="arrows">
                <button
                  onClick={() =>
                    goToSlide(
                      (currentIndex - 1 + caseStudies.length) %
                        caseStudies.length
                    )
                  }
                  aria-label="Previous slide"
                >
                  <Icon icon="mdi:chevron-left" />
                </button>
                <button
                  onClick={() =>
                    goToSlide((currentIndex + 1) % caseStudies.length)
                  }
                  aria-label="Next slide"
                >
                  <Icon icon="mdi:chevron-right" />
                </button>
              </div>
              <div className="dots">
                {caseStudies.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="slider-right">
            <div className="macbook">
              <div className="macbook-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="mac-title">{currentStudy?.title}</span>
              </div>
              <div className="macbook-screen">
                <Images
                  imagePath={currentStudy?.image}
                  altText={currentStudy?.title}
                />
              </div>
              <div className="macbook-base"></div>
            </div>
            <div className="view-all">
              <Link href="/case-study">
                View All Case Studies
                <Icon icon="mdi:arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCaseStudy;
