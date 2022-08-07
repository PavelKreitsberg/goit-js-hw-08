// const throttle = require('lodash.throttle');
import throttle from "lodash.throttle";

refs = {
    KEY: "feedback-form-state",
    form: document.querySelector('.feedback-form'),
    formInput: document.querySelector('.feedback-form input'),
    formTextarea: document.querySelector('.feedback-form textarea'),
    formBtnSubmit: document.querySelector('.feedback-form button'),
}

const userData = {
    email: '',
    massage: '',
}

const populateFormFields = () => {
    if (localStorage.getItem(refs.KEY)) {
        refs.formInput.value = JSON.parse(localStorage.getItem(refs.KEY)).email;

        refs.formTextarea.value = JSON.parse(localStorage.getItem(refs.KEY)).massage;
    }
}

populateFormFields();

refs.formInput.addEventListener('input', throttle((e) => {

    userData.email = e.currentTarget.value

    localStorage.setItem(refs.KEY, JSON.stringify(userData));
}, 500))

refs.formTextarea.addEventListener('input', throttle((e) => {

    userData.massage = e.currentTarget.value

    localStorage.setItem(refs.KEY, JSON.stringify(userData));
}, 500))

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem(refs.KEY)));

    e.currentTarget.reset();

    localStorage.removeItem(refs.KEY);
})