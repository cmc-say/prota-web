"use client";

import { atom, selector } from "recoil";
import { mockFetch } from "./mock";
import WorldAPIService from "@/networks/worldAPIService";

type Characters = {
  characterId: number;
  characterName: string;
  characterImg: string;
  characterMessage: string;
}[];

export type Worlds = {
  worldId: number;
  worldName: string;
  worldUserLimit: number;
  worldImg: string;
  worldStartDate: string;
  worldEndDate: string;
  hashtags: {
    worldHashtagId: number;
    hashtagId: number;
    hashtagName: string;
  }[];
  worldHostUserId: number;
  worldNotice: string;
  worldPassword: string;
  worldAvatars: {
    worldAvatarId: number;
    worldId: number;
    avatarId: number;
  }[];
}[];

type CharacterIdWorlds = {
  characterId: number;
  worlds: Worlds;
}[];

export type LoginRequired = {
  deviceToken: string;
  socialId: string;
  socialType: "kakao" | "apple";
};

export const AtomSelectedCharacterIdState = atom<number>({
  key: "selectedCharacterId",
  default: 0,
});

export const AtomCharacters = atom<Characters>({
  key: "atomCharacters",
  default: [],
});

export const AtomCharacterIdWorlds = atom<CharacterIdWorlds>({
  key: "atomCharacterIdWorlds",
  default: [],
});

export const AtomCharacterWorldsSelector = selector({
  key: "characterWorldsSelector",
  get: ({ get }) => {
    const characterId = get(AtomSelectedCharacterIdState);
    const characterIdWorlds = get(AtomCharacterIdWorlds);
    const selectedWorlds = characterIdWorlds.find(
      (item) => item.characterId === characterId
    )?.worlds;
    return selectedWorlds ?? [];
  },
});

export const AtomAddCharacterWorld = selector({
  key: "addCharacterWorldsSelector",
  get: ({ get }) => {
    const characterId = get(AtomSelectedCharacterIdState);
    return characterId;
  },
  // set: async ({ set, get }, newValue) => {
  set: ({ set, get }, newValue) => {
    if (typeof newValue === "number") {
      const characterWorlds = get(AtomCharacterIdWorlds);
      // const characterId = get(AtomSelectedCharacterIdState);
      const characterId = newValue;
      if (characterWorlds.some((cw) => cw.characterId === characterId)) {
        return;
      }

      const worlds = mockFetch(characterId);
      // world 실 데이터 불러오기
      // const data = await getCharacterIdWorld();
      set(AtomCharacterIdWorlds, [
        ...characterWorlds,
        {
          characterId,
          worlds,
        },
      ]);
    }
  },
});

export const AtomRealTimeWorld = selector<Worlds>({
  key: "realTimeWorldSelector",
  get: async ({ get }): Promise<Worlds> => {
    const service = new WorldAPIService();
    const realTimeWorld: Worlds = await service.getAllWorlds({
      type: "recent",
    });
    return realTimeWorld;
  },
});
