'use strict';


alert('Welcome! Let\'s play a guessing game so you can learn more about me?');

var username = prompt('What is your name?');

alert('So Let\'s get started!');

//initialize correctAnswers
var correctAns = 0; 

//creating a question array
var questionsArray1=[
'Do I speak any languages other than english?',
'Did I serve in the military?', 
'Do I have a college degree?' , 
'Do I love being a developer?', 
'Do I love going on road trips?', 
'Was I born in Washington?'];

//list of correct answers
var answersWordsArr = ['yes', 'yes', 'yes', 'yes', 'no', 'no'];
var answersWordsArr2 = ['Yes', 'Yes', 'Yes', 'Yes', 'No', 'No'];
var answersCharArr = ['y', 'y', 'y', 'y', 'n', 'n'];
var allResponse = ["yes", "Yes", "No", "no", "y", "n"];

for(var i = 0; i < questionsArray1.length ; ++i){
  var userAns = prompt(questionsArray[i]).toLowerCase();
  
  if (userAns === answersWordsArr[i] || userAns === answersWordsArr2[i] ||
    userAns === answersCharArr[i]){
      
      console.log('User answer for Q' + (i +1) + ' ' + userAns);
      alert ("You are correct");
      correctAns++;
      console.log(correctAns);
  }
    else {
      if(userAns === '' && userAns !== allResponse[i]){
        alert("Invalid response! Plese enter yes or no");
      }
      else {
        alert('Sorry wrong answer!')
    }
  }
}
alert("You got " + correctAns + " out of 6 questions correct. Good luck! next time " + username );

// alert('Now lets see if you can guess the number of states I\'ve besides Washington?');
// //var questionsArray2=['Do you know the states I have lived previously'];
// var stateLived = ['texas', 'louisiana', 'new york', 'innesota'];

// var statesCorrect = false;

// while(statesCorrect){
//   var statesAns = prompt('Do you know the four states I have lived previously?').toLocaleLowerCase();
//   if (statesAns === stateLived[i]){
//     alert("You are correct");
//   }
//   else{
//     alert("Uhh! That's not corect");
//   }
// }


// var answerOne = prompt("Was I born in Washington?").toLowerCase();



// var answerTwo = prompt('Does I speak languages other than english?').toLowerCase();

// if(answerTwo === 'yes' || answerTwo === 'y'){
//   alert('You got it right! I speak hindi and nepalese.');
//   console.log('The user got Question 2 Correct');
// }else{
// alert('Uhh!! You missed it. I do speak few other languages.');
// console.log('The user got Question 2 wrong');
// }

// var answerThree = prompt('Did I serve in the military?').toLowerCase();

// if(answerThree === 'yes' || answerThree === 'y'){
//   alert('You got it right! I did serve in the military.');
//   console.log('The user got Question 3 Correct');
// }else{
// alert('Oh no!! I did serve in the military.');
// console.log('The user got Question 3 wrong');
// }

// var answerFour = prompt('Do I have a college degree?').toLowerCase();

// if(answerFour === 'yes' || answerFour === 'y'){
//   alert('You got it right! I recently finished my college degree.');
//   console.log('The user got Question 4 Correct');
// }else{
// alert('Oh no! I do have a college degree.');
// console.log('The user got Question 4 wrong');
// }

// var answerFive = prompt('Do I love being a developer?').toLowerCase();

// if(answerFive === 'yes' || answerFive === 'y'){
//   alert('You got it right! I do love building things in the chrome.');
//   console.log('The user got Question54 Correct');
// }else{
// alert('Oh no! I do love developing stuff in the web.');
// console.log('The user got Question 5 wrong');
// }
