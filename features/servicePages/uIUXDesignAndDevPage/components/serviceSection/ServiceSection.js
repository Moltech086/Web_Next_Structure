import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './ServiceSection.scss';

const services = [
    {
        icon: 'mdi:wireless',
        title: 'Wireframing & Prototyping',
        description: `<strong style="color: #EF5323">At Moltech Solution Inc.</strong>, we start every project with clear thinking and smart planning. Our wireframing & prototyping services allow you to visualize your product\'s structure before development begins. We create clean wireframes to outline layouts, user flows, and core interactions—bringing clarity to your idea. Then, we turn those wireframes into interactive prototypes that simulate real user behavior. This method let's you gather feedback, test usability, and refine features before writing a single line of code. Our collaborative process saves time, reduces costly changes, and ensures alignment between stakeholders, designers, and developers. Whether you\'re building a mobile app, a complex SaaS dashboard, or an eCommerce platform, our early design approach gives you a solid, validated foundation. With Moltech, you receive more than just static screens—you receive dynamic design previews that bring your vision to life and prepare it for future development.`
    },
    {
        icon: 'material-symbols:smartphone-outline',
        title: 'UI Design (Web & Mobile)',
        description: `Your product\'s design looks appealing, which is important because first impressions last a long time. <strong style="color: #EF5323">Moltech Solution Inc.\'s</strong> online and mobile UI design services make sure that your product fits your brand, looks good, and is easy for people to use. We use responsive design ideas, fonts, spacing, and color theory together to make interfaces that look appealing on all devices. Our design team makes sure that everything is easy to use, clear, and accessible, no matter if it\'s a complex business web interface or a mobile-first eCommerce app. Every part, like patterns, icons, forms, and buttons, is carefully thought out to make sure it works well together. They carefully make each screen with the user in mind, making sure that it looks great and works amazingly well. Our collaborative and iterative design process ensures that we will make your idea or vision better by using our technical and creative skills. People who use <strong style="color: #EF5323">Moltech\'s UI design services</strong> will stay on your site longer and come back more often.`
    },
    {
        icon: 'mdi:target-variant',
        title: 'UX Strategy & Design',
        description: 'Users don\'t have excellent experiences by accident; they\'re planned out. The UX Strategy & Design services at <strong style="color: #EF5323">Moltech Solution Inc.</strong> are focused on coming to know your users, planning their adventures, and making experiences that feel natural. We first do research to find out about goals, user personas, job flows, and pain points. Our design choices are based on this data, from layout to navigation to usefulness. We find where people get stuck and how to remove friction, whether you\'re making a new product or improving an old one. After that, we turn these ideas into wireframes and fun, easy-to-use interactive designs. Our method finds a balance between business goals and actual user behavior to boost engagement, lower user employee turnover, and boost happiness.<strong style="color: #EF5323"> Moltech </strong> grants you more than just screens; they give you a careful, results-driven experience that makes first-time users into loyal fans.'
    },
    {
        icon: 'mdi:lightning-bolt-outline',
        title: 'Interaction & Motion Design',
        description: '<strong style="color: #EF5323">Moltech Solution Inc.</strong>, the company, specializes in interaction and motion design; we enhance usability by incorporating natural-feeling movement and feedback. Micro-interactions, such as hover effects, loading animations, slide movements, and smooth transitions, allow users to find their way, make things less confusing, and make them happy. Our motion design makes things clearer and smoother by helping people know what\'s going on as well as what to do next. We make these interactions to help digital products be easier to use, reinforce company identity, and feel more like real people. <strong style="color: #EF5323"> Moltech </strong> makes sure that every move is creative and precise, whether it\'s for animated onboarding screens, interactive dashboards, or responsive movements for mobile apps. We find the best mix between form and function so that your digital experience is more intriguing and memorable without being too much for the user. It will not only work with <strong style="color: #EF5323">Moltech</strong>, but it will also feel excellent.'
    },
    {
        icon: 'carbon:grid',
        title: 'Design System & Component Library',
        description: 'Your digital experiences will always be aesthetically and functionally consistent across teams, platforms, and updates because of <strong style="color: #EF5323">Moltech Solution Inc.</strong>\'s design system and component library services. We create reusable, scalable user interface elements with precise design specifications that developers and designers can trust. This service keeps your interface uniform and clean while speeding up the design process and cutting down on extra labor. We help you in describing visual standards for buttons, fonts, spacing, colors, form inputs, and other elements, whether you\'re creating an advanced SaaS product or a collection of mobile apps. We consider future scalability, responsiveness, and accessibility when designing our systems. Teams can innovate without disrupting the experience and save time with a strong design system. <strong style="color: #EF5323">Moltech</strong> gives you a living design foundation that supports quicker, more reliable releases and changes with your product.'
    },
    {
        icon: 'material-symbols:monitor-outline',
        title: 'User Interface (UI) Design',
        description: 'The user interface (UI) visually represents your product to your users, making first impressions crucial. At <strong style="color: #EF5323">Moltech Solution Inc.</strong>, they are designing aesthetically pleasing yet functionally effective interfaces. To ensure users automatically know where to click, tap, or swipe, our UI design process centers on structure, visual hierarchy, and accessibility. Every pixel, icon, and interaction is purposefully meant to support usability while capturing the personality of your brand. From web dashboards and mobile apps to eCommerce systems and internal tools, we make sure the interface of your product is consistent, responsive, and fit for your audience. We aim to make things feel right, not only look nice. We assist you in transforming your digital platform into a flawless, user-friendly experience people value daily.'
    },
    {
        icon: 'fluent:arrow-shuffle-24-regular',
        title: 'Cross-Platform App Design',
        description: 'In the multi-device world of today, platform consistency is essential. <strong style="color: #EF5323">Moltech Solution Inc.</strong>\'s cross-platform app design services guarantee that your program provides a consistent user experience across iOS, Android, and the web without sacrificing quality. We keep a consistent brand vibe while designing with platform-specific behaviors in mind. Our group concentrates on reusable elements, adaptable layouts, and user-friendly navigation that seamlessly adjusts to different screen sizes and operating systems. Whether developing a consumer app, commercial tool, or product suite, we simplify the process to enable seamless device switching for users. <strong style="color: #EF5323">Moltech</strong>\'s cross-platform designs ensure your users have the same seamless experience wherever they are, lower development costs, and speed up launches. You receive both reach and experience when you work with us, so you don\'t have to make a choice.'
    }
];

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(0);

    return (
        <section className="services-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="title">
                        Key <span>UI/UX Design</span> Services
                    </h2>
                    <p className="subtitle">
                        We provide end-to-end design services that transform your ideas into exceptional digital experiences.
                    </p>
                </div>

                <div className="content">
                    <div className="sidebar">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveService(index)}
                                className={`service-btn ${activeService === index ? 'active' : ''}`}
                                aria-label={service.title}
                            >
                                <div className="icon-container">
                                    <Icon icon={service.icon} />
                                </div>
                                <span>{service.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className="details">
                        <div className="details-header">
                            <div className="icon-box">
                                <Icon icon={services[activeService].icon} />
                            </div>
                            <div>
                                <h3>{services[activeService].title}</h3>
                                <div className="underline" />
                            </div>
                        </div>
                        <p className="description" dangerouslySetInnerHTML={{ __html: services[activeService].description }}></p>

                        <div className="nav-buttons">
                            {/* <button onClick={() => setActiveService((activeService - 1 + services.length) % services.length)}>
                                ← Previous Service
                            </button> */}
                            <div className="dots">
                                {services.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`dot ${idx === activeService ? 'active' : ''}`}
                                        onClick={() => setActiveService(idx)}
                                    />
                                ))}
                            </div>
                            {/* <button onClick={() => setActiveService((activeService + 1) % services.length)}>
                                Next Service →
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;