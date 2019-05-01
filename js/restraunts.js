$.ajax("data/restaurants.json");

var daysoftheweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = daysoftheweek[(new Date().getDay())];

function getlistings() {
    var temphtml = "";
    $.ajax("data/restaurants.json").done(function (data) {
        for (var i = 0; i < data.length; i++) {
            temphtml += "<h2 class='title'>" + data[i].name + "</h2>";
            temphtml += "<p class='operating_hours'>Today's Hours of Operations " + " " + data[i].operating_hours[day] + "</p>";
            // temphtml += isOpen(data[i].operating_hours[day]);
            // temphtml += openingSoon(data[i].operating_hours[day]);
            // temphtml += closingSoon(data[i].operating_hours[day]);
            temphtml += "<p>Located at <stong class='location'>" + data[i].address + "</stong></p>";
            temphtml += "<p class='foodtype'>Food Type " + data[i].cuisine_type +"</p>";
            temphtml += favorite(data[i].is_favorite);
            // temphtml += "   "
        }
        $("#restaurant-listings").html(temphtml);
    });
}
$(document).ready(getlistings());

function favorite(data) {
    if (data === true){
        return "<p class='favorite'> Favorite  </p>"
    }else{
        return ""
    }
}


function toMilitary(time) {
    console.log(time);
    if (time[1].includes("pm")) {
        return time = (parseInt(time[0]) + 12) + time[1].slice(0, 2);
    }else if (time[1].includes("am")) {
       return time = parseInt(time[0]) + time[1].slice(0, 2)

    }}

console.log(isOpen("8:00 am - 10:30 pm"));

function isOpen(opHours) {
    if (opHours.includes(",")) {
        return isOpentwotimes(opHours);
    }else if(opHours.includes("Closed")){
        return "<p class='Currently closed'> Closed </p>"
    }else if (opHours.includes("Open")){
        return "<p class='open'> Open </p>"
    }else if (opHours.includes("Sat")) {
        return "<p class='open'> Open </p>"
    }else{
        console.log(opHours);
        opHours = opHours.split("-");
        console.log(opHours);
        var openingtime = opHours[0].trim();
        var closingtime = opHours[1].trim();
        openingtime = openingtime.split(":");
        closingtime = closingtime.split(":");
        openingtime = toMilitary(openingtime);
        closingtime = toMilitary(closingtime);
        console.log(openingtime);
        var current_Time = new Date();
        current_Time = current_Time.getHours().toString() + current_Time.getMinutes();
        console.log(current_Time);
        if (openingtime < current_Time && current_Time < closingtime) {
            return "<p class='open'> Open </p>";
        } else {
            return "<p class='closed'> Closed </p>"
        }
    }
}


function isOpentwotimes(times) {
    times = times.split(",");
    var time0 = times[0].trim();
    var time1 = times[1].trim();
    time0 = time0.split("-");
    time1 = time1.split("-");
    var openingtime0 = time0[0].trim();
    var closingtime0 = time0[1].trim();
    var openingtime1 = time1[0].trim();
    var closingtime1 = time1[1].trim();
    openingtime0 = openingtime0.split(":");
    closingtime0 = closingtime0.split(":");
    openingtime1 = openingtime1.split(":");
    closingtime1 = closingtime1.split(":");
    openingtime0 = toMilitary(openingtime0);
    closingtime0 = toMilitary(closingtime0);
    openingtime1 = toMilitary(openingtime1);
    closingtime1 = toMilitary(closingtime1);
    var current_Time = new Date();
    current_Time = current_Time.getHours().toString() + current_Time.getMinutes();
    if ((openingtime0 < current_Time && current_Time < closingtime0) || (openingtime1 < current_Time && current_Time < closingtime1)){
        return "<p class='Currently Open'> Open </p>";
    } else {
        return "<p class='Currently closed'> Closed </p>"
    }
}


function openingSoon(opHours) {
    opHours = opHours.split("-");
    var openingtime = opHours[0].trim();
    openingtime = openingtime.split(":");
    openingtime = toMilitary(openingtime);
    var current_Time = new Date();
    current_Time = current_Time.getHours().toString() + current_Time.getMinutes();
    if (current_Time > openingtime - 100 && isOpen(opHours) === false){
        return "<p class='open'> Opening Soon </p>"
    }else{
        return ""
    }
}

function closingSoon(opHours) {
    opHours = opHours.split("-");
    var closingtime = opHours[1].trim();
    closingtime = closingtime.split(":");
    closingtime = toMilitary(closingtime);
    var current_Time = new Date();
    current_Time = current_Time.getHours().toString() + current_Time.getMinutes();
    if (current_Time > closingtime - 100 && isOpen(opHours) === true){
        return "<p class='closed'> Closing Soon </p>"
    }else{
        return ""
    }
}

// $("#refresh-btn").click(getlistings());
