export class CheckList {
  id: number;
  isChecked: boolean;

  constructor(id: number, isCheck: boolean) {
    this.id = id;
    this.isChecked = isCheck;
  }

  isEqualTo(item: CheckList) {
    return this.id === item.id;
  }

  check(): boolean {
    this.isChecked = !this.isChecked;
    return this.isChecked;
  }
}
