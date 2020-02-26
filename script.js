let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;

let btn1 = document.getElementById("btn0");
let btn2 = document.getElementById("btn1");
let btn3 = document.getElementById("btn2");
let btn4 = document.getElementById("btn3");

let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice){



        question = document.getElementById("question");
        question.innerText = questionText;

        opt1 = document.getElementById("choice0");
        opt1.innerText = choice1;

        opt2 = document.getElementById("choice1");
        opt2.innerText = choice2;

        opt3 = document.getElementById("choice2");
        opt3.innerText = choice3;

        opt4 = document.getElementById("choice3");
        opt4.innerText = choice4;


        if(correctChoice === choice1){
            correctOne = btn1;
        }else if(correctChoice === choice2){
            correctOne = btn2;
        }else if(choice3 === correctChoice){
            correctOne = btn3;
        }else if(choice4 === correctChoice){
            correctOne = btn4;
        }





};

let addPoint = function(button){

    if(button === correctOne){
        numRight++;
    }
    count++;
    startGame();

};

let startGame = function(){

    if(count === 0){
        createQuestion('What is the capital of the United States?','Los Angeles','Washington D.C.','New York City','Chicago','Washington D.C.');

    }else if(count === 1){
        createQuestion('Which is not a primary color?','Green','Blue','Red','Yellow','Yellow');
    }else if(count === 2){
        createQuestion('Who was the first president of the United States?','Abraham Lincoln','Andrew Jackson','George Washington','Henry Ford','George Washington');
    }else if(count === 3){
        createQuestion('Which movie came first?','Black Panther','Captain America: Civil War','Avengers: Endgame','Thor: Ragnorak','Captain America: Civil War');
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + " correct out of " + numQuestions;
        document.getElementById("buttons").innerHTML = " ";
    }

    document.getElementById("progress").innerText = "Question " + (count + 1) + " of " + numQuestions;

    if(count === 4){
        document.getElementById("progress").innerText = "Question 4 of " + numQuestions;
    }

    btn1.onclick = function(){addPoint(this)};
    btn2.onclick = function(){addPoint(this)};
    btn3.onclick = function(){addPoint(this)};
    btn4.onclick = function(){addPoint(this)};

};






