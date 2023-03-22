"use client";

import { GetUserCharacterRes } from "@/networks/network";
import UserApiService from "@/networks/userAPIService";
import { atom, selector } from "recoil";

export const AtomAllCharacters = selector<GetUserCharacterRes>({
  key: "allCharacters",
  get: async (): Promise<GetUserCharacterRes> => {
    const service = new UserApiService();

    const Characters = await service.getAllCharacterList({});
    console.log(Characters);

    return Characters || [];
  },
});
