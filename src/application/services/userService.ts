import UserApiService from "@/networks/userAPIService";

export default class UserService {
  private _userAPIService: UserApiService;
  constructor() {
    this._userAPIService = new UserApiService();
  }

  getAllCharacterList() {
    return this._userAPIService.getAllCharacterList({});
  }

  reportUser() {}

  isCheckCharacterExist() {}

  blockUser() {}

  addCharacter() {}

  updateCharacter() {}

  updateCharacterImg() {}

  removeCharacter() {}

  addTodyComment() {}

  getIncludeWorlds() {
    // 유저의 모든 세계관은 없다..
    // 캐릭터의 모든 세계관을 가져오는 거 같은데..
  }
}
