const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".modal-close");
const cardImg = document.querySelector(".card-img");
const modalImg = document.querySelector(".modal-img");

function displayModal () {
    overlay.classList.remove("hidden");
    // modalImg.src = "cardImg.src";
}

cardImg.addEventListener('click', e => {
    displayModal();
})