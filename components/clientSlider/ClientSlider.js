"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AppIcons } from "../../data/appIcons";
import "./ClientSlider.scss";

const clientLogos = [
  { imagePath: AppIcons.Client1, alt: "Client 1 Logo" },
  { imagePath: AppIcons.Client2, alt: "Client 2 Logo" },
  { imagePath: AppIcons.Client3, alt: "Client 3 Logo" },
  { imagePath: AppIcons.Client4, alt: "Client 4 Logo" },
  { imagePath: AppIcons.Client5, alt: "Client 5 Logo" },
  { imagePath: AppIcons.Client6, alt: "Client 6 Logo" },
  { imagePath: AppIcons.Client7, alt: "Client 7 Logo" },
  { imagePath: AppIcons.Client8, alt: "Client 8 Logo" },
  { imagePath: AppIcons.Client9, alt: "Client 9 Logo" },
  { imagePath: AppIcons.Client10, alt: "Client 10 Logo" },
  { imagePath: AppIcons.Client11, alt: "Client 11 Logo" },
  { imagePath: AppIcons.Client12, alt: "Client 12 Logo" },
  { imagePath: AppIcons.Client13, alt: "Client 13 Logo" },
  { imagePath: AppIcons.Client14, alt: "Client 14 Logo" },
  { imagePath: AppIcons.Client15, alt: "Client 15 Logo" },
  { imagePath: AppIcons.Client16, alt: "Client 16 Logo" },
  { imagePath: AppIcons.Client17, alt: "Client 17 Logo" },
  { imagePath: AppIcons.Client18, alt: "Client 18 Logo" },
  { imagePath: AppIcons.Client19, alt: "Client 19 Logo" },
];

const ClientSlider = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true, // allows smooth dragging
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="slider-client embla" ref={emblaRef}>
      <div className="embla__container">
        {clientLogos.map((logo, index) => (
          <div className="embla__slide client-logo" key={index}>
            <Image
              src={logo.imagePath}
              alt={logo.alt}
              width={200}
              height={83}
              className="img-fluid"
              loading="lazy"
              priority={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;
