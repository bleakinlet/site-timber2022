// Load in navbar.
let navbarElement = document.createElement("div");
navbarElement.id = "navbar";
document.getElementById("website-container").prepend(navbarElement)
$("#navbar").load("navbar.html");

// Load in Moosy.
let moosyElement = document.createElement("div");
moosyElement.id = "moosy";
document.getElementById("website-container").prepend(moosyElement);
$("#moosy").load("moosy.html");

let explosionImage = new Image();
explosionImage.src = "../images/explode.gif";

const playExplosion = () => {
    let explosionAudio = new Audio();
    explosionAudio.volume = 0.3;
    explosionAudio.src = "https://cdn.discordapp.com/attachments/975863522355453984/1004273754412687390/eplode.mp3";
    explosionAudio.play();
    
    let explosion = document.createElement("img")
    explosion.src = explosionImage.src + "?" + Math.random();
    explosion.className = "explosion";
    document.getElementById("explosions").appendChild(explosion);

    setTimeout(() => {
        document.getElementById("explosions").removeChild(explosion);
    }, 2000)
};