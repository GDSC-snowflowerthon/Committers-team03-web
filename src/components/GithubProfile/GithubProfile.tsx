import React, {useEffect} from 'react';
import * as S from './style';
import {useRecoilState} from 'recoil';
import {rankState, profileNameState} from '@/atoms/rankState';

// 백엔드 API 주소
const BACKEND_API_URL = 'https://your-backend-api-url';

// GitHub OAuth 애플리케이션 정보
const GITHUB_CLIENT_ID = 'your-github-client-id';

// GitHub 로그인 URL
const GITHUB_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;

export const GithubProfile: React.FC = () => {
  const [rank, setRank] = useRecoilState(rankState);
  const [profileName, setProfileName] = useRecoilState(profileNameState);
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
        setProfileName(res.name);
        setRank(res.rank);
      });
  }, []);
  return (
    <>
      <S.Wrapper>
        <S.ProfileImage />
        <S.Container>
          <S.ProfileName>{profileName}님은</S.ProfileName>
          <S.ProfileRank>{rank}등 입니다 :)</S.ProfileRank>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
