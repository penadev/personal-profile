/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

${normalize}

body {
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme }) => theme.colors.background.main.color};
  color: ${({ theme }) => theme.colors.primary.main.color};
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
}
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* div {
    border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  } */
`;
