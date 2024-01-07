import React from 'react'
import MainPageLayout from '@/components/MainPageLayout/MainPageLayout'
import * as S from './style'
import SnowFalling from '@/components/SnowFalling/SnowFalling'
import SnowmanScene from '@/components/SnowmanScene/SnowmanScene';
import { useRecoilValue } from 'recoil';
import { snowmanHeightState } from '@/atoms/snowmanState';

export default function Home() {
  const snowmanHeight = useRecoilValue(snowmanHeightState);

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
