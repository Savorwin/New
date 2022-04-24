"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof(str) === "string") {
    let reverse = str.split('').reverse().join('');
    return reverse;
    } else return "Ошибка!";
}
reverse(someString);



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : 'Доступные валюты: \n';

    arr.forEach(function(item) {
        if (item !== missingCurr) {
        str += `${item}\n`;
        }
    });
        return str;
    }

availableCurr([...baseCurrencies, ...additionalCurrencies]);