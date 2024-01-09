import React from 'react';
import Button from '../Button';
import * as S from './style';

const GrowButton = () => {
    const handleGrow = () => {
        //TODO: api 호출. 성공 시 값들 업데이트
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
            <S.ButtonText>키우기</S.ButtonText>
        </Button>
    );
};

export default GrowButton;
