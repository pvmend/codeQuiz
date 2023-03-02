var btn = document.querySelector('#buttons');
var timerEl = document.getElementById('countdown');
var quizQuestions = document.getElementById('quizQuestions');
var timeEl = document.querySelector(".time");


const questions = [
    {
        question: "Which value is a string?",
        choices: [42, "string", "true", "'string'"],
        answer: 3
        },     
    {
        question: "Which is not a way to declare a variable ",
        choices: ["let", "make", "var", "const"],
        answer: 1

    },
    {
        question: "How do you add 2 strings together?",
        choices: ['*', '+', '%', '/'],
        answer: 2
    },

];
function countdown(){
    var timeLeft = 30;
    
    var timeInterval = setInterval(function (){

        timeLeft--;
        timeEl.textContent = timeLeft + " seconds left";
        if (timeLeft == 0){
            timeEl.textContent = '';
            clearInterval(timeInterval);
    }   

    

    },1000);
     
}
function displayQuiz(){
    for (var i =0; i < questions.length; i++){
        quizQuestions.textContent = questions[i];
    };

}






// if ()

//btn.addEventListener('click', )

