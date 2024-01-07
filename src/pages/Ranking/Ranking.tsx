import React from 'react'
import PageLayout from '@/components/PageLayout/PageLayout'
import useModal from '@/hooks/useModal';
import RankingModal from '@/components/Modal/RankingModal/RankingModal';

export default function Ranking() {
  const {
    closeModal: closeCustomModal,
  } = useModal();
  
  return (
    <>
      <PageLayout title={"랭킹"}>

      </PageLayout>
      <RankingModal
        closeModal={closeCustomModal}
        isOpen={true}
      />
    </>
  )
}
