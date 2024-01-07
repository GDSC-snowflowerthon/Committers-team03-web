import React, { useEffect } from 'react'
import PageLayout from '@/components/PageLayout/PageLayout'
import CustomModal from '@/components/Modal/CustomModal/CustomModal';
import useCustomModal from '@/hooks/useCustomModal';

export default function Custom() {
  const { isOpen, openModal, closeModal } = useCustomModal(); // setOpen 함수를 useModal에서 가져옵니다.
  
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
      <PageLayout title={"눈사람 꾸미기"}>
        <>
        </>
      </PageLayout>
      <CustomModal
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </>
  )
}
