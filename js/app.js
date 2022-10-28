'use strict';

// Ask the user their name
const userName = prompt('Stop. Who goes there?');

// For the random number guess, generate a number between 1 and 20
const minRandomNumber = 1;
const maxRandomNumber = 20;
const randomNumberAnswer = randomInteger(minRandomNumber, maxRandomNumber);

// Set the questions that are part of the quiz
const question1 = `Was I born in New York, ${userName}?`;
const question2 = 'Was I born in August, if you\'re so smart?';
const question3 = 'Did I go to Kansas State University?';
const question4 = 'Did I quit Spirit in 2014?';
const question5 = 'Is it expensive to have someone watch my dogs in my apartment on Christmas Day?';
const question6 = `Guess a number between ${minRandomNumber} and ${maxRandomNumber}. This, more than any other question, is testing your intelligence.`;
const question7 = 'Name one of the top 3 countries I would like to visit.';
const questionsArray = [question1, question2, question3, question4, question5, question6, question7];
const numberOfQuestions = questionsArray.length;

// Set the answers and initialize a score count
const yesNoAnswersArray = ['no', 'yes', 'no', 'no', 'yes'];
// Define a dictionary for question 7 with the correct answers for in place searching
const topThreeTravelAnswers = {['japan'] : true, ['new zealand'] : true, ['iceland'] : true};
let scoreCount = 0;

//Acknowledge the user
alert(`Oh! ${userName}! I didn't recognize you. Come on in.`);

// Start the game
alert('Let\'s play a game. Answer some trivia about me. Go for a high score! Or a low score if you\'re too afraid of success. Acceptable answers are in the form yes/no and y/n, unless otherwise noted.');

quizGame();

//This function returns a random integer between min and max (both included)

function randomInteger(min, max){
  return Math.floor(Math.random() * (max - min + 1 )) + min;

}

function quizGame (){
  // Loop through the questions
  for (let i = 0; i < numberOfQuestions; i++) {

    //For readability, define a question number
    let questionNumber = i + 1;

    // For questions 1 - 5, a straight yes/no or y/n is checked
    if (questionNumber <= 5) {

      yesNoQuestions(questionNumber, questionsArray[i], yesNoAnswersArray[i]);

      // For question 6, give the user 4 chances at guessing the random number.
    } else if (questionNumber === 6) {

      ranNumQuestion(questionNumber, questionsArray[i], randomNumberAnswer, 4);

      // For question 7, give the user 6 attempts at guessing correctly.
    } else {

      travelQuestion(questionNumber, questionsArray[i], topThreeTravelAnswers, 6);

    }
  }
  showScore();
}

function yesNoQuestions (questionNumber, question, answer) {
  let userAnswer = prompt(question).toLowerCase();

  if (userAnswer === answer || userAnswer === answer.charAt(0)) {
    // console.log('Question' + (questionNumber) + ": Correct!");
    alert(`Question ${questionNumber}: Correct!`);
    scoreCount++;
  } else {
    // console.log('Question' + (questionNumber) + ': Wrong stupid!')
    alert(`Question ${questionNumber}: Wrong, stupid!`);
  }
}

function ranNumQuestion(questionNumber, question, answer, attempts){
  let attemptsLeft = attempts;
  for (let i = 0; i < attempts; i++) {
    let userAnswer = prompt(question);
    attemptsLeft--;
    if (userAnswer < answer) {
      alert(`Too low. You have ${attemptsLeft} attempts left.`);
    } else if (userAnswer > answer) {
      alert(`Too high. You have ${attemptsLeft} attempts left.`);
    } else {
      alert(`Question ${questionNumber}: Correct!`);
      scoreCount++;
      break;
    }
    if (attemptsLeft === 0) {
      alert(`Question ${questionNumber}: Incorrect. Pitiful. Even with a generous number of attempts you couldn't deduce that the answer was ${answer}.`);
      break;
    }
  }
}

function travelQuestion (questionNumber, question, answers, attempts){
  let attemptsLeft = attempts;
  for (let i = 0; i < attempts; i++) {
    let userAnswer = prompt(question).toLowerCase();
    attemptsLeft--;
    if (userAnswer in answers) {
      alert(`Question ${questionNumber}: Correct!`);
      scoreCount++;
      break;
    }

    if (attemptsLeft === 0) {
      alert(`Question ${questionNumber}: Incorrect. Pitiful. Even with a generous number of attempts you couldn't deduce that the answer was ${answers[0]}, ${answers[1]}, or ${answers[2]}.`);
    } else {
      alert(`No...No that's wrong. You have three possible answers. Surely you can get just one. You have ${attemptsLeft} attempts left.`);
    }
  }
}

function showScore(){
// Show the user their score
  if (scoreCount === numberOfQuestions) {
    alert(`${userName}, you genius. You got ${scoreCount} out of ${numberOfQuestions} questions correct! Thanks for playing!`);
  } else if (scoreCount > 0) {
    alert(`${userName}, you middling talent. You got ${scoreCount} out of ${numberOfQuestions} questions correct. You could be better. And don't blame the fact that you can't actually see the content of the 'about me' page until finishing the quiz. Take responsibility for your mediocrity. Thanks for playing.`);
  } else {
    alert(`${userName}, you pathetic worm. You got ${scoreCount} out of ${numberOfQuestions} questions correct. Could it be because this quiz happens before the page load event? No, it's definitely your fault. Thanks for playing.`);
  }
}
