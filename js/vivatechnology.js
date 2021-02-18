document.getElementsByClassName("dynamicpage-scrollcontent")[0].setAttribute("id", "Scrollcontent");
document.getElementsByClassName("app-header")[0].setAttribute("id", "Appheader");

var page = document.getElementById('Scrollcontent');
var nav = document.getElementById("Appheader");
var burgermenu = document.getElementById("burger-menu");
var menulinks = document.getElementsByClassName("headline");

function toggleMenu(){

    console.log("click menu");

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
    }else{
        nav.classList.add("scrolled");
        burgermenu.classList.add("scrolled");
    }
}

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
}else{
    nav.classList.add("scrolled");
    burgermenu.classList.add("scrolled");
}

for (var i = 0; i < menulinks.length; i++){
    menulinks[i].onclick(toggleMenu());
}









