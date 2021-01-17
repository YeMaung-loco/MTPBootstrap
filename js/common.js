$(function() {

    "use strict";
    loadTheme();
});
var CardDesign = function(id, color, color2) {
    $(id + " .status").css({
        fill: color,
    });
    $(id).css({
        "border-color": "white",
        "border-left-color": color2,
        "border-left-width": "thick !important",
        "border-style": "solid",
    });
    $(id + " i").css({
        color: color2,
    });
    $(id + " .info.mb-0").css({
        color: color2,
    });
}
var CardDesign2 = function(id) {

    $(id).addClass("card dashboard-card ");
}

// function to set a given theme/color-scheme
var setTheme = function(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
    $('body').css({ display: '' });
}

// function to toggle between light and dark theme
var toggleTheme = function(themeName) {
    setTheme(themeName);
}

// Immediately invoked function to set the theme on initial load
var loadTheme = function() {
    if (localStorage.getItem("theme") == null) {
        setTheme("theme-default");
    } else {
        toggleTheme(localStorage.getItem("theme"));
    }
}