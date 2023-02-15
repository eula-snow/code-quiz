let highScores = document.getElementById("highscores");

//function that updates the list of high scores
function updateScore() {
  //compares new score with previous scores
  let scores = JSON.parse(localStorage.getItem("userData")).sort(
    (a, b) => b.score - a.score
  );
  //appends new initials and scores to the list
  for (let i = 0; i < scores.length; i++) {
    let newEntry = document.createElement("li");
    newEntry.innerText = scores[i].initials + ": " + scores[i].score.toString();
    document.getElementById("highscores").appendChild(newEntry);
  }
}

//function that clears the list of high scores
let clearScores = () => {
  localStorage.clear();
  highScores.style.display = "none";
};

updateScore();
