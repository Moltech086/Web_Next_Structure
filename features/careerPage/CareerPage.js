"use client";
import React, { useEffect, useState } from "react";
import "./CareerPage.scss";
import Iconify from "../../components/ui/icons/Iconify";
import InfoContainer from "../../components/ui/infocontainer/InfoContainer";
import Images from "../../components/image/Image";
import { AppIcons } from "../../data/appIcons";
import CenterModel from "../../components/ui/centerModel/CenterModel";
import ApplicationModel from "../../features/careerPage/applicationModal/ApplicationModel";
import CommonApplicationModel from "../../features/careerPage/commonApplicationModal/CommonApplicationModel";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  useLazyGetAllCityInCareerQuery,
  useLazyGetAllJobCareerListQuery,
  useLazyGetTechnologyQuery,
} from "@/app/services/contactUsAPI";
import Select from "react-select";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const CareerPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [search, setSearch] = useState();
  const [selectedTechnologyIds, setSelectedTechnologyIds] = useState([]);
  const [selectedJobCareerId, setSelectedJobCareerId] = useState(null);

  const [getAllCityInCareer, { data, isFetching, isSuccess }] =
    useLazyGetAllCityInCareerQuery();
  const [
    getTechnology,
    {
      data: getTechnologyData,
      isFetching: isTechnologyFetching,
      isSuccess: isTechnologySuccess,
    },
  ] = useLazyGetTechnologyQuery();
  const [
    getCareerList,
    {
      isLoading: isGetCareerListLoading,
      isSuccess: isGetCareerListSuccess,
      data: isGetCareerListData,
    },
  ] = useLazyGetAllJobCareerListQuery();

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
    const request = {
      searchText: searchText || "",
      technologyId: "",
    };
    getCareerList(request);
  };

  const handleSearch = () => {
    const request = {
      searchText: search,
      technologyId: "",
    };
    getCareerList(request);
  };

  useEffect(() => {
    getAllCityInCareer();
    getTechnology();
  }, []);

  useEffect(() => {
    if (!isFetching && isSuccess && data) {
      setCities(data);
    }
  }, [isFetching, isSuccess, data]);

  useEffect(() => {
    if (!isTechnologyFetching && isTechnologySuccess && getTechnologyData) {
      setTechnology(getTechnologyData);
    }
  }, [isTechnologyFetching, isTechnologySuccess, getTechnologyData]);

  const handleToggleModal = (jobCareerId) => {
    setSelectedJobCareerId(jobCareerId);
    setShowModal(!showModal);
  };

  useEffect(() => {
    onGetData();
  }, []);

  const onGetData = () => {
    getLists();
  };

  const getLists = () => {
    const request = {
      searchText: "",
      technologyId: "",
    };

    getCareerList(request);
  };

  const handleTechnologyChange = (selectedOptions) => {
    const selectedTechnologyNames = selectedOptions.map(
      (option) => option.value
    );
    const selectedIds = technology
      .filter((tech) => selectedTechnologyNames.includes(tech.technologyName))
      .map((tech) => tech.technologyId);

    const technologyIdsString = selectedIds.join(",");
    setSelectedTechnologyIds(technologyIdsString);
    const request = {
      searchText: "",
      technologyId: technologyIdsString,
    };

    getCareerList(request);
  };

  // ✅ Mock job openings (fallback if API has no data)
  const sampleJobOpenings = [
    {
      jobCareerId: 1,
      jobTitle: "Business Development Manager (USA – Dallas)",
      departmentName: "Business Development / Sales",
      yearOfExperience: "3–5",
      location: "Dallas/Plano, Texas , onsite",
      workType: "Full-Time",
      company: "Moltech Solutions Inc.",
      responsibilities: [
        "Develop and execute a lead generation strategy targeting US-based businesses in software development, digital transformation, AI, digital marketing, accounting outsourcing, and data processing services.",
        "Build and optimize the sales funnel — from awareness to nurturing to conversion.",
        "Identify and qualify leads through LinkedIn, cold outreach, inbound marketing, and partnerships.",
        "Collaborate with leadership to define the US go-to-market strategy and client acquisition roadmap.",
        "Create and manage email campaigns, LinkedIn content strategies, and CRM workflows.",
        "Build relationships with C-level decision-makers in SMB and enterprise sectors.",
        "Work closely with the marketing team to align brand messaging, website traffic, and campaign analytics with lead objectives.",
        "Prepare and present proposals, service decks, and case studies tailored to client needs.",
        "Track KPIs: lead-to-conversion ratios, campaign performance, and pipeline velocity.",
      ],
      requirements: [
        "4–6 years of experience in B2B IT Services / Software Development sales or growth strategy.",
        "Proven success in lead generation, marketing funnel setup, or CRM-driven sales process.",
        "Strong knowledge of LinkedIn Sales Navigator, HubSpot, Apollo, or similar tools.",
        "Understanding of SDLC, AI, Cloud, and Digital Transformation services preferred.",
        "Excellent written and verbal communication skills.",
        "Proactive, data-driven, and comfortable working independently in a startup-style environment.",
        "Based in or willing to relocate to Dallas, TX.",
      ],
      whatWeOffer: [
        "Competitive base salary + performance-based incentives.",
        "Opportunity to shape Moltech’s US go-to-market strategy.",
        "Collaboration with global teams in the USA and India.",
        "Growth-focused, flexible work culture.",
      ],
    },
  ];

  // ✅ Use API data if available, else fallback to sample jobs
  const jobList =
    isGetCareerListSuccess &&
    isGetCareerListData &&
    isGetCareerListData.length > 0
      ? isGetCareerListData
      : sampleJobOpenings;

  return (
    <>
      <div className="career-page">
        <div className="container">
          <div className="row mt-5 align-items-center">
            <div className="col-2xl-6 col-xl-6 col-md-12 col-12 order-two">
              <InfoContainer
                subtitle="WELCOME TO MOLTECH!"
                title="How We Make"
                highlight="User Experience"
                description="Explore flexible opportunities and join our mission to make work life simpler, more pleasant and more productive."
                buttonText="Our Services"
                watermark="Career"
                linkText=""
                linkHref="#"
                additionalTitleText="  And How We Work."
              />
            </div>
            <div className="col-2xl-6 col-xl-6 col-md-12 col-12 app-form order-one">
              <div className="hero-banner right-banner">
                <div className="img">
                  <Images
                    imagePath={AppIcons.CareerImg}
                    alt="Career Image"
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Job Openings Section */}
          <div className="job-openings-section">
            <div className="title-left">
              <span className="sub-title">career</span>
              <h3 className="title mb-4">
                Job <span>Openings</span>
              </h3>
            </div>

            <div className="job-lists mt-10">
              {isGetCareerListLoading ? (
                <p>Loading job openings...</p>
              ) : jobList.length > 0 ? (
                jobList.map((job, index) => (
                  <div key={index} className="job-card">
                    <div className="left-desc-sec">
                      <h4>{job.jobTitle}</h4>
                      <p>
                        <span>
                          <span className="job-dept">
                            {job.departmentName}&nbsp;&nbsp;
                          </span>
                          <span>
                            (&nbsp;
                            {job.yearOfExperience
                              ? `${job.yearOfExperience} Years Experience`
                              : "Experience not specified"}
                            &nbsp;)
                          </span>
                        </span>
                      </p>
                      <p>
                        <b>Location : </b>
                        {job.location}
                      </p>
                      <p>
                        <b>Company : </b>
                        {job.company}
                      </p>
                      <p className="work-type">
                        <b>Job Type : </b>
                        {job.workType}
                      </p>
                      <p className="skills-title">
                        <strong>Key Responsibility:</strong>
                      </p>
                      <ul>
                        {job.responsibilities.map((skill, idx) => (
                          <li key={idx}>{skill}</li>
                        ))}
                      </ul>
                      <p className="skills-title">
                        <strong>Requirements:</strong>
                      </p>
                      <ul>
                        {job.requirements.map((skill, idx) => (
                          <li key={idx}>{skill}</li>
                        ))}
                      </ul>
                      <p className="skills-title">
                        <strong>What We Offer:</strong>
                      </p>
                      <ul>
                        {job.whatWeOffer.map((skill, idx) => (
                          <li key={idx}>{skill}</li>
                        ))}
                      </ul>
                      <hr></hr>
                      <div className="how-apply">
                        <h4>How To Apply: </h4>
                        <div className="text-note">
                          Send your resume with a short summary of your{" "}
                          <span>
                            lead generation or funnel setup experience
                          </span>{" "}
                          to{" "}
                          <Link href="mailto:inquiry@mol-tech.us">
                            inquiry@mol-tech.us
                          </Link>
                        </div>
                        <div className="subject">
                          <b>Subject :</b> Business Development Manager – Dallas (Lead
                          Funnel Role)
                        </div>
                      </div>
                    </div>
                    <div className="apply-btn-sec">
                      <button
                        className="apply-btn"
                        onClick={() => handleToggleModal(job.jobCareerId)}
                      >
                        Apply Now
                      </button>
                      {/* <Link className="apply-btn" href="/contact-us">
                        Apply Now
                      </Link> */}
                    </div>
                    <Icon
                      icon="streamline-freehand:job-briefcase-document"
                      className="main-bg-icon"
                    />
                  </div>
                ))
              ) : (
                <p className="not-opening">
                  <Images
                    imagePath={AppIcons.Nojob}
                    alt="No job openings available"
                  />
                  <span>Currently, there are no job openings available.</span>
                </p>
              )}
            </div>
          </div>
          {/* Heiring platform */}
          <div className="heiring-platform-sec">
            <div className="container">
              <div className="row mt-5 align-items-center">
                <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                  <Image
                    src={AppIcons.HeiringPlatform}
                    alt="CTA Icon Image"
                    loading="lazy"
                    priority={false}
                    className="img-fluid"
                  />
                </div>
                <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                  <div className="title-left">
                    <h1 className="title">
                      Work Together, <span>Grow</span> Together
                    </h1>
                    <p className="description">
                      Track every job opening, application, and candidate from
                      one simple dashboard. No more switching between tools or
                      losing important updates. Our system gives you complete
                      visibility — from job posting to final selection.
                    </p>
                    <p className="description">
                      Collaborate effortlessly with your team, review candidate
                      profiles in seconds, and make faster, data-driven hiring
                      decisions that truly matter. Keep your process organized,
                      transparent, and stress-free.
                    </p>
                  </div>
                  <div className="box-part">
                    <div className="row">
                      <div className="col-2xl-6 col-xl-6 col-md-12 col-12 mb-2">
                        <div className="box-layout">
                          <div className="icon-sec">
                            <Icon
                              icon="fluent:arrow-growth-24-filled"
                              className="article-slider__meta-icon"
                            />
                          </div>
                          <div className="right-desc">
                            <h4>Your Growth, Our Mission</h4>
                            <p>
                              At Moltech, we don’t just offer jobs — we help you
                              build a career. We’re committed to your learning,
                              growth, and success because when you grow, we grow
                              together.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-2xl-6 col-xl-6 col-md-12 col-12">
                        <div className="box-layout">
                          <div className="icon-sec">
                            <Icon
                              icon="icons8:idea"
                              className="article-slider__meta-icon"
                            />
                          </div>
                          <div className="right-desc">
                            <h4>Join a Team that Inspires</h4>
                            <p>
                              Be part of a team that values creativity,
                              collaboration, and passion. At Moltech, every idea
                              matters and every person makes a difference.
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

          {/* 🔹 Recruitment Process Section */}
          <div className="recruitment-pro">
            <div className="title-center">
              <h2 className="title">
                Learn Our Recruitment <span>Process</span>
              </h2>
              <p className="mb-2">
                Join our seamless recruitment journey—showcase your talent,
                connect with our team, and build a future with us!
              </p>
            </div>
            <div className="inquiry-contact">
              <div className="center-contact">
                <p>Hr :</p>
                <div className="contact-middle">
                  <Link href="https://wa.link/vw3dns" target="_blank">
                    +1-945-209-7691
                  </Link>
                </div>
                <span>|</span>
                <div className="contact-middle">
                  <Link href="mailto:career@mol-tech.com">
                    career@mol-tech.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="recruitment-card">
                <Iconify icon="fluent:form-24-regular" />
                <h4>CV Submission</h4>
                <p>
                  Submit your CV to introduce yourself and highlight your
                  professional experiences. We’re excited to learn about your
                  achievements, passion, and what drives you as a professional!
                </p>
              </div>
              <div className="recruitment-card col-2">
                <Iconify icon="mage:phone-call" />
                <h4>HR Round</h4>
                <p>
                  Our HR team is eager to meet you! This round is all about
                  understanding your personality, values, and what makes you a
                  great fit for our team. We value people who are driven by
                  curiosity, teamwork, and innovation.
                </p>
              </div>
              <div className="recruitment-card col-2">
                <Iconify icon="material-symbols:assignment-outline-sharp" />
                <h4>Technical Round</h4>
                <p>
                  Share your technical skills and problem-solving approach with
                  our experts. This is your chance to shine as you collaborate
                  with our team on exciting challenges and showcase your
                  innovative thinking.
                </p>
              </div>
              <div className="recruitment-card col-2">
                <Iconify icon="material-symbols-light:computer-outline" />
                <h4>Final Round</h4>
                <p>
                  This round is about finalizing the details. You&apos;ll engage
                  with senior team members to align on expectations, future
                  growth opportunities, and how you can contribute to our shared
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Application Modal */}
      <div className="career-demo-model">
        <CenterModel
          show={showModal}
          className="header-task-center-model"
          handleClose={handleToggleModal}
          modelTitle="Apply Now"
          modelSizeclassName="w-40"
        >
          {/* <ApplicationModel jobCareerId={selectedJobCareerId} /> */}
          <CommonApplicationModel onClose={handleToggleModal} />
        </CenterModel>
      </div>
    </>
  );
};

export default CareerPage;
