import { atom } from "recoil";
import { UnivRankingList, FriendRankingList } from '@/interfaces/ranking';

export const rankState = atom<number | string>({ key: "rankState", default: 123 });
export const profileNameState = atom({ key: "profileNameState", default: "minsung123" });

const defaultUnivRankingList: UnivRankingList = {
    rankingList: [
      {
        univName: "Havard Univ.",
        totalHeight: 10231,
      },
      {
        univName: "Oxford Univ.",
        totalHeight: 9341,
      },
      {
        univName: "Chicago Univ.",
        totalHeight: 8871,
      },
      {
        univName: "Newyork Univ.",
        totalHeight: 8871,
      },
      {
        univName: "Yale Univ",
        totalHeight: 8559,
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
        nickname: "stakbucks",
        snowmanHeight: 133,
      },
      {
        nickname: "kim-limit",
        snowmanHeight: 125,
      },
      {
        nickname: "usernamebuzz",
        snowmanHeight: 113,
      },
      {
        nickname: "djdongjae",
        snowmanHeight: 111,
      },
      {
        nickname: "seochan99",
        snowmanHeight: 97,
      },
      {
        nickname: "jjuuuunnii",
        snowmanHeight: 78,
      },
      {
        nickname: "KEONI1231",
        snowmanHeight: 31,
      },
      {
        nickname: "seohyun-lee",
        snowmanHeight: 27,
      },
    ],
  };
  

  
export const friendRankingListState = atom<FriendRankingList | null>({
  key: 'friendRankingListState',
  default: defaultFriendRankingList,
});