let start = document.getElementById("start");
let questionsBlock = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choices = document.getElementById("choices");
let answer1 = document.getElementById("one");
let answer2 = document.getElementById("two");
let answer3 = document.getElementById("three");
let answer4 = document.getElementById("four");
let feedback = document.getElementById("feedback");

let questionIndex = 0;
let score = 0;

//a function that shows questions and answers
function showQuestions() {
  let q = questions[questionIndex];
  questionTitle.innerText = q.question; //updates the question
  answer1.innerHTML = q.answer1; //updates the answers
  answer2.innerHTML = q.answer2;
  answer3.innerHTML = q.answer3;
  answer4.innerHTML = q.answer4;
}

//a function that hides the start screen and shows questions and answers
function startQuiz() {
  document.getElementById("start-screen").hidden = true; //hides the start screen
  questionsBlock.style.display = "block"; //displays the div with the quiz
  showQuestions();
}

//when the "start" button is clicked, the quiz starts
start.addEventListener("click", startQuiz);

//a function that checks user answer, updates the score, and shows the next question
// triggered by onclick on the buttons that display the answers
function check(answer) {
  feedback.style.display = "block";
  if (questions[questionIndex].correct === answer) {
    score++;
    feedback.innerHTML = "Correct!";
  } else {
    feedback.innerHTML = "Wrong!";
  }
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    showQuestions();
  }
}
