var request = require('request');
var inquirer = require('inquirer');
var fs = require('fs');
var wd = require('./word.js');
//var letter = require('./letter.js');

var drawArray = [];

//console.log(wd.gameWord+'3')


inquirer.prompt([
{
    type: "input",
    name: "name",
    message: "Who are you???",
  },
  {
    type: "input",
    name: "userGuess",
    message: "Letter?",
  },

  ]).then(function(data) {
    var guess = data.userGuess
      var MatchLetter = new Lettercheck(guess)
      
        
      console.log("in then function")
      console.log(guess)
      draw();
  });

  function draw(){

//var UserLetter = new Lettercheck('secretWord', 'userGuess');

  var c = console.log

  drawArray.push(c('. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '));
  drawArray.push(c('                               '));
  drawArray.push(c('                               '));
  drawArray.push(c('        __________             '));
  drawArray.push(c('        |        |             '));
  drawArray.push(c('        |        |             '));
  drawArray.push(c('        |                      '));
  drawArray.push(c('        |                      '));
  drawArray.push(c('        |                      '));
  drawArray.push(c('        |                      '));
  drawArray.push(c('        |                      '));
  drawArray.push(c('        |                      '));
  drawArray.push(c('        |                      '));
  drawArray.push(c('        |                      '));
  drawArray.push(c('        |                      '));
  drawArray.push(c('  ----------------             '));
  drawArray.push(c('  |              |             '));
  drawArray.push(c('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv'));
  drawArray.push(c('                               '));
  drawArray.push(c('                               '));
  drawArray.push(c('                               '));
  drawArray.push(c('. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . '));

console.log(drawArray.length)
  print(drawArray);

inquirer.prompt();
};

function print(drawArray) {
    for (var o = 0; o < drawArray.length; o++) {
        //console.log(drawArray[o]);
    }
    }