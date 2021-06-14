setTimeout(function(){
    if(document.getElementsByClassName('hovermenu-link').length == 0){

        var watch = document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[0];
        var discover = document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[1];
        var network = document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[2];

        try{
            createWrappers(watch,discover,network);
        } catch(e){
            console.warn(e);
        }

        /* En cas de bug du chargement du menu */

        setTimeout(function(){
            if( watch !== null ||  discover !== null ||  network !== null ){

                console.log("variables chargées : OK");

            }else{

                console.log("variables non chargées, nouvelle tentative.")

                var watch = document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[0];
                var discover = document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[1];
                var network = document.getElementById("Appheader").getElementsByClassName("menu")[0].getElementsByClassName("iconlink")[2];

                setTimeout(function(){
                    if(document.getElementsByClassName('hovermenu-link').length == 0){
                        createWrappers(watch,discover,network);
                    }else{
                        console.log("Menu already exists");
                    }
                },500);
            }
        },7000);

    }else{

        console.log("Menu already exists");

    }
},1500);


function createWrappers(menu1,menu2,menu3){

    var newItem1 = document.createElement("div");
    newItem1.classList.add("hovermenu-wrapper");
    menu1.appendChild(newItem1);

    var newItem2 = document.createElement("div");
    newItem2.classList.add("hovermenu-wrapper");
    menu3.appendChild(newItem2);

    var newItem3 = document.createElement("div");
    newItem3.classList.add("hovermenu-wrapper");
    menu2.appendChild(newItem3);

    addElements(menu1,menu2,menu3);

}

function addElement(text, link, destination, newPage) {
    // crée un nouvel élément div
    var newItem = document.createElement("a");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode(text);
    // et lui donne le lien
    if(newPage == true){
        newItem.setAttribute("target","_blank");
        newItem.setAttribute("href",link);
    }else{
        newItem.setAttribute("href",link);
    }
    //newItem.setAttribute("href",link);
    newItem.setAttribute("role","link");
    newItem.setAttribute("aria-label","");



    // et lui donne une classe
    newItem.classList.add("hovermenu-link");
    newItem.classList.add("contentpagelink");
    // ajoute le nœud texte au nouveau div créé
    newItem.appendChild(newContent);

    // ajoute le nouvel élément créé et son contenu dans le DOM
    //document.body.insertAfter(newItem, destination);
    destination.getElementsByClassName("hovermenu-wrapper")[0].appendChild(newItem);

}


function addElements(watch,discover,network){
    /*addElement("What's Live","content/whatslive",watch);*/
    addElement("VivaTech News","https://app.vivatechnology.com/content/vivatech-news",watch,false);
    addElement("Stage One","https://app.vivatechnology.com/room/d225f246-3bbe-eb11-94b3-000d3a219024",watch,false);
    addElement("Stage 2","https://app.vivatechnology.com/room/d8d3092a-37be-eb11-94b3-000d3a219024",watch,false);
    addElement("Stage 3","https://app.vivatechnology.com/room/e6652f30-37be-eb11-94b3-000d3a219024",watch,false);
    /*addElement("VT Channels","",watch);*/
    addElement("Schedule","https://app.vivatechnology.com/content/schedule",watch,false);
    addElement("Speakers","https://app.vivatechnology.com/speakers",watch,false);

    addElement("Exhibitors & Startups List","https://app.vivatechnology.com/partners",discover,false);
    addElement("Innovation Parks & Showrooms","https://app.vivatechnology.com/content/parks-showrooms",discover,false);
    addElement("Innovations & Solutions List","https://app.vivatechnology.com/content/innovation-liste",discover,false);
    /*addElement("Thematic Trails","content/thematictrails",discover);*/
    addElement("Main Topics","https://app.vivatechnology.com/content/main-topics",discover,false);

    addElement("Networking Hub","https://app.vivatechnology.com/content/networking-hub",network,false);
    addElement("Side Events","https://app.vivatechnology.com/content/side-events-list",network,false);
    /*addElement("VC Hours","content/vc-hours",network);*/
    addElement("Find a Job","https://vivatech.myjobboard.fr/",network,true);

}