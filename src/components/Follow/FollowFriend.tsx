import React, {useEffect} from 'react';
import {useRecoilValue, useRecoilState} from 'recoil';
import * as S from './style';
import {otherUserState} from '@/atoms/userState';
import axios from 'axios';
export const FollowFriend = () => {
  const searchResult = useRecoilValue(otherUserState);
  const [, setIsFollowed] = useRecoilState(otherUserState);
  const fetchUserData = async (nickname: string, accessToken: string) => {
    try {
      const response = await axios.get(
        `/api/v1/buddy/search?nickname=${nickname}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      const userData = response.data.data;

      setIsFollowed({
        nickname: userData.nickname,
        snowmanHeight: userData.snowmanHeight,
        snowId: userData.snowId,
        hatId: userData.hatId,
        decoId: userData.decoId,
        isFollowed: userData.isFollowed,
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    const accessToken = 'your-access-token'; // 실제 access token 으로 대체 예정
    const userNickname = searchResult.nickname; // Replace with the user you want to search

    fetchUserData(userNickname, accessToken);
  }, []);
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
