import WorldAPIService from "@/networks/worldAPIService";

export default class WorldService {
  private _worldAPIService: WorldAPIService;
  constructor() {
    this._worldAPIService = new WorldAPIService();
  }

  getAllWorldList() {
    this._worldAPIService.getAllWorlds();
  }

  searchWorld() {
    this._worldAPIService.searchWorld();
  }
}
