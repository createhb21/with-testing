import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { store, persistor } from '@/libs/redux';
import { QueryProvider } from '@/libs/tanstack/provider';
import { SEO, Toaster, WelcomeToast } from '@/components/atoms';
import { GlobalStyles, theme } from '@/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <QueryProvider pageProps={pageProps}>
              <Component {...pageProps} />
              <Toaster closeButton />
              <WelcomeToast />
            </QueryProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  );
}
