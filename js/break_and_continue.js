var ran = Math.floor(Math.random() * (48 - 1)) + 1;
if (ran % 2 === 0) {ran = ran + 1}
// var ran;
// do {
//     ran = prompt("Give me an odd number between 1 and 50");
// }while (ran % 2 === 0 || 1 > ran > 50);


console.log(ran + " is the number to skip");
for (var i = 1; i < 50; i += 2 ) {
    if (i === ran) {
        console.log('This number is disgusting ' + ran);
        continue;
        console.log('This should not be seen');
    }
    console.log(i + " is and odd number");}
