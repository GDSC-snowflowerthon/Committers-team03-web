import {instance} from './axios';

// 다른 유저 정보 조회
export const getOtherData = async (nickname: string) => {
  const response = await instance.get(`/api/v1/user?nickname=${nickname}`);
  return {
    ...response.data,
  };
}

{/*
	"data":{
			"nickname" : "gitHubId", // 깃허브 아이디
			"snowmanHeight" : 30, //눈사람 키
			"snowId" : 3,
			"hatId" : 5,
			"decoId" : 7
			"isFollowed" : false //2024-01-08 추가
	}
*/}

 // 친구 상태 변경 (팔로우/언팔로우)
  export const patchFollow = async (nickname: string, isFollowed: boolean) => {
    const response = await instance.patch(
        `api/v1/buddy/update?nickname=${nickname}&isFollowed=${isFollowed}`, {}
    );
      return response.data;
  };

  {/*
{
	"data":{
		"nickname" : "gitHubId", // 추가/삭제된 친구의 gitHubId
		"isFollowed" : "true" // 친구 추가 여부(true or false)
	}
}
*/}

// 공격하기
export const patchAttack = async (nickname: string) => {
  await instance.patch(`api/v1/user/attack?nickname=${nickname}`, {});
  };