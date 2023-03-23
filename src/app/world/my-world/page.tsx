"use client";

import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import { WorldCard } from "../../components/world/WorldCard";
import { Layout } from "@/styled/layout";
import { WorldCharacter } from "../../components/world/WorldCharacter";
import { CreateWorld } from "../../components/world/CreateWorld";
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import {
  AtomAddCharacterWorld,
  AtomCharacterWorldsSelector,
  AtomCharacters,
  AtomSelectedCharacterIdState,
} from "@/app/atoms/atom";
import { mockupData } from "./mock";
import { AtomAllCharacters } from "@/app/atoms/Character";
import {
  AtomCharacterIdTOWorlds,
  AtomSelectCharacterId,
} from "@/app/atoms/world";

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
      characterImg: "/static/images/avatar_mock/blue_avatar.png",
      characterMessage: "캐릭터 상태메세지",
    },
  ],
};

export default function World() {
  const characters = useRecoilValueLoadable(AtomAllCharacters);
  const [select, setSelect] = useRecoilState(AtomSelectCharacterId);
  const worlds = useRecoilValueLoadable(AtomCharacterIdTOWorlds);

  return (
    <Styled.LWrapper>
      <Layout.Mobile>
        <Layout.FlexColumn>
          <Styled.Container>
            <Styled.CharacterList>
              {characters.state === "hasValue" &&
                characters.getValue().length &&
                characters
                  .getValue()
                  .map((item, index) => (
                    <WorldCharacter
                      onClick={() => setSelect(index)}
                      isSelected={select === index}
                      key={item.avatarId}
                      src={item.avatarImg}
                      value={item.avatarName}
                    />
                  ))}
              <WorldCharacter src={"/icons/character_add.svg"} value={"추가"} />
            </Styled.CharacterList>
            <Styled.WorldGapList>
              {worlds.state === "hasValue" &&
                worlds.getValue().length &&
                worlds
                  .getValue()
                  .map((item: any) => (
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
