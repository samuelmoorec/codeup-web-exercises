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

var blocks=[
    topleft,topmid,topright,midleft,midmid,midright,botleft,botmid,botright
];
var usersblocks = [];
var AIsblocks = [];

function AIsTurn() {
    var AisBlockChoice = Math.floor(Math.random() * blocks.length);
    console.log(blocks[AisBlockChoice]);
    blocks[AisBlockChoice].innerHTML = "O";
    var tempblock = blocks.splice(AisBlockChoice,1);
    AIsblocks.unshift(tempblock);
}

function isEven(num) {
    return num % 2 === 0;
}

function turn(block) {
    if (block.innerHTML === "") {
        block.innerHTML = "X";
        var tempblock = blocks.splice(blocks.indexOf(block),1);
        usersblocks.unshift(tempblock);
        console.log(usersblocks);
        AIsTurn()
    }else{
        alert("Pick another square")
    }
}

