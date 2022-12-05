import anime from '/animejs/lib/anime.es.js';

let btnCanvaControl = document.querySelector("#btn-canva-control")

let canvaBar = document.querySelector(".canva-toggler")


anime({
    targets: '.canva-toggler',
    translateX: 250
});

function showmenu() {
    canvaBar.classList.toggle("canva-toggler");
}

btnCanvaControl.addEventListener("click", showmenu);