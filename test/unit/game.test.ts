import { Game } from "../../src/game";

describe("This suite tests the game functionality of connect4.", () => {
  describe("One of the most important concepts is that players have to take turns.", () => {
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
    describe("The game needs to be able to determine the longest streak of the discs of the active player in a given line of discs", () => {
      it("A line of 7 empty cells => 0", () => {
        const game = new Game();
        const line = ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"];
      })
    });
  });
});
