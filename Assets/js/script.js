//var btn = document.querySelector('#buttons');
// selectors 
// var timerEl = document.getElementById('countdown');
// var quizQuestions = document.getElementById('quizQuestions');
var timeEl = document.querySelector("#time-left");
var startGame = document.querySelector('#start');
var startScreen = document.querySelector("#start-screen");
var quizScreen = document.querySelector("#quiz-screen");
var endScreen = document.querySelector("#end-screen");
var quizQuestions = document.querySelector("#quizQuestions");
var quizChoices = document.querySelector("#choices");
// var quizContainer = document.querySelector("#")


// functional variables
// 
var timeLeft = 10;
var totalScore;
var timeInterval;
var questionIndex = 0;
var choiceIndex = 0;



const questions = [
    {
        question: "Which value is a string?",
        choices: [42, "%", "var", "'Hello'"],
        answer: "'string'"
        },     
    {
        question: "Which is not a way to declare a variable ",
        choices: ["let", "make", "var", "const"],
        answer: "make"

    },
    {
        question: "How do you add 2 strings together?",
        choices: ["*", "+", "%", "/"],
        answer: "+"
    },

];

// code starts here

function start (){
    startScreen.setAttribute("class", "hide");
    quizScreen.removeAttribute("class");
    timeInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left";
        if (timeLeft <= 0 ){
            gameOver();
        }
    

    },1000);
    renderQuestion();
};
function gameOver(){
    
    clearInterval(timeInterval);
    quizScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class");

    




}
function renderQuestion(){
    quizQuestions.textContent = questions[0].question;
    
    
    //  for (var i =0; i < questions.length;i++){

    //     quizQuestions.textContent = questions[i].question;


    //  };



}
function renderChoices(){
    quizChoices.textContent = questions[0].choices;

};
renderChoices();
// var timeLeft = 30;


// call this loop to cycle through quiz questions and answers 
// use random??
// add eventlistener to click answers and count score
// local storage to save scores

// function displayQuiz(){

//     for (var i =0; i < questions.length; i++){

//         quizQuestions.textContent = questions.question[i];
//     };

// }

//if (answer to question == true){
//  move to next question
//} else{
//  timeLeft -= 10;
//  move to the next question
//}

// .addEventListener('click', function(){
// 
//})

// need prevent default
// function gameOver(){
//     finished = alert("Game over");
//     // show score
//     // enter intials 
//     // show high scores
//     restart = confirm("play again?")
//     if (restart == true){
//         // function  to start quiz
//     } else {
//         // show high scores
//     }


// }

// const highScores = JSON.parse(localStorage.getItem('totalScore'));

startGame.addEventListener('click',start);




//btn.addEventListener('click', )

