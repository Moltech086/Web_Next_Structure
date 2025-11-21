import React, { useEffect, useRef } from "react";
import "../../../ServiceSlider.scss";

const features = [
  {
    icon: "fluent:people-team-16-regular",
    title: "U.S. Entity with Global Talent Reach",
    description:
      "Work with a local partner you can trust, backed by a global network of top-tier engineers.",
  },
  {
    icon: "material-symbols:rocket-launch-outline",
    title: "Fast, Flexible Hiring",
    description: "Receive hand-picked, pre-vetted profiles within 48–72 hours.",
  },
  {
    icon: "mdi:shield-check-outline",
    title: "Technically Led Screening",
    description:
      "We’re engineers ourselves—so we know how to assess skills beyond just a resume.",
  },
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Time Zone-Aligned Collaboration",
    description:
      "We offer overlapping work hours with U.S. time zones to ensure real-time communication, daily stand-ups, and seamless team integration.",
  },
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Flexible Engagement Models",
    description:
      "We tailor our engagement to your needs, whether it is short-term or long-term, part-time or full-time, or project-based or contract-to-hire. to-hire.",
  },
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Cost Savings",
    description:
      "Reduce hiring and training expenses with our flexible model, scaling your team without overhead costs.",
  },
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Compliance and Security",
    description:
      "We prioritize U.S. industry standards, minimizing risks and ensuring regulatory alignment.",
  },
  {
    icon: "mdi:lightbulb-on-outline",
    title: "Smooth Collaboration",
    description:
      "Our experts adapt to your tools, workflows, and culture for seamless teamwork.",
  },
];

const borderColors = [
  "#3b82f6", // blue
  "#8b5cf6", // purple
  "#10b981", // green
  "#f59e0b", // yellow
  "#ec4899", // pink
  "#0ea5e9", // sky
];

const StaffSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
      }
    }, 300);
  }, []);

  return (
    <div className="service-whychooseus">
      <div className="row">
        <div className="col-12">
          <div
            className="service-whychooseus-section"
          >
            <div className="service-title">
              Why Choose{" "}
              <span className="highlight">Moltech Solutions Inc.</span> for
              Staff Augmentation?
            </div>
            <div className="service-description">
              We will help you to augment your team with the right talent and
              technology expertise to deliver your projects on time and on
              budget.
            </div>
          </div>
          <div className="whychooseus-slider-wrapper">
            <div className="service-cards-grid">
              {features.map((feature, index) => (
                <>
                  <div className="card-row">
                    <div className="card-wrapper">
                      <div
                        className="card-background"
                        style={{
                          backgroundColor:
                            borderColors[index % borderColors.length],
                        }}
                      ></div>
                      <div
                        className="card"
                        style={{
                          borderColor:
                            borderColors[index % borderColors.length],
                        }}
                      >
                        <h3>{feature.title}</h3>
                        <p className="card-description">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffSlider;
