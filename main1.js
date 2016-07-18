var request = require('request');
var inquirer = require('inquirer');
var fs = require('fs');
var LetterCheck = require('./word.js');
var drawArray = [];
var guess;
 var i = 0; 
letterguess(i);
 

function letterguess(){
  inquirer.prompt([

    {
    type: "input",
    name: "userGuess",
    message: "Letter?",
    }

    ]).then(function(data) {
      guess = data.userGuess
      console.log(guess+'1');
      console.log(i);
      letterSend(guess);
  }); 
}

  function letterSend(guess){
     console.log(guess+'2');
     var send = new LetterCheck(guess);
  }
  

  function draw(){

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
};

function print(drawArray) {
    for (var o = 0; o < drawArray.length; o++) {
        //console.log(drawArray[o]);
    }
    }

