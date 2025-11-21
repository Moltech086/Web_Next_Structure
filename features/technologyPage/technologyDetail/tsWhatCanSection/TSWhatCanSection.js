import React from "react";
import "./TSWhatCanSection.scss";
import { Icon } from "@iconify/react";

const TSWhatCanSection = ({ whatCanSection, majorFeatures }) => {
  return (
    <>
      {whatCanSection ? (
        <section className="ts-what-can-section">
          <div className="container">
            <div className="what-can-grid">
              <div className="content-desc">
                <h1 className="content-title">
                  {whatCanSection?.beforeTitle}
                  <span>&nbsp;{whatCanSection?.highlightTitle} </span>
                  {whatCanSection?.afterTitle}
                </h1>
                {whatCanSection.description ? (
                  <div
                    className="content-description"
                    dangerouslySetInnerHTML={{
                      __html: whatCanSection?.description,
                    }}
                  ></div>
                ) : null}
                {whatCanSection.descriptionTwo ? (
                  <div
                    className="content-description"
                    dangerouslySetInnerHTML={{
                      __html: whatCanSection?.descriptionTwo,
                    }}
                  ></div>
                ) : null}
                {whatCanSection.descriptionThree ? (
                  <div
                    className="content-description"
                    dangerouslySetInnerHTML={{
                      __html: whatCanSection?.descriptionThree,
                    }}
                  ></div>
                ) : null}
              </div>
              <div className="points-sec">
                <div className="features-grid">
                  {majorFeatures?.features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="icon-group">
                        <div className="icon-bg">
                          <Icon icon={feature.icon} className="icon" />
                        </div>
                        <div className="text">
                          <h3>{feature.title}</h3>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {whatCanSection.descriptionEnd ? (
                  <div className="quat-sec">
                    <div
                      className="content-description-center"
                      dangerouslySetInnerHTML={{
                        __html: whatCanSection?.descriptionEnd,
                      }}
                    ></div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default TSWhatCanSection;
