type World = {
  worldId: number;
  worldName: string;
  worldUserLimit: number;
  worldImg: string;
  worldStartDate: string;
  worldEndDate: string;
  hashtags: Hashtag[];
  worldHostUserId: number;
  worldNotice: string;
  worldPassword: string;
  worldAvatars: WorldAvatar[];
  todos: Todo[];
};

export type Hashtag = {
  worldHashtagId: number;
  hashtagId: number;
  hashtagName: string;
};

export type GetHashtagListRes = Hashtag[];

type WorldAvatar = {
  worldAvatarId: number;
  worldId: number;
  avatarId: number;
};

type Todo = {
  todoId: number;
  todoContent: string;
};

type RecommendedWorld = {
  recommendedWorldId: number;
  recommendedWorldName: string;
  recommendedWorldImg: string;
};

type RecommendedAlarm = {
  recommendedAlarmId: number;
  recommendedAlarmContent: string;
};

type Avatar = {
  avatarId: number;
  avatarName: string;
  avatarImg: string;
  avatarMessage: string;
  userId: number;
};

export type WordToday = {
  wordtodayId: number;
  wordtodayContent: string;
  avatarId: number;
};

export type GetRecommendedAlarmRes = {
  recommendedAlarmId: number;
  recommendedAlarmContent: string;
};
export type SendMessageReq = {
  senderAvatarId: number;
  receiverAvatarId: number;
  alarmMessage: string;
};

export type LoginReq = {
  deviceToken: string;
  socialId: string;
  socialType: string;
};
export type LoginRes = {
  accessToken: string;
  isSignuped: boolean;
};

export type LogoutReq = {};
export type LogoutRes = {};

export type ReIssueReq = {};
export type ReIssueRes = {};

export type DeleteUserReq = {};
export type DeleteUserRes = {};

export type ReportUserReq = {
  userId: number;
  reportType: string;
};
export type ReportUserRes = {};

export type BlockUserReq = {
  userId: number;
};
export type BlockUserRes = {};

export type CheckCharacterExistReq = {
  worldId: number;
};
export type CheckCharacterExistRes = {
  isMember: boolean;
};

export type CheckTodoReq = {
  avatarId: number;
  worldId: number;
  todoId: number;
};

export type GetAvatarAllWorldTodos = Todo[];

export type CreateWorldReq = {
  file: any;
  worldName: string;
  worldUserLimit: number;
  hashtags: string[];
  worldPassword: string;
  worldNotice: string;
  todos: string[];
};
export type CreateWorldRes = {};

export type GetWorldListReq = {};
export type GetWorldListRes = World[];

export type getWorldCharacterListReq = {};
export type getWorldCharacterListRes = (Avatar & {
  wordtodayId: number | null;
})[];

export type GetAllWorldListReq = {
  type: string;
};
export type GetAllWorldListRes = World[];

export type DeleteWorldReq = {
  worldId: number;
};
export type DeleteWorldRes = {};

export type PutWorldInfoReq = {};
export type PutWorldInfoRes = {};

export type PostWorldImgReq = {};
export type PostWorldImgRes = {};

export type GetWorldInfoReq = {
  worldId: number;
};
export type GetWorldInfoRes = World;

export type SearchWorldReq = {
  keyword: string;
};
export type SearchWorldRes = World[];

export type GetUserCharactersReq = {};
export type GetUserCharacterRes = Avatar[];

export type ParticipateWorldReq = {
  worldId: number;
  avatarId: number;
};
export type ParticipateWorldRes = {
  isMember: boolean;
};

export type AddCharacterReq = {
  file: any;
  avatarName: string;
  avatarMessage: string;
};
export type AddCharacterRes = {};

export type GetRecommendedWorldReq = {};
export type GetRecommendedWorldRes = RecommendedWorld[];

export type PostCharacterImgReq = {};
export type PostCharacterImgRes = {};

export type PutCharacterInfoReq = {};
export type PutCharacterInfoRes = {};

export type GetCharacterInfoReq = {
  avatarId: number;
};
export type GetCharacterInfoRes = Avatar;

export type GetProgressReq = {};
export type GetProgressRes = {};

export type GetWorldAttendanceReq = {};
export type GetWorldAttendanceRes = {};

export type DeleteCharacterReq = {
  avatarId: number;
};
export type DeleteCharacterRes = {};

export type CreateHashTagReq = {};
export type CreateHashTagRes = {};

export type SearchHashTagReq = {};
export type SearchHashTagRes = {
  hashtagId: 0;
  hashtagName: "string";
}[];

export type GetTodayWordReq = {
  avatarId: number;
  worldId: number;
  wordTodayId: number;
};
export type GetTodayWordRes = WordToday;

export type CreateWordTodayReq = {
  avatarId: number;
  worldId: number;
  wordTodayContent: string;
};
export type CreateWordTodayRes = {};

export type GetWorldTodoProgressReq = {};
export type GetWorldTodoProgressRes = {};

export type GetRecommendedWorldTodosReq = {};
export type GetRecommendedWorldTodosRes = {
  recommendedTodoId: number;
  recommendedTodoContent: string;
  recommendedWorld: RecommendedWorld;
}[];

export type GetAlarmRecommendedReq = {};
export type GetAlarmRecommendedRes = RecommendedAlarm[];

export type EditCharacterInfoReq = {
  avatarId: number;
  avatarName: string;
  avatarMessage: string;
};
export type UpdateCharacterImgReq = {
  avatarId: number;
  file: any;
};

export type UpdateWorldImgReq = {
  worldId: number;
  file: any;
};

export type EditWorldInfoReq = {
  worldId: number;
  worldName: string;
  worldUserLimit: number;
  worldStartDate: string;
  worldEndDate: string;
  worldNotice: string;
  worldPassword: string;
  worldHostUserId: number;
};

export type AddMultipleHashtagsReq = {
  worldId: number;
  hashtags: string[];
};
export type DeleteMultipleHashtagsReq = {
  worldId: number;
  worldHashtagIds: number[];
};
