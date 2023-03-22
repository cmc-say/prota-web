"use client";

import { Header } from "@/app/components/header/Header";
import { Pagination } from "@/app/components/header/Pagination";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { TextArea } from "@/app/components/world/TextArea";
import { Button } from "@/styled/button";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import React, { useState } from "react";

export default function ThirdOnBoard() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back action={<Pagination selectId={3} />} />
          <Styled.Title
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_HEAD_02}
          >
            세계관에 생명을 불어넣는
            <br /> 마지막 한 순간~!
          </Styled.Title>
          <Styled.Form>
            <Text
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              메인 소개글을 만들어주세요!
            </Text>
            <TextArea
              placeholder="세계관 멤버들은 내 세계관의 법을 따라야해요. 공지사항 및 세계관 설명을 적어주세요~!"
              value={firstValue}
              onChange={(event) => setFirstValue(event.target.value)}
              maxLength={50}
            />
          </Styled.Form>
          <Styled.Form>
            <Text
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              짧게 설명하는 해시태그를 만들어주세요!
            </Text>
            <TextArea
              placeholder="#미라클모닝 #명화 #빡세게"
              value={secondValue}
              onChange={(event) => setSecondValue(event.target.value)}
              maxLength={30}
            />
          </Styled.Form>
          <FooterBtn
            href="/onboard/make-character"
            subTitle="세계관을 만들 준비가 끝났나요?"
          >
            이제 캐릭터를 만들어봐요!
          </FooterBtn>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const MakeRecommendThirdStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  Title: styled(Text)`
    margin-bottom: 32px;
  `,
  Form: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-bottom: 16px;
  `,
};

const Styled = MakeRecommendThirdStyled;

const RecommenedCheckListContainer = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  flex: 1;
  align-items: center;
  overflow: auto;
`;
const CheckListFormContainer = styled.div`
  width: 100%;
  margin-top: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const CheckListButton = styled(Button)<{ isSelected: boolean }>`
  margin-top: 8px;
  width: 342px;
  height: 50px;

  background: transparent;

  border: 1px solid ${ColorType.NEUTRAL500};
  border-radius: 999px;
`;

const InputBox = styled.input`
  width: 100%;
  color: white;
  margin-top: 8px;
  height: 50px;
  padding: 10px;
  background: transparent;
  border: 1px solid ${ColorType.NEUTRAL500};
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

const MakeCheckListButton = styled(Button)`
  padding: 8px 14px;
  margin-top: 16px;
  background: transparent;
  width: max-content;
  height: max-content;

  border: 1px dashed ${ColorType.NEUTRAL200};
  border-radius: 32px;
`;

const BottomButtonContainer = styled.div`
  position: absolute;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 79px;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 9;
`;

const ButtomButton = styled(Button)`
  width: 342px;
  height: 54px;

  background: ${ColorType.PRIMARY1};
  border-radius: 400px;
`;
