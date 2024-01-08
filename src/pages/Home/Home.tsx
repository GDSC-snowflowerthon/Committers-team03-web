import React, { useEffect } from 'react'
import MainPageLayout from '@/components/MainPageLayout/MainPageLayout'
import * as S from './style'
import SnowFalling from '@/components/SnowFalling/SnowFalling'
import SnowmanScene from '@/components/SnowmanScene/SnowmanScene';
import { useRecoilValue, useRecoilState } from 'recoil';
import { snowmanHeightState, snowmanYPositionState } from '@/atoms/snowmanState';
export default function Home() {
  const snowmanHeight = useRecoilValue(snowmanHeightState);
  const [, setYPosition] = useRecoilState(snowmanYPositionState);

  useEffect(() => {
    setYPosition(-1.6); // 초기 yPosition 설정
  }, [setYPosition]);

  return (
    <MainPageLayout>
      {snowmanHeight < 130 && <S.Background height={snowmanHeight} />}
      <SnowFalling />
      <S.SnowmanContainer>
        <SnowmanScene height={"500px"} />
      </S.SnowmanContainer>
    </MainPageLayout>
  )
}
