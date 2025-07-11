// Copyright Joaquin Schere, begun 7/7/2025

console.log("these are my amazing friends :)");

// Get our nodes
const gusDiv = document.getElementById("gus");
const sebDiv = document.getElementById("sebastian");
const megDiv = document.getElementById("meghana");
const alexDiv = document.getElementById("alex");
const sofDiv = document.getElementById("sofia");
const louDiv = document.getElementById("lou");
const gabDiv = document.getElementById("gabriel");

let gusGlitching = false;
let wavePlaying = false;

let intervalID = undefined;
// Animate Gus's div
gusDiv.addEventListener("mouseenter", (e) => {
    if (gusGlitching) { return; }
    gusGlitching = true;
    console.log("mouse x: " + e.clientX);
    const target = document.getElementById("machine");
    const blockCharacter = "█";
    const originalText = target.innerText;
    target.style.color = "#eb2c47"
    let index = 0;

    intervalID = setInterval(() => {
        index = Math.round(Math.random() * target.innerText.length);
        let modified = originalText.slice(0,index).concat(blockCharacter).concat(originalText.slice(index + 2));
        target.innerText = modified;
    }, 300)
})

gusDiv.addEventListener("mouseleave", (e) => {
    if (!gusGlitching) { return; }
    gusGlitching = false; 
    document.getElementById("machine").style.color = "#DDDDDD"
    document.getElementById("machine").innerText = "machine code";
    clearInterval(intervalID);
})

// Animate Sebastian's div
// (Wave animation)

sebDiv.addEventListener("mouseenter", (e) => {
    if (wavePlaying) { return; }
    console.log("Starting wave animation");
    wavePlaying = true;

    let waveDiv = document.createElement("div");
    waveDiv.style.position = "absolute";
    waveDiv.style.left = 0;
    waveDiv.style.bottom = 0;
    waveDiv.style.width = "80%";
    waveDiv.style.height = "80%";
    waveDiv.style.backgroundImage = 'url("./data/sebastian_wave.png")';
    waveDiv.style.backgroundSize = "contain";
    waveDiv.style.backgroundRepeat = "no-repeat";
    waveDiv.style.backgroundPosition = "bottom";
    waveDiv.style.pointerEvents = "none";

    const waveFrames = [
        { left: "-40%" },
        { left: "100%" }
    ];

    const waveTiming = {
        duration: 2500,
        iterations: 1,
        fill: "forwards"
    };

    sebDiv.appendChild(waveDiv);
    const waveAnim = waveDiv.animate(waveFrames, waveTiming);
    if (waveDiv) { waveAnim.play(); }
    setTimeout(() => {
        waveAnim.cancel();
        if (sebDiv.contains(waveDiv)) sebDiv.removeChild(waveDiv);
        wavePlaying = false;
    }, 2500);
});

megDiv.addEventListener("mouseenter", (e) => {
    // Trash can animation?
})

megDiv.addEventListener("mouseleave", (e) => {
    // End trash can animation
})

