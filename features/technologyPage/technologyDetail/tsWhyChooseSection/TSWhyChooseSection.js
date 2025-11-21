import React from "react";
import "./TSWhyChooseSection.scss";

const TSWhyChooseSection = ({ whyChooseTitleDesc, whyChooseSection }) => {
  return (
    <>
      {whyChooseTitleDesc ? (
        <section className="ts-why-choose-section">
          <div className="container">
            <div className="why-choose-title">
              <h1 className="content-title">
                {whyChooseTitleDesc?.beforeTitle}
                <span style={{ color: whyChooseTitleDesc?.heighLightColor }}>
                  {" "}
                  {whyChooseTitleDesc?.highlightTitle}{" "}
                </span>
                {whyChooseTitleDesc?.afterTitle}
              </h1>
              {whyChooseTitleDesc.description ? (
                <p className="content-description">
                  {whyChooseTitleDesc?.description}
                </p>
              ) : null}
              {whyChooseTitleDesc.descriptionTwo ? (
                <p className="content-description">
                  {whyChooseTitleDesc?.descriptionTwo}
                </p>
              ) : null}
              {whyChooseTitleDesc.descriptionThree ? (
                <p className="content-description">
                  {whyChooseTitleDesc?.descriptionThree}
                </p>
              ) : null}
            </div>
            <div className="why-choose-grid">
              {whyChooseSection.map((item, index) => (
                <div className="list-card-sec" key={index}>
                  <div className="top-title">
                    <span className="left-circle"></span>
                    <h4 className="card-title">{item.title}</h4>
                  </div>
                  <div className="bottom-desc">
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default TSWhyChooseSection;
