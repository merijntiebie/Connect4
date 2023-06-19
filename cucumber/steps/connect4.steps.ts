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
    let game = new Connect4();

    given(/^2 players play a game of Connect4$/, () => {
      game = new Connect4();
    });

    and(/^player (\d+) plays with the red discs$/, (playerNumber) => {
      game.setPlayerDisk(playerNumber, "🔴");
    });

    and(/^player (\d+) plays with the yellow discs$/, (playerNumber) => {
      game.setPlayerDisk(playerNumber, "🟡");
    });

    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(player, column);
    });

    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(player, column);
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(player, column);
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(player, column);
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(player, column);
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      game.play(player, column);
    });

    when(/^player (\d+) puts a disc in column (\d+)$/, (player, column) => {
      game.play(player, column);
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
});
