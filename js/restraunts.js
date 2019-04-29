var daysoftheweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = daysoftheweek[(new Date().getDay())];

console.log(day);

// function isOpen() {

    // var opHours = data[time].operating_hours[day];
    // console.log(opHours)
    var opHours = "5:30 pm - 11:00 pm";
    opHours = opHours.split("-");
    console.log(opHours);

// }




function getlistings() {
    var temphtml = "";
    $.ajax("data/restaurants.json").done(function (data) {
        for (var i = 0; i < data.length; i++) {
            temphtml += "<h2 class='title'>" + data[i].name + "</h2>";
            temphtml += "<p class='operating_hours'>Today's Hours of Operations " + " " + data[i].operating_hours[day] + "</p>";
            temphtml += "<p class='location'>Located at " + data[i].address + "</p>";
            temphtml += "<p class='foodtype'>Food Type " + data[i].cuisine_type +"</p>";
            // temphtml += "   ";
            // temphtml += "   "
        }
        $("#restaurant-listings").html(temphtml);

        var opHours = data[4].operating_hours[day];

    });
}

$.ajax("data/restaurants.json");
$(document).ready(getlistings());
// $("#refresh-btn").click(getlistings());
