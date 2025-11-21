"use client";
import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";
import Iconify from "../icons/Iconify";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      <button
        onClick={scrollToTop}
        className={`scroll-to-top__button ${isVisible ? "visible" : "hidden"}`}
        aria-label="Scroll to top"
      >
        <Iconify icon="bxs:up-arrow" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
