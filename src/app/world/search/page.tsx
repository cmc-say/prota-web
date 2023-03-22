"use client";

import { AtomRealTimeWorld, Worlds } from "@/app/atoms/atom";
import { Header } from "@/app/components/header/Header";
import { WorldCard } from "@/app/components/world/WorldCard";
import { ColorType } from "@/styled/color.type";
import { Layout } from "@/styled/layout";
import { Text, TextSizeType } from "@/styled/typography";
import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const mockupData = {
  characters: {
    status: 200,
    success: true,
    message: "정보 조회 성공",
    data: [
      {
        characterId: 0,
        characterName: "메타몽",
        characterImg: "/icons/메타몽.svg",
        characterMessage: "캐릭터 상태메세지",
      },
      {
        characterId: 1,
        characterName: "대머리",
        characterImg: "/icons/대머리.svg",
        characterMessage: "캐릭터 상태메세지",
      },
      {
        characterId: 2,
        characterName: "짱구",
        characterImg: "/icons/짱구.svg",
        characterMessage: "캐릭터 상태메세지",
      },
    ],
  },
  worlds: {
    statusCode: 200,
    message: "캐릭터가 가지고 있는 세계관 조회에 성공하였습니다.",
    data: [
      {
        worldId: 1,
        worldName: "명화가 살아있다.",
        worldUserLimit: 10,
        worldImg: "/icons/명화1.svg",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 1,
            hashtagName: "명화모임",
          },
          {
            worldHashtagId: 2,
            hashtagId: 2,
            hashtagName: "자기관리",
          },
          {
            worldHashtagId: 3,
            hashtagId: 3,
            hashtagName: "공부",
          },
          {
            worldHashtagId: 4,
            hashtagId: 4,
            hashtagName: "외국어",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 1,
            worldId: 1,
            avatarId: 1,
          },
          {
            worldAvatarId: 3,
            worldId: 1,
            avatarId: 2,
          },
          {
            worldAvatarId: 4,
            worldId: 1,
            avatarId: 3,
          },
          {
            worldAvatarId: 3,
            worldId: 1,
            avatarId: 2,
          },
          {
            worldAvatarId: 4,
            worldId: 1,
            avatarId: 3,
          },
          {
            worldAvatarId: 3,
            worldId: 1,
            avatarId: 2,
          },
          {
            worldAvatarId: 4,
            worldId: 1,
            avatarId: 3,
          },
        ],
      },
      {
        worldId: 2,
        worldName: "탈모 방지 위원회",
        worldUserLimit: 13,
        worldImg: "/icons/명화2.svg",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 1,
            hashtagName: "탈모",
          },
          {
            worldHashtagId: 2,
            hashtagId: 2,
            hashtagName: "풍성한 머리",
          },
          {
            worldHashtagId: 3,
            hashtagId: 3,
            hashtagName: "미라클",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 1,
            worldId: 1,
            avatarId: 1,
          },
          {
            worldAvatarId: 3,
            worldId: 1,
            avatarId: 2,
          },
          {
            worldAvatarId: 4,
            worldId: 1,
            avatarId: 3,
          },
          {
            worldAvatarId: 1,
            worldId: 1,
            avatarId: 1,
          },
          {
            worldAvatarId: 3,
            worldId: 1,
            avatarId: 2,
          },
          {
            worldAvatarId: 4,
            worldId: 1,
            avatarId: 3,
          },
          {
            worldAvatarId: 1,
            worldId: 1,
            avatarId: 1,
          },
          {
            worldAvatarId: 3,
            worldId: 1,
            avatarId: 2,
          },
          {
            worldAvatarId: 4,
            worldId: 1,
            avatarId: 3,
          },
        ],
      },
    ],
  },
};

export default function PopularWorld() {
  const worlds = useRecoilValue(AtomRealTimeWorld);

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Styled.Container>
          <Header
            action={
              <Link href={"/world/search/form"}>
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
            {worlds.map((item, index) => (
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
