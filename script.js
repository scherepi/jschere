// source code for the JavaScript of jschere.com
// copyright joaquin schere, january of 2025
// all rights reserved

console.log("don't you think you're being a little bit nosy?");
console.log("it's pretty rude to just open up the console and think you can do anything you'd like");
console.log("maybe i just gave you a virus or smth...");
console.log("oooooooooooooooh.....");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

// ------------------------------------------------------------
let visitCount = 0;
// LOCAL STORAGE CHECK:
if (localStorage.visitCount) {
    visitCount = Number(localStorage.visitCount);
    if (visitCount == 1) {
        document.getElementById("counter").innerText = `you've been here ${visitCount} time! thanks!` // show the visit count
    } else {
        document.getElementById("counter").innerText = `you've been here ${visitCount} times! thanks!` // show the visit count
    }
    localStorage.visitCount = Number(localStorage.visitCount) + 1;
} else {
    document.getElementById("counter").hidden = true; // hide the counter if it's the first visit
    localStorage.visitCount = 1;
}

// MOUSEOVER EVENTS

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
    }, 3000);
}

// encourage them if they're mousing over a link!!
var buttons = document.querySelectorAll("a");
buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        let original = document.title;
        document.title = "click it!!";
        setTimeout(() => {
            document.title = original;
        }, 3000);
    });
})

// ------------------------------------------------------------

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
const subtitleRainbowAnim = subtitleElement.animate(rainbowFrames, rainbowTiming);

console.log("should be starting animation");
subtitleRainbowAnim.play();

subtitleElement.addEventListener("mouseover", function() {
    console.log("you moused over the subtitle!");
    subtitleRainbowAnim.pause();
})

subtitleElement.addEventListener("mouseout", function() {
    console.log("you moused out of the subtitle!");
    subtitleRainbowAnim.play();
})

// animate the "coding janky little stuff and things"
const jankRainbow = document.getElementById("jank").animate(rainbowFrames, rainbowTiming);
jankRainbow.pause(); // pause the animation at first
document.getElementById("jank").addEventListener("mouseover", function() {
    jankRainbow.play();
    jankRainbow.playbackRate = 1; // set the playback rate to 1x
})
document.getElementById("jank").addEventListener("mouseout", function() {
    jankRainbow.pause();
});

document.getElementById("jank").addEventListener("mousemove", function(e) {
    // get the mouse position relative to the element
    const rect = document.getElementById("jank").getBoundingClientRect();
    const x = e.clientX - rect.left;
    // calculate the distance from the center of the element
    // set the playback rate based on the distance from the left
    console.log("playback speed should be " + (1 + x / 100));
    jankRainbow.playbackRate = 1 + x / 100; // increase the playback rate based on distance
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