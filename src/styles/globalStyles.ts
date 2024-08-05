import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%; // 10px
  }
  body {
    margin: 0;
    min-width: 320px;
    -webkit-text-size-adjust: 100%;

    font-family: "Untitled Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji";
  }
  #__next {
    position: relative;
    z-index: 0;
  }

  button {
    cursor: pointer;
    &:not([aria-label="Close toast"]){
      border: none;
      background-color: transparent;
    }


    &[disabled] {
      cursor: not-allowed;
    }
  }
  textarea{
    resize: none;      
    outline: 0;
  }
  a {
    text-decoration: none;
  }
  table, tr, th, td{
    border-collapse: collapse;
  }
  dialog{
    border: none;
  }
  input{
    outline: 0;
  }
  svg {
    display: block;
    vertical-align: middle;
    overflow: visible;
  }
  pre {
    margin: 0;
  }
  [href]:focus-visible,
  [tabindex]:focus-visible,
  input:focus-visible,
  button:focus-visible {
    outline-color: ${({ theme }) => theme.colors.ruby7};
  }
`;

export default GlobalStyles;
