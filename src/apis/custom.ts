import {instance} from './axios';

// 아이템 조회 (색상id 조회)
  export const getCustomList = async () => {
    try {
      const response = await instance.get(
        `api/v1/item`,
      );
      return response.data.data;
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
export const patchCustomList = async (snowId, hatId, decoId) => {
    await instance.patch(`api/v1/item/update`, {
      snowId: snowId,
      hatId: hatId,
      decoId: decoId
    });
};
