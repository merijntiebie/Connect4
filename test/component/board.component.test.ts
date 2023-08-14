import { Board } from "../../src/board";

describe("This suite tests the components of the game Board", () => {
  it("Throwing a disk to the side of the board should throw an error", () => {
    const board = new Board();
    expect(() => {
      board.dropDisc(-1, "🔴");
    }).toThrowError("Column does not exist");
  });
  it("Putting a red disc in the fourth column should result in the disc dropping to the bottom in that column", () => {
    const board = new Board();
    board.dropDisc(3, "🔴");
    expect(board.getBoardState()[5][3]).toBe("🔴");
  });
});
