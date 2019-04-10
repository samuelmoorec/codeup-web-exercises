var n = 1;

while (n < 65536) {
    console.log(n = n * 2)
}


var allCones = Math.floor(Math.random() * 50) + 50;
var conesSold = 0;
var requestedCones;
var stops = 0;
var remainingCones = allCones;
console.log("I have " + allCones + " for the day");
do {
    requestedCones = (Math.floor(Math.random() * 5) + 1);
    conesSold = conesSold + requestedCones;
    stops = stops + 1;
    remainingCones = (remainingCones - requestedCones);
    if (requestedCones > remainingCones) {
        console.log("Stop :" + stops);
        console.log("Remaining cones :" + remainingCones);
        console.log("Cones Requested :" + requestedCones);

        console.log("I dont have " + requestedCones + ",");
        console.log("but I do have " + remainingCones);
    } else {
        console.log("Stop :" + stops);
        console.log("Cones Requested :" + requestedCones);
        console.log("Total cones sold :" + conesSold);
        console.log("Remaining cones :" + remainingCones);
    }
} while (requestedCones < remainingCones);
console.log("Sold a total of " + allCones + " today");
console.log("Sold all my cones for the day");

// var n = 2;
// while (n <= 100){
//     console.log(n);
//     n += 2;
// }
// function square() {
// var s = 1;
// while (s <= 10){
//     console.log(s * s);
//     s++;
// }}
// var i = 1;
// do{
//     console.log("This number is " + i + ".");
//     i++;
// } while (i < 26);
//
// var n = 100;
// do {
//     console.log(n);
//     n -= 10;
// }while (n >= -50);
// function FizzFuzz() {
//     for(var i = 1; i < 101; i++){
//         if((i % 3 === 0) && (i % 5 === 0)) console.log("FizzBuzz");
//         else if(i % 5 === 0) console.log("Buzz");
//         else if(i % 3 === 0) console.log("Fizz");
//         else console.log(i);
//     }}
//
// function FizzFuzz_1(){
//     var number = 0;
//     while (number < 100){
//         number++;
//         switch (true) {
//             case (number % 3 === 0) : console.log("Fizz");break;
//             case (number % 5 === 0) : console.log("Fuzz");break;
//             case (number % 3 === 0) && (number % 5 === 0) : console.log("FizzFuzz");break;
//             default: console.log(number);break;}
//         }}
// function FizzFuzz_2(){
//     var number = 0;
//     while (number < 100){
//         number++;
//         switch (true) {
//             case (number % 3 === 0) && (number % 5 === 0) : console.log("FizzFuzz");break;
//             case (number % 5 === 0) : console.log("Fuzz");break;
//             case (number % 3 === 0) : console.log("Fizz");break;
//             default: console.log(number);break;}
//     }}