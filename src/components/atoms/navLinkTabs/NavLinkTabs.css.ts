import { CSSObject, DefaultTheme } from 'styled-components';

const wrap: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0 30px',
};

const item = (isActive: boolean) => (theme: DefaultTheme): CSSObject => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  height: '60px',
  textDecoration: 'none',
  fontSize: theme.typography.size.label4,
  fontWeight: theme.typography.weight.bold,
  color: isActive ? theme.color.gray.gray900 : theme.color.gray.gray600,
  ':hover': {
    color: theme.color.gray.gray900,
  },
});

const indicatorStyle = (background: string): CSSObject => ({
  position: 'absolute',
  bottom: '1px',
  height: '2px',
  borderRadius: '1px',
  background,
});

export { wrap, item, indicatorStyle };
