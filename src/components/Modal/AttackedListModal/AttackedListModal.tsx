import * as S from './style';
import React, { useEffect } from 'react';
import Modal from '../Modal';
import MessageWrapper from '@/components/MessageWrapper/MessageWrapper';
import {AttackedList} from '@/interfaces/attack';
import { useQuery } from '@tanstack/react-query';
import { getAttackedList } from '@/apis/myHome';
import { useRecoilState } from 'recoil';
import { attackedListState } from '@/atoms/attackedList';

interface Props {
    closeModal: () => void;
    isOpen: boolean;
}

function AttackedListModal({closeModal, isOpen}: Props) {
  const [attackedList, setAttackedList] = useRecoilState(attackedListState);
  
      const {data} = useQuery<AttackedList>({
        queryKey: ["attackedList"],
        retry: 1, // 실패시 재호출 횟수
        queryFn: () => getAttackedList(),
      });
    
      useEffect(() => {
        if (data) {
          setAttackedList(data);
        }
      }, [data]);

    return (
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        modalTitle={''}
        modalType={'Modal'}
        modalColor={`#FFFFFF`}
        >
            <S.Wrapper>
                {attackedList.attackedList.map((item, index) => (
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
