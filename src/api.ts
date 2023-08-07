import express, { Request, Response } from "express";
import { Game } from "./game";

export function playGame() {
  const game = new Game();

  while (game.winner === undefined) {
    game.play(Math.floor(Math.random() * 7));
  }

  return game;
}

export function formatBoard(board: string[][]) {
  return board.map((row) => row.join("")).join("\n");
}

// Create a new express application instance
const app: express.Application = express();

app.use(express.json());

// Define the POST endpoint
app.post("/game", (req: Request, res: Response) => {
  const gameOutcome = playGame();

  const formattedBoard = formatBoard(gameOutcome.board.getBoardState());
  // For now, we'll just return a placeholder response
  res.json({
    winner: gameOutcome.winner?.getName(),
    state: formattedBoard,
  });
});

// The server is listening on port 3000
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
