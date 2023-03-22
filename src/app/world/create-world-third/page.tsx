"use client";

import { Header } from "@/app/components/header/Header";
import { Pagination } from "@/app/components/header/Pagination";
import { FooterBtn } from "@/app/components/world/FooterBtn";
import { TextArea } from "@/app/components/world/TextArea";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import React from "react";

export default function CreateWorldThird() {
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
              value=""
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
              value=""
              maxLength={30}
            />
          </Styled.Form>
          <FooterBtn
            href="/world/create-world-four"
            subTitle="세계관을 만들 준비가 끝났나요?"
          >
            캐릭터 고르러 가기!
          </FooterBtn>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const CreateWorldThirdStyled = {
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

const Styled = CreateWorldThirdStyled;
