'use strict';

function handleSubmit(evt){
    evt.preventDefault();

    // phoneErrorEl.textContent = '';
    // emailErrorEl.textContent = '';
    // totalDepositEl.textContent = '';
    // profitDepositEl.textContent = '';
    // percentDepositEl.textContent = '';

    const phone = phoneInputEl.value.trim();
    const email = emailInputEl.value.trim();

    const data = {
        phone,
        email,
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:9999/api/lection/cards');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleSuccess;
    xhr.onerror = handleError;
    xhr.send((JSON.stringify(data)));
}
function handleSuccess(evt){
    if (evt.target.status !== 200) {
        // TODO: handle error
        return;
    }

    const data = JSON.parse(evt.target.responseText);
    // TODO: work with data
}

function handleError(evt){
    // TODO: handle error
}

const formEl = document.getElementById('card-form');
formEl.addEventListener('submit', handleSubmit);

//  входные значения
const phoneInputEl = document.getElementById('phone-input');
const emailInputEl = document.getElementById('email-input');

//  обработка ошибок
const phoneErrorEl = document.getElementById('phone-error');
const emailErrorEl = document.getElementById('email-error');

//  выходные значения
// const totalDepositEl = document.getElementById('total');
// const profitDepositEl = document.getElementById('profit');
// const percentDepositEl = document.getElementById('percent');
