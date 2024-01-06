import styled from 'styled-components';
import HamburgerButtonImg from '@/assets/Button/HamburgerButton.png';
import BellButtonImg from '@/assets/Button/BellButton.png';

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

export const HamburgerButton = styled.button`
  background-image: url(${HamburgerButtonImg});
  background-size: 40px 40px;
  background-repeat: no-repeat;
  background-size: contain;
  width: 40px;  // 버튼 크기 조정
  height: 40px; // 버튼 크기 조정
  border: none;
  cursor: pointer;
  position: absolute;
  top: 25px;    // 상단에서의 위치
  right: 25px;   // 좌측에서의 위치
  z-index: 2;
  background-color: transparent;
`;
export const BellButton = styled.button`
  background-image: url(${BellButtonImg});
  background-size: 40px 40px;
  background-repeat: no-repeat;
  background-size: contain;
  width: 40px;  // 버튼 크기 조정
  height: 40px; // 버튼 크기 조정
  border: none;
  cursor: pointer;
  position: absolute;
  top: 25px;    // 상단에서의 위치
  right: 25px;   // 좌측에서의 위치
  z-index: 2;
  background-color: transparent;
`;

export const NavBar = styled.div`
  max-width: 440px;
  width: 100vw;
  height: 50px;
  background-color: transparent;
  margin-top: -50px;
`;