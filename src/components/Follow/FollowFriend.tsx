import React from 'react';
import * as S from './style';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {searchState} from '@/atoms/searchState';
import {patchFollow} from '@/apis/follow';

export const FollowFriend = () => {
  const searchResult = useRecoilValue(searchState);
  const setSearchResult = useSetRecoilState(searchState);
  const baseURL = 'https://kidari-server.shop';
  const handleClick = async () => {
    try {
      if (searchResult.data?.isFollowed) {
        await patchFollow(searchResult.data?.nickname, false);
      } else {
        await patchFollow(searchResult.data?.nickname, true);
      }

      setSearchResult((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          isFollowed: !prev.data?.isFollowed,
        },
      }));
    } catch (error) {
      console.error(error);
    }
  };
  const handleProfileClick = () => {
    // 이동할 경로
    const profilePath =
      baseURL + `/api/v1/user?nickname=${searchResult.data?.nickname}`;

    // 페이지 이동
    window.location.href = profilePath;
  };
  return (
    <S.Container>
      <S.Text>{searchResult.data?.nickname}</S.Text>
      <S.Text>{searchResult.data?.snowmanHeight}m</S.Text>
      <S.Profile onClick={handleProfileClick}>프로필</S.Profile>
      <S.RegisterButton
        clicked={searchResult.data?.isFollowed}
        onClick={handleClick}
      >
        {searchResult.data?.isFollowed ? '언팔로우' : '팔로우'}
      </S.RegisterButton>
    </S.Container>
  );
};
