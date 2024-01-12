import {instance} from './axios'; 
 
 // 친구 상태 변경 (팔로우/언팔로우)
 export const patchFollow = async (nickname: string, isFollowed: boolean) => {
    const response = await instance.patch(
        `api/v1/buddy/update?nickname=${nickname}&isFollowed=${isFollowed}`, {}
    );
      return response.data.data;
  };

