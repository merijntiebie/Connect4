import { Player } from "../../src/player";

describe("This suite tests the players functionality of the game connect 4.", () => {
  describe("Connect4 is a game for 2 players.", () => {
    it("Player 1 plays with red-colored discs", () => {
      const player1 = new Player("🔴");
      expect(player1.getDiscColor()).toBe("🔴");
    });
    it("Player 2 plays with yellow-colored discs", () => {
      const player2 = new Player("🟡");
      expect(player2.getDiscColor()).toBe("🟡");
    });
  });
});
