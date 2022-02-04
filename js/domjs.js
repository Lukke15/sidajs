"use strict";

var imagecounter= 1;

showdiv(imagecounter);

function changeteam(m) {

    Showdiv(imagecounter = imagecounter + m);

}

function Showdiv (n) {

    var i;

    var imageArray = document.getElementsByClassName ("myslides");

    if (n > imageArray.length) { 

        imagecounter = 1;

}

if (n < 1) {

    imagecounter = imageArray.length;

}

for (i = 0; i < imageArray.length; i++) {

    imageArray[i].style.display = "none";

}

imageArray[imagecounter - 1].style.display = "block";

}