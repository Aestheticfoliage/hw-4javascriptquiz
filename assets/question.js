export default function Question(question, choices, answerKey) {
  this.question = question;
  this.choices = choices;
  this.answerKey = answerKey;
}
Question.prototype.isCorrect = function (guessKey) {
  console.log(Array.isArray(this.answerKey));
  if (!Array.isArray(this.answerKey)) {
    return guessKey === this.answerKey;
  } else {
    for (let i of this.answerKey) {
      if (i === guessKey) {
        return i === guessKey;
      }
    }
  }
};
