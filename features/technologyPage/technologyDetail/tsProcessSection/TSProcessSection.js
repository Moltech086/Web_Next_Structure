"use client";
import React, { useState } from "react";
import "./TSProcessSection.scss";
import ProcessSection from "@/components/processsection/ProcessSection";

const TSprocessSection = ({ processSection, stepsList }) => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
      {processSection ? (
        <section className="ts-process-section">
          <div className="container">
            <ProcessSection
              steps={stepsList?.stepsItem} // ✅ use "stepsItem" from your data
              title={processSection?.technologyName}
              icon={stepsList?.stepsItem}
              bgColor="#fafafa00"
            />
          </div>
        </section>
      ) : null}
    </>
  );
};

export default TSprocessSection;
