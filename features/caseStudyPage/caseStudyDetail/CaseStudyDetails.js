import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import CSHeroSection from "./csHeroSection/CSHeroSection";
import CSAboutSection from "./csAboutSection/CSAboutSection";
import CSProjectDetails from "./csProjectDetails/CSProjectDetails";
import CSChallengeSolution from "./csChallengeSolution/CSChallengeSolution";
import CSMajorFeatures from "./csMajorFeatures/CSMajorFeatures";
import CSResultsSection from "./csResultSection/CSResultSection";
import CSTestimonialSection from "./csTestimonial/CSTestimonialSection";
import CSProjectSnippets from "./csProjectSnippets/CSProjectSnippets";
import "./CaseStudyDetails.scss";

// ✅ Lazy load non-critical components
const LazyCTASection = dynamic(
  () => import("@/components/ctaSection/CTASection"),
  {
    loading: () => <div className="loading-skeleton">Loading...</div>,
  }
);

const LazyBranchFooter = dynamic(
  () => import("@/components/shared/branchFooter/BranchFooter"),
  {
    loading: () => <div className="loading-skeleton">Loading...</div>,
  }
);

const CaseStudyDetails = ({ data }) => {
  return (
    <div className="case-study">
      <CSHeroSection heroSection={data?.heroSection} />
      <CSProjectDetails projectDetails={data?.projectDetails} />
      <CSAboutSection aboutSection={data?.aboutSection} />
      <CSMajorFeatures majorFeatures={data?.majorFeatures} />
      <CSChallengeSolution challengeSolution={data?.challengeSolution} />
      <CSProjectSnippets projectSnippets={data?.projectSnippets} />

      {/* ✅ Lazy load below-the-fold components */}
      <Suspense fallback={<div className="loading-skeleton">Loading...</div>}>
        <LazyCTASection />
      </Suspense>

      <CSTestimonialSection testimonialSection={data?.testimonialSection} />
      <CSResultsSection resultsSection={data?.resultsSection} />

      <Suspense fallback={<div className="loading-skeleton">Loading...</div>}>
        <LazyBranchFooter />
      </Suspense>
    </div>
  );
};

export default CaseStudyDetails;
