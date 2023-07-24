import { Game } from "../../src/game";
import { gameWithAlmostHorizontalVictoryForPlayerTwo, gameWithAlmostVerticalVictoryForPlayerOne, gameWithAlmostVerticalVictoryForPlayerTwo } from "../doubles/game.doubles";
import { gameWithTwoColorsInOneRowAndNoWinner } from "../doubles/game.doubles";
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
  After dropping a disc, we need to check if the game has a winner`, () => {
    describe("A player can achieve a victory by having four of his own discs in a row, and with row we mean horizontal, duh.", () => {
      it("🔴⚫⚫⚫⚫⚫⚫ | active player 🔴 -> no winner", () => {
        const newGame = gameWithAlmostHorizontalVictoryForPlayerTwo();
        newGame.activePlayer = newGame.player1;
        newGame.lastPlayedRow = 3;
        expect(newGame.checkIfPlayerWinsHorizontally()).toBe(false);
      });
      it("🔴🔴⚫⚫⚫⚫⚫ | active player 🔴 -> no winner", () => {
        const newGame = gameWithAlmostHorizontalVictoryForPlayerTwo();
        newGame.activePlayer = newGame.player1;
        newGame.lastPlayedRow = 4;
        expect(newGame.checkIfPlayerWinsHorizontally()).toBe(false);
      });
      it("🔴🟡🔴🔴🟡🟡🔴 | active player 🔴 -> no winner", () => {
        const newGame = gameWithTwoColorsInOneRowAndNoWinner();
        newGame.activePlayer = newGame.player1;
        newGame.lastPlayedRow = 5;
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
    describe("A player can achieve a victory by having four of his own discs in a column, and with column we mean vertical, duh.", () => {
      it("⚫⚫⚫🔴🔴🔴 | active player 🔴 -> no winner", () => {
        const newGame = gameWithAlmostVerticalVictoryForPlayerOne();
        expect(newGame.checkIfPlayerWinsVertically()).toBe(false);
      });
      it("⚫⚫🔴🔴🔴🔴 | active player 🔴 -> we have a winner!", () => {
        const newGame = gameWithAlmostVerticalVictoryForPlayerOne();
        newGame.letActivePlayerDropADisc(0);
        newGame.lastPlayedColumn = 0;
        expect(newGame.checkIfPlayerWinsVertically()).toBe(true);
      });
      it("⚫⚫⚫🟡🟡🟡 | active player 🟡 -> no winner", () => {
        const newGame = gameWithAlmostVerticalVictoryForPlayerTwo();
        expect(newGame.checkIfPlayerWinsVertically()).toBe(false);
      });
      it("⚫⚫🟡🟡🟡🟡 | active player 🟡 -> player one has won the game!!!", () => {
        const newGame = gameWithAlmostVerticalVictoryForPlayerTwo();
        newGame.switchActivePlayer();
        newGame.play(4);
        newGame.letActivePlayerDropADisc(1);
        newGame.lastPlayedColumn = 1;
        expect(newGame.checkIfPlayerWinsVertically()).toBe(true);
      });
    });
  });
});