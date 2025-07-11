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

let sirenUp = false;

alexDiv.addEventListener("mouseenter", (e) => {
    if (sirenUp) { return; }
    // Siren pop-out
    let sirenImg = document.createElement("img");
    sirenImg.src = "./data/alex_siren.gif";
    sirenImg.style.width = "50px";
    sirenImg.style.height = "50px";
    sirenImg.style.position = "absolute";
    sirenImg.style.zIndex = "-1";
    sirenImg.style.left = "50%";
    sirenImg.style.top = "0";
    sirenImg.style.transform = "translate(-50%, -100%)";
    sirenImg.id = "siren";

    const movementFrames = [
        {transform: "translate(-50%, 0)"},
        {transform: "translate(-50%, -100%)"}
    ];

    const marginFrames = [
        {marginTop: "4%"},
        {marginTop: "70px"}
    ]

    const movementTiming = {
        duration: 1000,
        iterations: 1,
        fill: "forwards"
    }

    alexDiv.appendChild(sirenImg);
    const animationID = sirenImg.animate(movementFrames, movementTiming);
    alexDiv.animate(marginFrames, movementTiming);
    setTimeout(() => {
        sirenUp = true;
    }, 1000)
})

alexDiv.addEventListener("mouseleave", (e) => {
    // Retract and delete the siren image
    let sirenImg = document.getElementById("siren");
    // Sanity check
    if (!sirenImg || !sirenUp) { return; }

    const retractionFrames = [
        {transform: "translate(-50%, -100%)"},
        {transform: "translate(-50%, 0)"}
    ]

    const marginFrames = [
        {marginTop: "70px"},
        {marginTop: "4%"}
    ]

    const retractTiming = {
        duration: 1000,
        iterations: 1,
        fill: "forwards"
    }

    const animationID = sirenImg.animate(retractionFrames, retractTiming);
    alexDiv.animate(marginFrames, retractTiming);

    setTimeout(() => {
        sirenImg.remove();
        alexDiv.style.marginTop = "4%";
        sirenUp = false;
    }, 1000);
})