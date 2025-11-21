'use client';

import React, { useMemo } from "react";
import Link from "next/link";
import Iconify from "../../../components/ui/icons/Iconify";
import Images from "../../../components/image/Image";
import { AppIcons } from "@/data/appIcons";

// ✅ Memoize background dots to prevent re-creation
const BackgroundDots = React.memo(() => (
  <div className="bg-dots">
    {Array.from({ length: 12 }, (_, i) => (
      <div key={i} className="bg-dot"></div>
    ))}
  </div>
));

BackgroundDots.displayName = 'BackgroundDots';

export default function BlogHero() {
  // ✅ Memoize emoji data
  const emojis = useMemo(() => [
    { emoji: "🚀", className: "emoji-1" },
    { emoji: "✍️", className: "emoji-2" },
    { emoji: "💡", className: "emoji-3" },
    { emoji: "📘", className: "emoji-4" },
    { emoji: "💻", className: "emoji-5" },
  ], []);

  return (
    <div className="blog-hero-sec">
      <div className="background-shapes">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
        <div className="bg-square-1"></div>
        <div className="bg-square-2"></div>

        <svg className="bg-svg" viewBox="0 0 800 600" fill="none">
          <path
            d="M-100 200 Q200 100 400 200 T800 150"
            stroke="rgba(251, 146, 60, 0.15)"
            strokeWidth="2"
          />
          <path
            d="M0 350 Q300 250 600 350 T900 300"
            stroke="rgba(251, 146, 60, 0.12)"
            strokeWidth="3"
          />
          <path
            d="M-50 450 Q250 350 500 450 T850 400"
            stroke="rgba(251, 146, 60, 0.1)"
            strokeWidth="2"
          />
        </svg>

        {emojis.map(({ emoji, className }) => (
          <div key={className} className={`emoji ${className}`}>
            {emoji}
          </div>
        ))}

        <BackgroundDots />
      </div>
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-7 col-12">
            <div className="hero-content">
              <h1 className="hero-title">
                Tech Content That Solves,
                <span className="brand-text"> Not Just Tells</span>
              </h1>
              <p className="title-hero-description">
                Our blog isn&apos;t just about trends—it&apos;s about
                helping you solve real challenges. From selecting the right
                tech stack to improving delivery speed, we offer content
                rooted in experience and built to support your growth,
                innovation, and customer success.
              </p>
              <p className="title-hero-description mt-5">
                Want advice on choosing the right tech for your idea?
              </p>
              <Link className="service-btn" href="/contact-us">
                <span>Let&apos;s Connect</span>
                <Iconify icon="weui:arrow-filled" width={20} />
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-5 col-12">
            <Images 
              imagePath={AppIcons.BlogHero} 
              altText="Hero-Img" 
              fetchPriority="high" 
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
