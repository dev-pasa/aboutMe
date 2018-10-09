'use strict';

alert('Welcome! Let\'s play a guessing game so you can learn more about me?');

var username = prompt('What is your name?').toUpperCase();

alert('Welcome, ' + username + ' Let\'s get started!');

var answerOne = prompt('Was I born in the US?');

if(answerOne === 'no' || answerOne === 'n'){
  alert('You got it right! I was not born in the US.');
  console.log('The user got Question 1 Correct');
}else{
alert('You Fail, I was not born in the US');
console.log('The user got Question 1 wrong');
}

var answerTwo = prompt('Does I speak languages other than english?').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
  alert('You got it right! I speak hindi and nepalese.');
  console.log('The user got Question 2 Correct');
}else{
alert('Uhh!! You missed it. I do speak few other languages.');
console.log('The user got Question 2 wrong');
}

var answerThree = prompt('Did I serve in the military?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  alert('You got it right! I did serve in the military.');
  console.log('The user got Question 3 Correct');
}else{
alert('Oh no!! I did serve in the military.');
console.log('The user got Question 3 wrong');
}

var answerFour = prompt('Do I have a college degree?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  alert('You got it right! I recently finished my college degree.');
  console.log('The user got Question 4 Correct');
}else{
alert('Oh no! I do have a college degree.');
console.log('The user got Question 4 wrong');
}

var answerFive = prompt('Do I love being a developer?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  alert('You got it right! I do love building things in the chrome.');
  console.log('The user got Question54 Correct');
}else{
alert('Oh no! I do love developing stuff in the web.');
console.log('The user got Question 5 wrong');
}