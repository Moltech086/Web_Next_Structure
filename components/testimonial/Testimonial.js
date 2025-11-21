"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AppIcons } from "../../data/appIcons";
import "./Testimonial.scss";

const testimonials = [
  {
    id: 1,
    text: "Moltech has always been an absolute pleasure to deal with, He listens and understands your plans and executes the plan in a timely manner. Flexibility and being able to think outside of the box is what I appreciate",
    name: "Stephen Fujiwala",
    title: "CEO at South Pacific Distributors",
    image: AppIcons.Stephen,
  },
  {
    id: 2,
    text: "Moltech is very enthusiastic developer cum Director. Technology is not a barrier for him. He can work with any technology given. He is very soft spoken and humble. He is always helpful to the co-workers and team members. It was really very awesome experience working with him. I strongly recommended his programming skill and working style.",
    name: "Vinod Satapara",
    title: "Director at iFour Technolab Pvt. Ltd.",
    image: AppIcons.Vinod,
  },
  {
    id: 3,
    text: "Enjoyed working with Moltech for about 2 years. Nigam and his team did excellent work on creating several web projects for my company using technologies such as SQL, ASP MVC, and mobile development. I highly recommend them for any development project you need.",
    name: "Michael Usov",
    title:
      "Viewpoint Construction Software, Crystal Reports and SQL Consultant.",
    image: AppIcons.Michael,
  },
  {
    id: 4,
    text: "Moltech has helped me on several software development projects and always done a great job. He is highly knowledgeable in the field and always responsive. I highly recommend working with them!",
    name: "Josh Ferguson",
    title: "Full Stack IoT Developer, Glow Labs",
    image: AppIcons.Josh,
  },
  {
    id: 5,
    text: "Moltech is exceptionally focused and dedicated on tasks or projects taken by him. Due to his amazing Project execution and Problem-solving skills, he delivered all the modules on time. He is always open to new idea and suggestions. He along with his team has always delivered a better version of the product than we thought of. We highly recommend him and his company for any kind of challenging projects or work.",
    name: "Himanshu Guptav",
    title:
      "Entrepreneurship program at S P Jain Institute of Management & Research",
    image: AppIcons.Himanshu,
  },
  {
    id: 6,
    text: "I’ve had the pleasure of working with Nigam since 2005 across a number of projects and client accounts. Over the years, Nigam and his development team have consistently delivered outstanding work across a wide range of technologies. Their depth of expertise, attention to detail, and commitment to client success have always stood out.",
    name: "Carl Auwarter",
    title: "USA",
    image: AppIcons.Carl,
  },
  {
    id: 7,
    text: "We are very happy Moltech customers! Apart from their technical expertise and professionalism, Nigam and team have been extremely reliable and dedicated throughout. I would highly recommend their services with confidence.",
    name: "Jamie Tan",
    title: "CEO at Flying Cape Organization",
    image: AppIcons.Jammy,
  },
  {
    id: 8,
    text: "Moltech is a professional company that has provided valuable software development services. We're happy with our decision to work with Moltech, as their expertise has translated into a great new software platform. We're looking forward to work together on potential future projects.",
    name: "Jeroen Smith",
    title: "CEO at Clixz Platform",
    image: AppIcons.Jeroen,
  },
  {
    id: 9,
    text: "Moltech has great communication skills and easy to understand. He is able to learn complex processes with ease and suggest good technical solutions to complex business processes. He is reliable and meets all milestones set in a project",
    name: "Eric Freeman",
    title:
      "Viewpoint Construction Software, Crystal Reports and SQL Consultant.",
    image: AppIcons.Eric,
  },
  {
    id: 10,
    text: "Terrific work. Great product and terrific communication.Highly recommended. Thank you!",
    name: "Mike Ross",
    title: "CEO & Founder",
    image: AppIcons.Mike,
  },
  {
    id: 11,
    text: "Moltech is a most recommendable and reliable IT partner. He is customer oriented, a fast thinker and has a team of IT experts implementing whatever idea you might have. I appreciate a lot his clear view – even if things turn wild",
    name: "Herman",
    title: "Managing director at Life institute for effective leadership",
    image: AppIcons.Herman,
  },
  {
    id: 12,
    text: "A reliable and trustworthy co-worker. Moltech is very passionate about technologies and able to recommend and provide solution custom to your needs.",
    name: "Peterson Tan ",
    title: "Technical consultant",
    image: AppIcons.Peterson,
  },
];

const TestimonialSlider = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <div className="testimonial-sec">
      <div className="title-center">
        <span className="sub-title">Testimonial</span>
        <h2 className="title">
          What our <span>Customers Say</span>
        </h2>
      </div>

      <div className="slider-sec">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container testimonial-slides">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="embla__slide testimonial-card">
                <div className="top-card-sec">
                  <div className="testimonial-content">
                    <div className="testimonial-info">
                      <h3 className="name">{testimonial.name}</h3>
                      <p className="designation">{testimonial.title}</p>
                    </div>
                    <blockquote className="desc">{testimonial.text}</blockquote>
                  </div>
                </div>
                <div className="testimonial-footer">
                  <div className="testimonial-image">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} photo`}
                      width={60}
                      height={60}
                      loading="lazy"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
