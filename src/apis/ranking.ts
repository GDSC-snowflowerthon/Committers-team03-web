import {instance} from './axios';

export const getBuddyRankingData = async () => {
  const response = await instance.get(`/api/v1/ranking/buddy/own`);
    return response.data;
};

export const getUnivRankingData = async () => {
    const response = await instance.get(`/api/v1/ranking/univ/own`);
      return response.data;
  };

  //학교 랭킹 - 리스트 조회
export const getUnivRankingList = async () => {
    const response = await instance.get(`/api/v1/ranking/univ/list`);
      return response.data.data.rankingList;
  };