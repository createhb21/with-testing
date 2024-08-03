import {
  gray,
  blue,
  red,
  green,
} from '@radix-ui/colors';

export const colors = {
  ...gray,
  ...blue,
  ...red,
  ...green,
} as const;

export type ColorType = typeof colors;
