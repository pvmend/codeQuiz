
// selectors 
var msgDiv = document.querySelector("#msg")
var timeEl = document.querySelector("#time-left");
var startGame = document.querySelector('#start');
var startScreen = document.querySelector("#start-screen");
var quizScreen = document.querySelector("#quiz-screen");
var endScreen = document.querySelector("#end-screen");
var quizQuestions = document.querySelector("#quizQuestions");
var quizChoices = document.querySelector("#choices");
var choiceBox = document.querySelector(".option");
var button = document.createElement("button");
var responseAns = document.querySelector(".response");
var scoreScreen = document.querySelector("#highScoreScreen");
var submitIntials = document.querySelector("#myIntials");
var intials = document.querySelector("#intials");

// var quizContainer = document.querySelector("#")


// functional variables
// 
var timeLeft = 30;
var totalScore;
var timeInterval;
var questionIndex = 0;
var choiceIndex = 0;
var counter = 0;
var yourScore = localStorage.getItem('time-left');
// or is it #time-left



const questions = [
    {
        question: "Which value is a string?",
        choices: [" 42", " %", " var", "'Hello'"],
        answer: "'Hello'",
        },     
    {
        question: "Which is not a way to declare a variable ",
        choices: ["let", "make", "var", "const"],
        answer: "make",

    },
    {
        question: "How do you add 2 strings together?",
        choices: ["*", "+", "%", "/"],
        answer: "+",
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
    if (questionIndex === questions.length || timeLeft === 0){
        
        gameOver();

    } else {
        var currentQuestion = questions[questionIndex];

        quizQuestions.textContent = currentQuestion.question;
        quizChoices.innerHTML='';
        
          for (var i =0; i < currentQuestion.choices.length ;i++){
            var choice = currentQuestion.choices[i];
            //console.log(choice);
            var choiceEl = document.createElement('button');
            choiceEl.textContent = choice;
            quizChoices.appendChild(choiceEl);
    
    
         };

    }
    
   
}

// moves to next question
// check answer 
// increment the index
// check to see if there are more questions
// decrement time for wrong answers

function onclickEvent(event){
    var push = event.target;
   // console.log(push.textContent);
    
    //console.log(questions[questionIndex].answer);
    if (push.textContent === questions[questionIndex].answer){
        
        // alert("Correct");
        // counter +=1;

        
        renderQuestion();
        
        // responseAns.textContent = "";
        
    } else {

        //responseAns.textContent= "Wrong"
        timeLeft -=5;
        renderQuestion();
        //responseAns.textContent = "";
        // counter -=1;

    }
   
    if (questionIndex === questions.length ){
        gameOver();
    }
   
    questionIndex++;
    
    

};

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  };


submitIntials.addEventListener("click", function(event){
    event.preventDefault();
    intials = document.querySelector("#intials").value;
    if (intials === ""){
        displayMessage("error", "Intials cannot be blank");
        
    } else{
        displayMessage("Success", "Congrats");
        localStorage.setItem("intials", intials);

        document.querySelector("#intials").value = '';
    }
    

 

}
);





// add eventlistener to click answers and count score
// local storage to save scores





// need prevent default


// const highScores = JSON.parse(localStorage.getItem('totalScore'));
// button.addEventListener("click",onclickEvent);
startGame.addEventListener('click',start);
quizChoices.onclick = onclickEvent;






