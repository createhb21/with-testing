import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';

import type { AppProps } from 'next/app';

export function QueryProvider({
  pageProps,
  children,
}: PropsWithChildren<{ pageProps: AppProps['pageProps'] }>) {
  const [queryClient] = React.useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
          staleTime: 60 * 1000,
          refetchOnMount: false,
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}
