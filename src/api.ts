import express, { Request, Response } from "express";

// Create a new express application instance
const app: express.Application = express();

app.use(express.json());

// Define the POST endpoint
app.post("/game", (req: Request, res: Response) => {
  // For now, we'll just return a placeholder response
  res.json({
    winner: "player 1",
    state: "hello world",
  });
});

// The server is listening on port 3000
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
