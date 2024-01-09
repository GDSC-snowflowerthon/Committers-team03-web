import { myState } from '@/atoms/userState';
import React from 'react'
import { useRecoilValue } from 'recoil';
import * as S from './style'
import useIsMyHome from '@/hooks/useIsMyHome';
import GrowButton from '../Button/GrowButton/GrowButton';
import FollowButton from '../Button/FollowButton/FollowButton';
import AttackButton from '../Button/AttackButton/AttackButton';
export default function UserInfo() {
    const userInfo = useRecoilValue(myState);
    const isMyHome = useIsMyHome();

    return (
        <S.Container>
            <S.WhiteWrapper>
                {userInfo.nickname || 'please login!'}
            </S.WhiteWrapper>
            <S.WhiteWrapper>
                {`눈사람 키: ${userInfo.snowmanHeight}`}
            </S.WhiteWrapper>
            {isMyHome ? (
                <>
                    <S.WhiteWrapper>
                        {`보유 눈송이: ${userInfo.snowflake}`}
                    </S.WhiteWrapper>
                    <GrowButton />
                </>
            ) : (
                // 다른 사용자의 홈일 경우 표시할 내용
                <S.ButtonRowContainer>
                    <FollowButton />
                    <AttackButton />
                </S.ButtonRowContainer>
            )}
        </S.Container>
    );
}
