import { getPlayerColor } from "../src/template";

describe("This suite tests the game of connect 4. It is a game in which 2 players take turns to drop their discs in a grid. The objective of the game is to be the first to form a horizontal, vertical or diagonal line of four of one's own disc", () => {
  describe("We have 2 players which play with their own color", () => {
    it("Player 1 plays with the red discs", () => {
      expect(getPlayerColor(1)).toBe("red");
    });
    it("Player 2 plays with the yellow discs", () => {
      expect(getPlayerColor(2)).toBe("yellow");
    });
  });
});
