import { loadFeature, defineFeature } from "jest-cucumber";
import { Game } from "../../src/game";

const feature = loadFeature("./cucumber/features/connect4.feature");

defineFeature(feature, (test) => {
  test("Player 1 wins with a vertical victory after 7 moves", ({
    given,
    and,
    when,
    then,
  }) => {
    let game: Game;

    given(/^2 players play a game of Connect4$/, () => {
      game = new Game();
    });

    and(/^player 1 plays with the red discs$/, () => {
      expect(game.player1.getDiscColor()).toEqual("🔴");
    });

    and(/^player 2 plays with the yellow discs$/, () => {
      expect(game.player2.getDiscColor()).toEqual("🟡");
    });

    and(/^player 1 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    and(/^player 2 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });
    and(/^player 1 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });
    and(/^player 2 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });
    and(/^player 1 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });
    and(/^player 2 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    when(/^player 1 puts a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    then(/^the board has 4 red discs in column 0$/, () => {
      expect(game.getBoardState()).toEqual([
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
      ]);
    });

    and(/^the board has 3 yellow discs in column 1$/, () => {
      // See then
    });


    and(/^player 1 wins the game with a vertical victory$/, () => {
      expect(game.winner).toBe(game.player1);
    });
  });

  test("Player 2 wins with a horizontal victory after 8 moves", ({
    given,
    and,
    when,
    then,
  }) => {
    let game: Game;

    given(/^2 players play a game of Connect4$/, () => {
      game = new Game();
    });

    and(/^player 1 plays with the red discs$/, () => {
      expect(game.player1.getDiscColor()).toEqual("🔴");
    });

    and(/^player 2 plays with the yellow discs$/, () => {
      expect(game.player2.getDiscColor()).toEqual("🟡");
    });

    and(/^player 1 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    and(/^player 2 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    and(/^player 1 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    and(/^player 2 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    and(/^player 1 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    and(/^player 2 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    and(/^player 1 has put a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    when(/^player 2 puts a disc in column (\d+)$/, (column) => {
      game.play(parseInt(column));
    });

    then(/^the board has 4 yellow discs in row 5$/, () => {
      console.log(game.getBoardState().join("\n"));
      
      expect(game.getBoardState()).toEqual([
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🔴", "⚫", "⚫", "⚫", "⚫", "⚫"],
        ["🔴", "🟡", "🟡", "🟡", "🟡", "⚫", "⚫"],
      ]);
    });

    and(/^the board has 3 red discs in column 0$/, () => {
      // See then
    });

    and(/^player 2 wins the game with a horizontal victory$/, () => {
      expect(game.winner).toBe(game.player2);
    });
  });

  // test("Player 2 wins with a diagonal victory after 14 moves", ({
  //   given,
  //   and,
  //   when,
  //   then,
  // }) => {
  //   let board: Connect4;

  //   given(/^2 players play a board of Connect4$/, () => {
  //     board = new Connect4();
  //   });

  //   and(/^player (\d+) plays with the red discs$/, (player) => {
  //     board.setPlayerDisk(parseInt(player), "🔴");
  //   });

  //   and(/^player (\d+) plays with the yellow discs$/, (player) => {
  //     board.setPlayerDisk(parseInt(player), "🟡");
  //   });

  //   and(/^player 1 has just put his disc in column 3$/, () => {
  //     board.lastPlayer = 1;
  //     board.lastCoordinate = [3, 3];
  //   });

  //   and("the current board looks like", () => {
  //     board.board = [
  //       ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
  //       ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
  //       ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
  //       ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
  //       ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
  //       ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
  //     ];
  //   });

  //   when(/^player 2 puts a disc in column 1$/, () => {
  //     board.play(2, 1);
  //   });

  //   then("the board looks like", () => {
  //     expect(board.board).toEqual([
  //       ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
  //       ["⚫", "⚫", "⚫", "⚫", "⚫", "⚫", "⚫"],
  //       ["⚫", "🟡", "⚫", "⚫", "⚫", "⚫", "⚫"],
  //       ["⚫", "🔴", "🟡", "🔴", "⚫", "⚫", "⚫"],
  //       ["⚫", "🔴", "🟡", "🟡", "🔴", "⚫", "⚫"],
  //       ["🔴", "🟡", "🟡", "🔴", "🟡", "🔴", "⚫"],
  //     ]);
  //   });

  //   and(/^player 2 wins with a diagonal victory$/, () => {
  //     expect(board.getWinner()).toEqual(2);
  //   });
  // });
});
