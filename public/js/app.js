import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalBtn = document.querySelector(".modal button");

// open modal when button clicked
const checkBtn = document.querySelectorAll(".actions a.check");
checkBtn.forEach(button => {
    button.addEventListener("click", handleClick);
})

const deleteBtn = document.querySelectorAll(".actions a.delete");
deleteBtn.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false));
})

function handleClick(event, check = true) {
    modalTitle.innerHTML = check ? "Marcar como lida" : "Excluir esta pergunta";
    modalDescription.innerHTML = check ? "Deseja marcar esta pergunta como lida?" : "Tem certeza que você deseja excluir esta pergunta?";
    modalBtn.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir";

    check ? modalBtn.classList.remove("red") : modalBtn.classList.add("red");

    modal.open();

}
