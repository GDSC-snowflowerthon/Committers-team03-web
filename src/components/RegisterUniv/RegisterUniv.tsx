import React from 'react';
import axios from 'axios';
import * as S from './style';
import {useRecoilState} from 'recoil';
import {univState} from '@/atoms/univState';

const BACKEND_API_URL = 'https://kidari.site';

export const RegisterUniv = () => {
  const [univ, setUniv] = useRecoilState(univState);

  const handleClick = async () => {
    const {data} = await axios.get(`${BACKEND_API_URL}/api/v1/univ/update`, {
      withCredentials: true,
    });
    axios.defaults.headers.common['Authorization'] =
      `Bearer ${data.accessToken}`;

    try {
      if (!univ.isRegistered) {
        const response = await axios.patch(
          `${BACKEND_API_URL}/api/v1/univ/update?univName=${univ.univName}&isRegistered=true`,
        );

        const responseData = response.data.data;

        setUniv({
          univName: responseData.univName,
          totalHeight: univ.totalHeight,
          isRegistered: responseData.isRegistered,
        });
      } else {
        const response = await axios.patch(
          `${BACKEND_API_URL}/api/v1/univ/update?univName=${univ.univName}&isRegistered=false`,
        );

        const responseData = response.data.data;

        setUniv({
          univName: responseData.univName,
          totalHeight: univ.totalHeight,
          isRegistered: responseData.isRegistered,
        });
      }
    } catch (error) {
      console.error(error);
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
