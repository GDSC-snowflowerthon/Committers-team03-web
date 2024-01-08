import { userState } from '@/atoms/userState';
import React from 'react'
import { useRecoilValue } from 'recoil';
import * as S from './style'
export default function UserInfo() {
    const userInfo = useRecoilValue(userState);
    const handleGrow = () => {
        //TODO: api 호출. 성공 시 값들 업데이트
    }
    return (
        <S.Container>
            <S.WhiteWrapper>
                {userInfo.nickname || 'please login!'}
            </S.WhiteWrapper>
            <S.WhiteWrapper>
                {`눈사람 키: ${userInfo.snowmanHeight}`}
            </S.WhiteWrapper>
            <S.WhiteWrapper>
                {`보유 눈송이: ${userInfo.snowflake}`}
            </S.WhiteWrapper>
            <S.BlueButton onClick={handleGrow}>
                키우기
            </S.BlueButton>
        </S.Container>
    )
}
