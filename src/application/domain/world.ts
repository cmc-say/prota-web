import { Character } from "./character";
import { CheckList } from "./checkList";

export class World {
  id: number;
  worldName: string;
  checkList: CheckList[];
  characterList: Character[];

  constructor(
    id: number,
    worldName: string,
    checkList?: CheckList[],
    characterList?: Character[]
  ) {
    this.id = id;
    this.worldName = worldName;
    this.checkList = checkList || [];
    this.characterList = characterList || [];
  }

  isEqualTo(world: World): boolean {
    return world.id === this.id;
  }

  checkRoutine(checkId: number): boolean {
    const _checkList = this.checkList.find(
      (c) => c.id === checkId
    ) as CheckList;
    return _checkList.check();
  }

  addCheckList(checkListItem: CheckList) {
    if (
      this.checkList.find((item) => item.isEqualTo(checkListItem)) === undefined
    ) {
      this.checkList.push(checkListItem);
    }
  }

  updateCheckList(checkListItem: CheckList) {
    const _checkList = this.checkList.filter(
      (item) => !item.isEqualTo(checkListItem)
    );
    _checkList.push(checkListItem);
    this.checkList = _checkList;
  }

  removeCheckList(checkListItem: CheckList) {
    if (this.checkList.find((item) => item.isEqualTo(checkListItem))) {
      this.checkList = this.checkList.filter(
        (item) => item.id !== checkListItem.id
      );
    }
  }

  updateCharacterList(character: Character) {
    if (this.characterList.find((c) => c.isEqualTo(character))) {
      this.characterList = this.characterList.filter(
        (c) => c.id !== character.id
      );
    }
  }
}
