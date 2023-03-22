"use client";

import { Header } from "@/app/components/header/Header";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";

export default function Alarm() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back>알림 설정</Header>
          <Styled.Section>
            <Styled.Title
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_HEAD_03}
            >
              세계관 알림
            </Styled.Title>
            <Styled.Line>
              <Text
                color={ColorType.NEUTRAL100}
                type={TextSizeType.KR_SUB_HEAD_01}
              >
                다른 멤버 알림 받기
              </Text>
              <Text
                color={ColorType.NEUTRAL100}
                type={TextSizeType.KR_CAPTION_02}
              >
                토글자리
              </Text>
            </Styled.Line>
          </Styled.Section>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const AlarmStyled = {
  LWrapper: styled(Layout.Wrapper)``,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  Section: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-bottom: 40px;
  `,
  Title: styled(Text)``,
  Line: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `,
};

const Styled = AlarmStyled;
