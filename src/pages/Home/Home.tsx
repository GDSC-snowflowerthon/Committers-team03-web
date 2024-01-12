import React, { useEffect } from 'react'
import MainPageLayout from '@/components/MainPageLayout/MainPageLayout'
import * as S from './style'
import SnowmanScene from '@/components/SnowmanScene/SnowmanScene';
import { useRecoilValue, useRecoilState } from 'recoil';
import { snowmanHeightState, snowmanYPositionState } from '@/atoms/snowmanState';
import SnowFalling from '@/components/SnowFalling/SnowFalling';
import ShootingStarFalling from '@/components/ShootingStarFalling/ShootingStarFalling';
import AnimatedObjects from '@/components/AnimatedObjects/AnimatedObjects';
import ArrowAnimation from '@/components/ArrowAnimation/ArrowAnimation';
export default function Home() {
  const snowmanHeight = useRecoilValue(snowmanHeightState) || 1;
  const [, setYPosition] = useRecoilState(snowmanYPositionState);

  useEffect(() => {
    setYPosition(-1.6); // 초기 yPosition 설정
  }, [setYPosition]);

  return (
    <>
      <MainPageLayout>
        <AnimatedObjects />
        {snowmanHeight >= 190 ? <ShootingStarFalling /> : <SnowFalling />}
        <S.Background height={snowmanHeight} />
        <ArrowAnimation top="500px" right="50px" />
        <S.SnowmanContainer>
          <SnowmanScene height={"500px"} />
        </S.SnowmanContainer>
      </MainPageLayout>
    </>
  )
}
