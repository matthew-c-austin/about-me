'use strict';

//Ask the user their name
const userName = prompt('Stop. Who goes there?');
alert('Oh! ' + userName +'! I didn\'t recognize you. Come on in.');

//Set the questions that are part of the quiz
const question1 = 'Was I born in New York, ' + userName + '?';
const question2 = 'Was I born in August, if you\'re so smart?';
const question3 = 'Did I go to Kansas State University?';
const question4 = 'Did I quit Spirit in 2014?';
const question5 = 'Is it expensive to have someone watch my dogs in my apartment on Christmas Day?';
const questionsArray = [question1, question2, question3, question4, question5];

//Set the answers and initialize a score count
const answersArray = ['no', 'yes', 'no', 'no', 'yes'];
let scoreCount = 0;

//Start the game
alert('Let\'s play a game. Answer some trivia about me. Go for a high score! Or a lower score if you\'re too afraid of success. Acceptable answers are in the form yes/no and y/n.');

//Loop through the questions, prompting the user for a yes/no answer. y/n are also acceptable
for (let i = 0; i < questionsArray.length; i++) {

  let userAnswer = prompt(questionsArray[i]).toLowerCase();
  if (userAnswer === answersArray[i] || userAnswer === answersArray[i].charAt(0)) {
    // console.log('Question' + i + ": Correct!");
    alert('Question ' + (i + 1) + ': Correct!');
    scoreCount++;
  } else {
    // console.log('Question' + i + ': Wrong stupid!')
    alert('Question ' + (i + 1) + ': Wrong, stupid!');
  }
}

//Show the user their score
if (scoreCount === 5) {
  alert(userName + ', you genius. You got ' + scoreCount + ' out of 5 questions correct! Thanks for playing!');
} else if (scoreCount > 0) {
  alert(userName + ', you middling talent. You got ' + scoreCount + ' out of 5 questions correct. You could be better. And don\'t blame the fact that you can\'t actually see the content of the \'about me\' page until finishing the quiz. Take responsibility for your mediocrity. Thanks for playing.');
} else {
  alert(userName + ', you pathetic worm. You got ' + scoreCount + ' out of 5 questions correct. Could it be because this quiz happens before the page load event? No, it\'s definitely your fault. Thanks for playing.');
}
