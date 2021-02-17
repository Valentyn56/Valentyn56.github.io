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
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        window.addEventListener('scroll', function (e) {
            console.log("ok")
            var nav = document.getElementsByClassName('app-header');
            if (document.documentElement.scrollTop || document.body.scrollTop > 10) {
                console.log("cocou");
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
                console.log("pas coucou");
            }
        });
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
