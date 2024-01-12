import React, {useEffect} from 'react';
import * as S from './style';
import {useRecoilState} from 'recoil';
import {rankState, profileNameState} from '@/atoms/rankState';
import SliverCrown from '@/assets/SilverCrown/SliverCrown.png';
import {getBuddyRankingData} from '@/apis/ranking';
import useIsMyHome from '@/hooks/useIsMyHome';

export const GithubProfile: React.FC = () => {
  const [rank, setRank] = useRecoilState(rankState);
  const [profileName, setProfileName] = useRecoilState(profileNameState);
  const { nickname } = useIsMyHome(); //TODO: 임시용
  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await getBuddyRankingData();

        // if (response.status === 401) {
        //   window.location.href = RANKING_API_URL;
        // }

        const userData = response.data;
        setProfileName(userData.nickname);
        setRank(userData.myRanking);
      } catch (error) {
        console.error('Error fetching user ranking:', error);
      }
    };

    fetchRanking();
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.AnimatedObjectWrapper>
          <S.ProfileImage src={SliverCrown} />
        </S.AnimatedObjectWrapper>
        <S.Container>
          <S.ProfileRank>{nickname} is ranked {rank}th :)</S.ProfileRank> {/* profileName */}
        </S.Container>
      </S.Wrapper>
    </>
  );
};
