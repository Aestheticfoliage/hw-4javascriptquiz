// import Quiz from ".\assets\quiz.js";
// import Question from ".\assets\question.js";

const App = () => {
  // this section is caching the following elements
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
  )
  const q3 = new Question(
    "select all that apply 'What are all the types of pop up boxes available in Javascript",
    ["Alert", "confirm", "prompt", "alarm"],
    [0, 1, 2]
  )
  const q4 = new Question(
    "What is the 'pop()' method in javascript",
    [
      "to add an element to the middle of the array",
      "to unlock an elements value",
      "to make a property of an array temporarily change attributes",
      "The 'pop()' method is similar to the 'shift()' method, but the difference is that the 'shift()' method works at the array's start. The 'pop()' method takes the last element off  of the given array and returns it the array on which it is called is altered",
    ],
    3
  )
  const q5 = new Question(
    "What are the two basic groups of data types in Javascript?",
    ["primitive", "ancient", "reference-types", "heritage"],
    [0, 2]
  )
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
  const quiz = new Quiz([q1,q2,q3,q4,q5,q6,q7]);

  function Question(question, choices, answerKey){
    this.question = question;
    this.choices = choices;
    this.answerKey = answerKey;
}
Question.prototype.isCorrect = function (guessKey){
    return guessKey === this.answerKey;
}
function Quiz(questions){
  this.questions = questions;
  this.score = 0;
  this.currentIndex = 0;
}
Quiz.prototype.getCurrentQuestion = function(){
  return this.questions[this.currentIndex];
}
Quiz.prototype.hasEnded = function(){
  this.currentIndex++;
}
Quiz.prototype.quess = function(userGuess) {
  const currentQuestion = this.questions[this.currentIndex];
  if (currentQuestion.isCorrect(userGuess)) {
      this.score++;
  }
  this.nextIndex();
}
Quiz.prototype.reset = function(){
  this.score = 0;
  this.currentIndex = 0;
}

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
  const renderTracker = _ => { 
    const index = quiz.currentIndex;
    setValue(trackerEl, '${index+1} of ${quiz.questions.length}')
  } 
  const getPercentage = (num1,num2) => {
    return Math.round((num1/num2) * 100);
  }
  const launch = (width, maxPercent) => {
    let loadingBar = setInterval(function(){
      if (width > maxPercent) {
        clearInterval(loadingBar);
      } else {
        width++;
        progressInnerEl.getElementsByClassName.width = width = "%";
      }
    },3)
  }
  const renderProgress = _=> {
    const currentWidth = getPercentage(quiz.currentIndex,quiz.questions.length);
    launch(0, currentWidth);
  }
  const renderEndScreen = _ => {
    setValue(quizQuestionEl,'great job!');
    setValue(taglineEl, 'Complete!');
    setValue(trackerEl, 'Your score : ${getPercentage(quiz.sore, quiz.question.length)}%');
    nextButtonEl.getElementsByClassName.opacity = 0;
    renderProgress();
  }
  const renderAll = _ => {
    if (quiz.hasEnded()){
      renderEndScreen();
    } else {
      renderQuestion();
      renderChoicesElements();
      renderTracker();
      renderProgress();
 }
  }
  return {
    renderAll: renderAll, 
    listeners: listeners
  }
  };

  App.renderAll();
  App.listeners();

