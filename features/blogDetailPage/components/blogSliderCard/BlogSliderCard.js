import React, { useState, useMemo } from 'react';
import { Icon } from '@iconify/react';
import './BlogSliderCard.scss';
import Images from '@/components/image/Image';
import Link from 'next/link';

// ✅ Import blog data
import { blogData } from "@/features/blogPage/BlogList.data";

const BlogCard = ({ blog }) => (
  <div className="blog-slider-card group compact">
    <Link href={"/" + blog.readMoreLink} className="card-content">
      <div className="card-image">
        <Images
          imagePath={blog.imagePath}   //  matches your blogData
          altText={blog.altText}       // ✅ matches your blogData
          className="thumbnail"
        />
      </div>
      <div className="card-info">
        <h4 className="title">{blog.title}</h4>
        <div className="meta">
          <div className="meta-item">
            <Icon icon="mdi:calendar" className="icon" />
            <span>{blog.date}</span>
          </div>
          <div className="meta-item">
            <Icon icon="mdi:clock-outline" className="icon" />
            <span>{blog.readTime} min read</span> {/* ✅ formatted */}
          </div>
        </div>
      </div>
    </Link>
  </div>
);

const BlogSliderCard = () => {
  // ✅ sort newest first, pick top 9
  const sortedBlogData = useMemo(() => {
    return [...blogData]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 9);
  }, []);

  const blogsPerSlide = 2;
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = useMemo(() => {
    return Math.ceil(sortedBlogData.length / blogsPerSlide);
  }, [sortedBlogData]);

  const getCurrentBlogs = () => {
    const start = currentSlide * blogsPerSlide;
    return sortedBlogData.slice(start, start + blogsPerSlide);
  };

  return (
    <div className="blog-slider-wrapper">
      <div className="slider-header">
        <h3 className="slider-title">
          <Icon icon="mdi:newspaper-variant-outline" className="heading-icon" />
          Articles
        </h3>
        <div className="slider-nav">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
            disabled={totalSlides <= 1}
            className="nav-button"
          >
            <Icon icon="mdi:chevron-left" className="nav-icon" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
            disabled={totalSlides <= 1}
            className="nav-button"
          >
            <Icon icon="mdi:chevron-right" className="nav-icon" />
          </button>
        </div>
      </div>

      <div className="card-list">
        {getCurrentBlogs().map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>

      {totalSlides > 1 && (
        <div className="pagination">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogSliderCard; 