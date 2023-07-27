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
    return this.board.map((row) => row[column]);
  }

  extractRow(row: number): string[] {
    return this.board[row];
  }

  extractTopLeftDiagonal(row: number, column: number): string[] {
    const diagonal: string[] = [];
    const numRows = this.board.length;
    const numCols = this.board[0].length;

    // Calculate the offset to keep the diagonal within bounds
    const offset = Math.min(row, column);

    // Starting position within the diagonal
    let rowNumber = row - offset;
    let columnNumber = column - offset;

    // Traverse the diagonal from the top left to the bottom right
    while (rowNumber < numRows && columnNumber < numCols) {
      diagonal.push(this.board[rowNumber][columnNumber]);
      rowNumber += 1;
      columnNumber += 1;
    }

    return diagonal;
  }

  extractTopRightDiagonal(row: number, column: number): string[] {
    const diagonal: string[] = [];
    const numRows = this.board.length;
    const numCols = this.board[0].length;

    // Calculate the offset to keep the diagonal within bounds
    const offset = Math.min(numRows - 1 - row, column);

    // Starting position within the diagonal
    let rowNumber = row + offset;
    let columnNumber = column - offset;

    // Traverse the diagonal from the bottom left to the top right
    while (rowNumber >= 0 && columnNumber < numCols) {
      diagonal.push(this.board[rowNumber][columnNumber]);
      rowNumber -= 1;
      columnNumber += 1;
    }

    return diagonal;
  }
}

export { Board };
