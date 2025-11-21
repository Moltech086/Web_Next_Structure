import React from "react";
import "./LifeAtMoltechPage.scss";
import Iconify from "../../components/ui/icons/Iconify";
import Buttons from "../../components/ui/button/Buttons";
import Images from "../../components/image/Image";
import { AppIcons } from "@/data/appIcons";

const LifeAtMoltechPage = () => {
    return (
        <div className="common-top-space">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="img-sec-top">
                            <Images imagePath={AppIcons.LifeAtMoltech} alt="Life at Moltech" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Life at Moltech Solution Start */}
            <div className="container">
                <div className="row">
                    <div className="col-2xl-6 col-xl-6 col-md-12 col-12 career-left-sec">
                        <div className="row">
                            <div className="col-6">
                                <div
                                    className="career-card"
                                >
                                    <Iconify
                                        icon="hugeicons:office-chair"
                                        className="office-chair"
                                    />
                                    <h4>Our Creative Workspace</h4>
                                    <p>
                                        Nestled in the heart of innovation, our office is where
                                        ideas flourish and creativity finds its home.
                                    </p>
                                </div>
                                <div
                                    className="career-card"
                                >
                                    <Iconify icon="mynaui:star" />
                                    <h4>Meet the Dream Team</h4>
                                    <p>
                                        Surround yourself with passionate professionals who inspire,
                                        challenge, and elevate your work every day.
                                    </p>
                                </div>
                                <div
                                    className="career-card"
                                >
                                    <Iconify icon="solar:code-broken" />
                                    <h4>Endless Learning Pathways</h4>
                                    <p>
                                        Grow with us through continuous learning opportunities that
                                        empower you to reach new professional heights.
                                    </p>
                                </div>
                            </div>
                            <div className="col-6 mt-5">
                                <div
                                    className="career-card"
                                >
                                    <Iconify icon="solar:star-fall-linear" />
                                    <h4>Celebrating Your Achievements</h4>
                                    <p>
                                        Your hard work never goes unnoticed—expect recognition and
                                        rewards that truly reflect your impact.
                                    </p>
                                </div>
                                <div
                                    className="career-card"
                                >
                                    <Iconify icon="octicon:organization-24" />
                                    <h4>Fuel for Innovation</h4>
                                    <p>
                                        Enjoy a space where your creativity is fueled by
                                        collaboration, cutting-edge tools, and a culture of
                                        continuous improvement.
                                    </p>
                                </div>
                                <div
                                    className="career-card"
                                >
                                    <Iconify icon="solar:cup-star-broken" />
                                    <h4>Your Next Destination</h4>
                                    <p>
                                        Find us at Moltech Solutions Private Limited, 506 – 5th
                                        Floor Dwarkesh Business Hub, Opposite Visamo Society, Near
                                        ONGC Circle, Visat – Gandhinagar Highway, Motera - 380005
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2xl-6 col-xl-6 col-md-12 col-12 career-right-sec">
                        <div className="right-sec-content">
                            <h2 className="section-title">
                                Life at Moltech: Where <span>Growth Meets Community</span>
                            </h2>
                            {/* <h3>Wide-ranging Expertise</h3> */}
                            <p>
                                At Moltech Solutions Private Limited, we cultivate a vibrant
                                learning environment where every day is an opportunity to grow.
                                Our diverse team thrives in a competitive yet supportive
                                atmosphere, celebrating all festivals together like family. With
                                access to cutting-edge technology, top-notch facilities, and the
                                wisdom of industry veterans who&apos;ve been with us for years,
                                you&apos;ll find the perfect balance of challenge and support.
                                Here, learning isn&apos;t just encouraged—it&apos;s a way of
                                life.
                            </p>

                            <Buttons
                                buttonTypeClassName="theme-btn"
                                buttonText="Learn More"
                                ariaLabel="Navigate to learn more page"
                            //   onClick={handleClose}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Life at Moltech Solution End */}
        </div>
    );
};

export default LifeAtMoltechPage;
