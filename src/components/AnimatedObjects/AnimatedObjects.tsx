import React from 'react';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import { snowmanHeightState } from '@/atoms/snowmanState';
import Objects from '@/assets/Objects';

export default function AnimatedObjects() {
  const snowmanHeight = useRecoilValue(snowmanHeightState);

  let objectIndex = -1;
  if (snowmanHeight >= 130) {
    objectIndex = Math.floor((snowmanHeight - 130) / 30);
    objectIndex = Math.min(objectIndex, Objects.length - 1);
  }
  const backgroundImageUrl = objectIndex >= 0 ? Objects[objectIndex] : null;

  // 이미지가 변경될 때마다 top 위치 설정
  const topPosition = objectIndex >= 0 ? (snowmanHeight - 130 - (objectIndex * 30)) * 15 : snowmanHeight * 15;
  console.log(`${topPosition}`)
  return (
    <S.Background>
      {backgroundImageUrl && (
        <S.AnimatedObjectWrapper 
          backgroundImageUrl={backgroundImageUrl} 
          topPosition={topPosition}
        />
      )}
    </S.Background>
  );
}
