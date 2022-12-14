import throttle from "lodash.throttle";

const refs = {
    KEY: "feedback-form-state",
    form: document.querySelector('.feedback-form'),
    formInput: document.querySelector('.feedback-form input'),
    formTextarea: document.querySelector('.feedback-form textarea'),
    formBtnSubmit: document.querySelector('.feedback-form button'),
}

const userData = {
    email: '',
    message: '',
}

const populateFormFields = () => {

    const savedData = localStorage.getItem(refs.KEY)

    if (savedData) {

        const {email, message} = JSON.parse(savedData)
        
        refs.form.email.value = email;
        refs.form.message.value = message;
        userData.email = email;
        userData.message = message;
    }
}

populateFormFields();


refs.form.addEventListener('input', throttle((e) => {

    userData[e.target.name] = e.target.value

    localStorage.setItem(refs.KEY, JSON.stringify(userData));
}, 500))

refs.form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (refs.formInput.value === '' || refs.formTextarea.value === '') {
        alert('Fill the form`s fields');
    } else {
        
        console.log(JSON.parse(localStorage.getItem(refs.KEY)));

        userData.email = '';
        userData.message = '';
        
        e.currentTarget.reset();
        
        localStorage.removeItem(refs.KEY);
    }

})