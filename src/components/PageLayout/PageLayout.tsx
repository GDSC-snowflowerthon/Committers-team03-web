import React, { useState } from 'react';
import * as S from './style';
import SideBar from '@/components/SideBar/SideBar'
import HamburgerButton from '../Button/HamburgerButton/HamburgerButton';
import SnowFalling from '../SnowFalling/SnowFalling';
import HomeButton from '../Button/HomeButton/HomeButton';
import { useNavigate } from 'react-router-dom';
import useIsMyHome from '@/hooks/useIsMyHome'
interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false); // 사이드바 상태 관리
  const navigate = useNavigate();
  const {nickname} = useIsMyHome();

  const handleHamburgerClick = () => {
    setIsSideBarOpen(!isSideBarOpen); // 사이드바 표시 상태 토글
  };

  const handleHomeClick = () => {
    navigate(`/${nickname}`)
  };

  return (
    <>


    <S.Layout>
    <SnowFalling />
      <S.Wrapper>
        <HamburgerButton onClick={() => handleHamburgerClick()} />
        <HomeButton onClick={() => handleHomeClick()} />
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