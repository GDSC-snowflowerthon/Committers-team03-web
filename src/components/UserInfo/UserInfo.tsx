import { myState, otherUserState } from '@/atoms/userState';
import React from 'react'
import { useRecoilValue } from 'recoil';
import * as S from './style'
import useIsMyHome from '@/hooks/useIsMyHome';
import GrowButton from '../Button/GrowButton/GrowButton';
import FollowButton from '../Button/FollowButton/FollowButton';
import AttackButton from '../Button/AttackButton/AttackButton';

export default function UserInfo() {
    const myData = useRecoilValue(myState);
    const otherData = useRecoilValue(otherUserState);
    const {isMyHome, urlNickname} = useIsMyHome();
    console.log("sadfasdf",isMyHome);
    // 현재 홈의 데이터 결정
    const currentData = isMyHome ? myData : otherData;

    return (
        <S.Container>
            <S.WhiteWrapper>
                {urlNickname || 'please login!'} {/* currentData.nickname */}
            </S.WhiteWrapper>
            <S.WhiteWrapper>
                {`Heights: ${currentData.snowmanHeight}`} {/*눈사람 키 */}
            </S.WhiteWrapper>
            {isMyHome ? (
                <>
                    <S.WhiteWrapper>
                        {`Snowflakes: ${myData.snowflake}`} {/*보유 눈송이 */}
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
