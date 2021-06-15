/* CUSTOM Parallax effect by Val */

setTimeout(function(){
    document.getElementsByClassName("dynamicpage-scrollcontent")[0].setAttribute("id", "Scrollcontent");

    var page = document.getElementById('Scrollcontent');

    var svg1 = document.getElementsByClassName("svg-image")[0];
    var svg2 = document.getElementsByClassName("svg-image2")[0];

    document.getElementById("bl-79539c4e-536d-4539-dc62-7c1020ee7244").appendChild(svg1);
    document.getElementById("bl-79539c4e-536d-4539-dc62-7c1020ee7244").appendChild(svg2);

    page.onscroll = function (e) {
        var vertical_position = 0;
        if (page.scrollTop)//usual
            vertical_position = page.scrollTop;
        var image1 = document.querySelector('.svg-image');
        var image2 = document.querySelector('.svg-image2');
        image1.style.top = (vertical_position + 200) - vertical_position/1.2 + 'px';//200 (just to set the top) and vertical_position/10 (just to set de speed of parallax) is arbitrary.
        image2.style.top = (vertical_position + 300) - vertical_position/1.6 + 'px';//400 (just to set the top) and vertical_position/4 (just to set de speed of parallax) is arbitrary.

    }
}, 500);
