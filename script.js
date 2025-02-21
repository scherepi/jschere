// source code for the JavaScript of jschere.com
// copyright joaquin schere, january of 2025
// all rights reserved

console.log("don't you think you're being a little bit nosy?");
console.log("it's pretty rude to just open up the console and think you can do anything you'd like");
console.log("maybe i just gave you a virus or smth...");
console.log("oooooooooooooooh.....");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

// bother the user if we catch them mousing over an image, lol
var images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("mouseover", imgSnoop);
})
function imgSnoop() {
    console.log("hehe you moused over an image")
    let original = document.title; // save the original title
    document.title = "ooh nice image"; // change the title to our silly thing
    setTimeout(() => {
        document.title = original; // change the title back after 5 seconds!
    }, 5000);
}

// ANIMATIONS

// animate the color changing and control its playback

var subtitleElement = document.getElementById("subtitle");
// keyframes for the rainbow animation
const rainbowFrames = [
    {color: "#ff0000"},
    {color: "#ff7f00"},
    {color: "#ffff00"},
    {color: "#00ff00"},
    {color: "#0000ff"},
    {color: "#ff00ff"},
    {color: "#ff0000"}
];
// timing object for the rainbow animation
const rainbowTiming = {
    duration: 5000,
    iterations: Infinity
};

// add the rainbow animation to the subtitle
const rainbowAnim = subtitleElement.animate(rainbowFrames, rainbowTiming);

console.log("should be starting animation");
rainbowAnim.play();

subtitleElement.addEventListener("mouseover", function() {
    console.log("you moused over the subtitle!");
    rainbowAnim.pause();
})

subtitleElement.addEventListener("mouseout", function() {
    console.log("you moused out of the subtitle!");
    rainbowAnim.play();
})

// animate the image borders

var imageElements = document.getElementsByClassName("image");
const borderFrames = [
    {border: "dashed 2px #00ff00"},
    {border: "dotted 2px #00ff00"}
]
for (let i = 0; i < imageElements.length; i++) {
    imageElements[i].animate(borderFrames, {
        duration: 1000,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out"
    });
}