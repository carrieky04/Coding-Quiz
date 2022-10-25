var startBtn = document.getElementById("start-btn");
var welcomeScreen = document.querySelector (".startquiz");
var questionContainer = document.querySelector("#hide-questions");
var shownQuestion = document.querySelector(".container");
var questionHeading = document.querySelector(".question");
var optionsContainer = document.querySelector(".option-buttons");
var timerEl = document.querySelector(".timer");
var showResult = document.querySelector(".result");
var showScore = document.querySelector(".alldone");
var userScore = document.querySelector(".userscore");
// var userInitials = document.querySelector(".initials");
var submitBtn = document.querySelector(".submit");
var showHighScores = document.querySelector(".highscores");
var savedHighScores = document.querySelector(".savedhighscores");
var goBackBtn = document.querySelector(".goback");


var currentQuestion = {};
var optionBtn = document.createElement("button");
var score = 0;
var timer;
var timerCount = 75;
var highScores = [];
var correctAnswer;
var questionsIndex;



let questions = [
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
        answer: "square brackets",
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
    startTimer();
    askQuestion(); 
}

function startTimer() {
    timer = setInterval (function() {
        timerCount--;
        timerEl.innerHTML = "Time left: " + timerCount;

    if (timerCount === 0) {
        clearInterval(timer);
        setScore();
    }
    }, 1000);
}


    
function askQuestion() { 
    questionsIndex = Math.floor(Math.random() * questions.length)
    currentQuestion = questions[questionsIndex]
    questionHeading.textContent = currentQuestion.question

    //Global
    correctAnswer = currentQuestion.answer;

    for (let i = 0; i < currentQuestion.options.length; i++) {
       var optionBtn = document.createElement("button");
        optionBtn.innerHTML = currentQuestion.options[i];
        optionBtn.value = currentQuestion.options[i];
        optionsContainer.appendChild(optionBtn); 
        optionBtn.setAttribute("style", "color:black; background: purple; margin-bottom: 10px; border-radius: 10px; padding: 5px;") ;
        optionBtn.addEventListener("click", compare)
    }; 
}
    
function compare(event) {
    let userClick = event.target.value;
        if (userClick == correctAnswer) {
            youRight();
        } else {
            youWrong(); 
        }

    questions = questions.filter((question) => question.answer != correctAnswer);
        
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
        }
        
    if (questions.length == 0){
        setScore();
    } else {
        askQuestion();
    }
};




function youRight() {
    showResult.textContent = "Correct!";
    score ++;
}



function youWrong() {
    showResult.textContent = "You Suck!";
    timerCount -= 10;
}

function setScore() {
    questionContainer.style.display = 'none';
    showScore.style.display = 'flex';
    userScore.textContent = "Final score: " + score;
    localStorage.setItem("user score", score);  
    
}

submitBtn.addEventListener("click", function() {
    showScore.style.display = 'none';
    showHighScores.style.display = 'flex';
    
    var userInitials = document.querySelector(".initials").value;
        localStorage.setItem("user-initials", userInitials);
    
    var storedScore = localStorage.getItem("user score", score);
    var storedUserInitials = localStorage.getItem("user-initials", userInitials);
    
    savedHighScores.textContent = storedUserInitials + " - " + storedScore;
   
});



goBackBtn.addEventListener("click", function() {
    showHighScores.style.display = 'none';
    welcomeScreen.style.display = 'flex';
    
});





    
