document.getElementsByClassName("dynamicpage-scrollcontent")[0].setAttribute("id", "Scrollcontent");
document.getElementsByClassName("app-header")[0].setAttribute("id", "Appheader");
document.getElementsByClassName("mainlogo")[0].setAttribute("id", "Mainlogo");
var page = document.getElementById('Scrollcontent');
var nav = document.getElementById("Appheader");
var logo = document.getElementById("Mainlogo");
var burgermenu = document.getElementById("burger-menu");
var menulinks = document.getElementsByClassName("headline");

for (var i = 0; i < menulinks.length; i++){
    var str = "lien";
    str += i;
    console.log(str);
    menulinks[i].setAttribute("id",str);

}




logo.addEventListener("click",function () {
    console.log("logo click");
    nav.classList.remove("scrolled");
    burgermenu.classList.remove("scrolled");
})
for (var i = 0; i < menulinks[i].length; i++){
    var link = "lien"+i;
    console.log(link);
    document.getElementById(link).addEventListener("click",toggleMenu);
}



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















