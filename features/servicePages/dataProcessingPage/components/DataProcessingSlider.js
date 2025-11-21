import React from "react";
import "../../ServiceSlider.scss";
import { Icon } from "@iconify/react";

const features = [
    {
        icon: 'fluent:people-team-16-regular',
        title: "Accuracy First",
        description: "We double-check everything. Every field. Every file. Every time."
    },
    {
        icon: 'material-symbols:rocket-launch-outline',
        title: "Scalability on Demand",
        description: "From 100 records to 1 million, our team scales as your need grows."
    },
    {
        icon: 'mdi:shield-check-outline',
        title: "Data Security Assured",
        description: "We follow strict confidentiality and compliance protocols to protect your information."
    },
    {
        icon: 'carbon:time',
        title: "US Time Zone Alignment",
        description: "Our support overlaps with US business hours for seamless coordination."
    },
    {
        icon: 'healthicons:market-stall-outline',
        title: "Industry Experience",
        description: "Serving companies in retail, healthcare, logistics, and professional services."
    },
    {
        icon: 'ph:flow-arrow-thin',
        title: "Custom Workflows",
        description: "We adapt to your systems, not the other way around."
    }
];

const borderColors = [
    "#3b82f6", 
    "#8b5cf6", 
    "#10b981", 
    "#f59e0b", 
    "#ec4899", 
    "#0ea5e9"  
];



const DataProcessingSlider = () => {

    return (
        <>
            <div className="service-whychooseus">
                <div className="row">
                    <div className="col-12">
                        <div className="service-whychooseus-section">
                            <div className="service-title">
                                Why Choose Moltech Solutions Inc. for Data Processing?
                            </div>
                            <div className="service-description">
                                When it comes to data processing, choosing the right partner can make or break your digital transformation. At Moltech Solutions Inc., we combine deep technical expertise, industry understanding, and a global delivery model to create data processing solutions that deliver measurable business outcomes.
                            </div>
                        </div>

                        <div className="whychooseus-slider-wrapper">
                            <div className="service-cards-grid">
                                {features.map((feature, index) => (
                                    <>
                                        <div className="card-row">
                                            <div className="card-wrapper">
                                                <div className="card-background" style={{ backgroundColor: borderColors[index % borderColors.length] }}></div>
                                                <div className="card" style={{ borderColor: borderColors[index % borderColors.length] }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                                        <div style={{ color: borderColors[index % borderColors.length], "fontSize": "2rem", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon icon={feature.icon} /></div>
                                                        <div>
                                                            <h3>{feature.title}</h3>
                                                            <p className="card-description">
                                                                {feature.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default DataProcessingSlider;