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
  game.play(6);
  return game;
}

export {
  gameWithAlmostVerticalVictoryForPlayerOne,
  gameWithAlmostHorizontalVictoryForPlayerTwo,
  yellowWinsVerticallyInSecondColumn,
  gameWithTwoColorsInOneRowAndNoWinner,
  gameWithAlmostVerticalVictoryForPlayerTwo,
};
