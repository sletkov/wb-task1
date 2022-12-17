//HANDLE SHOW LABEL WHEN FOCUS ON RECIPIENT INPUT
import {orderBtn} from './order.js';

const nameInput = document.querySelector('#name-input');
const surnameInput = document.querySelector('#surname-input');
const emailInput = document.querySelector('#email-input');
const phoneInput = document.querySelector('#phone-input');
const innInput = document.querySelector('#inn-input');

const nameLabel = document.querySelector('#name-label');
const surnameLabel = document.querySelector('#surname-label');
const emailLabel = document.querySelector('#email-label');
const phoneLabel = document.querySelector('#phone-label');
const innLabel = document.querySelector('#inn-label');

const innPrompt = document.querySelector('#inn-prompt');

nameInput.addEventListener('focus', (e) => {
    nameLabel.style.display = "block";
    e.target.placeholder = "Укажите имя";
});

nameInput.addEventListener('blur', (e) => {
    if(e.target.value.length === 0) {
        nameError.style.display = "none";
        nameInput.style.color = "#A0A0A4";
    }

    nameLabel.style.display = "none";
    e.target.placeholder = "Имя";
});

surnameInput.addEventListener('focus', (e) => {
    surnameLabel.style.display = "block";
    e.target.placeholder = "Введите фамилию";
});

surnameInput.addEventListener('blur', (e) => {
    if(e.target.value.length === 0) {
        surnameError.style.display = "none";
        surnameInput.style.color = "#A0A0A4";
    }

    surnameLabel.style.display = "none";
    e.target.placeholder = "Фамилия";
});

emailInput.addEventListener('focus', (e) => {
    emailLabel.style.display = "block";
    e.target.placeholder = "Укажите электронную почту";
});

emailInput.addEventListener('blur', (e) => {
    if(e.target.value.length === 0) {
        emailError.style.display = "none";
        emailInput.style.color = "#A0A0A4";
    }

    emailLabel.style.display = "none";
    e.target.placeholder = "Почта";
});

phoneInput.addEventListener('focus', (e) => {
    phoneLabel.style.display = "block";
    e.target.placeholder = "Укажите номер телефона";
});

phoneInput.addEventListener('blur', (e) => {
    if(e.target.value.length === 0) {
        phoneError.style.display = "none";
        phoneInput.style.color = "#A0A0A4";
    }

    phoneLabel.style.display = "none";
    e.target.placeholder = "Телефон";
});

innInput.addEventListener('focus', (e) => {
    innLabel.style.display = "block";
    e.target.placeholder = "Укажите ИНН";
});

innInput.addEventListener('blur', (e) => {
    if(e.target.value.length === 0) {
        innError.style.display = "none";
        innInput.style.color = "#A0A0A4";
        innPrompt.style.display = "block";
    }

    innLabel.style.display = "none";
    e.target.placeholder = "ИНН";
});

//VALIDATION RECIPIENT FORM
const nameError = document.querySelector('#name-error');
const surnameError = document.querySelector('#surname-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');
const innError = document.querySelector('#inn-error');

nameInput.addEventListener('input', (e) => {
    if (!validateName(e.target.value)) {
        nameError.style.display = "block";
        nameInput.style.color = "#F55123";
    } else {
        nameError.style.display = "none";
        nameInput.style.color = "#A0A0A4";
    }
});

surnameInput.addEventListener('input', (e) => {
    if (!validateSurname(e.target.value)) {
        surnameError.style.display = "block";
        surnameInput.style.color = "#F55123";
    } else {
        surnameError.style.display = "none";
        surnameInput.style.color = "#A0A0A4";
    }
});

emailInput.addEventListener('input', (e) => {
    if (!validateEmail(e.target.value)) {
        emailError.style.display = "block";
        emailInput.style.color = "#F55123";
    } else {
        emailError.style.display = "none";
        emailInput.style.color = "#A0A0A4";
    }
});

phoneInput.addEventListener('input', (e) => {
    if (!validatePhone(e.target.value)) {
        phoneError.style.display = "block";
        phoneInput.style.color = "#F55123";
    } else {
        phoneError.style.display = "none";
        phoneInput.style.color = "#A0A0A4";
    }
});

innInput.addEventListener('input', (e) => {
    if (!validateInn(e.target.value)) {
        innError.style.display = "block";
        innInput.style.color = "#F55123";
        innPrompt.style.display = "none";
    } else {
        innError.style.display = "none";
        innInput.style.color = "#A0A0A4";
        innPrompt.style.display = "block";
    }
});

const validateName = (name) => {
    if(String(name).length == 0) return true;

    return String(name)
      .toLowerCase()
      .match(
        /^[а-я]{1,}$/
      ) !== null;

    };

const validateSurname = (surname) => {
    if(String(surname).length == 0) return true;

    return String(surname)
      .toLowerCase()
      .match(
        /^[а-я]{1,}$/
      ) !== null;

    };

const validateEmail = (email) => {
    if(String(email).length == 0) return true;

    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        
    };

const validatePhone = (phone) => {
    if(String(phone).length == 0) return true;
    
    if (String(phone).length <= 30) {
        return String(phone)
        .toLowerCase()
        .match(
            /^[+]{1}[1-9]{1}[\s][1-9]{3}[\s][1-9]{3}[\s][1-9]{2}[\s][1-9]{2}$/
        ) !== null;
    }

    return false;
};

const validateInn = (inn) => {
    if(String(inn).length == 0) return true;

    if (String(inn).length <= 10) {
        return String(inn)
        .toLowerCase()
        .match(
            /^[1-9]{1}[0-9]{5,9}$/
        ) !== null;
    }
    
    return false;
};


orderBtn.addEventListener('click', () => {
    if (nameInput.value == "" || surnameInput.value == "" || emailInput.value == "" || phoneInput.value == "" || innInput.value == "") {
        
        if (innInput.value == "" || innInput.value == null) {
            innError.style.display = "block";
            innInput.style.color = "#F55123";
            innPrompt.style.display = "none";
            innInput.focus();
        }

        if (phoneInput.value == "" || phoneInput.value == null) {
            phoneError.style.display = "block";
            phoneInput.style.color = "#F55123";
            phoneInput.focus();
        }

        if (emailInput.value == "" || emailInput.value == null) {
            emailError.style.display = "block";
            emailInput.style.color = "#F55123";
            emailInput.focus();
        }

        if (surnameInput.value == "" || surnameInput.value == null) {
            surnameError.style.display = "block";
            surnameInput.style.color = "#F55123";
            surnameInput.focus();
        }

        if (nameInput.value == "" || nameInput.value == null) {
            nameError.style.display = "block";
            nameInput.style.color = "#F55123";
            nameInput.focus();
        }

    }
});