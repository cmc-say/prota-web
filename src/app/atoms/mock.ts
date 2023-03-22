import { Worlds } from "./atom";

const worlds1 = [
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
    ],
  },
];

const worlds2 = [
  {
    worldId: 1,
    worldName: "탈모 방지 위원회",
    worldUserLimit: 20,
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
      {
        worldHashtagId: 4,
        hashtagId: 4,
        hashtagName: "풍성충",
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
];
const worlds3 = [
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
    ],
  },
];

export const mockFetch = (id: number): Worlds => {
  if (id === 0) {
    return worlds1;
  } else if (id === 1) {
    return worlds2;
  } else {
    return worlds3;
  }
};
