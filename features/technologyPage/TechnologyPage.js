"use client";
import React, { useRef, Suspense } from "react";
import HeroSection from "./components/heroSection/HeroSection";
import TechStack from "./components/techStack/TechStack";
import Benefits from "./components/benefits/Benefits";
import Principles from "./components/principles/Principles";
import FeaturedCaseStudy from "@/features/caseStudyPage/featuredCaseStudy/FeaturedCaseStudy";
import CTASection from "@/components/ctaSection/CTASection";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import { technologyCaseStudies } from "@/data/technologies/case-studies.data";
import "./TechnologyPage.scss";

// Loading component for better UX
const TechnologyPageLoading = () => (
  <div className="technology-loading">
    <div className="loading-skeleton">
      <div className="skeleton-hero"></div>
      <div className="skeleton-content"></div>
    </div>
  </div>
);
const TechnologyPage = () => {
  const techStackRef = useRef(null);

  const scrollToSection = (id) => {
    if (id === "tech-stack" && techStackRef.current) {
      techStackRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <Suspense fallback={<TechnologyPageLoading />}>
      <div className="technology-section">
        <HeroSection scrollToSection={scrollToSection} />
        <div ref={techStackRef}>
          <TechStack />
        </div>
        <Benefits />
        <Principles />
        <FeaturedCaseStudy caseStudies={technologyCaseStudies} />
        <CTASection />
        <BranchFooter />
      </div>
    </Suspense>
  );
};

export default TechnologyPage;
