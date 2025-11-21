"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AppIcons } from "@/data/appIcons";
import Image from "next/image";

const WebDesignTricksTemplate = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageAlt, setModalImageAlt] = useState("");

  const handleImageClick = (src, alt) => {
    setModalImageSrc(src);
    setModalImageAlt(alt);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalImageSrc("");
    setModalImageAlt("");
  };
  return (
    <>
      <div className="blog-details-decpription-box">
        <p>
          Creating a website can feel overwhelming, especially if you&apos;re
          not a tech wizard. The good news? You don&apos;t need to be one! With
          just a few simple web design tricks, you can make your site look
          professional and stand out from the crowd.
        </p>
      </div>
      <p>
        Whether you&apos;re designing your first site or just looking for quick
        improvements, these tips are easy to follow and will make a big
        difference.
      </p>

      <h3 id="keep-it-clean">
        <strong>1. Keep It Clean and Organized</strong>
      </h3>

      <div className="blog-header-image">
        <Image
          src={AppIcons.KeepitCleanImg}
          alt="Keep It Clean and Organized"
          onClick={() =>
            handleImageClick(
              AppIcons.KeepitCleanImg,
              "Keep It Clean and Organized"
            )
          }
          style={{ cursor: "pointer", height: "auto" }}
        />
        
      </div>
      <p>
        When it comes to web design, less is more. A cluttered page confuses
        visitors, while a clean and simple layout makes everything easier to
        find.
      </p>
      <h5>
        <strong>How to do it:</strong>
      </h5>
      <ul>
        <li>
          <p>
            <strong>Use White Space:</strong> Ensure there&apos;s plenty of
            white space around text and images to make them stand out.
          </p>
        </li>
        <li>
          <p>
            <strong>Simplify Navigation:</strong> Stick to a clear navigation
            menu with no more than 5–7 options.
          </p>
        </li>
        <li>
          <p>
            <strong>Consistent Colors and Fonts:</strong> Use 2–3 complementary
            colors and stick to them for a cohesive look.
          </p>
        </li>
      </ul>
      <h5>
        <strong>Tip 💡</strong>
      </h5>
      <p>
        A clean design looks professional and helps visitors focus on
        what&apos;s important, like your content or products.
      </p>

      <h3 id="use-high-quality-images">
        <strong>2. Use High-Quality Images</strong>
      </h3>
      <div className="blog-header-image">
        <Image
          src={AppIcons.UseHdImg}
          alt="Use High-Quality Images"
          onClick={() =>
            handleImageClick(AppIcons.UseHdImg, "Use High-Quality Images")
          }
          style={{ cursor: "pointer", height: "auto" }}
        />
      </div>

      <p>
        Images are the first thing visitors notice. Blurry or low-quality
        pictures can make your website look unprofessional.
      </p>
      <h5>
        <strong>How to do it:</strong>
      </h5>
      <p>
        Use clear, high-resolution images that match your website&apos;s theme.
      </p>
      <ul>
        <li>
          <p>
            <strong>Avoid using too many stock photos:</strong> Personalized
            images work better.
          </p>
        </li>
        <li>
          <p>
            <strong>Optimize image sizes:</strong> Keep your site fast — large
            files can slow things down.
          </p>
        </li>
        <li>
          <p>
            <strong>Compress images:</strong> Aim for file size of 500KB or less
            for most images, and 1MB or less for large (mostly full-screen or
            background) images.
          </p>
        </li>
        <li>
          <p>
            <strong>Delayed Loading:</strong> Lazy loading ensures that images
            only load when they are within the viewport, reducing initial page
            load time.
          </p>
        </li>
        <li>
          <p>
            <strong>Faster Reloads:</strong> Browser caching stores images
            locally, allowing faster loading times on subsequent page visits.
          </p>
        </li>
      </ul>
      <h5>
        <strong>Tip💡</strong>
      </h5>
      <p>
        Beautiful visuals grab attention and create a lasting impression,
        helping your site stand out.
      </p>

      <h3 id="add-ctas">
        <strong>3. Add Call-to-Actions (CTAs)</strong>
      </h3>
      <div className="blog-header-image">
        <Image
          src={AppIcons.CtabtnImg}
          alt="Add Clear Call-to-Action Buttons"
          onClick={() =>
            handleImageClick(
              AppIcons.CtabtnImg,
              "Add Clear Call-to-Action Buttons"
            )
          }
          style={{ cursor: "pointer", height: "auto" }}
        />
      </div>

      <p>
        A Call-to-Action is a button or text that tells visitors what to do
        next, like &quot;Subscribe Now&quot; or &quot;Shop the Sale.&quot; CTAs
        guide your audience and boost engagement.
      </p>

      <h5>
        <strong>How to do it:</strong>
      </h5>

      <ul>
        <li>
          <p>
            <strong>Use short, action-focused phrases:</strong> like &quot;Learn
            More&quot; or &quot;Get Started.&quot;
          </p>
        </li>
        <li>
          <p>
            <strong>Place CTAs where they&quot;re easy to see:</strong> like at
            the top of your homepage or after a blog post.
          </p>
        </li>
        <li>
          <p>
            <strong>Make them visually stand out:</strong> with contrasting
            colors or bold buttons.
          </p>
        </li>
        <li>
          <p>
            <strong>Clear and compelling CTAs:</strong> can keep users engaged
            with your content and brand.
          </p>
        </li>
        <li>
          <p>
            <strong>Consider user behavior:</strong> place CTAs where users are
            likely to pause or naturally look for the next step.
          </p>
        </li>
      </ul>

      <h5>
        <strong>Tip💡</strong>
      </h5>
      <p>
        Clear CTAs make it easy for visitors to take action, which can lead to
        more clicks, sign-ups, or sales.
      </p>

      <h3 id="make-it-mobile-friendly">
        <strong>4. Make It Mobile-Friendly</strong>
      </h3>

      <div className="blog-header-image">
        <Image
          src={AppIcons.MobileFriendly}
          alt="Make It Mobile-Friendly"
          onClick={() =>
            handleImageClick(AppIcons.MobileFriendly, "Make It Mobile-Friendly")
          }
          style={{ cursor: "pointer", height: "auto" }}
        />
      </div>
      <p>
        <strong>Over 50% of website traffic</strong> comes from mobile devices,
        so your site needs to look good on any screen size.
      </p>

      <p>
        <strong>How to do it:</strong>
      </p>

      <ul>
        <li>
          <p>
            Test your site on different devices to make sure it&quot;s
            responsive.
          </p>
        </li>
        <li>
          <p>
            Use <strong>responsive frameworks</strong> like Bootstrap or
            Tailwind CSS.
          </p>
        </li>
        <li>
          <p>
            Apply <strong>relative units</strong> (<code>%</code>,{" "}
            <code>em</code>, <code>rem</code>) instead of fixed (<code>px</code>
            ) for widths and fonts.
          </p>
        </li>
        <li>
          <p>
            Test your site with <strong>Chrome DevTools</strong> using different
            screen sizes.
          </p>
        </li>
        <li>
          <p>Use large buttons and readable fonts for smaller screens.</p>
        </li>
        <li>
          <p>Avoid pop-ups that can be hard to close on mobile.</p>
        </li>
        <li>
          <p>
            Avoid horizontal scrolling and make images/videos scale fluidly.
          </p>
        </li>
      </ul>

      <h5>
        <strong>Tip💡</strong>
      </h5>
      <p>
        A mobile-friendly site ensures you don&quot;t lose visitors who are
        browsing on their phones, keeping your audience happy and engaged.
      </p>

      <h3 id="choose-eye-catching-fonts">
        <strong>5. Choose Eye-Catching Fonts</strong>
      </h3>

      <div className="blog-header-image">
        <Image
          src={AppIcons.EyecatchingImg}
          alt="Choose Eye-Catching Typography"
          onClick={() =>
            handleImageClick(
              AppIcons.EyecatchingImg,
              "Choose Eye-Catching Typography"
            )
          }
          style={{ cursor: "pointer", height: "auto" }}
        />
      </div>

      <p>
        <strong>Your font choices</strong> can instantly make or break your
        website&quot;s look. Picking the right fonts adds personality and keeps
        your site easy to read.
      </p>
      <p>
        <strong>How to do it:</strong>
      </p>
      <ul>
        <li>
          <p>
            Use bold fonts for headings and simple, readable fonts for body
            text.
          </p>
        </li>
        <li>
          <p>
            Avoid overusing decorative fonts — they&quot;re fun but can be hard
            to read in long paragraphs.
          </p>
        </li>
        <li>
          <p>Maintain contrast between text and background.</p>
        </li>
        <li>
          <p>Stick to 2 fonts max to maintain consistency.</p>
        </li>
        <li>
          <p>Use consistent font sizing and line height for a clean layout.</p>
        </li>
      </ul>

      <h5>
        <strong>Tip💡</strong>
      </h5>
      <p>
        Good typography sets the tone of your website and ensures your content
        is easy to read, keeping visitors engaged.
      </p>

      <h3 id="final-thoughts">
        <strong>Final Thoughts</strong>
      </h3>
      <p>
        Improving your website doesn&quot;t have to be complicated. By following
        these 5 simple web design tricks, you&quot;ll create a clean,
        attractive, and user-friendly site that stands out.
      </p>

      <p>
        Start small — pick one tip to try today and see how it transforms your
        site. With a little effort, you&quot;ll be on your way to creating a
        website you&quot;re proud of!
      </p>

      <p>
        Do you have other web design tips or questions? Share them in the
        comments below!
      </p>

      {/* ✅ Image Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalImageAlt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={modalImageSrc} alt={modalImageAlt} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WebDesignTricksTemplate;
