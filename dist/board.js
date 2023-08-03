"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor() {
        this.width = 7;
        this.height = 6;
        this.board = Array(this.height)
            .fill(null)
            .map(() => Array(this.width).fill("⚫"));
    }
    getBoardState() {
        return this.board;
    }
    doesColumnExist(column) {
        return column >= 0 && column < this.width;
    }
    placeDiscInColumn(column, disc) {
        for (let row = 5; row >= 0; row -= 1) {
            if (this.board[row][column] === "⚫") {
                this.board[row][column] = disc;
                return;
            }
        }
        throw new Error("Column is full");
    }
    dropDisc(column, disc) {
        if (!this.doesColumnExist(column)) {
            throw new Error("Column does not exist");
        }
        this.placeDiscInColumn(column, disc);
    }
    extractColumn(column) {
        const extractedColumn = this.board.map((row) => row[column]);
        return extractedColumn;
    }
}
exports.Board = Board;
