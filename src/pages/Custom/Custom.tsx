import React, { useEffect } from 'react'
import PageLayout from '@/components/PageLayout/PageLayout'
import CustomModal from '@/components/Modal/CustomModal/CustomModal';
import useCustomModal from '@/hooks/useCustomModal';
import SnowmanScene from '@/components/SnowmanScene/SnowmanScene';
import * as S from './style'
import { useRecoilState } from 'recoil';
import { snowmanYPositionState } from '@/atoms/snowmanState';

export default function Custom() {
  const { isOpen, openModal, closeModal } = useCustomModal(); // setOpen 함수를 useModal에서 가져옵니다.
  const [yPosition, setYPosition] = useRecoilState(snowmanYPositionState);

  // 마운트 될 때 isOpen을 true로 설정
  useEffect(() => {
    openModal();
    return () => {
      // 언마운트 될 때 isOpen을 false로 설정
      closeModal();
    };
  }, [openModal]);

  // 컴포넌트가 마운트될 때 yPosition 상태를 업데이트
  useEffect(() => {
    setYPosition(-1.2); // 원하는 초기 yPosition 값으로 설정
  }, [setYPosition]);
  
  return (
    <>
      <PageLayout title={"눈사람 꾸미기"}>
        <S.SnowmanContainer>
          <SnowmanScene height={"400px"}/>
        </S.SnowmanContainer>      
      </PageLayout>
      <CustomModal
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </>
  )
}
