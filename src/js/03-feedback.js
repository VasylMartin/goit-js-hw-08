import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'
const form = document.querySelector('.feedback-form')
const dataForm = {}


form.addEventListener('input', throttle(onInput, 500))
form.addEventListener('submit', onFormSubmit)

updForm()

function onInput(event) {
    dataForm.email = event.currentTarget.email.value
    dataForm.message = event.currentTarget.message.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm))
}

function onFormSubmit(event) {
    event.preventDefault()

    dataForm.email = event.currentTarget.email.value
    dataForm.message = event.currentTarget.message.value
    console.log(dataForm)

    localStorage.removeItem(STORAGE_KEY)
    form.reset()
}

function updForm() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedData) {
        form.email.value = savedData.email
        form.message.value = savedData.message
    }
}

console.log(dataForm)

