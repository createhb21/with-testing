import React from 'react';
import { useRouter } from 'next/router';
import { Flex } from '@radix-ui/themes';

import { FullScreen, Button } from '@/components/atoms';
import { ROUTER } from '@/constants/router';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  height:32px;
  color:var(--ruby-contrast);
  background-color: var(--ruby-a10);
  border:0;
  outline: none;
  font-weight:var(--font-weight-medium);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
  gap: var(--space-2);
  font-size: var(--font-size-2);
  line-height: var(--line-height-2);
  letter-spacing: var(--letter-spacing-2);
  background-color: var(--accent-9);
  color: var(--accent-contrast);
  border-radius: max(var(--radius-2), var(--radius-full));
`;

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
        {/* <Button size="3" variant="soft" onClick={goSignInPage}>
          Sign in
        </Button> */}
        <CustomButton onClick={goSignInPage}>
          Sign In
        </CustomButton>
      </Flex>
    </FullScreen>
  );
}
