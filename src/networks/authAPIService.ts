import {
  LoginReq,
  LoginRes,
  LogoutReq,
  LogoutRes,
  ReIssueReq,
  ReIssueRes,
} from "./network";
import {
  APINetworkService,
  MockNetworkService,
  axiosinstance,
} from "./networkCore";

export default class AuthApiService extends APINetworkService {
  async login(req: LoginReq): Promise<LoginRes> {
    const res = await axiosinstance.post("/auth/login", req);
    return res.data.data;
  }
  async logout(req: LogoutReq): Promise<LogoutRes> {
    const res = await axiosinstance.post("/auth/logout", req);
    return res.data.data;
  }
  async reissue(req: ReIssueReq): Promise<ReIssueRes> {
    const res = await this._networkCore.post<ReIssueRes>();
    return res;
  }
}
