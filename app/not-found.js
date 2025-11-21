import NotFound from "@/features/notFoundPage/NotFound";

export const metadata = {
  title: "Page Not Found - 404 | Moltech Solutions Inc",
  description: "The page you are looking for could not be found. Please check the URL or return to our homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return <NotFound />;
}
