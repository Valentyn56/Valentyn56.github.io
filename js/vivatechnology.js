document.getElementsByClassName("dynamicpage-scrollcontent")[0].setAttribute("id", "Scrollcontent");
document.getElementsByClassName("app-header")[0].setAttribute("id", "Appheader");
document.getElementsByClassName("mainlogo")[0].setAttribute("id", "Mainlogo");
var page = document.getElementById('Scrollcontent');
var nav = document.getElementById("Appheader");
var logo = document.getElementById("Mainlogo");
var burgermenu = document.getElementById("burger-menu");
var menulinks = document.getElementsByClassName("headline");




for (var i = 0; i < menulinks.length; i++){
    var str = "lien"+i;
    menulinks[i].setAttribute("id",str);
    document.getElementById(str).addEventListener("click",toggleMenu);
}

logo.addEventListener("click",function () {
    if(nav.classList.contains("scrolled")){
        nav.classList.remove("scrolled");
        burgermenu.classList.remove("scrolled");
    }
});

if(document.getElementsByClassName("app-page")[0].classList.contains("homepage")){
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
}

toggleMenu();

function toggleMenu(){
    if(nav.classList.contains("scrolled")){
        console.log("déja scrolled");
    }else{
        nav.classList.add("scrolled");
        burgermenu.classList.add("scrolled");
    }
}

function addClassNameListener(elemId, callback) {
    var elem = document.getElementById(elemId);
    var lastClassName = elem.className;
    window.setInterval( function() {
        var className = elem.className;
        if (className !== lastClassName) {
            callback();
            lastClassName = className;
        }
    },10);
}















