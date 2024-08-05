import Head from 'next/head';

const site = {
  siteMetadata: {
    title: '커머스 팀',
    description: '당신이 이길 수 있는 새로운 커머스를 만들어요',
    author: '@createhb21',
    siteUrl: 'https://with-testing.vercel.app',
    languages: {
      langs: ['kr', 'en'],
      defaultLangKey: 'kr',
    },
  },
};

export function SEO({ title, description }: { title?: string; description?: string }) {
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Head>
      <title>{title || site.siteMetadata.title}</title>
      <meta
        name="description"
        content={metaDescription}
      />
      <meta
        name="twitter:description"
        content="커머스 팀 - 당신이 이길 수 있는 새로운 커머스를 만들어요"
      />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="커머스 팀 - 당신이 이길 수 있는 새로운 커머스를 만들어요"
      />
    </Head>
  );
}
