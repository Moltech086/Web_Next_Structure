'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./BlogSlider.scss";
import Iconify from "../icons/Iconify";
import Images from "../../../components/image/Image";
import { useRouter } from "next/navigation";

const BlogSlider = ({ posts }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const slideDelay = 5000;


  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 420) setItemsPerSlide(1); // Mobile
    else if (width < 640) setItemsPerSlide(2); // Mobile
    else if (width < 1200) setItemsPerSlide(3); // Tablet
    else setItemsPerSlide(3); // Desktop
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const handlePostClick = (linkUrl) => {
    if (linkUrl) router.push(linkUrl);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= posts.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, slideDelay);
    return () => clearInterval(autoSlide);
  }, [currentIndex, itemsPerSlide]);

  return (
    <div className="blog-slider">
      <div className="slider-header">
        <h3>Recent Blogs</h3>
        <div className="arrows">
          <span onClick={prevSlide} className="arrow prev">
            <Iconify icon="mdi:skip-previous" />
          </span>
          <span onClick={nextSlide} className="arrow next">
            <Iconify icon="mdi:skip-next" />
          </span>
        </div>
      </div>
      <div className="slider-content">
        {posts.slice(currentIndex, currentIndex + itemsPerSlide).map((post, index) => (
          <div
            className="post"
            key={index}
            onClick={() => handlePostClick(post.linkUrl)}
          >
            <div className="thumbnail">
              {post.imagePath ? (
                <Images imagePath={post.imagePath} alt={post.title} />
              ) : (
                <div className="default-thumbnail">
                  <Iconify icon="carbon:no-image" />
                </div>
              )}
            </div>
            <div className="post-info">
              <p>{post.date}</p>
              <h4>{post.title}</h4>
              <p>by {post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSlider;
