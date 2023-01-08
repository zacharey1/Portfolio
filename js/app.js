const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".modal-close");
const cardImg = document.querySelector(".card-img");
const modalImg = document.querySelector(".modal-img");

function displayModal () {
    overlay.classList.remove("hidden");
}

cardImg.addEventListener('click', e => {
    displayModal();
    // e.target.modalImg.src = "e.target.cardImg.src";
})

modalClose.addEventListener('click', e => {
    overlay.classList.add("hidden");  
})