# Connect4
We all love to play games especially as children. I have fond memories playing Connect 4 with my brother so decided to create this Kata based on the classic game. Connect 4 is known as several names such as “Four in a Row” and “Captain’s Mistress" but was made popular by Hasbro MB Games
Connect 4
Task
The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.
Rules
If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.

If the game has been won by a player, any following moves should return ”Game has finished!”.

Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.
 
Player 1 starts the game every time and alternates with player 2.

The columns are numbered 0-6 left to right.
Good luck and enjoy!

# Units 
## Players can choose their own disks

✅ Player 1 -> Red 
✅ Player 2 -> Yellow

## Players can play a disk in a column
✅ Empty board, player 1 puts his disk in column 0 -> column 0 has a red disk in the bottom row, including last player and coordinate played
✅ Previous board, player 2 puts his disk in column 1 -> column 1 has a yellow disk in the bottom row, including last player and coordinate played

## Vertical
Player 1 wins:
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫ -> no win ✅
🔴⚫⚫⚫⚫⚫⚫
🔴🟡⚫⚫⚫⚫⚫
🔴🟡⚫⚫⚫⚫⚫

⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
🔴⚫⚫⚫⚫⚫⚫ -> is a win ✅
🔴⚫⚫⚫⚫⚫⚫
🔴🟡⚫⚫⚫⚫⚫
🔴🟡⚫⚫⚫⚫⚫


# Components!
## Diagonal victory

⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
🔴⚫⚫🟡⚫⚫⚫ -> is a win ✅
🔴⚫🟡⚫⚫⚫⚫
🔴🟡🔴⚫⚫⚫⚫
🟡🟡🔴🟡⚫⚫⚫

⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫🟡⚫⚫⚫ -> is not a win ✅
🔴⚫🟡🟡⚫⚫⚫
🔴🟡🔴🔴⚫⚫⚫
🔴🟡🔴🟡⚫⚫⚫

⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
🔴⚫⚫🟡⚫⚫⚫ -> is a win, last disc played is in column 1 
🔴⚫🟡⚫⚫⚫⚫
🔴🟡🔴⚫⚫⚫⚫
🟡🟡🔴🟡⚫⚫⚫


# Pomodoro goal: finish unit tests for determing amount of discs in every diagonal direction
# Units for this component

## Diagonal: look down to the right for same disks and return number of disks found


⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
🔴⚫🟡🟡⚫⚫⚫ --> last disk: column 1, find one yellow disk ✅
🔴🟡🔴🔴⚫⚫⚫
🔴🟡🔴🟡⚫⚫⚫

⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫ --> last disk: column 2, find zero yellow disks ✅
🔴⚫🟡🟡⚫⚫⚫
🔴🟡🔴🔴⚫⚫⚫
🔴🟡🔴🟡⚫⚫⚫

## Diagonal: look up to the left for the same disks and return number of disks found

- 1 disk --> 1 🍅
- no disk --> 0
- 3 disks --> 3