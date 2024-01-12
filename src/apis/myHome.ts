import {instance} from './axios';

// 유저 본인 정보 조회
export const getMyData =  async () => {
  try {
    const response = await instance.get(`/api/v1/home/myinfo`);
    return {
        ...response.data.data,
    };
  } catch (error) {
    return null;
  }
}

{/*
	"data":{
			"nickname" : "githubId", // 깃허브 아이디
			"snowflake" : 1, //보유 눈송이
			"snowmanHeight" : 30, //눈사람 키
			"snowId" : 3,
			"hatId" : 2,
			"decoId": 1,
			"newAlarm" : true //새로운 알림이 있으면 true, 모두 다 확인한 상태면 false
	}
*/}

  // 눈사람 키 키우기
  export const patchSnowmanGrow = async () => {
    await instance.patch(
        `api/v1/home/growth`, {}
      );
  };

  // 알림 조회 (받은 공격 목록 조회)
  export const getAttackedList = async () => {
      const response = await instance.get(
        `api/v1/home/alarm`,
      );
      return response.data.data.attackedList; //attackedList
  };

  {/*
    "status" : 200,
    "message" : ""
    "data":{
      "attackedList" : [
        {
          "time" : "2024.01.11 15:20" // 공격 시각
          "attacker" : "githubId", // 공격자 깃허브 아이디
          "isChecked" : true
        }
        ...
      ]
    }
  */}