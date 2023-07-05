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
      this.findNumberOfSameColoredDiscsInDiagonal(
        this.lastCoordinate,
        lastDiskPlayed,
        1,
        1
      );

    amountOfDisksInLine += amountOfDisksToBottomRight;
    if (amountOfDisksInLine >= 4) {
      return this.lastPlayer;
    }

    const amountOfDisksToTopLeft = this.findNumberOfSameColoredDiscsInDiagonal(
      this.lastCoordinate,
      lastDiskPlayed,
      -1,
      -1
    );

    amountOfDisksInLine += amountOfDisksToTopLeft;

    if (amountOfDisksInLine >= 4) {
      return this.lastPlayer;
    } else amountOfDisksInLine = 1;

    const amountOfDisksToBottomLeft = this.findNumberOfSameColoredDiscsInDiagonal(
      this.lastCoordinate,
      lastDiskPlayed,
      1,
      -1
    );

    amountOfDisksInLine += amountOfDisksToBottomLeft;

    if (amountOfDisksInLine >= 4) {
      return this.lastPlayer;
    }
    
    const amountOfDisksToTopRight = this.findNumberOfSameColoredDiscsInDiagonal(
      this.lastCoordinate,
      lastDiskPlayed,
      -1,
      1
    );

    amountOfDisksInLine += amountOfDisksToTopRight;

    if (amountOfDisksInLine >= 4) {
      return this.lastPlayer;
    }

    return undefined;
  }

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
