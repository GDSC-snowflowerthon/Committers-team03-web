import { atom } from 'recoil';
import { UserState } from '@/interfaces/userState'; // 인터페이스 경로는 실제 파일 위치에 따라 달라질 수 있습니다.

export const userState = atom<UserState>({
  key: 'userState',
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
