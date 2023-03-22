"use client";
import { Text } from "@/styled/typography";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";

import { Button } from "@/styled/button";
import { TopBar } from "@/app/components/onboard/TopBar";
import { StartOnBoard } from "@/app/components/onboard/Start.Onboard";

// import { TopBar } from "../components/onboard/TopBar";
// import { OnBoardContainer } from "../components/onboard/OnBoardContainer";
// import { StartOnBoard } from "../components/onboard/Start.Onboard";

export default function OnBoard() {
  return (
    <Layout.Wrapper>
      <Layout.Mobile>
        <Layout.FlexColumn>
          <TopBar></TopBar>
          {/* <OnBoardContainer></OnBoardContainer> */}
          <StartOnBoard></StartOnBoard>
        </Layout.FlexColumn>
      </Layout.Mobile>
    </Layout.Wrapper>
  );
}

const Icon = styled.div`
  width: 24px;
  aspect-ratio: 1/1;
`;

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  flex: 1;
  padding: 24px;
  position: relative;
`;

const TitleLogo = styled(Text)`
  display: inline-block;
  margin-top: 113px;
`;
const TitleText = styled(Text)`
  display: inline-block;
  margin-top: 24px;
`;

const DeemText = styled(Text)`
  display: inline-block;
  margin-top: 8px;
`;

const SubTitleContainer = styled.div`
  margin-top: 80px;
`;

const BottomButton = styled(Button)`
  width: 342px;
  height: 54px;

  position: absolute;
  background-color: ${ColorType.PRIMARY1};
  bottom: 50px;
`;
