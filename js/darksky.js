"use strict";






var corsUrl = "https://cors-anywhere.herokuapp.com/";
var darkSkyUrl = "https://api.darksky.net/forecast/";
var darkSkyKey = darkskykey;

var latitude = [29.4241];
var longitude = [-98.4936];

// SanAntonio #1
function City(Name) {
    if (Name === "San Antonio"){
       return "/" + latitude[0] + "," + longitude[0];
    }
}

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

$.get(corsUrl + darkSkyUrl  + darkSkyKey + City("San Antonio")).done(function(data) {
    var temp_html = "";
    var currentTemp = data.currently.temperature;
    var currentPrecipProbability = data.currently.precipProbability;
    var currentHumidity = data.currently.humidity;
    var currentWindSpeed = data.currently.windSpeed;
    var currentWindDirection = data.currently.windBearing;
    var currentAppTemp = data.currently.apparentTemperature;
    // var current = data.currently.;
    var currenttime = data.currently.time;
    var currentSummary = data.currently.summary;
    console.log(data);
function fullTime(data) {
    var dateObject = new Date(data * 1000);
    data = (dateObject.toString());
    return "<p class='time'>" + data + "</p>";
}
    function chanceOfRain(data){
        data = data * 100;
       return "<p class='rainProbability'>Chance of Rain :" + data + "%</p>";
    }
    function todaysSummary(data){
       return "<p class='current'> Todays current weather forcast is " + data + "</p><img alt='" + data + "' src='icon/SVG/" + data + ".svg'>";
    }
    function temp(data){
        return "<p class='temp'>" + data + "°F <span class='feelslike'>(feels like " + currentAppTemp + ")</span></p>";
    }
    function feelsLike(data) {
        return "<p class='temp'>Feels like " + data + "°F</p>";

}
    function humidityPercentag(data){
        data = data * 100;
        return "<p class='humidity'>Current Humidity :" + data + "%</p>";
    }
    function currentWind(dataSpeed,dataDirection){
    var windDirection = "";
    console.log(dataDirection);
    if (350 < dataDirection || dataDirection < 10){
        windDirection = "South"
    }else if (11 < dataDirection && dataDirection < 39){
        windDirection = "SSW"
    }else if (40 < dataDirection && dataDirection < 50){
        windDirection = "SW"
    }else if (51 < dataDirection && dataDirection < 79){
        windDirection = "WSW"
    }else if (80 < dataDirection && dataDirection < 100){
        windDirection = "West"
    }else if (101 < dataDirection && dataDirection < 129){
        windDirection = "WNW"
    }else if (130 < dataDirection && dataDirection < 140){
        windDirection = "NW"
    }else if (141 < dataDirection && dataDirection < 169){
        windDirection = "NNW"
    }else if (170 < dataDirection && dataDirection < 190){
        windDirection = "North"
    }else if (191 < dataDirection && dataDirection < 219){
        windDirection = "NNE"
    }else if (220 < dataDirection && dataDirection < 230){
        windDirection = "NE"
    }else if (231 < dataDirection && dataDirection < 259){
        windDirection = "ENE"
    }else if (260 < dataDirection && dataDirection < 280){
        windDirection = "East"
    }else if (281 < dataDirection && dataDirection < 309){
        windDirection = "ESE"
    }else if (310 < dataDirection && dataDirection < 320){
        windDirection = "SE"
    }else if (321 < dataDirection && dataDirection < 349){
        windDirection = "SSE"
    }
        return "<p class='wind'>Wind Speed :" + dataSpeed + "<sup>m/s</sup>  " + windDirection + " <img class='windarrow' style='transform: rotate(" + (dataDirection - 180) + "deg)' src='img/arrow_icon.png'></p>";
    }


// for (var i = 0; i < data.length; i++){
    temp_html += fullTime(currenttime);
    temp_html += todaysSummary(currentSummary);
    temp_html += temp(currentTemp);
    // temp_html +=
    temp_html += chanceOfRain(currentPrecipProbability);
    temp_html += humidityPercentag(currentHumidity);
    temp_html += currentWind(currentWindSpeed,currentWindDirection);
    temp_html += "<p class=''>" + + "</p>";
    temp_html += "<p class=''>" + + "</p>";







// }
    $("#main").html(temp_html);
});


