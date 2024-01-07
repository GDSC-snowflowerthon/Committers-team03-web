import React from 'react'
import MainPageLayout from '@/components/MainPageLayout/MainPageLayout'
import * as S from './style'
import SnowFalling from '@/components/SnowFalling/SnowFalling'
import SnowmanScene from '@/components/SnowmanScene/SnowmanScene';

export default function Home() {
  return (

    <MainPageLayout >
        <SnowFalling />
        <S.SnowmanContainer>
          <SnowmanScene />
        </S.SnowmanContainer>

    </MainPageLayout>
  )
}
