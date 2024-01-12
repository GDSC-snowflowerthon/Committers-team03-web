import { atom } from 'recoil';
import { UnivState } from '@/interfaces/userState'; 

export const univState = atom<UnivState>({
    key: 'univState',
    default: {
        univName : "univName",
        totalHeight : 0,
        isRegistered : false,
    },
  });