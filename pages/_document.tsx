import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/AdobeTextPro-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/soehne-mono-web-buch.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://cdn.workos.com/fonts/untitled-sans-regular-v2.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://cdn.workos.com/fonts/untitled-sans-medium-v2.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
@font-face {
  font-family: 'Adobe Text Pro';
  font-weight: 400;
  font-display: fallback;
  src: url(/fonts/AdobeTextPro-Regular.woff2) format('woff2');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 400;
  font-display: fallback;
  src: url('https://cdn.workos.com/fonts/untitled-sans-regular-v2.woff2') format('woff2');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 500;
  font-display: fallback;
  src: url('https://cdn.workos.com/fonts/untitled-sans-medium-v2.woff2') format('woff2');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 700;
  font-display: fallback;
  src: url('https://cdn.workos.com/fonts/untitled-sans-medium-v2.woff2') format('woff2');
}

@font-face {
  font-family: 'Söhne Mono';
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
  src: url('/fonts/soehne-mono-web-buch.woff2') format('woff2');
}
`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
