import PrivacyPolicyPage from "@/features/privacyPolicyPage/PrivacyPolicyPage";
import { BASE_URL } from "@/lib/utils/baseUrl";

// Force SSR for privacy policy page
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Privacy Policy ",
  description:
    "Read the privacy policy of Moltech Solutions Inc. to understand how we protect your data and privacy.",
  keywords: [
    "Moltech privacy policy",
    "Moltech Solutions Inc privacy",
    "data protection policy Moltech",
    "privacy practices Moltech",
    "Moltech data usage",
    "Moltech GDPR compliance",
    "Moltech data privacy USA",
    "software company privacy policy",
    "Moltech information security",
    "Moltech personal data protection",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Moltech Solutions Inc." }],
  creator: "Moltech Solutions Inc.",
  publisher: "Moltech Solutions Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Privacy Policy | Moltech Solutions Inc.",
    description:
      "Read the Privacy Policy of Moltech Solutions Inc. to understand how we collect, use, and protect your personal information.",
    url: `${BASE_URL}/privacy-policy`,
    siteName: "Moltech Solutions Inc.",
    images: [
      {
        url: `${BASE_URL}/images/meta/privacy-policy-og.webp`,
        width: 1200,
        height: 630,
        alt: "Moltech Solutions Privacy Policy",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Moltech Solutions Inc.",
    description:
      "Read the Privacy Policy of Moltech Solutions Inc. to understand how we collect, use, and protect your personal information.",
    images: [`${BASE_URL}/images/meta/privacy-policy-og.webp`],
    creator: "@MoltechSolutions",
    site: "@MoltechSolutions",
  },
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function PrivacyPolicyPageRoute() {
  return <PrivacyPolicyPage />;
}
