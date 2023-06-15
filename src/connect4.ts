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

  setPlayerDisk(playerNumber: number, disc: string) {
    this.playerDiscs[playerNumber] = disc;
  }

  getPlayerDisk(playerNumber: number) {
    return this.playerDiscs[playerNumber];
  }

  play(player: number, column: number) {
    const lastRow = this.board.length - 1

    for (let row = lastRow; row >= 0; row--) {
      const space = this.board[row][column];

      if (space === "⚫") {
        this.board[row][column] = this.getPlayerDisk(player);
        return
      }
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { Connect4 };
