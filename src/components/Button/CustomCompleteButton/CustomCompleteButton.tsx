import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { snowmanRotationState } from '@/atoms/snowmanState';
import Button from '../Button'; // Adjust the import path as needed
import * as S from './style';
import { CustomCompleteButtonProps } from '@/interfaces/button';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { patchCustomList } from '@/apis/custom';
import { myState } from '@/atoms/userState';

export default function CustomCompleteButton(props: CustomCompleteButtonProps) {
    const setRotate = useSetRecoilState(snowmanRotationState);
    const myData = useRecoilValue(myState);

    const navigate = useNavigate();
    const { mutate } = useMutation({
      mutationFn: () => patchCustomList(myData.snowId, myData.hatId, myData.decoId),
      onSuccess: async () => {
        //TODO:
      },
      onError: () => {
        // alert('Your session has expired. Please login again.');
        // navigate('/');
    },
    });
    
    const handleComplete = () => {
        setRotate(true); // 회전 시작
        mutate()
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
        <S.ButtonText>Done</S.ButtonText> {/* 완성 */}
      </Button>
    </S.CustomCompleteButtonWrapper>
  );
}
