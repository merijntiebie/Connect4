"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const board_1 = require("./board");
const player_1 = require("./player");
class Game {
    constructor() {
        this.board = new board_1.Board();
        this.player1 = new player_1.Player("🔴");
        this.player2 = new player_1.Player("🟡");
        this.activePlayer = this.player1;
        this.lastPlayedColumn = -1;
        this.lastPlayedRow = -1;
        this.winner = null;
    }
    getActivePlayer() {
        return this.activePlayer;
    }
    switchActivePlayer() {
        if (this.activePlayer === this.player1) {
            this.activePlayer = this.player2;
        }
        else {
            this.activePlayer = this.player1;
        }
    }
    getBoardState() {
        return this.board.getBoardState();
    }
    determineRowOfLastPlayedDisc() {
        const column = this.lastPlayedColumn;
        const columnArray = this.board.extractColumn(column);
        const discColorOfActivePlayer = this.activePlayer.getDiscColor();
        const row = columnArray.indexOf(discColorOfActivePlayer);
        this.lastPlayedRow = row;
    }
    letActivePlayerDropADisc(column) {
        this.board.dropDisc(column, this.activePlayer.getDiscColor());
    }
    play(column) {
        this.letActivePlayerDropADisc(column);
        this.lastPlayedColumn = column;
        this.determineRowOfLastPlayedDisc();
        if (this.checkIfPlayerWinsVertically() === true) {
            this.winner = this.activePlayer;
        }
        if (this.checkIfPlayerWinsHorizontally() === true) {
            this.winner = this.activePlayer;
        }
        if (this.checkIfPlayerWinsDiagonallyTopLeftToBottomRight() === true) {
            this.winner = this.activePlayer;
        }
        if (this.checkIfPlayerWinsDiagonallyTopRightToBottomLeft() === true) {
            this.winner = this.activePlayer;
        }
        this.switchActivePlayer();
    }
    checkIfPlayerWinsHorizontally() {
        const lastPlayedRowNumber = this.lastPlayedRow;
        const boardState = this.getBoardState();
        const lastPlayedRow = boardState[lastPlayedRowNumber];
        let numberOfDiscsOfActivePlayer = 0;
        for (let i = 0; i < lastPlayedRow.length && numberOfDiscsOfActivePlayer < 4; i += 1) {
            if (lastPlayedRow[i] === this.activePlayer.getDiscColor()) {
                numberOfDiscsOfActivePlayer += 1;
            }
            else {
                numberOfDiscsOfActivePlayer = 0;
            }
        }
        return numberOfDiscsOfActivePlayer === 4;
    }
    checkIfPlayerWinsVertically() {
        const extractedColumn = this.board.extractColumn(this.lastPlayedColumn);
        let numberOfDiscsOfActivePlayer = 0;
        for (let i = 0; i < extractedColumn.length; i += 1) {
            if (extractedColumn[i] === this.activePlayer.getDiscColor()) {
                numberOfDiscsOfActivePlayer += 1;
            }
            else {
                numberOfDiscsOfActivePlayer = 0;
            }
        }
        return numberOfDiscsOfActivePlayer === 4;
    }
    checkIfPlayerWinsDiagonallyTopLeftToBottomRight() {
        let numberOfDiscsOfActivePlayer = 1;
        const numberOfDiscsOfActivePlayerToBottomRight = this.countNumberOfDiscsOfActivePlayerInDiagonal(1, 1);
        const numberOfDiscsOfActivePlayerToTopLeft = this.countNumberOfDiscsOfActivePlayerInDiagonal(-1, -1);
        numberOfDiscsOfActivePlayer += numberOfDiscsOfActivePlayerToBottomRight;
        numberOfDiscsOfActivePlayer += numberOfDiscsOfActivePlayerToTopLeft;
        return numberOfDiscsOfActivePlayer >= 4;
    }
    checkIfPlayerWinsDiagonallyTopRightToBottomLeft() {
        let numberOfDiscsOfActivePlayer = 1;
        const numberOfDiscsOfActivePlayerToTopRight = this.countNumberOfDiscsOfActivePlayerInDiagonal(-1, 1);
        const numberOfDiscsOfActivePlayerToBottomLeft = this.countNumberOfDiscsOfActivePlayerInDiagonal(1, -1);
        numberOfDiscsOfActivePlayer += numberOfDiscsOfActivePlayerToTopRight;
        numberOfDiscsOfActivePlayer += numberOfDiscsOfActivePlayerToBottomLeft;
        return numberOfDiscsOfActivePlayer >= 4;
    }
    countNumberOfDiscsOfActivePlayerInDiagonal(rowDirection, columnDirection) {
        const boardState = this.getBoardState();
        let numberOfDiscsOfActivePlayer = 0;
        let onlyDiscsOfSameColorFound = true;
        let column = this.lastPlayedColumn + columnDirection;
        for (let row = this.lastPlayedRow + rowDirection; row < boardState.length && onlyDiscsOfSameColorFound === true; row += rowDirection) {
            if (boardState[row][column] === this.activePlayer.getDiscColor()) {
                numberOfDiscsOfActivePlayer += 1;
                column += columnDirection;
            }
            else {
                onlyDiscsOfSameColorFound = false;
            }
        }
        return numberOfDiscsOfActivePlayer;
    }
}
exports.Game = Game;
