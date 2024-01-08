import React, { useEffect, useState } from 'react';
import * as S from './style';

const numSnows = 30;

const SnowFalling: React.FC = () => {
  const [leaves, setLeaves] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    const newLeaves = [];
      
    for (let i = 0; i < numSnows; i++) {
        const isMediumSnow = Math.random() > 0.5;
        const leafType = isMediumSnow ? "MediumSnowImg" : "SmallSnowImg";
        const delay = Math.random() * 15;
        const startLeft = `${Math.random() * 200 - 50}%`;  
        const endLeft = `${Math.random() * 200 - 50}%`;   
        const rotateStart = `${Math.floor(Math.random() * 180)}deg`;
        const rotateEnd = `${Math.floor(Math.random() * 180)}deg`;

      newLeaves.push(
        <S.Container key={`snow-${i}`}> {/* 여기에 key 추가 */}
        <S.SnowWrapper>
        <S.Snow
              leafType={leafType}
              delay={delay}
              startLeft={startLeft}
              endLeft={endLeft}
              rotateStart={rotateStart}
              rotateEnd={rotateEnd}
            />
        </S.SnowWrapper>
      </S.Container>
    );
  }

    setLeaves(newLeaves);
  }, []);

  return <>{leaves}</>;
};

export default SnowFalling