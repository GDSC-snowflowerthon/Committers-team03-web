import React, {useEffect, useState} from 'react';
import * as S from './style';
import {ModalProps} from '@/interfaces/modal';
import {friendRankingListState, univRankingListState} from  '@/atoms/rankState'
import {useRecoilState} from 'recoil';
import {rankState, profileNameState} from '@/atoms/rankState';
import { useQuery } from '@tanstack/react-query';
import { FriendRankingList, UnivRankingList } from '@/interfaces/ranking';
import { getFriendRankingList, getUnivRankingList } from '@/apis/ranking';

const TabModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  modalTitle,
  modalType,
  modalColor,
}) => {
  const [currentTab, setCurrentTab] = useState<'left' | 'right'>('left');
  const [rank, setRank] = useRecoilState(rankState);
  const [profileName, setProfileName] = useRecoilState(profileNameState);
  const [univRankingList, setUnivRankingList] = useRecoilState(univRankingListState);
  const [friendRankingList, setFriendRankingList] = useRecoilState(friendRankingListState);

  // 원래의 rank와 profileName 값을 저장하는 상태를 추가합니다.
  const [originalRank, setOriginalRank] = useState(rank);
  const [originalProfileName, setOriginalProfileName] = useState(profileName);

  const data1 = useQuery<UnivRankingList>({
    queryKey: ["univRankingList"],
    retry: 1, // 실패시 재호출 횟수
    queryFn: () => getUnivRankingList(),
  });

  useEffect(() => {
    if (data1.data) {
      setUnivRankingList(data1.data);
    }
  }, [data1.data]);

  const data2 = useQuery<FriendRankingList>({
    queryKey: ["friendRankingList"],
    retry: 1, // 실패시 재호출 횟수
    queryFn: () => getFriendRankingList(),
  });

  useEffect(() => {
    if (data2.data) {
      setFriendRankingList(data2.data);
    }
  }, [data2.data]);



  const handleTabClick = (tab: 'left' | 'right') => {
    setCurrentTab(tab);
    if (tab === 'right') {
      setOriginalRank(rank);
      setOriginalProfileName(profileName);

      setProfileName('New Profile Name'); // 새로운 프로필 이름으로 변경
      setRank(12311); // 새로운 랭킹으로 변경
    } else if (tab === 'left') {
      setProfileName(originalProfileName);
      setRank(originalRank);
    }
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
              {friendRankingList.rankingList.map((content, index) => (
                <S.TabContainer key={index}>
                  <S.TabDivider> {index + 1}</S.TabDivider>
                  <S.TabDivider>{content.nickname}</S.TabDivider>
                  <S.TabDivider> {content.snowmanHeight}</S.TabDivider>
                </S.TabContainer>
              ))}
            </S.TabContent>
          )}
          {currentTab === 'right' && (
            <S.TabContent>
              {univRankingList.rankingList.map((content, index) => (
                <S.TabContainer key={index} >
                      <S.TabDivider>{index + 1}</S.TabDivider>
                      <S.TabDivider>{content.univName}</S.TabDivider>
                      <S.TabDivider>{content.totalHeight}</S.TabDivider>
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
