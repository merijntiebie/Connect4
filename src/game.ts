import { Board } from "./board";
import { Player } from "./player";

class Game {
  board: Board;

  player1: Player;

  player2: Player;

  activePlayer: Player;

  lastPlayedColumn: number;

  constructor() {
    this.board = new Board();
    this.player1 = new Player("🔴");
    this.player2 = new Player("🟡");
    this.activePlayer = this.player1;
    this.lastPlayedColumn = -1;
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

  play(column: number) {
    const activePlayer = this.getActivePlayer();
    this.board.dropDisc(column, activePlayer.getDiscColor());
    this.switchActivePlayer();
    this.lastPlayedColumn = column;
  }
}

export { Game };
