"use client";

import { Header } from "@/app/components/header/Header";
import { Pagination } from "@/app/components/header/Pagination";
import { AddCheckList } from "@/app/components/onboard/AddCheckList";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { Button } from "@/styled/button";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import React from "react";

export default function RecommendThird() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back action={<Pagination selectId={2} />} />
          <Styled.Title
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_HEAD_02}
          >
            세계관을 유지시키기 위해
            <br /> 체크리스트를 만들어요!
          </Styled.Title>
          <Styled.SubTitle
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_SUB_HEAD_01}
          >
            해당 세계관의 추천 체크리스트에요! (선택 가능)
          </Styled.SubTitle>
          <Styled.ButtonContainer>
            <Styled.CheckListButton isSelected={false}>
              <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_BODY_01}>
                혁명 전쟁 대비 힘 키우기 : 근력 운동
              </Text>
            </Styled.CheckListButton>
            <Styled.CheckListButton isSelected={false}>
              <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_BODY_01}>
                혁명 전쟁 대비 힘 키우기 : 근력 운동
              </Text>
            </Styled.CheckListButton>
            <Styled.CheckListButton isSelected={false}>
              <Text color={ColorType.NEUTRAL100} type={TextSizeType.KR_BODY_01}>
                혁명 전쟁 대비 힘 키우기 : 근력 운동
              </Text>
            </Styled.CheckListButton>
          </Styled.ButtonContainer>
          <Styled.SubTitle
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_SUB_HEAD_01}
          >
            직접 체크리스트를 만들어 볼 수 있어요!
          </Styled.SubTitle>
          <AddCheckList />
          <FooterBtn href="/world/create-world-third">다음으로</FooterBtn>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const RecommendThirdStyled = {
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
  SubTitle: styled(Text)`
    margin-bottom: 8px;
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
  `,
  CheckListButton: styled(Button)<{ isSelected: boolean }>`
    margin-top: 8px;
    width: 342px;
    height: 50px;
    background: transparent;
    border: 1px solid ${ColorType.NEUTRAL500};
    border-radius: 999px;
  `,
};

const Styled = RecommendThirdStyled;
