import { css } from 'styled-components';

export const closeStyle = css`
    position: absolute;
    right: 30px;
`;

export const contents = css`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 600px;
    min-width: 590px;
    background: ${({ theme }) => theme.colors.gray1};
    box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.20);
    padding: 30px;
    border-radius: 20px;
`;
