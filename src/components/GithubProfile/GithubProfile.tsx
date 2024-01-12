import React, {useEffect} from 'react';
import * as S from './style';
import {useRecoilState} from 'recoil';
import axios from 'axios';
import {rankState, profileNameState} from '@/atoms/rankState';
import SliverCrown from '@/assets/SilverCrown/SliverCrown.png';

// 백엔드 API 주소
const MYINFO_API_URL = 'https://kidari.site/api/v1/home/myinfo';
const RANKING_API_URL = 'https://kidari.site/api/v1/ranking/buddy/own';

export const GithubProfile: React.FC = () => {
  const [rank, setRank] = useRecoilState(rankState);
  const [profileName, setProfileName] = useRecoilState(profileNameState);

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const response = await axios.get(`${MYINFO_API_URL}`, {
          method: 'GET',
          withCredentials: true,
        });

        if (response.status === 401) {
          window.location.href = MYINFO_API_URL;
        }

        const userData = response.data;
        setProfileName(userData.nickname);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    const fetchRanking = async () => {
      try {
        const response = await axios.get(`${RANKING_API_URL}`, {
          method: 'GET',
          withCredentials: true,
        });

        if (response.status === 401) {
          window.location.href = RANKING_API_URL;
        }

        const userData = response.data;
        setRank(userData.myRanking);
      } catch (error) {
        console.error('Error fetching user ranking:', error);
      }
    };

    fetchMyInfo();
    fetchRanking();
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.ProfileImage src={SliverCrown} />
        <S.Container>
          <S.ProfileName>{profileName}님은</S.ProfileName>
          <S.ProfileRank>{rank}등 입니다 :)</S.ProfileRank>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
