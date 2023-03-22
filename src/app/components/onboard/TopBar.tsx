import { onBoardState } from "@/app/onboard/store/onBoardStore";
import { ColorType } from "@/styled/color.type";
import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";

export const TopBar: React.FC = () => {
  const [hi, setHi] = useRecoilState(onBoardState);
  return <TopBarContainer>{hi}</TopBarContainer>;
};

const TopBarContainer = styled.div`
  width: 100%;
  height: 52px;
  padding: 14px 16px 14px 12px;
  color: ${ColorType.NEUTRAL00};
`;
