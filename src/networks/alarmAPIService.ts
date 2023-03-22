import { GetRecommendedAlarmRes, SendMessageReq } from "./network";
import { APINetworkService, axiosinstance } from "./networkCore";

export default class AuthApiService extends APINetworkService {
  async getRecommendedAlarmMessage(): Promise<GetRecommendedAlarmRes> {
    const res = await axiosinstance.get("/alarm/recommended");
    return res.data.data;
  }
  async sendMessage(req: SendMessageReq): Promise<GetRecommendedAlarmRes> {
    const res = await axiosinstance.post("/alarm/recommended", req);
    return res.data.data;
  }
}
