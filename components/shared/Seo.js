// components/shared/Seo.js
import { BASE_URL } from '@/lib/utils/baseUrl';
import { NextSeo } from 'next-seo';

const Seo = ({
  title = 'Moltech Solutions',
  description = 'Moltech Solutions - Your trusted technology partner.',
  canonical = `${BASE_URL}/`,
  openGraph = {},
  twitter = {},
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title,
        description,
        url: canonical,
        images: [
          {
            url: `${BASE_URL}/logo.webp`,
            alt: title,
          },
        ],
        ...openGraph,
      }}
      twitter={{
        handle: '@MoltechSolutions',
        site: '@MoltechSolutions',
        cardType: 'summary_large_image',
        ...twitter,
      }}
    />
  );
};

export default Seo;
