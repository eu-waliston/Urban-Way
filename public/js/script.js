let btnCanvaControl = document.querySelector("#btn-canva-control");

let canvaBar = document.querySelector(".canva-toggler");

function showmenu() {
  canvaBar.classList.toggle("canva-toggler");
}

btnCanvaControl.addEventListener("click", showmenu);

// Get the button:
let mybutton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', topFunction)