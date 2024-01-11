import React from 'react';
import {useRecoilValue, useRecoilState} from 'recoil';
import * as S from './style';
import {otherUserState} from '@/atoms/userState';

export const FollowFriend = () => {
  const searchResult = useRecoilValue(otherUserState);
  const [, setIsFollowed] = useRecoilState(otherUserState);

  const handleClick = () => {
    setIsFollowed((prev) => ({...prev, isFollowed: !prev.isFollowed}));
  };
  const handleProfileClick = () => {
    // 이동할 경로(임시)
    const profilePath = `/profile/${searchResult.nickname}`;

    // 페이지 이동
    window.location.href = profilePath;
  };
  return (
    <S.Container>
      <S.Text>{searchResult.nickname}</S.Text>
      <S.Text>{searchResult.snowmanHeight}m</S.Text>
      <S.Profile onClick={handleProfileClick}>프로필</S.Profile>
      <S.RegisterButton clicked={searchResult.isFollowed} onClick={handleClick}>
        {searchResult.isFollowed ? '언팔로우' : '팔로우'}
      </S.RegisterButton>
    </S.Container>
  );
};
