import Head from 'next/head';

const site = {
  siteMetadata: {
    title: '에이블리 팀',
    description: '모두가 더 나은 삶을 살 수 있는 넥스트 커머스를 만듭니다',
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
        property="description"
        content={metaDescription}
        key="description"
      />
      <meta
        name="twitter:description"
        content="에이블리 - 모두가 더 나은 삶을 살 수 있는 넥스트 커머스를 만듭니다"
      />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta
        property="twitter:image"
        content="https://my.a-bly.com/img/ABLY.cf66bd51.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="에이블리 -모두가 더 나은 삶을 살 수 있는 넥스트 커머스를 만듭니다"
      />
      <meta
        property="og:image"
        content="https://my.a-bly.com/img/ABLY.cf66bd51.png"
      />
    </Head>
  );
}
