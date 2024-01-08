import { css, keyframes, styled } from "styled-components";


interface ButtonWrapperProps {
    background: string; // 배경 이미지 URL을 받을 수 있도록 설정
    // ... 다른 스타일 관련 props
  }
  
// 오른쪽 화살표 애니메이션
const moveUpDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`;

export const AnimatedObjectWrapper = styled.div<ButtonWrapperProps>`
    position: absolute;
    top: 50%;
    right: 5px;
    z-index: 0;
    background-color: transparent;
    background-size: 200px 200px;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
        
    ${(props) => 
        props.background == RightArrowButtonImg &&
        css`
        /* LeftArrowButtonImg에 대한 스타일 */
        right: 15px;
        z-index: 5;
        animation: ${moveUpDown} 0.5s ease-in-out infinite;
        @media (min-width: 820px) {
            position: fixed;
            left: calc(50% + 350px);
        }

        background: url(${RightArrowButtonImg}); /* 배경 이미지 설정 */
        `
    }

`;
