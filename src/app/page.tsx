"use client";
import { Text, TextSizeType } from "@/styled/typography";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import styled from "@emotion/styled";
import Image from "next/image";
import { FooterBtn } from "./components/world/FooterBtn";
import { Header } from "./components/header/Header";

export default function OnBoard() {
  return (
    <Styled.LWrapper>
      <Alert></Alert>
      <Layout.Mobile>
        <Styled.Container>
          <Header />
          <Styled.TitleIcon
            src={"/icons/PROTA.svg"}
            alt="PROTA"
            width={133}
            height={21}
          />
          <Styled.Description
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_HEAD_02}
          >
            지금부터 당신은
            <br />
            <Text color={ColorType.SECONDARY1} type={TextSizeType.KR_HEAD_02}>
              세계관 속 캐릭터
            </Text>
            가 됩니다.
          </Styled.Description>
          <Styled.DeemText
            color={ColorType.NEUTRAL100}
            type={TextSizeType.KR_SUB_HEAD_01}
          >
            캐릭터에 열렬히 과몰입하기!
          </Styled.DeemText>
          <Styled.SubTitleContainer>
            <Styled.Icon
              src={"/icons/onboard_star.svg"}
              alt="star"
              width={24}
              height={24}
            />
            <Styled.SubTitle
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
            </Styled.SubTitle>
          </Styled.SubTitleContainer>
          <FooterBtn href="/demo-day/make-character">
            바로 캐릭터에 과몰입 해보세요!
          </FooterBtn>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const PopUp = () => {
  return <></>;
};

const Alert = () => {
  return <AlertStyled.Container>123</AlertStyled.Container>;
};

const AlertStyled = {
  Container: styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    height: 100px;
    width: 100px;
  `,
};

const OnBoardStyled = {
  LWrapper: styled(Layout.Wrapper)``,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
  `,
  TitleIcon: styled(Image)`
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
  Icon: styled(Image)``,
};

const Styled = OnBoardStyled;
