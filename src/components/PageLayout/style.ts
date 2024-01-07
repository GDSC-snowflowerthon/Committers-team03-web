import styled from 'styled-components';
import theme from '@/theme';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  max-height: 932px;
  min-height: 850px;
  //overflow-y: hidden;
  overflow-x: hidden;
  font-family: 'Pretendard';
`;

export const Wrapper = styled.div`
  max-width: 440px;
  max-height: 932px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Pretendard';
  position: relative;
`;

export const Title = styled.div`
  max-width: 440px;
  width: 100vw;
  height: 50px;
  background-color: transparent;
  top: 30px;
  color: ${theme.colors.textMain};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  z-index: 1;
`;