import {instance} from './axios';
const baseServerURL = 'https://kidari-server.shop';

export const getBuddyRankingData = async () => {
  const response = await instance.get(baseServerURL+`/api/v1/ranking/buddy/own`);
    return response.data;
};

export const getUnivRankingData = async () => {
    const response = await instance.get(baseServerURL+`/api/v1/ranking/univ/own`);
      return response.data;
  };