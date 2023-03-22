"use client";
import { Text, TextSizeType } from "@/styled/typography";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import { Header } from "../components/header/Header";
import Image from "next/image";
import { FooterBtn } from "../components/world/FooterBtn";

export default function CreateWorld() {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header back></Header>
          <Styled.Icon
            src={"/icons/create_star.svg"}
            alt="star"
            width={64}
            height={64}
          />
          <Styled.Description
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_HEAD_02}
          >
            지금부터 당신은
            <br />
            <Text color={ColorType.SECONDARY1} type={TextSizeType.KR_HEAD_02}>
              한 달 동안
            </Text>
            <br />
            세계관의 주인이 됩니다.
          </Styled.Description>
          <Styled.DeemText
            color={ColorType.NEUTRAL100}
            type={TextSizeType.KR_SUB_HEAD_01}
          >
            기간은 딱 한 달! 캐릭터에 열렬히 과몰입하기!
          </Styled.DeemText>
          <Styled.SubTitleContainer>
            <Text
              color={ColorType.TARTIARY1}
              type={TextSizeType.KR_SUB_HEAD_02}
            >
              🤙 기억해주세요!
            </Text>
            <Styled.SubTitle
              color={ColorType.NEUTRAL00}
              type={TextSizeType.KR_SUB_HEAD_02}
            >
              세계관에 참여하는 모든 멤버들에게 <br />
              유쾌하고, 재미있고, 기분 좋은 <br />
              안전한 세계관을 만들어 가요 😉
            </Styled.SubTitle>
          </Styled.SubTitleContainer>
          <FooterBtn href="/world/create-world-first">세계관 만들기 시작!</FooterBtn>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const CreateWorldStyled = {
  LWrapper: styled(Layout.Wrapper)``,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  Title: styled(Image)`
    margin-top: 113px;
    margin-bottom: 24px;
  `,
  Description: styled(Text)``,
  DeemText: styled(Text)`
    display: inline-block;
    margin-top: 8px;
  `,
  SubTitleContainer: styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  `,
  SubTitle: styled(Text)``,
  Icon: styled(Image)`
    margin: 18px 0 16px;
  `,
};

const Styled = CreateWorldStyled;
