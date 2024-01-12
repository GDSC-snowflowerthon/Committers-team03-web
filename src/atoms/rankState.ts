import { atom } from "recoil";

export const rankState = atom<number | string>({ key: "rankState", default: 123 });
export const profileNameState = atom({ key: "profileNameState", default: "minsung123" });
