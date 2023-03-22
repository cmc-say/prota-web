import { atom } from "recoil";

export enum OnBoardStatus {
  START = "START",
  FIRST = "FIRST",
  SECOND = "SECOND",
  THIRD = "THIRD",
  MAKE_CHARACTER = "MAKE_CHARACTER",
}

export const onBoardState = atom({
  key: "onBoardState",
  default: OnBoardStatus.START,
});
