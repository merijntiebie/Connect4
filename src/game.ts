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

  getLastPlayedColumn() {
    return this.lastPlayedColumn;
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
    const discColorOfActivePlayer = this.getActivePlayer().getDiscColor();
    const row = columnArray.indexOf(discColorOfActivePlayer);
    this.lastPlayedRow = row;
  }

  letActivePlayerDropADisc(column: number) {
    const activePlayer = this.getActivePlayer();
    this.board.dropDisc(column, activePlayer.getDiscColor());
  }

  play(column: number) {
    this.letActivePlayerDropADisc(column);
    this.lastPlayedColumn = column;
    this.determineRowOfLastPlayedDisc();
    this.determineNumberOfDiscsOfActivePlayerInColumn();
    if (this.determineVerticalWinner() === true) {
      this.winner = this.getActivePlayer();
    }
    this.switchActivePlayer();
  }

  determineNumberOfDiscsOfActivePlayerInColumn(): number {
    const extractedColumn = this.board.extractColumn(this.lastPlayedColumn);
    let numberOfDiscsOfActivePlayer = 0;

    for (let i = 0; i < extractedColumn.length; i += 1) {
      if (extractedColumn[i] === this.getActivePlayer().getDiscColor()) {
        numberOfDiscsOfActivePlayer += 1;
      } else {
        numberOfDiscsOfActivePlayer = 0;
      }
    }
    return numberOfDiscsOfActivePlayer;
  }

  determineHorizontalVictoryInRow (row: string[]): number {
    let numberOfDiscsOfActivePlayer = 0;

    for (let i = 0; i < row.length; i += 1) {
      if (row[i] === this.getActivePlayer().getDiscColor()) {
        numberOfDiscsOfActivePlayer += 1;
      } else {
        numberOfDiscsOfActivePlayer = 0;
      }
    }
    return numberOfDiscsOfActivePlayer;
  }

  determineVerticalWinner() {
    return this.determineNumberOfDiscsOfActivePlayerInColumn() === 4;
  }
}

export { Game };
