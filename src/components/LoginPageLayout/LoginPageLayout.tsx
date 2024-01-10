/* eslint-disable @typescript-eslint/no-var-requires */
import React, {useEffect} from 'react';
import * as S from './style';
import GithubLoginButton from '../Button/GithubLoginButton/GithubLoginButton';
import Logo from '../Logo/Logo';
import SnowFalling from '../SnowFalling/SnowFalling';
import SnowmanScene from '../SnowmanScene/SnowmanScene';
export default function LoginPageLayout() {
  const githubLoginClick = () => {
    console.log('로그인버튼 클릭');
    // window.location.href = 'http://your-backend-url/github/login';
  };

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const response = await fetch('http://your-backend-url/github/callback');
        const data = await response.json();

        if (data.status === 200) {
          const accessToken = data.data;

          console.log('GitHub 로그인 성공! 토큰:', accessToken);
        } else {
          console.error('GitHub 로그인 실패:', data.message);
        }
      } catch (error) {
        console.error('GitHub 콜백 처리 오류:', error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('code')) {
      handleRedirect();
    }
  }, []);

  return (
    <>
      <S.Layout>
      <SnowFalling />
        <S.Wrapper>
          <Logo height={500} width={500} background="" />
          <SnowmanScene height={"300px"} />
          <GithubLoginButton onClick={githubLoginClick} />
        </S.Wrapper>
      </S.Layout>
    </>
  );
}
