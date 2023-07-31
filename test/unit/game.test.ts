import { Game } from "../../src/game";

describe("This suite tests the game functionality of connect4.", () => {
  describe("Players have to take turns.", () => {
    it("Player 2 becomes the active player after player 1 has taken a turn", () => {
      const newGame = new Game();
      newGame.switchActivePlayer();
      const newActivePlayer = newGame.getActivePlayer();
      expect(newActivePlayer).toBe(newGame.player2);
    });
    it("Player 1 becomes the active player after player 2 has taken a turn", () => {
      const newGame = new Game();
      newGame.switchActivePlayer();
      newGame.switchActivePlayer();
      const newActivePlayer = newGame.getActivePlayer();
      expect(newActivePlayer).toBe(newGame.player1);
    });
  });
  describe("The game needs to be able to determine whether there are 4 discs in a row", () => {
    describe("To do so the game needs to be able to determine the longest streak of the discs of the active player in a given line of discs", () => {
      it("A line of 7 empty cells => 0", () => {
        const game = new Game();
        const line = ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"];

        expect(game.determineMaximumStreakOfActivePlayerDiscs(line)).toEqual(0);
      });
      it("A line of 4 red discs of the active player => 4", () => {
        const game = new Game();
        const line = ["⚫", "⚫", "⚫", "🔴", "🔴", "🔴", "🔴"];

        expect(game.determineMaximumStreakOfActivePlayerDiscs(line)).toEqual(4);
      });
      it("A line of 1 red discs, 1 yellow disc, and 3 red discs => 3", () => {
        const game = new Game();
        const line = ["⚫", "⚫", "🔴", "🟡", "🔴", "🔴", "🔴"];

        expect(game.determineMaximumStreakOfActivePlayerDiscs(line)).toEqual(3);
      });
      it("A line of 3 red discs, 1 yellow disc, 1 empty cell and 2 red discs => 3", () => {
        const game = new Game();
        const line = ["🔴", "🔴", "🔴", "🟡", "⚫", "🔴", "🔴"];

        expect(game.determineMaximumStreakOfActivePlayerDiscs(line)).toEqual(3);
      });
      it("Just one red disc --> 1", () => {
        const game = new Game();
        const line = ["🔴"];
        expect(game.determineMaximumStreakOfActivePlayerDiscs(line)).toEqual(1);
      });
    });
  });
});
