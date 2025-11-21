import React from "react";
import { Icon } from "@iconify/react";
import "./BoxCard.scss";
import Image from "next/image";
import Link from "next/link";

const BoxCard = ({ title, description, icon, pageLink, items = [] }) => {
  // const router = useRouter();

  // const handleReadMoreClick = () => {
  //   if (link) {
  //     router.push(link);
  //   }
  // };

  return (
    <article className="image-card">
      <div className="left-section">
        <div>
          <h3 className="image-card__title">{title}</h3>
          <p className="image-card__description">{description}</p>
        </div>
        <div className="service-tag">
          <ul>
            {items && items.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <Link
          type="button"
          className="image-card__link"
          href={pageLink}
          aria-label={`Learn more about ${title}`}
        >
          Know More <Icon icon="ep:right" />
        </Link>
      </div>
      <div className="right-icon">
        <div className="image-card__icon">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={145}
            height={145}
            loading="lazy"
            priority={false}
          />
        </div>
      </div>
    </article>
  );
};

export default BoxCard;
