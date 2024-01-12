import {instance} from './axios';
const baseServerURL = 'https://kidari-server.shop';

export const getBuddyRankingData = async () => {
  const response = await instance.get(baseServerURL+`/api/v1/ranking/buddy/own`);
    return response.data;
};