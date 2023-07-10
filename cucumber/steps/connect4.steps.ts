import { loadFeature, defineFeature } from "jest-cucumber";
import { Connect4 } from "../../src/connect4";

const feature = loadFeature("./cucumber/features/connect4.feature");

defineFeature(feature, (test) => {
  test("Player 1 wins with a vertical victory after 7 moves", ({
    given,
    and,
    when,
    then,
  }) => {
    let game: Connect4;

    given(/^2 players play a game of Connect4$/, () => {
      game = new Connect4();
    });

    and(/^player 1 plays with the red discs$/, () => {
      expect(game.player1).toEqual("🔴");
    });

    and(/^player 2 plays with the yellow discs$/, () => {
      expect(game.player2).toEqual("🟡");
    });

    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(parseInt(player), parseInt(column));
    });

    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(parseInt(player), parseInt(column));
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(parseInt(player), parseInt(column));
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(parseInt(player), parseInt(column));
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(parseInt(player), parseInt(column));
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(parseInt(player), parseInt(column));
    });

    when(/^player (\d+) puts a disc in column (\d+)$/, (player, column) => {
      game.play(parseInt(player), parseInt(column));
    });

    then(/^the board has 4 red discs in column 0$/, () => {
      expect(game.board).toEqual([
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
      ]);
    });

    and(/^the board has 3 yellow discs in column 1$/, () => {
      // See then
    });

    and(/^player 1 wins the game with a vertical victory$/, () => {
      expect(game.getWinner()).toBe(1);
    });
  });

  test("Player 2 wins with a diagonal victory after 14 moves", ({
    given,
    and,
    when,
    then,
  }) => {
    let game: Connect4;

    given(/^2 players play a game of Connect4$/, () => {
      game = new Connect4();
    });

    and(/^player (\d+) plays with the red discs$/, (player) => {
      game.setPlayerDisk(parseInt(player), "🔴");
    });

    and(/^player (\d+) plays with the yellow discs$/, (player) => {
      game.setPlayerDisk(parseInt(player), "🟡");
    });

    and(/^player 1 has just put his disc in column 3$/, () => {
      game.lastPlayer = 1;
      game.lastCoordinate = [3, 3];
    });

    and("the current board looks like", () => {
      game.board = [
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
        ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
      ];
    });

    when(/^player 2 puts a disc in column 1$/, () => {
      game.play(2, 1);
    });

    then("the board looks like", () => {
      expect(game.board).toEqual([
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
        ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
        ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
      ]);
    });

    and(/^player 2 wins with a diagonal victory$/, () => {
      expect(game.getWinner()).toEqual(2);
    });
  });
});
