import { Character } from "./character";

export class User {
  id: number;
  userName: string;
  password: string;
  characterList: Character[];

  constructor(
    id: number,
    userName: string,
    password: string,
    characterList?: Character[]
  ) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.characterList = characterList || [];
  }

  addCharacter(character: Character) {
    if (this.characterList.find((c) => c.isEqualTo(character)) === undefined) {
      this.characterList.push(character);
    }
  }

  updateCharacter(character: Character) {
    const updateavatarId = this.characterList.findIndex(
      (c) => !c.isEqualTo(character)
    );
    this.characterList.splice(updateavatarId, 0, character);
  }

  removeCharacter(character: Character) {
    if (this.characterList.find((c) => c.isEqualTo(character))) {
      this.characterList = this.characterList.filter(
        (c) => c.id !== character.id
      );
    }
  }

  updateTodayComment(character: Character, message: string) {
    this.characterList
      .find((c) => c.id === character.id)
      ?.updateComment(message);
  }
}
