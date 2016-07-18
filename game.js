//game.js file will randomly select a word for the player.

var request = require('request');
var wf = require('./gamewords.js');
var wordguess = wf.wordselection.select

module.exports = function (){
 word = wordguess[Math.floor(Math.random() * wordguess.length)];
console.log(word +'4');
}
