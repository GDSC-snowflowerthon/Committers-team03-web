// src/components/SnowmanScene/SnowmanScene.tsx
import React from 'react';
import * as S from './style'; // 스타일 파일의 경로를 확인하세요.
import CustomOrbitControls from './CustomOrbitControls/CustomOrbitControls';
import Snowman from './Snowman/Snowman';
import { SnowmanSceneProps } from '@/interfaces/snowman'; 

export default function SnowmanScene({ height }: SnowmanSceneProps) {
    return (
    <S.Container>
      <S.Wrapper height={height}>
        <S.SnowmanCanvas>
          {/* 조명과 Snowman, CustomOrbitControls 컴포넌트를 여기에 배치합니다 */}
            <ambientLight intensity={1.8 as any} />
            <directionalLight position={[5, 5, 5]} intensity={1 as any} castShadow />
            <pointLight position={[3, 3, 3]} intensity={2 as any} />
            <spotLight position={[-10, 10, 10]} angle={0.3 as any} intensity={2 as any} />
            <directionalLight position={[5, 5, 5]} intensity={1 as any} castShadow />
          <CustomOrbitControls />
          <Snowman />
        </S.SnowmanCanvas>
      </S.Wrapper>
    </S.Container>
  );
}
