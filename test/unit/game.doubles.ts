import { Game } from "../../src/game";

function gameWherePlayerOneJustDroppedADiscInColumnZero() {
  const game = new Game();
  const column = 0;
  const activePlayer = game.getActivePlayer();
  game.board.dropDisc(column, activePlayer.getDiscColor());
  game.lastPlayedColumn = column;
  return game;
}

export { gameWherePlayerOneJustDroppedADiscInColumnZero };
