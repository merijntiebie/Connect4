import { describe, it } from "node:test";
import { Connect4 } from "../../src/connect4";

describe("This suite tests the game of connect 4. It is a game in which 2 players take turns to drop their discs in a grid. The objective of the game is to be the first to form a horizontal, vertical or diagonal line of four of one's own disc", () => {
  describe("A new game", () => {
    it("starts with an empty board", () => {
      const game = new Connect4();

      expect(game.board).toEqual([
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
      ]);
    });
    it("has a player 1 who plays with the red discs", () => {
      const game = new Connect4();
      expect(game.player1).toEqual("🔴");
    });
    it("has a player 2 who plays with the yellow discs", () => {
      const game = new Connect4();
      expect(game.player2).toEqual("🟡");
    });
  });
  describe("Players can drop their disc in a column of their choosing", () => {
    it("When player 1 drops his disc in column zero and there are no discs in that column yet, the disc comes at the bottom of that column ", () => {});
  });
});
