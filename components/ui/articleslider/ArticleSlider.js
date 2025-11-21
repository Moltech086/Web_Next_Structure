"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getAllBlogsClient } from "@/lib/blogUtils";
import "./ArticleSlider.scss";

const ArticleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [sortedBlogData, setSortedBlogData] = useState([]);

  // Fetch and set blog data
  useEffect(() => {
    const loadBlogs = async () => {
      const blogs = await getAllBlogsClient();
      // Limit to top 9 for slider
      setSortedBlogData(blogs.slice(0, 9));
    };
    loadBlogs();
  }, []);

  // ✅ Responsive itemsPerView
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 770) {
        setItemsPerView(1);
      } else if (window.innerWidth < 991) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxSlides = Math.max(0, sortedBlogData.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1));
  };

  const visibleArticles = sortedBlogData.slice(
    currentSlide,
    currentSlide + itemsPerView
  );

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxSlides]);

  return (
    <section
      className="article-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Popular articles carousel"
    >
      <div className="container">
        <div className="slider-header">
          <div className="header-content">
            <p className="subtitle">From the Blogs</p>
            <h2 className="title">
              Popular <span className="highlight">Articles</span>
            </h2>
          </div>
          <div className="navigation">
            <button
              onClick={prevSlide}
              className="nav-button"
              disabled={currentSlide === 0}
              aria-label="Previous slide"
            >
              <Icon icon="mdi:chevron-left" width="20" />
            </button>
            <button
              onClick={nextSlide}
              className="nav-button"
              disabled={currentSlide >= maxSlides}
              aria-label="Next slide"
            >
              <Icon icon="mdi:chevron-right" width="20" />
            </button>
          </div>
        </div>

        <div className="slider-content">
          <div className="articles-container">
            {visibleArticles.map((article, index) => (
              <div
                key={index}
                className="article-card"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${currentSlide + index + 1} of ${
                  sortedBlogData.length
                }`}
              >
                <div className="article-image" style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                  <Image
                    src={article.imagePath}
                    alt={`${article.title} thumbnail image`}
                    fill
                    loading="lazy"
                    priority={false}
                    className="image-fluid"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <div className="date-badge">
                      <Icon icon="mdi:calendar" width="14" />
                      {article.date}
                    </div>
                    {article.readTime && (
                      <div className="min-read">
                        <Icon icon="ion:time-outline" width="14" />
                        {article.readTime} min read
                      </div>
                    )}
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  {article.tags && article.tags.length > 0 && (
                    <div className="article-tags">
                      {article.tags.map((tag, tagIndex) => (
                        <span className="tag" key={tagIndex}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link href={article.readMoreLink} className="read-more-btn">
                    Know More <Icon icon="mdi:arrow-right" width="16" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-indicators">
          {Array.from({ length: maxSlides + 1 }, (_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSlider;
