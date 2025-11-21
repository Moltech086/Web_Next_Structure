import React from "react";
import "./TSBenefitsSection.scss";
import { AppIcons } from "@/data/appIcons";
import { Icon } from "@iconify/react";
import Image from "next/image";

const TSBenefitsSection = ({ benefitsSection, benefitCards }) => {
  return (
    <>
      {benefitsSection ? (
        <section className="ts-benefits-section">
          <div className="container">
            <div className="what-can-grid">
              <div className="content-desc">
                <h1 className="content-title">
                  {benefitsSection?.beforeTitle}
                  <span>&nbsp;{benefitsSection?.highlightTitle} </span>
                  {benefitsSection?.afterTitle}
                </h1>

                {benefitsSection.description ? (
                  <p className="content-description">
                    {benefitsSection?.description}
                  </p>
                ) : null}
                {benefitsSection.descriptionTwo ? (
                  <p className="content-description">
                    {benefitsSection?.descriptionTwo}
                  </p>
                ) : null}
                {benefitsSection.descriptionThree ? (
                  <p className="content-description">
                    {benefitsSection?.descriptionThree}
                  </p>
                ) : null}
                <div className="bottom-img">
                  <Image
                    src={AppIcons.technologyBenifit}
                    alt="technology image"
                    width
                    height
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>
              <div>
                <div className="right-card-sec">
                  {benefitCards.benefitList.map((card, index) => (
                    <div className="benefit-card" key={index}>
                      <span className="card-tile">
                        <Icon
                          icon="mdi-google-circles-group"
                          className="hero-button-icon"
                        />
                        <h2 className="card-title">{card.title}</h2>
                      </span>
                      <div
                        className="card-desc"
                        dangerouslySetInnerHTML={{
                          __html: card.desc,
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
                {benefitsSection.descriptionBottom ? (
                  <div
                    className="content-description-bottom"
                    dangerouslySetInnerHTML={{
                      __html: benefitsSection?.descriptionBottom,
                    }}
                  ></div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default TSBenefitsSection;
