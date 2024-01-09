import styled, { keyframes } from 'styled-components';
import ShootingStarImg from "@/assets/ShootingStar/ShootingStar.png";

const shootingStar = keyframes`
  0% {
      top: var(--start-top);
      left: var(--start-left);
      opacity: 1;
      transform: scale(0);
  }
  30% {
      opacity: 1;
      transform: scale(1);
  }
  100% {
      top: var(--end-top);
      left: var(--end-left);
      opacity: 0;
      transform: scale(1);
  }
`;

export const ShootingStarWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-width: 430px;
  max-height: 932px;
  height: 932px;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 0;
`;

export const Star = styled.div<{
  size: 'small' | 'medium',
  delay: number,
  duration: number,
  startTop: string,
  startLeft: string,
  endTop: string,
  endLeft: string
}>`
  position: absolute;
  top: var(--start-top);
  left: var(--start-left);
  width: ${props => props.size === 'medium' ? '40px' : '30px'};
  height: ${props => props.size === 'medium' ? '40px' : '30px'};
  background-image: url(${ShootingStarImg});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0;
  animation: ${shootingStar} linear infinite;
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;
  --start-top: ${props => props.startTop};
  --start-left: ${props => props.startLeft};
  --end-top: ${props => props.endTop};
  --end-left: ${props => props.endLeft};

`;
