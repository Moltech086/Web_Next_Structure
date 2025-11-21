import React from 'react';
import { Icon } from '@iconify/react';
import './ServiceSection.scss';
import Link from 'next/link';

const ServicesSection = ({ services }) => {
    return (
        <div className="services-section">
            <h4 className="services-title">Related Services</h4>
            <div className="services-list">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <div className={`service-icon ${service.color}`}>
                            <Icon icon={service.icon} className="iconify-icon" />
                        </div>
                        <Link href={service?.redirectLink} className="service-info">
                            <h5 className="service-name">{service.name}</h5>
                            <p className="service-desc">{service.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
