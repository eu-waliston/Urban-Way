let btnCanvaControl = document.querySelector("#btn-canva-control")

let canvaBar = document.querySelector(".canva-toggler")


function showmenu() {
    canvaBar.classList.toggle("canva-toggler");

    // setTimeout(() => {
    //     canvaBar.classList.add("canva-toggler");

    // }, 3000)
}

btnCanvaControl.addEventListener("click", showmenu);



