"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
function even_odd(number) {
    var n = (number % 2);
    if (n === 0){
        alert("This number is Even")
    } else {
        alert("This number is Odd")
    }
}
function plus100(number) {
    var n = (parseInt(number) + 100);
    alert("Your selected number plus 100 is " + n)
}
function neg_pos(number) {
    var n = (number >= 0);
    if (n === true){
        alert("Your selected number is Positive")
    }else{
        alert("Your selected number is Negative")
    }
}
var knowaboutanum = confirm("Would you like info about a number?");
if (knowaboutanum === true) {
    var usernumber = prompt("What is a number you would like to know more about?");
    if (isNaN(usernumber) === true){
        alert("That is not a number")
    } else {
        even_odd(usernumber);
        plus100(usernumber);
        neg_pos(usernumber);
    }
} else {
    alert("Your loss")
}
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


function analyzeColor(color){
    if (color === 'red'){alert("Fire is Red");
    console.log("color was red")}
    else if(color === 'orange'){alert("Oranges are Orange");
    console.log("color was orange")}
    else if(color === 'yellow'){alert("Bananas are Yellow");
    console.log("color was yellow")}
    else if(color === 'green'){alert("Grass is Green");
    console.log("color was green")}
    else if(color === 'blue'){alert("The Sky is Blue");
    console.log("color was blue")}
    else if(color === 'indigo'){alert("Something is Indigo");
    console.log("color was indigo")}
    else if(color === 'violet'){alert("Some Roses are Violet");
    console.log("color was violet")}
    else{alert("That is'nt a real color...")}
}

var favcol = prompt("What is your favorite color?");
favcol = favcol.toLocaleLowerCase();
analyzeColor(favcol);
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
function colorlogger(color) {
    console.log(color)
}
colorlogger(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var color1 = prompt("What is your favorite color?");
favcol = color1.toLocaleLowerCase();
switch (color1) {
    case "red"   : alert(color1 + " is my favorite color too!");console.log("color was " + color1);break;
    case "orange": alert(color1 + " is my favorite color too!");console.log("color was " + color1);break;
    case "yellow": alert(color1 + " is my favorite color too!");console.log("color was " + color1);break;
    case "green" : alert(color1 + " is my favorite color too!");console.log("color was " + color1);break;
    case "blue"  : alert(color1 + " is my favorite color too!");console.log("color was " + color1);break;
    case "indigo": alert(color1 + " is my favorite color too!");console.log("color was " + color1);break;
    case "violet": alert(color1 + " is my favorite color too!");console.log("color was " + color1);break;
        default: alert("That is'nt a real color...");console.log("color wasnt real");break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckynumber,totalamount) {
    totalamount = (parseInt(totalamount));
    luckynumber = (parseInt(luckynumber));
    var discount;
    var discountedprice;
    if (luckynumber === 1){
        discount = .10;
        discountedprice = (totalamount - (totalamount * discount));
        return discountedprice.toFixed(2);
    } else if (luckynumber === 2){
        discount = .25;
        discountedprice = (totalamount - (totalamount * discount));
        return discountedprice.toFixed(2);
    } else if (luckynumber === 3){
        discount = .35;
        discountedprice = (totalamount - (totalamount * discount));
        return discountedprice.toFixed(2);
    } else if (luckynumber === 4){
        discount = .50;
        discountedprice = (totalamount - (totalamount * discount));
        return discountedprice.toFixed(2);
    } else if (luckynumber === 5){
        discount = 1;
        discountedprice = (totalamount - (totalamount * discount));
        return discountedprice.toFixed(2);
    } else {
        discountedprice = totalamount;
        return discountedprice;
    }
}



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var price = prompt("What is the total amount due?");
var luckyNumber = Math.floor(Math.random() * 6);
alert("Your lucky number is " + luckyNumber);
alert("Your price before the discount was $" + price + ".");
alert("Your discounted price is $" + calculateTotal(luckyNumber,price));
