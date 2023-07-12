import { Board } from "../../src/board";

class Player {
  private discColor: string;

  constructor(discColor: string) {
    this.discColor = discColor;
  }

  getDiscColor(): string {
    return this.discColor;
  }

  play(column: number): void {
    Board.dropDisc(column, this.discColor);
}

export { Player };
