import React, {useEffect} from 'react';
import PageLayout from '@/components/PageLayout/PageLayout';
import RankingModal from '@/components/Modal/RankingModal/RankingModal';
import useRankingModal from '@/hooks/useRankingModal';
import {GithubProfile} from '@/components/GithubProfile/GithubProfile';
import SnowFalling from '@/components/SnowFalling/SnowFalling';

export default function Ranking() {
  const {isOpen, openModal, closeModal} = useRankingModal();

  useEffect(() => {
    openModal();

    return () => {
      // 언마운트 될 때 isOpen을 false로 설정
      closeModal();
    };
  }, [openModal, closeModal]);

  return (
    <>
      <PageLayout title={'Ranking'}>
        <SnowFalling />
        <GithubProfile />
      </PageLayout>
      <RankingModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
}
