"use client";

import { atom, selector } from "recoil";
import WorldAPIService from "@/networks/worldAPIService";
import { GetHashtagListRes, GetWorldListRes } from "@/networks/network";
import CharacterAPIService from "@/networks/characterAPIService";

// Search
export const AtomPopularHashtagSelector = selector<GetHashtagListRes>({
  key: "popularHashtag",
  get: async (): Promise<GetHashtagListRes> => {
    const service = new WorldAPIService();
    const popularHashtag = await service.getPopularHashtag();
    return popularHashtag;
  },
});

export const AtomSearchKeyword = atom<string>({
  key: "searchKeyword",
  default: "",
});

export const AtomSearchWorldSelector = selector<GetWorldListRes>({
  key: "searchWorldSelector",
  get: async ({ get }) => {
    const service = new WorldAPIService();
    const keyword = get(AtomSearchKeyword);
    if (!keyword) return [];

    const searchWorld: GetWorldListRes = await service.searchWorld({
      keyword,
    });

    return searchWorld || [];
  },
});

// characterId to Worlds
export const AtomSelectCharacterId = atom({
  key: "selectCharacterId",
  default: 0,
});

export const AtomCharacterIdTOWorlds = selector({
  key: "characterIdToWorlds",
  get: async ({ get }): Promise<GetWorldListRes | []> => {
    const service = new CharacterAPIService();
    const characterId = get(AtomSelectCharacterId);

    const worlds = await service.getAllCharacterWorlds({
      avatarId: characterId,
    });

    return worlds || [];
  },
});
