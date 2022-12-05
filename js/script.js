const anime = require('animejs');

let btnCanvaControl = document.querySelector("#btn-canva-control")

let canvaBar = document.querySelector(".canva-toggler")

function showmenu() {
    canvaBar.classList.toggle("canva-toggler");
}

btnCanvaControl.addEventListener("click", showmenu);