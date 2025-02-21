// source code for the keys page
// copyright j. schere, 2/20/2025

console.log("what, did you think you'd find my private key here or something?");

function generateGarbage(lengthOfGarbage) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < lengthOfGarbage; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function regenerate(innerText, numGarbage) {
    return "=" + generateGarbage(numGarbage) + "= " + innerText + " =" + generateGarbage(numGarbage) + "=";
}

let subtitleContent = document.getElementById("subtitle").innerHTML;

function regenSubtitle() {
    let subtitle = document.getElementById("subtitle");
    subtitle.innerHTML = regenerate(subtitleContent, 5);
}
function regenButton() {
    let pubButton = document.getElementById("pubbutton")
    pubButton.innerHTML = regenerate("click here", 3);
}

regenSubtitle();
regenButton();
setInterval(regenSubtitle, 1000);
setInterval(regenButton, 1000);

// code for the collapsible section (thanks w3schools!)
var coll = document.getElementsByClassName("collapsible");
var i;
var collAnims = [];
const rainbowFrames = [
    {color: "#ff0000"},
    {color: "#ff7f00"},
    {color: "#ffff00"},
    {color: "#00ff00"},
    {color: "#0000ff"},
    {color: "#ff00ff"},
    {color: "#ff0000"}
];
for (i = 0; i < coll.length; i++) {
    collAnims[i] = coll[i].nextElementSibling.animate(rainbowFrames, {
        duration: 5000,
        iterations: Infinity
    });
    coll[i].addEventListener("click", function(i) {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            collAnims[i].pause();
        } else {
            content.style.display = "block";
            collAnims[i].play();
        }
    });
}