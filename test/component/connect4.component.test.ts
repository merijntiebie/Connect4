import { Game } from "../../src/game";

describe("When a player takes a turn, a disc should be dropped in the column of their choosing and the active player should be switched", () => {
  it("Player 1 plays a disc in column 0 and afterwards, player 2 is the new active player. Column 0 is set as the last played column", () => {
    const connect4 = new Game();

    connect4.play(0);
    const boardState = connect4.getBoardState();
    expect(boardState[5][0]).toEqual("🔴");
    expect(boardState[4][0]).toEqual("⚫");

    const activePlayer = connect4.getActivePlayer();
    expect(activePlayer.getDiscColor()).toEqual("🟡");
    expect(connect4.getLastPlayedColumn()).toEqual(0);
  });
  it("Player 2 plays a disc in column 1 and afterwards, player 1 is the new active player. Column 1 is set as the last played column", () => {
    const connect4 = new Game();
    connect4.play(0);
    const boardStateBeforeSecondTurn = connect4.getBoardState();
    expect(boardStateBeforeSecondTurn[5][1]).toEqual("⚫");

    connect4.play(1);
    const boardStateAfterSecondTurn = connect4.getBoardState();
    expect(boardStateAfterSecondTurn[5][1]).toEqual("🟡");

    const activePlayer = connect4.getActivePlayer();
    expect(activePlayer.getDiscColor()).toEqual("🔴");
    expect(connect4.getLastPlayedColumn()).toEqual(1);
  });
});

describe("A player can win the game by connecting 4 discs of the same color in a row.", () => {
  describe("A vertical vicory occurs", () => {
    it("When there is a row of four discs of the same color in a column", () => {
      const game = gameWithAlmostVerticalVictory();
      game.play(0);
      const isVerticalWinner = game.determineVerticalWinner();
      expect(isVerticalWinner).toBe(true);
    });
  });
  describe("There is no vertical victory", () => {
    it("When there are only 3 discs of the same color in a column", () => {
      const game = gameWithAlmostVerticalVictory();
      const isVerticalWinner = game.determineVerticalWinner();
      expect(isVerticalWinner).toBe(false);
    });
  });
});
