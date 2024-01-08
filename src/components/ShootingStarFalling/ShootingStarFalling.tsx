import React, { useEffect, useState } from 'react';
import * as S from './style';

const numStars = 10;

const ShootingStarFalling: React.FC = () => {
  const [stars, setStars] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    const newStars = [];

    for (let i = 0; i < numStars; i++) {
      const size = Math.random() > 0.6 ? 'medium' : 'small';
      const delay = Math.random() * 15;
      const duration = Math.random() * 5 + 5;

      // 시작점과 끝점을 조정하여 화면 전체에서 떨어지도록 함
      const startTop = `${-30 + Math.random() * 30}%`; // 상단에서 시작
      const startLeft = `${Math.random() * 100}%`; // 왼쪽에서 시작
      const endTop = `${100 + Math.random() * 30}%`; // 하단에서 끝남
      const endLeft = `${startLeft}`; // 시작점과 동일한 좌표에서 끝남

      newStars.push(
        <S.ShootingStarWrapper key={`star-${i}`}>
          <S.Star
            size={size}
            delay={delay}
            duration={duration}
            startTop={startTop}
            startLeft={startLeft}
            endTop={endTop}
            endLeft={endLeft}
          />
        </S.ShootingStarWrapper>
      );
    }

    setStars(newStars);
  }, []);

  return <>{stars}</>;
};

export default ShootingStarFalling;
