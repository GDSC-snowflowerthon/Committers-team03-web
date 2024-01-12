import { AttackedList } from '@/interfaces/attack';
import { atom } from 'recoil';

const defaultAttackedList: AttackedList = {
    attackedList: [
      {
        nickname: "gitffadsfasdfasdfsadff",
        time: "2024.01.11 15:20",
        newAttack: true,
      },
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
    ],
  };
  

  
export const attackedListState = atom<AttackedList | null>({
  key: 'attackedListState',
  default: defaultAttackedList,
});

export const isListButtonClickedState = atom<boolean>({
  key: 'isListButtonClickedState',
  default: false,
});

export const isListCheckedState = atom<boolean>({
  key: 'isListCheckedState',
  default: false,
});


