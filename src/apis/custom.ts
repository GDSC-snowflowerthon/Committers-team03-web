import {instance} from './axios';

// 아이템 조회 (색상id 조회)
  export const getCustomList = async () => {
    try {
      const response = await instance.get(
        `api/v1/item`,
      );
      return response.data;
    } catch (error) {
      return null;
    }
  };

  {/*
	"data":{
        "snowId" : 3, 
        "hatId" : 1, 
        "decoId" : 1 
	}

*/}

// 아이템 장착 (색상 반영)
export const patchSnowmanGrow = async (snowId, hatId, decoId) => {
  try {
    await instance.patch(`api/v1/item/update`, {
      snowId: snowId,
      hatId: hatId,
      decoId: decoId
    });
  } catch (error) {
    console.error(error); // 에러를 콘솔에 출력
    return null; // 에러가 발생하면 null 반환
  }
};
