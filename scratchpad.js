

var Lettercheck = function(guess){
  this.check = function(){
    if ([gw.gameWord.indexOf(guess)] == -1) {
            console.log('not matched');

   },

}
}
      console.log('in')

for (var i = 0; i<3;i++){
  inquirer.prompt();
}


Wk 11 
 - youre going to be putting together a console-based hangman app that incorporates objects, user-input and constructors in its solution.

game.js file will randomly select a word for the player.
  requires: gamewords.js which holds all the secret words 


word.js constructor file - should contain all of the methods which will check the letters guessed versus the random word selected.
    requires: game.js which holds all the secret words 


letter.js constructor file - should control whether or not a letter appears as a "_" or as itself on-screen.
  requires: word.js which provides letter or dash to write to on-screen 



main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.


The app should end when a player guesses the correct word or runs out of guesses.
Tips


 Were focusing on game mechanics, not just on the look and feel of your app.






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