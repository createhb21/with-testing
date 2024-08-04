import { css } from 'styled-components';

export const wrap = css`
    position: fixed;
    box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.20);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3000;
`;

export const background = css`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 100vh;
`;

export const backgroundCover = (opacity: number, isWhite: boolean) => css`
    background: ${({ theme }) => (isWhite ? theme.colors.gray1 : theme.colors.gray12)};
    opacity: ${opacity};  
    height: 100vh;
`;
