"use strict";

var imageCounter= 1;

ShowDiv(imageCounter);

function changeteam(m) {

    ShowDiv(imageCounter = imageCounter + m);

}

function ShowDiv (n) {

    var i;

    var imageArray = document.getElementsByClassName ("myslides");

    if (n > imageArray.length) { 

        imageCounter = 1;

}

if (n < 1) {

    imageCounter = imageArray.length;

}

for (i = 0; i < imageArray.length; i++) {

    imageArray[i].style.display = "none";

}

imageArray[imageCounter - 1].style.display = "block";

}
