import React from 'react';
import { useRouter } from 'next/router';

import { FullScreen, Button } from '@/components/atoms';
import { ROUTER } from '@/constants/router';

export default function Home() {
  const router = useRouter();
  const goSignIn = () => router.push(ROUTER.AUTH.SIGNIN);

  return (
    <FullScreen as="main">
      <div style={{ margin: '0 auto', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '488px', height: '100%' }}>
        <div style={{
          alignItems: 'center', justifyContent: 'center', width: '100%', paddingBottom: '40px',
        }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ably.png" alt="ably logo" style={{ width: '50%', margin: '0 auto' }} />
        </div>
        <Button variant="solid" onClick={goSignIn}>
          Sign in
        </Button>
      </div>
    </FullScreen>
  );
}
