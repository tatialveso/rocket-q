import Modal from './modal.js';

const modal = Modal();

// open modal when button clicked
const checkBtn = document.querySelectorAll(".actions a.check");
checkBtn.forEach(button => {
    button.addEventListener("click", event => {
        modal.open();
    })
})

const deleteBtn = document.querySelectorAll(".actions a.delete");
deleteBtn.forEach(button => {
    button.addEventListener("click", event => {
        modal.open();
    })
})
