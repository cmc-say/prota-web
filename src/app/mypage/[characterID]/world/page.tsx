"use client";

import { ProgressBar } from "@/app/components/ProgressBar";
import { Header } from "@/app/components/header/Header";
import { WorldCard } from "@/app/components/world/WorldCard";
import { mockupData } from "@/app/world/my-world/page";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Link from "next/link";

type Props = {
  params: {
    characterID: string;
  };
};

export default function MyCharacterWorld({ params: { characterID } }: Props) {
  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header
            back
            action={
              <Link href={"/mypage/app-setting"}>
                <Styled.MenuIcon src="/icons/menu_btn.svg" alt="menu" />
              </Link>
            }
          >
            대머리
          </Header>
          <Styled.Title
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_HEAD_03}
          >
            캐릭터 과몰입 그래프
          </Styled.Title>
          <ProgressBar percent={20} />
          <Styled.SubTitle
            color={ColorType.NEUTRAL00}
            type={TextSizeType.KR_HEAD_03}
          >
            참여 중인 세계관 (2)
          </Styled.SubTitle>
          <Styled.WorldGapList>
            {mockupData.worlds.data.map((item) => (
              <WorldCard key={item.worldId} data={item} />
            ))}
          </Styled.WorldGapList>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const MyCharacterWorldStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
  `,
  Title: styled(Text)`
    margin-bottom: 16px;
  `,
  SubTitle: styled(Text)`
    margin-top: 72px;
    margin-bottom: 16px;
  `,
  WorldGapList: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  `,
  MenuIcon: styled.img`
    width: 24px;
    height: 24px;
  `,
};

const Styled = MyCharacterWorldStyled;
