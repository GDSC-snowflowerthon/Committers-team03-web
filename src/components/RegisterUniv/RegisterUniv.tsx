import React, {useState} from 'react';
import * as S from './style';

export const RegisterUniv = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <S.Container>
      <S.Text>눈사람대학교</S.Text>
      <S.Text>128m</S.Text>
     
      <S.RegisterButton clicked={isClicked} onClick={handleClick}>
        {isClicked ? '취소' : '등록'}
      </S.RegisterButton>
    </S.Container>
  );
};
