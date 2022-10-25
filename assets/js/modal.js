export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector('.modal h2'),
    btnClose: document.querySelector('.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.btnClose.onclick = () => {
    Modal.close()
}
window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event) {
    if (event.key === 'Escape') {
        console.log("esc pressionado")
        Modal.close()
    }
}