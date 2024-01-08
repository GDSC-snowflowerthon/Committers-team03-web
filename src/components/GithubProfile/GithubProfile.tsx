import React, {useEffect, useState} from 'react';
import * as S from './style';

// 백엔드 API 주소
const BACKEND_API_URL = 'https://your-backend-api-url';

// GitHub OAuth 애플리케이션 정보
const GITHUB_CLIENT_ID = 'your-github-client-id';

// GitHub 로그인 URL
const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;

export const GithubProfile: React.FC = () => {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch(`${BACKEND_API_URL}/api/user/profile`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 401) {
          window.location.href = GITHUB_LOGIN_URL;
        }
        return res.json();
      })
      .then((res) => {
        setProfile(res);
      });
  }, []);
  return (
    <>
      <S.Wrapper>
        <S.ProfileImage src={profile?.avatar_url} />
        <S.Container>
          <S.ProfileName>{profile?.name}minsung1231님은</S.ProfileName>
          <S.ProfileRank>{profile?.rank} 123등 입니다  :)</S.ProfileRank>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
