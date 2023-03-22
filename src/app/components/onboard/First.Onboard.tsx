import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import React from "react";
import { WorldRectBox } from "../world/WorldRectBox";
import { Button } from "@/styled/button";
import { useRecoilState } from "recoil";
import { OnBoardStatus, onBoardState } from "@/app/onboard/store/onBoardStore";
import { useRouter } from "next/navigation";

export const FirstOnBoard: React.FC = () => {
  const router = useRouter();

  const [_, setStatus] = useRecoilState(onBoardState);
  const onChoiceClicked = () => {
    setStatus(OnBoardStatus.SECOND);
  };
  return (
    <>
      <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_02}>
        세계관 추천 목록이에요.
      </Text>
      <ScrollContainer>
        <GridContainer>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
          <WorldRectBox title="hi" imageSrc=""></WorldRectBox>
        </GridContainer>
        <BottomButtonContainer>
          <DIYBottomButton>
            <Text
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              직접 만들래요!
            </Text>
          </DIYBottomButton>
          <SelectedBottomButton onClick={onChoiceClicked}>
            <Text
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              선택했어요!
            </Text>
          </SelectedBottomButton>
        </BottomButtonContainer>
        <BottomScrollBlur></BottomScrollBlur>
      </ScrollContainer>
    </>
  );
};

const ScrollContainer = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: auto;
  padding-bottom: 120px;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  flex: 1;
`;

const BottomButtonContainer = styled.div`
  position: absolute;
  width: max-content;
  height: 54px;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 9;
`;

const BottomButton = styled(Button)`
  width: 164px;
  height: 54px;
`;

const DIYBottomButton = styled(BottomButton)`
  margin-right: 16px;
  background: ${ColorType.NEUTRAL300};
`;
const SelectedBottomButton = styled(BottomButton)`
  background: ${ColorType.PRIMARY1};
`;

const BottomScrollBlur = styled.div`
  position: fixed;
  width: 100%;
  height: 148px;
  bottom: 0;

  background: linear-gradient(180deg, rgba(21, 22, 28, 0) 0%, #15161c 100%);
`;
