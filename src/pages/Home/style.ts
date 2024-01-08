import styled from 'styled-components';
import BackgroundImg from '@/assets/Background/Background.png';

export const Background = styled.div<{ height: number }>`
  width: 430px;
  height: 850px;
  max-height: 932px;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${({ height }) => `bottom -${height*10}px center`};
  overflow: hidden;
`;

export const SnowmanContainer = styled.div`
    bottom: 0px;
    position: absolute;
    z-index: 2;
`;