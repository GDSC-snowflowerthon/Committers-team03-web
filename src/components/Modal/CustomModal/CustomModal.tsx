import React from 'react'
import Modal from '../Modal'
import * as S from './style'
import { SnowmanDecorationSection } from '@/components/SnowmanDecorationSection/SnowmanDecorationSection';
import CustomCompleteButton from '@/components/Button/CustomCompleteButton/CustomCompleteButton';
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
            modalType={'CustomModal'}
            modalColor={'white'}

        >
            <S.Wrapper>
                <S.Title>
                    Decorate {/* 눈사람 꾸미기 */}
                </S.Title>
                <CustomCompleteButton>
                    
                </CustomCompleteButton>
                <SnowmanDecorationSection />

            </S.Wrapper>

        </Modal>
    )
}
export default React.memo(CustomModal);
