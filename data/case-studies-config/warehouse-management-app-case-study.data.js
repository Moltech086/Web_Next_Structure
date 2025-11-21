import { AppIcons } from "../appIcons";
import { BASE_URL } from "@/lib/utils/baseUrl";

const ClixzMobileWarehouseAppData = {
  slug: "warehouse-management-app-case-study",
  heroSection: {
    title: "Clixz",
    HeroImage: AppIcons.Whare6,
    highlight: "Mobile Warehouse Application",
    description:
      "A powerful mobile app designed to support field technicians with real-time and offline access to warehouse stock, equipment verification, and efficient stock booking.",
    location: {
      icon: "mdi:warehouse",
      label: "Warehouse & Inventory Management",
    },
    industry: {
      icon: "mdi:truck-delivery-outline",
      label: "Warehouse",
    },
    services: [
      {
        name: "Mobile App Development",
        icon: "mdi:cellphone-cog",
        href: "/services/mobile-application-development",
      },
      {
        name: "UI/UX Design",
        icon: "mdi:palette-outline",
        href: "/services/ui-ux-design-and-development",
      },
      {
        name: "Barcode Integration",
        icon: "mdi:barcode-scan",
        href: "/services/custom-software-development",
      },
      {
        name: "Offline Capability",
        icon: "mdi:cloud-off-outline",
        href: "/services/custom-software-development",
      },
    ],
    card: {
      mainIcon: "mdi:cellphone-sound",
      lines: ["w-3-5", "w-2-4"],
      iconRow: [
        { icon: "mdi:login", bg: "bg-green" },
        { icon: "mdi:qrcode-scan", bg: "bg-orange" },
        { icon: "mdi:sync", bg: "bg-blue" },
      ],
    },
  },
// metaConfig
metaConfig: {
  title:
    "Warehouse Management Mobile App Case Study | React Native App Development - USA",
  description:
    "Discover how our Dallas-based team developed a warehouse management mobile app with real-time inventory sync, QR/barcode scanning, and offline access to boost technician productivity.",
  keywords:
    "warehouse management app, React Native warehouse app, offline stock management app, mobile inventory app USA, barcode scanning mobile solution, warehouse software development, stock booking mobile app, logistics mobile application, USA React Native developers, Dallas mobile app development",
  canonical: `${BASE_URL}/case-study/warehouse-management-app-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Warehouse Management Mobile App Case Study | React Native App Development - USA",
    description:
      "Learn how our Dallas-based team built a mobile app with offline support, barcode scanning, and seamless inventory syncing for field technicians in the warehouse industry.",
    url: `${BASE_URL}/case-study/warehouse-management-app-case-study`,
    image: `${BASE_URL}/images/meta/warehouse-management-og.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Warehouse Management Mobile App Case Study | React Native App Development - USA",
    description:
      "See how we built a mobile app for field technicians with real-time stock sync, QR/barcode scanning, and full offline functionality for warehouse operations.",
    image: `${BASE_URL}/images/meta/warehouse-management-og.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
},


  projectDetails: {
    description:
      "The app enables technicians to check warehouse stock, scan and verify installed instruments, and book stock transactions on the go. It supports both online and offline modes, allowing technicians to continue operations without internet connectivity, with automatic data sync once a connection is restored.",
  },
  aboutSection: {
    description1:
      "Clixz is a solution partner providing tailored systems to enterprise clients. They sought to develop a mobile warehouse application to support their partners, who have technicians visiting customer sites requiring real-time access to warehouse stock information and equipment verification.",
    industry: "Warehouse",
    projectType: "Mobile App",
    technologies: [
      {
        name: "React Native",
        icon: "logos:react",
        description:
          "Cross-platform mobile framework for Android and iOS deployment.",
      },
      {
        name: "Redux",
        icon: "logos:redux",
        description: "Used for managing app-wide state efficiently.",
      },
      {
        name: "Axios",
        icon: "simple-icons:axios",
        description: "For secure and structured API calls and syncing.",
      },
      {
        name: "QR/Barcode Scanner",
        icon: "gg:qr",
        description:
          "Integrated barcode scanning tool for fast and accurate code reading.",
      },
      {
        name: "Google Play Console",
        icon: "logos:google-play-icon",
        description:
          "Platform for managing Android app releases and analytics.",
      },
      {
        name: "Apple App Store",
        icon: "logos:apple-app-store",
        description: "Deployment platform for publishing iOS apps and updates.",
      },
    ],
  },
  majorFeatures: {
    features: [
      {
        title: "User Login/Registration",
        description: "Secure access control for technicians using the app.",
        icon: "mdi:login-variant",
      },
      {
        title: "Sync Stocks Management",
        description: "Live and cached inventory synced to mobile.",
        icon: "mdi:database-sync",
      },
      {
        title: "Outgoing Goods Management",
        description: "Manage and verify outgoing items with ease.",
        icon: "mdi:exit-run",
      },
      {
        title: "QR/Barcode Scanning",
        description: "Quickly scan instruments for verification and check-in.",
        icon: "mdi:qrcode-scan",
      },
      {
        title: "Online & Offline Modes",
        description: "App functions seamlessly without connectivity.",
        icon: "mdi:cloud-off-outline",
      },
      {
        title: "Sync Data Functionality",
        description: "Sync data between local device and cloud with one tap.",
        icon: "mdi:sync-circle",
      },
      {
        title: "Stock Booking",
        description: "Reserve inventory in advance and avoid shortages.",
        icon: "mdi:calendar-check-outline",
      },
      {
        title: "User-Friendly Mobile UI",
        description:
          "Intuitive design for quick and easy operations on the go.",
        icon: "mdi:cellphone",
      },
    ],
  },
  challengeSolution: {
    challenges: [
      {
        title: "No Real-Time Stock Access",
        desc: "Technicians lacked real-time visibility into warehouse stock while on-site.",
        icon: "mdi:eye-off-outline",
      },
      {
        title: "Manual Errors",
        desc: "Manual checks and paperwork slowed operations and created errors.",
        icon: "mdi:file-document-alert-outline",
      },
      {
        title: "Connectivity Gaps",
        desc: "Connectivity issues in field locations disrupted workflows.",
        icon: "mdi:signal-off",
      },
    ],
    solutions: [
      {
        title: "Offline Mode Support",
        desc: "We developed a mobile app that supports both online and offline operations, ensuring seamless field operations.",
        icon: "mdi:cloud-off-outline",
      },
      {
        title: "Barcode Scanning",
        desc: "Integrated QR/barcode scanning for quick instrument verification.",
        icon: "mdi:barcode-scan",
      },
      {
        title: "Real-Time Sync",
        desc: "Implemented automatic data syncing when connectivity is restored.",
        icon: "mdi:sync",
      },
      {
        title: "User-Friendly Interface",
        desc: "Provided a user-friendly interface for field technicians to increase productivity.",
        icon: "mdi:account-cog-outline",
      },
    ],
  },
  projectSnippets: {
    projectSnippets: [
      {
        id: 1,
        title: "Homepage Hero Section",
        description: "Stunning oceanfront view with modern booking interface",
        category: "Clixz",
        image: AppIcons.Whare1,
      },
      {
        id: 2,
        title: "Room Gallery",
        description: "Interactive room showcase with detailed amenities",
        category: "Clixz",
        image: AppIcons.Whare2,
      },
      {
        id: 3,
        title: "Mobile Responsive Design",
        description: "Seamless experience across all devices",
        category: "Clixz",
        image: AppIcons.Whare3,
      },
      {
        id: 4,
        title: "CMS Dashboard",
        description: "User-friendly content management interface",
        category: "Clixz",
        image: AppIcons.Whare4,
      },
      {
        id: 5,
        title: "Booking Integration",
        description: "Third-party booking system integration",
        category: "Clixz",
        image: AppIcons.Whare5,
      },
      {
        id: 6,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Clixz",
        image: AppIcons.Whare6,
      },
      {
        id: 7,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Clixz",
        image: AppIcons.Whare7,
      },
      {
        id: 8,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Clixz",
        image: AppIcons.Whare8,
      },
      {
        id: 9,
        title: "Clean Homepage Layout",
        description: "Modern look with organized sections and dynamic CTA.",
        category: "Clixz",
        image: AppIcons.Whare1,
      },
    ],
  },
  testimonialSection: {
    rating: 5,
    quote:
      "Moltech is a professional company that has provided valuable software development services. We're happy with our decision to work with Moltech, as their expertise has translated into a great new software platform. We're looking forward to work together on potential future projects.",
    author: "Jeroen Smith",
    title: "CEO at Clixz Platform",
  },
  resultsSection: {
    title: "Business Values Provided",
    description:
      "The digital transformation delivered significant value across key business areas.",
    values: [
      {
        title: "Automated Stock Management",
        description:
          "Real-time inventory tracking reduced human error and improved stock-level accuracy and forecasting.",
        icon: "mdi:warehouse",
      },
      {
        title: "Easy Inbound and Outbound Stocks",
        description:
          "Simplified workflows for receiving and dispatching goods enhanced speed and minimized delays.",
        icon: "mdi:truck-fast-outline",
      },
      {
        title: "Easy Goods Quantity Management",
        description:
          "Quick adjustment tools and threshold alerts made managing item quantities more efficient.",
        icon: "mdi:format-list-numbered",
      },
      {
        title: "Scan Barcode Option",
        description:
          "Integrated barcode scanning accelerated item tracking, retrieval, and data accuracy.",
        icon: "mdi:barcode-scan",
      },
      {
        title: "Data Sync via Web Services",
        description:
          "Seamless integration with external platforms ensured real-time data synchronization and availability.",
        icon: "mdi:cloud-sync-outline",
      },
    ],
  },
};

export default ClixzMobileWarehouseAppData;
