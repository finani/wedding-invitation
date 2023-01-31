import type { AppProps } from 'next/app';

import { GlobalStyle } from 'styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
