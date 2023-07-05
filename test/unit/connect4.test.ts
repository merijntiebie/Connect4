import { describe } from "node:test";
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

  describe("For checking whether a vertical victory occurs,", () => {
    const game = new Connect4();
    game.setPlayerDisk(1, "🔴");
    game.setPlayerDisk(2, "🟡");
    it(`With 3 red disks in the first column, there is no winner yet
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      🔴⚫⚫⚫⚫⚫⚫
      🔴🟡⚫⚫⚫⚫⚫
      🔴🟡⚫⚫⚫⚫⚫`, () => {
      game.lastPlayer = 1;
      game.lastCoordinate = [3, 0];
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
      game.lastCoordinate = [2, 0];
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
    it(`With 4 red disks in the first column, but with a yellow disk inbetween, no winner yet
      ⚫⚫⚫⚫⚫⚫⚫
      🔴⚫⚫⚫⚫⚫⚫
      🟡⚫⚫⚫⚫⚫⚫
      🔴🟡⚫⚫⚫⚫⚫
      🔴🟡⚫⚫⚫⚫⚫
      🔴🟡⚫⚫⚫⚫⚫`, () => {
      game.lastPlayer = 1;
      game.lastCoordinate = [1, 0];
      game.board = [
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🟡", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
      ];
      expect(game.getWinner()).toBe(undefined);
    });
  });

  describe("For checking whether a diagonal victory occurs. We want to check how many discs of the same color are found in every direction", () => {
    describe("Checking towards the bottom right diagonal:", () => {
      it(`When player two played the last disc in the first column, and the board looks as follows, we find three yellow discs
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫🟡⚫⚫⚫⚫⚫
        ⚫🔴🟡🔴⚫⚫⚫
        ⚫🔴🟡🟡🔴⚫⚫
        🔴🟡🟡🔴🟡🔴⚫`, () => {
        const game = new Connect4();
        game.setPlayerDisk(1, "🔴");
        game.setPlayerDisk(2, "🟡");
        const coordinate: [number, number] = [2, 1];
        const discToFind = "🟡";

        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
          ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
        ];
        expect(
          game.findNumberOfSameColoredDiscsInDiagonal(
            coordinate,
            discToFind,
            1,
            1
          )
        ).toEqual(3);
      });
      it(`When player two played the last disc in the second column, and the board looks as follows, we find two yellow discs
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫🔴🟡🔴⚫⚫⚫
        ⚫🔴🟡🟡🔴⚫⚫
        🔴🟡🟡🔴🟡🔴⚫`, () => {
        const game = new Connect4();
        game.setPlayerDisk(1, "🔴");
        game.setPlayerDisk(2, "🟡");
        const coordinate: [number, number] = [3, 2];
        const discToFind = "🟡";

        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
          ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
        ];
        expect(
          game.findNumberOfSameColoredDiscsInDiagonal(
            coordinate,
            discToFind,
            1,
            1
          )
        ).toEqual(2);
      });
      it(`When player one played the last disc in the second column, and the board looks as follows, we find two yellow discs
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫🔴⚫⚫⚫⚫⚫
        ⚫🔴⚫⚫⚫⚫⚫
        ⚫🟡🟡🔴⚫⚫⚫
        ⚫🔴🟡🟡🔴⚫⚫
        🔴🟡🟡🔴🟡🔴⚫`, () => {
        const game = new Connect4();
        game.setPlayerDisk(1, "🔴");
        game.setPlayerDisk(2, "🟡");
        const coordinate: [number, number] = [1, 1];
        const discToFind = "🔴";

        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🟡", "🟡", "🔴", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
          ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
        ];
        expect(
          game.findNumberOfSameColoredDiscsInDiagonal(
            coordinate,
            discToFind,
            1,
            1
          )
        ).toEqual(0);
      });
    });
    describe("Checking towards the top left diagonal:", () => {
      it(`When player two played the last disc in the third column, and the board looks as follows, we find one yellow disc
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫🟡⚫⚫⚫⚫⚫
        ⚫🔴🟡🔴⚫⚫⚫
        ⚫🔴🟡🟡🔴⚫⚫
        🔴🟡🟡🔴🟡🔴⚫`, () => {
        const game = new Connect4();
        game.setPlayerDisk(1, "🔴");
        game.setPlayerDisk(2, "🟡");
        const coordinate: [number, number] = [3, 2];
        const discToFind = "🟡";

        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
          ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
        ];
        expect(
          game.findNumberOfSameColoredDiscsInDiagonal(
            coordinate,
            discToFind,
            -1,
            -1
          )
        ).toEqual(1);
      });
      it(`When player one played the last disc in the fourth column, and the board looks as follows, we find two red discs
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫🔴⚫⚫⚫⚫⚫
        ⚫🟡🔴⚫⚫⚫⚫
        ⚫🔴🟡🔴⚫⚫⚫
        ⚫🔴🟡🟡🔴⚫⚫
        🔴🟡🟡🔴🟡🔴⚫`, () => {
        const game = new Connect4();
        game.setPlayerDisk(1, "🔴");
        game.setPlayerDisk(2, "🟡");
        const coordinate: [number, number] = [3, 3];
        const discToFind = "🔴";

        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🟡", "🔴", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
          ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
        ];
        expect(
          game.findNumberOfSameColoredDiscsInDiagonal(
            coordinate,
            discToFind,
            -1,
            -1
          )
        ).toEqual(2);
      });
      it(`When player one played the last disc in the fourth column, and the board looks as follows, we find no red discs
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫🔴⚫⚫⚫⚫⚫
        ⚫🟡⚫⚫⚫⚫⚫
        ⚫🔴🟡🔴⚫⚫⚫
        ⚫🔴🟡🟡🔴⚫⚫
        🔴🟡🟡🔴🟡🔴⚫`, () => {
        const game = new Connect4();
        game.setPlayerDisk(1, "🔴");
        game.setPlayerDisk(2, "🟡");
        const coordinate: [number, number] = [3, 3];
        const discToFind = "🔴";

        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
          ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
          ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
        ];
        expect(
          game.findNumberOfSameColoredDiscsInDiagonal(
            coordinate,
            discToFind,
            -1,
            -1
          )
        ).toEqual(0);
      });
    });
    describe("Checking towards the bottom left diagonal:", () => {
      it(`When player two played the last disc in the third column, and the board looks as follows, we find one yellow disc
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫🔴⚫⚫⚫⚫⚫
        ⚫🟡🟡⚫⚫⚫⚫
        ⚫🟡🔴🔴⚫⚫⚫
        ⚫🔴🟡🟡🔴⚫⚫
        🔴🟡🟡🔴🟡🔴⚫`, () => {
        const game = new Connect4();
        game.setPlayerDisk(1, "🔴");
        game.setPlayerDisk(2, "🟡");
        const coordinate: [number, number] = [2, 2];
        const discToFind = "🟡";

        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "🔴", "⚫"],
          ["⚫", "🔴", "⚫", "⚫", "🔴", "🔴", "⚫"],
          ["⚫", "🟡", "🟡", "⚫", "🔴", "🔴", "⚫"],
          ["⚫", "🟡", "🔴", "🔴", "⚫", "🔴", "⚫"],
          ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
          ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
        ];
        expect(
          game.findNumberOfSameColoredDiscsInDiagonal(
            coordinate,
            discToFind,
            1,
            -1
          )
        ).toEqual(1);
      });
      it(`When player one played the last disc in the fourth column, and the board looks as follows, we find two red discs
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫🔴⚫⚫⚫⚫⚫
        ⚫🟡🔴⚫🔴⚫⚫
        ⚫🟡🟡🔴⚫⚫⚫
        ⚫🔴🔴🟡🔴⚫⚫
        🔴🔴🟡🔴🟡🔴⚫`, () => {
        const game = new Connect4();
        game.setPlayerDisk(1, "🔴");
        game.setPlayerDisk(2, "🟡");
        const coordinate: [number, number] = [3, 3];
        const discToFind = "🔴";
        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "🔴", "⚫"],
          ["⚫", "🔴", "⚫", "⚫", "🔴", "⚫", "⚫"],
          ["⚫", "🟡", "🔴", "⚫", "🔴", "🔴", "⚫"],
          ["⚫", "🟡", "🟡", "🔴", "⚫", "🔴", "⚫"],
          ["⚫", "🔴", "🔴", "🟡", "🔴", "⚫", "⚫"],
          ["🔴", "🔴", "🟡", "🔴", "🟡", "🔴", "⚫"],
        ];
        expect(
          game.findNumberOfSameColoredDiscsInDiagonal(
            coordinate,
            discToFind,
            1,
            -1
          )
        ).toEqual(2);
      });
      it(`When player one played the last disc in the fourth column, and the board looks as follows, we find no red discs
        ⚫⚫⚫⚫⚫⚫⚫
        ⚫🔴⚫⚫⚫⚫⚫
        ⚫🟡⚫⚫⚫⚫⚫
        ⚫🟡🟡🔴⚫⚫⚫
        ⚫🔴🟡🟡🔴⚫⚫
        🔴🔴🟡🔴🟡🔴⚫`, () => {
        const game = new Connect4();
        game.setPlayerDisk(1, "🔴");
        game.setPlayerDisk(2, "🟡");
        const coordinate: [number, number] = [3, 3];
        const discToFind = "🔴";
        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "🔴", "⚫"],
          ["⚫", "🔴", "⚫", "⚫", "🔴", "⚫", "⚫"],
          ["⚫", "🟡", "⚫", "⚫", "🔴", "🔴", "⚫"],
          ["⚫", "🟡", "🟡", "🔴", "⚫", "🔴", "⚫"],
          ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
          ["🔴", "🔴", "🟡", "🔴", "🟡", "🔴", "⚫"],
        ];
        expect(
          game.findNumberOfSameColoredDiscsInDiagonal(
            coordinate,
            discToFind,
            1,
            -1
          )
        ).toEqual(0);
      });
    });
    describe("Checking towards the top right diagonal:", () => {
      it(`When player one played the last disc in the fourth column, and the board looks as follows, we find no red discs
        ⚫⚫⚫⚫⚫⚫🔴
        ⚫🔴⚫⚫⚫🔴⚫
        ⚫🟡⚫⚫🔴⚫⚫
        ⚫🟡🟡🔴⚫⚫⚫
        ⚫🔴🟡🟡🔴⚫⚫
        🔴🔴🟡🔴🟡🔴⚫`, () => {
        const game = new Connect4();
        game.setPlayerDisk(1, "🔴");
        game.setPlayerDisk(2, "🟡");
        const coordinate: [number, number] = [3, 3];
        const discToFind = "🔴";
        game.board = [
          ["⚫", "⚫", "⚫", "⚫", "⚫", "🔴", "🔴"],
          ["⚫", "🔴", "⚫", "⚫", "🔴", "🔴", "⚫"],
          ["⚫", "🟡", "⚫", "⚫", "🔴", "🔴", "⚫"],
          ["⚫", "🟡", "🟡", "🔴", "⚫", "🔴", "⚫"],
          ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
          ["🔴", "🔴", "🟡", "🔴", "🟡", "🔴", "⚫"],
        ];
        expect(
          game.findNumberOfSameColoredDiscsInDiagonal(
            coordinate,
            discToFind,
            -1,
            1
          )
        ).toEqual(3);
      });
    });
  });
});
