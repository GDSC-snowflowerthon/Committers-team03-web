import React from 'react';
import * as S from './style';
import {useRecoilState} from 'recoil';
import {univState} from '@/atoms/univState';
export const RegisterUniv = () => {
  const [univ, setUniv] = useRecoilState(univState);
  const handleClick = () => {
    setUniv((prevUniv) => ({
      ...prevUniv,
      isRegistered: !prevUniv.isRegistered,
    }));
  };
  return (
    <S.Container>
      <S.Text>{univ.univName}</S.Text>
      <S.Text>{univ.totalHeight}</S.Text>

      <S.RegisterButton onClick={handleClick}>
        {univ.isRegistered ? '취소' : '등록'}
      </S.RegisterButton>
    </S.Container>
  );
};
