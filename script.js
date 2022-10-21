const startBtn = document.getElementById("start-btn");
const options = Array.from(document.getElementById("option-buttons"));
var firstQuestion = document.querySelector (".startquiz");
var questionContainer = document.querySelector("#hide");
var shownQuestion = document.querySelector(".container");



const questions = [
    {
        question: "What is 2+2?",
        option1: "4",
        option2: "5",
        option3: "6",
        option4: "7",
        answer: "1",
    },
    {
        question: "What is 3+2?",
        option1: "4",
        option2: "5",
        option3: "6",
        option4: "7",
        answer: "2",
    },
    {
        question: "What is 4+2?",
        option1: "4",
        option2: "5",
        option3: "6",
        option4: "7",
        answer: "3",
    },
    {
        question: "What is 5+2?",
        option1: "4",
        option2: "5",
        option3: "6",
        option4: "7",
        answer: "4",
    },
]



startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    // alert('hi');  
    firstQuestion.style.display = 'none';
    nextQuestion();  
}


function nextQuestion() {
    questionContainer.style.display = 'flex';
    shownQuestion = questions[Math.floor(Math.random() * questions.length)];


}
    

