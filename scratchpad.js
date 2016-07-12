Wk 11 
With the files from Step 2, youre going to be putting together a 

console-based hangman app that incorporates objects, user-input and constructors in its solution.

Both letter.js and word.js should be constructor files:

word.js should contain all of the methods which will check the letters guessed versus the random word selected.

letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
Your game.js file will randomly select a word for the player.
main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
The app should end when a player guesses the correct word or runs out of guesses.
Tips

Program the game one piece at a time! Break the program down into fragments rather than chipping away little by little at giant, abstract problem.
Focus on one part of the smaller problem and get some code working.
Rinse and repeat (and remember, console.log is your friend).
Try your best to deliver a working/playable game by the end of the deadline.
Submit your app whether you finish or not; if you don't show us anything then we won't be able to help you with whatever programming issues you encountered this week.
As always, if you find yourself stumped during this assignment, be sure to contact either the instructor or a TA -- we'll be glad to help!
Working game > pretty dud. We're focusing on game mechanics, not just on the look and feel of your app.

Option Two: Hangman Game - you can get 10/10

Watch the demo

choose a theme for your game.

In the example, we used an 80s theme. All the words are famous bands or musicians from the 80s. Please choose whatever theme you'd like.
use key events to get the letter that the user typed

organize your game code inside of an object, except the key events to get the letter that the user typed.

Display the following on the page:

Press any key to get started!

Wins: # of times user guessed the word correctly

If the word is madonna then display it initially like this:

as the user guesses the correct letter, make the word display like this: mado _ _ a

Number of Guesses Remaining: # of guesses remaining for the user

Letters Already Guessed: letters the user has guessed.

The game should automatically choose another word and make the user play it.

Hangman Game Bonuses

Play a sound or song when the user guesses the word correctly - in our case it was a song by the artist

Style your game so that it looks like your theme.