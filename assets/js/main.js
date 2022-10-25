import { Modal } from "./modal.js"
import { AlertError } from "./alert.js"
import { calculateIMC, check } from "./utils.js"

const buttonForm = document.querySelector("#button-form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

buttonForm.addEventListener("click", function(event) {
    event.preventDefault()

    const height = inputHeight.value
    const weight = inputWeight.value

    const finalCheck = check(height) || check(weight)

    if (finalCheck || finalCheck === NaN) {
        AlertError.open()
        return
    }

    AlertError.close()

    const finalResult = calculateIMC(weight, height)

    Modal.message.innerText = `Seu IMC é ${finalResult}`
    Modal.open()
    inputHeight.value = ""
    inputWeight.value = ""
})

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()