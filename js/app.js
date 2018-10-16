'use strict';


var myElement = document.getElementById('myButton');

myElement.addEventListener('click',function() {
//let the user know what is going on
  alert('Welcome! Let\'s play a guessing game so you can learn more about me?');

  //Let's ask the user what his/her name is.
  var username = prompt('What is your name?');

  //Letting the user know, were about to begin the quiz
  alert('So ' + username+ ' let\'s get started!');

  //initialize correctAnswers
  var correctAns = 0;

  function sixQuestions(){
    //creating a array of questions
    var questionsArray1=[
      'Do I speak any languages other than english?',
      'Did I serve in the military?',
      'Do I have a college degree?' ,
      'Do I love being a developer?',
      'Do I love going on road trips?',
      'Was I born in Washington?'];

    //arry of answers to the questions being asked to the user
    var answersWordsArr = ['yes', 'yes', 'yes', 'yes', 'no', 'no'];
    var answersWordsArr2 = ['Yes', 'Yes', 'Yes', 'Yes', 'No', 'No'];
    var answersCharArr = ['y', 'y', 'y', 'y', 'n', 'n'];

    //valid response to the users
    var allResponse = ['yes', 'Yes', 'No', 'no', 'y', 'n'];

    //initialize the i to 0, set the length to the length of questions array and increment the array by 1
    for(var i = 0; i < questionsArray1.length ; i++){

      //ask the user the questions in incremental order
      var userAns = prompt(questionsArray1[i]).toLowerCase();

      //set the condition to the answer to the questions being asked
      if (userAns === answersWordsArr[i] || userAns === answersWordsArr2[i] ||
    userAns === answersCharArr[i]){

        //log the response
        console.log('User answer for Q' + (i +1) + ' ' + userAns);

        //if user is correct, alert the user that he/she is correct
        alert ('You are correct');

        //keep adding the correct answer
        correctAns++;

        console.log('User got Question ' + i + ' : ' + correctAns);

        //stop the iteration when the questions are complete

      }
      // now setting the else condition
      else {
        //if the response is not the valid response, let the user know
        if(userAns ==='' && userAns !== allResponse[i]){
          alert('Invalid response! Plese enter yes or no');
        }
        //if the users gets the answers wrong, let user know
        else {
          alert('Sorry wrong answer!')
        }
      }
    }
  }

  function questionSeven(){
    //another question to the user quizzing him about me
    alert('Do you know how many states I have lived in? Let\'s play a guessing game. Let\'s guess the number of states I\'ve lived in.');

    //the number of states I have lived in in the past
    var numStates = 4;

    //creating a for loop of 4 chances
    for (var i = 4; i > 0; i--){
      //prompt the user about
      var numPred = parseInt(prompt('Guess how many states I\'ve lived in the past. Guess a number between 1 to 10.'));

      //if the user get the guess right alert Nice guess and record the answer
      if(numPred === numStates){
        alert('Nice guess');

        //increment the answer
        correctAns ++;
        break;
      }
      //set condition if the number is less than the actual number, guess a higher number
      else if(numPred < numStates){
        alert('Try guessing a little higher number.');
      }

      //if the user guess is higher than the actual number, guess a lower number
      else if(numPred > numStates){
        alert('Too high, guess a lower number.');
      }
      else{
      //ask the user to input a valid number
        alert('Input a valid number');
      }
    }
  }
  function questionEight(){
    //guessing game for the name of the states I've lived in
    alert('Now lets see if you can name the states I\'ve lived in the past?');

    //list of states I have lived in
    var statesLived = ['texas', 'louisiana', 'new york', 'minnesota'];

    //the user gets 6 attempts to get the answer right
    for ( var j = 6; j > 0; j--){

      //ask the user the name of the states
      var statesPred = prompt('Guess the names of the state I\'ve lived in the past. You have ' + j + ' chances remaining').toLowerCase();

      //log the user response
      console.log('User answered: ' + statesPred);

      //if the user get any of the states correct, the user is alerted that the user got it right
      if(statesLived.includes(statesPred)){

        alert('You are right.');
        correctAns++;
        break;
      }
      else{
        alert('You were close. Nice try tough.');
      }
    }
  }

  function main(){
    sixQuestions();
    questionSeven();
    questionEight();
  }
  main();


  //alert the user, the number of correct answers the user was able to provide
  alert('You got ' + correctAns + ' out of 8 questions correct. You did good ' + username + '!');

})





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
