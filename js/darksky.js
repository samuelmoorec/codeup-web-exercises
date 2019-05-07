"use strict";

const corsUrl = "https://cors-anywhere.herokuapp.com/";
const darkSkyUrl = "https://api.darksky.net/forecast/";

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
function updateweather() {
    $.get(corsUrl + darkSkyUrl + darkskykey + "/" + latitude + "," + longitude).done(function (data) {

        let temp_html = "";

        for (var i = 0; i < 7; i++) {
            temp_html += "<div id='card" + i + "' class='cards'>";
            temp_html += shortHandDate(i);
            temp_html += todaysSummary(data.daily.data[i].summary);
            temp_html += daysIcon(data.daily.data[i].icon);
            temp_html += tempLow(data.daily.data[i].temperatureLow);
            temp_html += tempHigh(data.daily.data[i].temperatureHigh);
            temp_html += chanceOfRain(data.daily.data[i].precipProbability);
            temp_html += humidityPercentage(data.daily.data[i].humidity);
            temp_html += currentWind(data.daily.data[i].windSpeed, data.daily.data[i].windBearing);
            temp_html += "</div>"
        }
        $("#main").html(temp_html);
        dostuff();


    });

    function shortHandDate(daysToAdd) {
        let date = new Date();
        date = ((date.getMonth() + 1).toString()) + "/" + ((date.getDay()  + daysToAdd).toString()) + "/" + ((date.getFullYear()).toString());
        return "<p class='date'>" + date + "</p>"
    }

    function chanceOfRain(data) {
        data = (data * 100);
        return "<div class='rainChance'><p class='rainChanceTitle'>Chance of Rain</p><p class='rainChancePercent'>" + data + "%</p></div>";
    }

    function todaysSummary(data) {
        return "<div class='summaryDiv'><p class='daySummaryTitle'>Forecast</p><p class='daySummaryData'>" + data + "</p></div>";
    }

    function daysIcon(data) {
        return "<img class='summaryimg' alt='" + data + "' src='icon/SVG/" + data + ".svg'>"
    }

    function tempLow(data) {
        return "<div class='tempDiv'><p class='tempTitle'>Temp Low <span class='degree'>?</span></p><p class='tempValue'>" + data.toFixed(0) + "<span class='degree'>°F</span></p></div>";
    }

    function tempHigh(data) {
        return "<div class='tempDiv'><p class='tempTitleHigh'>Temp High <span class='degree'>?</span></p><p class='tempValue'>" + data.toFixed(0) + "<span class='degree'>°F</span></p></div>";
    }

    function humidityPercentage(data) {

        data = data * 100;
        return "<div class='humidity'><p class='humidityTitle'>Humidity</p><p class='humidityPercent'>" + data + "%</p></div>";
    }

    function currentWind(dataSpeed, dataDirection) {
        let windDirection;
        if (350 <= dataDirection || dataDirection <= 10) {
            windDirection = "South"
        } else if (11 <= dataDirection && dataDirection <= 39) {
            windDirection = "SSW"
        } else if (40 <= dataDirection && dataDirection <= 50) {
            windDirection = "SW"
        } else if (51 <= dataDirection && dataDirection <= 79) {
            windDirection = "WSW"
        } else if (80 <= dataDirection && dataDirection <= 100) {
            windDirection = "West";
        } else if (101 <= dataDirection && dataDirection <= 129) {
            windDirection = "WNW";
        } else if (130 <= dataDirection && dataDirection <= 140) {
            windDirection = "NW"
        } else if (141 <= dataDirection && dataDirection <= 169) {
            windDirection = "NNW"
        } else if (170 <= dataDirection && dataDirection <= 190) {
            windDirection = "North"
        } else if (191 <= dataDirection && dataDirection <= 219) {
            windDirection = "NNE"
        } else if (220 <= dataDirection && dataDirection <= 230) {
            windDirection = "NE"
        } else if (231 <= dataDirection && dataDirection <= 259) {
            windDirection = "ENE"
        } else if (260 <= dataDirection && dataDirection <= 280) {
            windDirection = "East"
        } else if (281 <= dataDirection && dataDirection <= 309) {
            windDirection = "ESE"
        } else if (310 <= dataDirection && dataDirection <= 320) {
            windDirection = "SE"
        } else if (321 <= dataDirection && dataDirection <= 349) {
            windDirection = "SSE"
        }
        return "<div class='windDiv'><div><p class='windTitle'>Wind Speed <span class='degree'>?</span></p><p class='wind'>" + dataSpeed + "<sup>m/s</sup> " + windDirection + " </p></div><img class='windarrow' style='transform:rotate(" + (dataDirection - 180) + "deg)' src='img/arrow_icon.png'></div>"
    }

}
updateweather();