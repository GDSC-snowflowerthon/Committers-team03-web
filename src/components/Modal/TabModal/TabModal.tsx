import React, {useState} from 'react';
import * as S from './style';
import {ModalProps} from '@/interfaces/modal';
// import {TabContentProps} from '@/interfaces/tab';

const TabModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  modalTitle,
  modalType,
  modalColor,
}) => {
  const [currentTab, setCurrentTab] = useState<'left' | 'right'>('left');
  const tabLeftContents = [
    {id: 1, title: 'Left Tab Content 1', height: 100},
    {id: 2, title: 'Left Tab Content 2', height: 100},
    {id: 3, title: 'Left Tab Content 3', height: 100},
    // ... (다른 탭의 내용도 추가할 수 있음)
  ];
  const tabRightContents = [
    {id: 1, title: 'Right Tab Content 1', height: 50},
    {id: 2, title: 'Right Tab Content 2', height: 50},
    {id: 3, title: 'Right Tab Content 3', height: 50},
    // ... (다른 탭의 내용도 추가할 수 있음)
  ];
  const handleTabClick = (tab: 'left' | 'right') => {
    setCurrentTab(tab);
  };

  return (
    <S.ModalWrapper show={isOpen} modalType={modalType} onClick={onClose}>
      <S.ModalContent
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
        modalType={modalType}
        modalColor={modalColor}
      >
        <S.ModalInnerContent>
          <S.ModalTitle>{modalTitle}</S.ModalTitle>
          <S.TabsWrapper>
            <S.Tab
              onClick={() => handleTabClick('left')}
              isActive={currentTab === 'left'}
            >
              개인 랭킹
            </S.Tab>
            <S.Tab
              onClick={() => handleTabClick('right')}
              isActive={currentTab === 'right'}
            >
              학교 랭킹
            </S.Tab>
          </S.TabsWrapper>
          {currentTab === 'left' && (
            <S.TabContent>
              {tabLeftContents.map((content) => (
                <S.TabContainer key={content.id}>
                  <S.TabDivider> {content.id}</S.TabDivider>
                  <S.TabDivider>{content.title}</S.TabDivider>
                  <S.TabDivider> {content.height}</S.TabDivider>
                </S.TabContainer>
              ))}
            </S.TabContent>
          )}
          {currentTab === 'right' && (
            <S.TabContent>
              {tabRightContents.map((content) => (
                <S.TabContainer key={content.id}>
                  <S.TabDivider> {content.id}</S.TabDivider>
                  <S.TabDivider>{content.title}</S.TabDivider>
                  <S.TabDivider> {content.height}</S.TabDivider>
                </S.TabContainer>
              ))}
            </S.TabContent>
          )}
          {children}
        </S.ModalInnerContent>
      </S.ModalContent>
    </S.ModalWrapper>
  );
};

export default TabModal;
