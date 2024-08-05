import { css } from 'styled-components';

const wrapper = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 58px;
  background-color: gray1;
  border-bottom:  ${({ theme }) => `1px solid ${theme.colors.gray4}`};
  padding: 0 100px;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  overflow: hidden;
`;

const logoSection = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0 30px;
`;

const user = css`
  background-color: ${({ theme }) => theme.colors.gray8};
  width: 30px;
  height: 30px;
  border-radius: 50%;

  > img {
    width: 30px
  };
`;

export { wrapper, logoSection, user };
