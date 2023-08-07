"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBoard = exports.playGame = void 0;
const express_1 = __importDefault(require("express"));
const game_1 = require("./game");
function playGame() {
    const game = new game_1.Game();
    while (game.winner === undefined) {
        game.play(Math.floor(Math.random() * 7));
    }
    return game;
}
exports.playGame = playGame;
function formatBoard(board) {
    return board.map((row) => row.join("")).join("\n");
}
exports.formatBoard = formatBoard;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/game", (req, res) => {
    const gameOutcome = playGame();
    const formattedBoard = formatBoard(gameOutcome.board.getBoardState());
    res.json({
        winner: gameOutcome.winner?.getName(),
        state: formattedBoard,
    });
});
app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});
