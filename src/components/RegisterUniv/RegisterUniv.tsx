import React from 'react';
import * as S from './style';
import {useRecoilState} from 'recoil';
import {univState} from '@/atoms/univState';
import { instance } from '@/apis/axios';


export const RegisterUniv = () => {
  const [univ, setUniv] = useRecoilState(univState);

  const handleClick = async () => {
      try {
        if (!univ?.isRegistered) {
          const response = await instance.patch(
            `/api/v1/univ/update?univName=${univ?.univName}&isRegistered=true`,
          );
            setUniv({
              univName: response.data.data?.univName,
              totalHeight: response.data.data?.totalHeight,
              isRegistered: response.data.data?.isRegistered,
            });
        } else {
          const response = await instance.patch(
            `/api/v1/univ/update?univName=${univ?.univName}&isRegistered=false`,
          );
          setUniv({
            univName: response.data.data?.univName,
            totalHeight: response.data.data?.totalHeight,
            isRegistered: response.data.data?.isRegistered,
          });
        }
      } catch (error) {
        alert(error.message);
      }
  };

  return (
    <S.Container>
      <S.UnivText>{univ.univName}</S.UnivText>
      <S.Text>{univ.totalHeight}</S.Text>
      <S.RegisterButton onClick={handleClick}>
        {univ.isRegistered ? '취소' : '등록'}
      </S.RegisterButton>
    </S.Container>
  );
};
