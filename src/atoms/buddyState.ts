import { atom } from 'recoil';
import { buddyType } from '@/interfaces/userState'; 

export const buddyState = atom<buddyType>({
    key: 'buddyState',
    default: {
        nickname : "univName",
        snowmanHeight : 0,
        isFollowed : false,
    },
  });