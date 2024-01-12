import { atom } from 'recoil';

export const snowmanYPositionState = atom({
  key: 'snowmanYPositionState', // 고유한 key
  default: -1.6, // 기본값
});

export const snowmanRotationState = atom<boolean>({
  key: 'snowmanRotationState',
  default: false, // 기본 회전 각도는 0으로 설정
});

export const snowmanHeightState = atom<number | undefined>({
  key: 'snowmanHeightState',
  default: 190, // 초기 눈사람의 키는 0으로 설정
});