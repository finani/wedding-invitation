import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Fragment } from 'react';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <Fragment key={new Date().toString()}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <Script
            async
            strategy="beforeInteractive"
            onError={(e: any) => {
              console.error('Script failed to load', e);
            }}
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_MAP_KEY}`}
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

export default MyDocument;
