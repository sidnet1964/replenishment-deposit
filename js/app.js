'use strict';
//  модуль расчета
function calculatePercent(periodValue){
    if (periodValue < 3) {return 0;}
    if (periodValue < 6) {return 2;}
    if (periodValue < 9) {return 2.2;}
    if (periodValue < 12) {return 2.3;}
    if (periodValue < 18) {return 2.6;}
    if (periodValue === 18) {return 2.7;}
//  больше 18 месяцев нельзя, или будет 2.7
    return 0;
}
function calculateDeposit(amountInputValue, periodInputValue){
    const percentValue = calculatePercent(periodInputValue);
    const monthInYear = 12;
    const totalValue = amountInputValue * ((1 + percentValue / (monthInYear * 100 ))**periodInputValue);
    const profitValue = totalValue - amountInputValue;
//  {x * (1+s/(12*100))^{m}}
//  где x — начальная сумма вклада, s — годовая ставка в процентах, m — срок вклада в месяцах.
    return {
        totalValue,
        profitValue,
        percentValue,
    };
}
function handleSubmit(evt){
    evt.preventDefault();

    amountErrorEl.textContent = '';
    periodErrorEl.textContent = '';
    totalDepositEl.textContent = '';
    profitDepositEl.textContent = '';
    percentDepositEl.textContent = '';

    const amountInput = Number(amountInputEl.value);
    if (Number.isNaN(amountInput)){
        amountErrorEl.textContent = 'Неверное значение. Введите число, например: 15000';
        return;
    }
    if (amountInput < 15000){
        amountErrorEl.textContent = 'Неверное значение. Минимальная сумма: 15000 ₽';
        return;
    }
    if (amountInput > 50000000){
        amountErrorEl.textContent = 'Неверное значение. Максимальная сумма: 50000000 ₽';
        return;
    }

    const periodInput = Number(periodInputEl.value);
    if (Number.isNaN(periodInput)){
        periodErrorEl.textContent = 'Неверное значение. Введите число месяцев, например: 3';
        return;
    }
    if (periodInput < 3){
        periodErrorEl.textContent = 'Неверное значение. Минимальный период: 3 месяца';
        return;
    }
    if (periodInput > 18){
        periodErrorEl.textContent = 'Неверное значение. Максимальный период: 18 месяцев';
        return;
    }

    const result = calculateDeposit(amountInput, periodInput);
    totalDepositEl.textContent = result.totalValue.toFixed(0);
    profitDepositEl.textContent = result.profitValue.toFixed(0);
    percentDepositEl.textContent = result.percentValue.toFixed(1);
}

const formEl = document.getElementById('deposit-form');
// formEl.onsubmit = handleSubmit;
formEl.addEventListener('submit', handleSubmit);

//  входные значения
const amountInputEl = document.getElementById('amount-input');
const periodInputEl = document.getElementById('period-input');

//  обработка ошибок
const amountErrorEl = document.getElementById('amount-error');
const periodErrorEl = document.getElementById('period-error');

//  выходные значения
const totalDepositEl = document.getElementById('total');
const profitDepositEl = document.getElementById('profit');
const percentDepositEl = document.getElementById('percent');
