/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import * as S from './style';
import GithubLoginButton from '../Button/GithubLoginButton/GithubLoginButton';
import Logo from '../Logo/Logo';
import SnowFalling from '../SnowFalling/SnowFalling';
import SnowmanScene from '../SnowmanScene/SnowmanScene';
export default function LoginPageLayout() {
  const githubLoginClick = () => {
    console.log('로그인버튼 클릭');

    // 리다이렉트 URL
    const redirectUri = encodeURIComponent('https://kidari.site/redirect');

    // 사용자를 깃허브 로그인 페이지로 리다이렉트
    window.location.href = redirectUri;
  };

  return (
    <>
      <S.Layout>
        <SnowFalling />
        <S.Wrapper>
          <Logo height={500} width={500} background="" />
          <SnowmanScene height={'300px'} />
          <GithubLoginButton onClick={githubLoginClick} />
        </S.Wrapper>
      </S.Layout>
    </>
  );
}
