import React from "react";
import "./TSWhatIsSection.scss";
import Image from "next/image";

const TSWhatIsSection = ({ whatIsSection }) => {
  return (
    <>
      {whatIsSection ? (
        <section className="ts-what-is-section">
          <div className="container">
            <div className="what-is-grid">
              <div className="content-img">
                <Image
                  src={whatIsSection.whatImage}
                  alt="What is Image"
                  width
                    height
                    priority
                    fetchPriority="high"
                />
              </div>
              <div className="content-desc">
                <h1 className="content-title">
                  {whatIsSection?.beforeTitle}
                  <span style={{ color: whatIsSection?.heighLightColor }}>
                    {" "}
                    {whatIsSection?.highlightTitle}{" "}
                  </span>
                  {whatIsSection?.afterTitle}
                </h1>
                {whatIsSection.description && (
                  <div
                    className="content-description"
                    dangerouslySetInnerHTML={{
                      __html: whatIsSection?.description,
                    }}
                  ></div>
                )}
                {whatIsSection.descriptionTwo && (
                  <div
                    className="content-description"
                    dangerouslySetInnerHTML={{
                      __html: whatIsSection.descriptionTwo,
                    }}
                  ></div>
                )}
                {whatIsSection.descriptionThree && (
                  <div
                    className="content-description"
                    dangerouslySetInnerHTML={{
                      __html: whatIsSection.descriptionThree,
                    }}
                  ></div>
                )}
                {whatIsSection.descriptionFour && (
                  <div
                    className="content-description"
                    dangerouslySetInnerHTML={{
                      __html: whatIsSection?.descriptionFour,
                    }}
                  >
                    {/* {whatIsSection?.descriptionFour} */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default TSWhatIsSection;
