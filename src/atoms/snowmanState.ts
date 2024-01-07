import { atom } from 'recoil';

export const snowmanYPositionState = atom({
  key: 'snowmanYPositionState', // 고유한 key
  default: -1.6, // 기본값
});
