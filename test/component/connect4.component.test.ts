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
    it("and has a player 1 that plays with red discs", () => {
      const game = new Connect4();
      expect(game.player1).toEqual("🔴");
    });
  });
});
