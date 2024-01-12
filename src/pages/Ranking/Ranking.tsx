import React, {useEffect} from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import RankingModal from '@/components/Modal/RankingModal/RankingModal';
import useRankingModal from '@/hooks/useRankingModal';
import {GithubProfile} from '@/components/GithubProfile/GithubProfile';
import SnowFalling from '@/components/SnowFalling/SnowFalling';
import {rankState} from '@/atoms/rankState';
import {useSetRecoilState} from 'recoil';

export default function Ranking() {
  const {isOpen, openModal, closeModal} = useRankingModal();

  const setGlobalRankingData = useSetRecoilState(rankState); // get the setter function

  useEffect(() => {
    const fetchRankingData = async () => {
      const accessToken = 'your_access_token'; // 실제 액세스 토큰으로 교체해야 합니다.
      const response = await fetch(
        'https://your-api-url/api/v1/ranking/buddy/own',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        setGlobalRankingData(data.data);
      } else {
        console.error('Failed to fetch ranking data');
      }
    };

    fetchRankingData();
    openModal();

    return () => {
      // 언마운트 될 때 isOpen을 false로 설정
      closeModal();
    };
  }, [openModal, closeModal]);

  return (
    <>
      <PageLayout title={'랭킹'}>
        <SnowFalling />
        <GithubProfile />
      </PageLayout>
      <RankingModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
}
