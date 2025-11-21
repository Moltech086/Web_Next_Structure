'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import { store } from "@/components/layout/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const ToastContainer = dynamic(
  () => import("react-toastify").then((m) => m.ToastContainer),
  { ssr: false }
);

const ScrollToTopButton = dynamic(
  () => import("@/components/ui/ScrollToTopButton.js/ScrollToTopButton"),
  { ssr: false }  // This already makes it client-only
);

const PageLoader = dynamic(
  () => import("@/components/ui/pageLoader/PageLoader"),
  { ssr: false }
);

export default function Providers({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Handle route change events
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Note: App Router doesn't have router.events like Pages Router
    // We'll handle loading states differently in App Router
    // This is kept for compatibility but may need adjustment

    return () => {
      // Cleanup if needed
    };
  }, [router]);

  return (
    <Provider store={store}>
      {loading && <PageLoader />}
      {children}
      <ScrollToTopButton />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Provider>
  );
}
