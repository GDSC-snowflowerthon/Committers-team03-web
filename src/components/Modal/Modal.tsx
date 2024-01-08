import React from 'react';
import * as S from './style';
import {ModalProps} from '@/interfaces/modal';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  modalTitle,
  modalType,
  modalColor,
}) => {
  return (
    <S.ModalWrapper show={isOpen} modalType={modalType} onClick={onClose}>
      <S.ModalContent
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
        modalType={modalType}
        modalColor={modalColor}
      >
        <S.ModalInnerContent>
          <S.ModalTitle>{modalTitle}</S.ModalTitle>
          {children}
        </S.ModalInnerContent>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default Modal;
