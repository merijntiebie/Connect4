import { Game } from "../../src/game";
import {
  gameWithAlmostVerticalVictoryForPlayerOne,
  gameWithAlmostHorizontalVictoryForPlayerTwo,
  gameWithAlmostDiagonalVictoryForPlayerTwoInColumn1,
  gameWithAlmostDiagonalVictoryForPlayerTwoInColumn2,
  gameWithAlmostDiagonalVictoryForPlayerOneInColumn4,
  gameWithAlmostDiagonalVictoryForPlayerOneInColumn2,
} from "../doubles/game.doubles";

describe(`When a player takes a turn, a number of things happen:
          - A turn starts with a player dropping a disc in the column of their choosing,
          - which is then marked as the last-played column. 
          - The row in which the disc ends up is then marked as the last-played row.
          - After the disc has fallen to its place we need to check if a victory has occured. 
          - If the game is still undecided, the active player should be switched.`, () => {
  describe("Consider a new game in which both players take a turn. A win will not be possible yet, because you need to connect 4 discs.", () => {
    const newGame = new Game();
    it(`- Player 1 plays the 1st column. 
        - Player 2 is the new active player.
        - Last played column is the 1st column
        - Last played row is the 6th row`, () => {
      newGame.play(0);
      const boardState = newGame.getBoardState();
      expect(boardState[5][0]).toEqual("🔴");
      expect(boardState[4][0]).toEqual("⚫");
      expect(newGame.activePlayer.getDiscColor()).toEqual("🟡");
      expect(newGame.lastPlayedColumn).toEqual(0);
      expect(newGame.lastPlayedRow).toEqual(5);
    });
    it(`- Player 2 then plays the 2nd column. 
        - Player 1 is the new active player.
        - Last played column is the second column
        - Last played row is the 6th row`, () => {
      const boardStateBeforeSecondTurn = newGame.getBoardState();
      expect(boardStateBeforeSecondTurn[5][1]).toEqual("⚫");
      newGame.play(1);
      const boardStateAfterSecondTurn = newGame.getBoardState();
      expect(boardStateAfterSecondTurn[5][1]).toEqual("🟡");
      expect(newGame.activePlayer.getDiscColor()).toEqual("🔴");
      expect(newGame.lastPlayedColumn).toEqual(1);
      expect(newGame.lastPlayedRow).toEqual(5);
    });
  });
  describe("Now lets jump a little bit into the future. The game has progressed a bit and we are close to getting a vertical victory. Which is a victory achieved by getting 4 discs from the same color in a unbroken row.", () => {
    describe("There are 3 red discs in the first column. A vertical victory then occurs", () => {
      it("When player one places his disc in the first column, making it 4 red discs in a row", () => {
        const game = gameWithAlmostVerticalVictoryForPlayerOne();
        game.play(0);
        expect(game.winner).toBe(game.player1);
      });
    });
  });
  describe("Another option in which a game can end, is an horizontal victory, which is a victory achieved by getting 4 discs from the same color in a unbroken row.", () => {
    describe("There are 3 yellow discs sequentially in the bottom row, from column 2 until 4. A horizontal victory then occurs", () => {
      it("When player two places his disc in column 5, making it 4 yellow discs in a row", () => {
        const game = gameWithAlmostHorizontalVictoryForPlayerTwo();
        game.play(4);
        expect(game.winner).toBe(game.player2);
      });
    });
  });
  describe("A game can also end because of a diagonal victory, which is a victory achieved by getting 4 discs from the same color in a unbroken diagonal.", () => {
    it(`In a board that looks as follows:
    ⚫⚫⚫⚫⚫⚫⚫
    ⚫⚫⚫⚫⚫⚫⚫
    ⚫⚫⚫⚫⚫⚫⚫
    ⚫🔴🟡🔴⚫⚫⚫
    ⚫🔴🟡🟡🔴⚫⚫
    🔴🟡🟡🔴🟡🔴⚫
      When player 2 places his disc in column 1, we have a winner!`, () => {
      const game = gameWithAlmostDiagonalVictoryForPlayerTwoInColumn1();
      game.play(1);
      expect(game.winner).toBe(game.player2);
    });
    it(`In a board that looks as follows:
    ⚫⚫⚫⚫⚫⚫⚫
    ⚫⚫⚫⚫⚫⚫⚫
    ⚫🟡⚫⚫⚫⚫⚫
    ⚫🔴⚫🔴⚫⚫⚫
    ⚫🔴🟡🟡🔴⚫⚫
    🔴🟡🟡🔴🟡🔴⚫
      When player 2 places his disc in column 2, we have a winner!`, () => {
      const game = gameWithAlmostDiagonalVictoryForPlayerTwoInColumn2();
      game.play(2);
      expect(game.winner).toBe(game.player2);
    });
    it(`In a board that looks as follows:
    ⚫⚫⚫⚫⚫⚫⚫
    ⚫⚫⚫⚫⚫⚫⚫
    ⚫⚫⚫⚫⚫⚫⚫
    ⚫🟡🟡🔴🟡⚫⚫
    ⚫🟡🔴🟡🔴⚫⚫
    🔴🔴🟡🔴🟡🔴⚫
      When player 1 places his disc in column 4, we have a winner!`, () => {
      const game = gameWithAlmostDiagonalVictoryForPlayerOneInColumn4();
      game.play(4);
      expect(game.winner).toBe(game.player1);
    });
    it(`In a board that looks as follows:
    ⚫⚫⚫⚫⚫⚫⚫
    ⚫⚫⚫⚫⚫⚫⚫
    ⚫⚫⚫⚫🟡⚫⚫
    ⚫🟡⚫🔴🟡⚫⚫
    ⚫🟡⚫🟡🔴⚫⚫
    🔴🔴🟡🔴🟡🔴⚫
      When player 1 places his disc in column 2, we have a winner!`, () => {
      const game = gameWithAlmostDiagonalVictoryForPlayerOneInColumn2();
      game.play(2);
      expect(game.winner).toBe(game.player1);
    });
  });
});
