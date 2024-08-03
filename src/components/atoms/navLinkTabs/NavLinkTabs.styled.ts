import { css, DefaultTheme } from 'styled-components';

const wrap = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 30px;
`;

const item = (isActive: boolean) => (theme: DefaultTheme) => css`
  ${theme.fonts.regular14};

  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 60px;
  text-decoration: none;
  color: ${({ theme }) => (isActive ? theme.color.gray_80 : theme.color.gray_80)};

  :hover {
    color: ${({ theme }) => (isActive ? theme.color.gray_80 : theme.color.gray_80)};
  }
`;

const indicatorStyle = (background: string) => css`
  position: absolute;
  bottom: 1px;
  height: 2px;
  border-radius: 1px;
  background:${background};
`;

export { wrap, item, indicatorStyle };
