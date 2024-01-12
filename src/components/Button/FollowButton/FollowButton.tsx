import React from 'react';
import Button from '../Button';
import FollowButtonImg from '@/assets/Button/FollowButton.png';
import UnFollowButtonImg from '@/assets/Button/UnFollowButton.png';
import { otherUserState } from '@/atoms/userState';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { patchFollow } from '@/apis/otherHome';
import { useMutation } from '@tanstack/react-query';
import useIsMyHome from '@/hooks/useIsMyHome';
import { useNavigate } from 'react-router-dom';

const FollowButton = () => {
  const navigate = useNavigate();
  const { isFollowed, ...otherData } = useRecoilValue(otherUserState);
  const setOtherUserData = useSetRecoilState(otherUserState);
  const { urlNickname } = useIsMyHome();

  const { mutate } = useMutation({
    mutationFn: () => patchFollow(urlNickname, !isFollowed),
    onSuccess: async () => {
      // 상태 업데이트
      setOtherUserData({ ...otherData, isFollowed: !isFollowed });
    },
    onError: () => {
      // alert('Your session has expired. Please login again.');
      // navigate('/');
      // localStorage.setItem("redirectOtherNickname", urlNickname);
  },
  });

  const handleFollowToggle = () => {
    mutate(); // updateData 함수를 호출
  }

  const buttonImage = isFollowed ? UnFollowButtonImg : FollowButtonImg;

  return (
    <Button
      type="button"
      width={30}
      height={30}
      background={buttonImage}
      borderRadius="12px"
      onClick={handleFollowToggle}
    />
  );
};

export default FollowButton;
