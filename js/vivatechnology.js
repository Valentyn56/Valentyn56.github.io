document.getElementsByClassName("app-header")[0].setAttribute("id", "Appheader");
document.getElementsByClassName("dynamicpage-scrollcontent")[0].setAttribute("id", "Scrollcontent");
document.getElementsByClassName("mainlogo")[0].setAttribute("id", "Mainlogo");
var page = document.getElementById('Scrollcontent');
var nav = document.getElementById("Appheader");
var logo = document.getElementById("Mainlogo");
var burgermenu = document.getElementById("burger-menu");
var menulinks = document.getElementsByClassName("headline");

var multipleSelector = '.dynamicbloc-contentwrapper:not(#ct-dfc3cf5b-faf6-4c0e-dd6a-a7098330f488):not(#ct-f3b35949-6e29-461a-8314-d633dfb69ae6) .contentpagelink-items .contentpagelink.inwink-item';


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

    var pageScroll = page.scrollTop;

    if(pageScroll >= 10){
        nav.classList.add("scrolled");
        burgermenu.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
        burgermenu.classList.remove("scrolled");
    }

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
    setTimeout(function(){
        var multiple = new Multiple({
            selector: multipleSelector,
            background: 'url("https://storageprdv2inwink.blob.core.windows.net/d469fa5d-3d3c-ea11-a601-281878303843-public/assets/pictures/background_myvivatech_for_buttons%2520(1).jpg")'
        });

        document.querySelectorAll(multipleSelector).classList.add("multiple-desktop");

    }, 500);
}else{

    toggleMenu();

    /* BUTTON DESIGN MULTIPLE.JS */
    setTimeout(function(){
        var multiple = new Multiple({
            selector: multipleSelector,
            background: 'url("https://storageprdv2inwink.blob.core.windows.net/d469fa5d-3d3c-ea11-a601-281878303843-public/assets/pictures/background_myvivatech_for_buttons.jpg")'
        });

        document.querySelectorAll(multipleSelector).classList.add("multiple-desktop");

    }, 500);
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

            /* APPHEADER SCROLLED*/
            if(document.getElementsByClassName("app-page")[0].classList.contains("homepage")){
                console.log("This is the Homepage");
                document.getElementsByClassName("dynamicpage-scrollcontent")[0].setAttribute("id", "Scrollcontent");
                var page = document.getElementById('Scrollcontent');
                nav.classList.remove("scrolled");
                burgermenu.classList.remove("scrolled");
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
                setTimeout(function(){
                    var multiple = new Multiple({
                        selector: multipleSelector,
                        background: 'url("https://storageprdv2inwink.blob.core.windows.net/d469fa5d-3d3c-ea11-a601-281878303843-public/assets/pictures/background_myvivatech_for_buttons%2520(1).jpg")'
                    });

                    document.querySelectorAll(multipleSelector).classList.add("multiple-desktop");

                }, 500);

            }else{
                toggleMenu();

                /* BUTTON DESIGN MULTIPLE.JS */
                setTimeout(function(){

                    var multiple = new Multiple({
                        selector: multipleSelector,
                        background: 'url("https://storageprdv2inwink.blob.core.windows.net/d469fa5d-3d3c-ea11-a601-281878303843-public/assets/pictures/background_myvivatech_for_buttons.jpg")'
                    });

                    document.querySelectorAll(multipleSelector).classList.add("multiple-desktop");

                }, 500);
            }



        },
    });
    if (inwink.trackingStatus)
        inwink.trackingStatus();
})(this);










