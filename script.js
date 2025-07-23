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

// animate the background with fading stars
let stars = [];

function generateRandomColor() {
    const randomNum = Math.floor(Math.random() * 16777216); 
    let hexColor = randomNum.toString(16);
    hexColor.padStart(6, "0");
    return "#" + hexColor;
}

class PentagramAnim {
    constructor(centerX, centerY, size, color) {
        this.centerX = centerX; // this is the POSITION OF THE STAR ON THE PAGE.
        this.centerY = centerY; // ditto.
        this.size = size;       // size of both the element and, respectively, the star
        this.points = [];
        this.generatePoints(); // Use the variables already set to generate the points for the star.
        this.rotatePoints(Math.random() * 360); // Random angle
        this.rootNode = document.createElement("div");
        const SVG_NS = "http://www.w3.org/2000/svg";        
        this.svgNode = document.createElementNS(SVG_NS, "svg");
        this.rootNode.appendChild(this.svgNode);
        this.svgNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svgNode.setAttribute("viewBox", `0 0 ${size} ${size}`);
        this.svgNode.setAttribute("width", size);
        this.svgNode.setAttribute("height", size);
        this.polyLine = document.createElementNS(SVG_NS, "polyline");
        this.polyLine.setAttribute("fill", "none");
        this.polyLine.setAttribute("stroke", color);
        this.svgNode.appendChild(this.polyLine);
        this.rootNode.id = "pentaAnim"; 
        this.rootNode.style.position = "fixed";
        this.rootNode.style.zIndex = "-3";
        this.rootNode.style.left = (centerX - size / 2) + "px";
        this.rootNode.style.top = (centerY - size / 2) + "px";
        this.rootNode.style.width = size + "px";
        this.rootNode.style.height = size + "px";
        document.body.appendChild(this.rootNode);
        this.delayDraw(Math.random() * 500 + 100);
        this.rootNode.animate(
            [
                {opacity: "100%"},
                {opacity: "0%"}
            ],
            {duration: 15000}
        );
        setTimeout(() => {
            document.body.removeChild(this.rootNode);
        }, 15000)
    }
    generatePoints() {
        console.log("generating points for the star");
        this.points = [];
        const cx = this.size / 2;
        const cy = this.size / 2;
        const outerRadius = this.size * 0.45;
        const innerRadius = this.size * 0.18;
        for (let i = 0; i < 10; i++) {
            const angle = Math.PI / 2 + i * Math.PI / 5;
            const r = i % 2 === 0 ? outerRadius : innerRadius;
            const x = cx + r * Math.cos(angle);
            const y = cy - r * Math.sin(angle);
            this.points.push([x, y]);
        }
        this.points.push(this.points[0]);
    }
    rotatePoints(angle) {
        console.log(`rotating generated points by angle of ${angle} degrees`);
        const radians = angle * Math.PI / 180;
        const originX = this.size / 2;
        const originY = this.size / 2;
        this.points = this.points.map(([x, y]) => [
            originX + (x - originX) * Math.cos(radians) - (y - originY) * Math.sin(radians),
            originY + (x - originX) * Math.sin(radians) + (y - originY) * Math.cos(radians)
        ]);
    }
    delayDraw(delay) {
        console.log(`drawing shape from generated points with delay of ${delay}`);
        let drawnPoints = [this.points[0]];
        this.polyLine.setAttribute("points", this.points[0].join(","));
        for (let i = 1; i < this.points.length; i++) {
            setTimeout(() => {
                drawnPoints.push(this.points[i]);
                // Build the points string as "x1,y1 x2,y2 x3,y3 ..."
                const pointsString = drawnPoints.map(pt => pt.join(",")).join(" ");
                this.polyLine.setAttribute("points", pointsString);
            }, i * delay + 500);
        }
    }
}

setInterval(() => { 
    console.log("creating new star")
    stars.push(
        new PentagramAnim(
            Math.random() * window.innerWidth, 
            Math.random() * window.innerHeight, 
            Math.random() * 100 + 40, 
            generateRandomColor())
    )
}, 3000)