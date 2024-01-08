import React, {useState} from 'react';
import * as S from './style';

export const FollowFriend = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <S.Container>
      <S.Text>minsung1023</S.Text>
      <S.Text>128m</S.Text>
      <S.Text>프로필</S.Text>
      <S.RegisterButton clicked={isClicked} onClick={handleClick}>
        {isClicked ? '언팔로우' : '팔로우'}
      </S.RegisterButton>
    </S.Container>
  );
};
