class Connect4 {
  playerDiscs = ["", ""];

  board = [
    ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
  ];

  lastPlayer = 0;

  lastCoordinate: [number, number] = [0, 0];

  setPlayerDisk(player: number, disc: string) {
    this.playerDiscs[player] = disc;
  }

  getPlayerDisk(player: number) {
    return this.playerDiscs[player];
  }

  play(player: number, column: number) {
    const lastRow = this.board.length - 1;

    for (let row = lastRow; row >= 0; row -= 1) {
      const space = this.board[row][column];

      if (space === "⚫") {
        this.board[row][column] = this.getPlayerDisk(player);
        this.lastPlayer = player;
        this.lastCoordinate = [row, column];
        return;
      }
    }
  }

  getDiagonalWinner(): number | undefined {
    const lastDiskPlayed = this.getPlayerDisk(this.lastPlayer);

    let amountOfDisksInLine = 1;

    const amountOfDisksToBottomRight =
      this.findNumberOfSameColoredDiscsInBottomRightDiagonal(
        this.lastCoordinate,
        lastDiskPlayed
      );

    amountOfDisksInLine += amountOfDisksToBottomRight;

    const amountOfDisksToTopLeft =
      this.findNumberOfSameColoredDiscsInTopLeftDiagonal(
        this.lastCoordinate,
        lastDiskPlayed
      );

    amountOfDisksInLine += amountOfDisksToTopLeft;

    if (amountOfDisksInLine === 4) {
      return this.lastPlayer;
    }

    return undefined;
  }

  // TODO: remove these functions
  findNumberOfSameColoredDiscsInBottomRightDiagonal(
    coordinate: [number, number],
    discToFind: string
  ): number {
    const [row, column] = coordinate;
    let numberOfDiscs = 0;

    for (let step = 1; step < 4; step += 1) {
      if (this.board[row + step]?.[column + step] === discToFind) {
        numberOfDiscs += 1;
      } else {
        return numberOfDiscs;
      }
    }

    return numberOfDiscs;
  }

  findNumberOfSameColoredDiscsInTopLeftDiagonal(
    coordinate: [number, number],
    discToFind: string
  ): number {
    const [row, column] = coordinate;
    let numberOfDiscs = 0;

    for (let step = 1; step < 4; step += 1) {
      if (this.board[row - step]?.[column - step] === discToFind) {
        numberOfDiscs += 1;
      } else {
        return numberOfDiscs;
      }
    }

    return numberOfDiscs;
  }

  findNumberOfSameColoredDiscsInBottomLeftDiagonal(
    coordinate: [number, number],
    discToFind: string
  ): number {
    const [row, column] = coordinate;
    let numberOfDiscs = 0;

    for (let step = 1; step < 4; step += 1) {
      if (this.board[row + step]?.[column - step] === discToFind) {
        numberOfDiscs += 1;
      } else {
        return numberOfDiscs;
      }
    }

    return numberOfDiscs;
  }

  // Create a function that finds the number of same colored discs in a diagonal. Look at the function findNumberOfSameColoredDiscsInBottomRightDiagonal for inspiration. Make it generic for all diagonal directions. Consider the directions as input parameters.
  findNumberOfSameColoredDiscsInDiagonal(
    coordinate: [number, number],
    discToFind: string,
    rowStep: number,
    columnStep: number
  ): number {
    const [row, column] = coordinate;
    let numberOfDiscs = 0;

    for (let step = 1; step < 4; step += 1) {
      const newRow = row + step * rowStep;
      const newColumn = column + step * columnStep;

      if (this.board[newRow]?.[newColumn] === discToFind) {
        numberOfDiscs += 1;
      } else {
        return numberOfDiscs;
      }
    }

    return numberOfDiscs;
  }

  getVerticalWinner(): number | undefined {
    const lastRowPlayed = this.lastCoordinate[0];
    const lastColumnPlayed = this.lastCoordinate[1];
    const lastDiskPlayed = this.getPlayerDisk(this.lastPlayer);

    if (
      this.board[lastRowPlayed]?.[lastColumnPlayed] === lastDiskPlayed &&
      this.board[lastRowPlayed + 1]?.[lastColumnPlayed] === lastDiskPlayed &&
      this.board[lastRowPlayed + 2]?.[lastColumnPlayed] === lastDiskPlayed &&
      this.board[lastRowPlayed + 3]?.[lastColumnPlayed] === lastDiskPlayed
    ) {
      return this.lastPlayer;
    }

    return undefined;
  }

  getWinner(): number | undefined {
    const verticalWinner = this.getVerticalWinner();
    if (verticalWinner !== undefined) {
      return verticalWinner;
    }

    const diagonalWinner = this.getDiagonalWinner();
    if (diagonalWinner !== undefined) {
      return diagonalWinner;
    }
    return undefined;
  }
}

export { Connect4 };
