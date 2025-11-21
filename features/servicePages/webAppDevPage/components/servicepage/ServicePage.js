import React from 'react';
import './ServicePage.scss';
import Iconify from '@/components/ui/icons/Iconify';
import BranchFooter from '@/components/shared/branchFooter/BranchFooter';
import Link from 'next/link';
import Image from 'next/image';
import Images from '@/components/image/Image';

const ServicePage = ({ serviceData, onBack }) => {
    if (!serviceData) {
        return (
            <div className="service-page-not-found">
                <div className="text-center">
                    <div className='service-not-found-title'>Service Not Found</div>
                    <button onClick={onBack} className="back-link" aria-label="Back to Services">
                        ← Back to Services
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="service-page">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <div className="container">
                        {/* <button onClick={onBack} className="breadcrumb-link" aria-label="Back to Services">
                            <Iconify icon="heroicons:arrow-left" className="icon" />
                            Back to All Services
                        </button> */}
                        <h1 className="title">{serviceData.title}</h1>
                        <p className="subtitle">{serviceData.description}</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="main-content">
                    <div className="container">
                        <div className="content-grid">
                            <div className="main-col">
                                <div className="image-wrapper">
                                    <Images imagePath={serviceData.image} altText={serviceData.title}/>
                                </div>

                                <h2 className='headline-title'>Overview</h2>
                                {Array.isArray(serviceData.content) &&
                                    serviceData.content.map((htmlBlock, index) => (
                                        <div className="section-box" key={index}>
                                            <div
                                                className="html-content"
                                                dangerouslySetInnerHTML={{ __html: htmlBlock }}
                                            />
                                        </div>
                                    ))}

                                <div className="section-box">
                                    <h3>Technologies We Use</h3>
                                    <div className="tech-list">
                                        {serviceData.technologies.map((tech, index) => (
                                            <span key={index} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="sidebar">
                                <div className="cta-box">
                                    <h3>Ready to Get Started?</h3>
                                    <p>
                                        Let&apos;s discuss your {serviceData.title.toLowerCase()} needs and create a custom solution.
                                    </p>
                                    <Link href="/contact-us" className="cta-button">
                                        Let&apos;s Connect
                                        <Iconify icon="heroicons:arrow-right" className="icon" />
                                    </Link>
                                </div>

                                <div className="section-box light-bg">
                                    <h3>Why Choose This Service?</h3>
                                    <ul className="benefits-list">
                                        {serviceData.benefits.map((benefit, index) => (
                                            <li key={index} className="benefit-item">
                                                <Iconify icon="heroicons:check-circle" className="icon success" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BranchFooter />
        </>
    );
};

export default ServicePage;
