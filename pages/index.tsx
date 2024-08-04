import React from 'react';

import { Home } from '@/libs/features';
import { useAtomValue } from 'jotai';

import { authAtom } from '@/libs/features/auth';

export default function HomePage() {
  const auth = useAtomValue(authAtom);

  return auth?.token.accessToken ? <Home.Dashboard /> : <Home.Welcome />;
}
