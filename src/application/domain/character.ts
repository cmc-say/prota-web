import { World } from "./world";

type Props = {
  id: number;
  worldList: World[] | null;
  characterName: string;
  characterImg: string;
  todayComment: string;
};
export class Character {
  id: number;
  characterName: string;
  characterImg: string;
  worldList: World[];
  todayComment: string;

  constructor({
    id,
    worldList,
    characterName,
    characterImg,
    todayComment,
  }: Props) {
    this.id = id;
    this.worldList = worldList || [];
    this.characterName = characterName;
    this.characterImg = characterImg;
    this.todayComment = todayComment;
  }

  isEqualTo(character: Character): boolean {
    return character.id === this.id;
  }

  addWorld(world: World) {
    if (this.worldList.find((w) => w.isEqualTo(world)) === undefined) {
      this.worldList.push(world);
    }
  }

  removeWorld(world: World) {
    if (this.worldList.find((w) => w.isEqualTo(world))) {
      this.worldList = this.worldList.filter((w) => w.id !== world.id);
    }
  }

  checkRoutine(world: World, checkListId: number) {
    const _world = this.worldList.find((w) => w.isEqualTo(world)) as World;
    _world.checkRoutine(checkListId);
  }

  updateComment(message: string) {
    this.todayComment = message;
  }
}
