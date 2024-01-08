import React, { useEffect } from 'react'
import MainPageLayout from '@/components/MainPageLayout/MainPageLayout'
import * as S from './style'
import SnowFalling from '@/components/SnowFalling/SnowFalling'
import SnowmanScene from '@/components/SnowmanScene/SnowmanScene';
import { useRecoilState, useRecoilValue } from 'recoil';
import { snowmanHeightState, snowmanYPositionState } from '@/atoms/snowmanState';

export default function Home() {
  const snowmanHeight = useRecoilValue(snowmanHeightState);
  const [, setYPosition] = useRecoilState(snowmanYPositionState);
  // 컴포넌트가 마운트될 때 yPosition 상태를 업데이트
  useEffect(() => {
    setYPosition(-1.6); // 원하는 초기 yPosition 값으로 설정
  }, [setYPosition]);
  
  return (

    <MainPageLayout >
      <S.Background height={snowmanHeight} />
        <SnowFalling />
        <S.SnowmanContainer>
          <SnowmanScene height={"500px"}/>
        </S.SnowmanContainer>

    </MainPageLayout>
  )
}
