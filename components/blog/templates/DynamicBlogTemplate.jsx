"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";
import Link from "next/link";
import Iconify from "@/components/ui/icons/Iconify";
import { BASE_URL } from "@/lib/utils/baseUrl";

/**
 * Dynamic Blog Template Component
 * Renders blog content from API (HTML content)
 * Used when no static template file exists
 */
const DynamicBlogTemplate = ({ contentHtml, faqData, featuredImage, ctaText }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");
  // ✅ Add state to track image load attempts
  const [imageError, setImageError] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState(null);

  // ✅ Memoize processHtmlContent to prevent recreation on every render
  const processHtmlContent = useCallback((html) => {
    if (!html) return "";

    try {
      // Use a div to parse HTML (works in browser)
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      // Make all images clickable
      const images = tempDiv.querySelectorAll("img");
      images.forEach((img) => {
        const src = img.getAttribute("src") || "";
        const alt = img.getAttribute("alt") || "Image";
        
        // Ensure image source is absolute URL if needed
        let imageSrc = src;
        if (src && !src.startsWith("http") && !src.startsWith("//") && !src.startsWith("/")) {
          imageSrc = `${BASE_URL}/${src.replace(/^\//, "")}`;
        } else if (src && src.startsWith("/")) {
          imageSrc = `${BASE_URL}${src}`;
        }
        
        img.style.cursor = "pointer";
        img.setAttribute("data-modal-src", imageSrc);
        img.setAttribute("data-modal-alt", alt);
        
        // ✅ Use data attributes instead of onclick (prevents re-render issues)
        // Click handler will be attached via useEffect after render
      });

      // Add IDs to h3 headings for table of contents
      const h3Elements = tempDiv.querySelectorAll("h3");
      h3Elements.forEach((h3, index) => {
        if (!h3.id) {
          const text = h3.textContent?.trim() || "";
          const slug = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
          h3.id = slug || `heading-${index}`;
        }
      });

      return tempDiv.innerHTML;
    } catch (error) {
      console.error("Error processing HTML content:", error);
      return html; // Fallback to original HTML
    }
  }, []); // ✅ Empty dependency array - function never changes

  // Process content when component mounts or contentHtml changes
  const [processedContent, setProcessedContent] = useState("");

  // ✅ Use useMemo to prevent unnecessary processing
  const processed = useMemo(() => {
    if (typeof window !== "undefined" && contentHtml) {
      return processHtmlContent(contentHtml);
    }
    return contentHtml || "";
  }, [contentHtml, processHtmlContent]);

  // ✅ Only update state when processed content actually changes
  useEffect(() => {
    if (processed !== processedContent) {
      setProcessedContent(processed);
    }
  }, [processed, processedContent]);

  // ✅ Attach click handlers after content is rendered
  useEffect(() => {
    if (!processedContent) return;

    const handleImageClick = (e) => {
      const img = e.target.closest("img");
      if (img && img.tagName === "IMG") {
        const src = img.getAttribute("data-modal-src") || img.getAttribute("src") || "";
        const alt = img.getAttribute("data-modal-alt") || img.getAttribute("alt") || "Image";
        
        if (src) {
          let imageSrc = src;
          if (!src.startsWith("http") && !src.startsWith("//")) {
            imageSrc = src.startsWith("/") ? `${BASE_URL}${src}` : `${BASE_URL}/${src}`;
          }
          
          setModalImageSrc(imageSrc);
          setModalImageAlt(alt);
          setShowModal(true);
        }
      }
    };

    const contentDiv = document.querySelector(".blog-content");
    if (contentDiv) {
      contentDiv.addEventListener("click", handleImageClick);
      return () => {
        contentDiv.removeEventListener("click", handleImageClick);
      };
    }
  }, [processedContent]);

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImageSrc("");
    setModalImageAlt("");
  };

  // ✅ Memoize featured image URL calculation
  const featuredImageUrl = useMemo(() => {
    if (!featuredImage) return null;
    
    if (featuredImage.startsWith("http") || featuredImage.startsWith("//")) {
      return featuredImage;
    }
    
    return featuredImage.startsWith("/")
      ? `${BASE_URL}${featuredImage}`
      : `${BASE_URL}/${featuredImage}`;
  }, [featuredImage]);

  // ✅ Initialize current image source when featuredImageUrl changes
  useEffect(() => {
    if (featuredImageUrl) {
      setCurrentImageSrc(featuredImageUrl);
      setImageError(false); // Reset error state when image changes
    }
  }, [featuredImageUrl]);

  // Handle featured image click
  const handleFeaturedImageClick = () => {
    if (currentImageSrc) {
      setModalImageSrc(currentImageSrc);
      setModalImageAlt(currentImageSrc.split("/").pop() || "Blog Cover Image");
      setShowModal(true);
    }
  };

  // ✅ Handle image error - prevent infinite loop
  const handleImageError = useCallback((e) => {
    // Only try fallback once
    if (!imageError && currentImageSrc !== `${BASE_URL}/images/blog-list-5.webp`) {
      setImageError(true);
      const fallbackImage = `${BASE_URL}/images/blog-list-5.webp`;
      setCurrentImageSrc(fallbackImage);
      // Prevent event from bubbling to avoid infinite loop
      e.stopPropagation();
    } else {
      // If fallback also fails, hide the image to stop the loop
      e.target.style.display = 'none';
    }
  }, [imageError, currentImageSrc]);

  return (
    <>
      
 
      {/* ✅ Show placeholder or nothing if image fails */}
      {featuredImageUrl && imageError && (
        <div className="blog-header-image mt-0" style={{ minHeight: '400px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: '#999' }}>Image not available</p>
        </div>
      )}

      {/* Blog Content */}
      {processedContent && (
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      )}

      {/* CTA Section */}
      <div className="separate-cta mb-5">
        <div className="desc-sec">
          <p>
            {ctaText || 
              "When you're ready to move, our services are built to help you validate faster, scale smarter, and own your roadmap."}
          </p>
          <div className="button-sec">
            <Link rel="canonical" className="service-btn" href="/contact-us">
              <strong>Let&apos;s Connect</strong>
              <Iconify icon="weui:arrow-filled" width={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      {faqData && faqData.faqItems && faqData.faqItems.length > 0 && (
        <div id="faqs" className="blog-faq">
          <ServiceFAQ
            items={faqData.faqItems}
            title={faqData.faqTitle || "Frequently Asked Questions"}
          />
        </div>
      )}

      {/* Image Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalImageAlt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {modalImageSrc && (
            <Image
              src={modalImageSrc}
              alt={modalImageAlt}
              width={800}
              height={600}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DynamicBlogTemplate;
