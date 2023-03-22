import WorldAPIService from "@/networks/worldAPIService";

export default class WorldService {
  private _worldAPIService: WorldAPIService;
  constructor() {
    this._worldAPIService = new WorldAPIService();
  }

  getAllWorldList() {}

  searchWorld() {}
}
