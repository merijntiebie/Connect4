import { formatBoard } from "../../src/api";

describe("This is a test suite for units in de api", () => {
  describe("The board needs to be formatted so it is readable in de api", () => {
    it("An empty board is formatted correctly", () => {
      const board = [
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
      ];

      const expectedOutput = `⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫`;

      expect(formatBoard(board)).toEqual(expectedOutput);
    });
  });
});
