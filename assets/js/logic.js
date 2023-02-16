let start = document.getElementById("start");
let questionsBlock = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let choices = document.getElementById("choices");
let answer1 = document.getElementById("one");
let answer2 = document.getElementById("two");
let answer3 = document.getElementById("three");
let answer4 = document.getElementById("four");
let feedback = document.getElementById("feedback");
let timeElement = document.getElementById("time");

let questionIndex = 0;
let timeLeft = 60;
let intervalTimer;

//a function that shows questions and answers
function showQuestions() {
  let q = questions[questionIndex];
  questionTitle.innerText = q.question; //updates the question
  answer1.innerHTML = q.answer1; //updates the answers
  answer2.innerHTML = q.answer2;
  answer3.innerHTML = q.answer3;
  answer4.innerHTML = q.answer4;
}

//a function that shows time left
// let intervalTimer = setInterval(() => {
//   timeLeft -= 1;
//   timeElement.innerHTML = timeLeft.toString();
//   if (timeLeft <= 0) {
//     showScore();
//   }
// }, 1000);

//a function that displays the final score
function showScore() {
  questionsBlock.style.display = "none";
  // feedback.style.display = "none";
  document.getElementById("end-screen").style.display = "block";
  clearInterval(intervalTimer);
  document.getElementById("final-score").innerHTML = timeLeft.toString();
}

//a function that hides the start screen and shows questions and answers
function startQuiz() {
  document.getElementById("start-screen").hidden = true; //hides the start screen
  questionsBlock.style.display = "block"; //displays the div with the quiz
  //a function that shows time left
  intervalTimer = setInterval(() => {
    timeLeft -= 1;
    timeElement.innerHTML = timeLeft.toString();
    if (timeLeft <= 0) {
      showScore();
    }
  }, 1000);
  showQuestions();
}

//a function that checks user answer, updates the score, and shows the next question
// triggered by onclick on the buttons that display the answers
function check(answer) {
  feedback.style.display = "block";
  if (questions[questionIndex].correct === answer) {
    feedback.innerHTML = "Correct!";
    let correctSound = new Audio("assets/sfx/correct.wav");
    correctSound.play();
  } else {
    feedback.innerHTML = "Wrong!";
    let incorrectSound = new Audio("assets/sfx/incorrect.wav");
    incorrectSound.play();
    timeLeft -= 10;
  }

  if (questionIndex < questions.length - 1) {
    questionIndex++;
    showQuestions(); //shows next question
  } else {
    showScore(); //shows the final score
  }
}

//when the "start" button is clicked, the quiz starts
start.addEventListener("click", startQuiz);

//a function that saves user initials and score in local storage
function addScore() {
  let initials = document.getElementById("initials").value; //gets input value - user initials
  let scoresStr = localStorage.getItem("userData"); //retrieves user initials and scores from local storage
  let scoresArr = [];

  if (scoresStr) {
    //checks if there are any user initials and scores in the local storage
    scoresArr = JSON.parse(scoresStr); //parses string from local storage into an array
  }
  scoresArr.push({ initials: initials, score: timeLeft }); //saves the latest user initials and score into an array
  localStorage.setItem("userData", JSON.stringify(scoresArr)); //transforms array to string and saves it to local storage
  window.location = "highscores.html"; //redirects to highscores.html
}
