import { css } from 'styled-components';

export const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;

  & > button {
    width: 500px;
    height: 56px;
    border-radius: 28px;
    position: relative;
  };
`;
