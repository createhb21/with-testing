import { css } from 'styled-components';

export const fonts = {
  regular13: css`
    font-size: 1.3rem;
    font-weight: 400;
  `,
  regular14: css`
    font-size: 1.4rem;
    font-weight: 400;
  `,
  regular15: css`
    font-size: 1.5rem;
    font-weight: 400;
  `,
  regular16: css`
    font-size: 1.6rem;
    font-weight: 400;
  `,
  medium14: css`
    font-size: 1.4rem;
    font-weight: 500;
  `,
  medium15: css`
    font-size: 1.5rem;
    font-weight: 500;
  `,
  medium16: css`
    font-size: 1.6rem;
    font-weight: 500;
  `,
  semibold14: css`
    font-size: 1.4rem;
    font-weight: 600;
  `,
  semibold15: css`
    font-size: 1.5rem;
    font-weight: 600;
  `,
  semibold16: css`
    font-size: 1.6rem;
    font-weight: 600;
  `,
  semibold17: css`
    font-size: 1.7rem;
    font-weight: 600;
  `,
  bold18: css`
    font-size: 1.8rem;
    font-weight: 700;
  `,
  bold20: css`
    font-size: 2rem;
    font-weight: 700;
  `,
  bold24: css`
    font-size: 2.4rem;
    font-weight: 700;
  `,
} as const;

export type FontType = typeof fonts;
