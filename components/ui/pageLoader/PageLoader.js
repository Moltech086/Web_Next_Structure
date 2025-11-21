"use client";   // 👈 Required because of useState/useEffect


/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState } from "react";
import "./PageLoader.scss";
import { AppIcons } from "../../../data/appIcons";
import Image from "../../image/Image";

const PageLoader = () => {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => setLoading(false), 2000); // Change duration as needed
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;
  return (
    <div className="main-loader-sec">
      <div className="logo_loader">
        <div className="overlaybox" id="progress">
          {/* <img src="img/Animation-logo-normal.webp" alt=""> */}
          <Image
            imagePath={AppIcons.AnimationLogoNormal}
            alt="loader-img"
          />
        </div>
        <div className="overlaybox2">
          {/* <img src="img/Animation-logo-tp.webp" alt=""> */}
          <Image
            imagePath={AppIcons.AnimationLogoTp}
            alt="loader-img"
          />
        </div>
        {/* <img src="img/Animation-logo-tp.webp" alt=""> */}
        <Image
          imagePath={AppIcons.AnimationLogoTp}
          alt="loader-img"
        />
      </div>
    </div>
    
  );
};

export default PageLoader;
