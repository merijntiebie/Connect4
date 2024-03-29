import { Board } from "../../src/board";
import { boardWithThreeRedDiscsInColumnOneAndThreeYellowDiscsInColumnTwo } from "./board.doubles";

describe("This unit test suite tests the functionality of the board of a game called Connect 4.", () => {
  describe("A new game starts with a fresh board that", () => {
    it("Consists of 6 rows and 7 columns, with every slot of the board being empty", () => {
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
  describe("One of the most important parts of the board is that each column of the board contains an opening at the top, through which a disc can be dropped. ", () => {
    describe("Only columns that actually exist can be used, otherwise the disc will fall to the ground", () => {
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
    describe("When a column is empty, the disc should fall straight down to the bottom of the column", () => {
      it("A red disc drops to the bottom of the first column", () => {
        const board = new Board();
        board.placeDiscInColumn(0, "🔴");
        const boardState = board.getBoardState();
        expect(boardState[5][0]).toEqual("🔴");
        expect(boardState[4][0]).toEqual("⚫");
      });
      it("A yellow disc drops to the bottom of the lonely second column", () => {
        const board = new Board();
        board.placeDiscInColumn(1, "🟡");
        const boardState = board.getBoardState();
        expect(boardState[5][1]).toEqual("🟡");
        expect(boardState[4][1]).toEqual("⚫");
      });
      it("A red disc is dropped in the fifth column and falls all the way down to the lonely canyon called the bottom", () => {
        const board = new Board();
        board.placeDiscInColumn(4, "🔴");
        const boardState = board.getBoardState();
        expect(boardState[5][4]).toEqual("🔴");
        expect(boardState[5][5]).toEqual("⚫");
      });
    });
    describe("When a column is partially filled, the disc should fall to the next available slot within the column", () => {
      it("A red disc drops on top of a yellow disc in the first column that was already there", () => {
        const board = new Board();
        board.placeDiscInColumn(0, "🟡");
        board.placeDiscInColumn(0, "🔴");
        const boardState = board.getBoardState();
        expect(boardState[5][0]).toEqual("🟡");
        expect(boardState[4][0]).toEqual("🔴");
      });
    });
    describe("When a column is full a disc will not fit through the opening at the top of the column anymore", () => {
      it("When the third column is full, a red disc cannot be dropped in that column", () => {
        const board = new Board();
        board.placeDiscInColumn(2, "🔴");
        board.placeDiscInColumn(2, "🔴");
        board.placeDiscInColumn(2, "🔴");
        board.placeDiscInColumn(2, "🔴");
        board.placeDiscInColumn(2, "🔴");
        board.placeDiscInColumn(2, "🔴");
        expect(() => {
          board.placeDiscInColumn(2, "🔴");
        }).toThrowError("Column is full");
      });
    });
  });

  describe("We need to check if the game is won by a vertical victory. To do this we need to extract a column from the board.", () => {
    it("Extract the first column from the board", () => {
      const board =
        boardWithThreeRedDiscsInColumnOneAndThreeYellowDiscsInColumnTwo();
      const firstColumn = ["⚫", "⚫", "⚫", "🔴", "🔴", "🔴"];
      expect(board.extractColumn(0)).toEqual(firstColumn);
    });
    it("Extract the second column from the board", () => {
      const board =
        boardWithThreeRedDiscsInColumnOneAndThreeYellowDiscsInColumnTwo();
      const secondColumn = ["⚫", "⚫", "⚫", "🟡", "🟡", "🟡"];
      expect(board.extractColumn(1)).toEqual(secondColumn);
    });
  });

  describe("We need to be able to determine if the board is full, so we can end in a draw", () => {
    it("An empty board is not full", () => {
      const board = new Board();
      expect(board.isFull()).toBeFalsy();
    });
  });

  describe("The board needs to be formatted so it is readable in de api", () => {
    it("An empty board is formatted correctly", () => {
      const board = new Board();

      const expectedOutput = `⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫`;

      expect(board.formatBoard()).toEqual(expectedOutput);
    });
  });
});
