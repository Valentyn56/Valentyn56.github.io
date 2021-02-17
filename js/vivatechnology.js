/*
var myNav = document.getElementsByClassName('app-header');

window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 10 ) {
        myNav.classList.add("scrolled");
    }
    else {
        myNav.classList.remove("scrolled");
    }

};
*/

window.addEventListener('scroll', function (e) {
    var nav = document.getElementsByClassName('app-header');
    if (document.documentElement.scrollTop || document.body.scrollTop > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});