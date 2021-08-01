'use strict';
//  модуль расчета
function calculatePercent(periodValue){
    if (periodValue < 3) return 0;
    if (periodValue < 6) return 2;
    if (periodValue < 9) return 2.2;
    if (periodValue < 12) return 2.3;
    if (periodValue < 18) return 2.6;
    if (periodValue === 18) return 2.7;
//  больше 18 месяцев нельзя, или будет 2.7
    return 0;
}
function calculateDeposit(amountInputValue, periodInputValue){
    const percentValue = calculatePercent(periodInputValue);
// Sp — сумма процентов (доход),
// К — первоначальная сумма вклада (капитал),
// P — годовая процентная ставка,
// N — число периодов начисления процентов.
// d — количество дней начисления процентов по привлеченному вкладу,
// D — количество дней в календарном году (365 или 366).
// Sp = K * ((1 + P*d/D/100) стерпень N — 1)
    const monthInYear = 12;
    const periodAdd = 1;
    const profitValue = amountInputValue * ((1 + percentValue * periodInputValue / monthInYear / 100)**periodAdd - 1);
    const totalValue = amountInputValue + profitValue;
    return {
        totalValue,
        profitValue,
        percentValue,
    };
}
// const cashback = calculateDeposit(5000, 10000);
// console.log(cashback);
function handleSubmit(evt){
    evt.preventDefault();

    // specialAmountErrorEl.textContent = '';
    // otherAmountErrorEl.textContent = '';
    totalDepositEl.textContent = '';
    profitDepositEl.textContent = '';
    percentDepositEl.textContent = '';

    const amountInput = Number(amountInputEl.value);
    // if (Number.isNaN(amountInput)){
    //     specialAmountErrorEl.textContent = 'Неверное значение. Введите число, например: 10000';
    //     return;
    // }

    const periodInput = Number(periodInputEl.value);
    // if (Number.isNaN(periodInput)){
    //     otherAmountErrorEl.textContent = 'Неверное значение. Введите число, например: 10000';
    //     return;
    // }

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
// const specialAmountErrorEl = document.getElementById('special-amount-error');
// const otherAmountErrorEl = document.getElementById('other-amount-error');

//  выходные значения
const totalDepositEl = document.getElementById('total');
const profitDepositEl = document.getElementById('profit');
const percentDepositEl = document.getElementById('percent');
