import React from 'react';

import { useAtomValue } from 'jotai';

import { Layout } from '@/components/page';
import { Home, Auth } from '@/libs/features';

export default function HomePage() {
  const auth = useAtomValue(Auth.authAtom);

  return (
    <Layout>
      {auth?.token.accessToken ? <Home.Dashboard /> : <Home.Welcome />}
    </Layout>
  );
}
