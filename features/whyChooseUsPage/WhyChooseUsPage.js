import React from "react";
import "./WhyChooseUsPage.scss";
import Images from "@/components/image/Image";
import { AppIcons } from "@/data/appIcons";

const WhyChooseUsPage = () => {
    return (
        <div className="why-choose-us-section">
            {/* Top Title Start */}
            <div className="why-choose-top-title-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-2xl-7 col-xl-7 col-md-12 col-12 tablet-order-2">
                            <div className="content-sec">
                                <div className="title-left">
                                    <h2 className="title mb-4">
                                        Why Choose <span>Us</span>
                                    </h2>
                                    <p>
                                        At Moltech Solutions, we are more than just an IT service
                                        provider – we are your trusted technology partner. Here&apos;s
                                        why businesses around the globe choose us to bring their
                                        digital visions to life:
                                    </p>
                                </div>
                                <div className="content-point-part">
                                    <ul>
                                        <li>Expertise Across Industries</li>
                                        <li>Tailored Solutions for Every Need</li>
                                        <li>
                                            Cost Effective and Sacalable Solution with innovation
                                        </li>
                                        <li>Commitment to Quality</li>
                                        <li>Customer-Centric Approac</li>
                                        <li>The Moltech Advantage</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-2xl-5 col-xl-5 col-md-12 col-12 tablet-order-1">
                            <div className="img-sec">
                                <Images imagePath={AppIcons.Why} altText="why choose us img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-center">
                <div className="title-center">
                    <span className="sub-title">About Moltech</span>
                    <h3 className="title mb-4">
                        What sets <span>Moltech Solutions </span>apart?
                    </h3>
                    <p className="points-part">
                        <span>Offshore Outsourcing Expertise</span>
                        <span>One-Stop IT Solutions</span>
                        <span>Proven Track Record</span>
                        <span>Sustainable and Scalable</span>
                    </p>
                </div>

                <div className="box-section-main">
                    <div className="container">
                        <div className="box-rows">
                            <div className="box-layout">
                                <h4>Expertise Across Industries</h4>
                                <p>
                                    With over a decade of experience, Moltech Solutions delivers
                                    tailored IT solutions across industries like Education,
                                    E-Commerce, and Chemical. Our experts leverage cutting-edge
                                    technologies such as .NET, React, Python, and AI to create
                                    innovative, scalable, and business-aligned solutions.
                                </p>
                                <div className="number-sec">
                                    <span>1</span>
                                </div>
                            </div>

                            <div className="box-layout">
                                <h4>Tailored Solutions for Every Need</h4>
                                <p>
                                    Every business is unique, and so are its challenges. That&apos;
                                    why our solutions are crafted to align with your specific
                                    goals. Whether it&apos; custom software, mobile app development,
                                    or digital transformation, we deliver solutions that perfectly
                                    suit your requirements.
                                </p>
                                <div className="number-sec">
                                    <span>2</span>
                                </div>
                            </div>
                            <div className="box-layout">
                                <h4>
                                    Cost-Effective and Scalable IT Solutions with Innovation
                                </h4>
                                <p>
                                    Delivering affordable IT services without compromising on
                                    quality, we craft scalable solutions that adapt to your
                                    business growth. By leveraging innovative technologies like
                                    AI, IoT, and cloud computing, we ensure your business remains
                                    competitive and future-ready. Achieve long-term success while
                                    optimizing costs.
                                </p>
                                <div className="number-sec">
                                    <span>3</span>
                                </div>
                            </div>
                            <div className="box-layout">
                                <h4>Commitment to Quality</h4>
                                <p>
                                    Quality is non-negotiable at Moltech Solutions. We adhere to
                                    the highest standards to ensure our solutions are scalable,
                                    secure, and reliable, delivering consistent performance for
                                    your business needs.
                                </p>
                                <div className="number-sec">
                                    <span>4</span>
                                </div>
                            </div>
                            <div className="box-layout">
                                <h4>Customer-Centric Approach</h4>
                                <p>
                                    Understanding your business, valuing your ideas, and creating
                                    solutions tailored to your vision—this is our approach to
                                    every project. We believe in building strong partnerships that
                                    drive mutual success. These options highlight
                                    customer-centricity and emphasize collaboration while keeping
                                    the tone professional and approachable. Let me know which one
                                    resonates best!
                                </p>
                                <div className="number-sec">
                                    <span>5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="advantage-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-left">
                                    <span className="sub-title">Smart Solutions</span>
                                    <h3 className="title mb-4">
                                        The Moltech <span>Advantage</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="advantage-points">
                                    <ul>
                                        <li>
                                            <div className="icon-part">
                                                <Images imagePath={AppIcons.Outsource} altText="why choose us img " />
                                            </div>
                                            <div className="desc-part">
                                                <h5>Offshore Outsourcing Expertise:</h5>
                                                <p>
                                                    We excel in delivering efficient and cost-effective IT
                                                    services, ensuring seamless communication and smooth
                                                    project management from start to finish.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-part">
                                                <Images imagePath={AppIcons.OneStep} altText="why choose us img " />
                                            </div>
                                            <div className="desc-part">
                                                <h5>One-Stop IT Solutions:</h5>
                                                <p>
                                                    From consulting and UI/UX design to development,
                                                    deployment, and maintenance, we provide all your IT
                                                    needs under one roof, saving time and maximizing
                                                    convenience.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-part">
                                                <Images imagePath={AppIcons.Track} altText="why choose Us Imag" />
                                            </div>
                                            <div className="desc-part">
                                                <h5>Proven Track Record:</h5>
                                                <p>
                                                    With a portfolio of successful projects and a growing
                                                    base of satisfied clients, we have earned a reputation
                                                    for reliability, quality, and excellence.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon-part">
                                                <Images imagePath={AppIcons.Scalable} altText="why choose Us Imag" />
                                            </div>
                                            <div className="desc-part">
                                                <h5>Sustainable and Scalable Solutions:</h5>
                                                <p>
                                                    Our future-ready IT solutions are designed to adapt
                                                    and scale as your business grows, ensuring long-term
                                                    value and dependability.
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
        </div>
    );
};

export default WhyChooseUsPage;
