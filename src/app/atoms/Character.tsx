"use client";

import CharacterAPIService from "@/networks/characterAPIService";
import {
  GetCharacterInfoReq,
  GetCharacterInfoRes,
  GetUserCharacterRes,
} from "@/networks/network";
import UserApiService from "@/networks/userAPIService";
import { atom, selector, selectorFamily } from "recoil";

export const AtomAllCharacters = selector<GetUserCharacterRes>({
  key: "allCharacters",
  get: async (): Promise<GetUserCharacterRes> => {
    const service = new UserApiService();

    const Characters = await service.getAllCharacterList({});

    return Characters || [];
  },
});

export const AtomCharacterDetail = selectorFamily({
  key: "characterDetail",
  get: (characterId: number) => async (): Promise<GetCharacterInfoRes> => {
    const service = new CharacterAPIService();
    const res = await service.getCharacterInfo({ avatarId: characterId });

    return res;
  },
});
