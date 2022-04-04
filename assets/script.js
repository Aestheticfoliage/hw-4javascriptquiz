var startscreenEl = document.querySelector("#startscreen");
var startButtonEl = document.querySelector("#button");
var gameScreenEl = document.querySelector("#gameScreen");
var gameButtonEl = document.querySelector("#button");
var finishScreenEl = document.querySelector("#finish");
var submitInitEl = document.querySelector("#submitInit");
var questionsEl = document.querySelector("#questions");
var questionChoicesEl = document.querySelector("#questionChoices");
var correctEl = document.querySelector("#correct");
var correctTotalEl = document.querySelector("#correctTotal");
var timerEl = document.querySelector("#timer")
var dynamicElements=[
   startscreenEl,
   gameScreenEl,
   finishScreenEl
  ]
 
var HIDE= "isHidden";

var correctTotal = [];

function userInitObj (initials, score){
  this.initials = initials;
  this.score = score;
}


     var questions =[
  {
    question: "What is called variable typing in Javascript",
    questionChoices:[ 
    "Variable typing is used to assign a number to a variable, the same variable can be assigned to a string.", 
       "adding variables to what you are currently typing",
       "arguments that change font after you type yes",
       "none of the above"],
       correct: 0
    },
  { 
  
    question: "How can you convert the string of any base to an integer in javascript",
    questionChoices: [
      "by tying a knot around the number and pulling it in",
      "the 'parseInt()' function is used to convert numbers b/w different bases. 'parseInt()' takes the string to be converted as its first parameter",
      "by asking it nicely to change its attribute",
      "by changing the original string array value to null"],
      correct: 0
    },
  
  
{ 

    question : "select all that apply 'What is Undefined Value in Javascript'",
    questionChoices : [
      "variable used in the code doesn't exist", 
      "variable is not assigned to any value",
       "property does not exist", 
       "a value that cannot be read by human eyes"],
       correct: [0,1,2]
    },
    { 
       question: "select all that apply 'What are all the types of pop up boxes available in Javascript",
       questionChoices :[
         "Alert",
         "confirm",
         "prompt",
         "alarm"],
         correct: [0,1,2]
},
 
 {
  question: "What is the 'pop()' method in javascript",
  questionChoices : [
    "to add an element to the middle of the array",
    "to unlock an elements value",
    "to make a property of an array temporarily change attributes",
    "The 'pop()' method is similar to the 'shift()' method, but the difference is that the 'shift()' method works at the array's start. The 'pop()' method takes the last element off of the given array and returns it the array on which it is called is altered"],
    correct: 3
},
 {
question : "What are the two basic groups of data types in Javascript?",
questionChoices : [
  "primitive",
  "ancient",
  "reference-types",
  "heritage"],
  correct: [0,2]
},


{
  question : "What is the use of a 'typeof' Operator?",
  questionChoices :[
    " 'typeOf' is an operator used to return a string description of the type of a variable",
    "to explain the font of an element",
    " to generally describe the scope of a property",
    "to loosely reference an array"],
    correct: 0

  }];

var currentQuestion = 0;

var dynamicElements=[
  startscreenel,
  gameScreenel
 ]



//var question = document.querySelectorAll("h1")
//var questionChoice = document.querySelectorAll("li")
//var correctResult = ""
//var incorrectResult = [""]

