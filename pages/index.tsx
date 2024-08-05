import React from 'react';

import { Home } from '@/libs/features';
import { useAppSelector } from '@/libs/redux';

export default function HomePage() {
  const { auth } = useAppSelector((state) => state.auth);

  return auth?.token.accessToken ? <Home.Dashboard /> : <Home.Welcome />;
}
