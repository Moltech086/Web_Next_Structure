import React from "react";
import "./TSProblemSolutionSection.scss";
import { Icon } from "@iconify/react";
import CTASection from "@/components/ctaSection/CTASection";

const TSProblemSolutionSection = ({
  problemSolutionSection,
  problemList,
  solutionList,
  heroSection,
}) => {
  return (
    <>
      {problemSolutionSection ? (
        <section className="ts-problem-solution-section pb-0">
          <div className="container mb-5">
            <div className="problem-solution-title">
              <h1 className="content-title">
                <Icon icon="prime-check-circle" className="title-icon" />
                {problemSolutionSection?.sectionTitle}
              </h1>
              <div
                className="desc"
                dangerouslySetInnerHTML={{
                  __html: problemSolutionSection?.sectionDesc || '',
                }}
              ></div>
              {/* Only render sectionDescTwo if it exists */}
              {problemSolutionSection?.sectionDescTwo && (
                <div
                  className="desc"
                  dangerouslySetInnerHTML={{
                    __html: problemSolutionSection?.sectionDescTwo,
                  }}
                ></div>
              )}
            </div>
            <div className="problem-solution-detail">
              <div className="problems-list">
                <div className="problems-title">
                  <Icon
                    icon="weui-report-problem-outlined"
                    className="title-icon"
                  />
                  <h2 className="titles">Typical Problem & Causes</h2>
                </div>
                <div className="list-sec">
                  {problemList?.problemItem?.map((item, index) => (
                    <div className="list-items" key={index}>
                      <span className="icon-title">
                        <span>
                          <Icon
                            icon={item.Icons}
                            className="hero-button-icon"
                          />
                        </span>
                        <h5 className="title-txt">{item.title}</h5>
                      </span>
                      <p className="desc-txt">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="solutions-list">
                <div className="solution-title">
                  <Icon icon="hugeicons-idea-01" className="title-icon" />
                  <h2 className="titles">How Moltech Helps</h2>
                </div>
                <div className="list-sec solution-list">
                  {solutionList?.solutionItem?.map((item, index) => (
                    <div className="list-items" key={index}>
                      <span className="icon-title">
                        <span>
                          <Icon
                            icon={item.Icons}
                            className="hero-button-icon"
                          />
                        </span>
                        <h5 className="title-txt">{item.title}</h5>
                      </span>
                      <p className="desc-txt">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {problemSolutionSection?.bottomDescs ? (
              <div
                className="bottom-desc"
                dangerouslySetInnerHTML={{
                  __html: problemSolutionSection?.bottomDescs,
                }}
              ></div>
            ) : null}
            
          </div>
          <CTASection
            title={problemSolutionSection?.bottomTitle}
            subtitle={problemSolutionSection?.bottomDesc}
          />
        </section>
      ) : null}
    </>
  );
};

export default TSProblemSolutionSection;
