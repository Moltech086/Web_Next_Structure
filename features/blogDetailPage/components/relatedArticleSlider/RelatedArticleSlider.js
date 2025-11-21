import React, { useState, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import "./RelatedArticleSlider.scss";
import Images from "@/components/image/Image";
import Link from "next/link";

// ✅ Import real blog data
import { blogData } from "@/features/blogPage/BlogList.data";

const RelatedArticleSlider = ({ slidesToShow = 3 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // ✅ Sort newest first, limit to top 6 related articles
  const relatedArticles = useMemo(() => {
    return [...blogData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);
  }, []);

  const totalSlides = Math.ceil(relatedArticles.length / slidesToShow);
  const maxSlide = totalSlides - 1;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (slideIndex) => {
    if (isTransitioning || slideIndex === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(slideIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="article-slider">
      <div className="article-slider__header">
        <h2 className="article-slider__title">More Articles</h2>
        <div className="article-slider__controls">
          <button
            className={`article-slider__nav article-slider__nav--prev ${
              currentSlide === 0 ? "article-slider__nav--disabled" : ""
            }`}
            onClick={prevSlide}
            disabled={currentSlide === 0 || isTransitioning}
            aria-label="Previous articles"
          >
            <Icon
              icon="lucide:chevron-left"
              className="article-slider__nav-icon"
            />
          </button>
          <button
            className={`article-slider__nav article-slider__nav--next ${
              currentSlide === maxSlide ? "article-slider__nav--disabled" : ""
            }`}
            onClick={nextSlide}
            disabled={currentSlide === maxSlide || isTransitioning}
            aria-label="Next articles"
          >
            <Icon
              icon="lucide:chevron-right"
              className="article-slider__nav-icon"
            />
          </button>
        </div>
      </div>

      <div
        className="article-slider__container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`article-slider__track ${
            isTransitioning ? "article-slider__track--transitioning" : ""
          }`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="article-slider__slide">
              {relatedArticles
                .slice(
                  slideIndex * slidesToShow,
                  (slideIndex + 1) * slidesToShow
                )
                .map((article, articleIndex) => (
                  <div
                    key={`${slideIndex}-${articleIndex}`}
                    className="article-slider__card"
                    style={{ animationDelay: `${articleIndex * 0.1}s` }}
                  >
                    <div className="article-slider__image-container">
                      <Images
                        imagePath={article.imagePath}
                        altText={article.altText || article.title}
                        className="article-slider__image"
                      />
                      <div className="article-slider__image-overlay"></div>
                    </div>

                    <div className="article-slider__content">
                      <div className="article-slider__meta">
                        <div className="article-slider__meta-item">
                          <Icon
                            icon="lucide:calendar"
                            className="article-slider__meta-icon"
                          />
                          <span>{article.date}</span>
                        </div>
                        {article.readTime && (
                          <div className="article-slider__meta-item">
                            <Icon
                              icon="lucide:clock"
                              className="article-slider__meta-icon"
                            />
                            <span>{article.readTime} min read</span>
                          </div>
                        )}
                      </div>

                      <h3 className="article-slider__card-title">
                        <Link
                          href={"/" + article.readMoreLink}
                          className="article-slider__card-link"
                        >
                          {article.title}
                        </Link>
                      </h3>

                      <p className="article-slider__excerpt">
                        {article.description?.slice(0, 120)}...
                      </p>

                      <div className="article-slider__author">
                        <Icon
                          icon="lucide:user"
                          className="article-slider__author-icon"
                        />
                        <span className="article-slider__author-name">
                          {article.author}
                        </span>
                      </div>

                      <Link
                        href={"/" + article.readMoreLink}
                        className="article-slider__read-more"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="article-slider__pagination">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`article-slider__dot ${
              index === currentSlide ? "article-slider__dot--active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticleSlider;
