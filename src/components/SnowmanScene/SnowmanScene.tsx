// src/components/SnowmanScene/SnowmanScene.tsx
import React from 'react';
import * as S from './style'; // 스타일 파일의 경로를 확인하세요.
import CustomOrbitControls from './CustomOrbitControls/CustomOrbitControls';
import Snowman from './Snowman/Snowman';

export default function SnowmanScene() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.SnowmanCanvas>
          {/* 조명과 Snowman, CustomOrbitControls 컴포넌트를 여기에 배치합니다 */}
          <ambientLight intensity={1.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[3, 3, 3]} intensity={2} />
          <spotLight position={[-10, 10, 10]} angle={0.3} intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <CustomOrbitControls />
          <Snowman />
        </S.SnowmanCanvas>
      </S.Wrapper>
    </S.Container>
  );
}
