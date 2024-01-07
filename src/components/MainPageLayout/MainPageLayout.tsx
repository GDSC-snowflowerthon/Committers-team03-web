import React, { useState } from 'react';
import * as S from './style';
import SideBar from '@/components/SideBar/SideBar'
import HamburgerButton from '../Button/HamburgerButton/HamburgerButton';
import BellButton from '../Button/BellButton/BellButton';
import useModal from '@/hooks/useModal';
import AttackedListModal from '@/components/Modal/AttackedListModal/AttackedListModal';
interface Props {
  children: React.ReactNode;
}

export default function MainPageLayout({ children }: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false); // 사이드바 상태 관리
  const {
    isOpen,
    openModal,
    closeModal,
  } = useModal();
  
  const handleHamburgerClick = () => {
    setIsSideBarOpen(!isSideBarOpen); // 사이드바 표시 상태 토글
  };

  const handleBellClick = () => {
    openModal();
  };

  return (
    <>
 
    <S.Layout>
      <S.Wrapper>
        <S.NavBar>
        <HamburgerButton onClick={handleHamburgerClick} /> {/* 클릭 이벤트 핸들러 추가 */}
        <BellButton onClick={handleBellClick} /> {/* 클릭 이벤트 핸들러 추가 */}
        </S.NavBar>
        {children}
      </S.Wrapper>
      <SideBar isOpen={isSideBarOpen} onCloseClick={() => setIsSideBarOpen(false)} /> {/* SideBar 컴포넌트에 상태 전달 */}
    </S.Layout>

    <AttackedListModal
      closeModal={closeModal}
      isOpen={isOpen}
    />
  </>

  );
}