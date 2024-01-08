import React from 'react';
import TapModal from '../TabModal/TabModal';
import * as S from './style';

interface Props {
  closeModal: () => void;
  isOpen: boolean;
}

function RankingModal({closeModal, isOpen}: Props) {
  return (
    <>
      <TapModal
        modalTitle={''}
        isOpen={isOpen}
        onClose={closeModal}
        modalType={'RankingModal'}
        modalColor={'white'}
      >
        <S.Wrapper></S.Wrapper>
      </TapModal>
    </>
  );
}
export default React.memo(RankingModal);
