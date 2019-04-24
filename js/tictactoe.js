var topleft = document.getElementById("topleft");
var topmid = document.getElementById("topmid");
var topright = document.getElementById("topright");
var midleft = document.getElementById("midleft");
var midmid = document.getElementById("midmid");
var midright = document.getElementById("midright");
var botleft = document.getElementById("botleft");
var botmid = document.getElementById("botmid");
var botright = document.getElementById("botright");
var userscore =document.getElementById("userScore").innerHTML;

var userwins = 0;

var winningblocks = [
    [topleft,topmid,topright],
    [topleft,midmid,botright],
    [topleft,midleft,botleft],
    [topmid,midmid,botmid],
    [topright,midright,botright],
    [midleft,midmid,midright],
    [botleft,botmid,botright],
    [botleft,midmid,topright]
];
function checkifUserWon() {
       for(var i = 0; i < winningblocks.length; i++){
               if (winningblocks[i][0].innerHTML === "X"){
                   if (winningblocks[i][1].innerHTML === "X"){
                       if (winningblocks[i][2].innerHTML === "X"){
                           userwins ++;
                           document.getElementById("userScore").innerHTML = userwins;
                           alert("You won");
                           resetGame();
                       }
                   }
               }
       }
}
function checkifAiWon() {
    for(var i = 0; i < winningblocks.length; i++){
        if (winningblocks[i][0].innerHTML === "O"){
            if (winningblocks[i][1].innerHTML === "O"){
                if (winningblocks[i][2].innerHTML === "O"){
                    alert("You Lost")
                    resetGame();
                }
            }
        }
    }
}

function resetGame() {
    usersblocks = [];
    AIsblocks = [];
    blocks=[topleft,topmid,topright,midleft,midmid,midright,botleft,botmid,botright];
    blocks.forEach(function (e) {
        e.innerHTML = "";
    })
}




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
    checkifAiWon();
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
        checkifUserWon();
        AIsTurn()
    }else{
        alert("Pick another square")
    }
}
// Hello
