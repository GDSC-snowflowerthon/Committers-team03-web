import { atom } from 'recoil';
import { OtherUserState, MyState } from '@/interfaces/userState'; // 인터페이스 경로는 실제 파일 위치에 따라 달라질 수 있습니다.

export const myState = atom<MyState>({
  key: 'myState',
  default: {
    nickname: 'githubid00',
    snowflake: 0,
    snowmanHeight: 0,
    snowId: 0,
    hatId: 0,
    decoId: 0,
    newAlarm: false
  }
});

export const otherUserState = atom<OtherUserState>({
  key: 'otherUserState',
  default: {
    nickname: '',
    snowmanHeight: 0,
    snowId: 0,
    hatId: 0,
    decoId: 0,
    isFollowed: false
  },
});
