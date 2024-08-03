import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/libs/redux';
import { useTheme } from 'styled-components';

import useNavLinkTabs from './NavLinkTabs.hooks';
import { NavLinkTabsProps } from './NavLinkTabs.types';
import { wrap, item, indicatorStyle } from './NavLinkTabs.styled';

export function NavLinkTabs({ tabs, toggleLoginDialog }: NavLinkTabsProps) {
  const theme = useTheme();
  const { auth } = useAppSelector((state) => state.auth);

  const router = useRouter();
  const { current, addRefs } = useNavLinkTabs();
  const { pathname } = router;

  const { width, left } = useMemo(() => {
    if (!current) return { width: 0, left: 0 };

    return { width: current.offsetWidth, left: current.offsetLeft };
  }, [current, pathname]);

  const handleClick = (path: string) => {
    if (!auth) {
      toggleLoginDialog();
      return;
    }
    router.push(path);
  };

  return (
    <div css={{ position: 'relative', marginTop: '2px' }}>
      <div css={wrap}>
        {tabs.map((tab) => (
          <button
            key={tab.title}
            css={item(theme, tab.to.includes(pathname))}
            onClick={() => handleClick(tab.to[0])}
            ref={(instance) => {
              addRefs(instance, tab.to[0]);
            }}
          >
            {tab.title}
            {pathname === tab.to[0] && current && current.offsetWidth === 0 && (
              <div
                css={{
                  width: '100%',
                  ...indicatorStyle(theme.colors.gray9),
                }}
              />
            )}
          </button>
        ))}
      </div>
      {tabs
        .map((item) => item.to)
        .flat()
        .includes(pathname) && (
        <div
          css={{
            ...indicatorStyle(theme.colors.gray9),
            width: `${width}px`,
            transition: 'transform 0.3s ease-in-out, width 0.3s ease-in-out',
            transform: `translate(${left}px)`,
          }}
        />
      )}
    </div>
  );
}
