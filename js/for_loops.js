function showMultiplicationTable(number) {
    for (var i = 0; i < 100; i++) {
        console.log(i * number);
    }
}



    for (var i = 0; i < 10000; i++) {
        var ran = Math.floor(Math.random() * (200 - 20)) + 20;
        if (ran % 2 === 0) {
            console.log(ran + " is an even number")
        } else {
            console.log(ran + " is an odd number")
        }

    }
    for (var i = 1, n = ""; i < 10; i++) {
         n = n + "1";
        console.log(i * n)
    }


    for (var i = 100; i >= 5; i -= 5) {
        console.log(i);
    }
