## Objective

Using React and Local Storage, create an interactive version of the game Scramble.

Requirements

1. An array of words must be created. The words should not include spaces or special characters. There must be at least 10 words in the array.

2. The game should be persistent. The player's progress should be tracked throughout the game and stored in local storage.

3. The player must be able to guess by typing into a textbox and hitting enter. Once a guess has been made, correct or incorrect, the textbox should be cleared. Making a guess should NOT cause a page refresh.

4. If the guess is correct, a new scrambled word should appear.

5. If the guess is incorrect, the current scrambled word should remain.

6. After each guess, the player should receive a response telling whether the guess was correct or incorrect.

7. After each guess, the number of points or strikes should be updated and displayed for the player.

8. If the player clicks on the pass button and has at least one pass remaining, the current word should be removed, and the next scrambled word should be displayed.

9. If the player makes it through the entire list of words OR receives the maximum number of strikes, the game should end and give the player the option to play again.

10. If the player chooses to play again, the game should restart, clearing all previous points, strikes, or used passes. The restart should be accomplished without a page refresh.

## Game Play - IMPORTANT

11. When the game begins, the player will be presented with a word that has been scrambled. The player will guess by typing into the provided textbox.

12. If the guess is correct, the player will earn a point, and a new scrambled word will appear. If the guess is incorrect, the player will receive a strike, and the scrambled word will remain.

13. A pass button will allow the player to skip a word and receive a new scrambled word. The player will only have a limited number of passes.

14. Each time a word is guessed correctly or is passed, the word is removed from the game list and will not appear again during that specific game.

15. The game is over when the player goes through all of the words in the game list OR the player has received the maximum number of strikes. At this time, the player should be presented with an option to play again.