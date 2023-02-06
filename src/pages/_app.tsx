import type { AppProps } from 'next/app';
import getConfig from 'next/config';
import { useEffect } from 'react';

import { GlobalStyle } from 'styles/globalStyles';

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      const { publicRuntimeConfig } = getConfig();

      window.Kakao.init(publicRuntimeConfig.PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
