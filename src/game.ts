import { Board } from "./board";
import { Player } from "./player";

class Game {
  board: Board;

  player1: Player;

  player2: Player;

  activePlayer: Player;

  lastPlayedColumn: number;

  lastPlayedRow: number;

  winner: Player | null;

  constructor() {
    this.board = new Board();
    this.player1 = new Player("🔴");
    this.player2 = new Player("🟡");
    this.activePlayer = this.player1;
    this.lastPlayedColumn = -1;
    this.lastPlayedRow = -1;
    this.winner = null;
  }

  getActivePlayer(): Player {
    return this.activePlayer;
  }

  switchActivePlayer() {
    if (this.activePlayer === this.player1) {
      this.activePlayer = this.player2;
    } else {
      this.activePlayer = this.player1;
    }
  }

  getBoardState(): string[][] {
    return this.board.getBoardState();
  }

  determineRowOfLastPlayedDisc() {
    const column = this.lastPlayedColumn;
    const columnArray = this.board.extractColumn(column);
    const discColorOfActivePlayer = this.activePlayer.getDiscColor();
    const row = columnArray.indexOf(discColorOfActivePlayer);
    this.lastPlayedRow = row;
  }

  letActivePlayerDropADisc(column: number) {
    this.board.dropDisc(column, this.activePlayer.getDiscColor());
  }

  play(column: number) {
    this.letActivePlayerDropADisc(column);
    this.lastPlayedColumn = column;
    this.determineRowOfLastPlayedDisc();
    if (this.checkIfPlayerWinsVertically() === true) {
      this.winner = this.activePlayer;
    }
    if (this.checkIfPlayerWinsHorizontally() === true) {
      this.winner = this.activePlayer;
    }
    if (this.checkIfPlayerWinsDiagonallyTopLeftToBottomRight() === true) {
      this.winner = this.activePlayer;
    }
    this.switchActivePlayer();
  }

  checkIfPlayerWinsHorizontally(): boolean {
    const lastPlayedRowNumber = this.lastPlayedRow;
    const boardState = this.getBoardState();
    const lastPlayedRow = boardState[lastPlayedRowNumber];
    let numberOfDiscsOfActivePlayer = 0;

    for (
      let i = 0;
      i < lastPlayedRow.length && numberOfDiscsOfActivePlayer < 4;
      i += 1
    ) {
      if (lastPlayedRow[i] === this.activePlayer.getDiscColor()) {
        numberOfDiscsOfActivePlayer += 1;
      } else {
        numberOfDiscsOfActivePlayer = 0;
      }
    }
    return numberOfDiscsOfActivePlayer === 4;
  }

  checkIfPlayerWinsVertically(): boolean {
    const extractedColumn = this.board.extractColumn(this.lastPlayedColumn);
    let numberOfDiscsOfActivePlayer = 0;

    for (let i = 0; i < extractedColumn.length; i += 1) {
      if (extractedColumn[i] === this.activePlayer.getDiscColor()) {
        numberOfDiscsOfActivePlayer += 1;
      } else {
        numberOfDiscsOfActivePlayer = 0;
      }
    }
    return numberOfDiscsOfActivePlayer === 4;
  }

  checkIfPlayerWinsDiagonallyTopLeftToBottomRight(): boolean {
    const boardState = this.getBoardState();
    let numberOfDiscsOfActivePlayer = 0;
    let onlyDiscsOfSameColorFound = true;
    let column = this.lastPlayedColumn;
    for (
      let row = this.lastPlayedRow;
      row < boardState.length && onlyDiscsOfSameColorFound === true;
      row += 1
    ) {
      if (boardState[row][column] === this.activePlayer.getDiscColor()) {
        numberOfDiscsOfActivePlayer += 1;
        column += 1;
      } else {
        onlyDiscsOfSameColorFound = false;
      }
    }
    return numberOfDiscsOfActivePlayer === 4;
  }
}

export { Game };
