import styled from 'styled-components';
import BackgroundImg from '@/assets/Background/Background.png';

export const Background = styled.div<{ height: number }>`
  width: 430px;
  height: 932px;
  max-height: 932px;
  background-image: ${({ height }) => height >= 130 ? 'none' : `url(${BackgroundImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${({ height }) => `bottom -${height * 10}px center`};
  overflow: hidden;
  bottom: 0px;
`;

export const SnowmanContainer = styled.div`
    bottom: 0px;
    position: absolute;
    z-index: 2;
`;

export const ArrowWrapper = styled.div`
  z-index: 3;
`
