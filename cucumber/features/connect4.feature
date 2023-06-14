Feature: Connect4 game

Scenario: Player 1 wins with a vertical victory after 7 moves
	Given 2 players play a game of Connect4
	And player 1 plays with the red discs
	And player 2 plays with the yellow discs
	And player 1 has put a disc in column 0
	And player 2 has put a disc in column 1
	And player 1 has put a disc in column 0
	And player 2 has put a disc in column 1
	And player 1 has put a disc in column 0
	And player 2 has put a disc in column 1
	When player 1 puts a disc in column 0
	Then the board has 4 red discs in column 0
	And the board has 3 yellow discs in column 0
	And player 1 wins the game with a vertical victory