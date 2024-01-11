import React, { useState, useEffect } from 'react';
import * as S from './style';
import SideBar from '@/components/SideBar/SideBar'
import HamburgerButton from '../Button/HamburgerButton/HamburgerButton';
import BellButton from '../Button/BellButton/BellButton';
import useModal from '@/hooks/useModal';
import AttackedListModal from '@/components/Modal/AttackedListModal/AttackedListModal';
import UserInfo from '../UserInfo/UserInfo';
import useIsMyHome from '@/hooks/useIsMyHome';
import { MyState, OtherUserState } from '@/interfaces/userState';
import { useQuery } from '@tanstack/react-query';
import { getOtherData } from '@/apis/otherHome';
import { getMyData } from '@/apis/myHome';
import { useSetRecoilState } from 'recoil';
import { myState, otherUserState } from '@/atoms/userState';
import { snowmanHeightState } from '@/atoms/snowmanState';

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
  const {nickname, urlNickname, isMyHome} = useIsMyHome();

  const setMyDataState = useSetRecoilState(myState);
  const setOtherDataState = useSetRecoilState(otherUserState);
  const setSnowmanHeightState = useSetRecoilState(snowmanHeightState);

//자신의 홈인지, 다른 사람의 홈인지 분기처리
const queryDetails = {
  queryKey: isMyHome ? ["myData", nickname] : ["otherData", urlNickname],
  queryFn: isMyHome ? () => getMyData(nickname) : () => getOtherData(urlNickname),
  enabled: !!nickname || !!urlNickname,
  retry: 1, // 실패시 재호출 횟수
};

const queryResult = useQuery<MyState | OtherUserState>(queryDetails);
      
  // 서버로부터 데이터를 가져온 후 Recoil 상태 업데이트
  useEffect(() => {
    if (queryResult.data) {
      if (isMyHome) {
        setMyDataState(queryResult.data as MyState);
        setSnowmanHeightState(queryResult.data.snowmanHeight)
      } else {
        setOtherDataState(queryResult.data as OtherUserState);
        setSnowmanHeightState(queryResult.data.snowmanHeight)
      }
    }
  }, [queryResult.data, isMyHome, setMyDataState, setOtherDataState]);

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
        <UserInfo />
        </S.NavBar>
        {children}
      </S.Wrapper>
      <SideBar isOpen={isSideBarOpen} onCloseClick={() => setIsSideBarOpen(false)} /> {/* SideBar 컴포넌트에 상태 전달 */}
    </S.Layout>

    <AttackedListModal
      closeModal={() => closeModal()}
      isOpen={isOpen}
    />
  </>

  );
}