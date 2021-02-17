document.getElementsByClassName("dynamicpage-scrollcontent")[0].setAttribute("id", "Scrollcontent");
document.getElementsByClassName("app-header")[0].setAttribute("id", "Appheader");

var page = document.getElementById('Scrollcontent');
var nav = document.getElementById("Appheader");
var burgermenu = document.getElementById("burger-menu");

page.addEventListener("scroll", function(){
    var pageScroll = page.scrollTop;

    if(pageScroll >= 10){
        nav.classList.add("scrolled");
        burgermenu.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
        burgermenu.classList.remove("scrolled");
    }
});
