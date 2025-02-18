// source code for the JavaScript of jschere.com
// copyright joaquin schere, january of 2025
// all rights reserved

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

// bother the user if we catch them mousing over an image, lol
var images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("mouseover", imgSnoop);
})
function imgSnoop() {
    let original = document.title; // save the original title
    document.title = "ooh nice image"; // change the title to our silly thing
    setTimeout(() => {
        document.title = original; // change the title back after 5 seconds!
    }, 5000);
}

