"use client";

import { AtomRealTimeWorld, Worlds } from "@/app/atoms/atom";
import { Header } from "@/app/components/header/Header";
import { WorldCard } from "@/app/components/world/WorldCard";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRecoilValueLoadable } from "recoil";

export default function PopularWorld() {
  const worlds = useRecoilValueLoadable(AtomRealTimeWorld);

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header
            back
            action={
              <Link href={"/demo-day/search/form"}>
                <Styled.SearchIcon
                  src="/icons/search_btn.svg"
                  width={32}
                  height={32}
                  alt="search"
                />
              </Link>
            }
          />
          <Text color={ColorType.NEUTRAL00} type={TextSizeType.KR_HEAD_03}>
            실시간 세계관 확인
          </Text>
          <Styled.WorldGapList>
            {worlds.state === "hasValue" &&
              worlds
                .getValue()
                .map((item, index) => (
                  <WorldCard key={item.worldId} data={item} />
                ))}
          </Styled.WorldGapList>
        </Styled.Container>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const PopularWorldStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  WorldGapList: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  `,
  Container: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  `,
  Title: styled(Text)``,
  SearchIcon: styled.img``,
};

const Styled = PopularWorldStyled;
