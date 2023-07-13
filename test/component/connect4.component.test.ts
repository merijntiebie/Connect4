import { Game } from "../../src/game";

describe("When a player takes a turn, a disc should be dropped in the column of their choosing and the active player should be switched", () => {
  it("Player 1 plays a disc in column 0 and afterwards, player 2 is the new active player", () => {
    const connect4 = new Game();
    connect4.play(0);
    const boardState = connect4.getBoardState();
    expect(boardState[5][0]).toEqual("🔴");
    expect(boardState[4][0]).toEqual("⚫");
    const activePlayer = connect4.getActivePlayer();
    expect(activePlayer.getDiscColor()).toEqual("🟡");
  });
});
