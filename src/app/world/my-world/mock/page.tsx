"use client";

import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import { WorldCard } from "../../../components/world/WorldCard";
import { Layout } from "@/styled/layout";
import { WorldCharacter } from "../../../components/world/WorldCharacter";
import { CreateWorld } from "../../../components/world/CreateWorld";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  AtomAddCharacterWorld,
  AtomCharacterWorldsSelector,
  AtomCharacters,
  AtomSelectedCharacterIdState,
} from "@/app/atoms/atom";

export const mockupData = {
  characters: {
    status: 200,
    success: true,
    message: "정보 조회 성공",
    data: [
      {
        characterId: 1,
        characterName: "메타몽",
        characterImg: "/images/meta_mock.png",
        characterMessage: "캐릭터 상태메세지",
      },
      {
        characterId: 2,
        characterName: "대머리",
        characterImg: "/images/munk_avatar_mock.png",
        characterMessage: "캐릭터 상태메세지",
      },
      {
        characterId: 3,
        characterName: "짱구",
        characterImg: "/images/sinnoske_avatar_mock.png",
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
        worldName: "좀비와 함께 살자",
        worldUserLimit: 10,
        worldImg: "/icons/image.svg",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 3,
            hashtagId: 3,
            hashtagName: "좀비",
          },
          {
            worldHashtagId: 4,
            hashtagId: 4,
            hashtagName: "생존",
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
        ],
      },
      {
        worldId: 2,
        worldName: "세계관 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 1,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 2,
            hashtagId: 2,
            hashtagName: "해시태그2",
          },
          {
            worldHashtagId: 3,
            hashtagId: 3,
            hashtagName: "해시태그3",
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
        ],
      },
      {
        worldId: 3,
        worldName: "세계관 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 1,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 2,
            hashtagId: 2,
            hashtagName: "해시태그2",
          },
          {
            worldHashtagId: 3,
            hashtagId: 3,
            hashtagName: "해시태그3",
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
        ],
      },
      {
        worldId: 4,
        worldName: "세계관 둘 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 4,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 4,
            hashtagId: 5,
            hashtagName: "해시태그4",
          },
          {
            worldHashtagId: 5,
            hashtagId: 6,
            hashtagName: "해시태그5",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 2,
            worldId: 2,
            avatarId: 1,
          },
        ],
      },
      {
        worldId: 5,
        worldName: "세계관 둘 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 4,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 4,
            hashtagId: 5,
            hashtagName: "해시태그4",
          },
          {
            worldHashtagId: 5,
            hashtagId: 6,
            hashtagName: "해시태그5",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 2,
            worldId: 2,
            avatarId: 1,
          },
        ],
      },
      {
        worldId: 6,
        worldName: "세계관 둘 하나",
        worldUserLimit: 10,
        worldImg: "url",
        worldStartDate: "2023-02-21T00:00:00",
        worldEndDate: "2023-03-21T00:00:00",
        hashtags: [
          {
            worldHashtagId: 1,
            hashtagId: 4,
            hashtagName: "해시태그1",
          },
          {
            worldHashtagId: 4,
            hashtagId: 5,
            hashtagName: "해시태그4",
          },
          {
            worldHashtagId: 5,
            hashtagId: 6,
            hashtagName: "해시태그5",
          },
        ],
        worldHostUserId: 1,
        worldNotice: "공지",
        worldPassword: "123",
        worldAvatars: [
          {
            worldAvatarId: 2,
            worldId: 2,
            avatarId: 1,
          },
        ],
      },
    ],
  },
};

const mockCharacters = {
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
      characterImg: "/images/avatar_mock/blue_avatar.png",
      characterMessage: "캐릭터 상태메세지",
    },
  ],
};

export default function World() {
  const [select, setSelect] = useRecoilState(AtomSelectedCharacterIdState);
  const [characters, setCharacters] = useRecoilState(AtomCharacters);
  const worlds = useRecoilValue(AtomCharacterWorldsSelector);
  const setCharacterWorlds = useSetRecoilState(AtomAddCharacterWorld);

  useEffect(() => {
    if (mockCharacters.status) {
      setCharacters(mockCharacters.data);
    }
  }, []);

  useEffect(() => {
    setCharacterWorlds(select);
  }, [select, characters]);

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Layout.FlexColumn>
          <Styled.Container>
            <Styled.CharacterList>
              {mockupData.characters.data.map((item, index) => (
                <WorldCharacter
                  onClick={() => setSelect(index)}
                  isSelected={select === index}
                  key={item.characterId}
                  src={item.characterImg}
                  value={item.characterName}
                />
              ))}
              <WorldCharacter src={"/icons/character_add.svg"} value={"추가"} />
            </Styled.CharacterList>
            <Styled.WorldGapList>
              <WorldCard data={mockupData.worlds.data[0]} />
              {worlds?.map((item: any) => (
                <WorldCard key={item.worldId} data={item} />
              ))}
              <CreateWorld />
            </Styled.WorldGapList>
          </Styled.Container>
        </Layout.FlexColumn>
      </Layout.Mobile>
    </Styled.LWrapper>
  );
}

const WorldStyled = {
  LWrapper: styled(Layout.Wrapper)`
    overflow-y: scroll;
  `,
  Container: styled.div`
    padding: 24px;
  `,
  WorldGapList: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  `,
  CharacterList: styled.div`
    display: flex;
    column-gap: 16px;
    margin-bottom: 16px;
  `,
};

const Styled = WorldStyled;
