// set the intervalid
var number = 135
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// These are my questions--I put them in an array useing the [] brackets

var questions = [{
    question: "Inning 1: A <dfn>Script</dfn> is a series of instructions that a computer can follow to achieve a goal",
    answerList: ["True", "False",],
    answer: 0
},{
    question: "Inning 2: Three common <q>layers</q> that web developers use to create websites include: HTML, CSS and JavaScript.",
    answerList: ["True", "False",],
    answer: 0
},{
    question: "Inning 3: Based on the previous question: HTML is known as the <cite>Content Layer</cite>, CSS is known as the <cite>Presentation Layer</cite> and JavaScript is known as the _________ Layer",
    answerList: ["Progressive", "Basic", "Confusing", "Behavioral"],
    answer: 3
},{
    question: "Inning 4: Javascript is case sensitive.",
    answerList: ["True", "False",],
    answer: 0
},{
    question: "Inning 5: In the line of code: <q>var quantity = 3</q> what does the word quantity stand for?",
    answerList: ["Variable Keyword", "Variable Name", "Variable Value", "String"],
    answer: 1
},{
    question: "Inning 6:In the line of code: <q>var quantity = 3</q> what does the word var stand for?",
    answerList: ["Variable Keyword", "Variable Name", "Variable Value", "String"],
    answer: 0
},{
    question: "Inning 7: An <dfn>Array</dfn> is a type of variable that stores only one value",
    answerList: ["True","False"],
    answer: 1
},{
    question: "Inning 8:<dfn>Functions</dfn> let you group a series of statments together to perform a specific task",
    answerList: ["True", "False",],
    answer: 0
},{
    question: "Inning 9:When a variable is created inside a function useing the var keyword, it can only be used in that function and is called a __________",
    answerList: ["Global Variable", "Local Variable", "Mobile Variable", "Introverted Variable"],
    answer: 1
}];
// This is where I put my function to start the game
$("#start").on("click", function() {

    // Hide play ball button now
    $(this).hide();

    // showing initial time countdown--9 questions total and 15 seconds for each question--so a total of 135 seconds on the clock
    $("#time").html("<h2>Time Remaining: 135 Seconds</h2>" + "<br>");

    // Starting my countdown timer now
    run();
   
    // These are my questions but im calling them "innings" because its a baseball code quiz game
    // Inning 1
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label><br><br>"
       
    );

    // Inning 2
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label><br><br>"
        
    );

    // Inning 3
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    // Inning 4
    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label><br><br>"
       
    );

    // Inning 5
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );

    // Inning 6
    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
        + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
        + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
        + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );

    // Inning 7
    $("#question7").html("<h3>" + questions[6].question + "</h3>");
    $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label><br><br>"
  
    );

    // Inning 8
    $("#question8").html("<h3>" + questions[7].question + "</h3>");
    $("#answer8").html("<input type='radio' name='answer8' value='0'>" + "<label>" + questions[7].answerList[0] + "</label>"
        + "<input type='radio' name='answer8' value='1'>" + "<label>" + questions[7].answerList[1] + "</label><br><br>"
        
    );
    
    // Inning 9
    $("#question9").html("<h3>" + questions[8].question + "</h3>");
    $("#answer9").html("<input type='radio' name='answer9' value='0'>" + "<label>" + questions[8].answerList[0] + "</label>"
        + "<input type='radio' name='answer9' value='1'>" + "<label>" + questions[8].answerList[1] + "</label>"
        + "<input type='radio' name='answer9' value='2'>" + "<label>" + questions[8].answerList[2] + "</label>"
        + "<input type='radio' name='answer9' value='3'>" + "<label>" + questions[8].answerList[3] + "</label><br><br>"
    );

    //  Here I put the Submit button
    $("#submit").html("<button id='done' class='btn'>Done</button>");

    //  This is a function click event that runs the keepingScore() and the displayResults() when done 
    $("#done").on("click", function() {

        // Keeping track of score--correct="innings won", incorrect="innings lost", and unanswered questions="swing and miss"
        keepingScore();

        // Display 
        displayResults();
        
    });
});

// this is the countdown timer function
function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    //  Decrease by one.
    number--;

    //  Show the number in the #time tag
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number === 0) {

        // Runing the stop function to stop timer countdown
        stop();

        keepingScore();
        displayResults();

    }
}

function stop() {

    //  to stop the time interval
    clearInterval(intervalId);
}

//  This function used for displaying results---correct="innings won", incorrect="innings lost", and unanswered questions="swing and miss"
function displayResults() {

    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#question7").hide();
    $("#answer7").hide();
    $("#question8").hide();
    $("#answer8").hide();
    $("#question9").hide();
    $("#answer9").hide();
    $("#submit").hide();

    $("#resultsMessage").html("<h3>End of Ballgame!</h3>");
    $("#correct").html("Innings Won: " + correctAnswers);
    $("#incorrect").html("Innings lost: " + incorrectAnswers);
    $("#unanswered").html("Swing and Miss: " + unanswered);
}

//  This function keeps score in terms of correct="innings won", incorrect="innings lost", and unanswered questions="swing and miss"
function keepingScore() {

var userAnswer1 = $("input[name='answer1']:checked").val();
var userAnswer2 = $("input[name='answer2']:checked").val();
var userAnswer3 = $("input[name='answer3']:checked").val();
var userAnswer4 = $("input[name='answer4']:checked").val();
var userAnswer5 = $("input[name='answer5']:checked").val();
var userAnswer6 = $("input[name='answer6']:checked").val();
var userAnswer7 = $("input[name='answer7']:checked").val();
var userAnswer8 = $("input[name='answer8']:checked").val();
var userAnswer9 = $("input[name='answer9']:checked").val();

// Inning 1
if (userAnswer1 === undefined) {

    unanswered++;
}
else if (userAnswer1 == questions[0].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

// inning 2
if (userAnswer2 === undefined) {

    unanswered++;
}
else if (userAnswer2 == questions[1].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

// inning 3
if (userAnswer3 === undefined) {

    unanswered++;
}
else if (userAnswer3 == questions[2].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

// Inning 4
if (userAnswer4 === undefined) {

    unanswered++;
}
else if (userAnswer4 == questions[3].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

// Inning 5
if (userAnswer5 === undefined) {

    unanswered++;
}
else if (userAnswer5 == questions[4].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

// Inning 6
if (userAnswer6 === undefined) {

    unanswered++;
}
else if (userAnswer6 == questions[5].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

// Inning 7
if (userAnswer7 === undefined) {

    unanswered++;
}
else if (userAnswer7 == questions[6].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}  

// Inning 8
if (userAnswer9 === undefined) {

    unanswered++;
}
else if (userAnswer8 == questions[7].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}

// Inning 9
if (userAnswer9 === undefined) {

unanswered++;
}
else if (userAnswer9 == questions[8].answer) {

correctAnswers++;
}
else {

incorrectAnswers++;
}
}
