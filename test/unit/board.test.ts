import exp from "constants";
import { Board } from "../../src/board";

describe("This suite tests the board of connect 4.", () => {
  describe("A new game starts with a fresh board that", () => {
    it("consists of 6 rows and 7 columns", () => {
      const board = new Board();
      const boardState = board.getBoard();
      expect(boardState).toEqual([
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
      ]);
    });
  });
  describe("We should be able to drop a disc in a column and the disc should fall to the first available position", () => {
    describe("When a column is empty, the disc should fall to the bottom", () => {
      it("A red disc drops to the bottom of the first column", () => {
        const board = new Board();
        board.dropDisc(0, "🔴");
        const boardState = board.getBoard();
        expect(boardState[5][0]).toEqual("🔴");
        expect(boardState[4][0]).toEqual("⚫");
      });
      it("A yellow disc drops to the bottom of the second column", () => {
        const board = new Board();
        board.dropDisc(1, "🟡");
        const boardState = board.getBoard();
        expect(boardState[5][1]).toEqual("🟡");
        expect(boardState[4][1]).toEqual("⚫");
      });
      it("A red disc is dropped in the fifth column", () => {
        const board = new Board();
        board.dropDisc(4, "🔴");
        const boardState = board.getBoard();
        expect(boardState[5][4]).toEqual("🔴");
        expect(boardState[5][5]).toEqual("⚫");
      });
    });
  });
});
