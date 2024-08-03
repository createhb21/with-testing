import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { SEO, Toaster, WelcomeToast } from '@/components/atoms';
import { QueryProvider } from '@/libs/tanstack/provider';
import { GlobalStyles, theme } from '@/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QueryProvider pageProps={pageProps}>
          <Component {...pageProps} />
          <Toaster closeButton />
          <WelcomeToast />
        </QueryProvider>
      </ThemeProvider>
    </>
  );
}
