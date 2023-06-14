import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./cucumber/features/connect4.feature");

defineFeature(feature, (test) => {
  test("Player 1 wins with a vertical victory after 7 moves", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^2 players play a game of Connect4$/, () => {});

    and(/^player (\d+) plays with the red discs$/, (arg0) => {});

    and(/^player (\d+) plays with the yellow discs$/, (arg0) => {});

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    and(/^player (\d+) has put a disc in column (\d+)$/, (arg0, arg1) => {});

    when(/^player (\d+) puts a disc in column (\d+)$/, (arg0, arg1) => {});

    then(/^the board has (\d+) red discs in column (\d+)$/, (arg0, arg1) => {});

    and(
      /^the board has (\d+) yellow discs in column (\d+)$/,
      (arg0, arg1) => {}
    );

    and(/^player (\d+) wins the game with a vertical victory$/, (arg0) => {});
  });
});
