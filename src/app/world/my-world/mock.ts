
export const mockupData = {
  characters: {
    status: 200,
    success: true,
    message: "정보 조회 성공",
    data: [
      {
        characterId: 1,
        characterName: "메타몽",
        characterImg: "/public/images/meta_mock.png",
        characterMessage: "캐릭터 상태메세지",
      },
      {
        characterId: 2,
        characterName: "대머리",
        characterImg: "/public/images/munk_avatar_mock.png",
        characterMessage: "캐릭터 상태메세지",
      },
      {
        characterId: 3,
        characterName: "짱구",
        characterImg: "/public/images/sinnoske_avatar_mock.png",
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
