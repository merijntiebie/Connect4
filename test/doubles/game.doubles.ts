import { Game } from "../../src/game";

export function gameWithAlmostVerticalVictoryForPlayerOne() {
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

export function gameWithAlmostHorizonalVictoryForPlayerOne() {
  const game = new Game();
  game.letActivePlayerDropADisc(1);
  game.switchActivePlayer();
  game.letActivePlayerDropADisc(1);
  game.switchActivePlayer();
  game.letActivePlayerDropADisc(2);
  game.switchActivePlayer();
  game.letActivePlayerDropADisc(2);
  game.switchActivePlayer();
  game.letActivePlayerDropADisc(3);
  game.switchActivePlayer();
  game.letActivePlayerDropADisc(3);
  game.switchActivePlayer();
  return game;
}

export function gameWithAlmostDiagonalVictoryForPlayerTwo() {
  const game = new Game();
  game.play(0);
  game.play(1);
  game.play(1);
  game.play(2);
  game.play(3);
  game.play(2);
  game.play(1);
  game.play(1);
  game.play(5);
  game.play(4);
  game.play(4);
  game.play(3);
  game.play(3);

  // ⚫⚫⚫⚫⚫⚫⚫
  // ⚫⚫⚫⚫⚫⚫⚫
  // ⚫🟡⚫⚫⚫⚫⚫
  // ⚫🔴⚫🔴⚫⚫⚫
  // ⚫🔴🟡🟡🔴⚫⚫
  // 🔴🟡🟡🔴🟡🔴⚫

  return game;
}

export function gameWithAlmostDiagonalVictoryForPlayerOne() {
  const game = new Game();
  game.play(2);
  game.play(3);
  game.play(3);
  game.play(4);
  game.play(4);
  game.play(5);
  game.play(6);
  game.play(5);
  game.play(4);
  game.play(5);

  // ⚫⚫⚫⚫⚫⚫⚫
  // ⚫⚫⚫⚫⚫⚫⚫
  // ⚫⚫⚫⚫⚫⚫⚫
  // ⚫⚫⚫⚫🔴🟡⚫
  // ⚫⚫⚫🔴🔴🟡⚫
  // ⚫⚫🔴🟡🟡🟡🔴

  return game;
}
