import React from "react";
import { AppIcons } from "../../../data/appIcons";
import BoxCard from "../../../components/ui/boxcard/BoxCard";


const serviceData = [
  {
    title: "Custom Software Development",
    description:
      "We specialize in building tailored software solutions designed to meet the specific needs of your business, ensuring high scalability, reliability, and efficiency across operations.",
    icon: AppIcons.CustomsoftwareS,
    width: "145",
    height: "145",
    pageLink: "/services/custom-software-development",
    duration: 1000,
  },
  {
    title: "Business Software Consulting",
    description:
      "Our consulting services help bridge the gap between business needs and technology by offering strategic guidance, process optimization, and digital transformation planning.",
    icon: AppIcons.BusinessS,
    width: "145",
    height: "145",
    pageLink: "/services/business-software-consulting",
    duration: 1000,
  },
  {
    title: "AI & Machine Learning Solutions",
    description:
      "Leverage the power of artificial intelligence and machine learning to automate processes, uncover data-driven insights, and build intelligent systems that enhance decision-making.",
    icon: AppIcons.AIS,
    width: "145",
    height: "145",
    pageLink: "/services/ai-solutions",
    duration: 1000,
  },
  {
    title: "Web App Development",
    description:
      "We create scalable, responsive, and secure web applications using modern technologies to provide smooth user experiences and robust backend functionality across platforms.",
    icon: AppIcons.CrossS,
    width: "145",
    height: "145",
    pageLink: "/services/web-application-development",
    duration: 1000,
  },
  
  {
    title: "UI/UX Design and Development",
    description:
      "Our creative team designs engaging, user-centered interfaces backed by UX research and interaction design principles to maximize user satisfaction and conversion.",
    icon: AppIcons.UiuxS,
    width: "145",
    height: "145",
    pageLink: "/services/ui-ux-design-and-development",
    duration: 1000,
  },
  {
    title: "Data Preprocessing and Cleaning",
    description:
      "We help clean, normalize, and structure your raw data for accurate analysis, ensuring high-quality data pipelines and readiness for AI/ML model integration or BI reporting.",
    icon: AppIcons.DataPro,
    width: "145",
    height: "75",
    pageLink: "/services/data-preprocessing-and-cleaning",
    duration: 1000,
  },
  {
    title: "Mobile App Development",
    description:
      "Build high-performance native and cross-platform mobile apps for iOS and Android with a focus on usability, responsiveness, and market-ready deployment.",
    icon: AppIcons.MobileS,
    width: "145",
    height: "145",
    pageLink: "/services/mobile-application-development",
    duration: 1000,
  },
  {
    title: "Software Testing & QA Services",
    description:
      "Ensure your application is bug-free and production-ready with our thorough quality assurance and testing services, covering automation, manual, and performance testing.",
    icon: AppIcons.QaS,
    width: "145",
    height: "145",
    pageLink: "/services/software-testing-and-qa",
    duration: 1000,
  },
  {
    title: "IT Staff Augmentation Services",
    description:
      "Scale your team quickly with our on-demand tech talent. We provide skilled developers, designers, and analysts to seamlessly integrate with your in-house team.",
    icon: AppIcons.StaffS,
    width: "145",
    height: "145",
    pageLink: "/services/staff-augmentation",
    duration: 1000,
  },
  {
    title: "Accounting",
    description:
      "From bookkeeping to financial reporting, we offer accurate and compliant accounting services tailored to meet your business and regulatory requirements.",
    icon: AppIcons.Accounting,
    width: "145",
    height: "145",
    pageLink: "/services/accounting",
    duration: 1000,
  },
];

const HomeService = () => {
  return (
    <section className="container mt-5 services-box relative" aria-label="Moltech services">
      <div
        className="title-center"
      >
        <p className="sub-title">Why Work with Us</p>
        <h2 id="services-title" className="title">
          Our Core<span> Services</span>
        </h2>
        <p className="mb-4">
          Transforming Businesses Through Our Cutting-Edge IT Services
        </p>
      </div>

      <div className="row" role="list">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4 service-card"
            role="listitem"
          >
            <BoxCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              pageLink={service.pageLink}
              items={service.items}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeService;
