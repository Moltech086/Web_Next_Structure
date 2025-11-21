"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import CodeBlockCustom from "@/components/codeBlock/CodeBlockCustom";
import { AppIcons } from "@/data/appIcons";

const tailwindButtonsCode = `<button aria-label="Default" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
<button aria-label="Alternative" type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
<button aria-label="Dark" type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
<button aria-label="Light" type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
<button aria-label="Green" type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
<button aria-label="Red" type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
<button aria-label="Yellow" type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
<button aria-label="Purple" type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>`;

const muiButtonsCode = `<Button variant="text" aria-label="Text">Text</Button>
<Button variant="contained" aria-label="Contained">Contained</Button>
<Button variant="outlined" aria-label="Outlined">Outlined</Button>`;
const avatarStringCode = `<Avatar {...stringAvatar('Kent Dodds')} />
<Avatar {...stringAvatar('Jed Watson')} />
<Avatar {...stringAvatar('Tim Neutkens')} />`;

const TailwindVsMuiBlog = () => {
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
        <p id="introduction">
          When it comes to front-end development, choosing the right tools can
          make a huge difference. <strong>Tailwind CSS</strong> and{" "}
          <strong>Material-UI</strong> are two popular choices for developers
          looking to create scalable web designs. In this guide, we’ll explore
          the differences between these tools and help you decide which one
          suits your needs. Both work with a distinct philosophy:
        </p>
      </div>

      <ul>
        <li>
          <p>
            <strong>Tailwind CSS:</strong> A utility-first CSS framework that
            offers low-level classes you compose to build custom designs.
          </p>
        </li>
        <li>
          <p>
            <strong>Material UI (MUI):</strong> A React component library
            implementing Google&apos;s Material Design, providing ready-made
            components and theming tools.
          </p>
        </li>
      </ul>

      <p>
        This guide will help you understand their core differences, strengths,
        and ideal use cases, so you can pick the one that best suits your
        project.
      </p>

      <div className="blog-header-image">
        <Image
          src={AppIcons.TailwindVsMaterialUICoverImg}
          alt="Tailwind CSS vs Material-UI"
          width
          height
          onClick={() =>
            handleImageClick(
              AppIcons.TailwindVsMaterialUICoverImg,
              "Tailwind CSS vs Material-UI"
            )
          }
          style={{ cursor: "pointer", height: "auto" }}
        />
      </div>

      <h3 id="what-is-tailwind">
        <strong>
          What is <span>Tailwind CSS</span>?
        </strong>
      </h3>
      <p>
        Tailwind CSS is a utility-first CSS framework. It provides a set of
        small, reusable CSS classes that you can combine to style your website
        or application.
      </p>

      <h5>
        <strong>Key Features:</strong>
      </h5>
      <ul>
        <li>
          <p>
            <strong>Customizable:</strong> Modify everything from colors to
            spacing with a configuration file.
          </p>
        </li>
        <li>
          <p>
            <strong>Utility Classes:</strong> Style directly in your HTML with
            classes like <strong>bg-blue-500</strong> or <strong>p-4</strong>.
          </p>
        </li>
        <li>
          <p>
            <strong>Scalable:</strong> Works seamlessly for small projects and
            complex designs.
          </p>
        </li>
      </ul>

      <h5 id="why-use-tailwind">
        <strong>Why Use Tailwind CSS?</strong>
      </h5>
      <div className="blog-header-image">
        <Image
          src={AppIcons.Tailwindcssimg}
          alt="Use Of Tailwind CSS"
          loading="lazy"
          width={1280}
          height={640}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(
              AppIcons.Tailwindcssimg,
              "Tailwind CSS vs Material-UI"
            )
          }
        />
      </div>

      <p>
        <strong>Speed:</strong> No need to write custom CSS; use pre-built
        classes instead.
      </p>
      <CodeBlockCustom
        code={`<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  &lt;!-- Your content here --&gt;
</div>`}
        language="css"
      />
      <p>
        <strong>Flexibility:</strong> Tailwind doesn&apos;t enforce a specific
        design system. You have full creative control.
      </p>

      <h5 id="developer-experience">
        <strong>Developer Experience</strong>
      </h5>
      <ul>
        <li>
          <p>
            <strong>Steep Initial Learning Curve:</strong> Requires memorizing
            utility names and conventions.
          </p>
        </li>
        <li>
          <p>
            <strong>Tooling Integration:</strong> Works seamlessly with PostCSS,
            Webpack, Vite, etc.
          </p>
        </li>
      </ul>

      <h5>
        <strong># Default button:</strong>
      </h5>
      <div className="blog-header-image">
        <Image
          src={AppIcons.DefaultButtonTailwind}
          alt="Tailwind Default Button"
          loading="lazy"
          width={738}
          height={62}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(
              AppIcons.DefaultButtonTailwind,
              "Tailwind Default Button"
            )
          }
        />
      </div>
      <CodeBlockCustom code={tailwindButtonsCode} language="css" />
      <p>
        <strong>Performance:</strong> It removes unused CSS during the build
        process, keeping your site lightweight.
      </p>

      <h3 id="what-is-material-ui">
        <strong>
          What is <span>Material-UI</span>?
        </strong>
      </h3>
      <p>
        Material-UI (MUI) is a React component library that implements Google’s
        Material Design principles. It provides pre-designed components like
        buttons, sliders, and forms.
      </p>

      <div className="blog-header-image">
        <Image
          src={AppIcons.Materialimg}
          alt="Material-UI"
          loading="lazy"
          width={738}
          height={274}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() => handleImageClick(AppIcons.Materialimg, "Material-UI")}
        />
      </div>

      <h5>
        <strong>Key Features:</strong>
      </h5>
      <ul>
        <li>
          <p>
            <strong>Customizable Themes:</strong> Easily adjust colors,
            typography, and styles with a theme provider.
          </p>
        </li>
        <li>
          <p>
            <strong>React Integration:</strong> Built specifically for React
            applications.
          </p>
        </li>
        <li>
          <p>
            <strong>Cross-Browser Compatibility:</strong> Material-UI ensures
            consistent appearance across Chrome, Firefox, Safari, and Edge.
          </p>
        </li>
        <li>
          <p>
            <strong>Theming System:</strong> Centralized theme object for
            colors, typography, spacing — apply consistency across components.
          </p>
        </li>
      </ul>

      <h5 id="why-use-material-ui">
        <strong>Why Use Material-UI?</strong>
      </h5>
      <ul>
        <li>
          <p>
            <strong>Ready-to-Use Components:</strong> MUI offers a vast
            collection of pre-built components, fully customizable to save
            development time.
          </p>
        </li>
      </ul>

      <p>
        <strong>Basic button</strong>
      </p>
      <div className="blog-header-image">
        <Image
          src={AppIcons.BasicbtnMuiImg}
          alt="Material-UI Basic Button"
          loading="lazy"
          width={738}
          height={70}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(
              AppIcons.BasicbtnMuiImg,
              "Material-UI Basic Button"
            )
          }
        />
      </div>
      <CodeBlockCustom code={muiButtonsCode} language="css" />

      <p>
        <strong>Letter avatars</strong>
      </p>
      <div className="blog-header-image">
        <Image
          src={AppIcons.LetteravatarsMuiImg}
          alt="Letter Avatars"
          loading="lazy"
          width={738}
          height={70}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(AppIcons.LetteravatarsMuiImg, "Letter Avatars")
          }
        />
      </div>
      <CodeBlockCustom code={avatarStringCode} language="jsx" />

      <ul>
        <li>
          <p>
            <strong>Material Design Compliance:</strong> Ensures a clean,
            modern, and intuitive look.
          </p>
        </li>
        <li>
          <p>
            <strong>Responsive Design:</strong> Works seamlessly across devices.
          </p>
        </li>
      </ul>

      <h3 id="which-one-to-choose">
        <strong>Which One Should You Choose?</strong>
      </h3>

      <p>
        <strong>&mdash; Tailwind CSS</strong>
      </p>
      <ul>
        <li>
          <p>You need complete creative freedom.</p>
        </li>
        <li>
          <p>
            <strong>Approach:</strong> Utility-first, raw CSS classes
          </p>
        </li>
        <li>
          <p>You want to build a unique design system from scratch.</p>
        </li>
        <li>
          <p>You&apos;re comfortable working directly with CSS classes.</p>
        </li>
        <li>
          <p>
            <strong>Bundle Size:</strong> Very small (JIT generates only used
            classes)
          </p>
        </li>
        <li>
          <p>
            <strong>Development Speed:</strong> Fast when comfortable with
            utilities
          </p>
        </li>
        <li>
          <p>
            <strong>Ecosystem:</strong> Growing plugin ecosystem (forms,
            animations)
          </p>
        </li>
      </ul>

      <p>
        <strong>&mdash; Material-UI</strong>
      </p>
      <ul>
        <li>
          <p>
            You&apos;re building a React app and need pre-designed components.
          </p>
        </li>
        <li>
          <p>
            <strong>Approach:</strong> Component-first, ready-made React
            components
          </p>
        </li>
        <li>
          <p>You prefer following Google&apos;s Material Design system.</p>
        </li>
        <li>
          <p>You&apos;re looking for speed and consistency in development.</p>
        </li>
        <li>
          <p>
            <strong>Bundle Size:</strong> Larger (includes component code and
            styles)
          </p>
        </li>
        <li>
          <p>
            <strong>Development Speed:</strong> Instant polished UI with minimal
            effort
          </p>
        </li>
        <li>
          <p>
            <strong>Ecosystem:</strong> Mature ecosystem with extensions and
            templates
          </p>
        </li>
      </ul>

      <h5 id="tailwind-and-mui-together">
        <strong>Tailwind and Material-UI Together?</strong>
      </h5>
      <div className="blog-header-image">
        <Image
          src={AppIcons.Tailwinandmatrialtogather}
          alt="Tailwind and Material-UI Together"
          loading="lazy"
          width={738}
          height={285}
          style={{ height: "auto", cursor: "pointer" }}
          onClick={() =>
            handleImageClick(
              AppIcons.Tailwinandmatrialtogather,
              "Tailwind and Material-UI Together"
            )
          }
        />
      </div>
      <p>
        Yes, you can use both! Use Material-UI for its pre-built components and
        Tailwind CSS for custom styling. This gives the best of both worlds.
      </p>

      <h3 id="final-thoughts">
        <strong>Final Thoughts</strong>
      </h3>
      <p>
        Both Tailwind CSS and Material-UI are excellent choices for scalable web
        design. Tailwind shines with flexibility and performance, while
        Material-UI excels with ready-to-use components and consistency. Your
        choice depends on project requirements and personal preferences.
      </p>
      <p>
        Start exploring these frameworks today to take your web development to
        the next level!
      </p>

      {/* ✅ Image Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalImageAlt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image width height src={modalImageSrc} alt={modalImageAlt} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TailwindVsMuiBlog;
