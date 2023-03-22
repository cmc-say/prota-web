import UserApiService from "@/networks/userAPIService";

export default class UserService {
  private _userAPIService: UserApiService;
  constructor() {
    this._userAPIService = new UserApiService();
  }

  getAllCharacterList() {
    return this._userAPIService.getAllCharacterList({});
  }

  reportUser() {
    return this._userAPIService.reportUser({});
  }

  isCheckCharacterExist() {
    return this._userAPIService.isCheckCharacterExist({});
  }

  blockUser() {
    return this._userAPIService.blockUser({});
  }

  addCharacter() {
    return this._userAPIService.addCharacter({});
  }

  updateCharacter() {
    return this._userAPIService.updateCharacter({});
  }

  updateCharacterImg() {
    return this._userAPIService.updateCharacterImg({});
  }

  removeCharacter() {
    return this._userAPIService.removeCharacter({});
  }

  addTodyComment() {
    return this._userAPIService.addTodyComment({});
  }

  getIncludeWorlds() {
    // 유저의 모든 세계관은 없다..
    // 캐릭터의 모든 세계관을 가져오는 거 같은데..
  }
}
