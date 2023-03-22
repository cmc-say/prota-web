import {
  BlockUserReq,
  BlockUserRes,
  CheckCharacterExistReq,
  CheckCharacterExistRes,
  GetUserCharacterRes,
  GetUserCharactersReq,
  ReportUserReq,
  ReportUserRes,
} from "./network";
import {
  APINetworkService,
  MockNetworkService,
  axiosinstance,
} from "./networkCore";

export default class UserApiService extends APINetworkService {
  async reportUser(req: ReportUserReq): Promise<ReportUserRes> {
    const res = await axiosinstance.post(`/user/${req.userId}/report`, {
      reportType: req.reportType,
    });
    return res;
  }

  async blockUser(req: BlockUserReq): Promise<BlockUserRes> {
    const res = await axiosinstance.post(`/user/${req.userId}/block`);
    return res;
  }

  async getAllCharacterList({}: GetUserCharactersReq): Promise<GetUserCharacterRes> {
    const res = await axiosinstance.get(`/user/avatars`);
    return res.data.data;
  }

  async isCheckCharacterExist(
    req: CheckCharacterExistReq
  ): Promise<CheckCharacterExistRes> {
    const res = await axiosinstance.get(`/user/world/${req.worldId}/is-member`);
    return res.data.data;
  }
}
