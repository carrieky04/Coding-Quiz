var startBtn = document.getElementById("start-btn");
var welcomeScreen = document.querySelector (".startquiz");
var questionContainer = document.querySelector("#hide");
var shownQuestion = document.querySelector(".container");
var questionHeading = document.querySelector(".question");
var optionsContainer = document.querySelector(".option-buttons");
var timerEl = document.querySelector(".timer");
// var textArea = document.querySelector(".show-results");

var currentQuestion = {};
var optionBtn = document.createElement("button");
var score = 0;
var timer;
var timerCount = 75;
var highScores = [];



const questions = [
    {
        question: "A variable with a ____ scope is visible everywhere.",
        options: ["global","local", "international", "regional"],
        answer: "global",
    },
    {
        question: "To get a value back from a function, use the ___ statement",
        options: ["if/else","return", "for", "invoking"],
        answer: "return",
    },
    {
        question: "The index of the first item in an array is ___.",
        options: ["1","undefined", "0", "first"],
        answer: "0",
    },
    {
        question: "To access an array item we use it's index wrapped in ___.",
        options: ["curly brackets","parenthesis", "forward slashes", "square brackets"],
        answer: "square bracket",
    },
    {
        question: "The _____ is the brower's internal representation of your web page.",
        options: ["CSS","DOM","HTML","JavaScript"],
        answer: "DOM",
    }
]





startBtn.addEventListener("click", startQuiz);



function startQuiz() {
    welcomeScreen.style.display = 'none';
    questionContainer.style.display = 'flex';
    availableQuestions = [...questions];
    startTimer();
    askQuestion();
   
}

function startTimer () {
    timer = setInterval (function() {
        timerCount--;
        timerEl.innerHTML = "Time left: " + timerCount;
    }, 1000);
}


    
function askQuestion () { 
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    questionHeading.textContent = currentQuestion.question

    for (let i = 0; i < currentQuestion.options.length; i++) {
        console.log(currentQuestion.options[i]);
    var optionBtn = document.createElement("button");
        console.log(optionBtn);
    optionBtn.innerHTML = currentQuestion.options[i];
    optionsContainer.appendChild(optionBtn); 
    optionBtn.setAttribute("style", "color:black; background: purple; margin-bottom: 10px; border-radius: 10px; padding: 5px;") ;
    optionBtn.addEventListener("click", compare)

    };
    
}
    

function compare(event) {
    var correctOption = currentQuestion.options.answer;
    correctOption = event.target;
        if (correctOption) {
            console.log("Yay!");
            score++;

        } else if (!correctOption) {
            timer-- 
            alert("You suck!");
            return;
        }};












    
