import styled, { keyframes } from 'styled-components';
import { CSSProperties } from 'react';
import MediumSnowImg from "@/assets/Snow/MediumSnow.png";
import SmallSnowImg from "@/assets/Snow/SmallSnow.png";
// Leaf 컴포넌트에서 사용할 속성의 타입을 정의
interface SnowProps extends CSSProperties {
  '--start-left'?: string;
  '--end-left'?: string;
  '--rotation-start'?: string;
  '--rotation-end'?: string;
}

const SnowFall = keyframes`
  0% {
      opacity: 1;
      top: -10%;
      left: var(--start-left);  
      transform: rotate(var(--rotation-start));
      
  }
  100% {
      opacity: 1;
      top: 90%;
      left: var(--end-left); 
      transform: rotate(var(--rotation-end));
  }
  
`;

// SnowProps 인터페이스 정의
interface SnowProps {
    leafType: 'MediumSnowImg' | 'SmallSnowImg';
    startLeft: string;
    endLeft: string;
    rotateStart: string;
    rotateEnd: string;
    delay: number;
  }
  
  // Snow 컴포넌트 정의
  export const Snow = styled.div<SnowProps>`
    position: absolute;
    top: -20px;
    width: ${props => props.leafType === 'MediumSnowImg' ? '30px' : '20px'};
    height: ${props => props.leafType === 'MediumSnowImg' ? '30px' : '20px'};
    background-image: url(${props => props.leafType === 'MediumSnowImg' ? MediumSnowImg : SmallSnowImg});
    background-size: cover;
    animation: ${SnowFall} 6s linear infinite;
    animation-delay: ${props => props.delay}s;
    --start-left: ${props => props.startLeft};
    --end-left: ${props => props.endLeft};
    --rotation-start: ${props => props.rotateStart};
    --rotation-end: ${props => props.rotateEnd};
  `;

export const SnowWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 430px;
  max-height: 932px;
  height: 932px;
  top: -30px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 0;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 430px;
  max-height: 932px;
  height: 800px;
  
`;
