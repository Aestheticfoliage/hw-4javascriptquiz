var card = [0,1,2,3,4,5,6,7,8,9]
//var card = document.createElement()
card.entries ();
var cardEl = document.getElementById("main");
var secondsLeft = 1000;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till test over";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000000);
}
  function asktoStart ();
    createElement.card[1];
     var question1 ={ 
  
    question: ("What is called variable typing in Javascript"),
    questionChoices : {
      choice1: ("Variable typing is used to assign a number to a variable, the same variable can be assigned to a string.", true),
      choice2: ("adding variables to what you are currently typing"),
      choice3: ("arguments that change font after you type yes"),
      choice4: ("none of the above")
    }

  }

  var question2 ={
    question: ("How can you convert the string of any base to an integer in javascript"),
    questionChoices : {
      choice1: ("by tying a knot around the number and pulling it in"),
      choice2: ("the 'parseInt()' function is used to convert numbers b/w different bases. 'parseInt()' takes the string to be converted as its first parameter", true),
      choice3:("by asking it nicely to change its attribute"),
      choice4:("by changing the original string array value to null")
    }
  
  }
  var question3 ={
    question: ("select all that apply 'What is Undefined Value in Javascript'"),
    questionChoices : {
      choice1: ("variable used in the code doesn't exist", true),
      choice2: ("variable is not assigned to any value", true),
      choice3: ("property does not exist", true),
      choice4: ("a value that cannot be read by human eyes")
    }}
     var question4 ={
       question: ("select all that apply 'What are all the types of pop up boxes available in Javascript"),
       questionChoices :{
         choice1:("Alert", true),
         choice2:("confirm",true),
         choice3:("prompt",true),
         choice4:("alarm",false),
}
} 
var question5 = {
  question: ("What is the 'pop()' method in javascript"),
  questionChoices : {
    choice1 : ("to add an element to the middle of the array"),
    choice2 : ("to unlock an elements value"),
    choice3 : ("to make a property of an array temporarily change attributes"),
    choice4 : ("The 'pop()' method is similar to the 'shift()' method, but the difference is that the 'shift()' method works at the array's start. The 'pop()' method takes the last element off of the given array and returns it the array on which it is called is altered"),
}
}
var question6 = {
question : ("What are the two basic groups of data types in Javascript?"),
questionChoices : {
  choice1: ("primitive",true),
  choice2: ("ancient", false),
  choice3: ("reference-types",true),
  choice4: ("heritage", false)
}

}
var question7 = {
  question : ("What is the use of a type of Operator?"),
  questionChoices :{
    choice1: (" 'typeOf' is an operator used to return a string description of the type of a variable", true),
    choice2: ("to explain the font of an element",false),
    choice3: (" to generally describe the scope of a property",false),
    choice4: ("to loosely reference an array",false)

  }
}


//var question = document.querySelectorAll("h1")
//var questionChoice = document.querySelectorAll("li")
//var correctResult = ""
//var incorrectResult = [""]

