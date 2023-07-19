import { Board } from "../../src/board";

function boardWithThreeRedDiscsInColumnOneAndThreeYellowDiscsInColumnTwo() {
  const board = new Board();
  board.placeDiscInColumn(0, "🔴");
  board.placeDiscInColumn(0, "🔴");
  board.placeDiscInColumn(0, "🔴");
  board.placeDiscInColumn(1, "🟡");
  board.placeDiscInColumn(1, "🟡");
  board.placeDiscInColumn(1, "🟡");
  return board;
}

export { boardWithThreeRedDiscsInColumnOneAndThreeYellowDiscsInColumnTwo };
