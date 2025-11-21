"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { AppIcons } from "../../../data/appIcons";
import "./CaseStudySliders.scss";
import Link from "next/link";
import { Icon } from "@iconify/react";

const slides = [
  {
    imgPath: AppIcons.Haritage,
    width: "720",
    height: "416",
    title: "Heritage Resort Shark Bay",
    description: `Heritage Resort Shark Bay is a picturesque oceanfront resort located in Denham, Western Australia. It’s known for its breathtaking views, proximity to Monkey Mia and Francois Peron National Park, and friendly hospitality. As a popular destination for both local and international travelers, the resort needed a refreshed digital presence to match its physical charm and meet growing online expectations.`,
    link: "case-study/resort-website-redesign-case-study",
  },
  {
    imgPath: AppIcons.SGTech,
    width: "483",
    height: "375",
    title: "SGTech",
    description: `SGTech, Singapore’s leading tech trade association, now manages over 1,400 members and their events seamlessly through an integrated, mobile-friendly member and event management system.`,
    link: "case-study/membership-event-management-case-study",
  },
  {
    imgPath: AppIcons.Warehouseapp,
    width: "516",
    height: "500",
    title: "Warehouse App",
    description: `A powerful mobile app designed to support field technicians with real-time and offline access to warehouse stock, equipment verification, and efficient stock booking.`,
    link: "case-study/warehouse-management-app-case-study",
  },
  {
    imgPath: AppIcons.Capitaland,
    width: "620",
    height: "468",
    title: "CapitaLand – SkillsFuture Queen Bee Programme",
    description: `Custom web and admin solution enabling Singapore’s retail SMEs to access curated learning and digital transformation resources through CapitaLand’s SkillsFuture Queen Bee Programme.`,
    link: "case-study/skills-development-portal-case-study",
  },

  {
    imgPath: AppIcons.BrightLogix,
    width: "620",
    height: "355",
    title: "Bright Logix",
    description: `A sleek, SEO-optimized redesign for a tech partner focused on software and benefits administration—enhancing digital presence and user clarity across platforms.`,
    link: "case-study/technology-consulting-website-design-case-study",
  },

  {
    imgPath: AppIcons.ACCA,
    width: "719",
    height: "620",
    title: "ACCA – Association of Chartered Certified Accountants",
    description: `We developed a digital eVoting system for ACCA, ensuring transparent, secure, and remote voting for members during AGMs and panel elections amid the COVID-19 pandemic.`,
    link: "case-study/acca-partner-event-management-system-case-study",
  },
  {
    imgPath: AppIcons.Scal,
    width: "620",
    height: "535",
    title: "Singapore Contractors Association Ltd. (SCAL)",
    description: `We partnered with Flying Cape Technologies to build a robust membership and event platform for SCAL, digitizing approval workflows, financial tracking, and online event participation.`,
    link: "case-study/event-management-platform-web-platform-case-study",
  },
  {
    imgPath: AppIcons.Pemmasanillc,
    width: "620",
    height: "646",
    title: "Pemmasani LLC",
    description: `Professional website built to showcase Pemmasani LLC’s services across Richmond, Boston, Austin, McLean, and Washington DC—enhancing visibility and enabling easy client connections.`,
    link: "case-study/accounting-firm-website-design-case-study",
  },
  {
    imgPath: AppIcons.Kb,
    width: "620",
    height: "505",
    title: "K&B Couriers",
    description: `Modern website, admin portal, and APIs built for a logistics leader to enhance order management, client access, and operational efficiency in real time.`,
    link: "case-study/courier-booking-admin-system-case-study",
  },
];

const CaseStudySlider = () => {
  const router = useRouter();
  const cursorRef = useRef(null);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000 }),
  ]);

  // --- Custom Cursor Logic ---
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const sliderElement = document.querySelector(".case-study-slider");

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      cursorRef.current?.classList.add("active");
    };

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove("active");
    };

    if (sliderElement) {
      sliderElement.addEventListener("mousemove", handleMouseMove);
      sliderElement.addEventListener("mouseenter", handleMouseEnter);
      sliderElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("mousemove", handleMouseMove);
        sliderElement.removeEventListener("mouseenter", handleMouseEnter);
        sliderElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      const { x, y } = cursorPosition;
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  }, [cursorPosition]);

  return (
    <div className="case-study-slider">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide case-study-card"
              role="group"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <div className="slide-content container-fluid">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-12 order-lg-1 order-2">
                    <div className="desc-part">
                      <div className="overlay">
                        <h3>{slide.title}</h3>
                        <p>{slide.description}</p>
                        {/* <Link
                          ClassName="btn dark-btn"
                          isIcon={true}
                          iconClass="weui:arrow-filled"
                          href={slide.link}
                          title={`Read the ${slide.title} case study`}
                        >
                          Case Study
                        </Link> */}
                        <Link
                          rel="canonical"
                          className="btn dark-btn"
                          href={slide.link}
                        >
                          <span>Case Study</span>
                          <Icon
                            icon="weui:arrow-filled"
                            className="accordion-icon ml-1"
                            width={10}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12 order-lg-2 order-1">
                    <div className="image-placeholder">
                      <Image
                        src={slide.imgPath}
                        alt={`${slide.title} case study preview`}
                        width={slide.width}
                        height={slide.height}
                        loading="lazy"
                        priority={false}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      <div className="custom-cursor" ref={cursorRef}></div>
    </div>
  );
};

export default CaseStudySlider;
