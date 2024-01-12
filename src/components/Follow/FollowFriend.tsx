import React from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import * as S from './style';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@tanstack/react-query';
import {patchFollow} from '@/apis/otherHome';
import {buddyState} from '@/atoms/buddyState';
export const FollowFriend = () => {
  const navigate = useNavigate();
  const searchResult = useRecoilValue(buddyState);
  const setBuddy = useSetRecoilState(buddyState);

  const {mutate} = useMutation({
    mutationFn: () =>
      patchFollow(searchResult.nickname, !searchResult.isFollowed),
    onSuccess: async () => {
      // 상태 업데이트
      setBuddy({...searchResult, isFollowed: !searchResult.isFollowed});
    },
    onError: (error) => {
     // alert(error);
    },
  });

  const handleClick = () => {
    mutate();
  };
  const handleProfileClick = () => {
    const profilePath = `/${searchResult.nickname}`;

    // 페이지 이동
    navigate(profilePath);
  };
  return (
    <S.Container>
      <S.Nickname>{searchResult.nickname}</S.Nickname>
      <S.Height>{searchResult.snowmanHeight}m</S.Height>
      <S.Profile onClick={handleProfileClick}>Profile</S.Profile>
      <S.RegisterButton clicked={searchResult.isFollowed} onClick={handleClick}>
        {searchResult.isFollowed ? 'UnFollow' : 'Follow'}
      </S.RegisterButton>
    </S.Container>
  );
};
