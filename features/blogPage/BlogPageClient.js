"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import BlogHero from "./components/BlogHero";
import BlogCard from "./components/BlogCard";
import BlogPagination from "./components/BlogPagination";

// ✅ Virtual scrolling component for better performance
const VirtualizedBlogList = ({ blogs, startIndex, endIndex }) => {
  const visibleBlogs = useMemo(() => 
    blogs.slice(startIndex, endIndex), 
    [blogs, startIndex, endIndex]
  );

  return (
    <div className="row">
      {visibleBlogs.map((blog, index) => (
        <BlogCard 
          key={`${blog.readMoreLink}-${startIndex + index}`} 
          blog={blog} 
          index={startIndex + index} 
        />
      ))}
    </div>
  );
};

export default function BlogPageClient({
  initialBlogs,
  currentPage: initialPage,
  totalPages,
  allBlogs,
  blogsPerPage,
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [currentBlogs, setCurrentBlogs] = useState(initialBlogs);

  // ✅ Memoize pagination logic
  const paginationData = useMemo(() => {
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    return {
      startIndex: indexOfFirstBlog,
      endIndex: indexOfLastBlog,
      totalBlogs: allBlogs.length
    };
  }, [currentPage, blogsPerPage, allBlogs.length]);

  // ✅ Update blogs when page changes
  useEffect(() => {
    const { startIndex, endIndex } = paginationData;
    const newBlogs = allBlogs.slice(startIndex, endIndex);
    setCurrentBlogs(newBlogs);

    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, allBlogs, paginationData]);

  // ✅ Memoize page change handler
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className="blog-list-main">
      <BlogHero />

      <div className="blog-listing-sec">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <VirtualizedBlogList 
                blogs={allBlogs}
                startIndex={paginationData.startIndex}
                endIndex={paginationData.endIndex}
              />

              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
