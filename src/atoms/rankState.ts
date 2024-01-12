import { atom } from "recoil";
import { UnivRankingList, FriendRankingList } from '@/interfaces/ranking';

export const rankState = atom<number | string>({ key: "rankState", default: 123 });
export const profileNameState = atom({ key: "profileNameState", default: "minsung123" });

const defaultUnivRankingList: UnivRankingList = {
    rankingList: [
      {
        univName: "gitffadsfasdfasdfsadff",
        totalHeight: 123,
      },
      {
        univName: "gitffadsfasdfasdfsadff",
        totalHeight: 123,
      },
      {
        univName: "gitffadsfasdfasdfsadff",
        totalHeight: 123,
      },
      {
        univName: "gitffadsfasdfasdfsadff",
        totalHeight: 123,
      },
      {
        univName: "gitffadsfasdfasdfsadff",
        totalHeight: 123,
      },
    ],
  };
  

  
export const univRankingListState = atom<UnivRankingList | null>({
  key: 'univRankingListState',
  default: defaultUnivRankingList,
});

const defaultFriendRankingList: FriendRankingList = {
    rankingList: [
      {
        nickname: "gitffadsfasdfasdfsadff",
        snowmanHeight: 123,
      },
      {
        nickname: "gitffadsfasdfasdfsadff",
        snowmanHeight: 123,
      },
      {
        nickname: "gitffadsfasdfasdfsadff",
        snowmanHeight: 123,
      },
      {
        nickname: "gitffadsfasdfasdfsadff",
        snowmanHeight: 123,
      },
      {
        nickname: "gitffadsfasdfasdfsadff",
        snowmanHeight: 123,
      },
    
    ],
  };
  

  
export const friendRankingListState = atom<FriendRankingList | null>({
  key: 'friendRankingListState',
  default: defaultFriendRankingList,
});