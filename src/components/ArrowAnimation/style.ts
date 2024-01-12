import styled, { keyframes } from 'styled-components';
import SlideLogo from '@/assets/Logo/SlideLogo.png';
import { ArrowProps } from '@/interfaces/animation';

// 오른쪽 상단에서 왼쪽 하단으로 움직이는 애니메이션을 정의합니다.
const moveArrow = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(-10px, 10px); }
  100% { transform: translate(0, 0); }
`;

// 화살표 스타일을 정의하는 컴포넌트입니다.
export const Arrow = styled.div<ArrowProps>`
  width: 110px;
  height: 85px;
  background-image: url(${SlideLogo});
  background-size: cover;
  animation: ${moveArrow} 1s infinite;
  cursor: pointer;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
`;
