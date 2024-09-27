let score = document.getElementById('score');
let question = document.getElementById('question');
let ans = document.getElementById('ans');
let form = document.getElementById('form');

// Retrieve score from localStorage or start at 0 if no score is stored
let myScore = localStorage.getItem('myScore') ? Number(localStorage.getItem('myScore')) : 0;
score.textContent = `Score: ${myScore}`;

let q1 = Math.floor(Math.random() * 18);
let q2 = Math.floor(Math.random() * 23);
let realAns = q1 * q2;

question.textContent = `What is ${q1} multiply by ${q2}?`;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from refreshing the page

  if (Number(ans.value) === realAns) {
    myScore = myScore +10 // Increment score if the answer is correct
    localStorage.setItem('myScore', myScore);
    score.textContent = `Score: ${myScore}`;

    // Store the updated score in localStorage
    if(myScore===100){
      alert(`Congratulations you have completed ${myScore}`);
      localStorage.removeItem('myScore',myScore)                           
    }
    
  } else {
    myScore -=10;;  // Increment score if the answer is correct
    localStorage.setItem('myScore', myScore);
    score.textContent = `Score: ${myScore}`;

  }

  // Reset the input field
  ans.value = '';

  // Generate new question
  q1 = Math.floor(Math.random() * 10);
  q2 = Math.floor(Math.random() * 10);
  realAns = q1 * q2;
  question.textContent = `What is ${q1} multiply by ${q2}?`;
});
