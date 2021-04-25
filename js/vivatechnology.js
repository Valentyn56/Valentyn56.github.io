document.getElementsByClassName("dynamicpage-scrollcontent")[0].setAttribute("id", "Scrollcontent");
document.getElementsByClassName("app-header")[0].setAttribute("id", "Appheader");
document.getElementsByClassName("mainlogo")[0].setAttribute("id", "Mainlogo");
var page = document.getElementById('Scrollcontent');
var nav = document.getElementById("Appheader");
var logo = document.getElementById("Mainlogo");
var burgermenu = document.getElementById("burger-menu");
var menulinks = document.getElementsByClassName("headline");


/*for (var i = 0; i < menulinks.length; i++){
    var str = "lien"+i;
    menulinks[i].setAttribute("id",str);
    document.getElementById(str).addEventListener("click",toggleMenu);
}*/

/*logo.addEventListener("click",function () {
    if(nav.classList.contains("scrolled")){
        nav.classList.remove("scrolled");
        burgermenu.classList.remove("scrolled");
    }
});*/

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



(function (global) {
    var inwink = global.inwink || {};
    global.inwink = inwink;
    inwink.tracking = inwink.tracking || {};
    inwink.tracking.trackers = inwink.tracking.trackers || [];
    inwink.tracking.trackers.push({
        isEssential: true, //If false, the user needs to accept cookies to trigger the script//
        script: {
            id: "", //Give a name to your script, mandatory//
            innerContent: "", //Put the script that must be loaded here if it's a text/javascript//
            src: "" //Put the link of the script if it's a in a link, erase the property otherwise//
        },
        trackPage: function (location) {
            if(document.getElementsByClassName("app-page")[0].classList.contains("homepage")){
                console.log("This is the Homepage");
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
                toggleMenu();
                console.log("Not Hompage");
            }
        },
    });
    if (inwink.trackingStatus)
        inwink.trackingStatus();
})(this);










