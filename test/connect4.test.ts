import { Connect4 } from "../src/connect4";

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
  });
  describe("We have 2 players which play with their own color", () => {
    const game = new Connect4();
    it("Player 1 wants to play with the red disks", () => {
      game.setPlayerDisk(1, "🔴");
      expect(game.getPlayerDisk(1)).toBe("🔴");
    });
    it("Player 2 plays with the yellow discs", () => {
      game.setPlayerDisk(2, "🟡");
      expect(game.getPlayerDisk(2)).toBe("🟡");
    });
  });
  describe("Players need to be able to take a turn", () => {
    describe(`Players can put their disc in a column of their choosing. The following scenario will start with an empty board.
      The scenarios afterwards will make use of the board updated in previous scenarios`, () => {
      const game = new Connect4();
      game.setPlayerDisk(1, "🔴");
      game.setPlayerDisk(2, "🟡");
      it(`Player 1 can put a red disk in the first column, resulting in 
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          🔴⚫⚫⚫⚫⚫⚫`, () => {
        game.play(1, 0);
        expect(game.board).toEqual([
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ]);
        expect(game.lastPlayer).toEqual(1);
        expect(game.lastCoordinate).toEqual([5, 0]);
      });
      it(`Player 2 can put a yellow disk in the second column, resulting in
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          🔴🟡⚫⚫⚫⚫⚫`, () => {
        game.play(2, 1);
        expect(game.board).toEqual([
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ]);
        expect(game.lastPlayer).toEqual(2);
        expect(game.lastCoordinate).toEqual([5, 1]);
      });
      it(`Player 1 can put a red disk in the first column, resulting in
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          🔴⚫⚫⚫⚫⚫⚫
          🔴🟡⚫⚫⚫⚫⚫`, () => {
        game.play(1, 0);
        expect(game.board).toEqual([
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ]);
        expect(game.lastPlayer).toEqual(1);
        expect(game.lastCoordinate).toEqual([4, 0]);
      });
      it(`Player 2 can put a yellow disk in the first column, resulting in
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          ⚫⚫⚫⚫⚫⚫⚫
          🟡⚫⚫⚫⚫⚫⚫
          🔴⚫⚫⚫⚫⚫⚫
          🔴🟡⚫⚫⚫⚫⚫`, () => {
        game.play(2, 0);
        expect(game.board).toEqual([
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🟡", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ]);
        expect(game.lastPlayer).toEqual(2);
        expect(game.lastCoordinate).toEqual([3, 0]);
      });
    });
  });

  describe("In the following cases, player 1 plays with the red disks, player 2 with the yellow disks. Players can win by", () => {
    const game = new Connect4();
    game.setPlayerDisk(1, "🔴");
    game.setPlayerDisk(2, "🟡");
    describe("vertical victory", () => {
      it(`With 3 red disks in the first column, there is no winner yet
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      🔴⚫⚫⚫⚫⚫⚫
      🔴🟡⚫⚫⚫⚫⚫
      🔴🟡⚫⚫⚫⚫⚫`, () => {
        game.lastPlayer = 1;
        game.lastCoordinate = [0, 3];
        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ];
        expect(game.getWinner()).toBe(undefined);
      });
      it(`With 4 red disks in the first column, player 1 wins
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      🔴⚫⚫⚫⚫⚫⚫
      🔴🟡⚫⚫⚫⚫⚫
      🔴🟡⚫⚫⚫⚫⚫
      🔴🟡⚫⚫⚫⚫⚫`, () => {
        game.lastPlayer = 1;
        game.lastCoordinate = [0, 2];
        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ];
        expect(game.getWinner()).toBe(1);
      });
    });
  });
});
