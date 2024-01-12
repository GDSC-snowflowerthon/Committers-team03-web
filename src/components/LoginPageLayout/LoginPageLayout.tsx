/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import * as S from './style';
import GithubLoginButton from '../Button/GithubLoginButton/GithubLoginButton';
import Logo from '../Logo/Logo';
import SnowFalling from '../SnowFalling/SnowFalling';
import SnowmanScene from '../SnowmanScene/SnowmanScene';
import LogoImg from '@/assets/Logo/Kidari.png';
import ArrowAnimation from '../ArrowAnimation/ArrowAnimation';
export default function LoginPageLayout() {
  const githubLoginClick = () => {
    // 사용자를 깃허브 로그인 페이지로 리다이렉트
    window.location.href = "https://kidari-server.shop/oauth2/authorization/github";
  };

  return (
    <>
      <S.Layout>
        <SnowFalling />
        <S.Wrapper>
          <Logo width={300} height={130} background={LogoImg} border={'none'} />
          <ArrowAnimation top="280px" right="20px" />
          <SnowmanScene height={'300px'} />
          <GithubLoginButton onClick={githubLoginClick} />
        </S.Wrapper>
      </S.Layout>
    </>
  );
}
