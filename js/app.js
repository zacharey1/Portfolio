const overlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".modal-close");
const cardImg = document.querySelectorAll(".card-img");
const modalImg = document.querySelector(".modal-img");

function displayModal () {
    overlay.classList.remove("hidden");
}

cardImg.forEach(
    img => {
        img.addEventListener('click', e => {
            displayModal();
            modalImg.src = e.target.src;
        })
    }
)

modalClose.addEventListener('click', e => {
    overlay.classList.add("hidden");  
})