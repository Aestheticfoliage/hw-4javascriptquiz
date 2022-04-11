import Quiz from "./quiz";
import Question from "./question";

const App = () => {
  const quizEl = document.querySelector(".jquiz");
  const quizQuestionEl = document.querySelector(".jquiz__question");
  const trackerEl = document.querySelector(".jquiz__tracker");
  const taglineEl = document.querySelector(".jquiz__tagline");
  const choicesEl = document.querySelector(".jquiz__choices");
  const progressInnerEl = document.querySelector(".next");
  const nextButtonEl = document.querySelector(".restart");

  const q1 = new Question(
    "What is called variable typing in Javascript",
    [
      "Variable typing is used to assign a number to a variable, the same variable can be assigned to a string.",
      "adding variables to what you are currently typing",
      "arguments that change font after you type yes",
      "none of the above",
    ],
    0
  );
  const q2 = new Question(
    "How can you convert the string of any base to an integer in javascript",
    [
      "Variable typing is used to assign a number to a variable, the same variable can be assigned to a string.",
      "adding variables to what you are currently typing",
      "arguments that change font after you type yes",
      "none of the above",
    ],
    0
  );
  const q3 = new Question(
    "select all that apply 'What are all the types of pop up boxes available in Javascript",
    ["Alert", "confirm", "prompt", "alarm"],
    [0, 1, 2]
  );
  const q4 = new Question(
    "What is the 'pop()' method in javascript",
    [
      "to add an element to the middle of the array",
      "to unlock an elements value",
      "to make a property of an array temporarily change attributes",
      "The 'pop()' method is similar to the 'shift()' method, but the difference is that the 'shift()' method works at the array's start. The 'pop()' method takes the last element off  of the given array and returns it the array on which it is called is altered",
    ],
    3
  );
  const q5 = new Question(
    "What are the two basic groups of data types in Javascript?",
    ["primitive", "ancient", "reference-types", "heritage"],
    [0, 2]
  );
  const q6 = new Question(
    "What is the use of a 'typeof' Operator?",
    [
      " 'typeOf' is an operator used to return a string description of the type of a variable",
      "to explain the font of an element",
      " to generally describe the scope of a property",
      "to loosely reference an array",
    ],
    0
  );
  const q7 = new Question(
    "select all that apply 'What is Undefined Value in Javascript'",
    [
      "variable used in the code doesn't exist",
      "variable is not assigned to any value",
      "property does not exist",
      "a value that cannot be read by human eyes",
    ],
    [0, 1, 2]
  )
  const quiz = new quiz([q1,q2,q3,q4,q5,q6,q7]);

  const listeners = _ => {
    nextButtonEl.addEventListener("click", function(){
      const selectedRadioElem = document.querySelector
      ('input[name="choice"]:checked');
      if (selectedRadioElem){
        const key = Number(selectedRadioElem.getAttribute("data-order"));
        quiz.guess(key);
        renderAll();
      }
    })
    restartButtonEl.addEventListener("click", function(){
      quiz.reset();
      renderAll();
      nextButtonEl.getElementsByClassName.opacity = 1;

    })
  }
  const setValue = (elem, value) => {
    elem.innerHTML = value;
  }
  const renderQuestion = _ => {
    const question = quiz.getCurrentQuestion().question;
    setValue(quizQuestionEl, question);
  }
  const renderChoicesElements = _ => {
    let markup = "";
    const currentChoices = quiz.getCurrentQuestion().
    choices;
    currentChoices.forEach((elem, index) => {
      markup +=
      <li class = "jquiz__choice">
        <input type="radio" name="choice"
        class= "jquiz__input" data-order= "${index}"
        id="choice${index}">
          <label for="choice${index}"
          class="jquiz__label">
            <i></i>
            <span>${elem}</span>
          </label>
      </li>
    });
    setValue(choicesEl, markup);
  }
  
};

// var startscreenEl = document.querySelector("#startscreen");
// var startButtonEl = document.querySelector("#button");
// var gameScreenEl = document.querySelector("#gameScreen");
// var gameButtonEl = document.querySelector("#button");
// var finishScreenEl = document.querySelector("#finish");
// var answersEl = document.querySelector("#answers");
// var questionsEl = document.querySelector("#questions");
// var questionChoicesEl = document.querySelector("#questionChoices");
// var correctEl = document.querySelector("#correct");
// var correctTotalEl = document.querySelector("#correctTotal");
// var initialsEl = document.querySelector("#initials");
// var timeRemaining;
// var timerEl = document.querySelector("#timer");

