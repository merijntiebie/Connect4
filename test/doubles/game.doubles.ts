import { Game } from "../../src/game";

function gameWithAlmostVerticalVictoryForPlayerOne() {
  const game = new Game();
  game.letActivePlayerDropADisc(0);
  game.switchActivePlayer();
  game.letActivePlayerDropADisc(1);
  game.switchActivePlayer();
  game.letActivePlayerDropADisc(0);
  game.switchActivePlayer();
  game.letActivePlayerDropADisc(1);
  game.switchActivePlayer();
  game.letActivePlayerDropADisc(0);
  game.switchActivePlayer();
  game.letActivePlayerDropADisc(1);
  game.switchActivePlayer();
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

export {
  gameWithAlmostVerticalVictoryForPlayerOne,
  yellowWinsVerticallyInSecondColumn,
};
