import { Inter } from "next/font/google";
import Script from "next/script";
// import Footer from "@/components/shared/footer/Footer";
// import Header from "@/components/shared/header/Header";
import Providers from "./providers";
import { BASE_URL } from "@/lib/utils/baseUrl";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import CTAForm from "@/components/shared/cTAForm/CTAForm";
// import "../styles/Common.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Moltech Solutions Inc - Custom Software & AI Solutions",
    template: "%s | Moltech Solutions Inc",
  },
  description:
    "Moltech delivers custom software, mobile apps, AI & QA services from Dallas with global offices. Scale with dedicated teams, secure tech stack, and proven delivery.",
  keywords: [
    "custom software development",
    "mobile app development",
    "AI solutions",
    "Dallas software company",
    "IT services",
  ],
  authors: [{ name: "Moltech Solutions Inc" }],
  creator: "Moltech Solutions Inc",
  publisher: "Moltech Solutions Inc",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${BASE_URL}/`,
    siteName: "Moltech Solutions Inc",
    title: "Custom Software & AI Solutions | Moltech Solutions (Dallas, USA)",
    description:
      "Moltech delivers custom software, mobile apps, AI & QA services from Dallas with global offices. Scale with dedicated teams, secure tech stack, and proven delivery.",
    images: [
      {
        url: `${BASE_URL}/images/meta/og-home.webp`,
        width: 1200,
        height: 630,
        alt: "Moltech Solutions Inc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & AI Solutions | Moltech Solutions (Dallas, USA)",
    description:
      "Moltech delivers custom software, mobile apps, AI & QA services from Dallas with global offices.",
    creator: "@MoltechSolutions",
    site: "@MoltechSolutions",
    images: [`${BASE_URL}/images/meta/og-home.webp`],
  },
  icons: {
    icon: `${BASE_URL}/favicon.webp`,
    shortcut: `${BASE_URL}/favicon.webp`,
    apple: `${BASE_URL}/favicon.webp`,
  },
  manifest: "/manifest.json",
  metadataBase: new URL(`${BASE_URL}`),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C725G6TXR2"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C725G6TXR2');
            `}
        </Script>
        <meta name="yandex-verification" content="9e243640639c8870" />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <CTAForm/>
          <Footer />
        </Providers>
        <div id="modal-root" />
      </body>
    </html>
  );
}
