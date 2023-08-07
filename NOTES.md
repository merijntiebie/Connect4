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

# Player Class
## Units
## Players have their own disks
✅ Player 1 -> Red 
✅ Player 2 -> Yellow

# Board Class
## Units 
### Board creation
✅ We start with an empty board
### A disk should be dropped in a column
#### Empty board
✅ red disc in column 0
✅ yellow disc in column 1
✅ red disc in column 4
#### Partially filled column
✅ 1st column, red disc on top of yellow disc
#### Column full --> error
✅ Column 4 full --> error
#### Unknown column --> error
✅ Column 8 --> error
### Extract a column from the board
✅ extract the first column, that contains 3 red discs
✅ extract the 2nd column, that contains 3 yellow discs
# Game class
## Units

### CheckIfPlayerWinsHorizontally:
✅ bottom row: 🔴🟡🟡🟡🟡⚫⚫ --> true
✅ fifth row:🔴🔴⚫⚫⚫⚫⚫ --> false
✅ fourth row: ⚫⚫⚫⚫⚫⚫⚫ --> false
✅ bottom row and red is active player: 🔴🟡🟡🟡🟡⚫⚫ --> false
✅ bottom row: 🔴🟡🔴🔴🟡🟡🔴 --> false
✅ 🔴🟡🟡🟡🟡🟡⚫ --> true

### CheckIfPlayerWinsVertically:
✅ first column: ⚫⚫⚫🔴🔴🔴 --> false
✅ first column: ⚫⚫🔴🔴🔴🔴 --> true
✅ second column: ⚫⚫⚫🟡🟡🟡 --> false
✅ second column: ⚫⚫🟡🟡🟡🟡 --> true
✅ second column: ⚫🟡🟡🔴🟡🟡 --> false
### In which row was the last disc dropped?
✅ Empty board, column 0 --> 5
✅ Then again column 0 --> 4
✅ And again --> 3

## CheckNumberOfDiscsOfActivePlayerInDiagonal

✅ - play in column 2 | active player 2
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫🟡⚫⚫⚫⚫⚫     ✅ 2 discs in bottom right corner
⚫🔴⚫🔴⚫⚫⚫     ✅ 1 disc in top left corner
⚫🔴🟡🟡🔴⚫⚫     ✅ 0 discs in bottom left corner    
🔴🟡🟡🔴🟡🔴⚫     ✅ 0 discs in top right corner


Player one places his disc in the 2nd colum --> victory
✅ play in column 2 | active player 1
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫🟡⚫⚫     ✅ 2 discs in top right corner
⚫⚫⚫⚫🔴⚫⚫
⚫🟡⚫🔴🟡⚫⚫
⚫🟡⚫🟡🔴⚫⚫
🔴🔴🟡🔴🟡🔴⚫

Player one places his disc in the 2nd colum --> victory
✅ play in column 2 | active player 2
⚫⚫⚫⚫⚫⚫⚫
⚫🔴⚫⚫🟡⚫⚫     ✅ 0 discs in top right corner
⚫🔴⚫⚫🔴⚫⚫
⚫🟡⚫🔴🟡⚫⚫
⚫🟡🟡🟡🔴⚫⚫
🔴🔴🟡🔴🟡🔴⚫

## Components

### Check if board contains a vertical victory
✅ Player one just placed his disc in the 1st colum --> victory
⚫⚫⚫⚫⚫⚫⚫ 
⚫⚫⚫⚫⚫⚫⚫
🔴⚫⚫⚫⚫⚫⚫
🔴🟡⚫⚫⚫⚫⚫
🔴🟡⚫⚫⚫⚫⚫
🔴🟡⚫⚫⚫⚫⚫
### Check if board contains a horizontal victory
✅ bottom row: 🔴🟡🟡🟡⚫⚫⚫ --> false
✅ bottom row: 🔴🟡🟡🟡🟡⚫⚫ --> true

### Check if board contains a diagonal victory
✅ Player two places his disc in the 1st colum --> victory
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫🔴🟡🔴⚫⚫⚫
⚫🔴🟡🟡🔴⚫⚫
🔴🟡🟡🔴🟡🔴⚫

✅ Player two places his disc in the 2nd colum --> victory
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫🟡⚫⚫⚫⚫⚫
⚫🔴⚫🔴⚫⚫⚫
⚫🔴🟡🟡🔴⚫⚫
🔴🟡🟡🔴🟡🔴⚫

✅ Player one places his disc in the 4th colum --> victory
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫⚫⚫⚫
⚫🟡🟡🔴🟡⚫⚫
⚫🟡🔴🟡🔴⚫⚫
🔴🔴🟡🔴🟡🔴⚫

✅ Player one places his disc in the 2nd colum --> victory
⚫⚫⚫⚫⚫⚫⚫
⚫⚫⚫⚫🟡⚫⚫
⚫⚫⚫⚫🔴⚫⚫
⚫🟡⚫🔴🟡⚫⚫
⚫🟡⚫🟡🔴⚫⚫
🔴🔴🟡🔴🟡🔴⚫

### Playing
✅ Player 1 -> column 0 -> disc in column zero | player 2 new active player | column 0 is the last played column | row 5 is the last played row
✅ Player 2 -> column 1 -> disc in column 1 | player 1 new active player | column 1 is the last played column | row 5 is the last played row


# Containerization

✅ - Create an OpenAPI definition
✅ -- Edit Post response: board as beautiful string
✅ - Create the corresponding REST API in Connect4 (including mock functionality) using the Express framework
✅ - Create an E2E test in ReadyAPI
✅ -- Finish the E2E test: assert board using regex
✅ - Create a function that starts a new game of Connect4, plays the game as bots and returns the winner and board state
✅ -- Move these functions to a seperate file or to the right classes so the API is not started on the unit tests
✅ - Implement this function into the API

# Further considerations

💡 - Create tests and functionality to handle the case that there is a draw
    --> function for createGameState | boardState, activePlayer, lastRowPlayed, lastColumnPlayed

    
-- Create function to set board state so test cases can be easily made
- Create functionality to handle the case that a player attempts to play in a column that is already full


⚫🔴🟡🟡🟡🔴🔴
🔴🟡🔴🔴🔴🟡🟡
🟡🔴🟡🟡🟡🔴🔴
🔴🟡🔴🔴🔴🟡🟡
🟡🔴🟡🟡🟡🔴🔴
🔴🟡🔴🔴🔴🟡🟡


[
        ["⚫", "🔴", "🟡", "🟡", "🟡", "🔴", "🔴"],
        ["🔴", "🟡", "🔴", "🔴", "🔴", "🟡", "🟡"],
        ["🟡", "🔴", "🟡", "🟡", "🟡", "🔴", "🔴"],
        ["🔴", "🟡", "🔴", "🔴", "🔴", "🟡", "🟡"],
        ["🟡", "🔴", "🟡", "🟡", "🟡", "🔴", "🔴"],
        ["🔴", "🟡", "🔴", "🔴", "🔴", "🟡", "🟡"],
      ]