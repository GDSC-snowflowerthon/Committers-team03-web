import { atom } from "recoil";
import { UnivRankingList } from '@/interfaces/ranking';

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