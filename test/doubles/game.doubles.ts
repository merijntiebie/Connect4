import { Game } from "../../src/game";

function gameWithAlmostVerticalVictoryForPlayerOne() {
  const game = new Game();
  game.play(0);
  game.play(1);
  game.play(0);
  game.play(1);
  game.play(0);
  game.play(1);
  return game;
}

function gameWithAlmostVerticalVictoryForPlayerTwo() {
  const game = new Game();
  game.play(0);
  game.play(1);
  game.play(0);
  game.play(1);
  game.play(0);
  game.letActivePlayerDropADisc(1);
  game.lastPlayedColumn = 1;
  return game;
}

function gameWithAlmostHorizontalVictoryForPlayerTwo() {
  const game = new Game();
  game.play(0);
  game.play(1);
  game.play(0);
  game.play(2);
  game.play(0);
  game.play(3);
  game.play(1);
  return game;
}

function gameWithAlmostDiagonalVictoryForPlayerTwoInColumn1() {
  const game = new Game();
  game.play(0);
  game.play(1);
  game.play(1);
  game.play(2);
  game.play(1);
  game.play(2);
  game.play(3);
  game.play(3);
  game.play(3);
  game.play(4);
  game.play(4);
  game.play(2);
  game.play(5);
  return game;
}

function gameWithAlmostDiagonalVictoryForPlayerTwoInColumn2() {
  const game = new Game();
  game.play(0);
  game.play(1);
  game.play(1);
  game.play(2);
  game.play(1);
  game.play(2);
  game.play(3);
  game.play(3);
  game.play(3);
  game.play(4);
  game.play(4);
  game.play(1);
  game.play(5);
  return game;
}

function gameWithAlmostDiagonalVictoryForPlayerOneInColumn4() {
  const game = new Game();
  game.play(0);
  game.play(2);
  game.play(1);
  game.play(1);
  game.play(2);
  game.play(1);
  game.play(5);
  game.play(2);
  game.play(3);
  game.play(3);
  game.play(3);
  game.play(4);
  game.play(4);
  game.play(4);
  return game;
}

function gameWithAlmostDiagonalVictoryForPlayerOneInColumn2() {
  const game = new Game();
  game.play(0);
  game.play(2);
  game.play(1);
  game.play(1);
  game.play(1);
  game.play(5);
  game.play(3);
  game.play(3);
  game.play(3);
  game.play(4);
  game.play(4);
  game.play(4);
  game.play(4);
  game.play(4);
  return game;
}

function yellowWinsVerticallyInSecondColumn() {
  const game = new Game();
  game.play(1);
  game.play(0);
  game.play(1);
  game.play(0);
  game.play(2);
  game.play(1);
  game.play(2);
  game.play(1);
  game.play(2);
  game.play(1);
  game.play(2);
  game.play(1);
  return game;
}

function gameWithTwoColorsInOneRowAndNoWinner() {
  const game = new Game();
  game.play(0);
  game.play(1);
  game.play(2);
  game.play(4);
  game.play(3);
  game.play(5);
  game.letActivePlayerDropADisc(0);
  game.lastPlayedColumn = 0;
  game.lastPlayedRow = 5;
  return game;
}

function gameWithFourYellowDiscsInSecondColumnInterruptedByARedDisc() {
  const game = new Game();
  game.play(0);
  game.play(1);
  game.play(0);
  game.play(1);
  game.play(1);
  game.play(1);
  game.play(0);
  game.letActivePlayerDropADisc(1);
  game.lastPlayedColumn = 1;
}

export function gameWithAStackOf5DiscsInFirstColumn() {
  const game = new Game();
  game.play(0);
  game.play(0);
  game.play(0);
  game.play(0);
  game.play(0);

  return game;
}

export {
  gameWithAlmostVerticalVictoryForPlayerOne,
  gameWithAlmostHorizontalVictoryForPlayerTwo,
  yellowWinsVerticallyInSecondColumn,
  gameWithTwoColorsInOneRowAndNoWinner,
  gameWithAlmostVerticalVictoryForPlayerTwo,
  gameWithFourYellowDiscsInSecondColumnInterruptedByARedDisc,
  gameWithAlmostDiagonalVictoryForPlayerTwoInColumn1,
  gameWithAlmostDiagonalVictoryForPlayerTwoInColumn2,
  gameWithAlmostDiagonalVictoryForPlayerOneInColumn4,
  gameWithAlmostDiagonalVictoryForPlayerOneInColumn2,
};
