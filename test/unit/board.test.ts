import exp from "constants";
import { Board } from "../../src/board";

describe("This suite tests the board of connect 4.", () => {
  describe("A new game starts with a fresh board that", () => {
    it("consists of 6 rows and 7 columns", () => {
      const board = new Board();
      const boardState = board.getBoardState();
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
    describe("Only columns that actually exist can be used", () => {
      it("First one exists", () => {
        const board = new Board();
        const doesColumnExist = board.doesColumnExist(0);
        expect(doesColumnExist).toEqual(true);
      });
      it("Sixth one exists", () => {
        const board = new Board();
        const doesColumnExist = board.doesColumnExist(5);
        expect(doesColumnExist).toEqual(true);
      });
      it("Eighth one does not exist..", () => {
        const board = new Board();
        const doesColumnExist = board.doesColumnExist(7);
        expect(doesColumnExist).toEqual(false);
      });
    });
    describe("When a column is empty, the disc should fall straight down to the bottom", () => {
      it("A red disc drops to the bottom of the first column", () => {
        const board = new Board();
        board.dropDisc(0, "🔴");
        const boardState = board.getBoardState();
        expect(boardState[5][0]).toEqual("🔴");
        expect(boardState[4][0]).toEqual("⚫");
      });
      it("A yellow disc drops to the bottom of the second column", () => {
        const board = new Board();
        board.dropDisc(1, "🟡");
        const boardState = board.getBoardState();
        expect(boardState[5][1]).toEqual("🟡");
        expect(boardState[4][1]).toEqual("⚫");
      });
      it("A red disc is dropped in the fifth column", () => {
        const board = new Board();
        board.dropDisc(4, "🔴");
        const boardState = board.getBoardState();
        expect(boardState[5][4]).toEqual("🔴");
        expect(boardState[5][5]).toEqual("⚫");
      });
    });
    describe("When a column is partially filled, the disc should occupy the next available space within the column", () => {
      it("A red disc drops on top of a yellow disc in the first column", () => {
        const board = new Board();
        board.dropDisc(0, "🟡");
        board.dropDisc(0, "🔴");
        const boardState = board.getBoardState();
        expect(boardState[5][0]).toEqual("🟡");
        expect(boardState[4][0]).toEqual("🔴");
      });
    });
    describe("When a column is full, the disc should not be dropped", () => {
      it("When the third column is full, a red disc should not be dropped in that column", () => {
        const board = new Board();
        board.dropDisc(2, "🔴");
        board.dropDisc(2, "🔴");
        board.dropDisc(2, "🔴");
        board.dropDisc(2, "🔴");
        board.dropDisc(2, "🔴");
        board.dropDisc(2, "🔴");
        expect(() => {
          board.dropDisc(2, "🔴");
        }).toThrowError("Column is full");
      });
    });
  });
});
