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