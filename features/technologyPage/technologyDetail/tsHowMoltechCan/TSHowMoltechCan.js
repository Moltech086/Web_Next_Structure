import React from "react";
import "./TSHowMoltechCan.scss";
import { Icon } from "@iconify/react";

const TSHowMoltechCan = ({ howMoltechCanSection, sliderCardData }) => {
  return (
    <>
      {howMoltechCanSection ? (
        <section className="ts-how-moltech-can-section">
          <div className="container">
            <div className="how-moltech-can-title">
              <h1 className="content-title">
                {howMoltechCanSection?.sectionTitle}
              </h1>
              <span
                className="desc"
                dangerouslySetInnerHTML={{
                  __html: howMoltechCanSection?.sectionDesc,
                }}
              ></span>
              <p className="desc">{howMoltechCanSection?.sectionDescTwo}</p>
              <p className="desc">{howMoltechCanSection?.listPera}</p>
            </div>
            <div className="moltech-can-slider">
              <div className="slider-section">
                {sliderCardData?.sliderCards.map((sliderCard, index) => (
                  <div className="slider-card-sec" key={index}>
                    <div className="title-icon">
                      <div className="icon-part">
                        <Icon icon={sliderCard.icon} className="icon" />
                      </div>
                      <h2 className="box-slide-title">{sliderCard.title}</h2>
                    </div>
                    <div
                      className="box-slid-desc"
                      dangerouslySetInnerHTML={{
                        __html: sliderCard.description,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            {howMoltechCanSection.bottomPera ? (
              <span
                className="bottom-desc"
                dangerouslySetInnerHTML={{
                  __html: howMoltechCanSection?.bottomPera,
                }}
              ></span>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default TSHowMoltechCan;
