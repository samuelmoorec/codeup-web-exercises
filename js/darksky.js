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
    // var day = data.daily.data;
    // var temp_html = "";
    // var dayIcon = data.daily.data[i].icon;
    // var currentTempMin = data.daily.data[i].temperatureLow;
    // var currentTempMax = data.daily.data[i].temperatureHigh;
    // var currentPrecipProbability = data.daily.data[i].precipProbability;
    // var currentHumidity = data.daily.data[i].humidity;
    // var currentWindSpeed = data.daily.data[i].windSpeed;
    // var currentWindDirection = data.daily.data[i].windBearing;
    // var currentAppTemp = data.daily.data[i].apparentTemperature;
    // var currenttime = data.currently.time;
    // var currentSummary = data.daily.data[i].summary;
    // console.log(data);


    var temp_html = "";

    for (var i = 0; i < 7; i++) {
        temp_html += "<div class='cards'>";
        temp_html += shortHandDate(i);
        temp_html += todaysSummary(data.daily.data[ i ].summary);
        temp_html += daysIcon(data.daily.data[i].icon);
        temp_html += tempLow(data.daily.data[i].temperatureLow);
        temp_html += tempHigh(data.daily.data[i].temperatureHigh);
        temp_html += chanceOfRain(data.daily.data[i].precipProbability);
        temp_html += humidityPercentage(data.daily.data[i].humidity);
        temp_html += currentWind(data.daily.data[i].windSpeed, data.daily.data[i].windBearing);
        temp_html += "</div>"
    }
    $("#main").html(temp_html);


});



function shortHandDate(daysToAdd) {
    var date = new Date();
    date = ((date.getMonth() + 1).toString()) + "/" + ((date.getDay() + daysToAdd).toString())  + "/" + ((date.getFullYear()).toString());
    return "<p class='date'>" + date + "</p>"
}

    function chanceOfRain(data){
        data = (data * 100);
       return "<div class='rainChance'><p class='rainChanceTitle'>Chance of Rain</p><p class='rainChancePercent'>" + data + "%</p></div>";
    }
    function todaysSummary(data){
       return "<div class='summaryDiv'><p class='daySummaryTitle'>Forecast</p><p class='daySummaryData'>" + data + "</p></div>";
    }
    function daysIcon(data) {
        return "<img class='summaryimg' alt='" + data + "' src='icon/SVG/" + data + ".svg'>"
    }
    function tempLow(data){
        return "<div class='tempDiv'><p class='tempTitle'>Temp Low</p><p class='tempValue'>" + data + "</p></div>";
    }
    function tempHigh(data){
        return "<div class='tempDiv'><p class='tempTitleHigh'>Temp High</p><p class='tempValue'>" + data + "</p></div>";
    }
    function feelsLike(data) {
        return "<p class='temp'>Feels like " + data + "°F</p>";

}
    function humidityPercentage(data){
    console.log(data);
        data = data * 100;
        return "<div class='humidity'><p class='humidityTitle'>Humidity</p><p class='humidityPercent'>" + data + "%</p></div>";
    }
    function currentWind(dataSpeed,dataDirection){
    var windDirection;
    if (350 < dataDirection || dataDirection <= 10){
        windDirection = "South"
    }else if (11 <= dataDirection && dataDirection <= 39){
        windDirection = "SSW"
    }else if (40 <= dataDirection && dataDirection <= 50){
        windDirection = "SW"
    }else if (51 <= dataDirection && dataDirection <= 79){
        windDirection = "WSW"
    }else if (80 <= dataDirection && dataDirection <= 100){
        windDirection = "West";
    }else if (101 <= dataDirection && dataDirection <= 129){
        windDirection = "WNW";
    }else if (130 <= dataDirection && dataDirection <= 140){
        windDirection = "NW"
    }else if (141 <= dataDirection && dataDirection <= 169){
        windDirection = "NNW"
    }else if (170 <= dataDirection && dataDirection <= 190){
        windDirection = "North"
    }else if (191 <= dataDirection && dataDirection <= 219){
        windDirection = "NNE"
    }else if (220 <= dataDirection && dataDirection <= 230){
        windDirection = "NE"
    }else if (231 <= dataDirection && dataDirection <= 259){
        windDirection = "ENE"
    }else if (260 <= dataDirection && dataDirection <= 280){
        windDirection = "East"
    }else if (281 <= dataDirection && dataDirection <= 309){
        windDirection = "ESE"
    }else if (310 <= dataDirection && dataDirection <= 320){
        windDirection = "SE"
    }else if (321 <= dataDirection && dataDirection <= 349){
        windDirection = "SSE"
    }
        return "<div class='windDiv'><div><p class='windTitle'>Wind Speed</p><p class='wind'>" + dataSpeed + "<sup>m/s</sup> " + windDirection + " </p></div><img class='windarrow' style='transform:rotate(" + (dataDirection - 180) + "deg)' src='img/arrow_icon.png'></div>"
    }
    //
    //
    // var temp_html = "";
    // for (var i = 0; i < data.length; i++) {
    //     temp_html += "<div>";
    //     temp_html += shortHandDate(i);
    //     temp_html += todaysSummary(data.daily.data[i].summary);
    //     temp_html += daysIcon(data.daily.data[i].icon);
    //     temp_html += tempLow(data.daily.data[i].temperatureLow);
    //     temp_html += tempHigh(data.daily.data[i].temperatureHigh);
    //     temp_html += chanceOfRain(data.daily.data[i].precipProbability);
    //     temp_html += humidityPercentage(data.daily.data[i].humidity);
    //     temp_html += currentWind(data.daily.data[i].windSpeed, data.daily.data[i].windBearing);
    //     temp_html += "</div>"
    // }
    // $("#main").html(temp_html);
    //
    //


