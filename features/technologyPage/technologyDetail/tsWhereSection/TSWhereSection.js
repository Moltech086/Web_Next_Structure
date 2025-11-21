import React from "react";
import "./TSWhereSection.scss";
import Images from "@/components/image/Image";
import Image from "next/image";

const TSWhereSection = ({ whereIsSection, whereIsSectionItem }) => {
  return (
    <>
      {whereIsSection ? (
        <section className="ts-where-section">
          <div className="container">
            <div className="where-grid">
              <div className="content-desc">
                <div className="top-title-desc">
                  <h1 className="content-title">
                    {whereIsSection?.beforeTitle}
                    <span style={{ color: whereIsSection?.heighLightColor }}>
                      {" "}
                      {whereIsSection?.highlightTitle}{" "}
                    </span>
                    {whereIsSection?.afterTitle}
                  </h1>
                  {whereIsSection.description ? (
                    <span
                      className="content-description"
                      dangerouslySetInnerHTML={{
                        __html: whereIsSection?.description,
                      }}
                    ></span>
                  ) : null}
                  {whereIsSection.descriptionTwo ? (
                    <span
                      className="content-description"
                      dangerouslySetInnerHTML={{
                        __html: whereIsSection?.descriptionTwo,
                      }}
                    ></span>
                  ) : null}
                  {whereIsSection.descriptionThree ? (
                    <p
                      className="content-description"
                      dangerouslySetInnerHTML={{
                        __html: whereIsSection?.descriptionThree,
                      }}
                    ></p>
                  ) : null}
                </div>

                <div className="bottom-listing">
                  <ul>
                    {whereIsSectionItem?.listItem.map((item, index) => (
                      <li key={index}>
                        <span>{item.title}</span>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        ></div>
                        <p>{item.descriptionTwo}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                {whereIsSection.BottomDescription ? (
                  <p className="bottom-description">
                    {whereIsSection?.BottomDescription}
                  </p>
                ) : null}
              </div>
              <div className="right-img-part">
                <div className="img-sec">
                  <Image
                    src={whereIsSection.whereIsImage}
                    alt="Where is Image"
                    width
                    height
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default TSWhereSection;
