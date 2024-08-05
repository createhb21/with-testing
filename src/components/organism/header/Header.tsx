/* eslint-disable @next/next/no-img-element */
import React, { useReducer } from 'react';

import { useRouter } from 'next/router';
import { useAtomValue } from 'jotai';
import { authAtom } from '@/libs/features/auth';
import { ROUTER } from '@/constants/router';
import { NavLinkTabs } from '@/components/atoms';
import Link from 'next/link';
import { LoginDialog } from '@/components/molecules';
import { wrapper, logoSection, user } from './Header.styled';

export function Header() {
  const router = useRouter();
  const auth = useAtomValue(authAtom);
  //   const { data } = MemberQuery.usePersonalInfo();

  const [isOpenLoginDialog, toggleLoginDialog] = useReducer((isOpen) => !isOpen, false);

  return (
    <>
      <header css={wrapper}>
        <div css={logoSection}>
          <Link href={ROUTER.HOME} css={{ fontWeight: '700' }}>
            LOGO
          </Link>
          <NavLinkTabs
            tabs={[
              {
                title: '쇼핑몰',
                to: [ROUTER.QUIZ.HOME, ROUTER.QUIZ.ANSWER],
              },
              {
                title: '브랜드',
                to: [ROUTER.STATISTICS.HOME],
              },
            ]}
          />
        </div>
        {auth?.token.accessToken ? (
          <button type="button" css={user} onClick={() => router.push(ROUTER.MEMBER.PROFILE)}>
            {/* <img src={PROFILE_DATA[Number(data?.profileImageUrl || '0')]} alt="" /> */}
            1
          </button>
        ) : (
          <button type="button" css={{ width: 'max-content' }} onClick={toggleLoginDialog}>
            로그인
          </button>
        //   <UiComponent.Button
        //     color="line"
        //     css={(theme) => ({
        //       height: '38px',
        //       borderRadius: '44px',
        //       padding: '4px 20px',
        //       fontSize: theme.typography.size.label4,
        //       fontWeight: theme.typography.weight.bold,
        //     })}
        //     onClick={toggleLoginDialog}
        //   >
        //     로그인
        //   </UiComponent.Button>
        )}
      </header>
      {isOpenLoginDialog && <LoginDialog handleClose={toggleLoginDialog} />}
    </>
  );
}
