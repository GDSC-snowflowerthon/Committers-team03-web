import React from 'react';
import Button from '../Button'; // Adjust the import path according to your project structure
import * as S from './style';

const AttackButton = () => {
    const handleAttack = () => {
        //TODO: api 호출. 성공 시 값들 업데이트
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
