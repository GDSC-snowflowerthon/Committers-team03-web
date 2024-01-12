/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import * as S from './style';
import GithubLoginButton from '../Button/GithubLoginButton/GithubLoginButton';
import Logo from '../Logo/Logo';
import SnowFalling from '../SnowFalling/SnowFalling';
import SnowmanScene from '../SnowmanScene/SnowmanScene';
import LogoImg from '@/assets/Logo/Kidari.png';
export default function LoginPageLayout() {
  const githubLoginClick = () => {
    console.log('로그인버튼 클릭');

    // 리다이렉트 URL
    const redirectUri = 'https://kidari-server.shop/login';

    // 사용자를 깃허브 로그인 페이지로 리다이렉트
    window.location.href = redirectUri;
  };

  return (
    <>
      <S.Layout>
        <SnowFalling />
        <S.Wrapper>
          <Logo width={300} height={130} background={LogoImg} border={'none'} />
          <SnowmanScene height={'300px'} />
          <GithubLoginButton onClick={githubLoginClick} />
        </S.Wrapper>
      </S.Layout>
    </>
  );
}
