var startBtn = document.getElementById("start-btn");
var firstQuestion = document.querySelector (".startquiz");
var questionContainer = document.querySelector("#hide");
var shownQuestion = document.querySelector(".container");
var questionHeading = document.querySelector("#question");
var optionsContainer = document.querySelector("#option-buttons");

const questions = [
    {
        question: "What is 2+2?",
        options: ["4","5", "6", "7"],
        answer: 0,
    },
    {
        question: "What is 3+2?",
        options: ["4","5", "6", "7"],
        answer: 1,
    },
    {
        question: "What is 4+2?",
        options: ["4","5", "6", "7"],
        answer: 2,
    },
    {
        question: "What is 5+2?",
        options: ["4","5", "6", "7"],
        answer: 3,
    },
]



startBtn.addEventListener("click", startQuiz);
console.log(questions[0].question);
questionHeading.textContent = questions[0].question
for (let i = 0; i < questions[0].options.length; i++) {
    console.log(questions[0].options[i]);
    var optionBtn = document.createElement("button");
    console.log(optionBtn);
    optionBtn.innerHTML = questions[0].options[i];
    optionsContainer.appendChild(optionBtn);
  }
function startQuiz() {
    // alert('hi');  
    firstQuestion.style.display = 'none';
    nextQuestion();  
}


function nextQuestion() {
    questionContainer.style.display = 'flex';
    shownQuestion = questions[Math.floor(Math.random() * questions.length)];
    

}
    

