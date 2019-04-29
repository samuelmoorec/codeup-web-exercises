"use strict";

function getblogs() {
    $.ajax("data/blog.json").done(function (data) {
        var temp_blog_post = "";
        for (var i = 0; i < data.length; i++) {
            temp_blog_post += "<br><div class='post-heading'><h2 class='title'>" + data[i].title + "</h2>";
            temp_blog_post += "<p class='date'>" + data[i].date + "</p></div>";
            temp_blog_post += "<div class='post-content'><p class='content'>" + data[i].content + "</p></div>";
            temp_blog_post += "<p class='categories'>" + data[i].categories.join(", ") + "</p>"
        }
        $("#posts").html(temp_blog_post);
    });
}
$.ajax("data/blog.json");
$(document).ready(getblogs());
$("#refresh-btn").click(getblogs());