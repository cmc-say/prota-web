"use client";

import { atom, selector } from "recoil";
import WorldAPIService from "@/networks/worldAPIService";
import { GetHashtagListRes, GetWorldListRes } from "@/networks/network";

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
    console.log("keyword", keyword);

    const searchWorld: GetWorldListRes = await service.searchWorld({
      keyword,
    });
    console.log(searchWorld);

    return searchWorld || [];
  },
});
