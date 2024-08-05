export const size = {
  header: {
    height_d: '80px',
    height_m: '60px',
  },
  footer: {
    height_d: '322px',
    height_t: '348px',
    height_m: '412px',
  },

} as const;

export type SizeTheme = typeof size;
