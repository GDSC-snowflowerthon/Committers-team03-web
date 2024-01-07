import React, { useState } from 'react';
import * as S from './style';
import SideBar from '@/components/SideBar/SideBar'
import HamburgerButton from '../Button/HamburgerButton/HamburgerButton';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false); // 사이드바 상태 관리
  const handleHamburgerClick = () => {
    setIsSideBarOpen(!isSideBarOpen); // 사이드바 표시 상태 토글
  };

  return (
    <>
 
    <S.Layout>
      <S.Wrapper>
        <HamburgerButton onClick={handleHamburgerClick} /> {/* 클릭 이벤트 핸들러 추가 */}
        <S.Title>
          {title}
        </S.Title>
        {children}
      </S.Wrapper>
      <SideBar isOpen={isSideBarOpen} onCloseClick={() => setIsSideBarOpen(false)} /> {/* SideBar 컴포넌트에 상태 전달 */}
    </S.Layout>

    </>

  );
}