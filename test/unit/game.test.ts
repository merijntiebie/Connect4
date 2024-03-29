import { Game } from "../../src/game";
import {
  gameWithAlmostHorizontalVictoryForPlayerTwo,
  gameWithAlmostVerticalVictoryForPlayerOne,
  gameWithAlmostVerticalVictoryForPlayerTwo,
  gameWithTwoColorsInOneRowAndNoWinner,
  gameWithAlmostDiagonalVictoryForPlayerTwoInColumn2,
  gameWithAlmostDiagonalVictoryForPlayerOneInColumn2,
  gameWithAStackOf5DiscsInFirstColumn,
} from "../doubles/game.doubles";

import { gameWherePlayerOneJustDroppedADiscInColumnZero } from "./game.doubles";

describe("newGame suite tests the game functionality of connect4.", () => {
  describe("One of the most important concepts is that players have to take turns.", () => {
    it("Player 2 becomes the active player after player 1 has taken a turn", () => {
      const newGame = new Game();
      newGame.switchActivePlayer();
      const newActivePlayer = newGame.activePlayer;
      expect(newActivePlayer).toBe(newGame.player2);
    });
    it("Player 1 becomes the active player after player 2 has taken a turn", () => {
      const newGame = new Game();
      newGame.switchActivePlayer();
      newGame.switchActivePlayer();
      const newActivePlayer = newGame.activePlayer;
      expect(newActivePlayer).toBe(newGame.player1);
    });
  });
  describe("When a player has dropped a disc in a column, we also need to know in which row the disc ended up. So that we can use that information to eventually determine if a horizontal victory has occured.", () => {
    const newGame = gameWherePlayerOneJustDroppedADiscInColumnZero();
    it("Player 1 drops a disc in the first column of an empty board. The disc ends up in the bottom row.", () => {
      newGame.determineRowOfLastPlayedDisc();
      expect(newGame.lastPlayedRow).toEqual(5);
    });
    it("Player 2 then drops a disc in the first column of the same board that already has one disc in it. The disc ends up in the second to bottom row.", () => {
      newGame.switchActivePlayer();
      newGame.board.dropDisc(0, "🟡");
      newGame.lastPlayedColumn = 0;
      newGame.determineRowOfLastPlayedDisc();
      expect(newGame.lastPlayedRow).toEqual(4);
    });
    it("Player 1 then drops a disc in the first column of the same board that already has two discs in it. The disc ends up in the third to bottom row.", () => {
      newGame.switchActivePlayer();
      newGame.board.dropDisc(0, "🔴");
      newGame.lastPlayedColumn = 0;
      newGame.determineRowOfLastPlayedDisc();
      expect(newGame.lastPlayedRow).toEqual(3);
    });
  });
  describe(`
  Now we know that a disc has been dropped it is time to check if one of the players has won`, () => {
    describe("A player can achieve a victory by having four of his own discs in a row, and with row we mean horizontal", () => {
      it("🔴⚫⚫⚫⚫⚫⚫ | active player 🔴 -> only one red disc.. still a long way to go", () => {
        const newGame = new Game();
        newGame.letActivePlayerDropADisc(0);
        newGame.lastPlayedColumn = 0;
        newGame.lastPlayedRow = 5;
        expect(newGame.checkIfPlayerWinsHorizontally()).toBe(false);
      });
      it("🔴🟡🔴🔴🟡🟡🔴 | active player 🔴 -> full column! No 4 discs have been connected though.", () => {
        const newGame = gameWithTwoColorsInOneRowAndNoWinner();
        expect(newGame.checkIfPlayerWinsHorizontally()).toBe(false);
      });
      it("🔴🟡🟡🟡🟡⚫⚫ | active player 🟡 -> we have a winner!", () => {
        const newGame = gameWithAlmostHorizontalVictoryForPlayerTwo();
        newGame.letActivePlayerDropADisc(4);
        newGame.lastPlayedRow = 5;
        expect(newGame.checkIfPlayerWinsHorizontally()).toBe(true);
      });
      it("🔴🟡🟡🟡🟡🟡🔴 | active player 🟡 -> we have a winner!", () => {
        const newGame = gameWithAlmostHorizontalVictoryForPlayerTwo();
        newGame.letActivePlayerDropADisc(5);
        newGame.letActivePlayerDropADisc(6);
        newGame.letActivePlayerDropADisc(4);
        newGame.lastPlayedRow = 5;
        expect(newGame.checkIfPlayerWinsHorizontally()).toBe(true);
      });
    });
    describe("Besides horizontal, a player can also achieve a victory by having four of his own discs in a column. Consider the columns illustrated in the following cases:", () => {
      it("⚫⚫⚫🔴🔴🔴 | active player 🔴 -> red misses one disc", () => {
        const newGame = gameWithAlmostVerticalVictoryForPlayerOne();
        expect(newGame.checkIfPlayerWinsVertically()).toBe(false);
      });
      it("⚫⚫🔴🔴🔴🔴 | active player 🔴 -> connect 4! We have a winner!", () => {
        const newGame = gameWithAlmostVerticalVictoryForPlayerOne();
        newGame.letActivePlayerDropADisc(0);
        newGame.lastPlayedColumn = 0;
        expect(newGame.checkIfPlayerWinsVertically()).toBe(true);
      });
      it("⚫⚫⚫🟡🟡🟡 | active player 🟡 -> no winner, one more yellow disc needed..", () => {
        const newGame = gameWithAlmostVerticalVictoryForPlayerTwo();
        expect(newGame.checkIfPlayerWinsVertically()).toBe(false);
      });
      it("⚫⚫🟡🟡🟡🟡 | active player 🟡 -> player one has won the game! Hurray!", () => {
        const newGame = gameWithAlmostVerticalVictoryForPlayerTwo();
        newGame.switchActivePlayer();
        newGame.play(4);
        newGame.letActivePlayerDropADisc(1);
        newGame.lastPlayedColumn = 1;
        expect(newGame.checkIfPlayerWinsVertically()).toBe(true);
      });
      it("⚫🟡🟡🔴🟡🟡 | active player 🟡 -> no winner, because there is a red disc in between", () => {
        const newGame = gameWithAlmostVerticalVictoryForPlayerTwo();
        newGame.switchActivePlayer();
        newGame.play(4);
        newGame.letActivePlayerDropADisc(1);
        newGame.lastPlayedColumn = 1;
        expect(newGame.checkIfPlayerWinsVertically()).toBe(true);
      });
    });
  });
  describe("Finally, a winner can achieve a victory if there are 4 discs of his color connected in ia diagonal", () => {
    describe("To be able to determine if such a victory exists, we count the number of connected discs from the last played disc", () => {
      it("- Player 2 has 2 discs connected in the bottom right corner", () => {
        const newGame = gameWithAlmostDiagonalVictoryForPlayerTwoInColumn2();
        newGame.letActivePlayerDropADisc(2);
        newGame.lastPlayedColumn = 2;
        newGame.lastPlayedRow = 3;
        expect(
          newGame.countNumberOfDiscsOfActivePlayerInDiagonal(1, 1)
        ).toEqual(2);
      });
      it("- Player 2 has 1 disc connected in the top left corner", () => {
        const newGame = gameWithAlmostDiagonalVictoryForPlayerTwoInColumn2();
        newGame.letActivePlayerDropADisc(2);
        newGame.lastPlayedColumn = 2;
        newGame.lastPlayedRow = 3;
        expect(
          newGame.countNumberOfDiscsOfActivePlayerInDiagonal(-1, -1)
        ).toEqual(1);
      });
      it("- Player 2 has 0 discs connected in the bottom left corner", () => {
        const newGame = gameWithAlmostDiagonalVictoryForPlayerTwoInColumn2();
        newGame.letActivePlayerDropADisc(2);
        newGame.lastPlayedColumn = 2;
        newGame.lastPlayedRow = 3;
        expect(
          newGame.countNumberOfDiscsOfActivePlayerInDiagonal(1, -1)
        ).toEqual(0);
      });
      it("- Player 2 has 0 discs connected in the bottom left corner", () => {
        const newGame = gameWithAlmostDiagonalVictoryForPlayerTwoInColumn2();
        newGame.letActivePlayerDropADisc(2);
        newGame.lastPlayedColumn = 2;
        newGame.lastPlayedRow = 3;
        expect(
          newGame.countNumberOfDiscsOfActivePlayerInDiagonal(-1, 1)
        ).toEqual(0);
      });
      it("- Player 1 has 2 discs connected in the top right corner", () => {
        const newGame = gameWithAlmostDiagonalVictoryForPlayerOneInColumn2();
        newGame.letActivePlayerDropADisc(2);
        newGame.lastPlayedColumn = 2;
        newGame.lastPlayedRow = 4;
        expect(
          newGame.countNumberOfDiscsOfActivePlayerInDiagonal(-1, 1)
        ).toEqual(2);
      });
      it("- Player 2 has 1 disc in the top right corner but it is not connected", () => {
        const newGame = gameWithAlmostDiagonalVictoryForPlayerOneInColumn2();
        newGame.letActivePlayerDropADisc(1);
        newGame.letActivePlayerDropADisc(2);
        newGame.letActivePlayerDropADisc(1);
        newGame.letActivePlayerDropADisc(2);
        newGame.lastPlayedColumn = 2;
        newGame.lastPlayedRow = 3;
        expect(
          newGame.countNumberOfDiscsOfActivePlayerInDiagonal(-1, 1)
        ).toEqual(0);
      });
      it("- Player 2 has 1 disc in the top left corner on top of a stack of discs, the rest of the board is empty", () => {
        const newGame = gameWithAStackOf5DiscsInFirstColumn();
        newGame.letActivePlayerDropADisc(0);
        newGame.lastPlayedColumn = 0;
        newGame.lastPlayedRow = 0;

        expect(
          newGame.countNumberOfDiscsOfActivePlayerInDiagonal(-1, -1)
        ).toEqual(0);
      });
    });
  });
});
