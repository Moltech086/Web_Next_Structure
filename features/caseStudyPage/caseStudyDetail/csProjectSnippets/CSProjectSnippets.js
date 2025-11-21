"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "./CSProjectSnippets.scss";
import Images from "@/components/image/Image";

const ProjectSnippets = ({ projectSnippets }) => {
  const snippets = projectSnippets?.projectSnippets;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const openImagePopup = (imageId) => {
    setSelectedImage(imageId);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const totalSlides = Math.ceil(snippets?.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setItemsPerSlide(1); // Mobile
      } else if (width <= 1024) {
        setItemsPerSlide(2); // Tablet
      } else {
        setItemsPerSlide(3); // Desktop
      }
    };

    updateItemsPerSlide(); // Set on mount
    window.addEventListener("resize", updateItemsPerSlide);

    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  useEffect(() => {
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);


  return (
    <section className="project-snippets-section">
      <div className="container">
        <div className="section-header">
          <h2>Project Snippets</h2>
          <p>
            Visual highlights showcasing the transformation and key features of
            the new website.
          </p>
        </div>
        <div className="slider-container">
          <div className="slider-imgslides-container">
            <div
              className="slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="slide">
                  <div className="grid">
                    {snippets
                      .slice(
                        slideIndex * itemsPerSlide,
                        slideIndex * itemsPerSlide + itemsPerSlide
                      )
                      .map((snippet) => (
                        <div
                          key={snippet.id}
                          className="snippet-card"
                          onClick={() => openImagePopup(snippet.id)}
                        >
                          <div className="image-wrapper">
                            {/* <img
                              src={snippet.image}
                              alt={snippet.title}
                              className="snippet-image"
                            /> */}
                            <Images
                              imagePath={snippet.image}
                              altText="Projrct Snippets"
                            />
                            <span className="category">{snippet.category}</span>
                            <button className="zoom-icon" aria-label="Zoom in">
                              <Icon icon="mdi:magnify-plus-outline" />
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {totalSlides > 1 && (
            <>
              <button
                className="nav-btn prev"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                aria-label="Previous slide"
              >
                <Icon icon="mdi:chevron-left" />
              </button>
              <button
                className="nav-btn next"
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                aria-label="Next slide"
              >
                <Icon icon="mdi:chevron-right" />
              </button>

              <div className="indicators">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`indicator ${currentSlide === index ? "active" : ""
                      }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {selectedImage && (
          <div className="image-popup-overlay">
            <div className="image-popup-wrapper">
              <button className="close-btn" onClick={closeImagePopup} aria-label="Close popup">
                <Icon icon="mingcute:close-fill" className="close-icon" />
              </button>
              <div className="image-popup">
                <Images
                  imagePath={
                    snippets.find((snippet) => snippet.id === selectedImage)
                      ?.image
                  }
                  altText={
                    snippets.find((snippet) => snippet.id === selectedImage)
                      ?.title
                  }
                  className="popup-img"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSnippets;