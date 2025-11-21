import { BASE_URL } from "@/lib/utils/baseUrl";
import { AppIcons } from "../appIcons";

const FlyingCapeAttendanceAppData = {
    slug: "mobile-attendance-and-class-booking-system-case-study",
    heroSection: {
        title: "Flying Cape",
        HeroImage: AppIcons.scanner1,
        highlight: "Mobile Attendance & Class-Booking System",
        description:
            "A centralized mobile platform enabling parents to book classes and institutions to manage attendance via QR scanning, real-time dashboards, and reporting—built with Ionic and deployed to Google Play and App Store.",
        location: {
            icon: "mdi:map-marker",
            label: "Singapore",
        },
        industry: {
            icon: "mdi:school-outline",
            label: "Education Technology",
        },
        services: [
            {
                name: "Mobile App Development",
                icon: "mdi:cellphone-cog",
                href: "/services/mobile-application-development",
            },
            {
                name: "QR-Code Attendance System",
                icon: "mdi:qrcode-scan",
                href: "/services/custom-software-development",
            },
            {
                name: "Real-Time Reporting",
                icon: "mdi:chart-box-outline",
                href: "/services/custom-software-development",
            },
            {
                name: "SSO & Secure Storage",
                icon: "mdi:lock-check-outline",
                href: "/services/custom-software-development",
            },
        ],
        card: {
            mainIcon: "mdi:qrcode",
            lines: ["w-3-4", "w-1-2"],
            iconRow: [
                { icon: "mdi:calendar-clock", bg: "bg-blue" },
                { icon: "mdi:account-group-outline", bg: "bg-yellow" },
                { icon: "mdi:file-chart-outline", bg: "bg-green" },
            ],
        },
    },
    metaConfig: {
  title:
    "Mobile Attendance & Class‑Booking System Case Study | Moltech Solutions Inc. | Case Study - USA",
  description:
    "Explore how Moltech Solutions developed a centralized mobile platform for class booking and QR‑code attendance tracking, featuring real‑time dashboards, reporting exports, and secure SSO integration.",
  keywords:
    "mobile attendance system, class booking app, QR code attendance, real‑time dashboard, reporting exports, SSO authentication, mobile app development",
  canonical:
    `${BASE_URL}/case-study/mobile-attendance-and-class-booking-system-case-study`,
  author: "Moltech Solutions Inc.",
  language: "English",
  distribution: "Global",
  rating: "General",
  revisitAfter: "7 days",
  openGraph: {
    title:
      "Mobile Attendance & Class‑Booking System Case Study | Moltech Solutions Inc.",
    description:
      "Explore how Moltech Solutions developed a centralized mobile platform for class booking and QR‑code attendance tracking, featuring real‑time dashboards, reporting exports, and secure SSO integration.",
    url:
      `${BASE_URL}/case-study/mobile-attendance-and-class-booking-system-case-study`,
    image:
      `${BASE_URL}/images/meta/mobile-attendance-and-class-booking-system-case-study.webp`,
    type: "website",
    locale: "en_US",
    siteName: "Moltech Solutions Inc.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mobile Attendance & Class‑Booking System Case Study | Moltech Solutions Inc.",
    description:
      "Explore how Moltech Solutions developed a centralized mobile platform for class booking and QR‑code attendance tracking, featuring real‑time dashboards, reporting exports, and secure SSO integration.",
    image:
      `${BASE_URL}/images/meta/mobile-attendance-and-class-booking-system-case-study.webp`,
    site: "@MoltechInc",
    creator: "@MoltechInc",
  },
}
,
    projectDetails: {
        description:
            "Flying Cape engaged us to build a unified mobile system that streamlines class booking and automates attendance tracking across multiple partner institutes. Parents can browse and reserve seats in any configured class from a single app, while institute administrators define their own schedules, capacities, and pricing within a secure partner portal. On the day of class, each student’s booking generates a unique QR code; instructors simply scan those codes with the app to mark attendance instantly. The system also supports walk‑in bookings and manual attendance overrides, ensuring flexibility for real‑world classroom scenarios.",
    },
    aboutSection: {
        description1:
            "Flying Cape partners with various educational institutes to centralize class scheduling and attendance tracking. Rather than each school or tutoring center running its booking portal, they wanted a unified system where parents can browse and book any configured class, and institute staff can effortlessly manage attendance.",
        industry: "Education Technology",
        projectType: "Mobile Attendance & Class-Booking System",
        technologies: [
            {
                name: "Ionic 3.0 with TypeScript",
                icon: "logos:ionic",
                description:
                    "Cross-platform mobile framework used to build the app for Android and iOS.",
            },
            {
                name: "REST APIs",
                icon: "mdi:api",
                description: "API-based communication between mobile app and backend.",
            },
            {
                name: "Keychain Certificates",
                icon: "mdi:certificate",
                description:
                    "Secure credential storage to manage SSO authentication and session data.",
            },
            {
                name: "SSO Authentication",
                icon: "mdi:account-key",
                description:
                    "Single Sign-On for easy and secure access to the mobile platform.",
            },
            {
                name: "SVN",
                icon: "mdi:source-branch",
                description: "Version control system used during development.",
            },
            {
                name: "Google Play Console & Apple App Store",
                icon: "mdi:google-play",
                description:
                    "Mobile application distribution to Android and iOS platforms.",
            },
        ],
    },
    majorFeatures: {
        features: [
            {
                title: "User Login & Registration",
                description:
                    "Secure sign-up and sign-in flows with SSO and Keychain‑stored credentials.",
                icon: "mdi:account-lock-outline",
            },
            {
                title: "Real-Time Dashboard",
                description:
                    "Live display of today’s scheduled classes, booking count, and check-ins.",
                icon: "mdi:view-dashboard-outline",
            },
            {
                title: "Attendee List",
                description:
                    "View full student rosters for any class session with search and filters.",
                icon: "mdi:format-list-bulleted",
            },
            {
                title: "QR-Code Attendance Scanning",
                description:
                    "Use the app’s camera to mark attendance—globally or per class session.",
                icon: "mdi:qrcode-scan",
            },
            {
                title: "Manual Attendance Override",
                description:
                    "Correct attendance manually for students arriving late or with scan issues.",
                icon: "mdi:pencil-box-outline",
            },
            {
                title: "On-The-Spot Quick Booking",
                description:
                    "Walk-in students can be added instantly with QR generation and check-in support.",
                icon: "mdi:plus-box-outline",
            },
            {
                title: "Reporting & Exports",
                description:
                    "Generate CSV/PDF reports of bookings and attendance by date range.",
                icon: "mdi:file-chart-outline",
            },
        ],
    },
    challengeSolution: {
        challenges: [
            {
                title: "Fragmented Booking Portals",
                desc: "Each institute managed its own website or manual signup sheet, creating confusion and underutilization.",
                icon: "mdi:web-off",
            },
            {
                title: "Manual Attendance Tracking",
                desc: "Paper-based registers and barcode scanners were slow, prone to errors, and lacked visibility.",
                icon: "mdi:clipboard-alert-outline",
            },
            {
                title: "Lack of Central Analytics",
                desc: "Administrators could not monitor overall bookings or attendance rates effectively.",
                icon: "mdi:chart-timeline-variant",
            },
        ],
        solutions: [
            {
                title: "QR-Code Attendance Engine",
                desc: "Camera-based QR scans for instant check-ins across classes with backend sync.",
                icon: "mdi:qrcode",
            },
            {
                title: "Flexible Attendance Controls",
                desc: "Manual override features allow instructors to adjust or mark attendance as needed.",
                icon: "mdi:checkbox-marked-circle-plus-outline",
            },
            {
                title: "Real-Time Reporting & Dashboards",
                desc: "Admins view live metrics and export CSV/PDFs to track class and attendance trends.",
                icon: "mdi:chart-box-outline",
            },
            {
                title: "Walk-In Booking Flow",
                desc: "Quick-add functionality generates QR codes for last-minute student bookings.",
                icon: "mdi:calendar-plus",
            },
        ],
    },
    projectSnippets: {
        projectSnippets: [
            {
                id: 1,
                title: "Login & Registration",
                description: "Secure onboarding with SSO and credential management.",
                category: "flyingcape",
                image: AppIcons.scanner1,
            },
            {
                id: 2,
                title: "Class Dashboard",
                description: "Real-time class and booking overview for admins.",
                category: "flyingcape",
                image: AppIcons.scanner2,
            },
            {
                id: 3,
                title: "QR Attendance Scanner",
                description: "Fast check-in via mobile camera QR scanning.",
                category: "flyingcape",
                image: AppIcons. scanner3,
            },
     
        ],
    },
    resultsSection: {
        title: "Business Values Provided",
        description:
            "Flying Cape’s unified mobile app significantly improved booking efficiency, enabled real-time attendance tracking, and simplified operations for staff and administrators.",
        values: [
            {
                title: "Automated Solution",
                description:
                    "Replaced fragmented, manual processes with a centralized, digital platform.",
                icon: "mdi:robot",
            },
            {
                title: "Easy Attendance Scanning Flow",
                description:
                    "Quick and reliable QR-based attendance reduces effort and time spent by instructors.",
                icon: "mdi:qrcode-scan",
            },
            {
                title: "Track Attendance Automatically",
                description:
                    "Real-time syncing of attendance data improves accuracy and system visibility.",
                icon: "mdi:clipboard-check-outline",
            },
            {
                title: "Easy to Manage Reports",
                description:
                    "CSV and PDF export capabilities simplify administrative reporting and analysis.",
                icon: "mdi:file-chart",
            },
        ],
    },
};

export default FlyingCapeAttendanceAppData;
