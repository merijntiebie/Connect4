class Board {
  private board: string[][];

  private width = 7;

  private height = 6;

  constructor() {
    this.board = Array(this.height)
      .fill(null)
      .map(() => Array(this.width).fill("⚫"));
  }

  getBoardState(): string[][] {
    return this.board;
  }

  doesColumnExist(column: number): boolean {
    return column >= 0 && column < this.width;
  }

  placeDiscInColumn(column: number, disc: string) {
    for (let row = 5; row >= 0; row -= 1) {
      if (this.board[row][column] === "⚫") {
        this.board[row][column] = disc;
        return;
      }
    }

    throw new Error("Column is full");
  }

  dropDisc(column: number, disc: string): void {
    if (!this.doesColumnExist(column)) {
      throw new Error("Column does not exist");
    }

    this.placeDiscInColumn(column, disc);
  }

  extractColumn(column: number): string[] {
    const extractedColumn = this.board.map((row) => row[column]);
    return extractedColumn;
  }

  extractRow(row: number): string[] {
    return this.board[row];
  }
}

export { Board };
