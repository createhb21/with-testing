import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';

import type { AppProps } from 'next/app';

import { QueryProvider } from '@/libs';
import { Favicon, Toaster, WelcomeToast } from '@/components/atoms';

function Pages({ Component, pageProps }: AppProps) {
  return (
    <Theme accentColor="ruby" grayColor="mauve" className="radix-themes-custom-fonts">
      <Favicon />
      <QueryProvider pageProps={pageProps}>
        <Component {...pageProps} />
        <Toaster closeButton />
        <WelcomeToast />
      </QueryProvider>
    </Theme>
  );
}

export default function App(props: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: 'dark-theme' }}
      defaultTheme="system"
      children={<Pages {...props} />}
    />
  );
}
