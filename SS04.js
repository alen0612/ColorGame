var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");

var answer = Math.floor(Math.random() * 3); // 0, 1, 2
//console.log("answer : "+answer);

document.getElementById("refresh").onclick=function(){location.reload();};


if(answer == 0){
    var answerR = randomColor();
    var answerG = randomColor();
    var answerB = randomColor();
    optionA.style.backgroundColor="rgb("+answerR+","+answerG+","+answerB+")";
    document.getElementById("RGB").innerHTML="RGB("+answerR+","+answerG+","+answerB+")";

    var R = randomColor();
    var G = randomColor();
    var B = randomColor();
    optionB.style.backgroundColor="rgb("+R+","+G+","+B+")";

    R = randomColor();
    G = randomColor();
    B = randomColor();
    optionC.style.backgroundColor="rgb("+R+","+G+","+B+")";
}
else if(answer == 1){
    var R = randomColor();
    var G = randomColor();
    var B = randomColor();
    optionA.style.backgroundColor="rgb("+R+","+G+","+B+")";

    var answerR = randomColor();
    var answerG = randomColor();
    var answerB = randomColor();
    optionB.style.backgroundColor="rgb("+answerR+","+answerG+","+answerB+")";
    document.getElementById("RGB").innerHTML="RGB("+answerR+","+answerG+","+answerB+")";

    R = randomColor();
    G = randomColor();
    B = randomColor();
    optionC.style.backgroundColor="rgb("+R+","+G+","+B+")";
}
else{
    var R = randomColor();
    var G = randomColor();
    var B = randomColor();
    optionA.style.backgroundColor="rgb("+R+","+G+","+B+")";

    R = randomColor();
    G = randomColor();
    B = randomColor();
    optionB.style.backgroundColor="rgb("+R+","+G+","+B+")";

    var answerR = randomColor();
    var answerG = randomColor();
    var answerB = randomColor();
    optionC.style.backgroundColor="rgb("+answerR+","+answerG+","+answerB+")";
    document.getElementById("RGB").innerHTML="RGB("+answerR+","+answerG+","+answerB+")";
}

optionA.onclick=function(){checkAnswer(0, answerR, answerG, answerB);};
optionB.onclick=function(){checkAnswer(1, answerR, answerG, answerB);};
optionC.onclick=function(){checkAnswer(2, answerR, answerG, answerB);};

var flag = 0;

function randomColor(){
    return Math.floor(Math.random() * 256);
}

function checkAnswer(input, r, g, b){
    if(input == answer){
        optionA.style.backgroundColor="#ffffff";
        optionB.style.backgroundColor="#ffffff";
        optionC.style.backgroundColor="#ffffff";
        document.getElementById("subT").innerHTML="Correct!";
        document.getElementById("bg").style.backgroundColor="rgb("+r+","+g+","+b+")";
        flag++;
    }
    else{
        if(flag >= 1){
            return;
        }
        document.getElementById("subT").innerHTML="Try Again";
        if(input == 0){
            optionA.style.backgroundColor="rgb(29, 23, 23)";
        }
        else if(input == 1){
            optionB.style.backgroundColor="rgb(29, 23, 23)";
        }
        else{
            optionC.style.backgroundColor="rgb(29, 23, 23)";
        }
    }
}