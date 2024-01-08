import styled, { keyframes } from 'styled-components';
import cloudImg from '@/assets/Objects/Cloud.png';

const moveCloud = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const CloudLayer = styled.div`
  position: absolute;
  width: 200%;
  height: 100%;
  background: url(${cloudImg}) repeat-x;
  background-size: ${props => props.size}px;
  animation: ${moveCloud} ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;
  z-index: 0;
`;

export const CloudsWrapper = styled.div`
  position: relative;
  width: 200%; 
  height: 100%;
  background: url(${cloudImg}) repeat-x;
  animation: ${moveCloud} 45s linear infinite;
  z-index: 0;
  margin-bottom: 100px;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 430px;
  max-height: 932px;
  height: 932px;
  left: 50%;
  right: 50%;
  top: 0%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 0;

  @media screen and (min-width: 560px) {
    top: -7%;
  }
`;

