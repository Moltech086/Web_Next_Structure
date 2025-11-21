"use client";
import React, { useState } from "react";
import "./ProcessSection.scss";
import Iconify from "@/components/ui/icons/Iconify";

const ProcessSection = ({ steps, title, subTitle, bgColor, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressPercentage = (activeIndex / (steps.length - 1)) * 100;

  return (
    <section className="design-process" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="process-title  mb-5">
          <div className="service-title">{title}</div>
          <div className="service-sub-title">{subTitle}</div>
          {description && (
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="process-description"
            ></div>
          )}
        </div>

        <div className="steps-wrapper">
          <div className="steps-container">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step ${index === activeIndex ? "active" : ""} ${
                  index < activeIndex ? "completed" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="icon-wrapper">
                  <Iconify icon={step.icon} />
                </div>
                <p className="step-title">{step.title}</p>
              </div>
            ))}
          </div>

          <div className="progress-line">
            <div
              className="progress-filled"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="step-description">
          <h3>
            <span>Step {activeIndex + 1}:</span>
            <span>{steps[activeIndex].title}</span>
          </h3>
          <p>{steps[activeIndex].description}</p>
          {steps[activeIndex].bulletins && (
            <>
              <span>
                <strong>{steps[activeIndex].bulletinsTitle}</strong>
              </span>
              <ul>
                {steps[activeIndex].bulletins.map((bulletin, index) => (
                  <li key={index}>{bulletin}</li>
                ))}
              </ul>
            </>
          )}
          {steps[activeIndex].phaseDescription &&
            steps[activeIndex].happensDescription && (
              <div className="phases-happens">
                <div className="phase-part">
                  <h5 className="label">Phase:</h5>
                  <p className="desc">{steps[activeIndex].phaseDescription}</p>
                </div>
                <div className="what-happens-part">
                  <h5 className="label">What Happens:</h5>
                  <p className="desc">{steps[activeIndex].happensDescription}</p>
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
