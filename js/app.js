'use strict';
function calculateCashback(specialCategoryPurchases, otherCategoryPurchases){
    const specialCategoryPercent = 0.03;
    const otherCategoryPercent = 0.01;
    const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
    const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
    let totalCashback = specialCategoryCashback + otherCategoryCashback;
    const limit = 10000;
    return {
        specialCategoryCashback,
        otherCategoryCashback,
        totalCashback: totalCashback > limit ? limit : totalCashback,
    };
}
// const specialCategoryPurchases = 250000;
// const otherCategoryPurchases = 700000;
const cashback = calculateCashback(5000, 10000);
console.log(cashback);
function handleSubmit(evt){
    evt.preventDefault();

    specialAmountErrorEl.textContent = '';
    otherAmountErrorEl.textContent = '';
    specialCashbackEl.textContent = '';
    otherCashbackEl.textContent = '';
    totalCashbackEl.textContent = '';

    const specialAmount = Number(specialAmountInputEl.value);
    if (Number.isNaN(specialAmount)){
        specialAmountErrorEl.textContent = 'Неверное значение. Введите число, например: 10000';
        return;
    }

    const otherAmount = Number(otherAmountInputEl.value);
    if (Number.isNaN(otherAmount)){
        otherAmountErrorEl.textContent = 'Неверное значение. Введите число, например: 10000';
        return;
    }

    const result = calculateCashback(specialAmount, otherAmount);
    specialCashbackEl.textContent = result.specialCategoryCashback.toFixed(0);
    otherCashbackEl.textContent = result.otherCategoryCashback.toFixed(0);
    totalCashbackEl.textContent = result.totalCashback.toFixed(0);
}

const formEl = document.getElementById('cashback-form');
// formEl.onsubmit = handleSubmit;
formEl.addEventListener('submit', handleSubmit);

const specialAmountInputEl = document.getElementById('special-amount-input');
const otherAmountInputEl = document.getElementById('other-amount-input');

const specialAmountErrorEl = document.getElementById('special-amount-error');
const otherAmountErrorEl = document.getElementById('other-amount-error');
const specialCashbackEl = document.getElementById('special-cashback');
const otherCashbackEl = document.getElementById('other-cashback');
const totalCashbackEl = document.getElementById('total-cashback');

//  number - только числа, добавляет стрелки для +1/-1
//  checkbox - квадратик для птички
//  radio - кружочек для точки
//  $(`#cashback-form`).on... - события формы
//  const formE1 = $(`#cashback-form`)
//  undefined
//  monitorEvents(formE1, 'click')
//  undefined
// VM9:1 click PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}
// VM9:1 click PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}
// VM9:1 click PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}
