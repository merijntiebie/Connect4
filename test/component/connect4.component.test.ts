import { Connect4 } from "../../src/connect4";

describe("In the following cases, player 1 plays with the red disks, player 2 with the yellow disks. Players can win by", () => {
  const game = new Connect4();
  game.setPlayerDisk(1, "🔴");
  game.setPlayerDisk(2, "🟡");

  describe("vertical victory", () => {
    it(`Given the board below, yellow has no vertical victory
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫🔴🟡🔴⚫⚫⚫
      ⚫🔴🟡🟡🔴⚫⚫
      🔴🟡🟡🔴🟡🔴⚫`, () => {
      game.lastPlayer = 2;
      game.lastCoordinate = [3, 2];
      game.board = [
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
        ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
      ];
      expect(game.getVerticalWinner()).toBe(undefined);
    });
    it(`Given the board below, yellow has a vertical victory
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫🟡⚫⚫⚫⚫
      ⚫🔴🟡🔴⚫⚫⚫
      ⚫🔴🟡🟡🔴⚫⚫
      🔴🟡🟡🔴🟡🔴⚫`, () => {
      game.lastPlayer = 2;
      game.lastCoordinate = [2, 2];
      game.board = [
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "🟡", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
        ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
      ];
      expect(game.getVerticalWinner()).toBe(2);
    });
  });
  describe("diagonal victory", () => {
    it(`Given the board below, yellow has no diagonal victory yet
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫🔴🟡🔴⚫⚫⚫
      ⚫🔴🟡🟡🔴⚫⚫
      🔴🟡🟡🔴🟡🔴⚫`, () => {
      game.lastPlayer = 2;
      game.lastCoordinate = [3, 2];
      game.board = [
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
        ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
      ];
      expect(game.getDiagonalWinner()).toBe(undefined);
    });
    it(`Given the board below, yellow has a diagonal victory
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫🟡⚫⚫⚫⚫⚫
      ⚫🔴🟡🔴⚫⚫⚫
      ⚫🔴🟡🟡🔴⚫⚫
      🔴🟡🟡🔴🟡🔴⚫`, () => {
      game.lastPlayer = 2;
      game.lastCoordinate = [2, 1];
      game.board = [
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
        ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
      ];
      expect(game.getDiagonalWinner()).toBe(2);
    });
    it(`Yellow has a diagonal victory after placing a disk in the third column
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫⚫⚫⚫⚫⚫⚫
      ⚫🟡⚫⚫⚫⚫⚫
      ⚫🔴🟡🔴⚫⚫⚫
      ⚫🔴🟡🟡🔴⚫⚫
      🔴🟡🟡🔴🟡🔴⚫`, () => {
      game.lastPlayer = 2;
      game.lastCoordinate = [3, 2];
      game.board = [
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
        ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
      ];
      expect(game.getDiagonalWinner()).toBe(2);
    });
    // it(`Given the board below, yellow has a diagonal victory
    //   ⚫⚫⚫⚫⚫⚫⚫
    //   ⚫⚫⚫⚫⚫⚫⚫
    //   🔴⚫⚫🟡⚫⚫⚫
    //   🔴⚫🟡🔴⚫⚫⚫
    //   🔴🟡🔴🟡⚫⚫⚫
    //   🟡🟡🔴🟡⚫⚫⚫`, () => {
    //   game.lastPlayer = 2;
    //   game.lastCoordinate = [2, 3];
    //   game.board = [
    //     ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    //     ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    //     ["🔴", "⚫", "⚫", "🟡", "⚫", "⚫", "⚫"],
    //     ["🔴", "⚫", "🟡", "🔴", "⚫", "⚫", "⚫"],
    //     ["🔴", "🟡", "🔴", "🟡", "⚫", "⚫", "⚫"],
    //     ["🟡", "🟡", "🔴", "🟡", "⚫", "⚫", "⚫"],
    //   ];
    //   expect(game.getDiagonalWinner()).toBe(2);
    // });
    // it(`Given the board below, yellow has a diagonal victory after placing a disk in the second column
    //   ⚫⚫⚫⚫⚫⚫⚫
    //   ⚫⚫⚫⚫⚫⚫⚫
    //   🔴⚫⚫🟡⚫⚫⚫
    //   🔴⚫🟡🔴⚫⚫⚫
    //   🔴🟡🔴🟡⚫⚫⚫
    //   🟡🟡🔴🟡⚫⚫⚫`, () => {
    //   game.lastPlayer = 2;
    //   game.lastCoordinate = [4, 1];
    //   game.board = [
    //     ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    //     ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    //     ["🔴", "⚫", "⚫", "🟡", "⚫", "⚫", "⚫"],
    //     ["🔴", "⚫", "🟡", "🔴", "⚫", "⚫", "⚫"],
    //     ["🔴", "🟡", "🔴", "🟡", "⚫", "⚫", "⚫"],
    //     ["🟡", "🟡", "🔴", "🟡", "⚫", "⚫", "⚫"],
    //   ];
    //   expect(game.getDiagonalWinner()).toBe(2);
    // });
    // it(`Given the board below, there is no diagonal victory
    //   ⚫⚫⚫⚫⚫⚫⚫
    //   ⚫⚫⚫⚫⚫⚫⚫
    //   ⚫⚫⚫🟡⚫⚫⚫
    //   🔴⚫🟡🟡⚫⚫⚫
    //   🔴🟡🔴🔴⚫⚫⚫
    //   🔴🟡🔴🟡⚫⚫⚫`, () => {
    //   game.lastPlayer = 2;
    //   game.lastCoordinate = [2, 3];
    //   game.board = [
    //     ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    //     ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
    //     ["⚫", "⚫", "⚫", "🟡", "⚫", "⚫", "⚫"],
    //     ["🔴", "⚫", "🟡", "🔴", "⚫", "⚫", "⚫"],
    //     ["🔴", "🟡", "🔴", "🟡", "⚫", "⚫", "⚫"],
    //     ["🔴", "🟡", "🔴", "🟡", "⚫", "⚫", "⚫"],
    //   ];
    //   expect(game.getDiagonalWinner()).toBe(undefined);
    // });
  });
});