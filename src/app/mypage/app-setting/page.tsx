"use client";

import { Header } from "@/app/components/header/Header";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Link from "next/link";

export default function AppSetting() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back />
          <Styled.Section>
            <Styled.Title
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_HEAD_03}
            >
              앱 설정
            </Styled.Title>
            <Link href={"/mypage/app-setting/alarm"}>
              <Text
                color={ColorType.NEUTRAL100}
                type={TextSizeType.KR_SUB_HEAD_01}
              >
                알림 설정
              </Text>
            </Link>
          </Styled.Section>
          <Styled.Section>
            <Styled.Title
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_HEAD_03}
            >
              고객센터
            </Styled.Title>
            <Styled.Line>
              <Text
                color={ColorType.NEUTRAL100}
                type={TextSizeType.KR_SUB_HEAD_01}
              >
                앱 버전
              </Text>
              <Text
                color={ColorType.NEUTRAL100}
                type={TextSizeType.KR_CAPTION_02}
              >
                1.1.1
              </Text>
            </Styled.Line>
          </Styled.Section>
          <Styled.Section>
            <Styled.Title
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_HEAD_03}
            >
              계정 설정
            </Styled.Title>
            <Text
              color={ColorType.NEUTRAL100}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              이용 제한 안내
            </Text>
            <Text
              color={ColorType.NEUTRAL100}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              회원 탈퇴
            </Text>
            <Text
              color={ColorType.NEUTRAL100}
              type={TextSizeType.KR_SUB_HEAD_01}
            >
              로그아웃
            </Text>
          </Styled.Section>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const AppSettingStyled = {
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

const Styled = AppSettingStyled;
