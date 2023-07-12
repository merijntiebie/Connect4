import { Board } from "../../src/board";
import { Player } from "../../src/player";

describe("When a player takes a turn, a disc should be dropped in the column of their choosing and the active player should be switched", () => {
  it("Player 1 plays a disc in column 0 and afterwards, player 2 is the new active player", () => {
    const player1 = new Player("🔴");
    const player2 = new Player("🟡");
    const board = new Board();
    player1.play(0);
    const boardState = board.getBoard();
    expect(boardState[5][0]).toEqual("🔴");
    expect(boardState[4][0]).toEqual("⚫");
    const activePlayer = board.getActivePlayer();
  });
});
