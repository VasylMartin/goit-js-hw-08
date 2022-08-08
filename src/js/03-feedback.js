import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'
const form = document.querySelector('.feedback-form')
const dataForm = {}


form.addEventListener('input', throttle(onInput, 500))
form.addEventListener('submit', onFormSubmit)

updForm()

function onInput() {
    dataForm.email = form.elements.email.value
    dataForm.message = form.elements.message.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm))
}

function onFormSubmit(event) {
    event.preventDefault()

    if (event.currentTarget.email.value == 0 || event.currentTarget.message.value == 0) {
        alert("Fill the form")
        return false
    }

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

// import throttle from 'lodash.throttle';

// const formEl = document.querySelector(".feedback-form");
// const inputEl = document.querySelector(".feedback-form input");
// const textareaEl = document.querySelector(".feedback-form textarea");

// const LOCAL_KEY = "feedback-form-state";

// const formData = localStorage.getItem(LOCAL_KEY) ? JSON.parse(localStorage.getItem(LOCAL_KEY)):{};

// const saveItem = localStorage.getItem(LOCAL_KEY);
//         if (saveItem) {
//             const itemParse = JSON.parse(saveItem);
//             inputEl.value = itemParse.email || "";
//             textareaEl.value = itemParse.message || "";
//         }
//         else {
//             inputEl.value = "";
//             textareaEl.value = "";
//         }
// formEl.addEventListener("input", throttle(handleSaveInputValue, 500));
// formEl.addEventListener('submit', handleSubmitButtonClick);
// function handleSaveInputValue(event) {
//     formData[event.target.name] = event.target.value;
//     localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
// }
// function handleSubmitButtonClick(event) {
//     event.preventDefault();
//     console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
//     localStorage.removeItem(LOCAL_KEY);
//     event.currentTarget.reset();
// }
