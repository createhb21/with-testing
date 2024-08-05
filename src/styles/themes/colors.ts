import {
  gray,
  red,
  ruby,
  green,
} from '@radix-ui/colors';

export const colors = {
  ...gray,
  ...red,
  ...ruby,
  ...green,
} as const;

export type ColorType = typeof colors;
