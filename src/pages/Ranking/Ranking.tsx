import React, { useEffect } from 'react'
import PageLayout from '@/components/PageLayout/PageLayout'
import RankingModal from '@/components/Modal/RankingModal/RankingModal';
import useRankingModal from '@/hooks/useRankingModal';

export default function Ranking() {
  const { isOpen, openModal, closeModal } = useRankingModal(); // setOpen 함수를 useModal에서 가져옵니다.
  
  // 마운트 될 때 isOpen을 true로 설정
  useEffect(() => {
    openModal();
    return () => {
      // 언마운트 될 때 isOpen을 false로 설정
      closeModal();
    };
  }, [openModal]);
  
  return (
    <>
      <PageLayout title={"랭킹"}>

      </PageLayout>
      <RankingModal
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </>
  )
}
