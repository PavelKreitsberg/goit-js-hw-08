const throttle = require('lodash.throttle');

refs = {
    key: "feedback-form-state",
    form: document.querySelector('.feedback-form'),
    formInput: document.querySelector('.feedback-form input'),
    formTextarea: document.querySelector('.feedback-form textarea'),
    formBtnSubmit: document.querySelector('.feedback-form button'),
}

const userData = {
    email: '',
    massage: '',
}

refs.formInput.addEventListener('input', throttle((e) => {

    userData.email = e.currentTarget.value

    localStorage.setItem(refs.key, JSON.stringify(userData));
}, 500))

refs.formTextarea.addEventListener('input', throttle((e) => {

    userData.massage = e.currentTarget.value

    localStorage.setItem(refs.key, JSON.stringify(userData));
}, 500))

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem(refs.key)));

    e.currentTarget.reset();

    localStorage.removeItem(refs.key);
})

const populateFormFields = () => {
    if (localStorage.getItem(refs.key)) {
        refs.formInput.value = JSON.parse(localStorage.getItem(refs.key)).email;

        refs.formTextarea.value = JSON.parse(localStorage.getItem(refs.key)).massage;
    }
}

populateFormFields();






