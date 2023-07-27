import { Board } from "../../src/board";

export function boardWithThreeRedDiscsInColumnOneAndThreeYellowDiscsInColumnTwo() {
  const board = new Board();
  board.placeDiscInColumn(0, "🔴");
  board.placeDiscInColumn(0, "🔴");
  board.placeDiscInColumn(0, "🔴");
  board.placeDiscInColumn(1, "🟡");
  board.placeDiscInColumn(1, "🟡");
  board.placeDiscInColumn(1, "🟡");
  return board;
}

export function testBoardForExtractingRow() {
  const board = new Board();
  board.placeDiscInColumn(1, "🔴");
  board.placeDiscInColumn(4, "🔴");
  board.placeDiscInColumn(6, "🔴");
  board.placeDiscInColumn(1, "🟡");
  board.placeDiscInColumn(2, "🟡");
  board.placeDiscInColumn(5, "🟡");
  return board;
}

export function testBoardForExtractingDiagonal() {
  const board = new Board();
  board.placeDiscInColumn(0, "🔴");
  board.placeDiscInColumn(1, "🟡");
  board.placeDiscInColumn(1, "🔴");
  board.placeDiscInColumn(2, "🟡");
  board.placeDiscInColumn(3, "🔴");
  board.placeDiscInColumn(2, "🟡");
  board.placeDiscInColumn(1, "🔴");
  board.placeDiscInColumn(1, "🟡");
  board.placeDiscInColumn(5, "🔴");
  board.placeDiscInColumn(4, "🟡");
  board.placeDiscInColumn(4, "🔴");
  board.placeDiscInColumn(3, "🟡");
  board.placeDiscInColumn(3, "🔴");
  board.placeDiscInColumn(2, "🟡");
  return board;
}
