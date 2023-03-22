import CharacterAPIService from "@/networks/characterAPIService";
import WorldAPIService from "@/networks/worldAPIService";

export default class CharacterService {
  private _characterAPIService: CharacterAPIService;
  private _worldAPIService: WorldAPIService;

  constructor() {
    this._characterAPIService = new CharacterAPIService();
    this._worldAPIService = new WorldAPIService();
  }
  createWorld() {
    this._worldAPIService.createWorld();
  }

  getAllWorldList() {
    return this._characterAPIService.getCharacterInfo();
  }

  getCharacterInfo() {
    return this._characterAPIService.getCharacterInfo();
  }

  checkRoutine() {
    this._characterAPIService.checkTodo();
  }

  updateWorld() {}
  deleteWorld() {}
}
