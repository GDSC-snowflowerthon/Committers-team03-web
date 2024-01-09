import {createGlobalStyle} from 'styled-components';
import Pretendard from './static/font/Pretendard-Medium.woff2';

export const GlobalStyle = createGlobalStyle<{ backgroundColor: string }>`
  @font-face {
    font-family: 'Pretendard';
    src: url(${Pretendard}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-size: 16px;
    background: ${({ backgroundColor }) => backgroundColor};
    overflow-x: hidden;
  }

  body, html {
    font-family: 'Pretendard';
    font-weight: 400;
    margin: 0;
    font-size: 16px;
  }

  #content {
    position: relative;
    height: 100%;
    overflow: auto;
    z-index: 1;
  }
`;
