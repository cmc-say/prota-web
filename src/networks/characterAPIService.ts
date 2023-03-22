import { World } from "@/application/domain/world";
import {
  AddCharacterReq,
  AddCharacterRes,
  CheckTodoReq,
  CreateWordTodayReq,
  DeleteCharacterReq,
  GetCharacterInfoReq,
  ParticipateWorldReq,
  UpdateCharacterImgReq,
  EditCharacterInfoReq,
  GetTodayWordReq,
  GetCharacterInfoRes,
  GetTodayWordRes,
  GetAvatarAllWorldTodos,
} from "./network";

import {
  APINetworkService,
  axiosMediaInstance,
  axiosinstance,
} from "./networkCore";

export default class CharacterAPIService extends APINetworkService {
  async getCharacterInfo(
    req: GetCharacterInfoReq
  ): Promise<GetCharacterInfoRes> {
    const res = await axiosinstance.get(`/avatar/${req.avatarId}`);
    return res.data.data;
  }
  async getAllCharacterWorlds(req: GetCharacterInfoReq): Promise<World[]> {
    const res = await axiosinstance.get(`/avatar/${req.avatarId}/worlds`);
    return res.data.data;
  }
  async addCharacter(req: AddCharacterReq): Promise<AddCharacterRes> {
    const data = new FormData();

    const formData = JSON.stringify({
      avatarName: req.avatarName,
      avatarMessage: req.avatarMessage,
    });

    data.append("file", req.file);
    data.append("data ", formData);

    const res = await axiosMediaInstance.post(`/avatar`, data);
    return res.data;
  }

  async editCharacterInfo(req: EditCharacterInfoReq) {
    const res = await axiosinstance.put(`/avatar/${req.avatarId}/info`, {
      data: {
        avatarName: req.avatarName,
        avatarMessage: req.avatarMessage,
      },
    });
    return res.data;
  }

  async updateCharacterImg(req: UpdateCharacterImgReq) {
    const data = new FormData();
    data.append("file", req.file);
    await axiosMediaInstance.post(`/avatar/${req.avatarId}/img`, data);
  }

  async deleteCharacter(req: DeleteCharacterReq) {
    const res = await axiosinstance.delete(`/avatar/${req.avatarId}`);
    return res.data;
  }

  async participateToWorld(req: ParticipateWorldReq) {
    const res = await axiosinstance.post(
      `/avatar/${req.avatarId}/world/${req.worldId}`
    );
    return res.data;
  }
  async withdrawalFromWorld(req: ParticipateWorldReq) {
    const res = await axiosinstance.delete(
      `/avatar/${req.avatarId}/world/${req.worldId}`
    );
    return res.data;
  }
  async checkTodo(req: CheckTodoReq) {
    const res = await axiosinstance.post(
      `/avatar/${req.avatarId}/world/${req.worldId}/todo/${req.todoId}/check`
    );
    return res.data;
  }
  async unCheckTodo(req: CheckTodoReq) {
    const res = await axiosinstance.delete(
      `/avatar/${req.avatarId}/world/${req.worldId}/todo/${req.todoId}/uncheck`
    );
    return res.data;
  }

  async checkTodoChecked(req: ParticipateWorldReq) {
    const res = await axiosinstance.get(
      `/avatar/${req.avatarId}/world/${req.worldId}/todos`
    );
    return res.data.data;
  }

  async createWorldToday(req: CreateWordTodayReq) {
    const res = await axiosinstance.post(
      `/avatar/${req.avatarId}/world/${req.worldId}/wordtoday`,
      {
        wordTodayContent: req.wordTodayContent,
      }
    );
    return res.data;
  }

  async getWordToday(req: GetTodayWordReq): Promise<GetTodayWordRes> {
    const res = await axiosinstance.get(
      `/avatar/${req.avatarId}/world/${req.worldId}/wordtoday/${req.wordTodayId}`
    );
    return res.data.data;
  }

  async getAllWorldTodos(
    req: GetCharacterInfoReq
  ): Promise<GetAvatarAllWorldTodos> {
    const res = await axiosinstance.get(`/avatar/${req.avatarId}/todo/month`);
    return res.data.data;
  }
}
