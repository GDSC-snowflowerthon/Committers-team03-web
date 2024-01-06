import * as S from './style';
import React from 'react';
import Modal from '../Modal';

interface Props {
    closeModal: () => void;
    isOpen: boolean;
}

function AttackedListModal({closeModal, isOpen}: Props) {
    return (
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalTitle={''}
        modalType={'Modal'}
        modalColor={`#FFFFFF`}
        >
            <S.Wrapper>

            </S.Wrapper>
        </Modal>
    );
}
export default React.memo(AttackedListModal);
