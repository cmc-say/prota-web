"use client";

import { atom, selector, selectorFamily } from "recoil";
import WorldAPIService from "@/networks/worldAPIService";
import {
  GetHashtagListRes,
  GetWorldInfoRes,
  GetWorldListRes,
  getWorldCharacterListRes,
  GetRecommendedWorldRes,
  Hashtag,
  CheckTodoReq,
  GetRecommendedWorldTodosRes,
} from "@/networks/network";
import CharacterAPIService from "@/networks/characterAPIService";
import UserApiService from "@/networks/userAPIService";
import { Worlds } from "./atom";

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

export const AtomWorldDescription = atom<string>({
  key: "worldDescription",
  default: "",
});

export const AtomWorldHashtag = atom<string>({
  key: "worldHashtag",
  default: "",
});

export const AtomSelectWorld = atom<number | null>({
  key: "selectWorld",
  default: null,
});

export const AtomRecommendedWorlds = atom<Worlds>({
  key: "atomRecommendedWorlds",
  default: [],
});

export const AtomRecommendWorldSelector = selector<GetRecommendedWorldRes>({
  key: "recommendWorldSelector",
  get: async () => {
    const service = new WorldAPIService();

    const recWorld: GetRecommendedWorldRes =
      await service.getRecommendedWorld();

    return recWorld || [];
  },
});

export const AtomRecommendedTodo = atom<string[]>({
  key: "atomRecommendedTodo",
  default: [],
});

export const AtomRecommendTodo = selector<GetRecommendedWorldTodosRes>({
  key: "recommendTodo",
  get: async ({ get }) => {
    const service = new WorldAPIService();

    const id = get(AtomSelectWorld);

    if (!id) {
      return [];
    }

    const recWorld: GetRecommendedWorldTodosRes =
      await service.getRecommendedWorldTodo({
        worldId: id,
      });

    return recWorld || [];
  },
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

// createWorld

export const AtomCreateWorldData = atom({
  key: "createWorldData",
  default: {
    worldName: "",
    worldUserLimit: 0,
    hashtags: [],
    worldPassword: "",
    worldNotice: "",
    todos: [],
    worldImg: "",
  },
});

// worldDetail

export const AtomWorldDetail = selectorFamily({
  key: "worldDetail",
  get:
    (worldId: number) =>
    async (): Promise<{
      world: GetWorldInfoRes;
      members: getWorldCharacterListRes;
      isMember: boolean;
    }> => {
      const service = new WorldAPIService();
      const userService = new UserApiService();
      const res = await service.getWorldInfoById({ worldId });
      const membersRes = await service.getWorldCharacters({ worldId });
      const { isMember } = await userService.isCheckCharacterExist({ worldId });

      const response = { world: res, members: membersRes, isMember };
      return response;
    },
});
