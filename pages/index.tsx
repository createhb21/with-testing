import React from 'react';
import { useRouter } from 'next/router';
import { Flex, Button } from '@radix-ui/themes';

import { FullScreen } from '@/components/atoms';
import { ROUTER } from '@/constants/router';

export default function Home() {
  const router = useRouter();
  const goSignInPage = () => router.push(ROUTER.AUTH.SIGNIN);

  return (
    <FullScreen as="main">
      <Flex direction="column" align="center" justify="center" width="488px" height="100%" style={{ margin: '0 auto' }}>
        <Flex align="center" justify="center" width="100%" pb="5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ably.png" alt="ably logo" style={{ width: '50%', margin: '0 auto' }} />
        </Flex>
        <Button size="3" variant="soft" onClick={goSignInPage}>
          Sign in
        </Button>
      </Flex>
    </FullScreen>
  );
}
