'use client';

import React, { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import Images from "../../../components/image/Image";
import { Icon } from "@iconify/react";

const BlogCard = memo(({ blog, index }) => {
  const [motionPrefersReduced, setMotionPrefersReduced] = useState(false);
  const THRESHOLD = 15;

  useEffect(() => {
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    setMotionPrefersReduced(motionMatchMedia.matches);

    const handleResize = () => {
      setMotionPrefersReduced(motionMatchMedia.matches);
    };

    motionMatchMedia.addEventListener('change', handleResize);
    return () => motionMatchMedia.removeEventListener('change', handleResize);
  }, []);

  // ✅ Optimize hover handler with useCallback
  const handleHover = useCallback((e) => {
    if (motionPrefersReduced) return;
    
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight } = currentTarget;
    const rect = currentTarget.getBoundingClientRect();

    const horizontal = (clientX - rect.left) / clientWidth;
    const vertical = (clientY - rect.top) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
  }, [motionPrefersReduced]);

  const resetStyles = useCallback((e) => {
    e.currentTarget.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }, []);

  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-12">
      <div
        className="blog-card"
        onMouseMove={handleHover}
        onMouseLeave={resetStyles}
        style={{
          transition: motionPrefersReduced ? "none" : "transform 0.1s ease",
        }}
      >
        <div className="blog-image">
          <Images
            imagePath={blog.imagePath}
            altText={blog.altText}
            ImgWidth="100"
            ImgHeight="100"
            loading={index < 6 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="blog-content">
          <div className="top-dat-auther">
            <span className="blog-date-category">
              <Icon icon="mdi:calendar" width="14" />
              {blog.date}
            </span>
            <div className="blog-meta">
              <span className="blog-author">
                <Icon icon="ph:user" width="14" />
                <span>{blog.author}</span>
              </span>
            </div>
          </div>
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-description">{blog.description}</p>
          <Link className="btn-link" href={`/${blog.readMoreLink}`}>
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
});

BlogCard.displayName = 'BlogCard';

export default BlogCard;
