import { css, DefaultTheme } from 'styled-components';

const wrap = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 30px;
`;

const item = (theme: DefaultTheme, isActive: boolean) => css`
  font-size: 1.4rem;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 60px;
  text-decoration: none;
  color: ${({ theme }) => (isActive ? theme.colors.gray8 : theme.colors.gray3)};

  :hover {
    color: ${({ theme }) => (isActive ? theme.colors.gray9 : theme.colors.gray5)};
  }
`;

const indicatorStyle = (background: string) => css`
  position: absolute;
  bottom: 1px;
  height: 2px;
  border-radius: 1px;
  background: ${background};
`;

export { wrap, item, indicatorStyle };
