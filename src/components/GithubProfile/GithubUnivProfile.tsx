import React, {useEffect} from 'react';
import * as S from './style';
import {useRecoilState} from 'recoil';
import {rankState, profileNameState} from '@/atoms/rankState';
import SliverCrown from '@/assets/SilverCrown/SliverCrown.png';
import {getUnivRankingData} from '@/apis/ranking';

export const GithubProfile: React.FC = () => {
  const [rank, setRank] = useRecoilState(rankState);
  const [profileName, setProfileName] = useRecoilState(profileNameState);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await getUnivRankingData();

        // if (response.status === 401) {
        //   window.location.href = RANKING_API_URL;
        // }

        const userData = response.data;
        if (userData.myUnivName === 'none') {
          setProfileName(''); // Clear the profileName if there is no university
        }
        setRank(userData.myUnivRanking);
      } catch (error) {
        console.error('Error fetching user ranking:', error);
      }
    };
    fetchRanking();
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.ProfileImage src={SliverCrown} />
        <S.Container>
          <S.ProfileName>{profileName}님의 학교는</S.ProfileName>
          {profileName ? (
            <S.ProfileRank>{rank}등 입니다 :)</S.ProfileRank>
          ) : (
            <S.ProfileRank>아직 소속된 대학이 없어요 :(</S.ProfileRank>
          )}
        </S.Container>
      </S.Wrapper>
    </>
  );
};
