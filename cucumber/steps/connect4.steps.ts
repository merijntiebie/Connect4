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

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    when(/^player (\d+) puts a disc in column (\d+)$/, (arg0, arg1) => {});

    then(/^the board has (\d+) red discs in column (\d+)$/, (arg0, arg1) => {
      expect("not implemented").toBe(false);
    });

    and(/^the board has (\d+) yellow discs in column (\d+)$/, (arg0, arg1) => {
      expect("not implemented").toBe(false);
    });

    and(/^player (\d+) wins the game with a vertical victory$/, (arg0) => {
      expect("not implemented").toBe(false);
    });
  });
});
