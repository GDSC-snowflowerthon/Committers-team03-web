import React from 'react'
import PageLayout from '@/components/PageLayout/PageLayout'
import useModal from '@/hooks/useModal';
import CustomModal from '@/components/Modal/CustomModal/CustomModal';

export default function Custom() {
  const {
    closeModal: closeCustomModal,
  } = useModal();
  
  return (
    <>
      <PageLayout title={"눈사람 꾸미기"}>

      </PageLayout>
      <CustomModal
        closeModal={closeCustomModal}
        isOpen={true}
      />
    </>
  )
}
