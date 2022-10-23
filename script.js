var startBtn = document.getElementById("start-btn");
var welcomeScreen = document.querySelector (".startquiz");
var questionContainer = document.querySelector("#hide");
var shownQuestion = document.querySelector(".container");
var questionHeading = document.querySelector(".question");
var optionsContainer = document.querySelector(".option-buttons");
var timerEl = document.querySelector(".timer");
// var textArea = document.querySelector(".show-results");

var currentQuestion = {};
var maxQuestions = 5;
var acceptedAnswers = true;
// var chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
var score = 0;
var timer;
var timerCount = 75;
var highScores = [];



const questions = [
    {
        question: "A variable with a ____ scope is visible everywhere.",
        options: ["global","local", "international", "regional"],
        answer: 0,
    },
    {
        question: "To get a value back from a function, use the ___ statement",
        options: ["if/else","return", "for", "invoking"],
        answer: 1,
    },
    {
        question: "The index of the first item in an array is ___.",
        options: ["1","undefined", "0", "first"],
        answer: 2,
    },
    {
        question: "To access an array item we use it's index wrapped in ___.",
        options: ["curly brackets","parenthesis", "forward slashes", "square brackets"],
        answer: 3,
    },
    {
        question: "The _____ is the brower's internal representation of your web page.",
        options: ["CSS","DOM","HTML","JavaScript"],
        answer: 4,
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

// function askQuestion () {
//     questionHeading.textContent = questions[0].question
//     for (let i = 0; i < questions[0].options.length; i++) {
//         console.log(questions[0].options[i]);
//     var optionBtn = document.createElement("button");
//         console.log(optionBtn);
//     optionBtn.innerHTML = questions[0].options[i];
//     optionsContainer.appendChild(optionBtn); 
//     optionBtn.setAttribute("style", "color:black; background: purple; margin-bottom: 10px; border-radius: 10px; padding: 5px;") ;
//     optionBtn.addEventListener("click",nextQuestion);
//     };  
// } 
    
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
    optionBtn.addEventListener("click",setAnswer);
    };
   
}
    
var optionBtn = document.createElement("button");

function setAnswer() {
   
    console.log("You did it!");
        if (optionBtn === currentQuestion.answer) {
        score++;
        console.log("your score is: " + score);
        }
    }
    








    
