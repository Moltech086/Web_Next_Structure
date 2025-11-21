import { AppIcons } from "@/data/appIcons";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <div className="why-choose-us-sec relative">
        <div className="container-fluid">
          <div className="main-center-sec">
            <div className="row">
              <div className="col-12"></div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 mb-4">
                <div className="title-center">
                  <h2 className="title">
                    Why Partner <span>with Moltech</span>
                  </h2>
                  <p className="mb-4">
                    At Moltech Solutions, we are more than just an IT service
                    provider – we are your trusted technology partner.
                    Here&apos;s why businesses around the globe choose us to
                    bring their digital visions to life:
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="title-left">
                  <h3 className="left-title-small">Advantages</h3>
                </div>
                <div className="advantage-sec">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="advantage-points">
                          <ul className="advantage-list">
                            <li>
                              <div className="icon-part">
                                <Image
                                  src={AppIcons.Outsource}
                                  alt="Advantage Icon"
                                  role="presentation"
                                  width={65}
                                  height={65}
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="desc-part">
                                <h3 className="advantage-title">
                                  Offshore Outsourcing Expertise:
                                </h3>
                                <p>
                                  We excel in delivering efficient and
                                  cost-effective IT services, ensuring seamless
                                  communication and smooth project management
                                  from start to finish.
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon-part">
                                <Image
                                  src={AppIcons.OneStep}
                                  alt="Advantage Icon"
                                  width={65}
                                  height={65}
                                  loading="lazy"
                                  priority={false}
                                />
                              </div>
                              <div className="desc-part">
                                <h3 className="advantage-title">
                                  One-Stop IT Solutions:
                                </h3>
                                <p>
                                  From consulting and UI/UX design to
                                  development, deployment, and maintenance, we
                                  provide all your IT needs under one roof,
                                  saving time and maximizing convenience.
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon-part">
                                <Image
                                  src={AppIcons.Track}
                                  alt={`Advantage Icon`}
                                  width={65}
                                  height={65}
                                  loading="lazy"
                                  priority={false}
                                />
                              </div>
                              <div className="desc-part">
                                <h3 className="advantage-title">
                                  Proven Track Record:
                                </h3>
                                <p>
                                  With a portfolio of successful projects and a
                                  growing base of satisfied clients, we have
                                  earned a reputation for reliability, quality,
                                  and excellence.
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="icon-part">
                                <Image
                                  src={AppIcons.Scalable}
                                  alt={`Advantage Icon`}
                                  width={65}
                                  height={65}
                                  loading="lazy"
                                  priority={false}
                                />
                              </div>
                              <div className="desc-part">
                                <h3 className="advantage-title">
                                  Sustainable and Scalable Solutions:
                                </h3>
                                <p>
                                  Our future-ready IT solutions are designed to
                                  adapt and scale as your business grows,
                                  ensuring long-term value and dependability.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="right-desc-part">
                  <div className="left-part">
                    <div className="box-part">
                      <div className="img-sec">
                        <h3 className="img-sec-title">
                          Expertise Across Industries
                        </h3>
                      </div>
                      <div className="desc-sec">
                        <p>
                          With over a decade of experience, Moltech Solutions
                          delivers tailored IT solutions across industries like
                          Education, E-Commerce, and Chemical. Our experts
                          leverage cutting-edge technologies such as .NET,
                          React, Python, and AI to create innovative, scalable,
                          and business-aligned solutions.
                        </p>
                      </div>
                    </div>
                    <div className="box-part">
                      <div className="img-sec">
                        <h3 className="img-sec-title">Commitment to Quality</h3>
                      </div>
                      <div className="desc-sec">
                        <p>
                          Quality is non-negotiable at Moltech Solutions. We
                          adhere to the highest standards to ensure our
                          solutions are scalable, secure, and reliable,
                          delivering consistent performance for your business
                          needs.
                        </p>
                      </div>
                    </div>
                    <div className="box-part">
                      <div className="img-sec">
                        <h3 className="img-sec-title">
                          Cost-Effective and Scalable IT Solutions with
                          Innovation
                        </h3>
                      </div>
                      <div className="desc-sec">
                        <p>
                          Delivering affordable IT services without compromising
                          on quality, we craft scalable solutions that adapt to
                          your business growth. By leveraging innovative
                          technologies like AI, IoT, and cloud computing, we
                          ensure your business remains competitive and
                          future-ready. Achieve long-term success while
                          optimizing costs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="right-part">
                    <div className="box-part">
                      <div className="img-sec">
                        <h3 className="img-sec-title">
                          Customer-Centric Approach
                        </h3>
                      </div>
                      <div className="desc-sec">
                        <p>
                          Understanding your business, valuing your ideas, and
                          creating solutions tailored to your vision—this is our
                          approach to every project. We believe in building
                          strong partnerships that drive mutual success. These
                          options highlight customer-centricity and emphasize
                          collaboration while keeping the tone professional and
                          approachable. Let me know which one resonates best!
                        </p>
                      </div>
                    </div>
                    <div className="box-part">
                      <div className="img-sec">
                        <h3 className="img-sec-title">
                          Tailored Solutions for Every Need
                        </h3>
                      </div>
                      <div className="desc-sec">
                        <p>
                          Every business is unique, and so are its challenges.
                          That&apos; why our solutions are crafted to align with
                          your specific goals. Whether it&apos; custom software,
                          mobile app development, or digital transformation, we
                          deliver solutions that perfectly suit your
                          requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
