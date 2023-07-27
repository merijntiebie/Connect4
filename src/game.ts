import { Board } from "./board";
import { Player } from "./player";

class Game {
  board: Board;

  player1: Player;

  player2: Player;

  activePlayer: Player;

  lastPlayedColumn: number;

  winner: Player | null;

  constructor() {
    this.board = new Board();
    this.player1 = new Player("🔴");
    this.player2 = new Player("🟡");
    this.activePlayer = this.player1;
    this.lastPlayedColumn = -1;
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

  letActivePlayerDropADisc(column: number) {
    const activePlayer = this.getActivePlayer();
    this.board.dropDisc(column, activePlayer.getDiscColor());
    this.lastPlayedColumn = column;
  }

  play(column: number) {
    this.letActivePlayerDropADisc(column);

    if (
      this.determineVerticalWinner() ||
      this.determineHorizontalWinner() ||
      this.determineDiagonalWinner()
    ) {
      this.winner = this.getActivePlayer();
    }

    this.switchActivePlayer();
  }

  determineMaximumStreakOfActivePlayerDiscs(line: string[]): number {
    let currentStreak = 0;
    let longestStreak = 0;

    const activePlayerDisc = this.activePlayer.getDiscColor();

    line.forEach((cell) => {
      if (cell === activePlayerDisc) {
        currentStreak += 1;

        if (currentStreak > longestStreak) {
          longestStreak = currentStreak;
        }
      } else {
        currentStreak = 0;
      }
    });

    return longestStreak;
  }

  determineVerticalWinner() {
    const lastPlayedColumn = this.board.extractColumn(this.lastPlayedColumn);

    return (
      this.determineMaximumStreakOfActivePlayerDiscs(lastPlayedColumn) === 4
    );
  }

  determineHorizontalWinner() {
    const lastPlayedColumn = this.board.extractColumn(this.lastPlayedColumn);

    const lastPlayedRowIndex = lastPlayedColumn.findIndex(
      (cell) => cell !== "⚫"
    );

    const lastPlayedRow = this.board.extractRow(lastPlayedRowIndex);

    return this.determineMaximumStreakOfActivePlayerDiscs(lastPlayedRow) === 4;
  }

  determineDiagonalWinner() {
    const lastPlayedColumn = this.board.extractColumn(this.lastPlayedColumn);

    const lastPlayedRowIndex = lastPlayedColumn.findIndex(
      (cell) => cell !== "⚫"
    );

    const topLeftDiagonal = this.board.extractTopLeftDiagonal(
      lastPlayedRowIndex,
      this.lastPlayedColumn
    );

    const topRightDiagonal = this.board.extractTopRightDiagonal(
      lastPlayedRowIndex,
      this.lastPlayedColumn
    );

    return (
      this.determineMaximumStreakOfActivePlayerDiscs(topLeftDiagonal) === 4 ||
      this.determineMaximumStreakOfActivePlayerDiscs(topRightDiagonal) === 4
    );
  }
}

export { Game };
