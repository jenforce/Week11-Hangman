// constructor function:::   word.js should contain all of the methods which will check the letters guessed versus the random word selected.

var select = require('./game.js')
select();  //run word select function
console.log(word + '0');

var LetterCheck = function (guess){
  this.guess = guess;
  this.word = word;
  
  //this.guessResult = guessResult;
  //this.guessResult = guessResult breaks code when on
  console.log(guess+'11');
  console.log(word + '12');
  //console.log(guessResult + '1') 

  if ([this.word.indexOf(this.guess)] == -1){   //guess in word?
     console.log('in output  -1')
    guessResult = '_' ;
      console.log(guess + 'g1')
      console.log(guessResult + 'gr1');
    }else{
    guessResult = guess;
      console.log(guessResult + 'gr2');
    }
    console.log(result + '14');
    this.addLetterFormat = function(a,b){
     this.result.push(new LetterFormat(guess, guessResult));
    }
  };

module.exports = LetterCheck;