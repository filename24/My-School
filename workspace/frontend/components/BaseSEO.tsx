import { metaData } from '@utils/Constants';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface BaseSEOProps {
  title: string;
  description: string;
  ogType: string;
  ogImage:
    | string
    | {
        '@type': string;
        url: string;
      }[];
  twImage: string;
  canonicalUrl?: string;
}

export const BaseSEO: FC<BaseSEOProps> = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
}) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${metaData.url}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={metaData.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={metaData.socials.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link
        rel="canonical"
        href={canonicalUrl ? canonicalUrl : `${metaData.url}${router.asPath}`}
      />
    </Head>
  );
};

interface PageSEOProps {
  title?: string;
  description?: string;
}

const PageSEO: FC<PageSEOProps> = ({ title, description }) => {
  const ogImageUrl = metaData.url + metaData.socials.banner;
  const twImageUrl = metaData.url + metaData.socials.banner;
  return (
    <BaseSEO
      title={title || metaData.title}
      description={description || metaData.description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};

export default PageSEO;
