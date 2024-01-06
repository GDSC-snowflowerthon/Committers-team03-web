import {createGlobalStyle} from 'styled-components';
import NanumBarunpenB from './static/font/NanumBarunpenB.woff2';
import BareunHipi from './static/font/BareunHipi.woff2';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'NanumBarunpenB';
        src: url(${NanumBarunpenB}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'BareunHipi';
        src: url(${BareunHipi}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    html {
        font-size: 16px; // 16px 기본 설정
        overflow-x: hidden;
    }

    body, html {
        font-family: 'NanumBarunpenB';
        font-weight: 700;
        margin: 0;
        font-size: 16px;
        background-color: #2B2A4C;
    }

    #content {
        position: relative;
        height: 100%;
        overflow: auto;
        z-index: 1;
    }
`;
