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

  // TODO: add else after if to stop checking when an other type of disk is found
  findNumberOfSameColoredDiscsInBottomRightDiagonal(
    coordinate: [number, number],
    discToFind: string
  ): number {
    const [row, column] = coordinate;
    let numberOfDiscs = 0;
    if (this.board[row + 1]?.[column + 1] === discToFind) {
      numberOfDiscs += 1;
    }
    if (this.board[row + 2]?.[column + 2] === discToFind) {
      numberOfDiscs += 1;
    }
    if (this.board[row + 3]?.[column + 3] === discToFind) {
      numberOfDiscs += 1;
    }

    return numberOfDiscs;
  }

  findNumberOfSameColoredDiscsInTopLeftDiagonal(
    coordinate: [number, number],
    discToFind: string
  ): number {
    const [row, column] = coordinate;
    let numberOfDiscs = 0;
    if (this.board[row - 1]?.[column - 1] === discToFind) {
      numberOfDiscs += 1;
    } else return numberOfDiscs;
    if (this.board[row - 2]?.[column - 2] === discToFind) {
      numberOfDiscs += 1;
    } else return numberOfDiscs;
    if (this.board[row - 3]?.[column - 3] === discToFind) {
      numberOfDiscs += 1;
    } else return numberOfDiscs;
    return numberOfDiscs;
  }

  getWinner(): number | undefined {
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
    const diagonalWinner = this.getDiagonalWinner();
    if (diagonalWinner !== undefined) {
      return this.getDiagonalWinner();
    }
    return undefined;
  }
}

export { Connect4 };
