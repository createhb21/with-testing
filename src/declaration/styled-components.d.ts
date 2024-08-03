import type { CSSProp } from 'styled-components';

import { theme } from '@/styles/themes';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface DOMAttributes {
    css?: CSSProp;
  }
}
