
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
var clearScoreBtn = document.querySelector("#clearScore");
let scoreInput = document.querySelector("#scoreInput");
let replayBtn = document.querySelector("#replay");
// var quizContainer = document.querySelector("#")


// functional variables
// 
var timeLeft = 30;
var totalScore;
var timeInterval;
var questionIndex = 0;
var choiceIndex = 0;
var counter = 0;
var highScoresList = [];

// my quiz questions and answers

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
    //console.log("checkQ:", questionIndex);
    renderQuestion();
}; 

function gameOver(){
    let scoreTimeLeft = document.querySelector("#scoreTimeLeft");
   // scoreTimeLeft.textContent = timeLeft;
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
        //console.log("quizChoices:", quizChoices)
        
          for (var i =0; i < currentQuestion.choices.length ;i++){
            var choice = currentQuestion.choices[i];
            var choiceEl = document.createElement('button');
            choiceEl.textContent = choice;
            choiceEl.addEventListener("click", function(e){
               // console.log("check:", e.target.innerText);

              

                if ( e.target.innerText === questions[questionIndex].answer){
                    responseAns.textContent="CORRECT";
                    
            
                    
                } else {
            
   
                    timeLeft -=5;
                    responseAns.textContent="WRONG";
          
      
            
                }

                //console.log("check:",questions.length - 1 , questionIndex)
                questionIndex++;
                   
                if( (questions.length) == questionIndex){
                    gameOver();
                } else {
               
                    renderQuestion();
                    
                }
               

            });
            quizChoices.appendChild(choiceEl);
    
    
         };

    }
    
   
};


function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  };


submitIntials.addEventListener("click", function(event){
    event.preventDefault();
    intials = document.querySelector("#intials").value;
    //console.log("intiails", intials, timeLeft)



    if (intials === ""){
        displayMessage("error", "Intials cannot be blank");
        
    } else{

        highScoresList.push({
            name: intials,
            score: timeLeft
        })
        displayMessage("Success", "Congrats");
        localStorage.setItem("hs", JSON.stringify(highScoresList));

        let hs = JSON.parse( localStorage.getItem("hs") ); //returns array
        let highScoresOl = document.querySelector("#highScores");
        highScoresOl.innerHTML = "";
        hs.forEach(h => {
            let liEl = document.createElement("li");
            liEl.textContent = h.name + " " + h.score;
            highScoresOl.appendChild(liEl);

        })
        //localStorage.setItem("intials", intials);

        document.querySelector("#intials").value = '';
        endScreen.setAttribute("class", "hide"); //htmlEl.style.display = "none" //  style.display= "block"
        scoreScreen.removeAttribute("class");
    }
    

    

}
);







startGame.addEventListener('click',start);


replayBtn.addEventListener('click', function(){
    timeLeft = 30;
    scoreScreen.setAttribute("class", "hide");

    questionIndex = 0;
    

    start();

});

clearScoreBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    localStorage.clear();
    
    //var x = document.getElementById("highScores").childElementCount;
    var highScores = document.getElementById('highScores');
    highScores.innerHTML = '';
   

    
});



