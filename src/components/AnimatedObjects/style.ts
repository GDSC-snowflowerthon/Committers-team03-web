import { AnimatedObjectsProps } from "@/interfaces/object";
import styled, { keyframes } from "styled-components";

const moveUpDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// AnimatedObjectWrapper 스타일 컴포넌트
export const AnimatedObjectWrapper = styled.div<AnimatedObjectsProps>`
  position: absolute;
  top: ${({ topPosition }) => topPosition === 0 ? '250px' : `${topPosition+250}px`};
  left: 40px;
  z-index: 1;
  background-image: url(${props => props.backgroundImageUrl});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  width: 250px;
  height: 250px;
  animation: ${moveUpDown} 3s ease-in-out infinite;
`;


export const Background = styled.div`
  position: absolute;
  width: 430px;
  height: 932px;
  max-height: 932px;
  background-image: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  top: 0px
`;
