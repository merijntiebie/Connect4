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

    if (amountOfDisksInLine === 4) {
      return this.lastPlayer;
    }

    return undefined;
  }

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

  getverticalWinner(): number | undefined {
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
  }

  getWinner(): number | undefined {
    const diagionalWinner = this.getDiagonalWinner();
    if (diagionalWinner !== undefined) {
      return diagionalWinner;
    }
    const verticalWinner = this.getverticalWinner();
    if (verticalWinner !== undefined) {
      return verticalWinner;
    }

    return undefined;
  }
}

export { Connect4 };
