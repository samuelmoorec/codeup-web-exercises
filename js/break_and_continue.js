var ran = Math.floor(Math.random() * (50 - 1)) + 1;
if (ran % 2 === 0) {
    ran = ran + 1
} else {
}

console.log(ran + " is the number to skip");
for (var i = 1; i < 50; i+=2 ) {

    if (i === ran) {
        console.log('This number is disgusting ' + ran);
    }
    else {
        console.log(i + " is and odd number");
    }
}