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
