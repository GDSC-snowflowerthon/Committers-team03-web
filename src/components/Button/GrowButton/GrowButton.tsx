import { patchSnowmanGrow } from '@/apis/myHome';
import { myState } from '@/atoms/userState';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Button from '../Button';
import * as S from './style';

const GrowButton = () => {
    const navigate = useNavigate();
    const userData = useRecoilValue(myState);
    const setUserData = useSetRecoilState(myState);

    const { mutate } = useMutation({
        mutationFn: () => patchSnowmanGrow(),
        onSuccess: async () => {
          // 상태 업데이트
            setUserData({
                ...userData,
                snowmanHeight: userData.snowmanHeight + 1,
                snowflake: userData.snowflake - 1,
            });
        },
        onError: () => {
            alert('Your session has expired. Please login again.');
            navigate('/');
        },
    });

    const handleGrow = () => {
        mutate();
    }

    return (
        <Button
        type="button"
        width={160}
        height={30}
        backgroundColor="#3181F4"
        borderRadius="12px"
        onClick={() => handleGrow()}
        >
            <S.ButtonText>Grow</S.ButtonText> {/* 키우기 */}
        </Button>
    );
};

export default GrowButton;
