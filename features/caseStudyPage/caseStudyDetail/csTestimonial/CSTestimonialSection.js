import React from 'react';
import { Icon } from '@iconify/react';
import './CSTestimonialSection.scss';

const CSTestimonialSection = ({ testimonialSection }) => {
    if (testimonialSection) {
        return (
            <section className="cs-testimonial">
                <div className="container">
                    <div className="stars">
                        {[...Array(testimonialSection?.rating)].map((_, i) => (
                            <Icon key={i} icon="mdi:star" className="star" />
                        ))}
                    </div>
                    <blockquote style={{ fontStyle: 'italic' }}>
                        &quot;&nbsp;{testimonialSection?.quote}&nbsp;&quot;
                    </blockquote>
                    <div className="author">
                        <div className="avatar">
                            <Icon icon="mdi:account" className="icon" />
                        </div>
                        <div className="info">
                            <div className="name">{testimonialSection?.author}</div>
                            <div className="title">{testimonialSection?.title}</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } 
    else {
        return null;
    }
};

export default CSTestimonialSection;
