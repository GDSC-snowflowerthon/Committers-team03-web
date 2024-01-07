import * as S from './style';
import React from 'react';
import Modal from '../Modal';
import MessageWrapper from '@/components/MessageWrapper/MessageWrapper';
import {AttackedList} from '@/interfaces/attack';

interface Props {
    closeModal: () => void;
    isOpen: boolean;
}

function AttackedListModal({closeModal, isOpen}: Props) {
    const dummyData: AttackedList = { //TODO: 더미데이터임. 테스트용
        attackedList: [
          {
            nickname: "githubId",
            time: "2024.01.11 15:20",
            newAttack: true,
          },
          {
            nickname: "githubId",
            time: "2024.01.11 15:20",
            newAttack: false,
          },
          {
            nickname: "githubId",
            time: "2024.01.11 15:20",
            newAttack: false,
          },
          {
            nickname: "githubId",
            time: "2024.01.11 15:20",
            newAttack: false,
          },
          {
            nickname: "githubId",
            time: "2024.01.11 15:20",
            newAttack: false,
          },
          {
            nickname: "githubId",
            time: "2024.01.11 15:20",
            newAttack: false,
          },
          {
            nickname: "githubId",
            time: "2024.01.11 15:20",
            newAttack: false,
          },
        ],
      };

    return (
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalTitle={''}
        modalType={'Modal'}
        modalColor={`#FFFFFF`}
        >
            <S.Wrapper>
                {dummyData.attackedList.map((item, index) => (
                    <MessageWrapper
                        key={index}
                        newAttack={item.newAttack}
                        nickname={item.nickname}
                        time={item.time}
                    />
                ))}
            </S.Wrapper>
        </Modal>
    );
}
export default React.memo(AttackedListModal);
