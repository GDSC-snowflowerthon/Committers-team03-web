import {instance} from './axios';

// 다른 유저 정보 조회
export const getOtherData = async (nickname: string) => {
  const response = await instance.get(`/api/v1/user?nickname=${nickname}`);
    return response.data;
};


 // 친구 상태 변경 (팔로우/언팔로우)
  export const patchFollow = async (nickname: string, isFollowed: boolean) => {
    const response = await instance.patch(
        `api/v1/buddy/update?nickname=${nickname}&isFollowed=${isFollowed}`, {}
    );
      return response.data;
  };


// 공격하기
export const patchAttack = async (nickname: string) => {
  await instance.patch(`api/v1/user/attack?nickname=${nickname}`, {});
  };