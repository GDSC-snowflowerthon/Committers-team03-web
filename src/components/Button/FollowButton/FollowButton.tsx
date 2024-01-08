import React from 'react';
import Button from '../Button'; // Adjust the import path according to your project structure
import FollowButtonImg from '@/assets/Button/FollowButton.png';
const FollowButton = () => {
  const handleFollowToggle = () => {
    //TODO: api 호출. 성공 시 값들 업데이트
}
  return (
    <Button
      type="button"
      width={30}
      height={30}
      background={FollowButtonImg}
      borderRadius="12px"
      onClick={() => handleFollowToggle()}
    />
  );
};

export default FollowButton;
