export const AlertError = {
    error: document.querySelector(".error-alert"),
    open() {
        AlertError.error.classList.add('open')
    },
    close() {
        AlertError.error.classList.remove('open')
    },
}