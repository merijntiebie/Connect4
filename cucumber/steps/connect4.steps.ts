import { loadFeature, defineFeature } from "jest-cucumber";
import { Board } from "../../src/board";
import { Player } from "../../src/player";

const feature = loadFeature("./cucumber/features/connect4.feature");

defineFeature(feature, (test) => {
  test("Player 1 wins with a vertical victory after 7 moves", ({
    given,
    and,
    when,
    then,
  }) => {
    let board: Board;
    let player1: Player;
    let player2: Player;

    given(/^2 players play a game of Connect4$/, () => {
      board = new Board();
    });

    and(/^player 1 plays with the red discs$/, () => {
      player1 = new Player("🔴");
    });

    and(/^player 2 plays with the yellow discs$/, () => {
      player2 = new Player("🟡");
    });

    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      player.play(column); 
    });

    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      player.play(column); 
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      player.play(column); 
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      player.play(column); 
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      player.play(column); 
    });
    and(/^player (\d+) has put a disc in column (\d+)$/, (player, column) => {
      player.play(column); 
    });

    when(/^player (\d+) puts a disc in column (\d+)$/, (player, column) => {
      player.play(column); 
    });

    then(/^the board has 4 red discs in column 0$/, () => {
      expect(board.getBoard).toEqual([
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

    and(/^player 1 wins the board with a vertical victory$/, () => {
      expect(board.getWinner()).toBe(1);
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
