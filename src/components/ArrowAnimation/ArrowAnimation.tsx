import { ArrowProps } from '@/interfaces/animation';
import React, { useState } from 'react';
import * as S from './style';

const ArrowAnimation: React.FC<ArrowProps> = ({ top, right }) => {
  const [visible, setVisible] = useState(true);

  // 화살표 클릭 시 사라지는 함수
  const handleClick = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && <S.Arrow top={top} right={right} onClick={handleClick} />}
    </>
  );
};

export default ArrowAnimation;
