import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'jotai';
import { ThemeProvider } from 'styled-components';

import { QueryProvider } from '@/libs/tanstack/provider';
import { SEO, Toaster, WelcomeToast } from '@/components/atoms';
import { GlobalStyles, theme } from '@/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider>
          <QueryProvider pageProps={pageProps}>
            <Component {...pageProps} />
            <Toaster closeButton />
            <WelcomeToast />
          </QueryProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}
