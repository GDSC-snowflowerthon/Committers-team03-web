import { AnimatedObjectsProps } from "@/interfaces/object";
import styled, { keyframes } from "styled-components";

// 위아래로 움직이는 애니메이션
const moveUpDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const AnimatedObjectWrapper = styled.div<AnimatedObjectsProps>`
  position: absolute;
  top: 50%;
  right: 5px;
  z-index: 10;
  background-image: url(${props => props.backgroundImageUrl});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px; // 이미지 크기에 맞게 조절
  height: 200px; // 이미지 크기에 맞게 조절
  animation: ${moveUpDown} 3s ease-in-out infinite; // 애니메이션 적용
`;
