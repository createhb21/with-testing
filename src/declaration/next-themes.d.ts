import 'next-themes';
import type { PropsWithChildren } from 'react';

declare module 'next-themes' {
  export interface ThemeProviderProps extends PropsWithChildren {}
}
