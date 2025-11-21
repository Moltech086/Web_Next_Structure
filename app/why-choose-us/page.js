import WhyChooseUsPage from '@/features/whyChooseUsPage/WhyChooseUsPage';
import { BASE_URL } from '@/lib/utils/baseUrl';

// Force SSR for why-choose-us page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Why Choose Us | Moltech Solutions Inc.",
  description: "Discover why Moltech Solutions Inc. is the trusted partner for software, AI, and digital transformation in Dallas and beyond.",
  canonical: `${BASE_URL}/why-choose-us`,
};

export default function WhyChooseUsPageRoute() {
  return <WhyChooseUsPage />;
}
