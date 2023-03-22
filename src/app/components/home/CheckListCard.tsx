import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import React, { useState } from "react";
import CheckBox from "./CheckBox";
import { Button } from "@/styled/button";

interface CheckListCardProps {
  imageSrc: string;
  characterName: string;
  characterDescription: string;
  index: number;
}

export const CheckListCard: React.FC<CheckListCardProps> = ({
  characterName,
  characterDescription,
  index,
}) => {
  const [selectedCheckList, setCheckList] = useState<string[]>([]);
  const TextList = [
    "📚(명화 역할) : 8시간 가만히 공부하기",
    "🧘‍♀️(박물관이 살아있다) : 스트레칭하기",
    "🤗(명화 케어) : 매일 선크림 바르기",
    "📚(관객과 소통) : 외국어 공부 2시간하기",
  ];

  return (
    <CardContainer>
      <Text color={ColorType.NEUTRAL200} type={TextSizeType.KR_CAPTION_01}>
        캐릭터 0{index}
      </Text>
      <TextWrapper.NameText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_HEAD_01}
      >
        {characterName}
      </TextWrapper.NameText>
      <TextWrapper.DescriptionText
        color={ColorType.NEUTRAL00}
        type={TextSizeType.KR_SUB_HEAD_02}
      >
        {characterDescription}
      </TextWrapper.DescriptionText>

      <CheckListWrapper>
        <TextWrapper.CheckText
          color={ColorType.NEUTRAL00}
          type={TextSizeType.KR_HEAD_02}
        >
          CheckList
        </TextWrapper.CheckText>
        {TextList.map((text) => (
          <CheckListItem
            onClick={() =>
              setCheckList((prev) => {
                const existNumber = prev.findIndex((check) => check === text);
                let newList = [...prev];

                if (existNumber !== -1) {
                  newList.splice(existNumber, 1);
                } else {
                  newList.push(text);
                }

                return newList;
              })
            }
          >
            <CheckBox
              isSelected={
                selectedCheckList.findIndex((check) => check === text) !== -1
              }
              text={text}
            ></CheckBox>
          </CheckListItem>
        ))}

        <ButtonButtonContainer>
          <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_CAPTION_01}>
            오늘 달성 못 해도 괜찮아요. 재미있게 달성해요.
          </Text>
          <TodayWordButton
            isAllDone={TextList.length === selectedCheckList.length}
          >
            <Text
              color={
                TextList.length === selectedCheckList.length
                  ? ColorType.NEUTRAL00
                  : ColorType.NEUTRAL100
              }
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              오늘의 한 마디 작성할래요
            </Text>
          </TodayWordButton>
        </ButtonButtonContainer>
      </CheckListWrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin: 0px auto;
  position: relative;
  width: 342px;
  height: 536px;
  border-radius: 16px;
  padding: 24px 0px 16px;
  background-color: ${ColorType.NEUTRAL500};
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const TextWrapper = {
  NameText: styled(Text)`
    margin-top: 10px;
  `,
  DescriptionText: styled(Text)`
    margin-top: 4px;
  `,
  RouteText: styled(Text)`
    margin-top: 42px;
  `,
  CheckText: styled(Text)`
    margin-top: 30px;
    margin-bottom: 13px;
  `,
};

const CheckListWrapper = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
`;

const CheckListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
`;

const ButtonButtonContainer = styled.div`
  position: absolute;
  bottom: 16px;
  width: 312px;
  height: 75px;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TodayWordButton = styled(Button)<{ isAllDone: boolean }>`
  width: 100%;
  height: 50px;

  background: ${({ isAllDone }) =>
    isAllDone ? ColorType.PRIMARY1 : ColorType.NEUTRAL300};
`;
