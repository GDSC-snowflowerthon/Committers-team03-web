import { atom } from 'recoil';
import { OtherUserState, MyState } from '@/interfaces/userState'; // 인터페이스 경로는 실제 파일 위치에 따라 달라질 수 있습니다.

export const myState = atom<MyState>({
  key: 'myState',
  default: {
    nickname: 'githubid00',
    snowflake: 0,
    snowmanHeight: 0,
    snowId: 1,
    hatId: 3,
    decoId: 1,
    newAlarm: false
  }
});

export const otherUserState = atom<OtherUserState>({
  key: 'otherUserState',
  default: {
    nickname: '',
    snowmanHeight: 0,
    snowId: 1,
    hatId: 2,
    decoId: 1,
    isFollowed: false
  },
});
