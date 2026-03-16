
import Head from "next/head";

interface SEOProps {
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    openGraph?: {
      title: string;
      description: string;
      type: string;
      url: string;
      image: string;
    };
    twitter?: {
      card: string;
      title: string;
      description: string;
      image: string;
    };
  };
}

export default function SEO({ meta }: SEOProps) {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && (
        <meta name="keywords" content={meta.keywords.join(", ")} />
      )}

      {/* Open Graph */}
      {meta.openGraph && (
        <>
          <meta property="og:title" content={meta.openGraph.title} />
          <meta property="og:description" content={meta.openGraph.description} />
          <meta property="og:type" content={meta.openGraph.type} />
          <meta property="og:url" content={meta.openGraph.url} />
          <meta property="og:image" content={meta.openGraph.image} />
        </>
      )}

      {/* Twitter */}
      {meta.twitter && (
        <>
          <meta name="twitter:card" content={meta.twitter.card} />
          <meta name="twitter:title" content={meta.twitter.title} />
          <meta name="twitter:description" content={meta.twitter.description} />
          <meta name="twitter:image" content={meta.twitter.image} />
        </>
      )}
    </Head>
  );
}