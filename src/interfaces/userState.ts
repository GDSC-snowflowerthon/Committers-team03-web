export interface MyState {
    nickname: string; // 깃허브 아이디
    snowflake: number; // 보유 눈송이
    snowmanHeight: number; // 눈사람 키
    snowId: number; // 눈 아이디
    hatId: number; // 모자 아이디
    decoId: number; // 장식 아이디
    newAlarm: boolean; // 새로운 알림 유무
}


export interface OtherUserState {
    nickname: string;  // 깃허브 아이디
    snowmanHeight: number | undefined; // 눈사람 키
    snowId: number; // 눈 아이템 ID
    hatId: number; // 모자 아이템 ID
    decoId: number; // 장식 아이템 ID
    isFollowed: boolean; // 팔로우 여부
}

export interface UnivState{
    univName : string,
    totalHeight : number,
    isRegistered : boolean,
}

export interface buddyType{
    nickname : string,
    snowmanHeight : number,
    isFollowed : boolean,
}