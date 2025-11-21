"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import CountUp from "react-countup";
import "./HomePage.scss";

// ✅ Critical above-the-fold components loaded immediately
import CompanyIntroduction from "./components/CompanyIntroduction";

// ✅ Lazy load below-the-fold components with loading states
const HomeService = dynamic(() => import("./components/HomeService"), {
  loading: () => <div className="loading-skeleton" style={{height: '600px'}} />,
  ssr: true
});

const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"), {
  loading: () => <div className="loading-skeleton" style={{height: '500px'}} />,
  ssr: true
});

const TestimonialSlider = dynamic(() => import("@/components/testimonial/Testimonial"), {
  loading: () => <div className="loading-skeleton" style={{height: '400px'}} />,
  ssr: true
});

const CTASection = dynamic(() => import("@/components/ctaSection/CTASection"), {
  loading: () => <div className="loading-skeleton" style={{height: '300px'}} />,
  ssr: true
});

const CaseStudySlider = dynamic(() => import("@/components/ui/casestudyslider/CaseStudySlider"), {
  loading: () => <div className="loading-skeleton" style={{height: '500px'}} />,
  ssr: true
});

const ArticleSlider = dynamic(() => import("@/components/ui/articleslider/ArticleSlider"), {
  loading: () => <div className="loading-skeleton" style={{height: '400px'}} />,
  ssr: true
});

const BranchFooter = dynamic(() => import("@/components/shared/branchFooter/BranchFooter"), {
  loading: () => <div className="loading-skeleton" style={{height: '200px'}} />,
  ssr: true
});

const HomePage = () => {
  const [countersInView, setCountersInView] = useState(false);
  const countersRef = useRef(null);

  useEffect(() => {
    const node = countersRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setCountersInView(true); // Start counting when the section is in view
          observer.disconnect(); // Stop observing once counters are triggered
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <>
      <div className="home-page">
        <CompanyIntroduction />
        <Suspense fallback={<div className="loading-skeleton" style={{height: '600px'}} />}>
          <HomeService />
        </Suspense>
        <Suspense fallback={<div className="loading-skeleton" style={{height: '500px'}} />}>
          <WhyChooseUs />
        </Suspense>
        
        <section
          className="counter-section"
          ref={countersRef}
          aria-label="Company statistics"
        >
          <div className="container">
            <div className="counters">
              <div className="count-number-part border-right">
                <div
                  className="counter"
                  role="group"
                  aria-label="Years of Experience"
                >
                  {countersInView && (
                    <CountUp start={0} end={11} duration={2.5} />
                  )}
                  <span className="plus">+</span>
                  <p className="counter-label">Years of Experience</p>
                </div>
              </div>
              <div className="count-number-part border-right">
                <div className="counter">
                  {countersInView && (
                    <CountUp start={0} end={50} duration={2.5} />
                  )}
                  <span className="plus">+</span>
                  <p className="counter-label">Happy Clients Globally</p>
                </div>
              </div>
              <div className="count-number-part border-right">
                <div className="counter">
                  {countersInView && (
                    <CountUp start={0} end={80} duration={2.5} />
                  )}
                  <span className="plus">%</span>
                  <p className="counter-label">Customer Retention Rate</p>
                </div>
              </div>
              <div className="count-number-part border-right">
                <div className="counter">
                  {countersInView && (
                    <CountUp start={0} end={65} duration={2.5} />
                  )}
                  <span className="plus">+</span>
                  <p className="counter-label">Global Talented Professionals</p>
                </div>
              </div>
              <div className="count-number-part">
                <div className="counter">
                  {countersInView && (
                    <CountUp start={0} end={200} duration={2.5} />
                  )}
                  <span className="plus">+</span>
                  <p className="counter-label">Successful Project Deliveries</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Suspense fallback={<div className="loading-skeleton" style={{height: '400px'}} />}>
          <section className="testimonial" aria-label="Client testimonials">
            <TestimonialSlider />
          </section>
        </Suspense>
        
        <Suspense fallback={<div className="loading-skeleton" style={{height: '300px'}} />}>
          <CTASection />
        </Suspense>
        
        <div className="title-left">
          <p className="sub-title pt-4">Case Studies</p>
          <h2 className="title pb-5">
            Our <span>Portfolios</span>
          </h2>
        </div>
        
        <Suspense fallback={<div className="loading-skeleton" style={{height: '500px'}} />}>
          <section className="cash-study-sec" aria-label="Case study showcase">
            <div className="cash-study">
              <CaseStudySlider />
            </div>
          </section>
        </Suspense>
        
        <Suspense fallback={<div className="loading-skeleton" style={{height: '400px'}} />}>
          <section aria-label="Latest articles">
            <ArticleSlider />
          </section>
        </Suspense>
        
        <Suspense fallback={<div className="loading-skeleton" style={{height: '200px'}} />}>
          <BranchFooter />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
