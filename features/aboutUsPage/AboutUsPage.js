"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "./AboutUsPage.scss";
import "../../styles/Common.scss";
import Images from "../../components/image/Image";
import { AppIcons } from "../../data/appIcons";
import Iconify from "../../components/ui/icons/Iconify";
import ClientSlider from "../../components/clientSlider/ClientSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import TechnologyStack from "../homePage/components/TechnologyStack";
import Image from "next/image";

function AboutPage() {
  const [countersInView, setCountersInView] = useState(false);
  const countersRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });

    const observer = new IntersectionObserver(
      (entries) => {
                
        const entry = entries[0];
        if (entry.isIntersecting) {
          setCountersInView(true); // Start counting when the section is in view
          observer.disconnect(); // Stop observing once counters are triggered
        }
      },
      { threshold: 1 } // Trigger when 20% of the section is visible
    );

        if (countersRef.current) {
            observer.observe(countersRef.current);
        }

        return () => {
            if (countersRef.current) {
                observer.unobserve(countersRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="about-us-section">
                {/* Top Title Start */}
                <div className="about-top-title-sec">
                    {/* LCP hero image: render eagerly with high fetch priority */}
                    <div className="about-top-hero">
                        <Image
                            src={AppIcons.AboutHero}
                            alt="About Moltech Solutions hero background"
                            fill
                            priority
                            fetchPriority="high"
                            sizes="100vw"
                            style={{ objectFit: "cover" }}
                        />
                        <div aria-hidden="true" className="about-top-hero-overlay" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-2xl-12 col-xl-12 col-md-12 col-12">
                                <div className="left-desc-sec">
                                    <div className="title-center">
                                        <span className="sub-title">Inspiring Your ideas!</span>
                                        <h1 className="title mb-4">
                                            How We Make <span>User Experience</span>
                                            <br></br> And How We Work.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Title End */}

                {/* About Section Start */}
                <div className="mt-5">
                    <div className="about-first-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                                    <div className="title-left">
                                        <span className="sub-title">About Company</span>
                                        <h3 className="title mb-4">
                                            Our <span>Story</span>
                                        </h3>
                                    </div>
                                    <div className="left-desc-sect">
                                        <p>
                                            Moltech Solutions Inc. was founded in 2014, with an
                                            ambition to offer high quality and best-fit solutions with
                                            cutting edge technologies in all segments of the IT
                                            industry in India. Moltech solutions is an outsourcing
                                            company and also your trusted technical partner for your
                                            vision and dreams. We have provided quality services in
                                            custom software development, websites, mobile applications
                                            development, search engine optimizations and digital
                                            marketing to our customers across the globe.
                                        </p>
                                        <p>
                                            Moreover, we have also taken strides towards Data
                                            Sciences, Internet of Things(IoT), Artificial
                                            Intelligance(AI), and Blockchain Technologies. Our
                                            experience with expertise in offshore outsourcing makes us
                                            an efficient outsourcing partner whom you can approach for
                                            effective solutions. We have resources that can add a
                                            value in your business along with a corporate workplace
                                            that is flexible to meet your needs.
                                        </p>
                                        <div className="icon-desc-sec">
                                            <div className="row">
                                                <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                                                    <div className="small-boxes">
                                                        <div className="left-icon">
                                                            <Iconify icon="mingcute:user-setting-fill" />
                                                        </div>
                                                        <div className="right-short-desc">
                                                            <h4>Skill Gaps</h4>
                                                            <p>
                                                                Contrary to popular belief, Lorem Ipsum is not
                                                                simply random text. It has roots in a piece of
                                                                classical Latin literature.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                                                    <div className="small-boxes">
                                                        <div className="left-icon">
                                                            <Iconify icon="material-symbols:shield-lock" />
                                                        </div>
                                                        <div className="right-short-desc">
                                                            <h4>Static Teams</h4>
                                                            <p>
                                                                Contrary to popular belief, Lorem Ipsum is not
                                                                simply random text. It has roots in a piece of
                                                                classical Latin literature.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                                                    <div className="small-boxes">
                                                        <div className="left-icon">
                                                            <Iconify icon="octicon:copilot-warning-16" />
                                                        </div>
                                                        <div className="right-short-desc">
                                                            <h4>Outdated Solutions</h4>
                                                            <p>
                                                                Contrary to popular belief, Lorem Ipsum is not
                                                                simply random text. It has roots in a piece of
                                                                classical Latin literature.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                                                    <div className="small-boxes">
                                                        <div className="left-icon">
                                                            <Iconify icon="ant-design:global-outlined" />
                                                        </div>
                                                        <div className="right-short-desc">
                                                            <h4>Global Talent</h4>
                                                            <p>
                                                                Contrary to popular belief, Lorem Ipsum is not
                                                                simply random text. It has roots in a piece of
                                                                classical Latin literature.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                                    <div className="right-img-sec">
                                        <Image
                                            src={AppIcons.WhoWeAre}
                                            alt="Moltech Solutions Our Team and Vision Image"
                                            className="img-fluid"
                                        />
                                        <div className="about-bottom-sec">
                                            Moltech Now Thrives, Employing <span>100+</span> Experts
                                            Globally, Serving Clients Worldwide.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="counter-section" ref={countersRef}>
                        <div className="container">
                            <div className="counters">
                                <div className="count-number-part border-right">
                                    <div className="counter">
                                        {countersInView && (
                                            <CountUp start={0} end={11} duration={2.5} />
                                        )}
                                        <span
                                            className="plus"
                                            style={{ color: "var(--themeColor)" }}
                                        >
                                            +
                                        </span>
                                        <p className="counter-label">Years of Experience</p>
                                    </div>
                                </div>
                                <div className="count-number-part border-right">
                                    <div className="counter">
                                        {countersInView && (
                                            <CountUp start={0} end={50} duration={2.5} />
                                        )}
                                        <span
                                            className="plus"
                                            style={{ color: "var(--themeColor)" }}
                                        >
                                            +
                                        </span>
                                        <p className="counter-label">Happy Clients Globally</p>
                                    </div>
                                </div>
                                <div className="count-number-part border-right">
                                    <div className="counter">
                                        {countersInView && (
                                            <CountUp start={0} end={80} duration={2.5} />
                                        )}
                                        <span
                                            className="plus"
                                            style={{ color: "var(--themeColor)" }}
                                        >
                                            %
                                        </span>
                                        <p className="counter-label">Customer Retention Rate</p>
                                    </div>
                                </div>
                                <div className="count-number-part border-right">
                                    <div className="counter">
                                        {countersInView && (
                                            <CountUp start={0} end={65} duration={2.5} />
                                        )}
                                        <span
                                            className="plus"
                                            style={{ color: "var(--themeColor)" }}
                                        >
                                            +
                                        </span>
                                        <p className="counter-label">
                                            Global Talented Professionals
                                        </p>
                                    </div>
                                </div>
                                <div className="count-number-part">
                                    <div className="counter">
                                        {countersInView && (
                                            <CountUp start={0} end={200} duration={2.5} />
                                        )}
                                        <span
                                            className="plus"
                                            style={{ color: "var(--themeColor)" }}
                                        >
                                            +
                                        </span>
                                        <p className="counter-label">
                                            Successful Project Deliveries
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-second-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                                    <div className="right-img-sec left-side">
                                        <Images
                                            imgCustomClassName="big-img"
                                            imagePath={AppIcons.LeftMainImg}
                                            altText="Moltech Solutions Innovative Technology Image"
                                        />
                                        <Images
                                            imgCustomClassName="small-img"
                                            imagePath={AppIcons.LeftbottomImg}
                                            altText="Moltech Solutions Technology Workflow Image"
                                        />
                                        <div className="about-bottom-sec top-left">
                                            <span>10+</span> Years of Experience
                                        </div>
                                        <div className="about-bottom-sec bottom-right">
                                            <span>3+</span> Global Location
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                                    <div className="desc-part">
                                        <div className="title-left">
                                            <span className="sub-title">
                                                Our Unique Selling Point
                                            </span>
                                            <h3 className="title mb-4">
                                                Why <span>Moltech</span> ?
                                            </h3>
                                        </div>
                                        <div className="left-desc-sect">
                                            <div className="listing-point">
                                                <ul>
                                                    <li>
                                                        <span>Mission (We Aim)&nbsp;:&nbsp;</span>
                                                        <br></br>
                                                        <p>
                                                            To be a Technical Partner for building your
                                                            business.
                                                        </p>
                                                        <p>
                                                            To provide Quality, Sustainable and Economical
                                                            solutions.
                                                        </p>
                                                        <p>
                                                            To provide Custom and Scalable solutions based on
                                                            customer&apos;s ideas.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Vision (Convert every client&apos;s dream into
                                                            reality)&nbsp;:&nbsp;
                                                        </span>
                                                        <p>
                                                            Our Vision is to help implement your ideas with
                                                            high quality, sustainable and economical solutions
                                                            using the latest technologies. We aim to commit to
                                                            convert every client&apos;s dream into reality
                                                            with personalised IT Solutions.
                                                        </p>
                                                        <p>Scalable Development</p>
                                                        <p>Research and Development for challenges</p>
                                                        <p>Quality Assurance</p>
                                                        <p>24/7 Support</p>
                                                        <p>Respect Time</p>
                                                        <p>Relations Prioritised over Business</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="center-chart-sec">
                        <div className="container mt-5">
                            <TechnologyStack />
                        </div>
                    </div>
                    <div className="client-logo-sec mb-5 mt-5">
                        <div className="container">
                            <div className="title-center mb-5">
                                <span className="sub-title">Clients</span>
                                <h3 className="title">
                                    Our Happy <span>Customers</span>
                                </h3>
                            </div>
                            <ClientSlider />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutPage;