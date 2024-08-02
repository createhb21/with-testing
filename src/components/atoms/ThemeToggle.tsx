import React from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { IconButton, Tooltip } from '@radix-ui/themes';
import Head from 'next/head';

export function ThemeToggle({ ...props }: React.ComponentPropsWithoutRef<typeof IconButton>) {
  const { theme, systemTheme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <style>{`
        :root, .light, .light-theme {
          --theme-toggle-sun-icon-display: block;
          --theme-toggle-moon-icon-display: none;
        }
        .dark, .dark-theme {
          --theme-toggle-sun-icon-display: none;
          --theme-toggle-moon-icon-display: block;
        }
      `}</style>
      </Head>

      <Tooltip className="radix-themes-custom-fonts" content="Toggle theme">
        <IconButton
          size="3"
          type="button"
          variant="ghost"
          color="gray"
          onClick={() => {
            // 테마가 시스템 테마와 일치하면 '시스템' 테마를 설정해요
            const resolvedTheme = theme === 'system' ? systemTheme : theme;
            const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
            const newThemeMatchesSystem = newTheme === systemTheme;
            setTheme(newThemeMatchesSystem ? 'system' : newTheme);
          }}
          {...props}
        >
          <SunIcon width="16" height="16" style={{ display: 'var(--theme-toggle-sun-icon-display)' }} />
          <MoonIcon width="16" height="16" style={{ display: 'var(--theme-toggle-moon-icon-display)' }} />
        </IconButton>
      </Tooltip>
    </>
  );
}
