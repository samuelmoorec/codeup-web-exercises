var topleft = document.getElementById("topleft");
var topmid = document.getElementById("topmid");
var topright = document.getElementById("topright");
var midleft = document.getElementById("midleft");
var midmid = document.getElementById("midmid");
var midright = document.getElementById("midright");
var botleft = document.getElementById("botleft");
var botmid = document.getElementById("botmid");
var botright = document.getElementById("botright");

var round = 1;

blocks=[
    topleft,topmid,topright,midleft,midmid,midright,botleft,botmid,botright
];

function AIsTurn() {


}

function isEven(num) {
    return num % 2 === 0;
}

function turn(block) {
    if (block.innerHTML === "") {
        block.innerHTML = "X";
        a
    }else{
        alert("Pick another square")
    }
}

