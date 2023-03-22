import { ColorType } from "@/styled/color.type";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import React from "react";

import { Button } from "@/styled/button";
import { useRecoilState } from "recoil";
import { OnBoardStatus, onBoardState } from "@/app/onboard/store/onBoardStore";

export const StartOnBoard: React.FC = () => {
  const [_, setOnBoardState] = useRecoilState(onBoardState);

  const handleClick = () => {
    setOnBoardState(OnBoardStatus.FIRST);
  };
  return (
    <>
      <Container>
        <TitleLogo color={ColorType.PRIMARY1} type={TextSizeType.KR_HEAD_01}>
          PROTA
        </TitleLogo>
        <br />
        <TitleText color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_02}>
          지금부터 당신은
          <br />
          <Text color={ColorType.SECONDARY1} type={TextSizeType.KR_HEAD_02}>
            세계관 속 캐릭터
          </Text>
          가 됩니다.
        </TitleText>
        <br />
        <DeemText
          color={ColorType.NEUTRAL100}
          type={TextSizeType.KR_SUB_HEAD_01}
        >
          캐릭터에 열렬히 과몰입하기!
        </DeemText>
        <SubTitleContainer>
          <TitleText
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_SUB_HEAD_02}
          >
            <Text
              color={ColorType.TARTIARY1}
              type={TextSizeType.KR_SUB_HEAD_02}
            >
              내가 되고 싶은 캐릭터 컨셉
            </Text>
            을 잡아요. <br />
            다른 유저들의 캐릭터와 함께
            <br />
            재미있는 체크리스트를 달성해요!
          </TitleText>
        </SubTitleContainer>
        <BottomButton onClick={handleClick}>
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_SUB_HEAD_01}>
            바로 세계관을 만들어 볼까요?
          </Text>
        </BottomButton>
      </Container>
    </>
  );
};

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
