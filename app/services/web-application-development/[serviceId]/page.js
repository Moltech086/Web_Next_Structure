"use client";
import React from "react";
import ServicePage from "@/features/servicePages/webAppDevPage/components/servicepage/ServicePage";
import { getServiceDetails } from "@/features/servicePages/webAppDevPage/components/servicepage/data/serviceDetails";

export default function ServiceDetailPage({ params }) {
  const { serviceId } = params;
  const serviceData = getServiceDetails(serviceId);

  if (!serviceData) {
    return (
      <div style={{ textAlign: "center", padding: "4rem" }}>
        <h2>Service Not Found</h2>
        <p>The requested service does not exist.</p>
      </div>
    );
  }

  // ✅ Scroll to top on page load (optional)
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  return <ServicePage serviceData={serviceData} />;
}
