import { Game } from "../../src/game";
import {
  gameWithAlmostVerticalVictoryForPlayerOne,
  gameWithAlmostHorizonalVictoryForPlayerOne,
  gameWithAlmostDiagonalVictoryForPlayerTwo,
  gameWithAlmostDiagonalVictoryForPlayerOne,
} from "../doubles/game.doubles";

describe("This test suite tests the components of the game Connect4", () => {
  describe("Consider a new game in which both players take a turn. A win will not be possible yet, because you need to connect 4 discs.", () => {
    const newGame = new Game();
    it("Player 1 plays the 1st column. Player 2 is the new active player.", () => {
      newGame.play(0);
      const boardState = newGame.getBoardState();
      expect(boardState[5][0]).toEqual("🔴");
      expect(boardState[4][0]).toEqual("⚫");
      const activePlayer = newGame.getActivePlayer();
      expect(activePlayer.getDiscColor()).toEqual("🟡");
      expect(newGame.getLastPlayedColumn()).toEqual(0);
    });
    it("Player 2 then plays the 2nd column. Player 1 is the new active player.", () => {
      const boardStateBeforeSecondTurn = newGame.getBoardState();
      expect(boardStateBeforeSecondTurn[5][1]).toEqual("⚫");
      newGame.play(1);
      const boardStateAfterSecondTurn = newGame.getBoardState();
      expect(boardStateAfterSecondTurn[5][1]).toEqual("🟡");
      const activePlayer = newGame.getActivePlayer();
      expect(activePlayer.getDiscColor()).toEqual("🔴");
      expect(newGame.getLastPlayedColumn()).toEqual(1);
    });
  });
  describe("The game need to be able to determine a winner", () => {
    it("When player 1 places his disc in a column on top of 3 other red discs a | vertical victory occurs", () => {
      const game = gameWithAlmostVerticalVictoryForPlayerOne();
      game.play(0);
      expect(game.winner).toBe(game.player1);
    });

    it("When player 1 places his disc in a row next to 3 other red discs a - horizontal victory occurs", () => {
      const game = gameWithAlmostHorizonalVictoryForPlayerOne();
      game.play(0);
      expect(game.winner).toBe(game.player1);
    });

    it("When player 2 places his disc in a diagonal line with 3 other yellow discs a / diagonal victory occurs", () => {
      const game = gameWithAlmostDiagonalVictoryForPlayerTwo();
      game.play(2);
      expect(game.winner).toBe(game.player2);
    });

    it("When player 1 places his disc in a diagonal line with 3 other red discs a \\ diagonal victory occurs", () => {
      const game = gameWithAlmostDiagonalVictoryForPlayerOne();
      game.play(5);
      expect(game.winner).toBe(game.player1);
    });
  });
});
