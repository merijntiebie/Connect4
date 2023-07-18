import { Game } from "../../src/game";
import { gameWithAlmostVerticalVictoryForPlayerOne } from "../doubles/game.doubles";

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
  
});