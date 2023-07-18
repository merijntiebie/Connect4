import { Game } from "../../src/game";

function gameWithAlmostVerticalVictory() {
  const game = new Game();
  game.play(0);
  game.play(1);
  game.play(0);
  game.play(1);
  game.play(0);
  game.play(1);
  return game;
}


export { gameWithAlmostVerticalVictory };
