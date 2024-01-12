import { atom } from 'recoil';
import { buddyType } from '@/interfaces/userState'; 

export const buddyState = atom<buddyType>({
    key: 'buddyState',
    default: {
        nickname : "sdfasf",
        snowmanHeight : 0,
        isFollowed : false,
    },
  });