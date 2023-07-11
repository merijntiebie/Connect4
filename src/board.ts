class Board {
  private board: string[][];

  constructor() {
    this.board = Array(6)
      .fill(null)
      .map(() => Array(7).fill("⚫"));
  }

  getBoard(): string[][] {
    return this.board;
  }

  dropDisc(column: number, disc: string): void {
    for (let row = 5; row >= 0; row--) {
      if (this.board[row][column] === "⚫") {
        this.board[row][column] = disc;
        break;
      }

      if (row === 0) {
        throw new Error("Column is full");
      }
    }
  }
}

export { Board };
