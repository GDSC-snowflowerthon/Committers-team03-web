import React from 'react';
import { useSetRecoilState } from 'recoil';
import { snowmanRotationState } from '@/atoms/snowmanState';
import Button from '../Button'; // Adjust the import path as needed
import * as S from './style';
import { CustomCompleteButtonProps } from '@/interfaces/button';

export default function CustomCompleteButton(props: CustomCompleteButtonProps) {
    const setRotate = useSetRecoilState(snowmanRotationState);

    const handleComplete = () => {
        setRotate(true); // 회전 시작
        //TODO: api 호출 함수
      };
      
  

  return (
    <S.CustomCompleteButtonWrapper>
      <Button
        {...props}
        type="button"
        width={60}
        height={38}
        backgroundColor={`#3181F4`}
        borderRadius={`12px`}
        onClick={handleComplete}
      >
        <S.ButtonText>완성</S.ButtonText>
      </Button>
    </S.CustomCompleteButtonWrapper>
  );
}