// var HIDE= "isHidden";

// var correctTotal = [];

// function userInitObj (initials, score){
//   this.initials = initials;
//   this.score = score;
// }

//      var questions =[
//   {
//     question: "What is called variable typing in Javascript",
//     questionChoices:[
// "Variable typing is used to assign a number to a variable, the same variable can be assigned to a string.",
//    "adding variables to what you are currently typing",
//    "arguments that change font after you type yes",
//    "none of the above"],
//        correct: 0
//     },
//   {

//     question: "How can you convert the string of any base to an integer in javascript",
//     questionChoices: [
//       "by tying a knot around the number and pulling it in",
//       "the 'parseInt()' function is used to convert numbers b/w different bases. 'parseInt()' takes the string to be converted as its first parameter",
//       "by asking it nicely to change its attribute",
//       "by changing the original string array value to null"],
//       correct: 0
//     },

// {

//     question : "select all that apply 'What is Undefined Value in Javascript'",
//     questionChoices : [
// "variable used in the code doesn't exist",
// "variable is not assigned to any value",
//  "property does not exist",
//  "a value that cannot be read by human eyes"],
//        correct: [0,1,2]
//     },
//     {
//        question: "select all that apply 'What are all the types of pop up boxes available in Javascript",
//        questionChoices :[
// "Alert",
// "confirm",
// "prompt",
// "alarm"//          correct: [0,1,2]
// },

//  {
//   question: "What is the 'pop()' method in javascript",
//   questionChoices : [
//  "to add an element to the middle of the array",
//   "to unlock an elements value",
//   "to make a property of an array temporarily change attributes",
//   "The 'pop()' method is similar to the 'shift()' method, but the difference is that the 'shift()' method works at the array's start. The 'pop()' method takes the last element off  of the given array and returns it the array on which it is called is altered"],
//     correct: 3
// },
//  {
// question : "What are the two basic groups of data types in Javascript?",
// questionChoices : [
// "primitive",
// "ancient",
// "reference-types",
// "heritage"],
//   correct: [0,2]
// },

// {
//   question : "What is the use of a 'typeof' Operator?",
//   questionChoices :[
// " 'typeOf' is an operator used to return a string description of the type of a variable",
// "to explain the font of an element",
// " to generally describe the scope of a property",
// "to loosely reference an array"],
//     correct: 0

//   }];
// // establishing the position in the array of questions
// var currentQuestion = 0;
// // listing the elements that will change based on state of play
// var dynamicElements=[
//   startscreenel,
//   gameScreenel,
//   finishScreenEl
//  ];
// //  preparing event listeners and starting the 'correctTotal' tally
// function init(){
//   setEventlisteners();
//   correctTotal();

// }
// // stores results of correct choices
// function logResult() {
//   localStorage.setItem("correctTotal",JSON.stringify(correctTotal));

// }
// // begins game
// function initGame(){
//   currentQuestion = 0;
//   currentGame = new userInitObj("",0);
//   populateQuestion(currentQuestion);
//   updateTimer();
// }
// // Checks answer
// function checkAnswer (currentQuestion, answerID){
// console.log("answerID:" + answerID);
// console.log("answer object:");
// console.log(questions[currentQuestion]['answer']);
// if (answerID == (questions[currentQuestion]['correct']) ){
//   right(true);
// } else {
//   wrong(false);
// }
// function right(right){
//   if (right){
//     console.log("Before score:" + currentGame["score"])
//     currentGame["score"]++
//     console.log("After score:" + currentGame["score"])

//   } else {
//     currentGame["score"]--
//     timeRemaining = timeRemaining - 5
//   }
// }
// //grabs questions and answers as a list
// function populateQuestion() {
//   var questionObj = questions[currentQuestion];
//    answersEl.innerHTML = "";
//   questionsEl.textContent = questionObj.question;
//   for (i = 0; i < questionObj.answers.length; i++) {
//       var answer = questionObj.answers[i];
//       var li = document.createElement("li");
//       li.setAttribute("data-index",i);
//       li.textContent = answer;
//       answersEl.appendChild(li);
//   };
// }
// }
// init();
