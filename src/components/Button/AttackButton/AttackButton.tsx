import { patchAttack } from '@/apis/otherHome';
import useIsMyHome from '@/hooks/useIsMyHome';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button'; // Adjust the import path according to your project structure
import * as S from './style';

const AttackButton = () => {
    const navigate = useNavigate();
    const { urlNickname } = useIsMyHome();

    const { mutate } = useMutation({
        mutationFn: () => patchAttack(urlNickname),
        onSuccess: async () => {
            alert('Attack successful!');
        },
        onError: () => {
            alert('Your session has expired. Please login again.');
            navigate('/');
        },
    });

    const handleAttack = () => {
        mutate();
    }
    return (
        <Button
        width={120}
        height={30}
        backgroundColor="#3181F4"
        borderRadius="12px"
        onClick={() => handleAttack()}
        >
            <S.ButtonText>공격하기</S.ButtonText>
        </Button>
    );
};

export default AttackButton;
