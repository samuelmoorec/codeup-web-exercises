"use strict";

$('#title')
    .html('My Todo list');

$('.article')
    .html("I'm planning to make a small retro looking tank game. I will have to make models and C# scripts to complete this.")
    .css("font-size","20px")
    .css("width", "25%");

$('#priority')
    .html("Priority List");

$('#key')
    .html("<h3>Here is a key for the progress of where I am</h3><br><ul class='key_list'></ul>");

$('.key_list')
    .html("<li class='completed'>Completed</li><li class='in_progress'>Under Construction</li><li class='not_started'>Have not begun</li>");

$('.priority_list')
    .html("<li class='in_progress'>Create Base Models</li><li class='in_progress'>Create Basic movement function</li><li class='not_started'>Create Objective</li><li class='not_started'>Create Moving Turret for 2nd Player</li><li class='not_started'>Add multilayer</li>")
    .css("margin","5%");

$('h1,h2')
    .css("color", "#808287");

$('h1,h2,h3,.article')
    .click(function (e) {
       $(this).css("background-image", "url('img/giphy.gif')")
    })
    .css("margin", "50px 20px 10px 20px");

$('.completed,.in_progress,.not_started')
    .css("text-align", "center")
    .css("border-radius", "10px")
    .css("width", "30%");

$('ul').css("list-style-type","none");

$('p')
    .dblclick(function () {
        $(this).css("font-size","18px")
    });

$('.completed')
    .hover(function () {
    $(this).css("background-color","#59d65c");
    });

$('.in_progress')
    .hover(function () {
       $(this).css("background-color","#ffc942");
    });

$('.not_started')
    .hover(function () {
    $(this).css("background-color","#ff4141");
    });
// $(document).ready(function () {
//    alert("Your page has fully loaded");
// });

