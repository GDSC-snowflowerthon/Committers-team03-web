import React from 'react'
import Modal from '../Modal'
import * as S from './style'

interface Props {
    closeModal: () => void;
    isOpen: boolean;
}

function CustomModal({closeModal, isOpen}: Props) {
    return (
        <Modal
            modalTitle={""}
            isOpen={isOpen}
            onClose={closeModal}
            modalType={'SlideUpModal'}
            modalColor={'white'}

        >
            <S.Wrapper>

            </S.Wrapper>

        </Modal>
    )
}
export default React.memo(CustomModal);
