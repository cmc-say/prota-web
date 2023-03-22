import { OnBoardStatus, onBoardState } from "@/app/onboard/store/onBoardStore";
import { useRecoilState } from "recoil";
import { StartOnBoard } from "./Start.Onboard";
import { FirstOnBoard } from "./First.Onboard";
import { SecondOnBoard } from "./Second.Onboard";
import { ThirdOnBoard } from "./Third.Onboard";
import { MakeCharacterOnBoard } from "./MakeCharacter";

export const OnBoardContainer = () => {
  const [state, _] = useRecoilState(onBoardState);

  switch (state) {
    case OnBoardStatus.START:
      return <StartOnBoard></StartOnBoard>;
    case OnBoardStatus.FIRST:
      return <FirstOnBoard></FirstOnBoard>;
    case OnBoardStatus.SECOND:
      return <SecondOnBoard></SecondOnBoard>;
    case OnBoardStatus.THIRD:
      return <ThirdOnBoard></ThirdOnBoard>;
    case OnBoardStatus.MAKE_CHARACTER:
      return <MakeCharacterOnBoard></MakeCharacterOnBoard>;
    default:
      return <StartOnBoard></StartOnBoard>;
  }
};
