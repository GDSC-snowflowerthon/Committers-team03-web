import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  max-height: 932px;
  min-height: 850px;
  //overflow-y: hidden;
  overflow: hidden;
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

export const NavBar = styled.div`
  max-width: 440px;
  width: 100vw;
  height: 50px;
  background-color: transparent;
  margin-top: 0px;
  position: fixed;
  z-index: 2;
`;